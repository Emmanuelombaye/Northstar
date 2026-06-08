/**
 * Verifies every product's resolved image + imageAlt paths exist on disk.
 * Run: node scripts/audit-runtime-images.mjs
 */
import { existsSync, readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const catalog = readFileSync(join(ROOT, "src", "store", "catalog.ts"), "utf8");
const visuals = readFileSync(join(ROOT, "src", "store", "productVisuals.ts"), "utf8");

const slugs = [...catalog.matchAll(/slug: "([^"]+)"/g)].map((m) => m[1]);

const HAS = new Set(
  [...visuals.matchAll(/HAS_PRODUCT_IMAGE = new Set\(\[([\s\S]*?)\]\)/)[0][1].matchAll(/"([^"]+)"/g)].map(
    (m) => m[1],
  ),
);

const BRAND = new Set(
  [...visuals.matchAll(/BRAND_HERO[\s\S]*?\{([\s\S]*?)\};/)[0][1].matchAll(/"([^"]+)":/g)].map((m) => m[1]),
);

function exists(webPath) {
  const base = join(ROOT, "public", webPath.replace(/^\//, ""));
  if (existsSync(base)) return true;
  if (webPath.endsWith(".webp")) return existsSync(base.replace(".webp", ".jpg"));
  if (webPath.endsWith(".png")) return existsSync(base.replace(".png", ".webp"));
  return false;
}

/** Parse FALLBACK + BRAND visual lines for image paths */
function pathsForSlug(slug) {
  const out = [];
  const blockRe = new RegExp(`"${slug}":\\s*v\\([^)]+\\)`, "s");
  const block = visuals.match(blockRe)?.[0] ?? "";
  for (const m of block.matchAll(/\/images\/[^),\s"]+/g)) out.push(m[0]);
  if (BRAND.has(slug) || HAS.has(slug)) {
    out.push(`/images/products/${slug}.webp`, `/images/products/${slug}-alt.webp`);
  }
  return [...new Set(out)];
}

let missing = 0;
for (const slug of slugs) {
  for (const p of pathsForSlug(slug)) {
    if (!exists(p)) {
      console.log(`MISSING [${slug}]: ${p}`);
      missing++;
    }
  }
}
console.log(missing ? `\n${missing} missing path(s)` : "All runtime product image paths exist.");
process.exit(missing ? 1 : 0);
