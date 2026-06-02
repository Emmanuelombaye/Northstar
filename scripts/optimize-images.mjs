/**
 * Compress PNG/JPEG assets and emit WebP variants for faster delivery.
 * Run: node scripts/optimize-images.mjs
 */
import { readdir, readFile, writeFile, unlink } from "node:fs/promises";
import { join, extname, basename } from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const ROOT = join(fileURLToPath(new URL(".", import.meta.url)), "..");
const IMAGES_DIR = join(ROOT, "public", "images");

/** Filename duplicates (spaces / typos) — safe to remove after optimization. */
const DUPLICATE_GLOB = [
  "Exceptional experience.png",
  "weight loss.png",
  "why northstarMD.png",
  "muscle recovery.png",
  "longitivity.png",
  "Muscle recovery treatments, designed around you.png",
];

function maxWidthFor(name) {
  const n = name.toLowerCase();
  if (n.includes("hero-landing")) return 1920;
  if (n.includes("step-0")) return 720;
  if (/hero|banner|designed|section-art|why-northstar|exceptional/.test(n)) return 1400;
  if (/weight-loss-card|longevity-card|muscle-recovery-card|muscle-recovery-designed/.test(n))
    return 1200;
  if (/panel-|product-box|journey|clinical|biomarker|result-|mockup/.test(n)) return 900;
  if (/sterling|vance|reyes/.test(n)) return 480;
  if (/patient-result/.test(n)) return 900;
  return 1200;
}

async function walkImages(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const full = join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...(await walkImages(full)));
    } else if (/\.(png|jpe?g)$/i.test(entry.name)) {
      files.push(full);
    }
  }
  return files;
}

async function optimizeFile(filePath) {
  const name = basename(filePath);
  const maxW = maxWidthFor(name);
  const input = await readFile(filePath);
  const meta = await sharp(input).metadata();
  const pipeline = sharp(input).rotate();
  const resized =
    meta.width && meta.width > maxW ? pipeline.resize(maxW, null, { withoutEnlargement: true }) : pipeline;

  const ext = extname(filePath).toLowerCase();
  const webpPath = filePath.replace(/\.(png|jpe?g)$/i, ".webp");

  const webpBuf = await resized.clone().webp({ quality: 82, effort: 4 }).toBuffer();
  await writeFile(webpPath, webpBuf);

  let optimizedOriginal;
  if (ext === ".png") {
    optimizedOriginal = await resized
      .clone()
      .png({ compressionLevel: 9, palette: meta.width > 900 })
      .toBuffer();
  } else {
    optimizedOriginal = await resized.clone().jpeg({ quality: 82, mozjpeg: true }).toBuffer();
  }
  await writeFile(filePath, optimizedOriginal);

  const before = input.length;
  const after = webpBuf.length;
  return { name, before, after: Math.min(after, optimizedOriginal.length), webp: webpBuf.length };
}

async function patchHtmlFiles() {
  const htmlFiles = (await readdir(ROOT)).filter((f) => f.endsWith(".html")).map((f) => join(ROOT, f));
  let replacements = 0;

  for (const file of htmlFiles) {
    let html = await readFile(file, "utf8");
    const original = html;

    html = html.replace(
      /src="(\/images\/[^"?]+\.(png|jpe?g))"(?! data-fallback)/gi,
      (_, src) => {
        replacements++;
        const webp = src.replace(/\.(png|jpe?g)$/i, ".webp");
        return `src="${webp}" data-fallback="${src}" decoding="async"`;
      },
    );

    if (html !== original) {
      await writeFile(file, html, "utf8");
    }
  }

  return replacements;
}

async function generateMobileHeroCrop() {
  const src = join(IMAGES_DIR, "hero-landing.png");
  try {
    const meta = await sharp(await readFile(src)).metadata();
    const left = Math.round(meta.width * 0.48);
    const width = meta.width - left;
    const height = Math.round(meta.height * 0.88);
    const extract = { left, top: 0, width, height };
    const base = sharp(await readFile(src)).rotate().extract(extract);
    await writeFile(
      join(IMAGES_DIR, "hero-mobile-couple.webp"),
      await base.clone().webp({ quality: 85, effort: 4 }).toBuffer(),
    );
    await writeFile(
      join(IMAGES_DIR, "hero-mobile-couple.png"),
      await base.clone().png({ compressionLevel: 9 }).toBuffer(),
    );
    console.log(`  hero-mobile-couple: cropped ${width}x${height} from landing banner`);
  } catch (err) {
    console.warn("  skip hero-mobile-couple:", err.message);
  }
}

async function main() {
  console.log("Optimizing images in", IMAGES_DIR);
  await generateMobileHeroCrop();
  const files = await walkImages(IMAGES_DIR);
  if (files.length === 0) {
    console.warn("No images found.");
    return;
  }

  let totalBefore = 0;
  let totalWebp = 0;

  for (const file of files) {
    if (DUPLICATE_GLOB.includes(basename(file))) continue;
    try {
      const r = await optimizeFile(file);
      totalBefore += r.before;
      totalWebp += r.webp;
      console.log(
        `  ${r.name}: ${(r.before / 1024).toFixed(0)}KB → webp ${(r.webp / 1024).toFixed(0)}KB`,
      );
    } catch (err) {
      console.warn(`  skip ${basename(file)}:`, err.message);
    }
  }

  for (const dup of DUPLICATE_GLOB) {
    try {
      await unlink(join(IMAGES_DIR, dup));
      console.log(`  removed duplicate ${dup}`);
    } catch {
      /* missing */
    }
  }

  const patched = await patchHtmlFiles();
  console.log(`\nDone. Source ~${(totalBefore / 1024 / 1024).toFixed(1)}MB → WebP ~${(totalWebp / 1024 / 1024).toFixed(1)}MB`);
  console.log(`Updated ${patched} image src references in HTML → .webp`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
