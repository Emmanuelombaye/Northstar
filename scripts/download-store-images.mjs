/**
 * Downloads royalty-free pharmacy / wellness photos (Unsplash) for the store catalog.
 * Run: node scripts/download-store-images.mjs
 */
import { mkdir, writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const OUT = join(__dirname, "..", "public", "images", "store");

/** Unsplash photo IDs — stable, royalty-free for commercial use per Unsplash license */
const PHOTOS = {
  vialPharmacy: "1584308666744-24d5c474f2ae",
  skincareCream: "1556228578-0d85b1a4d571",
  hairTreatment: "1522338242992-e1a54906a8da",
  mensWellness: "1579684385127-1ef15d508118",
  sleepRest: "1541781774459-bb2af2f05b55",
  hormoneLab: "1579154204601-01588f351e67",
  peptideKit: "1582719471384-894fbb16e074",
  deliveryKit: "1584308666744-24d5c474f2ae",
  sexualWellness: "1576091160399-112ba8d25d1d",
  supplements: "1505751172876-fa1923c5c528",
  weightGlp1: "1559757148-5c350d0d3c56",
  medicalPills: "1550572017-edb79a6144e5",
  pharmacyShelf: "1631543931893-4e25c20f5dd0",
  labMicroscope: "1532187863486-ab9f9f01ef36",
  wellnessTea: "1471864190281-a93a2b719e5a",
  fitnessMan: "1571019613454-1cb2f99b2d8b",
  professionalWoman: "1573497019940-1c28c88b4f3e",
  yogaRecovery: "1544367567-0f2fcb009e0b",
  healthyFood: "1490645935967-10de6ba34261",
  meditation: "1506126613408-eca07ce68773",
  doctorConsult: "1666214066297-8bebe0500645",
  vitaminBottles: "1556909114-f6e7ad7d3136",
  creamJar: "1620916560350-3b53d5e29100",
  serumDropper: "1608245449331-3f5c75a7c3e2",
  hairCare: "1608571422092-4b4fc9a8f6f8",
  injectionPen: "1581595220892-b0799db879a8",
  coldPack: "1584515937757-fdc718c05d9b",
  bloodTest: "1576086213563-972a7e7010e1",
  spaWellness: "1540555700478-4be289fbecef",
  energyDrink: "1434030214721-40c2f393917d",
  jointHealth: "1576678927484-cc907957088c",
  brainFocus: "1505751172876-fa1923c5c528",
  heartHealth: "1551604877-42535c79d714",
  skinGlow: "1612817288184-6f966944128a",
  packaging: "1582719508461-905c673771bd",
};

function url(id, w = 900) {
  return `https://images.unsplash.com/photo-${id}?w=${w}&q=85&auto=format&fit=crop`;
}

const IMAGES = [
  { file: "vial-pharmacy.jpg", id: PHOTOS.vialPharmacy },
  { file: "skincare-cream.jpg", id: PHOTOS.skincareCream },
  { file: "hair-treatment.jpg", id: PHOTOS.hairTreatment },
  { file: "mens-wellness.jpg", id: PHOTOS.mensWellness },
  { file: "sleep-rest.jpg", id: PHOTOS.sleepRest },
  { file: "hormone-lab.jpg", id: PHOTOS.hormoneLab },
  { file: "peptide-kit.jpg", id: PHOTOS.peptideKit },
  { file: "delivery-kit.jpg", id: PHOTOS.deliveryKit },
  { file: "sexual-wellness.jpg", id: PHOTOS.sexualWellness },
  { file: "supplements.jpg", id: PHOTOS.supplements },
  { file: "weight-glp1.jpg", id: PHOTOS.weightGlp1 },
  { file: "medical-pills.jpg", id: PHOTOS.medicalPills },
  { file: "pharmacy-shelf.jpg", id: PHOTOS.pharmacyShelf },
  { file: "lab-microscope.jpg", id: PHOTOS.labMicroscope },
  { file: "wellness-tea.jpg", id: PHOTOS.wellnessTea },
  { file: "fitness-man.jpg", id: PHOTOS.fitnessMan },
  { file: "professional-woman.jpg", id: PHOTOS.professionalWoman },
  { file: "yoga-recovery.jpg", id: PHOTOS.yogaRecovery },
  { file: "healthy-food.jpg", id: PHOTOS.healthyFood },
  { file: "meditation.jpg", id: PHOTOS.meditation },
  { file: "doctor-consult.jpg", id: PHOTOS.doctorConsult },
  { file: "vitamin-bottles.jpg", id: PHOTOS.vitaminBottles },
  { file: "cream-jar.jpg", id: PHOTOS.creamJar },
  { file: "serum-dropper.jpg", id: PHOTOS.serumDropper },
  { file: "hair-care.jpg", id: PHOTOS.hairCare },
  { file: "injection-pen.jpg", id: PHOTOS.injectionPen },
  { file: "cold-pack.jpg", id: PHOTOS.coldPack },
  { file: "blood-test.jpg", id: PHOTOS.bloodTest },
  { file: "spa-wellness.jpg", id: PHOTOS.spaWellness },
  { file: "energy-drink.jpg", id: PHOTOS.energyDrink },
  { file: "joint-health.jpg", id: PHOTOS.jointHealth },
  { file: "brain-focus.jpg", id: PHOTOS.brainFocus },
  { file: "heart-health.jpg", id: PHOTOS.heartHealth },
  { file: "skin-glow.jpg", id: PHOTOS.skinGlow },
  { file: "packaging.jpg", id: PHOTOS.packaging },
  { file: "nad-infusion.jpg", id: PHOTOS.spaWellness },
  { file: "bpc-vial.jpg", id: PHOTOS.peptideKit },
  { file: "trt-kit.jpg", id: PHOTOS.fitnessMan },
  { file: "finasteride-pills.jpg", id: PHOTOS.medicalPills },
  { file: "tretinoin-tube.jpg", id: PHOTOS.creamJar },
  { file: "sildenafil-pack.jpg", id: PHOTOS.packaging },
  { file: "melatonin-bottle.jpg", id: PHOTOS.vitaminBottles },
  { file: "mental-calm.jpg", id: PHOTOS.meditation },
  { file: "womens-wellness.jpg", id: PHOTOS.professionalWoman },
  { file: "thyroid-support.jpg", id: PHOTOS.bloodTest },
  { file: "injection-supplies.jpg", id: PHOTOS.injectionPen },
  { file: "cold-chain-ship.jpg", id: PHOTOS.coldPack },
  { file: "anti-aging-serum.jpg", id: PHOTOS.serumDropper },
  { file: "hair-serum.jpg", id: PHOTOS.hairCare },
  { file: "longevity-lab.jpg", id: PHOTOS.labMicroscope },
  { file: "recovery-peptide.jpg", id: PHOTOS.yogaRecovery },
  { file: "ed-bundle.jpg", id: PHOTOS.heartHealth },
  { file: "weight-starter.jpg", id: PHOTOS.healthyFood },
  { file: "consultation.jpg", id: PHOTOS.doctorConsult },
];

await mkdir(OUT, { recursive: true });

let ok = 0;
let skip = 0;
for (const { file, id } of IMAGES) {
  try {
    const res = await fetch(url(id), { signal: AbortSignal.timeout(25_000) });
    if (!res.ok) {
      console.warn(`Skip ${file}: HTTP ${res.status}`);
      skip++;
      continue;
    }
    const buf = Buffer.from(await res.arrayBuffer());
    await writeFile(join(OUT, file), buf);
    ok++;
    console.log(`Saved ${file} (${Math.round(buf.length / 1024)}KB)`);
  } catch (err) {
    console.warn(`Skip ${file}: ${err.message || err}`);
    skip++;
  }
}

console.log(`Done. ${ok} saved, ${skip} skipped.`);
