const isWechatGame = typeof wx !== 'undefined' && typeof wx.createCanvas === 'function'
const systemInfo = isWechatGame ? wx.getSystemInfoSync() : {}
const canvas = isWechatGame ? wx.createCanvas() : document.getElementById('gameCanvas')
const ctx = canvas.getContext('2d')

const WIDTH = isWechatGame ? (systemInfo.windowWidth || systemInfo.screenWidth || canvas.width || 375) : 390
const HEIGHT = isWechatGame ? (systemInfo.windowHeight || systemInfo.screenHeight || canvas.height || 667) : 844
canvas.width = WIDTH
canvas.height = HEIGHT

const clamp = (value, min, max) => Math.max(min, Math.min(max, value))
const dist = (a, b) => Math.hypot(a.x - b.x, a.y - b.y)
const rand = (min, max) => min + Math.random() * (max - min)
const nextFrame = typeof requestAnimationFrame === 'function'
  ? requestAnimationFrame
  : (callback) => setTimeout(callback, 1000 / 60)

const ALL_TEAMS = [
  ['MEX', '墨西哥', '#0a8f54', '#ffffff'], ['RSA', '南非', '#f3c636', '#178c4f'], ['KOR', '韩国', '#ffffff', '#e63b4a'], ['CZE', '捷克', '#ffffff', '#2f6dd7'],
  ['CAN', '加拿大', '#f7f7f7', '#e43a3a'], ['BIH', '波黑', '#1e6bd6', '#f5d44a'], ['QAT', '卡塔尔', '#8a1538', '#ffffff'], ['SUI', '瑞士', '#e63b3b', '#ffffff'],
  ['BRA', '巴西', '#ffe658', '#23b26b'], ['MAR', '摩洛哥', '#d71920', '#138a55'], ['HAI', '海地', '#2458c6', '#d83030'], ['SCO', '苏格兰', '#2458c6', '#ffffff'],
  ['USA', '美国', '#ffffff', '#265cb7'], ['AUS', '澳大利亚', '#f5cf35', '#1e8b62'], ['TUR', '土耳其', '#e53b3b', '#ffffff'], ['PAR', '巴拉圭', '#ffffff', '#d63d3d'],
  ['GER', '德国', '#ffffff', '#111111'], ['CIV', '科特迪瓦', '#f47b2a', '#ffffff'], ['ECU', '厄瓜多尔', '#f6d13a', '#225bbb'], ['CUW', '库拉索', '#2458d8', '#f4d23e'],
  ['NED', '荷兰', '#f37a28', '#ffffff'], ['JPN', '日本', '#ffffff', '#d7384f'], ['SWE', '瑞典', '#2765d7', '#f5d23a'], ['TUN', '突尼斯', '#ffffff', '#d71920'],
  ['BEL', '比利时', '#f5d23a', '#111111'], ['EGY', '埃及', '#ffffff', '#d63838'], ['IRN', '伊朗', '#ffffff', '#1f9d62'], ['NZL', '新西兰', '#111111', '#ffffff'],
  ['ESP', '西班牙', '#d92727', '#f5d23a'], ['KSA', '沙特', '#138a55', '#ffffff'], ['URU', '乌拉圭', '#8fd3ff', '#ffffff'], ['CPV', '佛得角', '#2958c8', '#f1d447'],
  ['FRA', '法国', '#2850a4', '#ffffff'], ['SEN', '塞内加尔', '#1f9d62', '#f5d23a'], ['IRQ', '伊拉克', '#d92727', '#ffffff'], ['NOR', '挪威', '#d92727', '#274b9f'],
  ['ARG', '阿根廷', '#e9fbff', '#57a8ff'], ['ALG', '阿尔及利亚', '#ffffff', '#13945e'], ['JOR', '约旦', '#ffffff', '#d92727'], ['AUT', '奥地利', '#e43a3a', '#ffffff'],
  ['POR', '葡萄牙', '#d92727', '#16864b'], ['COD', '刚果（金）', '#42b7ef', '#e43a3a'], ['UZB', '乌兹别克', '#ffffff', '#45a4e8'], ['COL', '哥伦比亚', '#f5d23a', '#244fbe'],
  ['ENG', '英格兰', '#ffffff', '#d92727'], ['CRO', '克罗地亚', '#ffffff', '#d92727'], ['GHA', '加纳', '#f5d23a', '#16864b'], ['PAN', '巴拿马', '#ffffff', '#d92727']
].map((team, index) => ({
  id: index,
  short: team[0],
  name: team[1],
  main: team[2],
  sub: team[3],
  text: pickTextColor(team[2])
}))

let TEAM = {
  player: ALL_TEAMS[8],
  rival: ALL_TEAMS[36]
}

const GROUP_NAMES = 'ABCDEFGHIJKL'.split('')
const STAGE_KEYS = ['group', 'r32', 'r16', 'qf', 'sf', 'final']
const STAGE_LABELS = {
  group: '小组赛',
  r32: '32进16',
  r16: '16进8',
  qf: '8进4',
  sf: '半决赛',
  final: '决赛'
}
const KNOCKOUT_KEYS = STAGE_KEYS.slice(1)

function pickTextColor(color) {
  const hex = color.replace('#', '')
  const r = parseInt(hex.slice(0, 2), 16)
  const g = parseInt(hex.slice(2, 4), 16)
  const b = parseInt(hex.slice(4, 6), 16)
  return r * 0.299 + g * 0.587 + b * 0.114 > 172 ? '#1e3850' : '#ffffff'
}

class WorldCupStrike {
  constructor() {
    this.scale = Math.min(WIDTH / 390, HEIGHT / 844)
    this.field = {
      x: WIDTH * 0.07,
      y: HEIGHT * 0.16,
      w: WIDTH * 0.86,
      h: HEIGHT * 0.72
    }
    this.goalWidth = this.field.w * 0.38
    this.pointer = { active: false, x: 0, y: 0, startX: 0, startY: 0 }
    this.effects = []
    this.confetti = []
    this.lastTime = Date.now()
    this.teamIndex = 8
    this.selectionHitTeam = null
    this.teamSlide = null
    this.tournament = null
    this.tournamentButtons = []
    this.currentStageView = 'group'
    this.currentTournamentMatch = null
    this.pendingTournamentMatch = null
    this.autoStartTournamentMatch = false
    this.tournamentNotice = ''
    this.tournamentPopup = null
    this.groupViewIndex = 0
    this.startTeamSelect()
    if (typeof window !== 'undefined') window.__worldCupGame = this
    if (typeof globalThis !== 'undefined') globalThis.__worldCupGame = this
    this.bindInput()
    this.loop()
  }

  startTeamSelect() {
    this.mode = 'select'
    this.players = []
    this.ball = null
    this.selected = null
    this.winner = null
    this.message = '选择你的世界杯球队'
    this.messageTimer = 999
    this.screenShake = 0
    this.clock = 0
    this.teamCards = []
    this.selectionDrag = null
    this.selectionHitTeam = null
    this.teamSlide = null
    if (TEAM && TEAM.player && typeof TEAM.player.id === 'number') {
      this.teamIndex = TEAM.player.id
    }
  }

  chooseTeam(team) {
    TEAM = {
      player: team,
      rival: ALL_TEAMS.find((item) => item.id !== team.id) || ALL_TEAMS[0]
    }
    this.createTournament(team)
    this.mode = 'tournament'
    this.currentStageView = 'group'
    this.pendingTournamentMatch = this.advanceTournamentUntilPlayerMatch()
    this.tournamentNotice = this.pendingTournamentMatch
      ? `下一场：${this.pendingTournamentMatch.teamA.name} vs ${this.pendingTournamentMatch.teamB.name}`
      : '赛程已完成'
    this.groupViewIndex = this.getPlayerGroupIndex()
    this.tournamentPopup = null
    this.confetti = []
    this.effects = []
    this.screenShake = 0
    for (let i = 0; i < 38; i += 1) this.addConfetti(rand(0, WIDTH), rand(-HEIGHT, HEIGHT * 0.2))
  }

  moveTeamSelection(step) {
    if (this.teamSlide) return
    const total = ALL_TEAMS.length
    const dir = step > 0 ? 1 : -1
    this.teamSlide = {
      from: this.teamIndex,
      to: (this.teamIndex + dir + total) % total,
      dir,
      t: 0,
      duration: 0.26
    }
  }

  resetMatch() {
    this.mode = 'match'
    this.turn = 'player'
    this.state = 'aim'
    this.winner = null
    this.turnCount = 1
    this.message = '选择我方球员，拖拽弹射'
    this.messageTimer = 2.4
    this.aiTimer = 0
    this.selected = null
    this.shotOwner = null
    this.screenShake = 0
    this.clock = 0
    this.damageCooldowns = {}
    this.makeBodies()
  }

  createTournament(playerTeam) {
    const groups = GROUP_NAMES.map((name, index) => {
      const teams = ALL_TEAMS.slice(index * 4, index * 4 + 4)
      return {
        name,
        teams,
        standings: teams.map((team) => ({
          team,
          played: 0,
          wins: 0,
          draws: 0,
          losses: 0,
          gf: 0,
          ga: 0,
          gd: 0,
          pts: 0
        }))
      }
    })

    const matches = {
      group: [],
      r32: [],
      r16: [],
      qf: [],
      sf: [],
      final: []
    }

    const pairings = [[0, 1], [2, 3], [0, 2], [1, 3], [0, 3], [1, 2]]
    let id = 1
    for (const group of groups) {
      pairings.forEach((pair, index) => {
        matches.group.push(this.makeTournamentMatch(`G${id}`, 'group', group.name, Math.floor(index / 2) + 1, group.teams[pair[0]], group.teams[pair[1]]))
        id += 1
      })
    }

    this.tournament = {
      playerTeam,
      groups,
      matches,
      generatedStages: { r32: false, r16: false, qf: false, sf: false, final: false },
      champion: null,
      finished: false,
      playerEliminated: false,
      playerActive: true,
      playerPathDone: false,
      latestRoundResults: []
    }
  }

  makeTournamentMatch(id, stage, groupName, round, teamA, teamB) {
    return {
      id,
      stage,
      groupName,
      round,
      teamA,
      teamB,
      scoreA: null,
      scoreB: null,
      played: false,
      winner: null,
      playerMatch: !!this.tournamentTeamIsPlayer(teamA) || !!this.tournamentTeamIsPlayer(teamB)
    }
  }

  tournamentTeamIsPlayer(team) {
    return this.tournament && this.tournament.playerTeam && team && team.id === this.tournament.playerTeam.id
  }

  advanceTournamentUntilPlayerMatch() {
    if (!this.tournament || this.tournament.finished) return null
    const groupMatch = this.getNextPlayerGroupMatch()
    if (groupMatch) return groupMatch

    if (!this.tournament.generatedStages.r32) this.completeRemainingGroupMatchesAndGenerateKnockout()
    if (!this.tournament.playerActive) return this.finishTournamentForEliminatedPlayer()

    for (const stage of KNOCKOUT_KEYS) {
      if (!this.tournament.generatedStages[stage]) continue
      const playerMatch = this.tournament.matches[stage].find((match) => !match.played && this.isPlayerTournamentMatch(match))
      if (playerMatch) return playerMatch

      const stageDone = this.tournament.matches[stage].length && this.tournament.matches[stage].every((match) => match.played)
      if (stage === 'final' && stageDone) {
        this.tournament.champion = this.tournament.matches.final[0].winner
        this.tournament.finished = true
        return null
      }
      if (stage !== 'final' && stageDone) {
        const nextStage = KNOCKOUT_KEYS[KNOCKOUT_KEYS.indexOf(stage) + 1]
        if (!this.tournament.generatedStages[nextStage]) this.generateNextKnockoutStage(stage, nextStage)
      }
    }
    return this.finishTournamentForEliminatedPlayer()
  }

  getNextPlayerGroupMatch() {
    return this.tournament.matches.group.find((match) => !match.played && this.isPlayerTournamentMatch(match)) || null
  }

  getPlayerGroupIndex() {
    if (!this.tournament || !this.tournament.playerTeam) return 0
    return Math.max(0, this.tournament.groups.findIndex((group) => group.teams.some((team) => team.id === this.tournament.playerTeam.id)))
  }

  simulatePeerMatchesFor(match) {
    if (!match || !this.tournament) return []
    let peers = []
    if (match.stage === 'group') {
      peers = this.tournament.matches.group.filter((item) => item.round === match.round && item.id !== match.id && !item.played)
    } else {
      peers = this.tournament.matches[match.stage].filter((item) => item.id !== match.id && !item.played)
    }
    peers.forEach((item) => this.simulateTournamentMatch(item))
    return peers
  }

  buildRoundPopup(match, peerMatches) {
    if (!match || !peerMatches || !peerMatches.length) return null
    const title = match.stage === 'group'
      ? `小组赛第 ${match.round} 轮战报`
      : `${STAGE_LABELS[match.stage]} 战报`
    return {
      title,
      subtitle: match.stage === 'group' ? '同轮其他比赛结果' : '同阶段其他对阵结果',
      matches: peerMatches.slice()
    }
  }

  completeRemainingGroupMatchesAndGenerateKnockout() {
    const remaining = this.tournament.matches.group.filter((match) => !match.played)
    remaining.forEach((match) => this.simulateTournamentMatch(match))
    this.generateRoundOf32()
    this.tournament.playerActive = this.tournament.matches.r32.some((match) => this.isPlayerTournamentMatch(match))
    if (!this.tournament.playerActive) this.tournament.playerEliminated = true
  }

  finishTournamentForEliminatedPlayer() {
    for (const stage of KNOCKOUT_KEYS) {
      if (!this.tournament.generatedStages[stage]) continue
      this.tournament.matches[stage].filter((match) => !match.played).forEach((match) => this.simulateTournamentMatch(match))
      if (stage !== 'final') {
        const nextStage = KNOCKOUT_KEYS[KNOCKOUT_KEYS.indexOf(stage) + 1]
        if (!this.tournament.generatedStages[nextStage] && this.tournament.matches[stage].every((match) => match.played)) {
          this.generateNextKnockoutStage(stage, nextStage)
        }
      }
    }
    const finalMatch = this.tournament.matches.final[0]
    if (finalMatch && finalMatch.played) {
      this.tournament.champion = finalMatch.winner
      this.tournament.finished = true
    }
    this.tournament.playerPathDone = true
    return null
  }

  isPlayerTournamentMatch(match) {
    return this.tournamentTeamIsPlayer(match.teamA) || this.tournamentTeamIsPlayer(match.teamB)
  }

  simulateTournamentMatch(match) {
    if (!match || match.played) return
    const strengthA = this.teamStrength(match.teamA)
    const strengthB = this.teamStrength(match.teamB)
    const diff = (strengthA - strengthB) / 38
    let scoreA = clamp(Math.round(rand(0, 3.2) + Math.max(0, diff) + rand(-0.35, 0.7)), 0, 6)
    let scoreB = clamp(Math.round(rand(0, 3.2) + Math.max(0, -diff) + rand(-0.35, 0.7)), 0, 6)
    if (match.stage !== 'group' && scoreA === scoreB) {
      if (strengthA + rand(-18, 18) >= strengthB) scoreA += 1
      else scoreB += 1
    }
    this.completeTournamentMatch(match, scoreA, scoreB)
  }

  teamStrength(team) {
    const elite = ['BRA', 'ARG', 'FRA', 'ENG', 'ESP', 'GER', 'POR', 'BEL', 'NED', 'URU', 'CRO', 'MAR', 'USA', 'JPN']
    const seedBonus = elite.includes(team.short) ? 17 : 0
    return 62 + seedBonus + ((team.id * 13) % 21) + rand(-7, 7)
  }

  completeTournamentMatch(match, scoreA, scoreB) {
    match.scoreA = scoreA
    match.scoreB = scoreB
    match.played = true
    if (scoreA > scoreB) match.winner = match.teamA
    else if (scoreB > scoreA) match.winner = match.teamB
    else match.winner = null
    if (match.stage === 'group') this.applyGroupResult(match)
  }

  applyGroupResult(match) {
    const group = this.tournament.groups.find((item) => item.name === match.groupName)
    if (!group) return
    const rowA = group.standings.find((row) => row.team.id === match.teamA.id)
    const rowB = group.standings.find((row) => row.team.id === match.teamB.id)
    rowA.played += 1
    rowB.played += 1
    rowA.gf += match.scoreA
    rowA.ga += match.scoreB
    rowB.gf += match.scoreB
    rowB.ga += match.scoreA
    if (match.scoreA > match.scoreB) {
      rowA.wins += 1
      rowB.losses += 1
      rowA.pts += 3
    } else if (match.scoreB > match.scoreA) {
      rowB.wins += 1
      rowA.losses += 1
      rowB.pts += 3
    } else {
      rowA.draws += 1
      rowB.draws += 1
      rowA.pts += 1
      rowB.pts += 1
    }
    rowA.gd = rowA.gf - rowA.ga
    rowB.gd = rowB.gf - rowB.ga
  }

  rankedGroup(group) {
    return group.standings.slice().sort((a, b) => (
      b.pts - a.pts ||
      b.gd - a.gd ||
      b.gf - a.gf ||
      a.team.id - b.team.id
    ))
  }

  generateRoundOf32() {
    const qualified = []
    const thirds = []
    for (const group of this.tournament.groups) {
      const ranked = this.rankedGroup(group)
      qualified.push(ranked[0].team, ranked[1].team)
      thirds.push({ ...ranked[2], groupName: group.name })
    }
    thirds.sort((a, b) => (
      b.pts - a.pts ||
      b.gd - a.gd ||
      b.gf - a.gf ||
      a.team.id - b.team.id
    ))
    qualified.push(...thirds.slice(0, 8).map((row) => row.team))

    const seeded = qualified.slice(0, 16)
    const unseeded = qualified.slice(16).reverse()
    this.tournament.matches.r32 = seeded.map((team, index) => (
      this.makeTournamentMatch(`R32-${index + 1}`, 'r32', '', index + 1, team, unseeded[index])
    ))
    this.tournament.generatedStages.r32 = true
  }

  generateNextKnockoutStage(fromStage, toStage) {
    const previous = this.tournament.matches[fromStage]
    const stageMatches = []
    for (let i = 0; i < previous.length; i += 2) {
      const teamA = previous[i].winner
      const teamB = previous[i + 1].winner
      if (!teamA || !teamB) continue
      stageMatches.push(this.makeTournamentMatch(`${toStage.toUpperCase()}-${stageMatches.length + 1}`, toStage, '', stageMatches.length + 1, teamA, teamB))
    }
    this.tournament.matches[toStage] = stageMatches
    this.tournament.generatedStages[toStage] = true
  }

  startTournamentMatch(match) {
    if (!match || match.played) return
    this.currentTournamentMatch = match
    this.pendingTournamentMatch = match
    TEAM = {
      player: this.tournament.playerTeam,
      rival: match.teamA.id === this.tournament.playerTeam.id ? match.teamB : match.teamA
    }
    this.mode = 'versus'
    this.versusTime = 0
    this.message = ''
    this.messageTimer = 0
    this.confetti = []
    this.effects = []
    this.screenShake = 0
    this.autoStartTournamentMatch = true
    for (let i = 0; i < 95; i += 1) this.addConfetti(rand(0, WIDTH), rand(-HEIGHT, 0))
  }

  finishTournamentPlayerMatch(winnerSide) {
    const match = this.currentTournamentMatch
    if (!match || !this.tournament) return
    const playerWon = winnerSide === 'player'
    const playerIsA = match.teamA.id === this.tournament.playerTeam.id
    const scoreA = playerWon === playerIsA ? 1 : 0
    const scoreB = playerWon === playerIsA ? 0 : 1
    this.completeTournamentMatch(match, scoreA, scoreB)
    if (!playerWon && match.stage !== 'group') {
      this.tournament.playerEliminated = true
    }
  }

  returnToTournamentAfterMatch() {
    const lastMatch = this.currentTournamentMatch
    const peerResults = lastMatch ? this.simulatePeerMatchesFor(lastMatch) : []
    this.tournamentPopup = this.buildRoundPopup(lastMatch, peerResults)
    if (lastMatch && lastMatch.stage !== 'group' && lastMatch.winner && lastMatch.winner.id !== this.tournament.playerTeam.id) {
      this.tournament.playerActive = false
      this.tournament.playerEliminated = true
    }
    this.currentTournamentMatch = null
    this.pendingTournamentMatch = this.advanceTournamentUntilPlayerMatch()
    this.mode = 'tournament'
    this.currentStageView = lastMatch ? lastMatch.stage : this.currentStageView
    if (this.pendingTournamentMatch) {
      this.tournamentNotice = `下一场：${this.pendingTournamentMatch.teamA.name} vs ${this.pendingTournamentMatch.teamB.name}`
    } else if (this.tournament && this.tournament.champion) {
      const championText = this.tournament.champion.id === this.tournament.playerTeam.id ? '你捧起了冠军奖杯！' : `${this.tournament.champion.name} 夺冠`
      this.tournamentNotice = championText
    } else {
      this.tournamentNotice = '你的赛程已结束，其他比赛已模拟完成'
    }
  }

  makeBodies() {
    const f = this.field
    this.players = [
      this.makePlayer('player', 0, f.x + f.w * 0.27, f.y + f.h * 0.66, '10', 32, 120),
      this.makePlayer('player', 1, f.x + f.w * 0.73, f.y + f.h * 0.66, '7', 26, 135),
      this.makePlayer('player', 2, f.x + f.w * 0.50, f.y + f.h * 0.79, '9', 38, 105),
      this.makePlayer('rival', 0, f.x + f.w * 0.27, f.y + f.h * 0.34, '11', 30, 120),
      this.makePlayer('rival', 1, f.x + f.w * 0.73, f.y + f.h * 0.34, '8', 26, 135),
      this.makePlayer('rival', 2, f.x + f.w * 0.50, f.y + f.h * 0.21, '5', 36, 110)
    ]
    this.ball = {
      type: 'ball',
      x: f.x + f.w * 0.5,
      y: f.y + f.h * 0.5,
      vx: 0,
      vy: 0,
      r: 12 * this.scale,
      mass: 0.65,
      spin: 0
    }
  }

  makePlayer(team, index, x, y, number, atk, hp) {
    return {
      type: 'player',
      id: `${team}-${index}`,
      team,
      index,
      number,
      x,
      y,
      vx: 0,
      vy: 0,
      r: 22 * this.scale,
      mass: 1.35,
      atk,
      maxHp: hp,
      hp,
      hitFlash: 0,
      movedThisShot: false
    }
  }

  bindInput() {
    if (!isWechatGame) {
      this.bindWebInput()
      return
    }

    wx.onTouchStart((event) => this.onPointerStart(this.getTouchPoint(event.touches[0])))
    wx.onTouchMove((event) => this.onPointerMove(this.getTouchPoint(event.touches[0])))
    wx.onTouchEnd(() => this.onPointerEnd())
    wx.onTouchCancel(() => this.onPointerCancel())
  }

  bindWebInput() {
    const toCanvasPoint = (event) => {
      const rect = canvas.getBoundingClientRect()
      return {
        x: (event.clientX - rect.left) * (WIDTH / rect.width),
        y: (event.clientY - rect.top) * (HEIGHT / rect.height)
      }
    }
    canvas.addEventListener('pointerdown', (event) => {
      event.preventDefault()
      canvas.setPointerCapture && canvas.setPointerCapture(event.pointerId)
      this.onPointerStart(toCanvasPoint(event))
    })
    canvas.addEventListener('pointermove', (event) => {
      event.preventDefault()
      this.onPointerMove(toCanvasPoint(event))
    })
    canvas.addEventListener('pointerup', (event) => {
      event.preventDefault()
      this.onPointerEnd()
    })
    canvas.addEventListener('pointercancel', (event) => {
      event.preventDefault()
      this.onPointerCancel()
    })
  }

  getTouchPoint(touch) {
    touch = touch || {}
    return {
      x: touch.clientX !== undefined ? touch.clientX : (touch.x !== undefined ? touch.x : (touch.pageX || 0)),
      y: touch.clientY !== undefined ? touch.clientY : (touch.y !== undefined ? touch.y : (touch.pageY || 0))
    }
  }

  onPointerStart(point) {
    if (this.mode === 'select') {
      this.pointer = {
        active: true,
        x: point.x,
        y: point.y,
        startX: point.x,
        startY: point.y
      }
      this.selectionDrag = {
        startX: point.x,
        startY: point.y
      }
      this.selectionHitTeam = this.pickTeamCard(point.x, point.y)
      return
    }
    if (this.mode === 'tournament') {
      this.handleTournamentTap(point.x, point.y)
      return
    }
    if (this.mode !== 'match') return
    if (this.winner) {
      if (this.currentTournamentMatch) this.returnToTournamentAfterMatch()
      else this.startTeamSelect()
      return
    }
    if (this.turn !== 'player' || this.state !== 'aim') return
    const picked = this.pickAlivePlayer(point.x, point.y, 'player')
    if (!picked) return
    this.selected = picked
    this.pointer = {
      active: true,
      x: point.x,
      y: point.y,
      startX: picked.x,
      startY: picked.y
    }
  }

  onPointerMove(point) {
    if (this.mode === 'select') {
      if (!this.selectionDrag) return
      this.pointer.x = point.x
      this.pointer.y = point.y
      return
    }
    if (this.mode === 'tournament') return
    if (this.mode !== 'match') return
    if (!this.pointer.active || !this.selected) return
    this.pointer.x = point.x
    this.pointer.y = point.y
  }

  onPointerEnd() {
    if (this.mode === 'select') {
      this.handleSelectGesture()
      this.pointer.active = false
      return
    }
    if (this.mode === 'tournament') return
    if (this.mode !== 'match') return
    if (!this.pointer.active || !this.selected) return
    this.launchSelected()
    this.pointer.active = false
  }

  onPointerCancel() {
    if (this.mode === 'select') {
      this.selectionDrag = null
      return
    }
    if (this.mode === 'tournament') return
    this.pointer.active = false
    this.selected = null
  }

  handleTournamentTap(x, y) {
    if (this.tournamentPopup) {
      this.tournamentPopup = null
      return
    }
    for (const button of this.tournamentButtons) {
      if (!this.pointInRect(x, y, button)) continue
      if (button.action === 'stage') {
        this.currentStageView = button.stage
      } else if (button.action === 'start') {
        const match = this.pendingTournamentMatch || this.advanceTournamentUntilPlayerMatch()
        if (match) this.startTournamentMatch(match)
      } else if (button.action === 'restart') {
        this.startTeamSelect()
      } else if (button.action === 'groupPrev') {
        this.groupViewIndex = (this.groupViewIndex + GROUP_NAMES.length - 1) % GROUP_NAMES.length
      } else if (button.action === 'groupNext') {
        this.groupViewIndex = (this.groupViewIndex + 1) % GROUP_NAMES.length
      }
      return
    }
  }

  pickTeamCard(x, y) {
    for (const card of this.teamCards) {
      if (x >= card.x && x <= card.x + card.w && y >= card.y && y <= card.y + card.h) return card.team
    }
    return null
  }

  handleSelectGesture() {
    if (!this.selectionDrag) return
    const dx = this.pointer.x - this.selectionDrag.startX
    const dy = this.pointer.y - this.selectionDrag.startY
    const absX = Math.abs(dx)
    const absY = Math.abs(dy)
    const confirmButton = {
      x: WIDTH * 0.33,
      y: HEIGHT * 0.78,
      w: WIDTH * 0.34,
      h: 0.095 * HEIGHT
    }
    const leftArrow = { x: WIDTH * 0.02, y: HEIGHT * 0.40, w: WIDTH * 0.08, h: HEIGHT * 0.12 }
    const rightArrow = { x: WIDTH * 0.90, y: HEIGHT * 0.40, w: WIDTH * 0.08, h: HEIGHT * 0.12 }

    if (absX > 34 && absX > absY) {
      this.moveTeamSelection(dx < 0 ? 1 : -1)
    } else if (this.pointInRect(this.selectionDrag.startX, this.selectionDrag.startY, confirmButton)) {
      this.chooseTeam(ALL_TEAMS[this.teamIndex])
    } else if (this.pointInRect(this.selectionDrag.startX, this.selectionDrag.startY, leftArrow)) {
      this.moveTeamSelection(-1)
    } else if (this.pointInRect(this.selectionDrag.startX, this.selectionDrag.startY, rightArrow)) {
      this.moveTeamSelection(1)
    } else if (this.selectionHitTeam && Math.abs(dx) < 12 && Math.abs(dy) < 12) {
      this.chooseTeam(this.selectionHitTeam)
    }
    this.selectionDrag = null
    this.selectionHitTeam = null
  }

  pointInRect(x, y, rect) {
    return x >= rect.x && x <= rect.x + rect.w && y >= rect.y && y <= rect.y + rect.h
  }

  pickAlivePlayer(x, y, team) {
    let best = null
    let bestDistance = Infinity
    for (const p of this.players) {
      if (p.team !== team || p.hp <= 0) continue
      const d = Math.hypot(p.x - x, p.y - y)
      if (d < p.r + 18 * this.scale && d < bestDistance) {
        best = p
        bestDistance = d
      }
    }
    return best
  }

  launchSelected() {
    const dx = this.pointer.startX - this.pointer.x
    const dy = this.pointer.startY - this.pointer.y
    const pull = clamp(Math.hypot(dx, dy), 0, 145 * this.scale)
    if (pull < 14 * this.scale) {
      this.selected = null
      return
    }
    const force = pull * 9.4
    const angle = Math.atan2(dy, dx)
    this.selected.vx = Math.cos(angle) * force
    this.selected.vy = Math.sin(angle) * force
    this.selected.movedThisShot = true
    this.shotOwner = this.selected
    this.state = 'moving'
    this.message = '撞击足球，先进球者获胜！'
    this.messageTimer = 1.3
    this.addBurst(this.selected.x, this.selected.y, TEAM.player.main, 10)
    this.selected = null
  }

  loop() {
    const now = Date.now()
    const dt = Math.min(0.033, (now - this.lastTime) / 1000)
    this.lastTime = now
    this.update(dt)
    this.draw()
    nextFrame(() => this.loop())
  }

  update(dt) {
    this.messageTimer = Math.max(0, this.messageTimer - dt)
    this.screenShake = Math.max(0, this.screenShake - dt * 24)
    this.clock += dt
    this.updateConfetti(dt)
    this.updateTeamSlide(dt)
    for (const p of this.players) p.hitFlash = Math.max(0, p.hitFlash - dt)
    this.updateEffects(dt)

    if (this.mode === 'select' || this.mode === 'tournament') return

    if (this.mode === 'versus') {
      this.versusTime += dt
      if (this.versusTime > 3.35) this.resetMatch()
      if (this.versusTime > 1.18 && this.versusTime < 1.18 + dt) {
        this.screenShake = 14
        this.addBurst(WIDTH * 0.5, HEIGHT * 0.44, '#ffffff', 32)
        this.addBurst(WIDTH * 0.5, HEIGHT * 0.44, TEAM.player.main, 24)
        this.addBurst(WIDTH * 0.5, HEIGHT * 0.44, TEAM.rival.sub, 24)
        for (let i = 0; i < 70; i += 1) this.addConfetti(rand(0, WIDTH), rand(-80, 80))
      }
      return
    }

    if (this.winner) return

    if (this.turn === 'rival' && this.state === 'aim') {
      this.aiTimer -= dt
      if (this.aiTimer <= 0) this.fireAiShot()
    }

    this.stepPhysics(dt)
    this.checkGoal()
    this.checkTeamDefeat()

    if (this.state === 'moving' && this.allStill()) {
      this.finishTurn()
    }
  }

  stepPhysics(dt) {
    const steps = 3
    const stepDt = dt / steps
    for (let i = 0; i < steps; i += 1) {
      const bodies = this.activeBodies()
      for (const body of bodies) {
        body.x += body.vx * stepDt
        body.y += body.vy * stepDt
        body.vx *= 0.986
        body.vy *= 0.986
        if (body.type === 'ball') body.spin += Math.hypot(body.vx, body.vy) * stepDt * 0.02
        if (Math.hypot(body.vx, body.vy) < 6) {
          body.vx = 0
          body.vy = 0
        }
        this.resolveWall(body)
      }
      for (let a = 0; a < bodies.length; a += 1) {
        for (let b = a + 1; b < bodies.length; b += 1) {
          this.resolveCollision(bodies[a], bodies[b])
        }
      }
    }
  }

  activeBodies() {
    const bodies = [this.ball]
    for (const p of this.players) {
      if (p.hp > 0) bodies.push(p)
    }
    return bodies
  }

  resolveWall(body) {
    const f = this.field
    const restitution = body.type === 'ball' ? 0.86 : 0.72
    if (body.x - body.r < f.x) {
      body.x = f.x + body.r
      body.vx = Math.abs(body.vx) * restitution
    }
    if (body.x + body.r > f.x + f.w) {
      body.x = f.x + f.w - body.r
      body.vx = -Math.abs(body.vx) * restitution
    }

    const inGoalMouth = body.type === 'ball' && Math.abs(body.x - (f.x + f.w * 0.5)) < this.goalWidth * 0.5
    if (!inGoalMouth) {
      if (body.y - body.r < f.y) {
        body.y = f.y + body.r
        body.vy = Math.abs(body.vy) * restitution
      }
      if (body.y + body.r > f.y + f.h) {
        body.y = f.y + f.h - body.r
        body.vy = -Math.abs(body.vy) * restitution
      }
    }
  }

  resolveCollision(a, b) {
    const dx = b.x - a.x
    const dy = b.y - a.y
    const distance = Math.hypot(dx, dy) || 0.01
    const minDistance = a.r + b.r
    if (distance >= minDistance) return

    const nx = dx / distance
    const ny = dy / distance
    const overlap = minDistance - distance
    const totalMass = a.mass + b.mass
    a.x -= nx * overlap * (b.mass / totalMass)
    a.y -= ny * overlap * (b.mass / totalMass)
    b.x += nx * overlap * (a.mass / totalMass)
    b.y += ny * overlap * (a.mass / totalMass)

    const rvx = b.vx - a.vx
    const rvy = b.vy - a.vy
    const velAlongNormal = rvx * nx + rvy * ny
    if (velAlongNormal > 0) return

    const restitution = a.type === 'ball' || b.type === 'ball' ? 0.9 : 0.72
    const impulse = -(1 + restitution) * velAlongNormal / (1 / a.mass + 1 / b.mass)
    const ix = impulse * nx
    const iy = impulse * ny
    a.vx -= ix / a.mass
    a.vy -= iy / a.mass
    b.vx += ix / b.mass
    b.vy += iy / b.mass

    this.applyCollisionDamage(a, b, Math.abs(velAlongNormal))
  }

  applyCollisionDamage(a, b, speed) {
    if (speed < 80) return
    if (a.type !== 'player' || b.type !== 'player') return
    if (a.team === b.team) return
    const cooldownKey = a.id < b.id ? `${a.id}:${b.id}` : `${b.id}:${a.id}`
    if (this.damageCooldowns[cooldownKey] && this.clock - this.damageCooldowns[cooldownKey] < 0.35) return
    this.damageCooldowns[cooldownKey] = this.clock

    const source = Math.hypot(a.vx, a.vy) > Math.hypot(b.vx, b.vy) ? a : b
    const target = source === a ? b : a
    const damage = Math.max(4, Math.round(source.atk * clamp(speed / 460, 0.22, 1.15)))
    target.hp = Math.max(0, target.hp - damage)
    target.hitFlash = 0.28
    source.hitFlash = 0.16
    this.message = `${TEAM[source.team].name} ${source.number} 造成 ${damage} 伤害`
    this.messageTimer = 1.1
    this.addBurst(target.x, target.y, source.team === 'player' ? TEAM.player.main : TEAM.rival.sub, 12)
    if (target.hp <= 0) {
      target.vx = 0
      target.vy = 0
      this.message = `${TEAM[target.team].name} ${target.number} 体力耗尽`
      this.messageTimer = 1.3
    }
  }

  checkGoal() {
    const f = this.field
    const goalLeft = f.x + f.w * 0.5 - this.goalWidth * 0.5
    const goalRight = f.x + f.w * 0.5 + this.goalWidth * 0.5
    if (this.ball.x < goalLeft || this.ball.x > goalRight) return
    if (this.ball.y + this.ball.r < f.y) {
      this.win('player', 'GOAL! 我方先进球！')
    }
    if (this.ball.y - this.ball.r > f.y + f.h) {
      this.win('rival', '对手先进球！')
    }
  }

  checkTeamDefeat() {
    if (this.winner) return
    const playerAlive = this.players.some((p) => p.team === 'player' && p.hp > 0)
    const rivalAlive = this.players.some((p) => p.team === 'rival' && p.hp > 0)
    if (!playerAlive) this.win('rival', '我方全员体力耗尽')
    if (!rivalAlive) this.win('player', '对手全员体力耗尽')
  }

  win(team, text) {
    if (this.currentTournamentMatch) this.finishTournamentPlayerMatch(team)
    this.winner = team
    this.state = 'result'
    this.message = text
    this.messageTimer = 999
    this.screenShake = 10
    this.addBurst(this.ball.x, clamp(this.ball.y, this.field.y, this.field.y + this.field.h), team === 'player' ? TEAM.player.main : TEAM.rival.sub, 30)
  }

  allStill() {
    const bodies = this.activeBodies()
    for (const body of bodies) {
      if (Math.hypot(body.vx, body.vy) > 12) return false
    }
    return true
  }

  finishTurn() {
    for (const body of this.activeBodies()) {
      body.vx = 0
      body.vy = 0
    }
    this.shotOwner = null
    this.selected = null
    this.pointer.active = false
    this.turn = this.turn === 'player' ? 'rival' : 'player'
    if (this.turn === 'player') this.turnCount += 1
    this.state = 'aim'
    this.aiTimer = this.turn === 'rival' ? 0.7 : 0
    this.message = this.turn === 'player' ? '我方回合：拖拽一名球员' : '对手回合'
    this.messageTimer = 1.4
  }

  fireAiShot() {
    const candidates = this.players.filter((p) => p.team === 'rival' && p.hp > 0)
    if (!candidates.length) return
    let chosen = candidates[0]
    let best = Infinity
    const goal = { x: this.field.x + this.field.w * 0.5, y: this.field.y + this.field.h + 60 * this.scale }
    for (const p of candidates) {
      const score = dist(p, this.ball) + Math.abs(p.x - this.ball.x) * 0.4
      if (score < best) {
        best = score
        chosen = p
      }
    }

    const aimX = this.ball.x + (goal.x - this.ball.x) * 0.22
    const aimY = this.ball.y + (goal.y - this.ball.y) * 0.22
    let dx = aimX - chosen.x
    let dy = aimY - chosen.y
    const len = Math.hypot(dx, dy) || 1
    dx /= len
    dy /= len
    const force = clamp(760 + rand(-90, 120), 620, 920)
    chosen.vx = dx * force
    chosen.vy = dy * force
    chosen.movedThisShot = true
    this.shotOwner = chosen
    this.state = 'moving'
    this.message = `对手 ${chosen.number} 弹射`
    this.messageTimer = 1
    this.addBurst(chosen.x, chosen.y, TEAM.rival.sub, 10)
  }

  addBurst(x, y, color, count) {
    for (let i = 0; i < count; i += 1) {
      const angle = rand(0, Math.PI * 2)
      const speed = rand(28, 150) * this.scale
      this.effects.push({
        x,
        y,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        life: rand(0.35, 0.85),
        maxLife: 0.85,
        color,
        size: rand(2, 5) * this.scale
      })
    }
  }

  addConfetti(x, y) {
    const colors = ['#ff4d6d', '#ffdf4d', '#39d98a', '#43b0ff', '#ffffff', '#ff8a3d']
    this.confetti.push({
      x,
      y,
      vx: rand(-30, 30) * this.scale,
      vy: rand(70, 150) * this.scale,
      rot: rand(0, Math.PI * 2),
      spin: rand(-6, 6),
      w: rand(5, 9) * this.scale,
      h: rand(9, 15) * this.scale,
      color: colors[Math.floor(Math.random() * colors.length)]
    })
  }

  updateConfetti(dt) {
    if (!this.confetti.length) return
    for (const piece of this.confetti) {
      piece.x += piece.vx * dt + Math.sin(this.clock * 3 + piece.rot) * 10 * dt
      piece.y += piece.vy * dt
      piece.rot += piece.spin * dt
      if (piece.y > HEIGHT + 30) {
        piece.y = rand(-120, -20)
        piece.x = rand(0, WIDTH)
      }
    }
  }

  updateTeamSlide(dt) {
    if (!this.teamSlide) return
    this.teamSlide.t += dt / this.teamSlide.duration
    if (this.teamSlide.t >= 1) {
      this.teamIndex = this.teamSlide.to
      this.teamSlide = null
    }
  }

  updateEffects(dt) {
    this.effects = this.effects.filter((e) => {
      e.life -= dt
      e.x += e.vx * dt
      e.y += e.vy * dt
      e.vy += 80 * dt
      return e.life > 0
    })
  }

  draw() {
    ctx.save()
    const shakeX = this.screenShake ? rand(-this.screenShake, this.screenShake) : 0
    const shakeY = this.screenShake ? rand(-this.screenShake, this.screenShake) : 0
    ctx.translate(shakeX, shakeY)
    this.drawBackground()
    if (this.mode === 'select') {
      this.drawTeamSelect()
    } else if (this.mode === 'tournament') {
      this.drawTournament()
    } else if (this.mode === 'versus') {
      this.drawVersus()
    } else {
      this.drawScoreboard()
      this.drawField()
      this.drawAimGuide()
      this.drawBodies()
      this.drawEffects()
      this.drawMessage()
      this.drawResult()
    }
    ctx.restore()
  }

  drawBackground() {
    if (this.mode === 'select') {
      this.drawSelectBackground()
      ctx.globalAlpha = 1
      return
    }
    const gradient = ctx.createLinearGradient(0, 0, 0, HEIGHT)
    gradient.addColorStop(0, '#37c7ff')
    gradient.addColorStop(0.56, '#21a9ef')
    gradient.addColorStop(1, '#127fd0')
    ctx.fillStyle = gradient
    ctx.fillRect(0, 0, WIDTH, HEIGHT)

    ctx.globalAlpha = 0.12
    ctx.fillStyle = '#ffffff'
    ctx.font = `${40 * this.scale}px Arial`
    ctx.fillText('WORLD CUP', WIDTH * 0.06, HEIGHT * 0.13)
    ctx.fillText('STRIKE', WIDTH * 0.20, HEIGHT * 0.95)
    ctx.globalAlpha = 1
  }

  drawTeamSelect() {
    this.roundRect(14, 14, WIDTH - 28, HEIGHT - 28, 18 * this.scale, 'rgba(255,255,255,0.16)')
    this.strokeRoundRect(14, 14, WIDTH - 28, HEIGHT - 28, 18 * this.scale, 'rgba(13,32,60,0.82)', 2)
    this.drawSelectDecorations()

    ctx.textAlign = 'center'
    ctx.fillStyle = '#102145'
    ctx.font = `bold ${25 * this.scale}px Arial`
    ctx.fillText('2026 世界杯 48 队', WIDTH * 0.5, HEIGHT * 0.12)
    ctx.font = `bold ${21 * this.scale}px Arial`
    ctx.fillText('选择你的球队', WIDTH * 0.5, HEIGHT * 0.17)
    ctx.font = `${12 * this.scale}px Arial`
    ctx.fillText('左右滑动进行选择', WIDTH * 0.5, HEIGHT * 0.28)

    const centerY = HEIGHT * 0.47

    this.drawTeamCarousel(centerY)

    this.drawArrow(WIDTH * 0.06, centerY, -1)
    this.drawArrow(WIDTH * 0.94, centerY, 1)

    const btnW = WIDTH * 0.34
    const btnH = HEIGHT * 0.095
    const btnX = WIDTH * 0.5 - btnW * 0.5
    const btnY = HEIGHT * 0.80
    const buttonGradient = ctx.createLinearGradient(btnX, btnY, btnX, btnY + btnH)
    buttonGradient.addColorStop(0, '#ff4fd8')
    buttonGradient.addColorStop(0.52, '#ffdf4d')
    buttonGradient.addColorStop(1, '#27e7a2')
    this.roundRect(btnX, btnY, btnW, btnH, 14 * this.scale, buttonGradient)
    this.strokeRoundRect(btnX, btnY, btnW, btnH, 14 * this.scale, '#17213d', 2)
    ctx.fillStyle = '#16213a'
    ctx.font = `bold ${18 * this.scale}px Arial`
    ctx.fillText('Goal !', WIDTH * 0.5, btnY + btnH * 0.62)
  }

  drawTournament() {
    if (!this.tournament) return
    this.tournamentButtons = []
    this.drawConfetti()

    ctx.save()
    ctx.globalAlpha = 0.20
    for (let i = 0; i < 6; i += 1) {
      this.drawPatternBall(WIDTH * (0.12 + (i % 3) * 0.38), HEIGHT * (0.14 + Math.floor(i / 3) * 0.58), (28 + i * 3) * this.scale)
    }
    ctx.globalAlpha = 1
    ctx.restore()

    ctx.textAlign = 'center'
    ctx.fillStyle = '#ffffff'
    ctx.font = `bold ${24 * this.scale}px Arial`
    ctx.fillText('世界杯大赛模式', WIDTH * 0.5, HEIGHT * 0.055)

    this.roundRect(WIDTH * 0.055, HEIGHT * 0.078, WIDTH * 0.89, HEIGHT * 0.128, 16 * this.scale, 'rgba(255,255,255,0.94)')
    this.drawTeamToken(WIDTH * 0.16, HEIGHT * 0.14, 25 * this.scale, this.tournament.playerTeam)
    ctx.textAlign = 'left'
    ctx.fillStyle = '#16213a'
    ctx.font = `bold ${18 * this.scale}px Arial`
    ctx.fillText(this.tournament.playerTeam.name, WIDTH * 0.245, HEIGHT * 0.127)
    ctx.font = `${12 * this.scale}px Arial`
    ctx.fillStyle = '#38536d'
    const playerGroup = this.getPlayerGroup()
    const status = this.tournament.finished
      ? (this.tournament.champion && this.tournament.champion.id === this.tournament.playerTeam.id ? '冠军' : '大赛结束')
      : (this.pendingTournamentMatch ? '待战下一场' : 'AI 正在推进')
    ctx.fillText(`${playerGroup ? `${playerGroup.name}组 ` : ''}${status}`, WIDTH * 0.245, HEIGHT * 0.156)
    ctx.fillText(this.tournamentNotice || '查看赛程并开始下一场', WIDTH * 0.245, HEIGHT * 0.184)

    const startX = WIDTH * 0.60
    const startY = HEIGHT * 0.112
    const startW = WIDTH * 0.27
    const startH = 44 * this.scale
    const startLabel = this.pendingTournamentMatch ? '开赛' : '重选'
    const startAction = this.pendingTournamentMatch ? 'start' : 'restart'
    this.roundRect(startX, startY, startW, startH, 12 * this.scale, this.pendingTournamentMatch ? '#ffdf4d' : '#ff6aa7')
    this.strokeRoundRect(startX, startY, startW, startH, 12 * this.scale, '#16213a', 2)
    ctx.fillStyle = '#16213a'
    ctx.textAlign = 'center'
    ctx.font = `bold ${16 * this.scale}px Arial`
    ctx.fillText(startLabel, startX + startW * 0.5, startY + startH * 0.64)
    this.tournamentButtons.push({ x: startX, y: startY, w: startW, h: startH, action: startAction })

    this.drawTournamentTabs()
    this.drawTournamentStage()
    this.drawTournamentPopup()
  }

  getPlayerGroup() {
    if (!this.tournament) return null
    return this.tournament.groups.find((group) => group.teams.some((team) => team.id === this.tournament.playerTeam.id))
  }

  drawTournamentTabs() {
    const left = WIDTH * 0.045
    const top = HEIGHT * 0.225
    const gap = 6 * this.scale
    const w = (WIDTH * 0.91 - gap * 2) / 3
    const h = 31 * this.scale
    STAGE_KEYS.forEach((stage, index) => {
      const row = Math.floor(index / 3)
      const col = index % 3
      const x = left + col * (w + gap)
      const y = top + row * (h + gap)
      const active = this.currentStageView === stage
      this.roundRect(x, y, w, h, 10 * this.scale, active ? '#24f0a7' : 'rgba(255,255,255,0.84)')
      this.strokeRoundRect(x, y, w, h, 10 * this.scale, active ? '#102145' : 'rgba(16,33,69,0.28)', active ? 2 : 1)
      ctx.fillStyle = '#102145'
      ctx.font = `bold ${11 * this.scale}px Arial`
      ctx.textAlign = 'center'
      ctx.fillText(STAGE_LABELS[stage], x + w * 0.5, y + h * 0.65)
      this.tournamentButtons.push({ x, y, w, h, action: 'stage', stage })
    })
  }

  drawTournamentStage() {
    const panelX = WIDTH * 0.045
    const panelY = HEIGHT * 0.318
    const panelW = WIDTH * 0.91
    const panelH = HEIGHT * 0.62
    this.roundRect(panelX, panelY, panelW, panelH, 16 * this.scale, 'rgba(255,255,255,0.92)')
    this.strokeRoundRect(panelX, panelY, panelW, panelH, 16 * this.scale, 'rgba(16,33,69,0.42)', 1.5)

    ctx.fillStyle = '#102145'
    ctx.textAlign = 'left'
    ctx.font = `bold ${17 * this.scale}px Arial`
    ctx.fillText(STAGE_LABELS[this.currentStageView], panelX + 16 * this.scale, panelY + 30 * this.scale)

    if (this.currentStageView === 'group') this.drawGroupStagePanel(panelX, panelY, panelW, panelH)
    else this.drawKnockoutPanel(panelX, panelY, panelW, panelH, this.currentStageView)
  }

  drawGroupStagePanel(x, y, w, h) {
    const group = this.tournament.groups[this.groupViewIndex] || this.getPlayerGroup() || this.tournament.groups[0]
    const ranked = this.rankedGroup(group)
    ctx.fillStyle = '#38536d'
    ctx.font = `${11 * this.scale}px Arial`
    ctx.textAlign = 'right'
    const done = this.tournament.matches.group.filter((match) => match.played).length
    ctx.fillText(`${done}/72 场`, x + w - 15 * this.scale, y + 30 * this.scale)

    const tableY = y + 46 * this.scale
    this.roundRect(x + 12 * this.scale, tableY, w - 24 * this.scale, 123 * this.scale, 10 * this.scale, '#e9fff8')
    ctx.fillStyle = '#102145'
    ctx.textAlign = 'left'
    ctx.font = `bold ${12 * this.scale}px Arial`
    const leftBtn = { x: x + 14 * this.scale, y: tableY + 8 * this.scale, w: 24 * this.scale, h: 24 * this.scale, action: 'groupPrev' }
    const rightBtn = { x: x + w - 38 * this.scale, y: tableY + 8 * this.scale, w: 24 * this.scale, h: 24 * this.scale, action: 'groupNext' }
    this.roundRect(leftBtn.x, leftBtn.y, leftBtn.w, leftBtn.h, 8 * this.scale, '#ffffff')
    this.roundRect(rightBtn.x, rightBtn.y, rightBtn.w, rightBtn.h, 8 * this.scale, '#ffffff')
    ctx.fillStyle = '#102145'
    ctx.textAlign = 'center'
    ctx.font = `bold ${15 * this.scale}px Arial`
    ctx.fillText('<', leftBtn.x + leftBtn.w * 0.5, leftBtn.y + leftBtn.h * 0.68)
    ctx.fillText('>', rightBtn.x + rightBtn.w * 0.5, rightBtn.y + rightBtn.h * 0.68)
    this.tournamentButtons.push(leftBtn, rightBtn)

    ctx.fillStyle = '#102145'
    ctx.textAlign = 'left'
    ctx.font = `bold ${12 * this.scale}px Arial`
    ctx.fillText(`${group.name}组积分榜`, x + 46 * this.scale, tableY + 21 * this.scale)
    ctx.textAlign = 'right'
    ctx.font = `bold ${10 * this.scale}px Arial`
    ctx.fillText('赛  分  净', x + w - 24 * this.scale, tableY + 21 * this.scale)

    ranked.forEach((row, index) => {
      const rowY = tableY + 45 * this.scale + index * 18 * this.scale
      const isPlayer = row.team.id === this.tournament.playerTeam.id
      ctx.fillStyle = isPlayer ? '#fff04a' : (index < 2 ? '#ffffff' : 'rgba(255,255,255,0.62)')
      this.roundRect(x + 20 * this.scale, rowY - 12 * this.scale, w - 40 * this.scale, 16 * this.scale, 7 * this.scale, ctx.fillStyle)
      ctx.fillStyle = '#102145'
      ctx.textAlign = 'left'
      ctx.font = `bold ${10.5 * this.scale}px Arial`
      ctx.fillText(`${index + 1}. ${row.team.name}`, x + 28 * this.scale, rowY)
      ctx.textAlign = 'right'
      ctx.fillText(`${row.played}   ${row.pts}   ${row.gd}`, x + w - 27 * this.scale, rowY)
    })

    ctx.fillStyle = '#38536d'
    ctx.font = `${10 * this.scale}px Arial`
    ctx.textAlign = 'left'
    ctx.fillText(`${group.name}组完整赛程`, x + 18 * this.scale, y + 181 * this.scale)

    const matches = this.tournament.matches.group.filter((match) => match.groupName === group.name)
    this.drawMatchList(matches, x + 12 * this.scale, y + 188 * this.scale, w - 24 * this.scale, h - 202 * this.scale)
  }

  drawKnockoutPanel(x, y, w, h, stage) {
    const matches = this.tournament.matches[stage]
    const done = matches.filter((match) => match.played).length
    ctx.fillStyle = '#38536d'
    ctx.font = `${11 * this.scale}px Arial`
    ctx.textAlign = 'right'
    ctx.fillText(`${done}/${matches.length || '-'} 场`, x + w - 15 * this.scale, y + 30 * this.scale)
    if (!matches.length) {
      ctx.fillStyle = '#38536d'
      ctx.font = `bold ${14 * this.scale}px Arial`
      ctx.textAlign = 'center'
      ctx.fillText('等待前一阶段完成后生成对阵', x + w * 0.5, y + h * 0.46)
      return
    }
    this.drawMatchList(matches, x + 12 * this.scale, y + 48 * this.scale, w - 24 * this.scale, h - 64 * this.scale)
  }

  drawTournamentPopup() {
    if (!this.tournamentPopup) return
    const popup = this.tournamentPopup
    ctx.fillStyle = 'rgba(5,18,44,0.62)'
    ctx.fillRect(0, 0, WIDTH, HEIGHT)

    const x = WIDTH * 0.07
    const y = HEIGHT * 0.18
    const w = WIDTH * 0.86
    const h = HEIGHT * 0.58
    this.roundRect(x, y, w, h, 18 * this.scale, '#fffdf4')
    this.strokeRoundRect(x, y, w, h, 18 * this.scale, '#102145', 2)

    ctx.textAlign = 'center'
    ctx.fillStyle = '#102145'
    ctx.font = `bold ${21 * this.scale}px Arial`
    ctx.fillText(popup.title, WIDTH * 0.5, y + 38 * this.scale)
    ctx.fillStyle = '#e65733'
    ctx.font = `bold ${12 * this.scale}px Arial`
    ctx.fillText(popup.subtitle, WIDTH * 0.5, y + 61 * this.scale)

    const listX = x + 16 * this.scale
    const listY = y + 82 * this.scale
    const rowH = 31 * this.scale
    const maxRows = Math.min(popup.matches.length, 11)
    for (let i = 0; i < maxRows; i += 1) {
      const match = popup.matches[i]
      const rowY = listY + i * rowH
      this.roundRect(listX, rowY, w - 32 * this.scale, rowH - 5 * this.scale, 8 * this.scale, i % 2 ? '#eefcff' : '#eafff3')
      ctx.fillStyle = '#102145'
      ctx.font = `bold ${10 * this.scale}px Arial`
      ctx.textAlign = 'left'
      const prefix = match.stage === 'group' ? `${match.groupName}组` : STAGE_LABELS[match.stage]
      ctx.fillText(prefix, listX + 9 * this.scale, rowY + 17 * this.scale)
      this.drawMatchTeamName(match.teamA, listX + 106 * this.scale, rowY + 17 * this.scale, 70 * this.scale, 'right')
      this.drawMatchTeamName(match.teamB, listX + w - 106 * this.scale, rowY + 17 * this.scale, 70 * this.scale, 'left')
      ctx.textAlign = 'center'
      ctx.fillStyle = '#e65733'
      ctx.font = `bold ${12 * this.scale}px Arial`
      ctx.fillText(`${match.scoreA}:${match.scoreB}`, WIDTH * 0.5, rowY + 17 * this.scale)
    }
    if (popup.matches.length > maxRows) {
      ctx.fillStyle = '#38536d'
      ctx.font = `${10 * this.scale}px Arial`
      ctx.textAlign = 'center'
      ctx.fillText(`还有 ${popup.matches.length - maxRows} 场，可在赛程页查看`, WIDTH * 0.5, y + h - 62 * this.scale)
    }

    const btnW = WIDTH * 0.38
    const btnH = 42 * this.scale
    const btnX = WIDTH * 0.5 - btnW * 0.5
    const btnY = y + h - 50 * this.scale
    this.roundRect(btnX, btnY, btnW, btnH, 13 * this.scale, '#24f0a7')
    this.strokeRoundRect(btnX, btnY, btnW, btnH, 13 * this.scale, '#102145', 2)
    ctx.fillStyle = '#102145'
    ctx.font = `bold ${15 * this.scale}px Arial`
    ctx.textAlign = 'center'
    ctx.fillText('继续赛程', WIDTH * 0.5, btnY + btnH * 0.64)
  }

  drawMatchList(matches, x, y, w, h) {
    const rowH = 37 * this.scale
    const maxRows = Math.max(1, Math.floor(h / rowH))
    matches.slice(0, maxRows).forEach((match, index) => {
      const rowY = y + index * rowH
      const isPlayer = this.isPlayerTournamentMatch(match)
      const isPending = this.pendingTournamentMatch && this.pendingTournamentMatch.id === match.id
      this.roundRect(x, rowY, w, rowH - 6 * this.scale, 9 * this.scale, isPending ? '#ffdf4d' : (isPlayer ? '#d8fff1' : '#ffffff'))
      ctx.textAlign = 'left'
      ctx.fillStyle = '#102145'
      ctx.font = `bold ${10.5 * this.scale}px Arial`
      const prefix = match.stage === 'group' ? `${match.groupName}组 R${match.round}` : `第${match.round}场`
      ctx.fillText(prefix, x + 10 * this.scale, rowY + 14 * this.scale)
      ctx.font = `bold ${11.5 * this.scale}px Arial`
      this.drawMatchTeamName(match.teamA, x + 76 * this.scale, rowY + 14 * this.scale, 78 * this.scale, 'right')
      this.drawMatchTeamName(match.teamB, x + w - 76 * this.scale, rowY + 14 * this.scale, 78 * this.scale, 'left')
      ctx.textAlign = 'center'
      ctx.fillStyle = match.played ? '#e65733' : '#6d7891'
      ctx.font = `bold ${13 * this.scale}px Arial`
      ctx.fillText(match.played ? `${match.scoreA}:${match.scoreB}` : 'VS', x + w * 0.5, rowY + 15 * this.scale)
      ctx.font = `${9 * this.scale}px Arial`
      const stateText = match.played ? '已完成' : (isPending ? '待玩家出战' : '待模拟')
      ctx.fillText(stateText, x + w * 0.5, rowY + 27 * this.scale)
    })
  }

  drawMatchTeamName(team, x, y, maxW, align) {
    ctx.textAlign = align
    const text = team.name
    if (ctx.measureText(text).width <= maxW) {
      ctx.fillText(text, x, y)
      return
    }
    ctx.font = `bold ${9.5 * this.scale}px Arial`
    ctx.fillText(text, x, y)
  }

  drawSelectBackground() {
    const bg = ctx.createLinearGradient(0, 0, WIDTH, HEIGHT)
    bg.addColorStop(0, '#00d5ff')
    bg.addColorStop(0.22, '#45f27a')
    bg.addColorStop(0.48, '#fff04a')
    bg.addColorStop(0.72, '#ff5bbd')
    bg.addColorStop(1, '#7c62ff')
    ctx.fillStyle = bg
    ctx.fillRect(0, 0, WIDTH, HEIGHT)

    ctx.save()
    ctx.globalAlpha = 0.28
    ctx.fillStyle = '#ffffff'
    ctx.beginPath()
    ctx.arc(WIDTH * 0.1, HEIGHT * 0.12, 42 * this.scale, 0, Math.PI * 2)
    ctx.fill()
    ctx.beginPath()
    ctx.arc(WIDTH * 0.9, HEIGHT * 0.78, 54 * this.scale, 0, Math.PI * 2)
    ctx.fill()

    ctx.globalAlpha = 0.30
    for (let y = 42 * this.scale; y < HEIGHT; y += 118 * this.scale) {
      for (let x = 34 * this.scale; x < WIDTH; x += 118 * this.scale) {
        this.drawPatternBall(x, y, 17 * this.scale)
      }
    }

    ctx.globalAlpha = 0.34
    ctx.strokeStyle = '#ffffff'
    ctx.lineWidth = 4 * this.scale
    for (let i = 0; i < 4; i += 1) {
      ctx.beginPath()
      const y = HEIGHT * (0.18 + i * 0.18)
      ctx.moveTo(-20 * this.scale, y)
      ctx.bezierCurveTo(WIDTH * 0.25, y - 36 * this.scale, WIDTH * 0.72, y + 36 * this.scale, WIDTH + 20 * this.scale, y)
      ctx.stroke()
    }

    ctx.globalAlpha = 0.26
    this.drawTrophy(WIDTH * 0.5, HEIGHT * 0.88, 74 * this.scale)

    ctx.globalAlpha = 0.58
    const colors = ['#ff3d7f', '#ffdf4d', '#2be59c', '#2fb5ff', '#9a6cff']
    for (let i = 0; i < 42; i += 1) {
      ctx.fillStyle = colors[i % colors.length]
      ctx.save()
      ctx.translate((i * 47) % WIDTH, (i * 83) % HEIGHT)
      ctx.rotate(i * 0.7)
      ctx.fillRect(-4 * this.scale, -2 * this.scale, 8 * this.scale, 4 * this.scale)
      ctx.restore()
    }
    ctx.restore()
  }

  drawPatternBall(x, y, r) {
    ctx.save()
    ctx.translate(x, y)
    ctx.strokeStyle = '#ffffff'
    ctx.lineWidth = 2 * this.scale
    ctx.beginPath()
    ctx.arc(0, 0, r, 0, Math.PI * 2)
    ctx.stroke()
    ctx.beginPath()
    ctx.moveTo(-r * 0.7, -r * 0.1)
    ctx.lineTo(r * 0.7, r * 0.1)
    ctx.moveTo(-r * 0.1, -r * 0.75)
    ctx.lineTo(r * 0.1, r * 0.75)
    ctx.stroke()
    ctx.restore()
  }

  drawTrophy(x, y, s) {
    ctx.save()
    ctx.translate(x, y)
    ctx.strokeStyle = '#ffffff'
    ctx.lineWidth = 3 * this.scale
    ctx.beginPath()
    ctx.moveTo(-s * 0.28, -s * 0.36)
    ctx.quadraticCurveTo(0, -s * 0.18, s * 0.28, -s * 0.36)
    ctx.lineTo(s * 0.18, s * 0.08)
    ctx.lineTo(-s * 0.18, s * 0.08)
    ctx.closePath()
    ctx.stroke()
    ctx.beginPath()
    ctx.moveTo(-s * 0.14, s * 0.08)
    ctx.lineTo(-s * 0.24, s * 0.34)
    ctx.lineTo(s * 0.24, s * 0.34)
    ctx.lineTo(s * 0.14, s * 0.08)
    ctx.stroke()
    ctx.restore()
  }

  drawSelectDecorations() {
    ctx.save()
    ctx.globalAlpha = 0.42
    ctx.fillStyle = '#19a86b'
    ctx.fillRect(WIDTH * 0.12, HEIGHT * 0.225, WIDTH * 0.2, 6 * this.scale)
    ctx.fillStyle = '#e23c49'
    ctx.fillRect(WIDTH * 0.68, HEIGHT * 0.225, WIDTH * 0.2, 6 * this.scale)
    ctx.fillStyle = '#f2b638'
    ctx.beginPath()
    ctx.arc(WIDTH * 0.5, HEIGHT * 0.235, 18 * this.scale, 0, Math.PI * 2)
    ctx.fill()
    ctx.globalAlpha = 1

    ctx.strokeStyle = 'rgba(255,255,255,0.45)'
    ctx.lineWidth = 1
    for (let i = 0; i < 5; i += 1) {
      const y = HEIGHT * 0.91 + i * 8 * this.scale
      ctx.beginPath()
      ctx.moveTo(WIDTH * 0.18, y)
      ctx.lineTo(WIDTH * 0.82, y)
      ctx.stroke()
    }
    ctx.fillStyle = 'rgba(255,255,255,0.32)'
    ctx.font = `bold ${20 * this.scale}px Arial`
    ctx.textAlign = 'center'
    ctx.fillText('WORLD CUP', WIDTH * 0.5, HEIGHT * 0.935)
    ctx.restore()
  }

  drawTeamCarousel(centerY) {
    const total = ALL_TEAMS.length
    const centerX = WIDTH * 0.5
    const sideOffset = 112 * this.scale
    const sideW = 126 * this.scale
    const sideH = 178 * this.scale
    const centerW = 142 * this.scale
    const centerH = 212 * this.scale
    const positions = []
    const slide = this.teamSlide
    const base = slide ? slide.from : this.teamIndex
    const rawT = slide ? clamp(slide.t, 0, 1) : 0
    const t = rawT * rawT * (3 - 2 * rawT)
    const dir = slide ? slide.dir : 0

    for (let offset = -2; offset <= 2; offset += 1) {
      const logical = offset - dir * t
      const team = ALL_TEAMS[(base + offset + total) % total]
      const depth = 1 - Math.min(1, Math.abs(logical))
      const w = sideW + (centerW - sideW) * depth
      const h = sideH + (centerH - sideH) * depth
      const alpha = 0.35 + depth * 0.65
      const y = centerY + 4 * this.scale * depth
      const x = centerX + logical * sideOffset
      positions.push({ team, x, y, w, h, alpha, depth, logical })
    }

    positions
      .filter((card) => Math.abs(card.logical) <= 1.35 && card.depth < 0.99)
      .forEach((card) => this.drawTeamCard(card.x, card.y, card.w, card.h, card.team, card.alpha))

    const centerCard = positions.reduce((best, card) => Math.abs(card.logical) < Math.abs(best.logical) ? card : best, positions[0])
    this.drawTeamCard(centerCard.x, centerCard.y, centerCard.w, centerCard.h, centerCard.team, 1)
    this.teamCards = [
      {
        x: centerCard.x - centerCard.w * 0.5,
        y: centerCard.y - centerCard.h * 0.5,
        w: centerCard.w,
        h: centerCard.h,
        team: centerCard.team
      }
    ]
  }

  drawTeamCard(x, y, w, h, team, scaleFactor) {
    const r = 16 * this.scale
    const cardX = x - w * 0.5
    const cardY = y - h * 0.5
    ctx.save()
    ctx.globalAlpha = scaleFactor
    const gradient = ctx.createLinearGradient(cardX, cardY, cardX + w, cardY + h)
    gradient.addColorStop(0, '#fff0a3')
    gradient.addColorStop(0.45, '#ff9ad7')
    gradient.addColorStop(1, '#9eeeff')
    this.roundRect(cardX, cardY, w, h, r, gradient)
    this.strokeRoundRect(cardX, cardY, w, h, r, '#17213d', 2)
    this.drawTeamToken(x, y - 10 * this.scale, 31 * this.scale * scaleFactor, team)
    ctx.fillStyle = '#111111'
    ctx.font = `bold ${16 * this.scale * scaleFactor}px Arial`
    ctx.textAlign = 'center'
    ctx.fillText(team.name, x, cardY + h + 28 * this.scale)
    ctx.restore()
  }

  drawArrow(x, y, dir) {
    const s = 18 * this.scale
    ctx.strokeStyle = '#111111'
    ctx.lineWidth = 2
    ctx.beginPath()
    if (dir < 0) {
      ctx.moveTo(x + s * 0.5, y - s)
      ctx.lineTo(x - s * 0.5, y)
      ctx.lineTo(x + s * 0.5, y + s)
    } else {
      ctx.moveTo(x - s * 0.5, y - s)
      ctx.lineTo(x + s * 0.5, y)
      ctx.lineTo(x - s * 0.5, y + s)
    }
    ctx.stroke()
  }

  drawVersus() {
    this.drawConfetti()
    const t = this.versusTime || 0
    const collide = clamp(t / 1.15, 0, 1)
    const ease = 1 - Math.pow(1 - collide, 3)
    const hitPulse = t > 1.05 && t < 1.65 ? Math.sin((t - 1.05) * Math.PI * 6) * 5 * this.scale : 0
    const leftX = -70 * this.scale + (WIDTH * 0.36 + 70 * this.scale) * ease - hitPulse
    const rightX = WIDTH + 70 * this.scale - (WIDTH * 0.36 + 70 * this.scale) * ease + hitPulse
    const y = HEIGHT * 0.43

    ctx.textAlign = 'center'
    ctx.fillStyle = '#ffffff'
    ctx.font = `bold ${22 * this.scale}px Arial`
    ctx.fillText('WORLD CUP STRIKE', WIDTH * 0.5, HEIGHT * 0.12)

    this.drawLargeTeamAvatar(leftX, y, TEAM.player)
    this.drawLargeTeamAvatar(rightX, y, TEAM.rival)

    ctx.save()
    ctx.translate(WIDTH * 0.5, y)
    const pulse = 1 + (t > 1.05 && t < 1.55 ? Math.sin((t - 1.05) * Math.PI * 5) * 0.12 : 0)
    ctx.scale(pulse, pulse)
    this.roundRect(-39 * this.scale, -28 * this.scale, 78 * this.scale, 56 * this.scale, 14 * this.scale, '#0f9cc8')
    ctx.fillStyle = '#ffffff'
    ctx.font = `bold ${30 * this.scale}px Arial`
    ctx.fillText('VS', 0, 10 * this.scale)
    ctx.restore()

    if (t > 1.0) {
      for (let i = 0; i < 16; i += 1) {
        const angle = (Math.PI * 2 * i) / 16 + t * 2
        const len = (42 + Math.sin(t * 9 + i) * 12) * this.scale
        ctx.strokeStyle = i % 2 ? TEAM.player.main : TEAM.rival.sub
        ctx.lineWidth = 2 * this.scale
        ctx.beginPath()
        ctx.moveTo(WIDTH * 0.5 + Math.cos(angle) * 26 * this.scale, y + Math.sin(angle) * 20 * this.scale)
        ctx.lineTo(WIDTH * 0.5 + Math.cos(angle) * len, y + Math.sin(angle) * len)
        ctx.stroke()
      }
    }

    ctx.fillStyle = '#ffffff'
    ctx.font = `bold ${18 * this.scale}px Arial`
    ctx.fillText(`${TEAM.player.name}  对阵  ${TEAM.rival.name}`, WIDTH * 0.5, HEIGHT * 0.68)
    ctx.font = `${12 * this.scale}px Arial`
    ctx.fillText(t < 2.6 ? '激情碰撞，即将开赛' : '准备开球', WIDTH * 0.5, HEIGHT * 0.72)
    this.drawEffects()
  }

  drawLargeTeamAvatar(x, y, team) {
    ctx.save()
    ctx.translate(x, y)
    ctx.fillStyle = 'rgba(0,0,0,0.18)'
    this.flatEllipse(0, 72 * this.scale, 72 * this.scale, 16 * this.scale)
    this.drawTeamToken(0, 0, 58 * this.scale, team)
    ctx.fillStyle = '#ffffff'
    ctx.font = `bold ${16 * this.scale}px Arial`
    ctx.textAlign = 'center'
    ctx.fillText(team.name, 0, 88 * this.scale)
    ctx.restore()
  }

  drawTeamToken(x, y, r, team) {
    ctx.save()
    ctx.translate(x, y)
    ctx.fillStyle = team.sub
    ctx.beginPath()
    ctx.arc(0, 0, r + 5 * this.scale, 0, Math.PI * 2)
    ctx.fill()
    ctx.fillStyle = team.main
    ctx.beginPath()
    ctx.arc(0, 0, r, 0, Math.PI * 2)
    ctx.fill()
    ctx.fillStyle = team.sub
    ctx.fillRect(-r * 0.9, -r * 0.12, r * 1.8, r * 0.24)
    ctx.fillStyle = pickTextColor(team.main)
    ctx.font = `bold ${Math.max(8, r * 0.42)}px Arial`
    ctx.textAlign = 'center'
    ctx.fillText(team.short, 0, r * 0.16)
    ctx.restore()
  }

  drawConfetti() {
    for (const piece of this.confetti) {
      ctx.save()
      ctx.translate(piece.x, piece.y)
      ctx.rotate(piece.rot)
      ctx.fillStyle = piece.color
      ctx.fillRect(-piece.w * 0.5, -piece.h * 0.5, piece.w, piece.h)
      ctx.restore()
    }
  }

  drawScoreboard() {
    const top = HEIGHT * 0.025
    const h = HEIGHT * 0.075
    this.roundRect(WIDTH * 0.03, top, WIDTH * 0.36, h, 12, '#fff3b9')
    this.roundRect(WIDTH * 0.61, top, WIDTH * 0.36, h, 12, '#eafaff')
    this.drawBadge(WIDTH * 0.075, top + h * 0.52, TEAM.player)
    this.drawBadge(WIDTH * 0.925, top + h * 0.52, TEAM.rival)

    ctx.textAlign = 'center'
    ctx.fillStyle = TEAM.player.text
    ctx.font = `bold ${13 * this.scale}px Arial`
    ctx.fillText(TEAM.player.name, WIDTH * 0.22, top + h * 0.38)
    ctx.fillStyle = TEAM.rival.text
    ctx.fillText(TEAM.rival.name, WIDTH * 0.78, top + h * 0.38)

    ctx.font = `bold ${11 * this.scale}px Arial`
    ctx.fillStyle = this.turn === 'player' ? '#e65733' : '#6d7891'
    ctx.fillText(this.turn === 'player' ? '玩家回合' : '等待', WIDTH * 0.22, top + h * 0.68)
    ctx.fillStyle = this.turn === 'rival' ? '#237ee5' : '#6d7891'
    ctx.fillText(this.turn === 'rival' ? 'AI回合' : '等待', WIDTH * 0.78, top + h * 0.68)

    ctx.fillStyle = '#0f9cc8'
    ctx.beginPath()
    ctx.moveTo(WIDTH * 0.43, top + 5)
    ctx.lineTo(WIDTH * 0.57, top + 5)
    ctx.lineTo(WIDTH * 0.535, top + h)
    ctx.lineTo(WIDTH * 0.465, top + h)
    ctx.closePath()
    ctx.fill()
    ctx.fillStyle = '#ffffff'
    ctx.font = `bold ${22 * this.scale}px Arial`
    ctx.fillText('VS', WIDTH * 0.5, top + h * 0.66)

    this.roundRect(WIDTH * 0.36, HEIGHT * 0.108, WIDTH * 0.28, 22 * this.scale, 8, '#ffffff')
    ctx.fillStyle = '#247d9a'
    ctx.font = `bold ${11 * this.scale}px Arial`
    ctx.fillText(`第 ${this.turnCount} 回合`, WIDTH * 0.5, HEIGHT * 0.108 + 15 * this.scale)
  }

  drawBadge(x, y, team) {
    ctx.fillStyle = team.sub
    ctx.beginPath()
    ctx.arc(x, y, 22 * this.scale, 0, Math.PI * 2)
    ctx.fill()
    ctx.fillStyle = team.main
    ctx.beginPath()
    ctx.arc(x, y, 16 * this.scale, 0, Math.PI * 2)
    ctx.fill()
  }

  drawField() {
    const f = this.field
    this.roundRect(f.x - 5, f.y - 5, f.w + 10, f.h + 10, 16, 'rgba(255,255,255,0.54)')
    this.roundRect(f.x, f.y, f.w, f.h, 14, '#b9e870')
    for (let i = 0; i < 12; i += 1) {
      ctx.fillStyle = i % 2 ? '#b1df6a' : '#c4ef7d'
      ctx.fillRect(f.x, f.y + (f.h / 12) * i, f.w, f.h / 12)
    }

    ctx.strokeStyle = 'rgba(255,255,255,0.68)'
    ctx.lineWidth = 2 * this.scale
    ctx.beginPath()
    ctx.moveTo(f.x, f.y + f.h * 0.5)
    ctx.lineTo(f.x + f.w, f.y + f.h * 0.5)
    ctx.stroke()
    ctx.beginPath()
    ctx.arc(f.x + f.w * 0.5, f.y + f.h * 0.5, f.w * 0.17, 0, Math.PI * 2)
    ctx.stroke()
    ctx.strokeRect(f.x + f.w * 0.23, f.y, f.w * 0.54, f.h * 0.13)
    ctx.strokeRect(f.x + f.w * 0.23, f.y + f.h * 0.87, f.w * 0.54, f.h * 0.13)

    this.drawGoal(f.x + f.w * 0.5 - this.goalWidth * 0.5, f.y - 10 * this.scale, this.goalWidth, 12 * this.scale, TEAM.rival.sub)
    this.drawGoal(f.x + f.w * 0.5 - this.goalWidth * 0.5, f.y + f.h - 2 * this.scale, this.goalWidth, 12 * this.scale, '#ff7669')
  }

  drawGoal(x, y, w, h, color) {
    ctx.fillStyle = color
    ctx.fillRect(x, y, w, h)
    ctx.fillStyle = 'rgba(255,255,255,0.64)'
    for (let i = 0; i < 7; i += 1) {
      ctx.fillRect(x + (w / 7) * i, y, 2, h)
    }
  }

  drawAimGuide() {
    if (!this.pointer.active || !this.selected) return
    const dx = this.pointer.startX - this.pointer.x
    const dy = this.pointer.startY - this.pointer.y
    const pull = clamp(Math.hypot(dx, dy), 0, 145 * this.scale)
    const angle = Math.atan2(dy, dx)
    const color = pull > 90 * this.scale ? '#ffdf4d' : '#ffffff'

    ctx.strokeStyle = 'rgba(0,0,0,0.22)'
    ctx.lineWidth = 2 * this.scale
    ctx.beginPath()
    ctx.moveTo(this.selected.x, this.selected.y)
    ctx.lineTo(this.pointer.x, this.pointer.y)
    ctx.stroke()

    for (let i = 1; i <= 9; i += 1) {
      const t = i / 9
      const px = this.selected.x + Math.cos(angle) * pull * 2.35 * t
      const py = this.selected.y + Math.sin(angle) * pull * 2.35 * t
      if (!this.isInsideField(px, py, 5 * this.scale)) break
      ctx.globalAlpha = 1 - t * 0.55
      ctx.fillStyle = color
      ctx.beginPath()
      ctx.arc(px, py, (5 - t * 2) * this.scale, 0, Math.PI * 2)
      ctx.fill()
    }
    ctx.globalAlpha = 1
  }

  isInsideField(x, y, pad) {
    const f = this.field
    return x > f.x + pad && x < f.x + f.w - pad && y > f.y + pad && y < f.y + f.h - pad
  }

  drawBodies() {
    this.drawBall()
    const ordered = this.players.slice().sort((a, b) => a.y - b.y)
    for (const p of ordered) this.drawPlayer(p)
  }

  drawBall() {
    const s = this.scale
    const r = this.ball.r
    ctx.save()
    ctx.translate(this.ball.x, this.ball.y)
    ctx.rotate(this.ball.spin)

    ctx.fillStyle = 'rgba(0,0,0,0.18)'
    this.flatEllipse(3 * s, r * 1.2, r * 0.95, r * 0.28)

    ctx.fillStyle = '#f8f8f4'
    ctx.beginPath()
    ctx.arc(0, 0, r, 0, Math.PI * 2)
    ctx.fill()

    ctx.save()
    ctx.beginPath()
    ctx.arc(0, 0, r, 0, Math.PI * 2)
    ctx.clip()

    ctx.fillStyle = '#1b1b1b'
    const patches = [
      [-0.42, -0.48, 0.22, 0.22],
      [0.03, -0.56, 0.25, 0.2],
      [0.44, -0.34, 0.22, 0.22],
      [-0.58, -0.02, 0.24, 0.2],
      [-0.14, 0.05, 0.28, 0.24],
      [0.38, 0.0, 0.24, 0.2],
      [-0.35, 0.42, 0.22, 0.22],
      [0.12, 0.48, 0.26, 0.2]
    ]
    for (const patch of patches) {
      const px = patch[0] * r
      const py = patch[1] * r
      const pw = patch[2] * r
      const ph = patch[3] * r
      ctx.beginPath()
      ctx.moveTo(px, py)
      ctx.lineTo(px + pw * 0.5, py - ph * 0.2)
      ctx.lineTo(px + pw, py)
      ctx.lineTo(px + pw * 0.82, py + ph)
      ctx.lineTo(px + pw * 0.18, py + ph)
      ctx.closePath()
      ctx.fill()
    }

    ctx.strokeStyle = '#111111'
    ctx.lineWidth = 1.2 * s
    ctx.beginPath()
    ctx.arc(0, 0, r, 0, Math.PI * 2)
    ctx.stroke()

    ctx.fillStyle = 'rgba(255,255,255,0.32)'
    ctx.beginPath()
    ctx.arc(-r * 0.32, -r * 0.34, r * 0.55, Math.PI * 1.05, Math.PI * 1.6)
    ctx.fill()
    ctx.restore()

    ctx.restore()
  }

  drawPlayer(p) {
    const s = this.scale
    const team = TEAM[p.team]
    const dead = p.hp <= 0
    ctx.save()
    ctx.translate(p.x, p.y)
    ctx.globalAlpha = dead ? 0.32 : 1

    ctx.fillStyle = 'rgba(28,64,38,0.2)'
    this.flatEllipse(0, p.r * 0.85, p.r * 0.9, p.r * 0.26)

    if (this.selected === p || this.shotOwner === p || p.hitFlash > 0) {
      ctx.globalAlpha = dead ? 0.22 : 0.42 + p.hitFlash
      ctx.fillStyle = p.hitFlash > 0 ? '#ffffff' : team.main
      ctx.beginPath()
      ctx.arc(0, 0, p.r + 11 * s, 0, Math.PI * 2)
      ctx.fill()
      ctx.globalAlpha = dead ? 0.32 : 1
    }

    ctx.fillStyle = team.sub
    ctx.beginPath()
    ctx.arc(0, 0, p.r + 3 * s, 0, Math.PI * 2)
    ctx.fill()
    ctx.fillStyle = team.main
    ctx.beginPath()
    ctx.arc(0, 0, p.r, 0, Math.PI * 2)
    ctx.fill()
    ctx.fillStyle = team.sub
    ctx.fillRect(-p.r * 0.62, p.r * 0.12, p.r * 1.24, p.r * 0.55)

    ctx.fillStyle = team.text
    ctx.font = `bold ${12 * s}px Arial`
    ctx.textAlign = 'center'
    ctx.fillText(p.number, 0, p.r * 0.45)
    ctx.font = `bold ${8.5 * s}px Arial`
    ctx.fillText(`ATK ${p.atk}`, 0, -p.r * 0.28)
    if (dead) {
      ctx.strokeStyle = '#323a46'
      ctx.lineWidth = 3 * s
      ctx.beginPath()
      ctx.moveTo(-p.r * 0.45, -p.r * 0.45)
      ctx.lineTo(p.r * 0.45, p.r * 0.45)
      ctx.moveTo(p.r * 0.45, -p.r * 0.45)
      ctx.lineTo(-p.r * 0.45, p.r * 0.45)
      ctx.stroke()
    }
    ctx.restore()

    this.drawHpBar(p)
  }

  drawHpBar(p) {
    const s = this.scale
    const w = 48 * s
    const h = 6 * s
    const x = p.x - w * 0.5
    const y = p.y + p.r + 9 * s
    this.roundRect(x, y, w, h, 3 * s, 'rgba(0,0,0,0.22)')
    const ratio = clamp(p.hp / p.maxHp, 0, 1)
    this.roundRect(x, y, w * ratio, h, 3 * s, ratio > 0.45 ? '#37cf73' : '#ff6a5e')
    ctx.fillStyle = '#ffffff'
    ctx.font = `bold ${8 * s}px Arial`
    ctx.textAlign = 'center'
    ctx.fillText(`${p.hp}/${p.maxHp}`, p.x, y - 2 * s)
  }

  drawEffects() {
    for (const e of this.effects) {
      ctx.globalAlpha = clamp(e.life / e.maxLife, 0, 1)
      ctx.fillStyle = e.color
      ctx.beginPath()
      ctx.arc(e.x, e.y, e.size, 0, Math.PI * 2)
      ctx.fill()
    }
    ctx.globalAlpha = 1
  }

  drawMessage() {
    if (this.messageTimer <= 0) return
    const w = WIDTH * 0.68
    const h = 34 * this.scale
    const x = WIDTH * 0.16
    const y = HEIGHT * 0.112
    this.roundRect(x, y, w, h, 10, 'rgba(255,255,255,0.94)')
    ctx.fillStyle = '#217d91'
    ctx.font = `bold ${13 * this.scale}px Arial`
    ctx.textAlign = 'center'
    ctx.fillText(this.message, WIDTH * 0.5, y + 22 * this.scale)
  }

  drawResult() {
    if (!this.winner) return
    ctx.fillStyle = 'rgba(0,40,70,0.42)'
    ctx.fillRect(0, 0, WIDTH, HEIGHT)
    this.roundRect(WIDTH * 0.11, HEIGHT * 0.36, WIDTH * 0.78, HEIGHT * 0.24, 16, '#ffffff')
    ctx.fillStyle = this.winner === 'player' ? '#0f8d5a' : '#2675d8'
    ctx.textAlign = 'center'
    ctx.font = `bold ${28 * this.scale}px Arial`
    ctx.fillText(this.winner === 'player' ? 'YOU WIN' : 'AI WINS', WIDTH * 0.5, HEIGHT * 0.425)
    ctx.font = `bold ${16 * this.scale}px Arial`
    ctx.fillText(this.message, WIDTH * 0.5, HEIGHT * 0.48)
    ctx.font = `${13 * this.scale}px Arial`
    ctx.fillText(this.currentTournamentMatch ? '点击屏幕继续赛程' : '点击屏幕重新开始', WIDTH * 0.5, HEIGHT * 0.535)
  }

  flatEllipse(x, y, rx, ry) {
    ctx.save()
    ctx.translate(x, y)
    ctx.scale(1, ry / rx)
    ctx.beginPath()
    ctx.arc(0, 0, rx, 0, Math.PI * 2)
    ctx.fill()
    ctx.restore()
  }

  roundRect(x, y, w, h, r, color) {
    ctx.fillStyle = color
    ctx.beginPath()
    ctx.moveTo(x + r, y)
    ctx.arcTo(x + w, y, x + w, y + h, r)
    ctx.arcTo(x + w, y + h, x, y + h, r)
    ctx.arcTo(x, y + h, x, y, r)
    ctx.arcTo(x, y, x + w, y, r)
    ctx.closePath()
    ctx.fill()
  }

  strokeRoundRect(x, y, w, h, r, color, lineWidth) {
    ctx.strokeStyle = color
    ctx.lineWidth = lineWidth
    ctx.beginPath()
    ctx.moveTo(x + r, y)
    ctx.arcTo(x + w, y, x + w, y + h, r)
    ctx.arcTo(x + w, y + h, x, y + h, r)
    ctx.arcTo(x, y + h, x, y, r)
    ctx.arcTo(x, y, x + w, y, r)
    ctx.closePath()
    ctx.stroke()
  }
}

new WorldCupStrike()
