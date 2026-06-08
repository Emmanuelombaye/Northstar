/**
 * Ensures every product slug has primary + alt images on disk.
 * Fills gaps by copying from store/brand assets (no 404s on Vercel).
 * Run: node scripts/ensure-product-images.mjs
 */
import { existsSync, readFileSync } from "node:fs";
import { copyFile, mkdir, access, constants, writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, "..");
const PRODUCTS = join(ROOT, "public", "images", "products");
const STORE = join(ROOT, "public", "images", "store");

const SLUGS = [
  ...readFileSync(join(ROOT, "src", "store", "catalog.ts"), "utf8").matchAll(/slug: "([^"]+)"/g),
].map((m) => m[1]);

/** Verified Unsplash IDs (same pool as successful store downloads) */
const PHOTO_POOL = [
  "1559757148-5c350d0d3c56",
  "1584308666744-24d5c474f2ae",
  "1556228578-0d85b1a4d571",
  "1522338242992-e1a54906a8da",
  "1579684385127-1ef15d508118",
  "1541781774459-bb2af2f05b55",
  "1579154204601-01588f351e67",
  "1582719471384-894fbb16e074",
  "1576091160399-112ba8d25d1d",
  "1505751172876-fa1923c5c528",
  "1571019613454-1cb2f99b2d8b",
  "1573497019940-1c28c88b4f3e",
  "1544367567-0f2fcb009e0b",
  "1506126613408-eca07ce68773",
  "1556909114-f6e7ad7d3136",
  "1540555700478-4be289fbecef",
  "1576678927484-cc907957088c",
  "1550572017-edb79a6144e5",
  "1584515937757-fdc718c05d9b",
];

const STORE_FILES = [
  "vial-pharmacy", "skincare-cream", "hair-treatment", "mens-wellness", "sleep-rest",
  "hormone-lab", "peptide-kit", "delivery-kit", "sexual-wellness", "supplements",
  "weight-glp1", "fitness-man", "professional-woman", "yoga-recovery", "meditation",
  "vitamin-bottles", "spa-wellness", "joint-health", "brain-focus", "nad-infusion",
  "bpc-vial", "trt-kit", "melatonin-bottle", "mental-calm", "womens-wellness",
  "recovery-peptide", "alt-weight-01", "alt-longevity-01", "alt-longevity-02",
  "alt-recovery-01", "alt-recovery-02", "alt-mens-01", "alt-womens-01", "alt-hair-01",
  "alt-skin-01", "alt-sleep-01", "alt-mental-01", "alt-hormone-01", "alt-pharmacy-01",
  "alt-pharmacy-02",
];

function url(id) {
  return `https://images.unsplash.com/photo-${id}?w=600&h=600&fit=crop&q=82&auto=format`;
}

async function fileExists(p) {
  try {
    await access(p, constants.F_OK);
    return true;
  } catch {
    return false;
  }
}

function storeSource(name) {
  const jpg = join(STORE, `${name}.jpg`);
  const webp = join(STORE, `${name}.webp`);
  if (existsSync(jpg)) return jpg;
  if (existsSync(webp)) return webp;
  return null;
}

async function copyStoreToProduct(slug, suffix, storeName) {
  const src = storeSource(storeName);
  if (!src) return false;
  const ext = src.endsWith(".webp") ? ".webp" : ".jpg";
  const dest = join(PRODUCTS, `${slug}${suffix}${ext}`);
  await copyFile(src, dest);
  console.log(`Copied store/${storeName} → products/${slug}${suffix}${ext}`);
  return true;
}

async function downloadToProduct(slug, suffix, photoId) {
  const dest = join(PRODUCTS, `${slug}${suffix}.jpg`);
  try {
    const res = await fetch(url(photoId), { signal: AbortSignal.timeout(25000) });
    if (!res.ok) return false;
    const buf = Buffer.from(await res.arrayBuffer());
    await writeFile(dest, buf);
    console.log(`Downloaded products/${slug}${suffix}.jpg`);
    return true;
  } catch {
    return false;
  }
}

async function ensureFile(slug, suffix, index) {
  const jpg = join(PRODUCTS, `${slug}${suffix}.jpg`);
  const webp = join(PRODUCTS, `${slug}${suffix}.webp`);
  const hasJpg = await fileExists(jpg);
  const hasWebp = await fileExists(webp);

  if (!hasJpg) {
    const storeFile = STORE_FILES[(index * 2 + (suffix ? 1 : 0)) % STORE_FILES.length];
    if (await copyStoreToProduct(slug, suffix, storeFile)) {
      // copied jpg or webp — continue to ensure jpg exists
    } else {
      const photoId = PHOTO_POOL[index % PHOTO_POOL.length];
      await downloadToProduct(slug, suffix, photoId);
    }
  }

  // If we only have webp, copy to jpg (runtime uses jpg as primary src)
  if (!(await fileExists(jpg)) && (await fileExists(webp))) {
    await copyFile(webp, jpg);
    console.log(`Copied webp → products/${slug}${suffix}.jpg`);
  }

  // If we only have jpg, webp will be created by optimize-images.mjs
  if (suffix === "-alt" && !(await fileExists(jpg)) && !(await fileExists(webp))) {
    const primaryJpg = join(PRODUCTS, `${slug}.jpg`);
    const primaryWebp = join(PRODUCTS, `${slug}.webp`);
    if (await fileExists(primaryJpg)) {
      await copyFile(primaryJpg, jpg);
      console.log(`Copied primary → products/${slug}-alt.jpg`);
    } else if (await fileExists(primaryWebp)) {
      await copyFile(primaryWebp, webp);
      await copyFile(primaryWebp, jpg);
      console.log(`Copied primary → products/${slug}-alt (from webp)`);
    }
  }
}

/** Copy missing store images from siblings */
async function ensureStoreImages() {
  const copies = {
    "wellness-tea": "spa-wellness",
    "injection-pen": "weight-glp1",
    "medical-pills": "vitamin-bottles",
    "healthy-food": "supplements",
    "cream-jar": "skincare-cream",
    "serum-dropper": "skincare-cream",
    "hair-care": "hair-treatment",
    "cold-pack": "delivery-kit",
    "blood-test": "hormone-lab",
    "energy-drink": "brain-focus",
    "heart-health": "mens-wellness",
    "skin-glow": "skincare-cream",
    "packaging": "delivery-kit",
    "doctor-consult": "professional-woman",
    "lab-microscope": "hormone-lab",
    "pharmacy-shelf": "vial-pharmacy",
    "consultation": "professional-woman",
    "alt-weight-02": "alt-weight-01",
    "alt-mens-02": "alt-mens-01",
  };
  await mkdir(STORE, { recursive: true });
  for (const [target, source] of Object.entries(copies)) {
    const dest = join(STORE, `${target}.jpg`);
    if (await fileExists(dest)) continue;
    const src = storeSource(source);
    if (src) {
      await copyFile(src, dest);
      console.log(`Copied store/${source} → store/${target}.jpg`);
    }
  }
}

await mkdir(PRODUCTS, { recursive: true });
await ensureStoreImages();

let filled = 0;
for (let i = 0; i < SLUGS.length; i++) {
  const slug = SLUGS[i];
  await ensureFile(slug, "", i);
  await ensureFile(slug, "-alt", i);
  filled += 2;
}

console.log(`Ensured images for ${SLUGS.length} products (${filled} slots checked).`);
