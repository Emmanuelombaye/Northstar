/**
 * Downloads pharmacy-only store assets (Unsplash) for banners & fallbacks.
 * Run: node scripts/download-store-images.mjs
 */
import { mkdir, writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { PHARMACY_PHOTOS, photoUrl } from "./pharmacy-photo-pool.mjs";

const __dirname = dirname(fileURLToPath(import.meta.url));
const OUT = join(__dirname, "..", "public", "images", "store");

const IMAGES = [
  { file: "vial-pharmacy.jpg", id: PHARMACY_PHOTOS[0] },
  { file: "skincare-cream.jpg", id: PHARMACY_PHOTOS[1] },
  { file: "hair-treatment.jpg", id: PHARMACY_PHOTOS[2] },
  { file: "hormone-lab.jpg", id: PHARMACY_PHOTOS[3] },
  { file: "peptide-kit.jpg", id: PHARMACY_PHOTOS[4] },
  { file: "sexual-wellness.jpg", id: PHARMACY_PHOTOS[5] },
  { file: "supplements.jpg", id: PHARMACY_PHOTOS[6] },
  { file: "weight-glp1.jpg", id: PHARMACY_PHOTOS[7] },
  { file: "medical-pills.jpg", id: PHARMACY_PHOTOS[8] },
  { file: "pharmacy-shelf.jpg", id: PHARMACY_PHOTOS[9] },
  { file: "lab-microscope.jpg", id: PHARMACY_PHOTOS[10] },
  { file: "vitamin-bottles.jpg", id: PHARMACY_PHOTOS[11] },
  { file: "cream-jar.jpg", id: PHARMACY_PHOTOS[12] },
  { file: "serum-dropper.jpg", id: PHARMACY_PHOTOS[13] },
  { file: "hair-care.jpg", id: PHARMACY_PHOTOS[14] },
  { file: "injection-pen.jpg", id: PHARMACY_PHOTOS[15] },
  { file: "cold-pack.jpg", id: PHARMACY_PHOTOS[16] },
  { file: "blood-test.jpg", id: PHARMACY_PHOTOS[17] },
  { file: "packaging.jpg", id: PHARMACY_PHOTOS[18] },
  { file: "melatonin-bottle.jpg", id: PHARMACY_PHOTOS[19] },
  { file: "nad-infusion.jpg", id: PHARMACY_PHOTOS[20] },
  { file: "recovery-peptide.jpg", id: PHARMACY_PHOTOS[21] },
  { file: "consultation.jpg", id: PHARMACY_PHOTOS[22] },
  { file: "delivery-kit.jpg", id: PHARMACY_PHOTOS[23] },
  { file: "bpc-vial.jpg", id: PHARMACY_PHOTOS[4] },
  { file: "trt-kit.jpg", id: PHARMACY_PHOTOS[0] },
  { file: "sleep-rest.jpg", id: PHARMACY_PHOTOS[19] },
  { file: "mental-calm.jpg", id: PHARMACY_PHOTOS[8] },
  { file: "womens-wellness.jpg", id: PHARMACY_PHOTOS[12] },
  { file: "alt-weight-01.jpg", id: PHARMACY_PHOTOS[7] },
  { file: "alt-weight-02.jpg", id: PHARMACY_PHOTOS[15] },
  { file: "alt-longevity-01.jpg", id: PHARMACY_PHOTOS[20] },
  { file: "alt-longevity-02.jpg", id: PHARMACY_PHOTOS[6] },
  { file: "alt-recovery-01.jpg", id: PHARMACY_PHOTOS[21] },
  { file: "alt-recovery-02.jpg", id: PHARMACY_PHOTOS[4] },
  { file: "alt-mens-01.jpg", id: PHARMACY_PHOTOS[0] },
  { file: "alt-mens-02.jpg", id: PHARMACY_PHOTOS[17] },
  { file: "alt-womens-01.jpg", id: PHARMACY_PHOTOS[12] },
  { file: "alt-hair-01.jpg", id: PHARMACY_PHOTOS[2] },
  { file: "alt-skin-01.jpg", id: PHARMACY_PHOTOS[1] },
  { file: "alt-sleep-01.jpg", id: PHARMACY_PHOTOS[19] },
  { file: "alt-mental-01.jpg", id: PHARMACY_PHOTOS[8] },
  { file: "alt-hormone-01.jpg", id: PHARMACY_PHOTOS[3] },
  { file: "alt-pharmacy-01.jpg", id: PHARMACY_PHOTOS[9] },
  { file: "alt-pharmacy-02.jpg", id: PHARMACY_PHOTOS[23] },
];

await mkdir(OUT, { recursive: true });

let ok = 0;
for (const { file, id } of IMAGES) {
  try {
    const res = await fetch(photoUrl(id, 900, 600), { signal: AbortSignal.timeout(25000) });
    if (!res.ok) {
      console.warn(`Skip ${file}: HTTP ${res.status}`);
      continue;
    }
    await writeFile(join(OUT, file), Buffer.from(await res.arrayBuffer()));
    ok++;
  } catch (e) {
    console.warn(`Skip ${file}: ${e.message}`);
  }
}

console.log(`Store images: ${ok}/${IMAGES.length} pharmacy files saved to public/images/store/`);
