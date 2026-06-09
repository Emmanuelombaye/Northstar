/** Real free-image URLs (Unsplash / Pexels) for every shop product. */

export type ProductImageUrlPair = { primary: string; alt: string };

const u = (id: string) =>
  `https://images.unsplash.com/photo-${id}?w=600&h=600&fit=crop&q=80&auto=format`;

const p = (id: number) =>
  `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&fit=crop`;

export const PRODUCT_IMAGE_URLS: Record<string, ProductImageUrlPair> = {

  // ── Weight Loss (12) ───────────────────────────────────────────────────────
  "tirzepatide-plus": {
    primary: u("1581595220892-b0799db879a8"), // injection pen / GLP-1
    alt:     u("1559757148-5c350d0d3c56"),     // medical vial
  },
  "semaglutide-plus": {
    primary: u("1559757148-5c350d0d3c56"),     // syringe / vial
    alt:     u("1584515937757-fdc718c05d9b"),  // pharmacy shelf
  },
  "liraglutide-daily": {
    primary: u("1584308666744-24d5c474f2ae"),  // prescription pills
    alt:     u("1631543931893-4e25c20f5dd0"),  // pharmacy counter
  },
  "metabolic-reset": {
    primary: u("1666214066297-8bebe0500645"),  // metabolic / health check
    alt:     u("1550572017-edb79a6144e5"),     // pill bottles
  },
  "phentermine-control": {
    primary: u("1576091160399-112ba8d25d1d"),  // prescription bottle
    alt:     u("1505751172876-fa1923c5c528"),  // capsules
  },
  "contrave-bundle": {
    primary: u("1587854692152-cbc864d8b370"),  // oral pills / blister pack
    alt:     u("1556909114-f6e7ad7d3136"),     // pill organizer
  },
  "wegovy-pathway": {
    primary: u("1582719471384-894fbb16e074"),  // GLP-1 injection
    alt:     p(3760263),                       // pharmacist consultation
  },
  "mounjaro-pathway": {
    primary: u("1576678927484-cc907957088c"),  // fitness / body composition
    alt:     p(8199239),                       // medical professional
  },
  "bmi-medical-program": {
    primary: u("1579154204601-01588f351e67"),  // medical scale / BMI
    alt:     u("1628771065518-0d82f1938462"),  // doctor consultation
  },
  "weight-loss-starter": {
    primary: p(7101543),                       // starter medical kit
    alt:     u("1573883429746-084be9b5cfca"),  // delivery package
  },
  "glp1-maintenance": {
    primary: u("1684369175820-cda54b923734"),  // ongoing medication
    alt:     p(7101544),                       // maintenance prescription
  },
  "metabolic-panel-addon": {
    primary: u("1532187863486-ab9f9f01ef36"),  // blood draw / lab test
    alt:     u("1512069772995-ec65ed45afd6"),  // lab microscope
  },

  // ── Longevity (10) ────────────────────────────────────────────────────────
  "nad-rejuvenation": {
    primary: p(3786125),                       // supplements / NAD capsules
    alt:     p(4226769),                       // lab / science
  },
  "nad-oral-boost": {
    primary: u("1471864190281-a93a2b719e5a"),  // daily supplements
    alt:     p(3683083),                       // supplement bottles
  },
  "glutathione-glow": {
    primary: p(4386464),                       // antioxidant / glow
    alt:     u("1562243061-204550d8a2c5"),     // supplement capsules
  },
  "nmn-cellular": {
    primary: u("1581595220892-b0799db879a8"),  // cellular energy
    alt:     p(3683092),                       // supplement jar
  },
  "metformin-longevity": {
    primary: u("1631669969504-f35518bf96ba"),  // metformin / oral pills
    alt:     p(3683100),                       // longevity supplements
  },
  "resveratrol-protocol": {
    primary: u("1698506455775-42635fdd16a2"),  // resveratrol / plant extract
    alt:     p(3845541),                       // supplement capsules
  },
  "coq10-energy": {
    primary: p(5726016),                       // CoQ10 / mitochondrial
    alt:     u("1471864190281-a93a2b719e5a"),  // energy supplements
  },
  "longevity-stack-bundle": {
    primary: p(7101549),                       // supplement bundle
    alt:     u("1581159186721-b68b78da4e38"),  // stacked supplements
  },
  "epithalon-peptide": {
    primary: u("1559757148-5c350d0d3c56"),     // peptide vial
    alt:     p(6476589),                       // peptide kit
  },
  "thymosin-alpha": {
    primary: u("1584308666744-24d5c474f2ae"),  // immune support vial
    alt:     u("1550572017-edb79a6144e5"),     // vial / injectable
  },

  // ── Recovery (8) ──────────────────────────────────────────────────────────
  "sermorelin-recovery": {
    primary: p(4617475),                       // athlete recovery
    alt:     p(208538),                        // fitness / muscle
  },
  "bpc-157-repair": {
    primary: p(8460040),                       // tissue repair / peptide
    alt:     p(6476589),                       // peptide vial kit
  },
  "cjc-ipamorelin": {
    primary: u("1576678927484-cc907957088c"),  // body composition
    alt:     p(4488346),                       // recovery peptide
  },
  "tb-500-recovery": {
    primary: p(4210665),                       // systemic recovery
    alt:     p(7101555),                       // peptide recovery
  },
  "ghk-cu-tissue": {
    primary: p(7788864),                       // skin / tissue remodeling
    alt:     p(3998416),                       // topical skin care
  },
  "joint-recovery-stack": {
    primary: p(6224914),                       // joint / active recovery
    alt:     p(40568),                         // runner / joint health
  },
  "athlete-recovery-stack": {
    primary: p(4617475),                       // athlete / sport
    alt:     u("1576678927484-cc907957088c"),  // body composition
  },
  "pt-141-performance": {
    primary: p(4488346),                       // vitality / peptide
    alt:     p(4210665),                       // wellness
  },

  // ── Men's Health (8) ──────────────────────────────────────────────────────
  "testosterone-trt": {
    primary: p(6957578),                       // TRT vial / testosterone
    alt:     p(1393295),                       // active / men's fitness
  },
  "enclomiphene": {
    primary: p(674650),                        // oral pills / capsules
    alt:     u("1584308666744-24d5c474f2ae"),  // prescription pills
  },
  "hcg-trt-support": {
    primary: u("1559757148-5c350d0d3c56"),     // injectable vial
    alt:     p(757983),                        // men's health support
  },
  "anastrozole-estrogen": {
    primary: u("1550572017-edb79a6144e5"),     // oral pill / small tablet
    alt:     p(159597),                        // prescription capsule
  },
  "dhea-mens": {
    primary: p(3845122),                       // supplement / DHEA
    alt:     u("1471864190281-a93a2b719e5a"),  // daily supplement
  },
  "cialis-daily": {
    primary: p(4386431),                       // daily oral medication
    alt:     u("1587854692152-cbc864d8b370"),  // blister pack / pills
  },
  "prostate-support": {
    primary: p(185416),                        // men's wellness
    alt:     u("1576091160399-112ba8d25d1d"),  // prescription bottle
  },
  "mens-vitality-panel": {
    primary: u("1576086213563-972a7e7010e1"),  // lab / blood panel
    alt:     p(356040),                        // lab results / test tubes
  },

  // ── Women's Health (6) ────────────────────────────────────────────────────
  "bioidentical-hrt": {
    primary: u("1556228578-0d85b1a4d571"),     // cream / bioidentical hormone
    alt:     p(761593),                        // women's health consultation
  },
  "progesterone-bioidentical": {
    primary: u("1620916560350-3b53d5e29100"),  // progesterone / capsule
    alt:     p(5069434),                       // women's wellness
  },
  "estradiol-patch": {
    primary: p(6590654),                       // transdermal patch
    alt:     u("1556228578-0d85b1a4d571"),     // topical / cream
  },
  "pcos-metformin": {
    primary: p(4021775),                       // women's health / PCOS
    alt:     p(4021812),                       // women's consultation
  },
  "womens-hormone-panel": {
    primary: u("1696861286643-341a8d7a79e9"),  // hormone panel / lab
    alt:     p(1630974),                       // women's lab work
  },
  "womens-weight-program": {
    primary: p(227294),                        // women's fitness / weight
    alt:     p(1393298),                       // active women
  },

  // ── Hair (6) ──────────────────────────────────────────────────────────────
  "finasteride": {
    primary: u("1522338242992-e1a54906a8da"),  // hair / scalp treatment
    alt:     p(4040568),                       // hair care
  },
  "minoxidil-topical": {
    primary: u("1612817288184-6f966944128a"),  // topical hair / minoxidil
    alt:     p(4041391),                       // scalp application
  },
  "finasteride-minoxidil-duo": {
    primary: u("1608571422092-4b4fc9a8f6f8"),  // hair duo treatment
    alt:     p(112263),                        // hair restoration
  },
  "dutasteride": {
    primary: p(3993449),                       // oral / hair DHT
    alt:     p(3565437),                       // capsule / tablet
  },
  "ketoconazole-scalp": {
    primary: u("1608245449331-3f5c75a7c3e2"),  // scalp shampoo / care
    alt:     p(305568),                        // hair wash / scalp
  },
  "biotin-hair-growth": {
    primary: p(3738347),                       // biotin supplement
    alt:     p(325962),                        // hair growth / vitamins
  },

  // ── Skincare (6) ──────────────────────────────────────────────────────────
  "tretinoin-005": {
    primary: p(3786120),                       // tretinoin / retinoid cream
    alt:     p(572118),                        // skincare jar / routine
  },
  "anti-aging-cream": {
    primary: p(3685530),                       // anti-aging cream
    alt:     p(4467687),                       // moisturizer / cream
  },
  "hydroquinone-brightening": {
    primary: p(5061027),                       // brightening skincare
    alt:     p(5473182),                       // skin tone / serum
  },
  "azelaic-acid": {
    primary: p(6195951),                       // azelaic acid / serum
    alt:     p(3997981),                       // skincare dropper
  },
  "clindamycin-acne": {
    primary: p(3998419),                       // acne / topical gel
    alt:     p(3998416),                       // skin treatment
  },
  "vitamin-c-protocol": {
    primary: p(3738362),                       // vitamin C serum
    alt:     p(2280549),                       // antioxidant skincare
  },

  // ── Sexual Wellness (6) ───────────────────────────────────────────────────
  "sildenafil": {
    primary: u("1587854692152-cbc864d8b370"),  // discreet medication / pills
    alt:     u("1576091160399-112ba8d25d1d"),  // prescription bottle
  },
  "tadalafil-daily": {
    primary: u("1550572017-edb79a6144e5"),     // daily oral tablet
    alt:     u("1505751172876-fa1923c5c528"),  // pill pack
  },
  "tadalafil-as-needed": {
    primary: u("1631543931893-4e25c20f5dd0"),  // as-needed medication
    alt:     u("1584308666744-24d5c474f2ae"),  // prescription pills
  },
  "ed-starter-bundle": {
    primary: u("1541781774459-bb2af2f05b55"),  // starter pack / bundle
    alt:     p(3685540),                       // medication bundle
  },
  "pt-141-desire": {
    primary: u("1559757148-5c350d0d3c56"),     // peptide vial
    alt:     p(3685560),                       // wellness
  },
  "oxytocin-intimacy": {
    primary: u("1507003211169-0a1dd7228f2d"),  // connection / wellness
    alt:     u("1494790108377-be9c29b29330"),  // intimacy / wellbeing
  },

  // ── Sleep (5) ─────────────────────────────────────────────────────────────
  "melatonin-sleep": {
    primary: u("1506126613408-eca07ce68773"),  // peaceful sleep / rest
    alt:     u("1471864190281-a93a2b719e5a"),  // sleep supplement bottle
  },
  "trazodone-sleep": {
    primary: u("1576091160399-112ba8d25d1d"),  // prescription sleep pill
    alt:     u("1550572017-edb79a6144e5"),     // medication bottle
  },
  "magnesium-glycinate": {
    primary: u("1562243061-204550d8a2c5"),     // magnesium supplement
    alt:     p(3683083),                       // supplement jar
  },
  "sleep-consultation": {
    primary: u("1579684385127-1ef15d508118"),  // doctor / sleep consult
    alt:     u("1628771065518-0d82f1938462"),  // physician consultation
  },
  "cbn-sleep": {
    primary: u("1498837167922-ddd27525d352"),  // wellness / sleep support
    alt:     u("1506126613408-eca07ce68773"),  // rest / sleep
  },

  // ── Mental Health (5) ─────────────────────────────────────────────────────
  "sertraline-anxiety": {
    primary: u("1584308666744-24d5c474f2ae"),  // SSRI / prescription pill
    alt:     u("1573497019940-1c28c88b4f3e"),  // telehealth therapy
  },
  "escitalopram-mood": {
    primary: u("1505751172876-fa1923c5c528"),  // mood medication / SSRI
    alt:     u("1579684385127-1ef15d508118"),  // mental health consult
  },
  "buspirone-stress": {
    primary: u("1512069772995-ec65ed45afd6"),  // anti-anxiety / lab
    alt:     u("1587854692152-cbc864d8b370"),  // oral medication
  },
  "mental-health-intake": {
    primary: u("1573497019940-1c28c88b4f3e"),  // telehealth / consultation
    alt:     u("1579684385127-1ef15d508118"),  // provider review
  },
  "wellbutrin-energy": {
    primary: u("1550572017-edb79a6144e5"),     // bupropion / energy pill
    alt:     u("1576091160399-112ba8d25d1d"),  // prescription medication
  },

  // ── Hormone (5) ───────────────────────────────────────────────────────────
  "thyroid-levothyroxine": {
    primary: u("1631669969504-f35518bf96ba"),  // levothyroxine / thyroid pill
    alt:     u("1584308666744-24d5c474f2ae"),  // prescription tablet
  },
  "armour-thyroid": {
    primary: u("1587854692152-cbc864d8b370"),  // natural thyroid / NDT
    alt:     u("1631669969504-f35518bf96ba"),  // desiccated thyroid
  },
  "pregnenolone": {
    primary: u("1471864190281-a93a2b719e5a"),  // hormone precursor / supplement
    alt:     u("1562243061-204550d8a2c5"),     // capsule supplement
  },
  "dhea-womens": {
    primary: u("1556228578-0d85b1a4d571"),     // women's hormone support
    alt:     u("1620916560350-3b53d5e29100"),  // women's supplement
  },
  "hormone-full-panel": {
    primary: u("1532187863486-ab9f9f01ef36"),  // hormone blood test / panel
    alt:     u("1576086213563-972a7e7010e1"),  // lab results
  },

  // ── Add-Ons / Consultation (3) ────────────────────────────────────────────
  "physician-consultation": {
    primary: u("1579684385127-1ef15d508118"),  // physician / telehealth consult
    alt:     u("1573497019940-1c28c88b4f3e"),  // doctor patient interaction
  },
  "cold-chain-shipping": {
    primary: u("1582719508461-905c673771bd"),  // cold-chain / medical shipping
    alt:     u("1584515937757-fdc718c05d9b"),  // pharmacy delivery
  },
  "injection-supplies-kit": {
    primary: u("1559757148-5c350d0d3c56"),     // syringe / injection kit
    alt:     u("1584308666744-24d5c474f2ae"),  // supplies / medical tools
  },
};

export function getProductImageUrls(slug: string): ProductImageUrlPair | undefined {
  return PRODUCT_IMAGE_URLS[slug];
}
