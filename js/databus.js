import Pool from './base/pool';

let instance;

const SCORE_RULE = {
  KILL_BASE: 10,
  COMBO_WINDOW: 90,
  MAX_COMBO_MULTIPLIER: 5,
  SURVIVAL_INTERVAL: 60,
  SURVIVAL_SCORE: 1,
};

/**
 * 全局状态管理器
 * 负责管理游戏的状态，包括帧数、分数、子弹、敌人和动画等
 */
export default class DataBus {
  // 直接在类中定义实例属性
  enemys = []; // 存储敌人
  bullets = []; // 存储子弹
  animations = []; // 存储动画
  frame = 0; // 当前帧数
  score = 0; // 当前分数
  combo = 0; // 当前连击数
  maxCombo = 0; // 最高连击数
  lastKillFrame = 0; // 上一次击杀发生的帧
  survivalScore = 0; // 生存奖励分
  isGameOver = false; // 游戏是否结束
  pool = new Pool(); // 初始化对象池

  constructor() {
    // 确保单例模式
    if (instance) return instance;

    instance = this;
  }

  // 重置游戏状态
  reset() {
    this.frame = 0; // 当前帧数
    this.score = 0; // 当前分数
    this.combo = 0; // 当前连击数
    this.maxCombo = 0; // 最高连击数
    this.lastKillFrame = 0; // 上一次击杀发生的帧
    this.survivalScore = 0; // 生存奖励分
    this.bullets = []; // 存储子弹
    this.enemys = []; // 存储敌人
    this.animations = []; // 存储动画
    this.isGameOver = false; // 游戏是否结束
  }

  // 根据生存时长增加分数
  addSurvivalScore() {
    if (
      this.frame > 0 &&
      this.frame % SCORE_RULE.SURVIVAL_INTERVAL === 0
    ) {
      this.score += SCORE_RULE.SURVIVAL_SCORE;
      this.survivalScore += SCORE_RULE.SURVIVAL_SCORE;
    }
  }

  // 超出连击时间窗口后重置连击状态
  updateCombo() {
    if (
      this.combo > 0 &&
      this.frame - this.lastKillFrame > SCORE_RULE.COMBO_WINDOW
    ) {
      this.combo = 0;
    }
  }

  // 击毁敌人时增加分数，连续击杀会获得更高倍率
  addKillScore() {
    const isComboHit =
      this.lastKillFrame > 0 &&
      this.frame - this.lastKillFrame <= SCORE_RULE.COMBO_WINDOW;

    this.combo = isComboHit ? this.combo + 1 : 1;
    this.maxCombo = Math.max(this.maxCombo, this.combo);
    this.lastKillFrame = this.frame;

    const multiplier = Math.min(
      this.combo,
      SCORE_RULE.MAX_COMBO_MULTIPLIER
    );

    this.score += SCORE_RULE.KILL_BASE * multiplier;
  }

  // 游戏结束
  gameOver() {
    this.isGameOver = true;
  }

  /**
   * 回收敌人，进入对象池
   * 此后不进入帧循环
   * @param {Object} enemy - 要回收的敌人对象
   */
  removeEnemy(enemy) {
    const temp = this.enemys.splice(this.enemys.indexOf(enemy), 1);
    if (temp) {
      this.pool.recover('enemy', enemy); // 回收敌人到对象池
    }
  }

  /**
   * 回收子弹，进入对象池
   * 此后不进入帧循环
   * @param {Object} bullet - 要回收的子弹对象
   */
  removeBullets(bullet) {
    const temp = this.bullets.splice(this.bullets.indexOf(bullet), 1);
    if (temp) {
      this.pool.recover('bullet', bullet); // 回收子弹到对象池
    }
  }
}
