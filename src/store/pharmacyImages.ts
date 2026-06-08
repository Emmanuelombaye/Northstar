/**
 * Pharmacy-only product imagery — vials, Rx bottles, kits, panels.
 * No lifestyle / stock wellness photos on product cards.
 */

export type PharmAsset = { webp: string; jpg: string };

const B = (webp: string): PharmAsset => ({
  webp,
  jpg: webp.replace(".webp", ".jpg").replace(".png", ".png"),
});

const brand = {
  tirzepatide: B("/images/tirzepatide-hero.webp"),
  semaglutide: B("/images/semaglutide-hero.webp"),
  nad: B("/images/nad-hero.webp"),
  sermorelin: B("/images/sermorelin-hero.webp"),
  weightCard: B("/images/weight-loss-card.webp"),
  longevityCard: B("/images/longevity-card.webp"),
  recoveryCard: B("/images/muscle-recovery-card.webp"),
  recoveryDesigned: B("/images/muscle-recovery-designed.webp"),
  panelWeight: B("/images/panel-weight.webp"),
  panelNad: B("/images/panel-nad.webp"),
  panelRecovery: B("/images/panel-recovery.webp"),
  productBox: B("/images/product-box.webp"),
  product: B("/images/product.webp"),
  biomarker: B("/images/biomarker-screen.webp"),
  clinicalDraw: B("/images/clinical-draw.webp"),
  deliveryStep: B("/images/step-04-delivery-kit.webp"),
};

const store = {
  vial: B("/images/store/vial-pharmacy.webp"),
  bpcVial: B("/images/store/bpc-vial.webp"),
  peptideKit: B("/images/store/peptide-kit.webp"),
  injectionPen: B("/images/store/injection-pen.webp"),
  weightGlp1: B("/images/store/weight-glp1.webp"),
  pills: B("/images/store/medical-pills.webp"),
  vitamins: B("/images/store/vitamin-bottles.webp"),
  melatonin: B("/images/store/melatonin-bottle.webp"),
  supplements: B("/images/store/supplements.webp"),
  skincare: B("/images/store/skincare-cream.webp"),
  creamJar: B("/images/store/cream-jar.webp"),
  serum: B("/images/store/serum-dropper.webp"),
  hair: B("/images/store/hair-treatment.webp"),
  sexual: B("/images/store/sexual-wellness.webp"),
  packaging: B("/images/store/packaging.webp"),
  delivery: B("/images/store/delivery-kit.webp"),
  coldPack: B("/images/store/cold-pack.webp"),
  hormoneLab: B("/images/store/hormone-lab.webp"),
  bloodTest: B("/images/store/blood-test.webp"),
  pharmacyShelf: B("/images/store/pharmacy-shelf.webp"),
  trtKit: B("/images/store/trt-kit.webp"),
  nadInfusion: B("/images/store/nad-infusion.webp"),
  sleepRest: B("/images/store/sleep-rest.webp"),
  recoveryPeptide: B("/images/store/recovery-peptide.webp"),
  altPharm1: B("/images/store/alt-pharmacy-01.webp"),
  altPharm2: B("/images/store/alt-pharmacy-02.webp"),
  altWeight: B("/images/store/alt-weight-01.webp"),
  altLongevity: B("/images/store/alt-longevity-01.webp"),
  altRecovery: B("/images/store/alt-recovery-01.webp"),
  altHair: B("/images/store/alt-hair-01.webp"),
  altSkin: B("/images/store/alt-skin-01.webp"),
  altSleep: B("/images/store/alt-sleep-01.webp"),
  altHormone: B("/images/store/alt-hormone-01.webp"),
};

export type ProductImagePair = { primary: PharmAsset; alt: PharmAsset };

/** Explicit pharmacy imagery per product slug */
export const PHARMACY_PRODUCT_IMAGES: Record<string, ProductImagePair> = {
  // Weight loss
  "tirzepatide-plus": { primary: brand.tirzepatide, alt: brand.panelWeight },
  "semaglutide-plus": { primary: brand.semaglutide, alt: brand.weightCard },
  "liraglutide-daily": { primary: store.injectionPen, alt: store.weightGlp1 },
  "metabolic-reset": { primary: brand.panelWeight, alt: store.vial },
  "phentermine-control": { primary: store.pills, alt: store.vitamins },
  "contrave-bundle": { primary: store.pills, alt: store.vial },
  "wegovy-pathway": { primary: brand.semaglutide, alt: store.injectionPen },
  "mounjaro-pathway": { primary: brand.tirzepatide, alt: store.weightGlp1 },
  "bmi-medical-program": { primary: brand.biomarker, alt: store.hormoneLab },
  "weight-loss-starter": { primary: store.delivery, alt: store.injectionPen },
  "glp1-maintenance": { primary: store.vial, alt: brand.weightCard },
  "metabolic-panel-addon": { primary: brand.clinicalDraw, alt: store.bloodTest },

  // Longevity
  "nad-rejuvenation": { primary: brand.nad, alt: brand.longevityCard },
  "nad-oral-boost": { primary: store.nadInfusion, alt: store.supplements },
  "glutathione-glow": { primary: store.vial, alt: store.supplements },
  "nmn-cellular": { primary: store.supplements, alt: store.vitamins },
  "metformin-longevity": { primary: store.pills, alt: store.vitamins },
  "resveratrol-protocol": { primary: store.supplements, alt: store.vitamins },
  "coq10-energy": { primary: store.vitamins, alt: store.supplements },
  "longevity-stack-bundle": { primary: brand.panelNad, alt: brand.nad },
  "epithalon-peptide": { primary: store.peptideKit, alt: store.bpcVial },
  "thymosin-alpha": { primary: store.vial, alt: store.recoveryPeptide },

  // Recovery
  "sermorelin-recovery": { primary: brand.sermorelin, alt: brand.recoveryCard },
  "bpc-157-repair": { primary: brand.recoveryDesigned, alt: store.bpcVial },
  "cjc-ipamorelin": { primary: store.peptideKit, alt: store.recoveryPeptide },
  "tb-500-recovery": { primary: store.bpcVial, alt: brand.panelRecovery },
  "ghk-cu-tissue": { primary: store.skincare, alt: store.serum },
  "joint-recovery-stack": { primary: brand.panelRecovery, alt: store.peptideKit },
  "athlete-recovery-stack": { primary: store.recoveryPeptide, alt: store.bpcVial },
  "pt-141-performance": { primary: store.vial, alt: store.peptideKit },

  // Men's health
  "testosterone-trt": { primary: store.trtKit, alt: store.vial },
  "enclomiphene": { primary: store.pills, alt: store.vitamins },
  "hcg-trt-support": { primary: store.vial, alt: store.trtKit },
  "anastrozole-estrogen": { primary: store.pills, alt: store.vitamins },
  "dhea-mens": { primary: store.supplements, alt: store.pills },
  "cialis-daily": { primary: brand.productBox, alt: store.pills },
  "prostate-support": { primary: store.pills, alt: store.supplements },
  "mens-vitality-panel": { primary: store.hormoneLab, alt: brand.clinicalDraw },

  // Women's health
  "bioidentical-hrt": { primary: store.creamJar, alt: store.delivery },
  "progesterone-bioidentical": { primary: store.pills, alt: store.creamJar },
  "estradiol-patch": { primary: store.delivery, alt: store.packaging },
  "pcos-metformin": { primary: store.pills, alt: store.vitamins },
  "womens-hormone-panel": { primary: store.bloodTest, alt: store.hormoneLab },
  "womens-weight-program": { primary: store.injectionPen, alt: brand.weightCard },

  // Hair
  finasteride: { primary: store.pills, alt: store.hair },
  "minoxidil-topical": { primary: store.hair, alt: store.serum },
  "finasteride-minoxidil-duo": { primary: store.hair, alt: store.pills },
  dutasteride: { primary: store.pills, alt: store.hair },
  "ketoconazole-scalp": { primary: store.skincare, alt: store.hair },
  "biotin-hair-growth": { primary: store.vitamins, alt: store.hair },

  // Skincare
  "tretinoin-005": { primary: store.skincare, alt: store.creamJar },
  "anti-aging-cream": { primary: store.creamJar, alt: store.serum },
  "hydroquinone-brightening": { primary: store.skincare, alt: store.creamJar },
  "azelaic-acid": { primary: store.skincare, alt: store.serum },
  "clindamycin-acne": { primary: store.skincare, alt: store.creamJar },
  "vitamin-c-protocol": { primary: store.serum, alt: store.skincare },

  // Sexual wellness
  sildenafil: { primary: brand.productBox, alt: store.packaging },
  "tadalafil-daily": { primary: store.pills, alt: brand.productBox },
  "tadalafil-as-needed": { primary: brand.productBox, alt: store.sexual },
  "ed-starter-bundle": { primary: brand.productBox, alt: store.packaging },
  "pt-141-desire": { primary: store.vial, alt: store.sexual },
  "oxytocin-intimacy": { primary: store.vial, alt: store.packaging },

  // Sleep
  "melatonin-sleep": { primary: store.melatonin, alt: store.sleepRest },
  "trazodone-sleep": { primary: store.pills, alt: store.melatonin },
  "magnesium-glycinate": { primary: store.vitamins, alt: store.supplements },
  "sleep-consultation": { primary: store.pharmacyShelf, alt: store.delivery },
  "cbn-sleep": { primary: store.melatonin, alt: store.sleepRest },

  // Mental health
  "sertraline-anxiety": { primary: store.pills, alt: store.vitamins },
  "escitalopram-mood": { primary: store.pills, alt: store.melatonin },
  "buspirone-stress": { primary: store.pills, alt: store.supplements },
  "mental-health-intake": { primary: store.pharmacyShelf, alt: store.delivery },
  "wellbutrin-energy": { primary: store.pills, alt: store.vitamins },

  // Hormone
  "thyroid-levothyroxine": { primary: store.pills, alt: store.vitamins },
  "armour-thyroid": { primary: store.pills, alt: store.supplements },
  pregnenolone: { primary: store.supplements, alt: store.vitamins },
  "dhea-womens": { primary: store.vitamins, alt: store.supplements },
  "hormone-full-panel": { primary: brand.biomarker, alt: store.bloodTest },

  // Services
  "physician-consultation": { primary: store.pharmacyShelf, alt: brand.deliveryStep },
  "cold-chain-shipping": { primary: store.coldPack, alt: store.delivery },
  "injection-supplies-kit": { primary: store.peptideKit, alt: store.injectionPen },
};

const CATEGORY_DEFAULT: Record<string, ProductImagePair> = {
  "weight-loss": { primary: store.vial, alt: store.injectionPen },
  longevity: { primary: store.nadInfusion, alt: store.supplements },
  recovery: { primary: store.bpcVial, alt: store.peptideKit },
  "mens-health": { primary: store.trtKit, alt: store.pills },
  "womens-health": { primary: store.creamJar, alt: store.pills },
  hair: { primary: store.hair, alt: store.pills },
  skincare: { primary: store.skincare, alt: store.creamJar },
  "sexual-wellness": { primary: brand.productBox, alt: store.packaging },
  sleep: { primary: store.melatonin, alt: store.sleepRest },
  "mental-health": { primary: store.pills, alt: store.vitamins },
  hormone: { primary: store.hormoneLab, alt: store.bloodTest },
};

export function getPharmacyImages(slug: string, category: string): ProductImagePair {
  return PHARMACY_PRODUCT_IMAGES[slug] ?? CATEGORY_DEFAULT[category] ?? { primary: store.vial, alt: store.altPharm1 };
}
