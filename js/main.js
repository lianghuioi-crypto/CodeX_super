import './render';
import STORY_DATA from './story/story-data';
import StoryEngine from './story/story-engine';

const ctx = canvas.getContext('2d');

export default class Main {
  aniId = 0;

  constructor() {
    this.engine = new StoryEngine(canvas, ctx, STORY_DATA);
    wx.onTouchStart((event) => {
      const touch = event.touches[0];
      this.engine.handleTap(touch.clientX, touch.clientY);
    });
    this.start();
  }

  start() {
    this.engine.start();
    cancelAnimationFrame(this.aniId);
    this.aniId = requestAnimationFrame(this.loop.bind(this));
  }

  loop() {
    this.engine.update();
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    this.engine.render();
    this.aniId = requestAnimationFrame(this.loop.bind(this));
  }
}
