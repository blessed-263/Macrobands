/**
 * Resize (fit inside maxDim), encode WebP. Writes via temp file when optimizing in place.
 * Run from repo root: npm run optimize-images
 */
import sharp from 'sharp';
import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, '..');
const DIR = path.join(ROOT, 'public', 'images');

/** @type {{ file: string; maxDim: number; tsKey?: string }[]} */
const FILES = [
  { file: 'hero-logistics.webp', maxDim: 1920, tsKey: 'heroLogistics' },
  { file: 'philosophy-architecture.webp', maxDim: 1600, tsKey: 'philosophyArchitecture' },
  { file: 'services-banner.webp', maxDim: 1600, tsKey: 'servicesBanner' },
  { file: 'services-mid.webp', maxDim: 1600, tsKey: 'servicesMid' },
  { file: 'contact-office.webp', maxDim: 1920 },
  { file: 'container-terminal.webp', maxDim: 1600 },
  { file: 'home-customs-brokering.webp', maxDim: 1400 },
  { file: 'home-road-freight.webp', maxDim: 1400 },
  { file: 'home-supply-chain.webp', maxDim: 1400 },
  { file: 'service-customs-clearing.webp', maxDim: 1400 },
  { file: 'service-road-freight.webp', maxDim: 1400 },
  { file: 'service-expedited.webp', maxDim: 1400 },
  { file: 'expertise-mining.webp', maxDim: 1200 },
  { file: 'expertise-agriculture.webp', maxDim: 1200 },
  { file: 'expertise-fmcg.webp', maxDim: 1200 },
  { file: 'expertise-energy.webp', maxDim: 1200 },
];

async function main() {
  const intrinsics = {};

  for (const { file, maxDim, tsKey } of FILES) {
    const from = path.join(DIR, file);
    const tmp = path.join(DIR, `${file}.opt.tmp`);

    try {
      await fs.access(from);
    } catch {
      console.warn(`Skip (missing): ${file}`);
      continue;
    }

    const meta = await sharp(from).metadata();
    const maxSide = Math.max(meta.width ?? 0, meta.height ?? 0);

    let chain = sharp(from).rotate();
    if (maxSide > maxDim) {
      chain = chain.resize(maxDim, maxDim, {
        fit: 'inside',
        withoutEnlargement: true,
      });
    }

    const info = await chain
      .webp({
        quality: 82,
        effort: 6,
        smartSubsample: true,
      })
      .toFile(tmp);

    await fs.unlink(from);
    await fs.rename(tmp, from);

    const kb = (info.size / 1024).toFixed(1);
    console.log(`${file}  ${info.width}×${info.height}  ${kb} KB`);

    if (tsKey) {
      intrinsics[tsKey] = { width: info.width, height: info.height };
    }
  }

  console.log('\nintrinsicDimensions snapshot:');
  console.log(JSON.stringify(intrinsics, null, 2));
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
