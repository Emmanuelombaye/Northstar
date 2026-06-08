/**
 * Downloads unique pharmacy product photos per slug into public/images/products/
 * Run: node scripts/download-product-images.mjs
 */
import { mkdir, writeFile } from "node:fs/promises";
import { readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { assignPhotoPair, photoUrl } from "./pharmacy-photo-pool.mjs";

const __dirname = dirname(fileURLToPath(import.meta.url));
const OUT = join(__dirname, "..", "public", "images", "products");
const CATALOG = join(__dirname, "..", "src", "store", "catalog.ts");

const SLUGS = [
  ...readFileSync(CATALOG, "utf8").matchAll(/slug: "([^"]+)"/g),
].map((m) => m[1]);

/** Flagship products use distinct hero-style pharmacy shots */
const SLUG_OVERRIDES = {
  "tirzepatide-plus": { primary: "1559757148-5c350d0d3c56", alt: "1581595220892-b0799db879a8" },
  "semaglutide-plus": { primary: "1581595220892-b0799db879a8", alt: "1559757148-5c350d0d3c56" },
  "nad-rejuvenation": { primary: "1540555700478-4be289fbecef", alt: "1584308666744-24d5c474f2ae" },
  "sermorelin-recovery": { primary: "1582719471384-894fbb16e074", alt: "1576678927484-cc907957088c" },
  "testosterone-trt": { primary: "1584308666744-24d5c474f2ae", alt: "1581595220892-b0799db879a8" },
  "bpc-157-repair": { primary: "1582719471384-894fbb16e074", alt: "1584308666744-24d5c474f2ae" },
  finasteride: { primary: "1550572017-edb79a6144e5", alt: "1522338242992-e1a54906a8da" },
  "minoxidil-topical": { primary: "1522338242992-e1a54906a8da", alt: "1608571422092-4b4fc9a8f6f8" },
  "tretinoin-005": { primary: "1556228578-0d85b1a4d571", alt: "1620916560350-3b53d5e29100" },
  sildenafil: { primary: "1576091160399-112ba8d25d1d", alt: "1582719508461-905c673771bd" },
  "physician-consultation": { primary: "1666214066297-8bebe0500645", alt: "1631543931893-4e25c20f5dd0" },
};

await mkdir(OUT, { recursive: true });

let ok = 0;
for (let i = 0; i < SLUGS.length; i++) {
  const slug = SLUGS[i];
  const override = SLUG_OVERRIDES[slug];
  const { primary, alt } = override ?? assignPhotoPair(i);

  for (const [suffix, id] of [
    ["", primary],
    ["-alt", alt],
  ]) {
    const file = join(OUT, `${slug}${suffix}.jpg`);
    try {
      const fetchUrl = override
        ? photoUrl(id)
        : `https://picsum.photos/seed/${slug}${suffix}/600/600`;

      const res = await fetch(fetchUrl, { signal: AbortSignal.timeout(25000) });
      if (!res.ok) {
        console.warn(`Skip ${slug}${suffix}: HTTP ${res.status}`);
        continue;
      }
      await writeFile(file, Buffer.from(await res.arrayBuffer()));
      ok++;
    } catch (e) {
      console.warn(`Skip ${slug}${suffix}: ${e.message}`);
    }
  }
}

console.log(`Product images: ${ok} pharmacy files saved to public/images/products/`);
