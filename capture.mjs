/** Optional terminal capture adapter. Recorded experiment captures used Codex CUA. */
import { chromium } from 'playwright';
import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const [run, base = 'http://127.0.0.1:8765'] = process.argv.slice(2);
if (!/^[a-z0-9-]+$/.test(run || '')) throw new Error('Supply a lowercase run slug.');
const origin = new URL(base);
if (!['127.0.0.1', 'localhost', '[::1]'].includes(origin.hostname) || origin.protocol !== 'http:') {
  throw new Error('Capture only supports a local HTTP server.');
}
const root = path.dirname(fileURLToPath(import.meta.url));
const dir = path.join(root, 'results', run);
await fs.access(path.join(dir, 'index.html'));
const browser = await chromium.launch({ headless: true });
try {
  const context = await browser.newContext({ viewport: { width: 1600, height: 1000 }, deviceScaleFactor: 1 });
  await context.route('**/*', route => {
    const url = new URL(route.request().url());
    return url.origin === origin.origin || ['data:', 'blob:'].includes(url.protocol)
      ? route.continue() : route.abort('blockedbyclient');
  });
  const page = await context.newPage();
  const errors = [];
  page.on('pageerror', error => errors.push(String(error)));
  page.on('console', message => { if (message.type() === 'error') errors.push(message.text()); });
  const target = new URL('results/' + run + '/index.html', base.replace(/\/?$/, '/')).href;
  for (const [name, width, height] of [['desktop', 1600, 1000], ['mobile', 390, 844]]) {
    errors.length = 0;
    await page.setViewportSize({ width, height });
    await page.goto(target, { waitUntil: 'load', timeout: 30000 });
    await page.evaluate(async () => {
      await document.fonts.ready;
      await new Promise(resolve => requestAnimationFrame(() => requestAnimationFrame(resolve)));
    });
    const qa = await page.evaluate(() => ({ width: innerWidth, height: innerHeight, scrollWidth: document.documentElement.scrollWidth }));
    await page.screenshot({ path: path.join(dir, name + '.png'), fullPage: false });
    if (name === 'desktop') await page.screenshot({ path: path.join(dir, 'full-page.png'), fullPage: true });
    await fs.writeFile(path.join(dir, 'qa-' + name + '.json'), JSON.stringify({ ...qa, errors: [...errors], capture: 'Playwright Chromium, deviceScaleFactor 1' }, null, 2));
  }
  await fs.writeFile(path.join(dir, 'capture.done.json'), JSON.stringify({ completed: new Date().toISOString(), adapter: 'playwright' }));
} finally {
  await browser.close();
}
