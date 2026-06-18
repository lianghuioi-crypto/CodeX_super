const STORY_DATA = {
  title: '绯衣鬼戏',
  subtitle: '大理寺司案沈清和的第一案',
  caseId: 'case-001',
  acts: [
    {
      id: 'prologue',
      title: '三个月前',
      summary:
        '新证据证明当年判决有误，沈氏失去圣心。一个月前，长公主举荐沈清和入大理寺任司案。',
    },
    {
      id: 'opening-night',
      title: '今夜',
      summary:
        '长安名伶谢无咎在倚云楼戏台上倒下，众人说是三年前的绯衣女鬼回来索命。',
    },
  ],
  scenes: [
    {
      id: 'stage-open',
      title: '绮云楼 · 戏台',
      placeLabel: '红幕半垂的戏台',
      palette: ['#372026', '#7d2633', '#d7ad6f'],
      notes: ['后台铜镜微晃', '红衣鬼影一闪', '男伶倒在台中央'],
      steps: [
        { type: 'dialog', speaker: '女伶', text: '你负我三年，今日可敢回头看我？' },
        { type: 'dialog', speaker: '男伶', text: '人死如灯灭，哪来的鬼！' },
        {
          type: 'narration',
          text:
            '一侧幕布没拉好，后台铜镜微微一晃，红衣鬼影一闪出现。台上男伶忽然捂住喉咙，倒在戏台上。',
        },
        { type: 'dialog', speaker: '宾客', text: '好！谢大家这一倒跟真的似的！' },
        { type: 'dialog', speaker: '女伶', text: '谢郎？' },
        { type: 'narration', text: '后台传来尖叫。' },
        { type: 'dialog', speaker: '小伶人', text: '镜里有人！绯衣娘子回来了！' },
      ],
    },
    {
      id: 'front-door',
      title: '倚云楼 · 门口',
      placeLabel: '灯影摇晃的大门',
      palette: ['#1f2f36', '#b44a3c', '#e2c48c'],
      notes: ['大门半掩', '掌柜拦路', '寺牒在袖'],
      steps: [
        {
          type: 'dialog',
          speaker: '沈清和',
          text: '我叫沈清和，一个月前，我从公主府被调入大理寺，任职司案。',
        },
        {
          type: 'dialog',
          speaker: '沈清和',
          text: '今夜，长安最有名的男伶谢无咎，在倚云楼死在满堂宾客眼前。',
        },
        {
          type: 'dialog',
          speaker: '沈清和',
          text: '有人说，他不是被人杀的，是三年前死在这里的绯衣女鬼，回来索命了。',
        },
        {
          type: 'narration',
          text: '昭雪从沈清和袖中探出头，像是也闻到了案子的味道。',
        },
        {
          type: 'dialog',
          speaker: '沈清和',
          text: '昭雪，走。我们进去看看，杀他的到底是人，还是“鬼”。',
        },
        {
          type: 'hotspot',
          prompt: '点击大门靠近',
          hotspots: [
            {
              id: 'half-open-door',
              label: '推开大门',
              x: 0.34,
              y: 0.2,
              w: 0.32,
              h: 0.44,
              result: [
                { speaker: '掌柜', text: '女郎留步，今夜楼中出了些小乱，不便待客。' },
                { speaker: '沈清和', text: '大理寺司案，沈清和。奉寺牒勘验命案。' },
                { speaker: '掌柜', text: '这……这……' },
                {
                  speaker: '掌柜',
                  text: '楼里多是贵客，若传出去说闹出人命，小楼的招牌就——',
                },
                {
                  speaker: '沈清和',
                  text: '招牌若比人命要紧，你现在就可以跟我回大理寺解释。',
                },
                { speaker: '掌柜', text: '小人不敢！大人随我进去吧。' },
              ],
              next: true,
            },
          ],
        },
        {
          type: 'hotspot',
          prompt: '点击大门进入戏台',
          hotspots: [
            {
              id: 'enter-stage',
              label: '进入倚云楼',
              x: 0.28,
              y: 0.16,
              w: 0.44,
              h: 0.5,
              result: [{ speaker: '掌柜', text: '沈司案，人就在台上。小人们什么都没敢动。' }],
              next: true,
            },
          ],
        },
      ],
    },
    {
      id: 'body-check',
      title: '倚云楼 · 戏台',
      placeLabel: '谢无咎倒在台中央',
      palette: ['#221e24', '#872a34', '#d5c4a1'],
      notes: ['红幕半垂', '锣鼓歪倒', '尸身覆着白布'],
      steps: [
        { type: 'dialog', speaker: '沈清和', text: '嗯，我先看看尸体。' },
        {
          type: 'inspect',
          prompt: '勘验尸体上的三个疑点',
          completeText: '疑点已全部收集',
          hotspots: [
            {
              id: 'throat',
              label: '喉间',
              x: 0.46,
              y: 0.33,
              w: 0.12,
              h: 0.08,
              clue: '喉间发黑，却没有指痕或勒痕。',
              result: [
                { speaker: '沈清和', text: '喉间发黑。远看确实像被什么东西掐住。' },
                { speaker: '掌柜', text: '是啊！楼里的人都说，这是绯衣娘子回来索命！' },
                { speaker: '沈清和', text: '可脖子上没有指痕，也没有勒痕。' },
              ],
            },
            {
              id: 'lapel',
              label: '衣襟',
              x: 0.39,
              y: 0.48,
              w: 0.12,
              h: 0.09,
              clue: '衣襟内侧有细粉，颜色发黑。',
              result: [
                { speaker: '沈清和', text: '昭雪，来，闻闻。' },
                { speaker: '画面', text: '昭雪凑近衣襟闻了闻，不屑地转开头。' },
                { speaker: '掌柜', text: '伶人上台都要熏香扑粉，味道杂些也正常吧？' },
                { speaker: '沈清和', text: '嘘——不对，衣襟内侧有细粉，颜色发黑。' },
              ],
            },
            {
              id: 'right-hand',
              label: '右手',
              x: 0.62,
              y: 0.49,
              w: 0.12,
              h: 0.09,
              clue: '右手掌心有压痕，死前似乎攥过耳坠。',
              result: [
                { speaker: '沈清和', text: '右手指节僵硬，掌心有压痕。他死前手里攥着东西？' },
                { speaker: '掌柜', text: '一枚耳坠……绯衣娘子的耳坠。可后来一乱，就不知落到哪里去了。' },
                { speaker: '沈清和', text: '偏偏是死人手里的东西不见了…' },
              ],
            },
          ],
          after: [
            { speaker: '掌柜', text: '沈司案，查到什么了吗?' },
            {
              speaker: '沈清和',
              text: '你们这没闹鬼，他也只是被人刻意做成了“鬼掐喉”的样子。',
            },
          ],
        },
        {
          type: 'hotspot',
          prompt: '昭雪发现木板缝隙中有东西',
          hotspots: [
            {
              id: 'floor-gap',
              label: '木板缝隙',
              x: 0.18,
              y: 0.58,
              w: 0.64,
              h: 0.11,
              result: [
                { speaker: '沈清和', text: '昭雪，下面有东西？' },
                { speaker: '沈清和', text: '你这小胖爪可伸不进去，让我来吧。' },
              ],
              next: true,
            },
          ],
        },
        {
          type: 'merge',
          title: '锦囊合成',
          prompt: '把零散线索合成可取物的长柄竹镊',
          startItem: '扇骨',
          chain: ['扇骨', '结实的竹片', '缠了布条当手柄的竹条', '长柄竹镊'],
          submitText: '用取物夹探入木缝',
          resultItem: '耳坠',
          after: [
            { speaker: '画面', text: '竹镊探进地板木缝，伸出来时，末端夹着一枚耳坠。' },
            { speaker: '掌柜', text: '这、这是绯衣娘子的耳坠！' },
            { speaker: '沈清和', text: '耳坠边缘有撬痕，被人打开过。' },
            { speaker: '掌柜', text: '耳坠还能打开？' },
            {
              speaker: '沈清和',
              text: '有些首饰会特地做成空心的，用来藏香、藏药。打开看看就知道了。',
            },
          ],
        },
        {
          type: 'merge',
          title: '打开耳坠',
          prompt: '继续合成工具，取出耳坠里的残留物',
          startItem: '绣花针',
          chain: ['绣花针', '手帕', '凿子', '一撮黑色粉末'],
          submitText: '撬开耳坠暗格',
          resultItem: '一撮黑色粉末',
          after: [
            { speaker: '沈清和', text: '耳坠里残留的粉末和谢无咎衣襟里的黑粉是同一种。' },
            {
              speaker: '掌柜',
              text: '真是疯了！这可是绯衣娘子的遗物啊，谁敢对它做手脚，也不怕被冤魂缠上！',
            },
            {
              speaker: '沈清和',
              text: '我也好奇是谁在“借鬼杀人”。这楼里的伶人、乐工、杂役…掌柜你也有可能嘛。',
            },
            { speaker: '掌柜', text: '司案可别吓我了，哈…哈哈…' },
            { speaker: '沈清和', text: '走吧，我们去戏台后面，问问那面铜镜里的鬼影。' },
          ],
        },
      ],
    },
    {
      id: 'backstage-door',
      title: '倚云楼 · 出将门',
      placeLabel: '半落的门帘',
      palette: ['#17191f', '#5b1824', '#b08c59'],
      notes: ['帘面绣着“出将”', '门后全黑', '铜镜疑云未解'],
      steps: [
        {
          type: 'hotspot',
          prompt: '点击戏台侧边的出将门',
          hotspots: [
            {
              id: 'backstage',
              label: '靠近门帘',
              x: 0.34,
              y: 0.18,
              w: 0.32,
              h: 0.48,
              result: [
                {
                  speaker: '画面',
                  text: '门帘掉了一半，帘面上绣着“出将”。没有门帘遮挡的门洞黑得看不见底。',
                },
              ],
              next: true,
            },
          ],
        },
        {
          type: 'ending',
          text: '第一关结束。下一步将进入后台，追查铜镜中的鬼影。',
        },
      ],
    },
  ],
};

export default STORY_DATA;
