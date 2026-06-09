/** Real free-image URLs (Flickr via LoremFlickr) for every shop product. */

export type ProductImageUrlPair = { primary: string; alt: string };

// We use LoremFlickr with specific keywords to get real photos.
// The `lock` parameter ensures the image stays exactly the same on every refresh.
const f = (keyword: string, lockId: number) =>
  `https://loremflickr.com/600/600/${keyword}?lock=${lockId}`;

export const PRODUCT_IMAGE_URLS: Record<string, ProductImageUrlPair> = {

  // ── Weight Loss (12) ───────────────────────────────────────────────────────
  "tirzepatide-plus": {
    primary: f("medicine,vial", 101),
    alt:     f("health,clinic", 102),
  },
  "semaglutide-plus": {
    primary: f("syringe,medicine", 103),
    alt:     f("pharmacy", 104),
  },
  "liraglutide-daily": {
    primary: f("prescription,pills", 105),
    alt:     f("doctor,consultation", 106),
  },
  "metabolic-reset": {
    primary: f("fitness,health", 107),
    alt:     f("healthy,food", 108),
  },
  "phentermine-control": {
    primary: f("capsules,medicine", 109),
    alt:     f("bottle,pills", 110),
  },
  "contrave-bundle": {
    primary: f("blisterpack,pills", 111),
    alt:     f("medicine", 112),
  },
  "wegovy-pathway": {
    primary: f("injection,medicine", 113),
    alt:     f("pharmacist", 114),
  },
  "mounjaro-pathway": {
    primary: f("health,body", 115),
    alt:     f("medical,doctor", 116),
  },
  "bmi-medical-program": {
    primary: f("scale,weight", 117),
    alt:     f("doctor,patient", 118),
  },
  "weight-loss-starter": {
    primary: f("medical,kit", 119),
    alt:     f("delivery,package", 120),
  },
  "glp1-maintenance": {
    primary: f("daily,medicine", 121),
    alt:     f("health,lifestyle", 122),
  },
  "metabolic-panel-addon": {
    primary: f("blood,test", 123),
    alt:     f("microscope,lab", 124),
  },

  // ── Longevity (10) ────────────────────────────────────────────────────────
  "nad-rejuvenation": {
    primary: f("supplements,bottle", 201),
    alt:     f("science,lab", 202),
  },
  "nad-oral-boost": {
    primary: f("daily,supplements", 203),
    alt:     f("vitamins", 204),
  },
  "glutathione-glow": {
    primary: f("antioxidant,health", 205),
    alt:     f("capsules,supplements", 206),
  },
  "nmn-cellular": {
    primary: f("energy,health", 207),
    alt:     f("supplement,jar", 208),
  },
  "metformin-longevity": {
    primary: f("pills,medicine", 209),
    alt:     f("longevity,health", 210),
  },
  "resveratrol-protocol": {
    primary: f("plant,extract", 211),
    alt:     f("supplement,capsules", 212),
  },
  "coq10-energy": {
    primary: f("heart,health", 213),
    alt:     f("energy,vitamins", 214),
  },
  "longevity-stack-bundle": {
    primary: f("supplements,stack", 215),
    alt:     f("vitamins,bundle", 216),
  },
  "epithalon-peptide": {
    primary: f("peptide,vial", 217),
    alt:     f("medical,kit", 218),
  },
  "thymosin-alpha": {
    primary: f("immune,support", 219),
    alt:     f("injectable,vial", 220),
  },

  // ── Recovery (8) ──────────────────────────────────────────────────────────
  "sermorelin-recovery": {
    primary: f("athlete,recovery", 301),
    alt:     f("muscle,fitness", 302),
  },
  "bpc-157-repair": {
    primary: f("tissue,repair", 303),
    alt:     f("peptide,vial", 304),
  },
  "cjc-ipamorelin": {
    primary: f("body,composition", 305),
    alt:     f("recovery,peptide", 306),
  },
  "tb-500-recovery": {
    primary: f("systemic,recovery", 307),
    alt:     f("peptide,medicine", 308),
  },
  "ghk-cu-tissue": {
    primary: f("skin,care", 309),
    alt:     f("topical,cream", 310),
  },
  "joint-recovery-stack": {
    primary: f("joint,health", 311),
    alt:     f("runner,active", 312),
  },
  "athlete-recovery-stack": {
    primary: f("athlete,sport", 313),
    alt:     f("fitness,recovery", 314),
  },
  "pt-141-performance": {
    primary: f("vitality,wellness", 315),
    alt:     f("wellness,health", 316),
  },

  // ── Men's Health (8) ──────────────────────────────────────────────────────
  "testosterone-trt": {
    primary: f("vial,testosterone", 401),
    alt:     f("mens,fitness", 402),
  },
  "enclomiphene": {
    primary: f("capsules,pills", 403),
    alt:     f("prescription,bottle", 404),
  },
  "hcg-trt-support": {
    primary: f("injectable,medicine", 405),
    alt:     f("mens,health", 406),
  },
  "anastrozole-estrogen": {
    primary: f("small,tablet", 407),
    alt:     f("prescription,capsule", 408),
  },
  "dhea-mens": {
    primary: f("supplement,mens", 409),
    alt:     f("daily,vitamins", 410),
  },
  "cialis-daily": {
    primary: f("daily,medication", 411),
    alt:     f("blisterpack,pills", 412),
  },
  "prostate-support": {
    primary: f("mens,wellness", 413),
    alt:     f("bottle,medicine", 414),
  },
  "mens-vitality-panel": {
    primary: f("blood,panel", 415),
    alt:     f("lab,test", 416),
  },

  // ── Women's Health (6) ────────────────────────────────────────────────────
  "bioidentical-hrt": {
    primary: f("cream,hormone", 501),
    alt:     f("womens,health", 502),
  },
  "progesterone-bioidentical": {
    primary: f("progesterone,capsule", 503),
    alt:     f("womens,wellness", 504),
  },
  "estradiol-patch": {
    primary: f("transdermal,patch", 505),
    alt:     f("topical,cream", 506),
  },
  "pcos-metformin": {
    primary: f("womens,health", 507),
    alt:     f("consultation,doctor", 508),
  },
  "womens-hormone-panel": {
    primary: f("hormone,lab", 509),
    alt:     f("womens,clinic", 510),
  },
  "womens-weight-program": {
    primary: f("womens,fitness", 511),
    alt:     f("active,women", 512),
  },

  // ── Hair (6) ──────────────────────────────────────────────────────────────
  "finasteride": {
    primary: f("hair,treatment", 601),
    alt:     f("hair,care", 602),
  },
  "minoxidil-topical": {
    primary: f("topical,hair", 603),
    alt:     f("scalp,treatment", 604),
  },
  "finasteride-minoxidil-duo": {
    primary: f("hair,duo", 605),
    alt:     f("hair,restoration", 606),
  },
  "dutasteride": {
    primary: f("oral,medicine", 607),
    alt:     f("capsule,tablet", 608),
  },
  "ketoconazole-scalp": {
    primary: f("shampoo,care", 609),
    alt:     f("hair,wash", 610),
  },
  "biotin-hair-growth": {
    primary: f("biotin,supplement", 611),
    alt:     f("hair,vitamins", 612),
  },

  // ── Skincare (6) ──────────────────────────────────────────────────────────
  "tretinoin-005": {
    primary: f("retinoid,cream", 701),
    alt:     f("skincare,jar", 702),
  },
  "anti-aging-cream": {
    primary: f("antiaging,cream", 703),
    alt:     f("moisturizer", 704),
  },
  "hydroquinone-brightening": {
    primary: f("brightening,skincare", 705),
    alt:     f("skin,serum", 706),
  },
  "azelaic-acid": {
    primary: f("acid,serum", 707),
    alt:     f("skincare,dropper", 708),
  },
  "clindamycin-acne": {
    primary: f("acne,gel", 709),
    alt:     f("skin,treatment", 710),
  },
  "vitamin-c-protocol": {
    primary: f("vitamin,serum", 711),
    alt:     f("antioxidant,skincare", 712),
  },

  // ── Sexual Wellness (6) ───────────────────────────────────────────────────
  "sildenafil": {
    primary: f("discreet,pills", 801),
    alt:     f("prescription,bottle", 802),
  },
  "tadalafil-daily": {
    primary: f("daily,tablet", 803),
    alt:     f("pill,pack", 804),
  },
  "tadalafil-as-needed": {
    primary: f("medicine,pills", 805),
    alt:     f("prescription,medicine", 806),
  },
  "ed-starter-bundle": {
    primary: f("starter,pack", 807),
    alt:     f("medication,bundle", 808),
  },
  "pt-141-desire": {
    primary: f("peptide,vial", 809),
    alt:     f("wellness,health", 810),
  },
  "oxytocin-intimacy": {
    primary: f("connection,wellness", 811),
    alt:     f("intimacy,wellbeing", 812),
  },

  // ── Sleep (5) ─────────────────────────────────────────────────────────────
  "melatonin-sleep": {
    primary: f("sleep,rest", 901),
    alt:     f("sleep,supplement", 902),
  },
  "trazodone-sleep": {
    primary: f("prescription,sleep", 903),
    alt:     f("medication,bottle", 904),
  },
  "magnesium-glycinate": {
    primary: f("magnesium,supplement", 905),
    alt:     f("supplement,jar", 906),
  },
  "sleep-consultation": {
    primary: f("doctor,sleep", 907),
    alt:     f("physician,consultation", 908),
  },
  "cbn-sleep": {
    primary: f("wellness,sleep", 909),
    alt:     f("rest,sleep", 910),
  },

  // ── Mental Health (5) ─────────────────────────────────────────────────────
  "sertraline-anxiety": {
    primary: f("prescription,pill", 1001),
    alt:     f("telehealth,therapy", 1002),
  },
  "escitalopram-mood": {
    primary: f("mood,medication", 1003),
    alt:     f("mental,health", 1004),
  },
  "buspirone-stress": {
    primary: f("antianxiety,medicine", 1005),
    alt:     f("oral,medication", 1006),
  },
  "mental-health-intake": {
    primary: f("telehealth,consultation", 1007),
    alt:     f("provider,review", 1008),
  },
  "wellbutrin-energy": {
    primary: f("energy,pill", 1009),
    alt:     f("prescription,medication", 1010),
  },

  // ── Hormone (5) ───────────────────────────────────────────────────────────
  "thyroid-levothyroxine": {
    primary: f("thyroid,pill", 1101),
    alt:     f("prescription,tablet", 1102),
  },
  "armour-thyroid": {
    primary: f("natural,thyroid", 1103),
    alt:     f("desiccated,thyroid", 1104),
  },
  "pregnenolone": {
    primary: f("hormone,supplement", 1105),
    alt:     f("capsule,supplement", 1106),
  },
  "dhea-womens": {
    primary: f("womens,hormone", 1107),
    alt:     f("womens,supplement", 1108),
  },
  "hormone-full-panel": {
    primary: f("hormone,blood", 1109),
    alt:     f("lab,results", 1110),
  },

  // ── Add-Ons / Consultation (3) ────────────────────────────────────────────
  "physician-consultation": {
    primary: f("physician,telehealth", 1201),
    alt:     f("doctor,patient", 1202),
  },
  "cold-chain-shipping": {
    primary: f("cold,shipping", 1203),
    alt:     f("pharmacy,delivery", 1204),
  },
  "injection-supplies-kit": {
    primary: f("syringe,kit", 1205),
    alt:     f("medical,supplies", 1206),
  },
};

export function getProductImageUrls(slug: string): ProductImageUrlPair | undefined {
  return PRODUCT_IMAGE_URLS[slug];
}
