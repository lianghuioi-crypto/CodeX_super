const CHARACTER_ASSETS = {
  女伶: {
    body: 'images/characters/cutouts/nvling.png',
    avatar: 'images/characters/avatars/nvling.png',
  },
  男伶: {
    body: 'images/characters/cutouts/nanling.png',
    avatar: 'images/characters/avatars/nanling.png',
  },
  谢无咎: {
    body: 'images/characters/cutouts/xie-wujiu.png',
    avatar: 'images/characters/avatars/xie-wujiu.png',
  },
  宾客: {
    body: 'images/characters/cutouts/binke.png',
    avatar: 'images/characters/avatars/binke.png',
  },
  小伶人: {
    body: 'images/characters/cutouts/xiaolingren.png',
    avatar: 'images/characters/avatars/xiaolingren.png',
  },
  掌柜: {
    body: 'images/characters/cutouts/zhanggui.png',
    avatar: 'images/characters/avatars/zhanggui.png',
  },
  昭雪: {
    body: 'images/characters/cutouts/zhaoxue.png',
    avatar: 'images/characters/avatars/zhaoxue.png',
  },
  沈清和: {
    body: 'images/characters/cutouts/shen-qinghe.png',
    avatar: 'images/characters/avatars/shen-qinghe.png',
  },
  小乙: {
    body: 'images/characters/cutouts/xiaoyi.png',
    avatar: 'images/characters/avatars/xiaoyi.png',
  },
  绯萤: {
    body: 'images/characters/cutouts/feiying.png',
    avatar: 'images/characters/avatars/feiying.png',
  },
  沈飞翊: {
    body: 'images/characters/cutouts/shen-feiyi.png',
    avatar: 'images/characters/avatars/shen-feiyi.png',
  },
};

const PLACEHOLDER_CHARACTER_COLORS = {
};

const PROP_ASSETS = {
  mirrorGhost: 'images/props/tongjing-nvgui.png',
  qiyunStage: 'images/scenes/qiyun-stage.jpg',
  qiyunDoorOpen: 'images/scenes/qiyun-door-open.jpg',
  qiyunDoorClosed: 'images/scenes/qiyun-door-closed.png',
  backstageDoor: 'images/scenes/backstage-door.jpg',
  ch2BackstageRoom: 'images/scenes/ch2-backstage-room.jpg',
  ch2XieSeatProps: 'images/scenes/ch2-xie-seat-props.jpg',
  ch2PropRackRedMud: 'images/scenes/ch2-prop-rack-red-mud.jpg',
  ch2DressingDoor: 'images/scenes/ch2-dressing-door.jpg',
};

const CHANGELOG = [
  {
    version: '1.22',
    date: '2026-06-29',
    items: [
      '第二章后台戏房接入正式 AI 场景图，按戏房入口、谢无咎专座、道具架红泥、妆阁门前分段切换。',
      '新增小乙、绯萤、沈飞翊 Q 版角色资源，并为对话生成头像 icon。',
      '场景切换统一加入柔和淡入淡出，中途换景后再淡入，减少剧情推进时的突兀跳变。',
      '修正小乙登场时机，敲响铜锣后才在后台戏房中出现。',
    ],
  },
  {
    version: '1.21',
    date: '2026-06-26',
    items: [
      '交互点编辑入口改为本地调试页专用，线上页面默认不显示编辑模式。',
      '交互点保存改为写入工程内覆盖文件，方便后续提交到 GitHub 后直接生效。',
      '本地保存失败时会提示启动本地编辑服务，避免误以为只保存到了浏览器缓存。',
    ],
  },
  {
    version: '1.20',
    date: '2026-06-26',
    items: [
      '交互点编辑器面板移动到下方对话框区域，避免遮挡舞台热区调整。',
      '进入编辑模式后隐藏所有角色、头像气泡和尸体形象，只保留场景与交互点框。',
      '底部编辑面板改为紧凑多列交互点列表，并保留场景切换、尺寸调整、重置和保存。',
    ],
  },
  {
    version: '1.19',
    date: '2026-06-26',
    items: [
      '新增交互点编辑模式，可从游戏界面角落进入并按场景切换编辑。',
      '编辑器右侧罗列当前场景全部交互点，支持拖拽调整位置和按钮微调色块大小。',
      '交互点调整可保存到本地并立即用于游戏预览，刷新页面后继续生效。',
      '新增当前交互点重置按钮，方便恢复剧情数据默认位置。',
    ],
  },
  {
    version: '1.18',
    date: '2026-06-26',
    items: [
      '新增第二章“后台戏房”剧情体验流程，覆盖妆台、鬼面、铜锣、小乙、谢无咎专座、血包、走位板、红泥戏鞋和妆阁门线索。',
      '首页新增章节选择，可直接从第一章或第二章开始测试。',
      '第二章角色和场景暂用色块与文字标注占位，后续可按资源逐步替换。',
    ],
  },
  {
    version: '1.17',
    date: '2026-06-19',
    items: [
      '优化进入绮云楼后的节奏：点击进入后先切换到戏台尸检场景，再继续播放掌柜说明对话。',
    ],
  },
  {
    version: '1.16',
    date: '2026-06-18',
    items: [
      '替换倚云楼出将门场景资源，并纳入启动预加载。',
      '谢无咎尸体在戏台和尸检场景中统一向下移动30像素，让落点更贴近地板。',
      '下调铜镜位置，使铜镜与角色处于更接近的同一视觉水平线。',
    ],
  },
  {
    version: '1.15',
    date: '2026-06-18',
    items: [
      '修复谢无咎尸体在戏台和尸检场景中悬浮的问题，让尸体重新贴合地板位置。',
      '修复绮云楼门口未点击“推开大门”前提前露出开门状态的问题。',
      '替换掌柜、小伶人立绘与对话头像资源。',
    ],
  },
  {
    version: '1.14',
    date: '2026-06-18',
    items: [
      '绮云楼门口替换为正式场景图，使用开门底图和关门叠层组合显示。',
      '点击推开大门后，关闭门叠层会渐隐消失，形成开门过渡。',
      '重新调整门口角色比例，并将掌柜站位修正到门框内。',
    ],
  },
  {
    version: '1.13',
    date: '2026-06-18',
    items: [
      '绮云楼戏台场景替换为正式背景图，并纳入启动预加载。',
      '重新调整戏台场景角色站位和大小，让人物与远景舞台比例更协调。',
    ],
  },
  {
    version: '1.12',
    date: '2026-06-18',
    items: [
      '昭雪在“从沈清和袖中探出头”的旁白出现时同步登场，不再等对话框关闭后才出现。',
    ],
  },
  {
    version: '1.11',
    date: '2026-06-18',
    items: [
      '下方对话框改为米白底色、棕色小字号正文，并支持关键信息、人名、地点标红加粗。',
      '小伶人喊出镜中有人后新增幕布式转场动画，再切换到倚云楼门口下一幕。',
    ],
  },
  {
    version: '1.10',
    date: '2026-06-18',
    items: [
      '交互点击区域的虚线框改为缓慢闪动，提升可点击提示的辨识度。',
      '对项目图片资源进行轻量压缩，在尽量保留观感的前提下提升启动加载效率。',
    ],
  },
  {
    version: '1.9',
    date: '2026-06-18',
    items: [
      '新增启动资源加载页，进入剧情前预加载角色立绘、头像和铜镜女鬼道具图。',
      '资源加载完成后再显示更新日志和剧情内容，减少体验过程中出现色块占位的问题。',
    ],
  },
  {
    version: '1.8',
    date: '2026-06-18',
    items: [
      '非角色对话框恢复到底部显示，名字框改为蓝色。',
      '修复手机竖屏下更新日志翻页按钮与开始按钮重叠。',
      '重新调整竖屏角色头顶姓名与省略号气泡位置。',
    ],
  },
  {
    version: '1.7',
    date: '2026-06-18',
    items: [
      '浏览器预览改为手机竖屏分辨率，桌面访问时居中显示手机画布。',
      'Canvas 尺寸改为跟随手机预览容器，方便按手游比例验收画面。',
    ],
  },
  {
    version: '1.6',
    date: '2026-06-18',
    items: [
      '更新女伶角色立绘，并同步替换女伶对话头像。',
      '调整戏台站位，小伶人移动到女伶另一侧。',
      '镜中女鬼图片保留原构图与雾气，仅将衣服处理为红色。',
    ],
  },
  {
    version: '1.5',
    date: '2026-06-18',
    items: [
      '统一谢无咎两次尸体出场尺寸，均较初版缩小 30%。',
      '尸体勘验改为喉间、衣襟、右手顺序逐个出现调查点。',
      '衣襟调查完成后触发沈清和让昭雪闻一闻衣襟的桥段。',
      '补齐近期本地迭代更新日志。',
    ],
  },
  {
    version: '1.4',
    date: '2026-06-18',
    items: [
      '铜镜女鬼改用附件图片资源，并保持死亡旁白关闭后的出现时机。',
      '调整门口场景角色登场：昭雪在旁白关闭后出现，掌柜在推开大门后出现。',
      '修正门口阶段掌柜提前站在画面中的问题。',
    ],
  },
  {
    version: '1.3',
    date: '2026-06-18',
    items: [
      '死亡旁白关闭后，戏台男伶切换为倒地的谢无咎尸体状态。',
      '铜镜中新增披头散发女鬼影像。',
      '修正宾客只作为对话头像出现，小伶人站到女伶身边。',
      '区分男伶与谢无咎两套状态形象，男伶保持原立绘，尸体阶段使用谢无咎。',
    ],
  },
  {
    version: '1.2',
    date: '2026-06-18',
    items: [
      '新增每次打开页面展示的更新日志弹窗，并在界面右上角增加更新日志按钮。',
      '角色高亮改为脚下柔和光晕，取消旧版蛋形轮廓。',
      '修正沈清和、掌柜、昭雪头像裁切，头像显示在角色对话框左侧。',
      '非角色旁白改为屏幕中央对话框显示。',
      '尸体三处疑点必须逐个点击收集，完成后才进入后续推理。',
      '新增宾客、小伶人、谢无咎角色资源，替换掌柜形象，修正有角色对话误用中央旁白框的问题。',
    ],
  },
  {
    version: '1.1',
    date: '2026-06-18',
    items: [
      '角色形象替换为正式角色图，并生成透明人物立绘和头像 icon。',
      '当前说话人支持高亮、15% 放大和头顶省略号对话泡泡。',
      '对话框加入角色头像显示。',
    ],
  },
  {
    version: '1.0',
    date: '2026-06-18',
    items: [
      '完成《绯衣鬼戏》第一关剧情体验器基础流程。',
      '支持场景推进、热点点击、尸体勘验、疑点收集和二合合成。',
      '发布 Netlify 线上预览版本。',
    ],
  },
];

export default class StoryEngine {
  constructor(canvas, ctx, story, options = {}) {
    this.canvas = canvas;
    this.ctx = ctx;
    this.story = story;
    this.chapters = story.chapters || [
      {
        id: story.caseId || 'chapter-1',
        title: story.title || '第一章',
        subtitle: story.subtitle || '',
        scenes: story.scenes || [],
      },
    ];
    this.chapterIndex = 0;
    this.currentChapter = this.chapters[0];
    this.story.scenes = this.currentChapter.scenes;
    this.getSize = options.getSize || (() => ({ width: canvas.width, height: canvas.height }));
    this.onComplete = options.onComplete || (() => {});
    this.regions = [];
    this.sceneIndex = 0;
    this.stepIndex = 0;
    this.messageQueue = [];
    this.collected = {};
    this.inventory = [];
    this.mergeProgress = {};
    this.finished = false;
    this.toast = '';
    this.toastUntil = 0;
    this.characterImages = {};
    this.propImages = {};
    this.activeSpeaker = '';
    this.overlay = 'loading';
    this.changelogPage = 0;
    this.transition = null;
    this.doorOpenedAt = 0;
    this.editorEnabled = Boolean(options.editorEnabled);
    this.persistHotspotOverrides = options.persistHotspotOverrides || null;
    this.hotspotOverrides = options.hotspotOverrides || this.loadHotspotOverrides();
    this.defaultHotspotRects = this.captureDefaultHotspotRects();
    this.editor = {
      active: false,
      sceneIndex: 0,
      selectedKey: '',
      drag: null,
      dirty: false,
    };
    this.assetTotal = 0;
    this.assetLoaded = 0;
    this.assetFailed = 0;
    this.assetErrors = [];
    this.assetsReady = false;
    this.startRequested = false;
    this.applyHotspotOverrides();
    this.preloadAssets();
  }

  start() {
    this.startChapter(this.chapterIndex);
  }

  startChapter(index = 0) {
    this.startRequested = true;
    this.chapterIndex = Math.max(0, Math.min(this.chapters.length - 1, index));
    this.currentChapter = this.chapters[this.chapterIndex] || this.chapters[0];
    this.story.scenes = this.currentChapter.scenes || [];
    this.sceneIndex = 0;
    this.stepIndex = 0;
    this.messageQueue = [];
    this.collected = {};
    this.inventory = [];
    this.mergeProgress = {};
    this.finished = false;
    this.transition = null;
    this.doorOpenedAt = 0;
    this.overlay = this.assetsReady ? 'changelog' : 'loading';
    this.changelogPage = 0;
    if (this.assetsReady) {
      this.showToast(this.currentChapter.title || '点击对话推进，点击发光区域调查');
    }
  }

  handleTap(x, y) {
    if (this.editor.active) {
      this.handleEditorPointerDown(x, y);
      return;
    }
    if (!this.assetsReady) {
      return;
    }
    if (this.transition) {
      return;
    }

    for (let i = this.regions.length - 1; i >= 0; i--) {
      const region = this.regions[i];
      if (x >= region.x && x <= region.x + region.w && y >= region.y && y <= region.y + region.h) {
        region.onTap(x, y);
        return;
      }
    }

    const step = this.getStep();
    if (!step || step.type === 'hotspot' || step.type === 'inspect' || step.type === 'merge') {
      return;
    }
    this.advance();
  }

  handlePointerDown(x, y) {
    this.handleTap(x, y);
  }

  handlePointerMove(x, y) {
    if (!this.editor.active || !this.editor.drag) {
      return;
    }
    this.moveEditorSpotTo(x, y);
  }

  handlePointerUp() {
    if (!this.editor.active) {
      return;
    }
    this.editor.drag = null;
  }

  update() {
    if (!this.transition) {
      return;
    }
    const elapsed = Date.now() - this.transition.startedAt;
    if (!this.transition.switched && elapsed >= this.transition.duration * 0.5) {
      this.transition.switched = true;
      this.goToNextScene({ preserveTransition: true });
      if (this.transition.resultMessages) {
        this.queueMessages(this.transition.resultMessages, false);
      }
    }
    if (elapsed >= this.transition.duration) {
      this.transition = null;
    }
  }

  render() {
    const size = this.getSize();
    this.width = size.width;
    this.height = size.height;
    this.regions = [];
    if (!this.assetsReady) {
      this.drawLoadingScreen();
      return;
    }
    if (this.editor.active) {
      this.activeSpeaker = '';
      this.drawBackground();
      this.drawScene();
      this.drawEditorOverlay();
      this.drawToast();
      return;
    }
    this.activeSpeaker = this.getActiveSpeaker();
    this.drawBackground();
    this.drawScene();
    this.drawHud();
    if (!this.transition) {
      this.drawCurrentStep();
      this.drawTopControls();
    }
    this.drawToast();
    this.drawTransition();
    this.drawOverlay();
  }

  getScene() {
    return this.story.scenes[this.sceneIndex];
  }

  getStep() {
    const scene = this.getScene();
    return scene && scene.steps[this.stepIndex];
  }

  advance() {
    if (this.messageQueue.length > 0) {
      this.messageQueue.shift();
      if (this.messageQueue.length > 0) {
        return;
      }
      return;
    }

    const scene = this.getScene();
    if (!scene) {
      return;
    }

    const wasLastStep = this.stepIndex >= scene.steps.length - 1;
    if (wasLastStep && this.hasNextScene()) {
      this.startSceneTransition(scene);
      return;
    }

    this.stepIndex += 1;
    if (this.stepIndex >= scene.steps.length) {
      this.startSceneTransition(scene);
    }
  }

  goToNextScene(options = {}) {
    this.sceneIndex += 1;
    this.stepIndex = 0;
    this.messageQueue = [];
    if (this.sceneIndex >= this.story.scenes.length) {
      this.finished = true;
      this.onComplete();
    } else {
      this.showToast(this.getScene().title);
    }
    if (!options.preserveTransition) {
      this.transition = null;
    }
  }

  hasNextScene() {
    return this.sceneIndex < this.story.scenes.length - 1;
  }

  startSceneTransition(scene, options = {}) {
    if (!scene || !this.hasNextScene()) {
      this.goToNextScene();
      return;
    }
    this.transition = {
      startedAt: Date.now(),
      duration: options.duration || (scene.id === 'stage-open' ? 1350 : 920),
      fromTitle: scene.title,
      toTitle: this.story.scenes[this.sceneIndex + 1] && this.story.scenes[this.sceneIndex + 1].title,
      switched: false,
      style: options.style || (scene.id === 'stage-open' ? 'curtain' : 'fade'),
      resultMessages: options.resultMessages || null,
    };
  }

  queueMessages(messages, shouldAdvance) {
    this.messageQueue = messages.map((item) => ({
      speaker: item.speaker || '提示',
      text: item.text || '',
    }));
    if (shouldAdvance) {
      this.messageQueue.push({ speaker: 'system:advance', text: '' });
    }
  }

  consumeQueuedAdvance() {
    if (this.messageQueue.length === 1 && this.messageQueue[0].speaker === 'system:advance') {
      this.messageQueue = [];
      this.advance();
      return true;
    }
    return false;
  }

  getActiveSpeaker() {
    if (this.messageQueue.length > 0) {
      const speaker = this.messageQueue[0].speaker;
      return this.normalizeSpeaker(speaker);
    }

    const step = this.getStep();
    if (!step) {
      return '';
    }
    if (step.type === 'dialog') {
      return this.normalizeSpeaker(step.speaker);
    }
    return '';
  }

  normalizeSpeaker(speaker) {
    if (speaker === '玩家' || speaker === '女主') {
      return '沈清和';
    }
    return CHARACTER_ASSETS[speaker] || PLACEHOLDER_CHARACTER_COLORS[speaker] ? speaker : '';
  }

  isKnownSpeaker(speaker) {
    return Boolean(this.normalizeSpeaker(speaker));
  }

  isPortraitLayout() {
    return this.height > this.width * 1.25;
  }

  isStageAfterDeathReveal() {
    const scene = this.getScene();
    return Boolean(scene && scene.id === 'stage-open' && this.stepIndex > 2);
  }

  shouldShowZhaoxueAtDoor() {
    const scene = this.getScene();
    return Boolean(scene && scene.id === 'front-door' && this.stepIndex >= 3);
  }

  shouldShowZhangguiAtDoor() {
    const scene = this.getScene();
    if (!scene || scene.id !== 'front-door') {
      return false;
    }
    if (this.stepIndex > 5) {
      return true;
    }
    return this.stepIndex === 5 && this.messageQueue.length > 0;
  }

  getDoorClosedAlpha() {
    const scene = this.getScene();
    if (!scene || scene.id !== 'front-door') {
      return 0;
    }
    if (!this.doorOpenedAt) {
      return 1;
    }
    const progress = Math.min(1, (Date.now() - this.doorOpenedAt) / 900);
    return Math.max(0, 1 - progress);
  }

  showToast(text) {
    this.toast = text;
    this.toastUntil = Date.now() + 1800;
  }

  preloadAssets() {
    const promises = [];
    this.loadCharacterImages(promises);
    this.loadPropImages(promises);
    Promise.all(promises).then(() => {
      this.assetsReady = true;
      if (this.startRequested) {
        this.overlay = 'changelog';
        this.changelogPage = 0;
        this.showToast('点击对话推进，点击发光区域调查');
      }
    });
  }

  loadCharacterImages(promises) {
    Object.entries(CHARACTER_ASSETS).forEach(([name, asset]) => {
      this.characterImages[name] = {
        body: this.loadImage(asset.body, promises),
        avatar: this.loadImage(asset.avatar, promises),
      };
    });
  }

  loadPropImages(promises) {
    Object.entries(PROP_ASSETS).forEach(([name, src]) => {
      this.propImages[name] = this.loadImage(src, promises);
    });
  }

  loadImage(src, promises) {
    const image = this.createImage();
    this.assetTotal += 1;
    const promise = new Promise((resolve) => {
      const finish = (failed) => {
        if (image.loaded || image.failed) {
          resolve(image);
          return;
        }
        if (failed) {
          image.failed = true;
          this.assetFailed += 1;
          this.assetErrors.push(src);
        } else {
          image.loaded = true;
          this.assetLoaded += 1;
        }
        resolve(image);
      };

      image.onload = () => finish(false);
      image.onerror = () => finish(true);
    });
    promises.push(promise);
    image.src = src;
    return image;
  }

  createImage() {
    if (typeof wx !== 'undefined' && wx.createImage) {
      return wx.createImage();
    }
    return new Image();
  }

  drawBackground() {
    const ctx = this.ctx;
    const scene = this.getScene() || this.story.scenes[0];
    const palette = scene.palette || ['#1f2229', '#5b2f37', '#caa365'];
    const w = this.width;
    const h = this.height;
    const gradient = ctx.createLinearGradient(0, 0, 0, h);
    gradient.addColorStop(0, palette[0]);
    gradient.addColorStop(0.56, '#11151b');
    gradient.addColorStop(1, '#08090c');
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, w, h);

    ctx.fillStyle = palette[1];
    ctx.globalAlpha = 0.88;
    ctx.fillRect(0, 0, w, h * 0.12);
    ctx.fillRect(0, h * 0.12, w * 0.06, h * 0.5);
    ctx.fillRect(w * 0.94, h * 0.12, w * 0.06, h * 0.5);
    ctx.globalAlpha = 1;

    ctx.fillStyle = palette[2];
    for (let i = 0; i < 8; i++) {
      const x = (w / 8) * i + w * 0.035;
      ctx.globalAlpha = 0.18 + (i % 2) * 0.08;
      ctx.fillRect(x, h * 0.08, w * 0.035, h * 0.06);
    }
    ctx.globalAlpha = 1;
  }

  drawScene() {
    const scene = this.getScene();
    const ctx = this.ctx;
    const w = this.width;
    const h = this.height;
    const isPortrait = h > w * 1.25;
    const stageTop = h * 0.16;
    const stageH = h * (isPortrait ? 0.5 : 0.48);
    const characterScale = isPortrait ? 1.18 : 1;
    const maxCharacterScale = isPortrait ? 1.16 : 1;
    const isStageAfterDeath = this.isStageAfterDeathReveal();
    const usesStageArt = scene.id === 'stage-open' || scene.id === 'body-check';
    const usesBackstageRoom = this.isBackstageRoomScene(scene);

    if (usesBackstageRoom) {
      this.drawBackstageRoomBackground(w * 0.06, stageTop, w * 0.88, stageH, scene);
    } else if (usesStageArt) {
      this.drawStageArtBackground(w * 0.06, stageTop, w * 0.88, stageH);
    } else if (scene.id === 'front-door') {
      this.drawDoorSceneBackground(w * 0.06, stageTop, w * 0.88, stageH);
    } else if (scene.id === 'backstage-door') {
      this.drawBackstageDoorBackground(w * 0.06, stageTop, w * 0.88, stageH);
    } else {
      this.roundRect(w * 0.08, stageTop, w * 0.84, stageH, 8, '#25212a', '#735244');
      ctx.fillStyle = '#15171c';
      ctx.fillRect(w * 0.12, stageTop + stageH * 0.72, w * 0.76, stageH * 0.16);
    }

    if (this.editor.active) {
      // Editing needs a clear scene canvas; only backgrounds, notes, and hotspot boxes remain visible.
    } else if (usesBackstageRoom) {
      this.drawBackstageRoomCharacters(stageTop, stageH, characterScale, maxCharacterScale);
    } else if (scene.id === 'front-door') {
      const showZhaoxue = this.shouldShowZhaoxueAtDoor();
      const showZhanggui = this.shouldShowZhangguiAtDoor();
      this.drawCharacter('沈清和', w * 0.17, stageTop + stageH * 0.53, '#31516b', {
        width: Math.min(106 * maxCharacterScale, w * 0.098 * characterScale),
        height: Math.min(138 * maxCharacterScale, stageH * 0.41 * characterScale),
      });
      if (showZhaoxue) {
        this.drawCharacter('昭雪', w * 0.28, stageTop + stageH * 0.64, '#d8d1bf', {
          width: Math.min(70 * maxCharacterScale, w * 0.064 * characterScale),
          height: Math.min(86 * maxCharacterScale, stageH * 0.26 * characterScale),
        });
      }
      if (showZhanggui) {
        this.drawCharacter('掌柜', w * 0.62, stageTop + stageH * 0.5, '#476a70', {
          width: Math.min(98 * maxCharacterScale, w * 0.088 * characterScale),
          height: Math.min(132 * maxCharacterScale, stageH * 0.39 * characterScale),
          nameOffsetX: this.isPortraitLayout() ? 4 : 0,
        });
      }
    } else if (scene.id === 'body-check') {
      this.drawBody(w * 0.4, stageTop + stageH * 0.83 + 30, w * 0.2, stageH * 0.105);
      this.drawCharacter('沈清和', w * 0.16, stageTop + stageH * 0.48, '#31516b', {
        width: Math.min(112 * maxCharacterScale, w * 0.1 * characterScale),
        height: Math.min(146 * maxCharacterScale, stageH * 0.43 * characterScale),
      });
      this.drawCharacter('昭雪', w * 0.29, stageTop + stageH * 0.62, '#d8d1bf', {
        width: Math.min(78 * maxCharacterScale, w * 0.072 * characterScale),
        height: Math.min(94 * maxCharacterScale, stageH * 0.28 * characterScale),
      });
      this.drawCharacter('掌柜', w * 0.72, stageTop + stageH * 0.51, '#476a70', {
        width: Math.min(102 * maxCharacterScale, w * 0.09 * characterScale),
        height: Math.min(136 * maxCharacterScale, stageH * 0.4 * characterScale),
      });
    } else if (scene.id === 'backstage-door') {
      this.drawCharacter('沈清和', w * 0.16, stageTop + stageH * 0.34, '#31516b', {
        width: Math.min(130 * maxCharacterScale, w * 0.12 * characterScale),
        height: Math.min(170 * maxCharacterScale, stageH * 0.51 * characterScale),
      });
      this.drawCharacter('昭雪', w * 0.69, stageTop + stageH * 0.55, '#d8d1bf', {
        width: Math.min(92 * maxCharacterScale, w * 0.08 * characterScale),
        height: Math.min(112 * maxCharacterScale, stageH * 0.34 * characterScale),
      });
    } else {
      this.drawCharacter('女伶', w * 0.31, stageTop + stageH * 0.43, '#b52d3a', {
        width: Math.min(112 * maxCharacterScale, w * 0.1 * characterScale),
        height: Math.min(152 * maxCharacterScale, stageH * 0.45 * characterScale),
        nameOffsetX: this.isPortraitLayout() ? 2 : 0,
        talkOffsetX: this.isPortraitLayout() ? 8 : 0,
        talkOffsetY: this.isPortraitLayout() ? -2 : 0,
      });
      this.drawCharacter('小伶人', w * 0.2, stageTop + stageH * 0.54, '#d29d82', {
        width: Math.min(70 * maxCharacterScale, w * 0.064 * characterScale),
        height: Math.min(96 * maxCharacterScale, stageH * 0.28 * characterScale),
        nameOffsetX: this.isPortraitLayout() ? -5 : 0,
      });
      if (isStageAfterDeath) {
        this.drawBody(w * 0.49, stageTop + stageH * 0.83 + 30, w * 0.2, stageH * 0.105);
      } else {
        this.drawCharacter('男伶', w * 0.57, stageTop + stageH * 0.43, '#3f5f72', {
          width: Math.min(108 * maxCharacterScale, w * 0.098 * characterScale),
          height: Math.min(146 * maxCharacterScale, stageH * 0.43 * characterScale),
          talkOffsetX: this.isPortraitLayout() ? 6 : 0,
        });
      }
      const mirrorW = Math.min(62, w * 0.13);
      this.drawMirror(w * 0.72, stageTop + stageH * 0.43, mirrorW, stageH * 0.2, isStageAfterDeath);
    }

    scene.notes.forEach((note, index) => {
      const chipW = Math.min(w * 0.24, 150);
      const chipX = w * 0.12 + (index % 2) * (chipW + 8);
      const chipY = stageTop + 14 + Math.floor(index / 2) * 30;
      this.roundRect(chipX, chipY, chipW, 22, 4, 'rgba(8,10,12,0.54)', 'rgba(226,196,140,0.28)');
      ctx.fillStyle = 'rgba(255,255,255,0.78)';
      ctx.font = '12px Arial';
      ctx.fillText(note, chipX + 8, chipY + 15);
    });
  }

  drawBackstageRoomBackground(x, y, w, h, scene) {
    const ctx = this.ctx;
    const image = this.getBackstageSceneImage(scene);
    ctx.save();
    if (image && image.loaded) {
      this.drawBackstageImageCover(image, x, y, w, h, 8);
      const shade = ctx.createLinearGradient(0, y, 0, y + h);
      shade.addColorStop(0, 'rgba(20, 12, 10, 0.02)');
      shade.addColorStop(0.56, 'rgba(20, 12, 10, 0.03)');
      shade.addColorStop(1, 'rgba(12, 8, 8, 0.24)');
      ctx.fillStyle = shade;
      this.clipRoundRect(x, y, w, h, 8);
      ctx.fillRect(x, y, w, h);
      ctx.restore();
      this.roundRect(x, y, w, h, 8, '', 'rgba(226,196,140,0.42)');
      return;
    }

    const gradient = ctx.createLinearGradient(x, y, x, y + h);
    gradient.addColorStop(0, '#3a2119');
    gradient.addColorStop(0.56, '#231719');
    gradient.addColorStop(1, '#151113');
    this.roundRect(x, y, w, h, 8, gradient, 'rgba(226,196,140,0.42)');
    this.clipRoundRect(x, y, w, h, 8);

    ctx.fillStyle = 'rgba(100, 54, 38, 0.72)';
    ctx.fillRect(x + w * 0.06, y + h * 0.16, w * 0.2, h * 0.45);
    ctx.fillStyle = 'rgba(180, 74, 54, 0.5)';
    ctx.fillRect(x + w * 0.3, y + h * 0.08, w * 0.2, h * 0.58);
    ctx.fillStyle = 'rgba(210, 150, 78, 0.52)';
    ctx.fillRect(x + w * 0.72, y + h * 0.12, w * 0.13, h * 0.48);

    this.drawSceneProp('妆台', x + w * 0.12, y + h * 0.45, w * 0.2, h * 0.11, '#8d5b3d');
    this.drawSceneProp('鬼面', x + w * 0.54, y + h * 0.2, w * 0.16, h * 0.1, '#e8dfd2');
    this.drawSceneProp('铜锣', x + w * 0.12, y + h * 0.58, w * 0.16, h * 0.12, '#c58b42');
    this.drawSceneProp('木箱', x + w * 0.6, y + h * 0.56, w * 0.22, h * 0.12, '#6f4b34');
    this.drawSceneProp('长凳', x + w * 0.39, y + h * 0.63, w * 0.34, h * 0.08, '#7d5033');
    this.drawSceneProp('道具架', x + w * 0.48, y + h * 0.31, w * 0.24, h * 0.2, '#533b30');
    this.drawSceneProp('走位板', x + w * 0.23, y + h * 0.24, w * 0.24, h * 0.12, '#2b3834');
    this.drawSceneProp('妆阁门', x + w * 0.52, y + h * 0.16, w * 0.18, h * 0.42, '#241618');

    ctx.fillStyle = 'rgba(8, 8, 10, 0.22)';
    ctx.fillRect(x, y + h * 0.73, w, h * 0.18);
    ctx.restore();

    this.roundRect(x, y, w, h, 8, '', 'rgba(226,196,140,0.42)');
  }

  getBackstageSceneImage(scene) {
    if (!scene) {
      return null;
    }
    const imageKeyByVisual = {
      'ch2-backstage-room': 'ch2BackstageRoom',
      'ch2-xie-seat-props': 'ch2XieSeatProps',
      'ch2-prop-rack-red-mud': 'ch2PropRackRedMud',
      'ch2-dressing-door': 'ch2DressingDoor',
    };
    const imageKeyByScene = {
      'backstage-room-entry': 'ch2BackstageRoom',
      'backstage-xie-seat': 'ch2XieSeatProps',
      'backstage-props': 'ch2PropRackRedMud',
      'backstage-deduction': 'ch2XieSeatProps',
      'backstage-red-mud': 'ch2PropRackRedMud',
      'backstage-dressing-door': 'ch2DressingDoor',
    };
    const key = imageKeyByVisual[scene.visual] || imageKeyByScene[scene.id] || 'ch2BackstageRoom';
    return this.propImages[key];
  }

  drawSceneProp(label, x, y, w, h, fill) {
    this.roundRect(x, y, w, h, 5, fill, 'rgba(245,213,152,0.42)');
    this.ctx.fillStyle = 'rgba(255,241,213,0.86)';
    this.ctx.font = 'bold 12px Arial';
    this.ctx.textAlign = 'center';
    this.ctx.fillText(label, x + w / 2, y + h / 2 + 4);
    this.ctx.textAlign = 'left';
  }

  drawBackstageRoomCharacters(stageTop, stageH, characterScale, maxCharacterScale) {
    const w = this.width;
    const scene = this.getScene();
    this.drawCharacter('沈清和', w * 0.14, stageTop + stageH * 0.54, '#31516b', {
      width: Math.min(100 * maxCharacterScale, w * 0.092 * characterScale),
      height: Math.min(132 * maxCharacterScale, stageH * 0.38 * characterScale),
    });
    this.drawCharacter('昭雪', w * 0.27, stageTop + stageH * 0.69, '#d8d1bf', {
      width: Math.min(68 * maxCharacterScale, w * 0.062 * characterScale),
      height: Math.min(82 * maxCharacterScale, stageH * 0.24 * characterScale),
    });
    if (this.shouldShowZhangguiBackstage()) {
      this.drawCharacter('掌柜', w * 0.78, stageTop + stageH * 0.55, '#476a70', {
        width: Math.min(88 * maxCharacterScale, w * 0.08 * characterScale),
        height: Math.min(118 * maxCharacterScale, stageH * 0.35 * characterScale),
      });
    }
    if (this.shouldShowXiaoyi()) {
      const xiaoyiX = scene && scene.id === 'backstage-dressing-door' ? w * 0.68 : w * 0.58;
      this.drawCharacter('小乙', xiaoyiX, stageTop + stageH * 0.64, '#d99167', {
        width: Math.min(74 * maxCharacterScale, w * 0.066 * characterScale),
        height: Math.min(104 * maxCharacterScale, stageH * 0.3 * characterScale),
        nameOffsetX: this.isPortraitLayout() ? 2 : 0,
      });
    }
    if (scene && scene.id === 'backstage-props' && this.stepIndex >= 5) {
      this.drawCharacter('绯萤', w * 0.43, stageTop + stageH * 0.57, '#a73a3d', {
        width: Math.min(76 * maxCharacterScale, w * 0.068 * characterScale),
        height: Math.min(106 * maxCharacterScale, stageH * 0.31 * characterScale),
      });
    }
  }

  shouldShowXiaoyi() {
    const scene = this.getScene();
    if (!this.isBackstageRoomScene(scene)) {
      return false;
    }
    if (scene.id === 'backstage-room-entry') {
      return this.stepIndex === 8 && this.messageQueue.some((item) => item.speaker === '小乙');
    }
    if (scene.id === 'backstage-deduction' && this.stepIndex >= 2) {
      return false;
    }
    return scene.id !== 'backstage-dressing-door';
  }

  shouldShowZhangguiBackstage() {
    const scene = this.getScene();
    if (!this.isBackstageRoomScene(scene)) {
      return false;
    }
    if (scene.id === 'backstage-deduction' && this.stepIndex >= 1) {
      return false;
    }
    if (scene.id === 'backstage-red-mud' && this.stepIndex >= 2) {
      return false;
    }
    if (scene.id === 'backstage-dressing-door') {
      return false;
    }
    return true;
  }

  isBackstageRoomScene(scene) {
    return Boolean(scene && (scene.visual === 'backstage-room' || String(scene.visual || '').startsWith('ch2-')));
  }

  drawStageArtBackground(x, y, w, h) {
    const ctx = this.ctx;
    const image = this.propImages.qiyunStage;
    ctx.save();
    if (image && image.loaded) {
      this.drawStageImageCover(image, x, y, w, h, 8);
    } else {
      this.roundRect(x, y, w, h, 8, '#25212a', '#735244');
    }

    const shade = ctx.createLinearGradient(0, y, 0, y + h);
    shade.addColorStop(0, 'rgba(5, 10, 14, 0.04)');
    shade.addColorStop(0.55, 'rgba(5, 10, 14, 0.08)');
    shade.addColorStop(1, 'rgba(5, 10, 14, 0.34)');
    ctx.fillStyle = shade;
    this.clipRoundRect(x, y, w, h, 8);
    ctx.fillRect(x, y, w, h);
    ctx.restore();

    this.roundRect(x, y, w, h, 8, '', 'rgba(226,196,140,0.42)');
  }

  drawDoorSceneBackground(x, y, w, h) {
    const ctx = this.ctx;
    const openImage = this.propImages.qiyunDoorOpen;
    const closedImage = this.propImages.qiyunDoorClosed;
    const closedAlpha = this.getDoorClosedAlpha();

    ctx.save();
    if (openImage && openImage.loaded) {
      this.drawDoorImageCover(openImage, x, y, w, h, 8);
    } else {
      this.roundRect(x, y, w, h, 8, '#1f2f36', '#d8a65d');
    }

    if (closedImage && closedImage.loaded && closedAlpha > 0.01) {
      ctx.save();
      ctx.globalAlpha = closedAlpha;
      this.drawDoorImageCover(closedImage, x, y, w, h, 8);
      ctx.restore();
    }

    const shade = ctx.createLinearGradient(0, y, 0, y + h);
    shade.addColorStop(0, 'rgba(5, 10, 14, 0.04)');
    shade.addColorStop(0.62, 'rgba(5, 10, 14, 0.05)');
    shade.addColorStop(1, 'rgba(5, 10, 14, 0.26)');
    ctx.fillStyle = shade;
    this.clipRoundRect(x, y, w, h, 8);
    ctx.fillRect(x, y, w, h);
    ctx.restore();

    this.roundRect(x, y, w, h, 8, '', 'rgba(226,196,140,0.38)');
  }

  drawBackstageDoorBackground(x, y, w, h) {
    const ctx = this.ctx;
    const image = this.propImages.backstageDoor;
    ctx.save();
    if (image && image.loaded) {
      this.drawBackstageImageCover(image, x, y, w, h, 8);
    } else {
      this.roundRect(x, y, w, h, 8, '#33201b', '#d8a65d');
    }

    const shade = ctx.createLinearGradient(0, y, 0, y + h);
    shade.addColorStop(0, 'rgba(40, 18, 12, 0.02)');
    shade.addColorStop(0.56, 'rgba(40, 18, 12, 0.04)');
    shade.addColorStop(1, 'rgba(20, 8, 6, 0.28)');
    ctx.fillStyle = shade;
    this.clipRoundRect(x, y, w, h, 8);
    ctx.fillRect(x, y, w, h);
    ctx.restore();

    this.roundRect(x, y, w, h, 8, '', 'rgba(226,196,140,0.42)');
  }

  drawBackstageImageCover(image, x, y, w, h, radius) {
    const iw = image.naturalWidth || image.width;
    const ih = image.naturalHeight || image.height;
    if (!iw || !ih) {
      return;
    }

    const targetRatio = w / h;
    let sx = 0;
    let sy = ih * 0.02;
    let sh = ih * 0.94;
    let sw = sh * targetRatio;
    if (sw > iw) {
      sw = iw;
      sh = sw / targetRatio;
      sy = ih * 0.04;
    }
    sx = Math.min(Math.max(0, iw * 0.5 - sw * 0.42), iw - sw);

    this.ctx.save();
    this.clipRoundRect(x, y, w, h, radius);
    this.ctx.drawImage(image, sx, sy, sw, sh, x, y, w, h);
    this.ctx.restore();
  }

  drawDoorImageCover(image, x, y, w, h, radius) {
    const iw = image.naturalWidth || image.width;
    const ih = image.naturalHeight || image.height;
    if (!iw || !ih) {
      return;
    }

    const targetRatio = w / h;
    let sx = 0;
    let sy = 0;
    let sw = iw;
    let sh = ih;
    if (targetRatio < 1.05) {
      sh = ih * 0.78;
      sw = Math.min(iw, sh * targetRatio);
      sx = (iw - sw) / 2;
      sy = ih * 0.08;
    } else {
      const sourceRatio = iw / ih;
      if (sourceRatio > targetRatio) {
        sw = ih * targetRatio;
        sx = (iw - sw) / 2;
      } else {
        sh = iw / targetRatio;
        sy = (ih - sh) * 0.5;
      }
    }

    this.ctx.save();
    this.clipRoundRect(x, y, w, h, radius);
    this.ctx.drawImage(image, sx, sy, sw, sh, x, y, w, h);
    this.ctx.restore();
  }

  drawStageImageCover(image, x, y, w, h, radius) {
    const iw = image.naturalWidth || image.width;
    const ih = image.naturalHeight || image.height;
    if (!iw || !ih) {
      return;
    }

    const targetRatio = w / h;
    let sx = 0;
    let sy = 0;
    let sw = iw;
    let sh = ih;

    if (targetRatio < 1.05) {
      sh = ih * 0.78;
      sw = Math.min(iw, sh * targetRatio);
      sx = (iw - sw) / 2;
      sy = ih * 0.045;
    } else {
      const sourceRatio = iw / ih;
      if (sourceRatio > targetRatio) {
        sw = ih * targetRatio;
        sx = (iw - sw) / 2;
      } else {
        sh = iw / targetRatio;
        sy = Math.max(0, (ih - sh) * 0.42);
      }
    }

    this.ctx.save();
    this.clipRoundRect(x, y, w, h, radius);
    this.ctx.drawImage(image, sx, sy, sw, sh, x, y, w, h);
    this.ctx.restore();
  }

  drawHud() {
    const ctx = this.ctx;
    const scene = this.getScene();
    const padding = 14;
    ctx.fillStyle = '#f7ead2';
    ctx.font = 'bold 20px Arial';
    ctx.fillText(this.story.title, padding, 32);
    ctx.font = '13px Arial';
    ctx.fillStyle = '#cfc4b8';
    const chapterTitle = this.currentChapter && this.currentChapter.title ? this.currentChapter.title : '';
    ctx.save();
    ctx.beginPath();
    ctx.rect(padding, 38, this.width - 150, 22);
    ctx.clip();
    ctx.fillText((chapterTitle ? chapterTitle + ' · ' : '') + scene.title, padding, 54);
    ctx.restore();
    ctx.textAlign = 'right';
    ctx.fillStyle = '#e0b36a';
    ctx.fillText((this.sceneIndex + 1) + '/' + this.story.scenes.length, this.width - padding, 32);
    ctx.textAlign = 'left';

    const clueCount = Object.values(this.collected).reduce((sum, group) => sum + Object.keys(group).length, 0);
    const invText = this.inventory.length ? this.inventory.join(' / ') : '暂无';
    ctx.font = '12px Arial';
    ctx.fillStyle = '#b7d7ce';
    ctx.fillText('疑点 ' + clueCount + '  物证 ' + invText, padding, 76);
  }

  drawTopControls() {
    const isPortrait = this.height > this.width * 1.25;
    const w = Math.min(isPortrait ? 82 : 108, this.width * (isPortrait ? 0.26 : 0.24));
    const h = isPortrait ? 30 : 34;
    const x = this.width - w - 14;
    const y = isPortrait ? 46 : 48;
    this.drawButton(x, y, w, h, '更新日志', () => {
      this.overlay = 'changelog';
      this.changelogPage = 0;
    }, {
      fontSize: isPortrait ? 12 : 14,
      fill: 'rgba(43,58,61,0.88)',
      stroke: 'rgba(159,209,200,0.72)',
    });
    const chapterW = Math.min(isPortrait ? 74 : 96, this.width * (isPortrait ? 0.24 : 0.22));
    this.drawButton(x - chapterW - 8, y, chapterW, h, '章节', () => {
      this.overlay = 'chapter-select';
    }, {
      fontSize: isPortrait ? 12 : 14,
      fill: 'rgba(69,48,54,0.88)',
      stroke: 'rgba(226,196,140,0.72)',
    });
    const editorW = Math.min(isPortrait ? 58 : 72, this.width * 0.18);
    const editorY = Math.max(86, y + h + 18);
    if (this.editorEnabled) {
      this.drawButton(14, editorY, editorW, h, '编辑', () => {
        this.openHotspotEditor();
      }, {
        fontSize: isPortrait ? 12 : 14,
        fill: 'rgba(36,64,66,0.88)',
        stroke: 'rgba(159,209,200,0.72)',
      });
    }
  }

  drawCurrentStep() {
    if (this.consumeQueuedAdvance()) {
      return;
    }

    if (this.messageQueue.length > 0) {
      const current = this.messageQueue[0];
      this.drawDialog(current.speaker, current.text, '点击继续');
      return;
    }

    const step = this.getStep();
    if (!step) {
      this.drawDialog('卷宗', '第一关结束。', '点击重新查看');
      return;
    }

    if (step.type === 'dialog') {
      this.drawDialog(step.speaker, step.text, '点击继续');
    } else if (step.type === 'narration') {
      this.drawDialog('画面', step.text, '点击继续');
    } else if (step.type === 'hotspot') {
      this.drawHotspots(step);
    } else if (step.type === 'inspect') {
      this.drawInspect(step);
    } else if (step.type === 'merge') {
      this.drawMerge(step);
    } else if (step.type === 'ending') {
      this.drawEnding(step);
    }
  }

  drawDialog(speaker, text, hint, canAdvance = true) {
    if (!this.isKnownSpeaker(speaker)) {
      this.drawNarrationDialog(speaker, text, hint, canAdvance);
      return;
    }

    const x = 16;
    const y = this.height * 0.7;
    const w = this.width - 32;
    const h = this.height * 0.25;
    const normalizedSpeaker = this.normalizeSpeaker(speaker);
    const hasAvatar = Boolean(normalizedSpeaker);
    const avatarSize = hasAvatar ? Math.min(70, Math.max(54, this.width * 0.07)) : 0;
    const textX = x + 20 + (hasAvatar ? avatarSize + 14 : 0);
    const textMaxW = w - 40 - (hasAvatar ? avatarSize + 14 : 0);

    this.roundRect(x, y, w, h, 8, 'rgba(246,237,218,0.96)', 'rgba(178,130,76,0.72)');
    this.roundRect(x + 14, y - 18, Math.min(160, this.width * 0.42), 36, 6, '#7d2633', '#d5a764');
    this.ctx.fillStyle = '#fff1d5';
    this.ctx.font = 'bold 16px Arial';
    this.ctx.fillText(speaker, x + 28, y + 5);
    if (hasAvatar) {
      this.drawAvatarIcon(normalizedSpeaker, x + 20, y + 46, avatarSize);
    }
    this.drawRichText(text, textX, y + 50, textMaxW, 23, 4, 15);
    this.ctx.fillStyle = '#8a6d54';
    this.ctx.font = '12px Arial';
    this.ctx.textAlign = 'right';
    this.ctx.fillText(hint, x + w - 18, y + h - 18);
    this.ctx.textAlign = 'left';
    if (canAdvance) {
      this.addRegion(x, y, w, h, () => this.advance());
    }
  }

  drawNarrationDialog(speaker, text, hint, canAdvance = true) {
    const isPortrait = this.isPortraitLayout();
    const x = 16;
    const y = this.height * (isPortrait ? 0.7 : 0.7);
    const w = this.width - 32;
    const h = this.height * (isPortrait ? 0.25 : 0.25);
    const nameW = Math.min(isPortrait ? 126 : 150, this.width * 0.42);
    this.roundRect(x, y, w, h, 8, 'rgba(246,237,218,0.96)', 'rgba(126,171,214,0.72)');
    this.roundRect(x + 14, y - 18, nameW, 36, 6, '#315d7d', '#8dc7f0');
    this.ctx.fillStyle = '#fff1d5';
    this.ctx.font = 'bold 16px Arial';
    this.ctx.fillText(speaker, x + 28, y + 5);
    this.drawRichText(text, x + 20, y + 50, w - 40, 23, 4, 15);
    this.ctx.fillStyle = '#8a6d54';
    this.ctx.font = '12px Arial';
    this.ctx.textAlign = 'right';
    this.ctx.fillText(hint, x + w - 18, y + h - 18);
    this.ctx.textAlign = 'left';
    if (canAdvance) {
      this.addRegion(x, y, w, h, () => this.advance());
    }
  }

  drawHotspots(step) {
    this.drawDialog('调查', step.prompt, '点击发光区域', false);
    step.hotspots.forEach((spot) => {
      const rect = this.scaledRect(spot);
      this.drawPulseRect(rect.x, rect.y, rect.w, rect.h, spot.label);
      this.addRegion(rect.x, rect.y, rect.w, rect.h, () => {
        if (spot.id === 'half-open-door' && !this.doorOpenedAt) {
          this.doorOpenedAt = Date.now();
        }
        if (spot.advanceBeforeResult) {
          this.startSceneTransition(this.getScene(), {
            resultMessages: spot.result || [],
            style: 'fade',
            duration: 760,
          });
          return;
        }
        if (spot.item && !this.inventory.includes(spot.item)) {
          this.inventory.push(spot.item);
        }
        this.queueMessages(spot.result || [], Boolean(spot.next));
      });
    });
  }

  drawInspect(step) {
    const key = this.getScene().id + ':' + this.stepIndex;
    const taken = this.collected[key] || {};
    this.drawDialog('勘验', step.prompt, '收集全部疑点', false);
    const doneCount = Object.keys(taken).length;
    this.drawInspectProgress(doneCount, step.hotspots.length);
    const activeSpot = step.hotspots.find((spot) => !taken[spot.id]);
    if (activeSpot) {
      const spot = activeSpot;
      const rect = this.scaledRect(spot);
      this.drawPulseRect(rect.x, rect.y, rect.w, rect.h, spot.label);
      this.addRegion(rect.x, rect.y, rect.w, rect.h, () => {
        if (this.messageQueue.length > 0) {
          return;
        }
        this.collected[key] = this.collected[key] || {};
        this.collected[key][spot.id] = spot.clue;
        const allDone = step.hotspots.every((item) => this.collected[key][item.id]);
        if (allDone) {
          this.showToast(step.completeText || '已完成调查');
        }
        this.queueMessages(
          (spot.result || []).concat(allDone ? step.after || [] : []),
          allDone
        );
      });
    }

    const clues = Object.values(taken);
    if (clues.length > 0) {
      const panelW = this.width * 0.58;
      this.roundRect(this.width - panelW - 12, 90, panelW, 28 + clues.length * 20, 6, 'rgba(11,18,20,0.76)', '#577d75');
      this.ctx.fillStyle = '#d4f1e7';
      this.ctx.font = '12px Arial';
      clues.forEach((text, index) => this.ctx.fillText((index + 1) + '. ' + text, this.width - panelW, 112 + index * 20));
    }
  }

  drawInspectProgress(done, total) {
    const w = Math.min(170, this.width * 0.34);
    const x = this.width / 2 - w / 2;
    const y = this.height * 0.63;
    this.roundRect(x, y, w, 32, 16, 'rgba(15,18,24,0.82)', 'rgba(159,209,200,0.54)');
    this.ctx.fillStyle = '#d4f1e7';
    this.ctx.font = 'bold 13px Arial';
    this.ctx.textAlign = 'center';
    this.ctx.fillText('疑点 ' + done + '/' + total + ' 已收集', this.width / 2, y + 21);
    this.ctx.textAlign = 'left';
  }

  drawMerge(step) {
    const key = this.getScene().id + ':' + this.stepIndex;
    const index = this.mergeProgress[key] || 0;
    const current = step.chain[index];
    const next = step.chain[index + 1];
    const x = 18;
    const y = this.height * 0.62;
    const w = this.width - 36;
    const h = this.height * 0.31;
    this.roundRect(x, y, w, h, 8, 'rgba(18,20,24,0.94)', '#d5a764');

    this.ctx.fillStyle = '#fff1d5';
    this.ctx.font = 'bold 17px Arial';
    this.ctx.fillText(step.title, x + 18, y + 30);
    this.ctx.fillStyle = '#cfc4b8';
    this.ctx.font = '13px Arial';
    this.wrapText(step.prompt, x + 18, y + 54, w - 36, 20, 2);

    const itemY = y + h * 0.45;
    this.drawItemTile(x + 22, itemY, w * 0.32, 58, current);
    this.drawItemTile(x + w * 0.42, itemY, w * 0.32, 58, next || step.resultItem || current);
    this.ctx.fillStyle = '#e0b36a';
    this.ctx.font = 'bold 24px Arial';
    this.ctx.fillText('→', x + w * 0.36, itemY + 38);

    const btnText = next ? '合成' : '提交';
    const btnX = x + w - 112;
    const btnY = y + h - 58;
    this.roundRect(btnX, btnY, 90, 38, 6, '#28645f', '#9fd1c8');
    this.ctx.fillStyle = '#f2fffa';
    this.ctx.font = 'bold 16px Arial';
    this.ctx.fillText(btnText, btnX + 28, btnY + 25);
    this.addRegion(btnX, btnY, 90, 38, () => {
      if (next) {
        this.mergeProgress[key] = index + 1;
        this.showToast(current + ' → ' + next);
        return;
      }
      if (step.resultItem && !this.inventory.includes(step.resultItem)) {
        this.inventory.push(step.resultItem);
      }
      const messages = [{ speaker: '沈清和', text: step.submitText }].concat(step.after || []);
      this.queueMessages(messages, true);
    });
  }

  drawEnding(step) {
    const x = 26;
    const y = this.height * 0.28;
    const w = this.width - 52;
    const h = this.height * 0.34;
    this.roundRect(x, y, w, h, 8, 'rgba(15,18,24,0.94)', '#d5a764');
    this.ctx.fillStyle = '#fff1d5';
    this.ctx.font = 'bold 24px Arial';
    this.ctx.fillText(step.title || '章节结束', x + 24, y + 46);
    this.ctx.fillStyle = '#f8efe4';
    this.ctx.font = '17px Arial';
    this.wrapText(step.text, x + 24, y + 88, w - 48, 28, 4);
    this.drawButton(x + 24, y + h - 60, w - 48, 40, '回到章节选择', () => {
      this.overlay = 'chapter-select';
    });
  }

  drawItemTile(x, y, w, h, label) {
    this.roundRect(x, y, w, h, 6, '#2d3036', '#735244');
    this.ctx.fillStyle = '#f8efe4';
    this.ctx.font = '14px Arial';
    this.wrapText(label || '完成', x + 12, y + 24, w - 24, 18, 2);
  }

  drawButton(x, y, w, h, label, onTap, options = {}) {
    this.roundRect(x, y, w, h, 6, options.fill || '#7d2633', options.stroke || '#d5a764');
    this.ctx.fillStyle = '#fff1d5';
    this.ctx.font = 'bold ' + (options.fontSize || 16) + 'px Arial';
    this.ctx.textAlign = 'center';
    this.ctx.fillText(label, x + w / 2, y + h / 2 + 6);
    this.ctx.textAlign = 'left';
    this.addRegion(x, y, w, h, onTap);
  }

  drawMirror(x, y, w, h, hasGhost) {
    const ctx = this.ctx;
    ctx.save();
    if (hasGhost) {
      const glow = ctx.createRadialGradient(x + w / 2, y + h / 2, 4, x + w / 2, y + h / 2, Math.max(w, h) * 0.72);
      glow.addColorStop(0, 'rgba(180, 244, 230, 0.32)');
      glow.addColorStop(0.54, 'rgba(114, 188, 178, 0.16)');
      glow.addColorStop(1, 'rgba(114, 188, 178, 0)');
      ctx.fillStyle = glow;
      ctx.beginPath();
      ctx.ellipse(x + w / 2, y + h / 2, w * 0.8, h * 0.72, 0, 0, Math.PI * 2);
      ctx.fill();
    }

    this.roundRect(x, y, w, h, Math.min(30, w / 2), '#b9c5c6', '#d8a65d');
    ctx.fillStyle = hasGhost ? 'rgba(22,35,40,0.42)' : 'rgba(255,255,255,0.16)';
    ctx.beginPath();
    ctx.ellipse(x + w / 2, y + h / 2, w * 0.38, h * 0.38, 0, 0, Math.PI * 2);
    ctx.fill();

    if (hasGhost) {
      this.drawGhostImageInMirror(x + w * 0.14, y + h * 0.08, w * 0.72, h * 0.76);
    } else {
      ctx.fillStyle = 'rgba(255,255,255,0.28)';
      ctx.fillRect(x + w * 0.24, y + h * 0.18, w * 0.1, h * 0.54);
    }

    ctx.restore();
    this.drawLabel('铜镜', x + w * 0.1, y + h + 2, w * 0.8, 16, hasGhost ? '#e9fff8' : '#1c2429');
  }

  drawGhostImageInMirror(x, y, w, h) {
    const image = this.propImages.mirrorGhost;
    const ctx = this.ctx;
    ctx.save();
    this.clipRoundRect(x, y, w, h, Math.min(w, h) * 0.18);
    if (image && image.loaded) {
      this.drawImageCover(image, x, y, w, h, Math.min(w, h) * 0.18);
    } else {
      this.drawGhostHeadInMirror(x, y, w, h);
    }
    const haze = ctx.createLinearGradient(x, y, x, y + h);
    haze.addColorStop(0, 'rgba(188, 240, 232, 0.26)');
    haze.addColorStop(0.58, 'rgba(25, 38, 44, 0.02)');
    haze.addColorStop(1, 'rgba(12, 18, 22, 0.32)');
    ctx.fillStyle = haze;
    ctx.fillRect(x, y, w, h);
    ctx.restore();
  }

  drawGhostHeadInMirror(x, y, w, h) {
    const ctx = this.ctx;
    const cx = x + w / 2;
    const faceY = y + h * 0.42;
    ctx.save();
    ctx.globalAlpha = 0.92;

    ctx.fillStyle = 'rgba(17, 18, 21, 0.92)';
    ctx.beginPath();
    ctx.moveTo(cx, y + h * 0.02);
    ctx.bezierCurveTo(x - w * 0.18, y + h * 0.14, x - w * 0.05, y + h * 0.72, x + w * 0.12, y + h * 0.94);
    ctx.bezierCurveTo(x + w * 0.26, y + h * 0.68, x + w * 0.25, y + h * 0.34, cx, y + h * 0.18);
    ctx.bezierCurveTo(x + w * 0.76, y + h * 0.34, x + w * 0.74, y + h * 0.68, x + w * 0.88, y + h * 0.94);
    ctx.bezierCurveTo(x + w * 1.05, y + h * 0.72, x + w * 1.18, y + h * 0.14, cx, y + h * 0.02);
    ctx.fill();

    ctx.fillStyle = 'rgba(230, 226, 211, 0.86)';
    ctx.beginPath();
    ctx.ellipse(cx, faceY, w * 0.28, h * 0.31, 0, 0, Math.PI * 2);
    ctx.fill();

    ctx.strokeStyle = 'rgba(12, 12, 16, 0.8)';
    ctx.lineWidth = Math.max(1, w * 0.035);
    for (let i = 0; i < 5; i++) {
      const offset = (i - 2) * w * 0.11;
      ctx.beginPath();
      ctx.moveTo(cx + offset, y + h * 0.1);
      ctx.bezierCurveTo(cx + offset * 0.55, y + h * 0.35, cx + offset * 1.2, y + h * 0.58, cx + offset * 0.78, y + h * 0.88);
      ctx.stroke();
    }

    ctx.fillStyle = '#7d1725';
    ctx.beginPath();
    ctx.ellipse(cx - w * 0.1, faceY - h * 0.04, w * 0.035, h * 0.035, 0, 0, Math.PI * 2);
    ctx.ellipse(cx + w * 0.1, faceY - h * 0.04, w * 0.035, h * 0.035, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.strokeStyle = 'rgba(86, 18, 28, 0.86)';
    ctx.lineWidth = Math.max(1, w * 0.025);
    ctx.beginPath();
    ctx.moveTo(cx - w * 0.08, faceY + h * 0.16);
    ctx.lineTo(cx + w * 0.08, faceY + h * 0.16);
    ctx.stroke();

    ctx.fillStyle = 'rgba(139, 26, 39, 0.72)';
    ctx.beginPath();
    ctx.moveTo(cx - w * 0.24, y + h * 0.9);
    ctx.lineTo(cx, y + h * 0.66);
    ctx.lineTo(cx + w * 0.24, y + h * 0.9);
    ctx.closePath();
    ctx.fill();
    ctx.restore();
  }

  drawBody(x, y, w, h) {
    const image = this.characterImages['谢无咎'] && this.characterImages['谢无咎'].body;
    if (image && image.loaded) {
      this.drawImageContain(image, x - w * 0.08, y - h * 2.1, w * 1.16, h * 2.1);
    } else {
      this.roundRect(x, y, w, h, h / 2, '#ddd4c5', '#8b806d');
      this.ctx.fillStyle = '#1d1f25';
      this.ctx.fillRect(x + w * 0.1, y + h * 0.18, w * 0.82, h * 0.16);
    }
    this.drawLabel('谢无咎', x + w * 0.34, y + h * 0.42, w * 0.28, 18, '#31241f');
  }

  drawCharacter(label, x, y, color, options = {}) {
    const baseWidth = options.width || 76;
    const baseHeight = options.height || 112;
    const isActive = this.activeSpeaker === label;
    const scale = isActive ? 1.15 : 1;
    const width = baseWidth * scale;
    const height = baseHeight * scale;
    const drawX = x - (width - baseWidth) / 2;
    const drawY = y - (height - baseHeight);
    const image = this.characterImages[label] && this.characterImages[label].body;
    const imageRect = this.getImageContainRect(image, drawX, drawY, width, height);
    const visualRect = imageRect || { x: drawX, y: drawY, w: width, h: height };
    this.ctx.save();
    if (isActive) {
      this.drawActiveGlow(drawX, drawY, width, height);
    }
    if (image && image.loaded) {
      this.ctx.drawImage(image, visualRect.x, visualRect.y, visualRect.w, visualRect.h);
    } else {
      this.roundRect(drawX, drawY, width, height, 8, PLACEHOLDER_CHARACTER_COLORS[label] || color, '#e2c48c');
      this.roundRect(drawX + width * 0.28, drawY - height * 0.18, width * 0.44, width * 0.44, width * 0.22, '#e8d1b0', '#6d4e39');
      this.ctx.fillStyle = '#fff1d5';
      this.ctx.font = 'bold 12px Arial';
      this.ctx.textAlign = 'center';
      this.ctx.fillText(label, drawX + width / 2, drawY + height * 0.55);
      this.ctx.textAlign = 'left';
    }
    this.ctx.restore();
    const bubbleCenterX = visualRect.x + visualRect.w / 2 + (options.nameOffsetX || 0);
    const bubbleBottomY = visualRect.y - (this.isPortraitLayout() ? 6 : 8) + (options.nameOffsetY || 0);
    const nameRect = this.drawNameBubble(label, bubbleCenterX, bubbleBottomY, isActive);
    if (isActive) {
      this.drawTalkingBubbleNear(nameRect, visualRect, options);
    }
  }

  getImageContainRect(image, x, y, w, h) {
    if (!image || !image.loaded) {
      return null;
    }
    const iw = image.naturalWidth || image.width;
    const ih = image.naturalHeight || image.height;
    if (!iw || !ih) {
      return null;
    }
    const scale = Math.min(w / iw, h / ih);
    const dw = iw * scale;
    const dh = ih * scale;
    return {
      x: x + (w - dw) / 2,
      y: y + h - dh,
      w: dw,
      h: dh,
    };
  }

  drawImageContain(image, x, y, w, h) {
    const rect = this.getImageContainRect(image, x, y, w, h);
    if (!rect) {
      return;
    }
    this.ctx.drawImage(image, rect.x, rect.y, rect.w, rect.h);
  }

  drawImageCover(image, x, y, w, h, radius) {
    const iw = image.naturalWidth || image.width;
    const ih = image.naturalHeight || image.height;
    if (!iw || !ih) {
      return;
    }

    const sourceRatio = iw / ih;
    const targetRatio = w / h;
    let sx = 0;
    let sy = 0;
    let sw = iw;
    let sh = ih;
    if (sourceRatio > targetRatio) {
      sw = ih * targetRatio;
      sx = (iw - sw) / 2;
    } else {
      sh = iw / targetRatio;
      sy = (ih - sh) / 2;
    }

    this.ctx.save();
    this.clipRoundRect(x, y, w, h, radius);
    this.ctx.drawImage(image, sx, sy, sw, sh, x, y, w, h);
    this.ctx.restore();
  }

  drawAvatarIcon(label, x, y, size) {
    const image = this.characterImages[label] && this.characterImages[label].avatar;
    this.ctx.save();
    this.roundRect(x - 3, y - 3, size + 6, size + 6, size / 2 + 3, 'rgba(255,244,223,0.95)', '#d5a764');
    if (image && image.loaded) {
      this.clipCircle(x, y, size / 2);
      this.ctx.drawImage(image, x, y, size, size);
    } else {
      this.clipCircle(x, y, size / 2);
      this.ctx.fillStyle = PLACEHOLDER_CHARACTER_COLORS[label] || '#7d2633';
      this.ctx.fillRect(x, y, size, size);
      this.ctx.fillStyle = '#fff1d5';
      this.ctx.font = 'bold 13px Arial';
      this.ctx.textAlign = 'center';
      this.ctx.fillText(label.slice(0, 2), x + size / 2, y + size / 2 + 5);
      this.ctx.textAlign = 'left';
    }
    this.ctx.restore();
  }

  drawActiveGlow(x, y, w, h) {
    const ctx = this.ctx;
    ctx.save();
    const gx = x + w / 2;
    const gy = y + h * 0.93;
    const r = Math.max(w * 0.78, 46);
    const gradient = ctx.createRadialGradient(gx, gy, 4, gx, gy, r);
    gradient.addColorStop(0, 'rgba(255, 232, 150, 0.76)');
    gradient.addColorStop(0.38, 'rgba(255, 212, 112, 0.42)');
    gradient.addColorStop(1, 'rgba(255, 212, 112, 0)');
    ctx.fillStyle = gradient;
    ctx.beginPath();
    ctx.ellipse(gx, gy, r, Math.max(h * 0.14, 18), 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();
  }

  drawNameBubble(label, centerX, bottomY, isActive = false) {
    const ctx = this.ctx;
    ctx.save();
    const isPortrait = this.isPortraitLayout();
    ctx.font = 'bold ' + (isPortrait ? 12 : 13) + 'px Arial';
    const paddingX = isPortrait ? 10 : 12;
    const bubbleW = Math.max(isPortrait ? 44 : 50, ctx.measureText(label).width + paddingX * 2);
    const bubbleH = isPortrait ? 24 : 26;
    const margin = 8;
    const x = Math.max(margin, Math.min(this.width - bubbleW - margin, centerX - bubbleW / 2));
    const y = Math.max(isPortrait ? 96 : 88, bottomY - bubbleH);
    this.roundRect(
      x,
      y,
      bubbleW,
      bubbleH,
      13,
      isActive ? 'rgba(255,233,158,0.98)' : 'rgba(255,244,223,0.94)',
      isActive ? 'rgba(255,246,196,0.95)' : 'rgba(130,88,54,0.72)'
    );
    ctx.fillStyle = isActive ? '#4a231f' : '#5a2b24';
    ctx.textAlign = 'center';
    ctx.fillText(label, x + bubbleW / 2, y + (isPortrait ? 16 : 17));
    ctx.textAlign = 'left';
    ctx.restore();
    return { x, y, w: bubbleW, h: bubbleH };
  }

  drawTalkingBubbleNear(nameRect, visualRect, options = {}) {
    const isPortrait = this.isPortraitLayout();
    const bubbleW = isPortrait ? 34 : 42;
    const bubbleH = isPortrait ? 24 : 28;
    const margin = 8;
    let x = nameRect.x + nameRect.w - bubbleW * 0.18 + (options.talkOffsetX || 0);
    let y = nameRect.y - bubbleH - 4 + (options.talkOffsetY || 0);
    x = Math.max(margin, Math.min(this.width - bubbleW - margin, x));
    y = Math.max(isPortrait ? 92 : 82, y);
    if (y + bubbleH > visualRect.y - 2) {
      y = Math.max(isPortrait ? 92 : 82, visualRect.y - bubbleH - 4);
    }
    this.drawTalkingBubble(x, y, bubbleW, bubbleH);
  }

  drawTalkingBubble(x, y, w = 42, h = 28) {
    const ctx = this.ctx;
    ctx.save();
    this.roundRect(x, y, w, h, 14, 'rgba(255,255,255,0.96)', 'rgba(118,82,56,0.65)');
    ctx.beginPath();
    ctx.moveTo(x + 10, y + h - 2);
    ctx.lineTo(x + 2, y + h + 9);
    ctx.lineTo(x + 18, y + h - 2);
    ctx.closePath();
    ctx.fillStyle = 'rgba(255,255,255,0.96)';
    ctx.fill();
    ctx.strokeStyle = 'rgba(118,82,56,0.42)';
    ctx.stroke();
    ctx.fillStyle = '#5a2b24';
    ctx.font = 'bold ' + (w < 40 ? 16 : 18) + 'px Arial';
    ctx.textAlign = 'center';
    ctx.fillText('...', x + w / 2, y + (h < 26 ? 15 : 17));
    ctx.textAlign = 'left';
    ctx.restore();
  }

  drawLabel(text, x, y, w, h, color) {
    this.ctx.fillStyle = color;
    this.ctx.font = 'bold 14px Arial';
    this.ctx.textAlign = 'center';
    this.ctx.fillText(text, x + w / 2, y + h / 2 + 5);
    this.ctx.textAlign = 'left';
  }

  drawPulseRect(x, y, w, h, label) {
    const pulse = (Math.sin(Date.now() / 720) + 1) / 2;
    const fillAlpha = 0.08 + pulse * 0.16;
    const strokeAlpha = 0.42 + pulse * 0.5;
    const glowAlpha = 0.2 + pulse * 0.26;
    this.ctx.save();
    this.ctx.lineWidth = 2;
    this.ctx.setLineDash([6, 5]);
    this.ctx.lineDashOffset = -Date.now() / 520;
    this.ctx.shadowColor = 'rgba(240, 210, 140, ' + glowAlpha + ')';
    this.ctx.shadowBlur = 8 + pulse * 8;
    this.roundRect(
      x,
      y,
      w,
      h,
      8,
      'rgba(232,190,100,' + fillAlpha.toFixed(3) + ')',
      'rgba(240,210,140,' + strokeAlpha.toFixed(3) + ')'
    );
    this.ctx.restore();
    this.ctx.save();
    this.ctx.globalAlpha = 0.74 + pulse * 0.26;
    this.ctx.fillStyle = '#fff1d5';
    this.ctx.font = 'bold 13px Arial';
    this.ctx.textAlign = 'center';
    this.ctx.fillText(label, x + w / 2, y + h / 2 + 5);
    this.ctx.textAlign = 'left';
    this.ctx.restore();
  }

  drawLoadingScreen() {
    const ctx = this.ctx;
    const w = this.width;
    const h = this.height;
    const done = this.assetLoaded + this.assetFailed;
    const total = Math.max(this.assetTotal, 1);
    const progress = Math.min(1, done / total);
    const panelW = Math.min(w - 48, 320);
    const barW = panelW;
    const barH = 12;
    const centerX = w / 2;
    const titleY = h * 0.36;
    const barX = centerX - barW / 2;
    const barY = h * 0.5;

    const gradient = ctx.createLinearGradient(0, 0, 0, h);
    gradient.addColorStop(0, '#1c2630');
    gradient.addColorStop(0.58, '#151217');
    gradient.addColorStop(1, '#07080b');
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, w, h);

    ctx.save();
    ctx.globalAlpha = 0.26;
    ctx.fillStyle = '#7d2633';
    ctx.fillRect(0, h * 0.12, w, h * 0.08);
    ctx.fillStyle = '#d5a764';
    for (let i = 0; i < 7; i++) {
      ctx.fillRect(w * (0.08 + i * 0.14), h * 0.13, w * 0.045, h * 0.045);
    }
    ctx.restore();

    ctx.fillStyle = '#fff1d5';
    ctx.font = 'bold 28px Arial';
    ctx.textAlign = 'center';
    ctx.fillText('绯衣鬼戏', centerX, titleY);
    ctx.fillStyle = '#b7d7ce';
    ctx.font = '14px Arial';
    ctx.fillText('资源加载中 ' + done + '/' + this.assetTotal, centerX, titleY + 34);

    this.roundRect(barX, barY, barW, barH, barH / 2, 'rgba(255,255,255,0.12)', 'rgba(226,196,140,0.35)');
    this.roundRect(barX, barY, Math.max(barH, barW * progress), barH, barH / 2, '#d5a764', '');

    ctx.fillStyle = this.assetFailed ? '#e0b36a' : '#cfc4b8';
    ctx.font = '12px Arial';
    const status = this.assetFailed ? '部分资源加载失败，稍后将使用占位图继续' : '正在准备角色立绘与头像';
    ctx.fillText(status, centerX, barY + 38);
    ctx.textAlign = 'left';
  }

  drawTransition() {
    if (!this.transition) {
      return;
    }
    if (this.transition.style !== 'curtain') {
      this.drawFadeTransition();
      return;
    }
    const ctx = this.ctx;
    const elapsed = Date.now() - this.transition.startedAt;
    const progress = Math.min(1, elapsed / this.transition.duration);
    const fadeIn = Math.min(1, progress * 2.2);
    const fadeOut = progress > 0.62 ? 1 - (progress - 0.62) / 0.38 : 1;
    const alpha = Math.max(0, Math.min(fadeIn, fadeOut));
    const curtain = Math.min(1, progress * 1.35);
    const leftW = this.width * 0.5 * curtain;
    const rightX = this.width - leftW;

    ctx.save();
    ctx.globalAlpha = 0.92;
    ctx.fillStyle = '#16080c';
    ctx.fillRect(0, 0, leftW, this.height);
    ctx.fillRect(rightX, 0, leftW, this.height);

    const stripeW = Math.max(10, this.width * 0.035);
    ctx.globalAlpha = 0.22 * curtain;
    ctx.fillStyle = '#8d2635';
    for (let x = 0; x < leftW; x += stripeW * 2) {
      ctx.fillRect(x, 0, stripeW, this.height);
    }
    for (let x = rightX; x < this.width; x += stripeW * 2) {
      ctx.fillRect(x, 0, stripeW, this.height);
    }

    ctx.globalAlpha = alpha;
    ctx.fillStyle = '#fff1d5';
    ctx.font = 'bold 22px Arial';
    ctx.textAlign = 'center';
    ctx.fillText('幕落', this.width / 2, this.height * 0.43);
    ctx.fillStyle = '#d5a764';
    ctx.font = '14px Arial';
    ctx.fillText(this.transition.toTitle || '下一幕', this.width / 2, this.height * 0.43 + 34);
    ctx.textAlign = 'left';
    ctx.restore();
  }

  drawFadeTransition() {
    const ctx = this.ctx;
    const elapsed = Date.now() - this.transition.startedAt;
    const progress = Math.min(1, elapsed / this.transition.duration);
    const alpha = progress < 0.5 ? progress / 0.5 : 1 - (progress - 0.5) / 0.5;
    const eased = Math.sin(Math.max(0, Math.min(1, alpha)) * Math.PI * 0.5);
    ctx.save();
    ctx.globalAlpha = eased * 0.92;
    ctx.fillStyle = '#080608';
    ctx.fillRect(0, 0, this.width, this.height);
    ctx.globalAlpha = eased;
    ctx.fillStyle = '#d5a764';
    ctx.font = 'bold 15px Arial';
    ctx.textAlign = 'center';
    ctx.fillText(this.transition.toTitle || '下一幕', this.width / 2, this.height * 0.47);
    ctx.textAlign = 'left';
    ctx.restore();
  }

  drawToast() {
    if (!this.toast || Date.now() > this.toastUntil) {
      return;
    }
    const w = Math.min(this.width - 36, 300);
    const x = (this.width - w) / 2;
    const y = 92;
    this.roundRect(x, y, w, 36, 18, 'rgba(24,38,36,0.9)', '#9fd1c8');
    this.ctx.fillStyle = '#eafff8';
    this.ctx.font = '13px Arial';
    this.ctx.textAlign = 'center';
    this.ctx.fillText(this.toast, this.width / 2, y + 23);
    this.ctx.textAlign = 'left';
  }

  drawOverlay() {
    if (this.overlay === 'chapter-select') {
      this.drawChapterSelectOverlay();
      return;
    }
    if (this.overlay !== 'changelog') {
      return;
    }
    const ctx = this.ctx;
    ctx.save();
    ctx.fillStyle = 'rgba(2,4,8,0.62)';
    ctx.fillRect(0, 0, this.width, this.height);

    const w = Math.min(this.width - 34, 620);
    const h = Math.min(this.height - 70, 560);
    const x = (this.width - w) / 2;
    const y = (this.height - h) / 2;
    this.addRegion(0, 0, this.width, this.height, () => {});
    this.roundRect(x, y, w, h, 10, 'rgba(18,20,24,0.96)', 'rgba(226,196,140,0.72)');

    ctx.fillStyle = '#fff1d5';
    ctx.font = 'bold 22px Arial';
    ctx.fillText('更新日志', x + 24, y + 42);
    const pageSize = 2;
    const totalPages = Math.ceil(CHANGELOG.length / pageSize);
    const page = Math.min(this.changelogPage || 0, totalPages - 1);
    const pageEntries = CHANGELOG.slice(page * pageSize, page * pageSize + pageSize);

    ctx.fillStyle = '#b7d7ce';
    ctx.font = '13px Arial';
    ctx.fillText('绯衣鬼戏剧情体验器 v' + CHANGELOG[0].version + '  ·  ' + (page + 1) + '/' + totalPages, x + 24, y + 66);

    let cursorY = y + 98;
    pageEntries.forEach((entry) => {
      ctx.fillStyle = '#e0b36a';
      ctx.font = 'bold 16px Arial';
      ctx.fillText('v' + entry.version + '  ' + entry.date, x + 24, cursorY);
      cursorY += 24;
      ctx.fillStyle = '#f8efe4';
      ctx.font = '13px Arial';
      entry.items.forEach((item) => {
        const lines = this.measureWrappedLines(item, w - 68);
        this.wrapText('• ' + item, x + 34, cursorY, w - 68, 18, 2);
        cursorY += Math.min(lines, 2) * 18 + 4;
      });
      cursorY += 8;
    });

    const isPortrait = this.isPortraitLayout();
    const btnW = Math.min(isPortrait ? 104 : 180, w - 48);
    const btnX = x + w - btnW - (isPortrait ? 18 : 24);
    const btnY = y + h - 56;
    if (totalPages > 1) {
      const pagerW = isPortrait ? 60 : 92;
      const pagerH = isPortrait ? 34 : 38;
      if (page > 0) {
        this.drawButton(x + (isPortrait ? 18 : 20), btnY, pagerW, pagerH, '上一页', () => {
          this.changelogPage = page - 1;
        }, { fontSize: isPortrait ? 12 : 14, fill: '#35464a', stroke: '#9fd1c8' });
      }
      if (page < totalPages - 1) {
        const nextX = x + (isPortrait ? 18 : 20) + (page > 0 ? pagerW + 6 : 0);
        this.drawButton(nextX, btnY, pagerW, pagerH, '下一页', () => {
          this.changelogPage = page + 1;
        }, { fontSize: isPortrait ? 12 : 14, fill: '#35464a', stroke: '#9fd1c8' });
      }
    }
    this.drawButton(btnX, btnY, btnW, isPortrait ? 34 : 38, '选择章节', () => {
      this.overlay = 'chapter-select';
    }, { fontSize: isPortrait ? 15 : 16 });
    ctx.restore();
  }

  drawChapterSelectOverlay() {
    const ctx = this.ctx;
    ctx.save();
    ctx.fillStyle = 'rgba(2,4,8,0.66)';
    ctx.fillRect(0, 0, this.width, this.height);

    const isPortrait = this.isPortraitLayout();
    const w = Math.min(this.width - 34, 620);
    const h = Math.min(this.height - 84, isPortrait ? 520 : 500);
    const x = (this.width - w) / 2;
    const y = (this.height - h) / 2;
    this.addRegion(0, 0, this.width, this.height, () => {});
    this.roundRect(x, y, w, h, 10, 'rgba(18,20,24,0.96)', 'rgba(226,196,140,0.72)');

    ctx.fillStyle = '#fff1d5';
    ctx.font = 'bold 22px Arial';
    ctx.fillText('选择章节', x + 24, y + 42);
    ctx.fillStyle = '#b7d7ce';
    ctx.font = '13px Arial';
    ctx.fillText('请选择要测试的剧情章节', x + 24, y + 66);

    const cardX = x + 22;
    const cardW = w - 44;
    const cardH = isPortrait ? 86 : 78;
    const gap = 14;
    const startY = y + 92;
    this.chapters.forEach((chapter, index) => {
      const cy = startY + index * (cardH + gap);
      const selected = index === this.chapterIndex;
      this.roundRect(
        cardX,
        cy,
        cardW,
        cardH,
        8,
        selected ? 'rgba(83,46,48,0.96)' : 'rgba(42,43,48,0.92)',
        selected ? 'rgba(226,196,140,0.9)' : 'rgba(126,111,92,0.62)'
      );
      ctx.fillStyle = selected ? '#ffe6b2' : '#fff1d5';
      ctx.font = 'bold 17px Arial';
      ctx.fillText(chapter.title || ('章节 ' + (index + 1)), cardX + 18, cy + 30);
      ctx.fillStyle = '#cfc4b8';
      ctx.font = '13px Arial';
      this.wrapText(chapter.subtitle || '', cardX + 18, cy + 53, cardW - 36, 18, 2);
      ctx.fillStyle = selected ? '#9fd1c8' : '#d5a764';
      ctx.font = '12px Arial';
      ctx.textAlign = 'right';
      ctx.fillText(selected ? '当前章节' : '点击开始', cardX + cardW - 16, cy + cardH - 16);
      ctx.textAlign = 'left';
      this.addRegion(cardX, cy, cardW, cardH, () => {
        this.startChapter(index);
        this.overlay = '';
      });
    });

    const btnW = Math.min(isPortrait ? 104 : 150, w - 48);
    this.drawButton(x + w - btnW - 22, y + h - 54, btnW, isPortrait ? 34 : 38, '继续当前', () => {
      this.overlay = '';
    }, { fontSize: isPortrait ? 14 : 15, fill: '#35464a', stroke: '#9fd1c8' });
    ctx.restore();
  }

  openHotspotEditor() {
    this.overlay = '';
    this.messageQueue = [];
    this.editor.active = true;
    this.editor.sceneIndex = this.sceneIndex;
    this.editor.selectedKey = '';
    this.editor.drag = null;
    this.editor.dirty = false;
    const items = this.getEditorHotspots();
    if (items[0]) {
      this.editor.selectedKey = items[0].key;
    }
    this.showToast('交互点编辑模式');
  }

  closeHotspotEditor() {
    this.editor.active = false;
    this.editor.drag = null;
    this.sceneIndex = Math.max(0, Math.min(this.story.scenes.length - 1, this.editor.sceneIndex));
    this.stepIndex = 0;
    this.showToast('已返回游戏预览');
  }

  handleEditorPointerDown(x, y) {
    for (let i = this.regions.length - 1; i >= 0; i--) {
      const region = this.regions[i];
      if (x >= region.x && x <= region.x + region.w && y >= region.y && y <= region.y + region.h) {
        region.onTap(x, y);
        return;
      }
    }

    const panel = this.getEditorPanelRect();
    if (x >= panel.x && y >= panel.y && x <= panel.x + panel.w && y <= panel.y + panel.h) {
      return;
    }

    const items = this.getEditorHotspots();
    for (let i = items.length - 1; i >= 0; i--) {
      const item = items[i];
      const rect = this.scaledRect(item.spot);
      if (x >= rect.x && x <= rect.x + rect.w && y >= rect.y && y <= rect.y + rect.h) {
        this.editor.selectedKey = item.key;
        this.editor.drag = {
          key: item.key,
          offsetX: x - rect.x,
          offsetY: y - rect.y,
        };
        return;
      }
    }
  }

  moveEditorSpotTo(x, y) {
    const item = this.getEditorHotspots().find((entry) => entry.key === this.editor.drag.key);
    if (!item) {
      return;
    }
    const maxX = Math.max(0, 1 - item.spot.w);
    const maxY = Math.max(0, 1 - item.spot.h);
    item.spot.x = this.clamp((x - this.editor.drag.offsetX) / this.width, 0, maxX);
    item.spot.y = this.clamp((y - this.editor.drag.offsetY) / this.height, 0, maxY);
    this.markHotspotOverride(item);
  }

  changeEditorScene(delta) {
    const total = this.story.scenes.length;
    if (!total) {
      return;
    }
    this.editor.sceneIndex = (this.editor.sceneIndex + delta + total) % total;
    this.sceneIndex = this.editor.sceneIndex;
    this.stepIndex = 0;
    const items = this.getEditorHotspots();
    this.editor.selectedKey = items[0] ? items[0].key : '';
    this.editor.drag = null;
  }

  selectEditorHotspot(item, startDrag = false, x = 0, y = 0) {
    this.editor.selectedKey = item.key;
    if (startDrag) {
      const rect = this.scaledRect(item.spot);
      this.editor.drag = {
        key: item.key,
        offsetX: rect.w / 2,
        offsetY: rect.h / 2,
      };
      this.moveEditorSpotTo(x, y);
    }
  }

  resizeEditorHotspot(dw, dh) {
    const item = this.getSelectedEditorHotspot();
    if (!item) {
      return;
    }
    const centerX = item.spot.x + item.spot.w / 2;
    const centerY = item.spot.y + item.spot.h / 2;
    item.spot.w = this.clamp(item.spot.w + dw, 0.05, 0.82);
    item.spot.h = this.clamp(item.spot.h + dh, 0.04, 0.72);
    item.spot.x = this.clamp(centerX - item.spot.w / 2, 0, 1 - item.spot.w);
    item.spot.y = this.clamp(centerY - item.spot.h / 2, 0, 1 - item.spot.h);
    this.markHotspotOverride(item);
  }

  resetSelectedEditorHotspot() {
    const item = this.getSelectedEditorHotspot();
    if (!item) {
      return;
    }
    const defaults = this.defaultHotspotRects[item.key];
    if (!defaults) {
      return;
    }
    item.spot.x = defaults.x;
    item.spot.y = defaults.y;
    item.spot.w = defaults.w;
    item.spot.h = defaults.h;
    delete this.hotspotOverrides[item.key];
    this.editor.dirty = true;
    this.showToast('已恢复默认位置，记得保存');
  }

  async saveHotspotOverrides() {
    try {
      if (this.persistHotspotOverrides) {
        await this.persistHotspotOverrides(this.hotspotOverrides);
      }
      const storage = this.getLocalStorage();
      if (storage) {
        storage.setItem('feiyi-hotspot-overrides-v1', JSON.stringify(this.hotspotOverrides));
      }
      this.editor.dirty = false;
      this.showToast(this.persistHotspotOverrides ? '已写入本地工程，可直接预览' : '交互点已保存，可直接预览');
    } catch (error) {
      this.showToast('保存失败，请启动本地编辑服务');
    }
  }

  loadHotspotOverrides() {
    try {
      const storage = this.getLocalStorage();
      if (!storage) {
        return {};
      }
      return JSON.parse(storage.getItem('feiyi-hotspot-overrides-v1') || '{}') || {};
    } catch (error) {
      return {};
    }
  }

  applyHotspotOverrides() {
    this.chapters.forEach((chapter) => {
      (chapter.scenes || []).forEach((scene) => {
        (scene.steps || []).forEach((step, stepIndex) => {
          if (!step.hotspots) {
            return;
          }
          step.hotspots.forEach((spot) => {
            const override = this.hotspotOverrides[this.getHotspotKey(chapter, scene, stepIndex, spot)];
            if (!override) {
              return;
            }
            ['x', 'y', 'w', 'h'].forEach((field) => {
              if (Number.isFinite(override[field])) {
                spot[field] = override[field];
              }
            });
          });
        });
      });
    });
  }

  captureDefaultHotspotRects() {
    const defaults = {};
    this.chapters.forEach((chapter) => {
      (chapter.scenes || []).forEach((scene) => {
        (scene.steps || []).forEach((step, stepIndex) => {
          if (!step.hotspots) {
            return;
          }
          step.hotspots.forEach((spot) => {
            defaults[this.getHotspotKey(chapter, scene, stepIndex, spot)] = {
              x: spot.x,
              y: spot.y,
              w: spot.w,
              h: spot.h,
            };
          });
        });
      });
    });
    return defaults;
  }

  markHotspotOverride(item) {
    this.hotspotOverrides[item.key] = {
      x: this.roundCoord(item.spot.x),
      y: this.roundCoord(item.spot.y),
      w: this.roundCoord(item.spot.w),
      h: this.roundCoord(item.spot.h),
    };
    this.editor.dirty = true;
  }

  getHotspotKey(chapter, scene, stepIndex, spot) {
    return [chapter.id || 'chapter', scene.id || 'scene', stepIndex, spot.id || spot.label].join(':');
  }

  getEditorHotspots() {
    const chapter = this.currentChapter || this.chapters[this.chapterIndex] || this.chapters[0];
    const scene = chapter && chapter.scenes ? chapter.scenes[this.editor.sceneIndex] : null;
    if (!chapter || !scene) {
      return [];
    }
    const items = [];
    (scene.steps || []).forEach((step, stepIndex) => {
      if (!step.hotspots) {
        return;
      }
      step.hotspots.forEach((spot, spotIndex) => {
        items.push({
          chapter,
          scene,
          step,
          stepIndex,
          spot,
          spotIndex,
          key: this.getHotspotKey(chapter, scene, stepIndex, spot),
        });
      });
    });
    return items;
  }

  getSelectedEditorHotspot() {
    return this.getEditorHotspots().find((item) => item.key === this.editor.selectedKey);
  }

  getLocalStorage() {
    if (typeof window === 'undefined' || !window.localStorage) {
      return null;
    }
    return window.localStorage;
  }

  drawEditorOverlay() {
    const ctx = this.ctx;
    const items = this.getEditorHotspots();
    const scene = this.story.scenes[this.editor.sceneIndex];
    this.regions = [];
    this.drawEditorHotspots(items);

    ctx.save();
    ctx.fillStyle = 'rgba(4,8,10,0.4)';
    ctx.fillRect(0, 0, this.width, 82);
    ctx.fillStyle = '#fff1d5';
    ctx.font = 'bold 18px Arial';
    ctx.fillText('交互点编辑器', 16, 34);
    ctx.fillStyle = '#b7d7ce';
    ctx.font = '12px Arial';
    const title = scene ? scene.title : '无场景';
    ctx.fillText(title + ' · 拖动画面中色块调整位置', 16, 58);
    this.drawButton(this.width - 72, 18, 56, 32, '退出', () => this.closeHotspotEditor(), {
      fontSize: 13,
      fill: 'rgba(78,48,52,0.94)',
      stroke: 'rgba(226,196,140,0.72)',
    });
    ctx.restore();

    this.drawEditorPanel(items, scene);
  }

  drawEditorHotspots(items) {
    const ctx = this.ctx;
    items.forEach((item, index) => {
      const rect = this.scaledRect(item.spot);
      const selected = item.key === this.editor.selectedKey;
      ctx.save();
      ctx.lineWidth = selected ? 3 : 2;
      ctx.setLineDash(selected ? [] : [6, 5]);
      ctx.fillStyle = selected ? 'rgba(255, 72, 72, 0.25)' : 'rgba(68, 180, 224, 0.18)';
      ctx.strokeStyle = selected ? 'rgba(255, 88, 88, 0.96)' : 'rgba(126, 211, 236, 0.84)';
      ctx.shadowColor = selected ? 'rgba(255, 88, 88, 0.38)' : 'rgba(126, 211, 236, 0.2)';
      ctx.shadowBlur = selected ? 14 : 8;
      this.roundRect(rect.x, rect.y, rect.w, rect.h, 8, ctx.fillStyle, ctx.strokeStyle);
      ctx.restore();

      ctx.save();
      ctx.fillStyle = '#fff8e6';
      ctx.font = 'bold 12px Arial';
      ctx.textAlign = 'center';
      const label = (index + 1) + '. ' + (item.spot.label || item.spot.id);
      ctx.fillText(label, rect.x + rect.w / 2, rect.y + rect.h / 2 + 4);
      ctx.textAlign = 'left';
      ctx.restore();
    });
  }

  drawEditorPanel(items, scene) {
    const ctx = this.ctx;
    const panel = this.getEditorPanelRect();
    this.roundRect(panel.x, panel.y, panel.w, panel.h, 10, 'rgba(17,22,25,0.96)', 'rgba(159,209,200,0.62)');

    const pad = 12;
    const leftX = panel.x + pad;
    const contentW = panel.w - pad * 2;
    const footerY = panel.y + panel.h - 42;
    const sceneW = Math.min(106, contentW * 0.32);
    const selectedX = leftX + sceneW + 10;
    const selectedW = panel.x + panel.w - selectedX - pad;

    ctx.fillStyle = '#fff1d5';
    ctx.font = 'bold 14px Arial';
    ctx.fillText('场景', leftX, panel.y + 28);
    ctx.fillStyle = '#b7d7ce';
    ctx.font = '11px Arial';
    ctx.fillText((this.editor.sceneIndex + 1) + '/' + this.story.scenes.length, leftX + 38, panel.y + 28);
    this.drawButton(leftX, panel.y + 38, 44, 28, '上', () => this.changeEditorScene(-1), {
      fontSize: 12,
      fill: '#35464a',
      stroke: '#9fd1c8',
    });
    this.drawButton(leftX + 52, panel.y + 38, 44, 28, '下', () => this.changeEditorScene(1), {
      fontSize: 12,
      fill: '#35464a',
      stroke: '#9fd1c8',
    });

    ctx.fillStyle = '#d5a764';
    ctx.font = 'bold 12px Arial';
    this.wrapText(scene ? scene.title : '', selectedX, panel.y + 26, selectedW - 58, 16, 2);

    const selected = this.getSelectedEditorHotspot();
    ctx.fillStyle = '#fff1d5';
    ctx.font = 'bold 12px Arial';
    ctx.fillText(selected ? selected.spot.label || selected.spot.id : '未选择', selectedX, panel.y + 58);
    if (selected) {
      ctx.fillStyle = '#cfc4b8';
      ctx.font = '10px Arial';
      ctx.fillText(
        'x ' + selected.spot.x.toFixed(2) + '  y ' + selected.spot.y.toFixed(2),
        selectedX + 74,
        panel.y + 58
      );
      this.drawButton(panel.x + panel.w - pad - 52, panel.y + 38, 52, 26, '重置', () => this.resetSelectedEditorHotspot(), {
        fontSize: 11,
        fill: '#4d3436',
        stroke: '#d5a764',
      });
    }

    ctx.fillStyle = '#fff1d5';
    ctx.font = 'bold 15px Arial';
    ctx.fillText('交互点', leftX, panel.y + 82);
    if (!items.length) {
      ctx.fillStyle = '#cfc4b8';
      ctx.font = '12px Arial';
      this.wrapText('当前场景没有交互点', leftX, panel.y + 108, contentW, 18, 2);
    }

    const rowH = 31;
    const rowGap = 6;
    const colGap = 8;
    const listY = panel.y + 92;
    const listBottom = footerY - 8;
    const maxRows = Math.max(1, Math.floor((listBottom - listY) / (rowH + rowGap)));
    const colCount = Math.max(1, Math.min(3, Math.ceil(items.length / maxRows)));
    const colW = (contentW - colGap * (colCount - 1)) / colCount;
    items.forEach((item, index) => {
      const col = Math.floor(index / maxRows);
      const row = index % maxRows;
      if (col >= colCount) {
        return;
      }
      const rowX = leftX + col * (colW + colGap);
      const rowY = listY + row * (rowH + rowGap);
      const selected = item.key === this.editor.selectedKey;
      this.roundRect(
        rowX,
        rowY,
        colW,
        rowH,
        7,
        selected ? 'rgba(117,55,55,0.95)' : 'rgba(48,54,58,0.92)',
        selected ? 'rgba(255,160,124,0.86)' : 'rgba(126,111,92,0.55)'
      );
      ctx.fillStyle = selected ? '#ffe6d0' : '#f8efe4';
      ctx.font = 'bold 10px Arial';
      ctx.save();
      ctx.beginPath();
      ctx.rect(rowX + 8, rowY, colW - 16, rowH);
      ctx.clip();
      ctx.fillText((index + 1) + '. ' + (item.spot.label || item.spot.id), rowX + 8, rowY + 14);
      ctx.fillStyle = '#b7d7ce';
      ctx.font = '10px Arial';
      ctx.fillText((item.step.type || 'hotspot') + ' · step ' + (item.stepIndex + 1), rowX + 8, rowY + 28);
      ctx.restore();
      this.addRegion(rowX, rowY, colW, rowH, (tapX, tapY) => this.selectEditorHotspot(item, true, tapX, tapY));
    });

    if (selected) {
      const btnW = Math.max(40, (selectedW - 12) / 4);
      this.drawButton(selectedX, footerY, btnW, 30, '宽 -', () => this.resizeEditorHotspot(-0.02, 0), {
        fontSize: 12,
        fill: '#4f4642',
        stroke: '#d5a764',
      });
      this.drawButton(selectedX + btnW + 4, footerY, btnW, 30, '宽 +', () => this.resizeEditorHotspot(0.02, 0), {
        fontSize: 12,
        fill: '#4f4642',
        stroke: '#d5a764',
      });
      this.drawButton(selectedX + (btnW + 4) * 2, footerY, btnW, 30, '高 -', () => this.resizeEditorHotspot(0, -0.02), {
        fontSize: 12,
        fill: '#4f4642',
        stroke: '#d5a764',
      });
      this.drawButton(selectedX + (btnW + 4) * 3, footerY, btnW, 30, '高 +', () => this.resizeEditorHotspot(0, 0.02), {
        fontSize: 12,
        fill: '#4f4642',
        stroke: '#d5a764',
      });
    }

    const saveLabel = this.editor.dirty ? '保存*' : '保存';
    this.drawButton(leftX, footerY, sceneW - 6, 30, saveLabel, () => this.saveHotspotOverrides(), {
      fontSize: 14,
      fill: '#28645f',
      stroke: '#9fd1c8',
    });
  }

  getEditorPanelRect() {
    const isPortrait = this.isPortraitLayout();
    const x = 16;
    const w = this.width - 32;
    const h = Math.min(this.height * (isPortrait ? 0.34 : 0.34), isPortrait ? 252 : 246);
    const y = this.height - h - 16;
    return { x, y, w, h };
  }

  scaledRect(spot) {
    return {
      x: spot.x * this.width,
      y: spot.y * this.height,
      w: spot.w * this.width,
      h: spot.h * this.height,
    };
  }

  addRegion(x, y, w, h, onTap) {
    this.regions.push({ x, y, w, h, onTap });
  }

  clamp(value, min, max) {
    return Math.max(min, Math.min(max, value));
  }

  roundCoord(value) {
    return Math.round(value * 10000) / 10000;
  }

  roundRect(x, y, w, h, radius, fill, stroke) {
    const ctx = this.ctx;
    const r = Math.min(radius, w / 2, h / 2);
    ctx.beginPath();
    ctx.moveTo(x + r, y);
    ctx.arcTo(x + w, y, x + w, y + h, r);
    ctx.arcTo(x + w, y + h, x, y + h, r);
    ctx.arcTo(x, y + h, x, y, r);
    ctx.arcTo(x, y, x + w, y, r);
    ctx.closePath();
    if (fill) {
      ctx.fillStyle = fill;
      ctx.fill();
    }
    if (stroke) {
      ctx.strokeStyle = stroke;
      ctx.stroke();
    }
  }

  clipRoundRect(x, y, w, h, radius) {
    const ctx = this.ctx;
    const r = Math.min(radius, w / 2, h / 2);
    ctx.beginPath();
    ctx.moveTo(x + r, y);
    ctx.arcTo(x + w, y, x + w, y + h, r);
    ctx.arcTo(x + w, y + h, x, y + h, r);
    ctx.arcTo(x, y + h, x, y, r);
    ctx.arcTo(x, y, x + w, y, r);
    ctx.closePath();
    ctx.clip();
  }

  clipCircle(x, y, radius) {
    const ctx = this.ctx;
    ctx.beginPath();
    ctx.arc(x + radius, y + radius, radius, 0, Math.PI * 2);
    ctx.closePath();
    ctx.clip();
  }

  drawRichText(text, x, y, maxWidth, lineHeight, maxLines, fontSize) {
    const ctx = this.ctx;
    const tokens = this.tokenizeRichText(text);
    let cursorX = x;
    let cursorY = y;
    let lines = 1;
    tokens.forEach((token) => {
      const chars = token.text.split('');
      chars.forEach((char) => {
        const style = token.highlight ? 'bold ' : '';
        ctx.font = style + fontSize + 'px Arial';
        const charW = ctx.measureText(char).width;
        if (cursorX + charW > x + maxWidth && cursorX > x) {
          lines += 1;
          if (lines > maxLines) {
            return;
          }
          cursorX = x;
          cursorY += lineHeight;
        }
        if (lines > maxLines) {
          return;
        }
        ctx.fillStyle = token.highlight ? '#b52d32' : '#6f442b';
        ctx.fillText(char, cursorX, cursorY);
        cursorX += charW;
      });
    });
  }

  tokenizeRichText(text) {
    const source = String(text);
    const keywords = this.getRichTextKeywords().filter((word) => source.includes(word));
    if (!keywords.length) {
      return [{ text: source, highlight: false }];
    }

    const tokens = [];
    let index = 0;
    while (index < source.length) {
      const match = keywords.find((word) => source.slice(index, index + word.length) === word);
      if (match) {
        tokens.push({ text: match, highlight: true });
        index += match.length;
        continue;
      }
      let nextIndex = source.length;
      keywords.forEach((word) => {
        const found = source.indexOf(word, index + 1);
        if (found !== -1) {
          nextIndex = Math.min(nextIndex, found);
        }
      });
      tokens.push({ text: source.slice(index, nextIndex), highlight: false });
      index = nextIndex;
    }
    return tokens;
  }

  getRichTextKeywords() {
    return [
      '沈清和',
      '谢无咎',
      '绯衣娘子',
      '昭雪',
      '掌柜',
      '女伶',
      '男伶',
      '小伶人',
      '大理寺',
      '倚云楼',
      '绮云楼',
      '长安',
      '铜镜',
      '耳坠',
      '衣襟',
      '喉间',
      '右手',
      '黑粉',
      '细粉',
      '指痕',
      '勒痕',
      '鬼掐喉',
      '命案',
      '索命',
      '尸体',
      '女鬼',
      '大门',
      '戏台',
      '后台',
      '小乙',
      '绯萤',
      '沈绯衣',
      '戏房',
      '妆阁',
      '血包',
      '润嗓梅',
      '红泥',
      '走位',
      '戏鞋',
      '后巷',
      '糯米纸',
    ].sort((a, b) => b.length - a.length);
  }

  wrapText(text, x, y, maxWidth, lineHeight, maxLines) {
    const chars = String(text).split('');
    let line = '';
    let lines = 0;
    for (let i = 0; i < chars.length; i++) {
      const test = line + chars[i];
      if (this.ctx.measureText(test).width > maxWidth && line) {
        this.ctx.fillText(line, x, y + lines * lineHeight);
        line = chars[i];
        lines += 1;
        if (lines >= maxLines) {
          return;
        }
      } else {
        line = test;
      }
    }
    if (line && lines < maxLines) {
      this.ctx.fillText(line, x, y + lines * lineHeight);
    }
  }

  measureWrappedLines(text, maxWidth) {
    const chars = String(text).split('');
    let line = '';
    let lines = 1;
    for (let i = 0; i < chars.length; i++) {
      const test = line + chars[i];
      if (this.ctx.measureText(test).width > maxWidth && line) {
        line = chars[i];
        lines += 1;
      } else {
        line = test;
      }
    }
    return lines;
  }
}
