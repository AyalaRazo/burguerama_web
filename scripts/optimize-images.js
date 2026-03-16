import sharp from 'sharp';
import { readdir, stat, mkdir } from 'fs/promises';
import { join, extname, basename, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const PUBLIC_DIR = join(__dirname, '..', 'public');

const WEBP_QUALITY = 82;
const MAX_WIDTH = 1400; // max dimension for large images

async function getAllImages(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const fullPath = join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...(await getAllImages(fullPath)));
    } else if (/\.(jpg|jpeg|png)$/i.test(entry.name)) {
      files.push(fullPath);
    }
  }
  return files;
}

function toWebpPath(imgPath) {
  return imgPath.replace(/\.(jpg|jpeg|png)$/i, '.webp');
}

async function optimizeImage(imgPath) {
  const webpPath = toWebpPath(imgPath);
  const originalSize = (await stat(imgPath)).size;

  let pipeline = sharp(imgPath).webp({ quality: WEBP_QUALITY });

  // Resize if wider than MAX_WIDTH
  const meta = await sharp(imgPath).metadata();
  if (meta.width > MAX_WIDTH) {
    pipeline = sharp(imgPath).resize({ width: MAX_WIDTH, withoutEnlargement: true }).webp({ quality: WEBP_QUALITY });
  }

  await pipeline.toFile(webpPath);

  const newSize = (await stat(webpPath)).size;
  const saving = ((1 - newSize / originalSize) * 100).toFixed(1);
  const relPath = imgPath.replace(PUBLIC_DIR, '').replace(/\\/g, '/');

  console.log(
    `${relPath} — ${(originalSize / 1024).toFixed(0)} KB → ${(newSize / 1024).toFixed(0)} KB (${saving}% saved)`
  );

  return { originalSize, newSize };
}

async function main() {
  console.log('🔍 Finding images in /public...\n');
  const images = await getAllImages(PUBLIC_DIR);
  console.log(`Found ${images.length} images to optimize.\n`);

  let totalOriginal = 0;
  let totalNew = 0;

  for (const img of images) {
    try {
      const { originalSize, newSize } = await optimizeImage(img);
      totalOriginal += originalSize;
      totalNew += newSize;
    } catch (err) {
      console.error(`  ERROR: ${img} — ${err.message}`);
    }
  }

  const totalSaving = ((1 - totalNew / totalOriginal) * 100).toFixed(1);
  console.log('\n--- Summary ---');
  console.log(`Total original: ${(totalOriginal / 1024 / 1024).toFixed(2)} MB`);
  console.log(`Total optimized: ${(totalNew / 1024 / 1024).toFixed(2)} MB`);
  console.log(`Total saved: ${totalSaving}%`);
}

main().catch(console.error);
