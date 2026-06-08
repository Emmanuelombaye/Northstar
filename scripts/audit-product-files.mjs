import { existsSync, readFileSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const PRODUCTS = join(ROOT, "public", "images", "products");
const catalog = readFileSync(join(ROOT, "src", "store", "catalog.ts"), "utf8");
const slugs = [...catalog.matchAll(/slug: "([^"]+)"/g)].map((m) => m[1]);

const missing = [];
for (const slug of slugs) {
  for (const suffix of ["", "-alt"]) {
    for (const ext of ["webp", "jpg"]) {
      const f = join(PRODUCTS, `${slug}${suffix}.${ext}`);
      if (!existsSync(f)) missing.push(`${slug}${suffix}.${ext}`);
    }
  }
}

console.log(`Products: ${slugs.length}, missing files: ${missing.length}`);
if (missing.length) console.log(missing.join("\n"));
