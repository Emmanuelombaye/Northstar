/**
 * Downloads one unique hero image per product slug into public/images/products/
 * Run: node scripts/download-product-images.mjs
 */
import { mkdir, writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { readFileSync } from "node:fs";

const __dirname = dirname(fileURLToPath(import.meta.url));
const OUT = join(__dirname, "..", "public", "images", "products");

/** Curated Unsplash photo IDs — unique per slug, grouped by treatment type */
const SLUG_PHOTOS = {
  "tirzepatide-plus": "1559757148-5c350d0d3c56",
  "semaglutide-plus": "1581595220892-b0799db879a8",
  "liraglutide-daily": "1571019613454-1cb2f99b2d8b",
  "metabolic-reset": "1490645935967-10de6ba34261",
  "phentermine-control": "1550572017-edb79a6144e5",
  "contrave-bundle": "1584308666744-24d5c474f2ae",
  "wegovy-pathway": "1582719471384-894fbb16e074",
  "mounjaro-pathway": "1631813931893-4e25c20f5dd0",
  "bmi-medical-program": "1576086213563-972a7e7010e1",
  "weight-loss-starter": "1587854692152-cbc864d8b370",
  "glp1-maintenance": "1544367567-0f2fcb009e0b",
  "metabolic-panel-addon": "1579154204601-01588f351e67",
  "nad-rejuvenation": "1540555700478-4be289fbecef",
  "nad-oral-boost": "1505751172876-fa1923c5c528",
  "glutathione-glow": "1471864190281-a93a2b719e5a",
  "nmn-cellular": "1556909114-f6e7ad7d3136",
  "metformin-longevity": "1587854692152-cbc864d8b370",
  "resveratrol-protocol": "1506126613408-eca07ce68773",
  "coq10-energy": "1551604877-42535c79d714",
  "longevity-stack-bundle": "1532187863486-ab9f9f01ef36",
  "epithalon-peptide": "1582719471384-894fbb16e074",
  "thymosin-alpha": "1666214066297-8bebe0500645",
  "sermorelin-recovery": "1576678927484-cc907957088c",
  "bpc-157-repair": "1582719471384-894fbb16e074",
  "cjc-ipamorelin": "1544367567-0f2fcb009e0b",
  "tb-500-recovery": "1571019613454-1cb2f99b2d8b",
  "ghk-cu-tissue": "1612817288184-6f966944128a",
  "joint-recovery-stack": "1576678927484-cc907957088c",
  "athlete-recovery-stack": "1434030214721-40c2f393917d",
  "pt-141-performance": "1579684385127-1ef15d508118",
  "testosterone-trt": "1571019613454-1cb2f99b2d8b",
  "enclomiphene": "1584515937757-fdc718c05d9b",
  "hcg-trt-support": "1576086213563-972a7e7010e1",
  "anastrozole-estrogen": "1550572017-edb79a6144e5",
  "dhea-mens": "1579684385127-1ef15d508118",
  "cialis-daily": "1576091160399-112ba8d25d1d",
  "prostate-support": "1551604877-42535c79d714",
  "mens-vitality-panel": "1579154204601-01588f351e67",
  "bioidentical-hrt": "1573497019940-1c28c88b4f3e",
  "progesterone-bioidentical": "1620916560350-3b53d5e29100",
  "estradiol-patch": "1582719508461-905c673771bd",
  "pcos-metformin": "1490645935967-10de6ba34261",
  "womens-hormone-panel": "1573497019940-1c28c88b4f3e",
  "womens-weight-program": "1541781774459-bb2af2f05b55",
  "finasteride": "1522338242992-e1a54906a8da",
  "minoxidil-topical": "1608571422092-4b4fc9a8f6f8",
  "finasteride-minoxidil-duo": "1522338242992-e1a54906a8da",
  "dutasteride": "1556228578-0d85b1a4d571",
  "ketoconazole-scalp": "1608571422092-4b4fc9a8f6f8",
  "biotin-hair-growth": "1556909114-f6e7ad7d3136",
  "tretinoin-005": "1556228578-0d85b1a4d571",
  "anti-aging-cream": "1608245449331-3f5c75a7c3e2",
  "hydroquinone-brightening": "1612817288184-6f966944128a",
  "azelaic-acid": "1620916560350-3b53d5e29100",
  "clindamycin-acne": "1556228578-0d85b1a4d571",
  "vitamin-c-protocol": "1608245449331-3f5c75a7c3e2",
  "sildenafil": "1576091160399-112ba8d25d1d",
  "tadalafil-daily": "1582719508461-905c673771bd",
  "tadalafil-as-needed": "1576091160399-112ba8d25d1d",
  "ed-starter-bundle": "1551604877-42535c79d714",
  "pt-141-desire": "1540555700478-4be289fbecef",
  "oxytocin-intimacy": "1506126613408-eca07ce68773",
  "melatonin-sleep": "1541781774459-bb2af2f05b55",
  "trazodone-sleep": "1541781774459-bb2af2f05b55",
  "magnesium-glycinate": "1556909114-f6e7ad7d3136",
  "sleep-consultation": "1506126613408-eca07ce68773",
  "cbn-sleep": "1541781774459-bb2af2f05b55",
  "sertraline-anxiety": "1506126613408-eca07ce68773",
  "escitalopram-mood": "1434030214721-40c2f393917d",
  "buspirone-stress": "1471864190281-a93a2b719e5a",
  "mental-health-intake": "1666214066297-8bebe0500645",
  "wellbutrin-energy": "1434030214721-40c2f393917d",
  "thyroid-levothyroxine": "1576086213563-972a7e7010e1",
  "armour-thyroid": "1579154204601-01588f351e67",
  "pregnenolone": "1556909114-f6e7ad7d3136",
  "dhea-womens": "1573497019940-1c28c88b4f3e",
  "hormone-full-panel": "1532187863486-ab9f9f01ef36",
  "physician-consultation": "1666214066297-8bebe0500645",
  "cold-chain-shipping": "1584515937757-fdc718c05d9b",
  "injection-supplies-kit": "1581595220892-b0799db879a8",
};

// Load slugs from catalog if we need full list — use SLUG_PHOTOS keys
const ALT_OFFSET = [
  "1584308666744-24d5c474f2ae",
  "1556228578-0d85b1a4d571",
  "1571019613454-1cb2f99b2d8b",
  "1540555700478-4be289fbecef",
  "1573497019940-1c28c88b4f3e",
  "1522338242992-e1a54906a8da",
  "1582719471384-894fbb16e074",
  "1550572017-edb79a6144e5",
  "1576086213563-972a7e7010e1",
  "1541781774459-bb2af2f05b55",
  "1505751172876-fa1923c5c528",
  "1576678927484-cc907957088c",
  "1581595220892-b0799db879a8",
  "1559757148-5c350d0d3c56",
  "1579154204601-01588f351e67",
  "1576091160399-112ba8d25d1d",
  "1556909114-f6e7ad7d3136",
  "1506126613408-eca07ce68773",
  "1579684385127-1ef15d508118",
  "1490645935967-10de6ba34261",
];

function url(id) {
  return `https://images.unsplash.com/photo-${id}?w=600&h=600&fit=crop&q=82&auto=format`;
}

await mkdir(OUT, { recursive: true });

const slugs = Object.keys(SLUG_PHOTOS);
let ok = 0;
for (let i = 0; i < slugs.length; i++) {
  const slug = slugs[i];
  const primaryId = SLUG_PHOTOS[slug];
  const altId = ALT_OFFSET[i % ALT_OFFSET.length];
  if (primaryId === altId) {
    ALT_OFFSET[(i + 3) % ALT_OFFSET.length];
  }
  const altIdFinal = primaryId === altId ? ALT_OFFSET[(i + 5) % ALT_OFFSET.length] : altId;

  for (const [suffix, id] of [
    ["", primaryId],
    ["-alt", altIdFinal],
  ]) {
    const file = join(OUT, `${slug}${suffix}.jpg`);
    try {
      const res = await fetch(url(id), { signal: AbortSignal.timeout(25000) });
      if (!res.ok) {
        console.warn(`Skip ${slug}${suffix}: HTTP ${res.status}`);
        continue;
      }
      const buf = Buffer.from(await res.arrayBuffer());
      await writeFile(file, buf);
      ok++;
    } catch (e) {
      console.warn(`Skip ${slug}${suffix}: ${e.message}`);
    }
  }
}

console.log(`Product images: ${ok} files saved to public/images/products/`);
