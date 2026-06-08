/**
 * Fails the build if any product slug is missing jpg (required) or webp (optional).
 * Run: node scripts/verify-images.mjs
 */
import { existsSync, readFileSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const PRODUCTS = join(ROOT, "public", "images", "products");
const catalog = readFileSync(join(ROOT, "src", "store", "catalog.ts"), "utf8");
const slugs = [...catalog.matchAll(/slug: "([^"]+)"/g)].map((m) => m[1]);

const missingJpg = [];
const missingWebp = [];

for (const slug of slugs) {
  for (const suffix of ["", "-alt"]) {
    const jpg = join(PRODUCTS, `${slug}${suffix}.jpg`);
    const webp = join(PRODUCTS, `${slug}${suffix}.webp`);
    if (!existsSync(jpg)) missingJpg.push(`${slug}${suffix}.jpg`);
    if (!existsSync(webp)) missingWebp.push(`${slug}${suffix}.webp`);
  }
}

if (missingJpg.length) {
  console.error(`FATAL: ${missingJpg.length} required JPG files missing:`);
  missingJpg.slice(0, 20).forEach((f) => console.error(`  - ${f}`));
  process.exit(1);
}

if (missingWebp.length) {
  console.warn(`WARN: ${missingWebp.length} webp files missing (JPG fallbacks will be used)`);
}

console.log(`Verified ${slugs.length} products — all ${slugs.length * 2} primary+alt JPG files present.`);
