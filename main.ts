// news-image-20261119 entry: copy the finished front page to /output/entry.png.
//
// The image itself is built at authoring time (page.html, hand-drawn in code,
// screenshotted to entry.png at 1024x1024). This program only copies bytes,
// so two runs write identical output. No network, no randomness.
import { copyFileSync, existsSync, mkdirSync, readFileSync, statSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const here = dirname(fileURLToPath(import.meta.url));
const source = join(here, 'entry.png');
const outDir = '/output';
const target = join(outDir, 'entry.png');
const MAX_BYTES = 1048576; // 1 MiB cap from the competition rules
const PNG_MAGIC = Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]);

if (!existsSync(source)) {
  throw new Error('entry.png missing next to main.ts');
}
const head = readFileSync(source).subarray(0, 8);
if (!head.equals(PNG_MAGIC)) {
  throw new Error('entry.png is not a PNG');
}
const size = statSync(source).size;
if (size > MAX_BYTES) {
  throw new Error(`entry.png is ${size} bytes, over the 1 MiB cap`);
}
mkdirSync(outDir, { recursive: true });
copyFileSync(source, target);
const bytes = statSync(target).size;
console.log(`wrote ${target} (${bytes} bytes)`);
