import STORY_DATA from './js/story/story-data.js';
import StoryEngine from './js/story/story-engine.js';

const canvas = document.getElementById('game');
const ctx = canvas.getContext('2d');

const state = {
  width: 0,
  height: 0,
  dpr: Math.max(1, Math.min(window.devicePixelRatio || 1, 2)),
  raf: 0,
};

function resize() {
  state.width = window.innerWidth;
  state.height = window.innerHeight;
  canvas.width = Math.floor(state.width * state.dpr);
  canvas.height = Math.floor(state.height * state.dpr);
  canvas.style.width = state.width + 'px';
  canvas.style.height = state.height + 'px';
  ctx.setTransform(state.dpr, 0, 0, state.dpr, 0, 0);
}

const engine = new StoryEngine(canvas, ctx, STORY_DATA, {
  getSize: () => ({ width: state.width, height: state.height }),
});

function toCanvasPoint(event) {
  const rect = canvas.getBoundingClientRect();
  return {
    x: event.clientX - rect.left,
    y: event.clientY - rect.top,
  };
}

function bindInput() {
  canvas.addEventListener('pointerdown', (event) => {
    const point = toCanvasPoint(event);
    engine.handleTap(point.x, point.y);
  });

  window.addEventListener('keydown', (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      engine.handleTap(state.width / 2, state.height * 0.82);
    }
    if (event.key.toLowerCase() === 'r') {
      engine.start();
    }
  });
}

function loop() {
  ctx.clearRect(0, 0, state.width, state.height);
  engine.update();
  engine.render();
  state.raf = requestAnimationFrame(loop);
}

resize();
bindInput();
engine.start();
cancelAnimationFrame(state.raf);
loop();

window.addEventListener('resize', resize);
