/**
 * Lists image paths referenced in src/ that are missing from public/
 * Run: node scripts/audit-images.mjs
 */
import { existsSync, readFileSync, readdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");

function walk(dir, out = []) {
  for (const ent of readdirSync(dir, { withFileTypes: true })) {
    const p = join(dir, ent.name);
    if (ent.isDirectory() && ent.name !== "node_modules" && ent.name !== "dist") walk(p, out);
    else if (/\.(tsx?|jsx?|css|html|ts)$/.test(ent.name)) out.push(p);
  }
  return out;
}

const paths = new Set();
for (const file of walk(join(ROOT, "src")).concat(walk(join(ROOT, "css")))) {
  const text = readFileSync(file, "utf8");
  for (const m of text.matchAll(/["'`](\/images\/[^"'`?\s]+)["'`]/g)) paths.add(m[1]);
}

function existsPublic(webPath) {
  const base = join(ROOT, "public", webPath.replace(/^\//, ""));
  if (existsSync(base)) return true;
  if (base.endsWith(".webp")) return existsSync(base.replace(".webp", ".jpg"));
  if (base.endsWith(".png")) return existsSync(base.replace(".png", ".webp"));
  if (base.endsWith(".jpg")) return existsSync(base.replace(".jpg", ".webp"));
  return false;
}

const missing = [...paths].filter((p) => !existsPublic(p)).sort();
console.log(`Referenced: ${paths.size}, Missing: ${missing.length}`);
for (const p of missing) console.log(p);
