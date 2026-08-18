/**
 * Converts PNG drafts from `.tmp-img-preview/` into the `.avif` assets used by
 * `src/components/ns/NsHowItWorks.tsx`.
 *
 * Usage:
 *   node scripts/replace-hiw-avif-from-preview.mjs
 */
import fs from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const PREVIEW_DIR = path.join(process.cwd(), ".tmp-img-preview");
const HIW_DIR = path.join(process.cwd(), "public/images/ns/hiw");

// src (png) -> dest (avif) mapping
const JOBS = [
  { src: "hiw-home-delivery.png", dest: "home-delivery.avif", width: 1200 },
  { src: "hiw-Receive-your-medication_3.png", dest: "Receive-your-medication_3.avif", width: 1200 },
  {
    src: "hiw-quality-sourcing-verified-compounded-medications-yucca-health.png",
    dest: "quality-sourcing-verified-compounded-medications-yucca-health.avif",
    width: 1400,
  },
  {
    src: "hiw-glp-1-weight-loss-progress-chart-30-lbs-yucca-health.png",
    dest: "glp-1-weight-loss-progress-chart-30-lbs-yucca-health.avif",
    width: 1200,
  },
];

async function exists(p) {
  try {
    await fs.access(p);
    return true;
  } catch {
    return false;
  }
}

async function convertOne({ src, dest, width }) {
  const srcPath = path.join(PREVIEW_DIR, src);
  const destPath = path.join(HIW_DIR, dest);

  if (!(await exists(srcPath))) {
    console.warn(`skip (missing preview): ${src}`);
    return;
  }

  await sharp(srcPath)
    .rotate()
    .resize({ width, withoutEnlargement: true })
    .avif({ quality: 66 })
    .toFile(destPath);

  const stat = await fs.stat(destPath);
  console.log(`ok: ${dest} (${Math.round(stat.size / 1024)}KB)`);
}

async function main() {
  // Ensure output directory exists
  await fs.mkdir(HIW_DIR, { recursive: true });

  console.log("Replacing HIW AVIF assets from .tmp-img-preview");
  for (const job of JOBS) {
    // sequential to keep memory down
    await convertOne(job);
  }
  console.log("Done.");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});

