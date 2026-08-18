/**
 * Converts freshly generated HIW PNGs (from the model) into the `.avif` assets
 * used by `src/components/nexa-shell/HersHowItWorks.tsx`.
 *
 * Usage:
 *   node scripts/replace-hiw-avif-from-generated.mjs
 */
import fs from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const HIW_DIR = path.join(process.cwd(), "public/images/yucca-clone/hiw");

// Absolute paths returned by the image generator tool.
const JOBS = [
  {
    src: "C:/Users/Administrator/.cursor/projects/i-ceo-northstar/assets/gen-hiw-home-delivery.png",
    dest: "home-delivery.avif",
    width: 1200,
  },
  {
    src: "C:/Users/Administrator/.cursor/projects/i-ceo-northstar/assets/gen-hiw-cold-chain.png",
    dest: "Receive-your-medication_3.avif",
    width: 1200,
  },
  {
    src: "C:/Users/Administrator/.cursor/projects/i-ceo-northstar/assets/gen-hiw-pharmacy-stadium.png",
    dest: "quality-sourcing-verified-compounded-medications-yucca-health.avif",
    width: 1600,
  },
  {
    src: "C:/Users/Administrator/.cursor/projects/i-ceo-northstar/assets/gen-hiw-progress-chart.png",
    dest: "glp-1-weight-loss-progress-chart-30-lbs-yucca-health.avif",
    width: 1400,
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
  const destPath = path.join(HIW_DIR, dest);
  if (!(await exists(src))) {
    console.warn(`skip (missing source): ${src}`);
    return;
  }

  await sharp(src)
    .rotate()
    .resize({ width, withoutEnlargement: true })
    .avif({ quality: 66 })
    .toFile(destPath);

  const stat = await fs.stat(destPath);
  console.log(`ok: ${dest} (${Math.round(stat.size / 1024)}KB)`);
}

async function main() {
  await fs.mkdir(HIW_DIR, { recursive: true });
  console.log("Replacing HIW AVIF assets from generated PNGs");
  for (const job of JOBS) {
    await convertOne(job);
  }
  console.log("Done.");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});

