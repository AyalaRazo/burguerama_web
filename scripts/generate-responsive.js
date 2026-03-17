import sharp from 'sharp';
import { readdir, stat } from 'fs/promises';
import { join, extname, basename, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const PUBLIC_DIR = join(__dirname, '..', 'public');

// Generate these widths for every image (withoutEnlargement = skip if already smaller)
const WIDTHS = [480, 800];
const QUALITY = 82;

async function getAllWebp(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const fullPath = join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...(await getAllWebp(fullPath)));
    } else if (entry.name.endsWith('.webp') && !/-\d+w\.webp$/.test(entry.name)) {
      files.push(fullPath);
    }
  }
  return files;
}

async function generateVariants(imgPath) {
  const meta = await sharp(imgPath).metadata();
  const base = imgPath.replace(/\.webp$/, '');
  const results = [];

  for (const w of WIDTHS) {
    if (meta.width <= w) continue; // skip if original is already smaller
    const outPath = `${base}-${w}w.webp`;
    await sharp(imgPath)
      .resize({ width: w, withoutEnlargement: true })
      .webp({ quality: QUALITY })
      .toFile(outPath);

    const sizeBefore = (await stat(imgPath)).size;
    const sizeAfter = (await stat(outPath)).size;
    const rel = imgPath.replace(PUBLIC_DIR, '').replace(/\\/g, '/');
    console.log(`  ${rel.replace('.webp', '')} → ${w}w: ${(sizeAfter / 1024).toFixed(0)} KB`);
    results.push(outPath);
  }
  return results;
}

async function main() {
  console.log('📐 Generating responsive variants...\n');
  const images = await getAllWebp(PUBLIC_DIR);
  console.log(`Found ${images.length} WebP images\n`);

  let total = 0;
  for (const img of images) {
    const variants = await generateVariants(img).catch(e => {
      console.error(`  ERROR ${img}: ${e.message}`);
      return [];
    });
    total += variants.length;
  }

  console.log(`\n✅ Generated ${total} responsive variants`);
}

main().catch(console.error);
