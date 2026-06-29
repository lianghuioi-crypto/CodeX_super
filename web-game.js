import STORY_DATA from './js/story/story-data.js';
import StoryEngine from './js/story/story-engine.js';

const HOTSPOT_OVERRIDE_PATH = './js/story/hotspot-overrides.json';
const canvas = document.getElementById('game');
const app = document.getElementById('app');
const ctx = canvas.getContext('2d');
const isLocalEditorHost = ['localhost', '127.0.0.1', '::1'].includes(window.location.hostname);

const state = {
  width: 0,
  height: 0,
  dpr: Math.max(1, Math.min(window.devicePixelRatio || 1, 2)),
  raf: 0,
};

function resize() {
  const rect = app.getBoundingClientRect();
  state.width = rect.width;
  state.height = rect.height;
  canvas.width = Math.floor(state.width * state.dpr);
  canvas.height = Math.floor(state.height * state.dpr);
  canvas.style.width = state.width + 'px';
  canvas.style.height = state.height + 'px';
  ctx.setTransform(state.dpr, 0, 0, state.dpr, 0, 0);
}

async function loadHotspotOverrides() {
  try {
    const response = await fetch(HOTSPOT_OVERRIDE_PATH + '?t=' + Date.now(), { cache: 'no-store' });
    if (!response.ok) {
      return {};
    }
    return await response.json();
  } catch (error) {
    return {};
  }
}

async function persistHotspotOverrides(overrides) {
  const response = await fetch('/__hotspot-overrides', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(overrides, null, 2),
  });
  if (!response.ok) {
    throw new Error('Failed to save hotspot overrides');
  }
}

const engine = new StoryEngine(canvas, ctx, STORY_DATA, {
  getSize: () => ({ width: state.width, height: state.height }),
  editorEnabled: isLocalEditorHost,
  hotspotOverrides: await loadHotspotOverrides(),
  persistHotspotOverrides: isLocalEditorHost ? persistHotspotOverrides : null,
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
    canvas.setPointerCapture(event.pointerId);
    engine.handlePointerDown(point.x, point.y);
  });

  canvas.addEventListener('pointermove', (event) => {
    const point = toCanvasPoint(event);
    engine.handlePointerMove(point.x, point.y);
  });

  canvas.addEventListener('pointerup', () => {
    engine.handlePointerUp();
  });

  canvas.addEventListener('pointercancel', () => {
    engine.handlePointerUp();
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
