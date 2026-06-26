import { createServer } from 'node:http';
import { readFile, writeFile } from 'node:fs/promises';
import { createReadStream } from 'node:fs';
import { extname, join, normalize, resolve } from 'node:path';

const root = process.cwd();
const port = Number(process.env.PORT || 8088);
const overrideFile = resolve(root, 'js/story/hotspot-overrides.json');

const mimeTypes = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.mjs': 'text/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.webp': 'image/webp',
  '.svg': 'image/svg+xml',
};

function sendJson(res, status, data) {
  res.writeHead(status, {
    'Content-Type': 'application/json; charset=utf-8',
    'Cache-Control': 'no-store',
  });
  res.end(JSON.stringify(data));
}

function isHotspotOverrideMap(value) {
  if (!value || typeof value !== 'object' || Array.isArray(value)) {
    return false;
  }
  return Object.values(value).every((rect) => {
    if (!rect || typeof rect !== 'object' || Array.isArray(rect)) {
      return false;
    }
    return ['x', 'y', 'w', 'h'].every((key) => Number.isFinite(rect[key]));
  });
}

async function readBody(req) {
  const chunks = [];
  for await (const chunk of req) {
    chunks.push(chunk);
  }
  return Buffer.concat(chunks).toString('utf8');
}

async function handleSave(req, res) {
  try {
    const body = await readBody(req);
    const payload = JSON.parse(body || '{}');
    if (!isHotspotOverrideMap(payload)) {
      sendJson(res, 400, { ok: false, error: 'Invalid hotspot override payload' });
      return;
    }
    await writeFile(overrideFile, JSON.stringify(payload, null, 2) + '\n', 'utf8');
    sendJson(res, 200, { ok: true, file: 'js/story/hotspot-overrides.json' });
  } catch (error) {
    sendJson(res, 500, { ok: false, error: error.message });
  }
}

async function serveStatic(req, res) {
  const url = new URL(req.url, 'http://localhost');
  const pathname = decodeURIComponent(url.pathname === '/' ? '/index.html' : url.pathname);
  const safePath = normalize(pathname).replace(/^(\.\.[/\\])+/, '');
  const filePath = resolve(join(root, safePath));
  if (!filePath.startsWith(root)) {
    res.writeHead(403);
    res.end('Forbidden');
    return;
  }

  try {
    await readFile(filePath);
  } catch (error) {
    res.writeHead(404);
    res.end('Not found');
    return;
  }

  res.writeHead(200, {
    'Content-Type': mimeTypes[extname(filePath).toLowerCase()] || 'application/octet-stream',
    'Cache-Control': filePath.endsWith('hotspot-overrides.json') ? 'no-store' : 'no-cache',
  });
  createReadStream(filePath).pipe(res);
}

const server = createServer((req, res) => {
  if (req.method === 'POST' && req.url === '/__hotspot-overrides') {
    handleSave(req, res);
    return;
  }
  serveStatic(req, res);
});

server.listen(port, () => {
  console.log(`Local editor server running at http://localhost:${port}/`);
  console.log('Hotspot saves write to js/story/hotspot-overrides.json');
});
