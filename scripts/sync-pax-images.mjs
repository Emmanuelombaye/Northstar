/**
 * Copy Pax marketing WebP assets into North Star public/images.
 * Safe to re-run; skips missing source files.
 */
import { copyFileSync, existsSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const paxDir = join(root, "..", "pax", "public", "images");
const destDir = join(root, "public", "images");

const FILES = [
  "hero-longevity.webp",
  "miami-active.webp",
  "hero-miami-cycle.webp",
  "hero-miami-yoga.webp",
  "hero-miami-water.webp",
  "clinical-consultation.webp",
  "home-scroll-banner.webp",
  "lifestyle-movement.webp",
  "lifestyle-nourishment.webp",
  "lifestyle-active.webp",
  "lifestyle-balance.webp",
  "glp1-treatment.webp",
  "nad-treatment.webp",
  "sermorelin-treatment.webp",
  "threat-cardio.webp",
  "threat-metabolic.webp",
  "threat-neuro.webp",
  "threat-cancer.webp",
  "milestone-2022.webp",
  "milestone-2023.webp",
  "milestone-2024.webp",
  "milestone-2025.webp",
  "sermorelin-recovery.webp",
  "wellness-therapy.webp",
  "genomics_lab_classic.webp",
  "metabolic_cellular_classic.webp",
  "sleep_brain_classic.webp",
  "coastal_running_classic.webp",
  "nad-longevity.webp",
];

mkdirSync(destDir, { recursive: true });

let copied = 0;
let skipped = 0;

for (const file of FILES) {
  const src = join(paxDir, file);
  const dest = join(destDir, file);
  if (!existsSync(src)) {
    skipped++;
    continue;
  }
  copyFileSync(src, dest);
  copied++;
}

console.log(`sync-pax-images: copied ${copied}, skipped ${skipped} (source missing)`);
