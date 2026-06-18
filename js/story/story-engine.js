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
};

const PROP_ASSETS = {
  mirrorGhost: 'images/props/tongjing-nvgui.png',
  qiyunStage: 'images/scenes/qiyun-stage.jpg',
  qiyunDoorOpen: 'images/scenes/qiyun-door-open.jpg',
  qiyunDoorClosed: 'images/scenes/qiyun-door-closed.png',
  backstageDoor: 'images/scenes/backstage-door.jpg',
};

const CHANGELOG = [
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
    this.assetTotal = 0;
    this.assetLoaded = 0;
    this.assetFailed = 0;
    this.assetErrors = [];
    this.assetsReady = false;
    this.startRequested = false;
    this.preloadAssets();
  }

  start() {
    this.startRequested = true;
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
      this.showToast('点击对话推进，点击发光区域调查');
    }
  }

  handleTap(x, y) {
    if (!this.assetsReady) {
      return;
    }
    if (this.transition) {
      return;
    }

    for (let i = this.regions.length - 1; i >= 0; i--) {
      const region = this.regions[i];
      if (x >= region.x && x <= region.x + region.w && y >= region.y && y <= region.y + region.h) {
        region.onTap();
        return;
      }
    }

    const step = this.getStep();
    if (!step || step.type === 'hotspot' || step.type === 'inspect' || step.type === 'merge') {
      return;
    }
    this.advance();
  }

  update() {
    if (this.transition && Date.now() - this.transition.startedAt >= this.transition.duration) {
      this.transition = null;
      this.goToNextScene();
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
    const shouldTransition = this.shouldPlaySceneTransition(scene, this.getStep());
    if (wasLastStep && shouldTransition) {
      this.startSceneTransition(scene);
      return;
    }

    this.stepIndex += 1;
    if (this.stepIndex >= scene.steps.length) {
      this.goToNextScene();
    }
  }

  goToNextScene() {
    this.sceneIndex += 1;
    this.stepIndex = 0;
    if (this.sceneIndex >= this.story.scenes.length) {
      this.finished = true;
      this.onComplete();
    } else {
      this.showToast(this.getScene().title);
    }
  }

  shouldPlaySceneTransition(scene, step) {
    return Boolean(
      scene &&
        step &&
        scene.id === 'stage-open' &&
        step.type === 'dialog' &&
        step.speaker === '小伶人'
    );
  }

  startSceneTransition(scene) {
    this.transition = {
      startedAt: Date.now(),
      duration: 1350,
      fromTitle: scene.title,
      toTitle: this.story.scenes[this.sceneIndex + 1] && this.story.scenes[this.sceneIndex + 1].title,
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
    return CHARACTER_ASSETS[speaker] ? speaker : '';
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

    if (usesStageArt) {
      this.drawStageArtBackground(w * 0.06, stageTop, w * 0.88, stageH);
    } else {
      this.roundRect(w * 0.08, stageTop, w * 0.84, stageH, 8, '#25212a', '#735244');
      ctx.fillStyle = '#15171c';
      ctx.fillRect(w * 0.12, stageTop + stageH * 0.72, w * 0.76, stageH * 0.16);
    }

    if (scene.id === 'front-door') {
      const showZhaoxue = this.shouldShowZhaoxueAtDoor();
      const showZhanggui = this.shouldShowZhangguiAtDoor();
      this.drawDoorSceneBackground(w * 0.06, stageTop, w * 0.88, stageH);
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
      this.drawBackstageDoorBackground(w * 0.06, stageTop, w * 0.88, stageH);
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
    ctx.fillText(scene.title, padding, 54);
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
    this.ctx.fillText('第一关结束', x + 24, y + 46);
    this.ctx.fillStyle = '#f8efe4';
    this.ctx.font = '17px Arial';
    this.wrapText(step.text, x + 24, y + 88, w - 48, 28, 4);
    this.drawButton(x + 24, y + h - 60, w - 48, 40, '重新体验', () => this.start());
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
      this.roundRect(drawX, drawY, width, height, 8, color, '#e2c48c');
      this.roundRect(drawX + width * 0.28, drawY - height * 0.18, width * 0.44, width * 0.44, width * 0.22, '#e8d1b0', '#6d4e39');
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
      this.ctx.fillStyle = '#7d2633';
      this.ctx.fillRect(x, y, size, size);
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
    this.drawButton(btnX, btnY, btnW, isPortrait ? 34 : 38, '开始体验', () => {
      this.overlay = '';
    }, { fontSize: isPortrait ? 15 : 16 });
    ctx.restore();
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
