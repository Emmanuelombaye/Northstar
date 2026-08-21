/** North Star MD Rx product copy — clinical names, pharmacy descriptions */

export type CatalogCopy = {
  name: string;
  tagline: string;
  description: string;
  longDescription: string;
};

export const CATALOG_COPY: Record<string, CatalogCopy> = {
  // Weight Loss
  "tirzepatide-plus": {
    name: "Tirzepatide Injection — Dual GIP/GLP-1",
    tagline: "Weekly injection · 2.5–15 mg titration",
    description: "Compounded tirzepatide for physician-guided weight management with pharmacy fulfillment.",
    longDescription: "Dual GIP/GLP-1 receptor agonist supplied with syringes, alcohol swabs, and titration schedule. Dosing adjusted by your North Star clinician based on tolerance and labs.",
  },
  "semaglutide-plus": {
    name: "Semaglutide Injection — GLP-1 Program",
    tagline: "Weekly injection · 0.25–2.4 mg",
    description: "GLP-1 weight management protocol with licensed prescriber oversight and monthly refills.",
    longDescription: "Standard semaglutide escalation protocol for chronic weight management. Includes intake review, pharmacy dispensing, and patient portal messaging.",
  },
  "liraglutide-daily": {
    name: "Liraglutide Injection — Daily GLP-1",
    tagline: "Subcutaneous injection · daily dosing",
    description: "Daily GLP-1 option for patients who prefer shorter-acting appetite control.",
    longDescription: "Prescribed for qualifying adults after medical screening. Shipped cold with injection supplies and step-up dosing guide.",
  },
  "metabolic-reset": {
    name: "Metabolic Reset Program — GLP-1 + Coaching",
    tagline: "4-week clinical program",
    description: "Structured weight program combining medication options with provider check-ins every 4 weeks.",
    longDescription: "Includes physician evaluation, treatment selection, and ongoing metabolic monitoring through your patient portal.",
  },
  "phentermine-control": {
    name: "Phentermine HCl Tablets — 37.5 mg",
    tagline: "Oral appetite suppressant",
    description: "Short-term prescription appetite support for eligible patients beginning a weight-loss plan.",
    longDescription: "Dispensed in child-resistant pharmacy bottles with physician monitoring for blood pressure and heart rate.",
  },
  "contrave-bundle": {
    name: "Naltrexone/Bupropion Tablets — Contrave Protocol",
    tagline: "Oral dual-pathway · 8/90 mg",
    description: "Dual-mechanism oral therapy for chronic weight management without injections.",
    longDescription: "Twice-daily oral regimen for patients who qualify after cardiovascular and psychiatric screening.",
  },
  "wegovy-pathway": {
    name: "Semaglutide Injection — High-Dose GLP-1",
    tagline: "Weekly injection · up to 2.4 mg",
    description: "High-dose semaglutide protocol aligned with standard GLP-1 dose escalation tiers.",
    longDescription: "Physician-guided dose escalation with pharmacy-compounded semaglutide and cold-chain shipping.",
  },
  "mounjaro-pathway": {
    name: "Tirzepatide Injection — High-Dose Dual Agonist",
    tagline: "Weekly injection · up to 15 mg",
    description: "Tirzepatide protocol for patients requiring maximum dual GIP/GLP-1 efficacy.",
    longDescription: "Includes titration calendar, refill management, and quarterly provider review.",
  },
  "bmi-medical-program": {
    name: "BMI Medical Weight Program + Labs",
    tagline: "Clinical program with metabolic panel",
    description: "Comprehensive weight program with optional A1C, lipids, and thyroid labs.",
    longDescription: "Designed for patients with BMI ≥ 27 and comorbidities. Lab results integrated into your treatment plan.",
  },
  "weight-loss-starter": {
    name: "Weight Loss Starter Kit",
    tagline: "Consult + first-month supplies",
    description: "Complete starter bundle: physician consult, medication selection, and first shipment.",
    longDescription: "Everything needed to begin GLP-1 or oral weight therapy — syringes, swabs, and discreet packaging included.",
  },
  "glp1-maintenance": {
    name: "GLP-1 Maintenance Plan",
    tagline: "Reduced-dose sustain protocol",
    description: "Lower-dose GLP-1 maintenance for patients who reached goal weight.",
    longDescription: "Ongoing physician oversight at maintenance dosing to help sustain long-term results.",
  },
  "metabolic-panel-addon": {
    name: "Metabolic Lab Panel Add-On",
    tagline: "A1C · lipids · thyroid",
    description: "Optional at-home or local draw lab panel to personalize your weight protocol.",
    longDescription: "Results reviewed by your prescriber and used to adjust medication dosing and monitoring frequency.",
  },

  // Longevity
  "nad-rejuvenation": {
    name: "NAD+ Injection — Cellular Energy Protocol",
    tagline: "IM/SC injection · 200–500 mg",
    description: "Physician-supervised NAD+ therapy with medical screening and pharmacy compounding.",
    longDescription: "Replenishes NAD+ for energy, cognition, and healthy aging. Shipped with cold-chain packaging and titration protocol.",
  },
  "nad-oral-boost": {
    name: "NAD+ Oral Precursor Capsules",
    tagline: "Daily oral · no injection",
    description: "Oral NAD+ precursor protocol with periodic clinician check-ins.",
    longDescription: "Convenient daily capsules for patients who prefer non-injectable longevity support.",
  },
  "glutathione-glow": {
    name: "Glutathione Injection — Antioxidant Protocol",
    tagline: "IV/IM antioxidant therapy",
    description: "Master antioxidant protocol for oxidative stress and skin radiance support.",
    longDescription: "Compounded glutathione prescribed after medical history review. Popular add-on to NAD+ programs.",
  },
  "nmn-cellular": {
    name: "NMN Capsules — NAD+ Precursor",
    tagline: "Nicotinamide mononucleotide · oral",
    description: "NMN supplement for cellular NAD+ support with physician intake review.",
    longDescription: "High-purity NMN dispensed in pharmacy-grade bottles with recommended daily dosing.",
  },
  "metformin-longevity": {
    name: "Metformin Tablets — Longevity Protocol",
    tagline: "500–1000 mg · oral daily",
    description: "Metformin protocol for qualifying adults pursuing metabolic longevity support.",
    longDescription: "Prescribed after renal function screening. Includes monitoring guidance for GI tolerance.",
  },
  "resveratrol-protocol": {
    name: "Resveratrol Capsules — Sirtuin Support",
    tagline: "High-purity oral supplement",
    description: "Resveratrol with clinician-guided dosing as part of longevity stacks.",
    longDescription: "Pharmacy-grade resveratrol capsules for integrative longevity protocols.",
  },
  "coq10-energy": {
    name: "CoQ10 Capsules — Mitochondrial Support",
    tagline: "Ubiquinone · heart & cellular energy",
    description: "Coenzyme Q10 for mitochondrial and cardiovascular support.",
    longDescription: "Especially recommended for patients over 40 in comprehensive longevity programs.",
  },
  "longevity-stack-bundle": {
    name: "Longevity Stack — NAD+ · Glutathione · NMN",
    tagline: "3-program bundle · unified care",
    description: "Three-program bundle for comprehensive cellular support with single physician oversight.",
    longDescription: "Save versus individual programs. All medications coordinated through one treatment plan.",
  },
  "epithalon-peptide": {
    name: "Epithalon Peptide — Injectable",
    tagline: "Research peptide · cycling protocol",
    description: "Advanced peptide protocol for longevity-focused patients after thorough screening.",
    longDescription: "Prescribed with cycling schedule and injection supplies. Cold-chain shipping included.",
  },
  "thymosin-alpha": {
    name: "Thymosin Alpha-1 Injection",
    tagline: "Immune-modulating peptide",
    description: "Injectable peptide for immune and wellness support under physician guidance.",
    longDescription: "Used in integrative longevity protocols. Includes dosing calendar and refill management.",
  },

  // Recovery
  "sermorelin-recovery": {
    name: "Sermorelin Injection — GH Secretagogue",
    tagline: "Nightly subcutaneous peptide",
    description: "Sermorelin for recovery, sleep quality, and lean mass support.",
    longDescription: "Stimulates natural growth hormone production. Dispensed with syringes and refrigeration instructions.",
  },
  "bpc-157-repair": {
    name: "BPC-157 Injection — Tissue Repair",
    tagline: "Peptide · localized/systemic",
    description: "BPC-157 peptide for injury recovery and joint tissue support.",
    longDescription: "Popular with active patients seeking accelerated soft tissue repair. Physician-supervised cycling protocol.",
  },
  "cjc-ipamorelin": {
    name: "CJC-1295 / Ipamorelin Injection Stack",
    tagline: "GH peptide combination",
    description: "Synergistic peptide stack for recovery, body composition, and deep sleep.",
    longDescription: "Prescribed after medical review. Includes reconstitution supplies and nightly dosing guide.",
  },
  "tb-500-recovery": {
    name: "TB-500 Injection — Systemic Repair",
    tagline: "Thymosin beta-4 analog",
    description: "Systemic peptide protocol for soft tissue healing and recovery.",
    longDescription: "Advanced recovery option for athletes and post-injury rehabilitation under clinical oversight.",
  },
  "ghk-cu-tissue": {
    name: "GHK-Cu Copper Peptide — Topical/Injectable",
    tagline: "Tissue remodeling peptide",
    description: "Copper peptide for tissue remodeling and skin repair.",
    longDescription: "Injectable or topical formulation based on treatment goals. Compounded to pharmacy standards.",
  },
  "joint-recovery-stack": {
    name: "Joint Recovery Stack — BPC-157 + TB-500",
    tagline: "Dual-peptide bundle",
    description: "Combined BPC-157 and TB-500 protocol for joint and tendon support.",
    longDescription: "Bundle savings with unified physician oversight and coordinated injection schedule.",
  },
  "athlete-recovery-stack": {
    name: "Athlete Recovery Stack — Sermorelin + BPC-157",
    tagline: "Performance recovery bundle",
    description: "Sermorelin and BPC-157 stack for training recovery and sleep.",
    longDescription: "Physician-supervised protocol for competitive athletes and high-training-volume patients.",
  },
  "pt-141-performance": {
    name: "PT-141 Injection — Vitality Peptide",
    tagline: "Subcutaneous peptide",
    description: "PT-141 peptide protocol for vitality and recovery goals.",
    longDescription: "Prescribed for qualifying patients. Includes as-directed dosing and discreet packaging.",
  },

  // Men's Health
  "testosterone-trt": {
    name: "Testosterone Cypionate Injection — TRT",
    tagline: "200 mg/mL · weekly/biweekly",
    description: "Testosterone replacement therapy with lab review and refill management.",
    longDescription: "Gold-standard TRT protocol including injection supplies, lab monitoring, and dose adjustments via portal.",
  },
  "enclomiphene": {
    name: "Enclomiphene Citrate Tablets",
    tagline: "Oral testosterone stimulation",
    description: "Oral alternative to stimulate endogenous testosterone production.",
    longDescription: "Popular for younger men with suboptimal levels who prefer non-injection therapy. Lab-guided dosing.",
  },
  "hcg-trt-support": {
    name: "HCG Injection — TRT Support",
    tagline: "Fertility & testicular function",
    description: "HCG add-on for men on TRT to support fertility markers and testicular function.",
    longDescription: "Often paired with testosterone cypionate. Dispensed with injection supplies and dosing protocol.",
  },
  "anastrozole-estrogen": {
    name: "Anastrozole Tablets — 1 mg",
    tagline: "Aromatase inhibitor · TRT support",
    description: "Estrogen management during testosterone replacement therapy.",
    longDescription: "Prescribed when estradiol elevation occurs on TRT. Monthly refill through licensed pharmacy.",
  },
  "dhea-mens": {
    name: "DHEA Capsules — Men's Vitality",
    tagline: "Adrenal hormone precursor",
    description: "DHEA supplementation with lab-monitored dosing for men with low DHEA-S.",
    longDescription: "Part of integrative men's hormone optimization. Dose adjusted based on follow-up labs.",
  },
  "cialis-daily": {
    name: "Tadalafil Tablets — Daily Low-Dose 2.5–5 mg",
    tagline: "Daily oral · ED & BPH",
    description: "Low-dose daily tadalafil for erectile dysfunction and urinary symptoms.",
    longDescription: "Dispensed in pharmacy bottles with 30-day supply. No timing required before activity.",
  },
  "prostate-support": {
    name: "Men's Prostate Support Protocol",
    tagline: "Urinary wellness program",
    description: "Physician-guided protocol for men's urinary health with medication options where appropriate.",
    longDescription: "Includes intake review, symptom tracking, and treatment selection through telehealth.",
  },
  "mens-vitality-panel": {
    name: "Men's Vitality Lab Panel",
    tagline: "Testosterone · thyroid · metabolic",
    description: "Comprehensive lab panel to guide men's health and TRT treatment planning.",
    longDescription: "At-home kit or local draw. Results reviewed by your North Star provider with treatment roadmap.",
  },

  // Women's Health
  "bioidentical-hrt": {
    name: "Bioidentical Hormone Replacement — Compounded",
    tagline: "Personalized HRT cream/capsule",
    description: "Custom-compounded bioidentical hormones for perimenopause and menopause support.",
    longDescription: "Dosing tailored from symptoms, history, and lab results. Shipped in discreet pharmacy packaging.",
  },
  "progesterone-bioidentical": {
    name: "Micronized Progesterone — Bioidentical",
    tagline: "Oral or topical · cycle support",
    description: "Bioidentical progesterone for perimenopause, menopause, and sleep support.",
    longDescription: "Often paired with estradiol in balanced HRT protocols. Compounded to prescriber specifications.",
  },
  "estradiol-patch": {
    name: "Estradiol Transdermal Patch",
    tagline: "Weekly patch · steady estrogen",
    description: "Transdermal estradiol for steady hormone delivery without daily pills.",
    longDescription: "Applied weekly. Popular option for patients preferring non-oral estrogen therapy.",
  },
  "pcos-metformin": {
    name: "Metformin Tablets — PCOS Protocol",
    tagline: "Insulin sensitivity support",
    description: "Metformin for PCOS-related metabolic and insulin sensitivity goals.",
    longDescription: "Physician-guided dosing for qualifying women with PCOS. Includes renal screening.",
  },
  "womens-hormone-panel": {
    name: "Women's Hormone Lab Panel",
    tagline: "Estradiol · progesterone · thyroid",
    description: "Comprehensive hormone labs with provider interpretation for women's health.",
    longDescription: "Foundation for personalized HRT and metabolic treatment planning.",
  },
  "womens-weight-program": {
    name: "Women's GLP-1 Weight Program",
    tagline: "Hormone-aware weight management",
    description: "GLP-1 weight program designed for women's hormonal context.",
    longDescription: "Considers cycle, menopause status, and thyroid in treatment planning and dose titration.",
  },

  // Hair
  finasteride: {
    name: "Finasteride Tablets — 1 mg",
    tagline: "Oral DHT blocker",
    description: "Prescription finasteride to slow male pattern hair loss.",
    longDescription: "Blocks DHT at the follicle. Dispensed in 30-day pharmacy bottles with ongoing monitoring.",
  },
  "minoxidil-topical": {
    name: "Minoxidil Topical Solution — 5%",
    tagline: "Prescription-strength scalp treatment",
    description: "Topical minoxidil for scalp stimulation and hair regrowth.",
    longDescription: "Apply twice daily. Often paired with finasteride for dual-action restoration.",
  },
  "finasteride-minoxidil-duo": {
    name: "Finasteride + Minoxidil Hair System",
    tagline: "Oral + topical bundle",
    description: "Combined oral finasteride and topical minoxidil for maximum retention and regrowth.",
    longDescription: "Complete hair loss program with bundle savings and unified provider oversight.",
  },
  dutasteride: {
    name: "Dutasteride Capsules — 0.5 mg",
    tagline: "Dual 5-alpha reductase inhibitor",
    description: "Stronger DHT suppression for advanced androgenetic alopecia.",
    longDescription: "For patients requiring more potent DHT blockade than finasteride. Physician-monitored.",
  },
  "ketoconazole-scalp": {
    name: "Ketoconazole Shampoo — 2%",
    tagline: "Prescription scalp treatment",
    description: "Anti-inflammatory shampoo for scalp inflammation and thinning hair.",
    longDescription: "Often added to oral and topical hair protocols. Dispensed in pharmacy-labeled bottles.",
  },
  "biotin-hair-growth": {
    name: "Biotin Capsules — Hair Support",
    tagline: "High-dose biotin adjunct",
    description: "Biotin nutraceutical support for patients on prescription hair protocols.",
    longDescription: "Clinician-reviewed dosing as an adjunct to finasteride and minoxidil therapy.",
  },

  // Skincare
  "tretinoin-005": {
    name: "Tretinoin Cream — 0.05%",
    tagline: "Prescription retinoid",
    description: "Medical-grade tretinoin for anti-aging, fine lines, and acne.",
    longDescription: "Includes purging guidance, SPF protocol, and clinician-directed titration schedule.",
  },
  "anti-aging-cream": {
    name: "Custom Anti-Aging Cream — Compounded",
    tagline: "Personalized topical formula",
    description: "Compounded topical for fine lines, texture, and photoaging.",
    longDescription: "Formulation adjusted over time by your clinician based on skin tolerance and goals.",
  },
  "hydroquinone-brightening": {
    name: "Hydroquinone Cream — Brightening",
    tagline: "Hyperpigmentation treatment",
    description: "Prescription brightening cream for melasma, dark spots, and uneven tone.",
    longDescription: "Cycled protocol with strict sun protection guidance. Compounded to pharmacy standards.",
  },
  "azelaic-acid": {
    name: "Azelaic Acid Gel — 15%",
    tagline: "Acne · rosacea · tone",
    description: "Multi-benefit topical for inflammatory acne, rosacea, and post-inflammatory marks.",
    longDescription: "Gentler alternative or complement to retinoids. Applied once or twice daily.",
  },
  "clindamycin-acne": {
    name: "Clindamycin Phosphate Gel — Acne",
    tagline: "Topical antibiotic",
    description: "Prescription gel for inflammatory acne breakouts.",
    longDescription: "Often paired with tretinoin in combination acne protocols.",
  },
  "vitamin-c-protocol": {
    name: "Vitamin C Serum + SPF Protocol",
    tagline: "Antioxidant skin protection",
    description: "Prescription-strength vitamin C with SPF guidance bundle.",
    longDescription: "Complements retinoid therapy for comprehensive photoprotection and brightening.",
  },

  // Sexual Wellness
  sildenafil: {
    name: "Sildenafil Tablets — 50–100 mg",
    tagline: "As-needed erectile dysfunction",
    description: "Fast-acting ED medication with discreet pharmacy shipping.",
    longDescription: "Prescribed after confidential intake. Take 30–60 minutes before activity.",
  },
  "tadalafil-daily": {
    name: "Tadalafil Tablets — Daily 2.5–5 mg",
    tagline: "Daily low-dose ED therapy",
    description: "Daily tadalafil for spontaneity without timing doses.",
    longDescription: "Steady blood levels for patients who prefer daily convenience over as-needed dosing.",
  },
  "tadalafil-as-needed": {
    name: "Tadalafil Tablets — 10–20 mg As-Needed",
    tagline: "Extended 36-hour window",
    description: "Longer-acting as-needed ED option with flexible timing.",
    longDescription: "Popular for patients wanting extended effectiveness per dose. Discreet packaging.",
  },
  "ed-starter-bundle": {
    name: "ED Starter Bundle — Sildenafil + Tadalafil",
    tagline: "Trial both options",
    description: "Physician-guided trial of both ED medications to find your best fit.",
    longDescription: "Includes provider support on dosing selection and side-effect management.",
  },
  "pt-141-desire": {
    name: "Bremelanotide (PT-141) Injection",
    tagline: "Desire & arousal support",
    description: "Injectable peptide for hypoactive sexual desire in qualifying patients.",
    longDescription: "FDA-approved mechanism for low desire. Prescribed after confidential medical screening.",
  },
  "oxytocin-intimacy": {
    name: "Oxytocin Nasal Spray — Compounded",
    tagline: "Intimacy & connection support",
    description: "Compounded oxytocin for intimacy and connection wellness goals.",
    longDescription: "Prescribed for qualifying patients. Available where legally permitted after physician review.",
  },

  // Sleep
  "melatonin-sleep": {
    name: "Melatonin Tablets — Sleep Protocol",
    tagline: "Circadian rhythm support",
    description: "Physician-guided melatonin for sleep rhythm reset and jet lag.",
    longDescription: "Includes sleep history intake and personalized dosing protocol.",
  },
  "trazodone-sleep": {
    name: "Trazodone Tablets — Low-Dose Sleep",
    tagline: "Prescription insomnia support",
    description: "Low-dose trazodone for patients with persistent insomnia after screening.",
    longDescription: "Prescribed after interaction and sleep history review. 30-day pharmacy supply.",
  },
  "magnesium-glycinate": {
    name: "Magnesium Glycinate Capsules",
    tagline: "Sleep & muscle relaxation",
    description: "High-absorption magnesium for sleep quality and muscle relaxation.",
    longDescription: "Popular nutraceutical add-on to prescription sleep protocols. Take nightly.",
  },
  "sleep-consultation": {
    name: "Sleep Medicine Consultation",
    tagline: "Insomnia evaluation · free",
    description: "Licensed provider review for chronic sleep difficulties.",
    longDescription: "Comprehensive sleep intake with personalized treatment recommendations. No charge for consult.",
  },
  "cbn-sleep": {
    name: "CBN Sleep Support — Compounded",
    tagline: "Cannabinoid sleep aid",
    description: "Compounded CBN protocol where legally permitted.",
    longDescription: "Available in qualifying states after physician review and medical history screening.",
  },

  // Mental Health
  "sertraline-anxiety": {
    name: "Sertraline Tablets — 50–100 mg",
    tagline: "SSRI · anxiety & depression",
    description: "SSRI for anxiety and depression with telehealth medication management.",
    longDescription: "Ongoing follow-ups through your patient portal. 30-day pharmacy refills.",
  },
  "escitalopram-mood": {
    name: "Escitalopram Tablets — 10–20 mg",
    tagline: "SSRI · mood & anxiety",
    description: "SSRI option for generalized anxiety and mood support.",
    longDescription: "Prescribed after mental health intake and medical history review.",
  },
  "buspirone-stress": {
    name: "Buspirone Tablets — Non-Controlled Anxiolytic",
    tagline: "Daily anxiety support",
    description: "Anti-anxiety medication without benzodiazepine dependence risk.",
    longDescription: "For patients seeking non-controlled anxiety support. Twice-daily oral dosing.",
  },
  "mental-health-intake": {
    name: "Mental Health Intake — Free Consultation",
    tagline: "Start treatment today",
    description: "Confidential intake with licensed provider review.",
    longDescription: "Gateway to medication management and ongoing telehealth psychiatric care.",
  },
  "wellbutrin-energy": {
    name: "Bupropion Tablets — NDRI",
    tagline: "Energizing antidepressant",
    description: "NDRI for depression with energizing profile. Also used for smoking cessation.",
    longDescription: "Prescribed after screening for seizure risk and drug interactions.",
  },

  // Hormone
  "thyroid-levothyroxine": {
    name: "Levothyroxine Tablets — Thyroid Replacement",
    tagline: "T4 hormone replacement",
    description: "Thyroid hormone replacement with TSH-guided dosing.",
    longDescription: "Dose adjustments based on lab results reviewed through your patient portal.",
  },
  "armour-thyroid": {
    name: "Desiccated Thyroid — Natural T3/T4",
    tagline: "NDT thyroid replacement",
    description: "Natural desiccated thyroid for patients preferring T3/T4 combination therapy.",
    longDescription: "Prescribed when clinically appropriate after comprehensive thyroid lab review.",
  },
  pregnenolone: {
    name: "Pregnenolone Capsules — Hormone Precursor",
    tagline: "Master hormone precursor",
    description: "Pregnenolone with clinician-guided dosing for hormone optimization.",
    longDescription: "Part of integrative hormone protocols. Dose adjusted based on symptoms and labs.",
  },
  "dhea-womens": {
    name: "DHEA Capsules — Women's Balance",
    tagline: "Adrenal hormone support",
    description: "DHEA for women with low DHEA-S on laboratory testing.",
    longDescription: "Monitored dosing as part of women's hormone optimization programs.",
  },
  "hormone-full-panel": {
    name: "Full Hormone Lab Panel",
    tagline: "Thyroid · sex hormones · adrenal",
    description: "Comprehensive hormone labs with provider interpretation.",
    longDescription: "Foundation for TRT, HRT, and thyroid treatment planning.",
  },

  // Services
  "physician-consultation": {
    name: "Physician Consultation — All Programs",
    tagline: "Free · no obligation",
    description: "Licensed telehealth consult to find the right treatment program.",
    longDescription: "Your clinician reviews goals and history, then recommends the appropriate protocol. Only charged if prescribed.",
  },
  "cold-chain-shipping": {
    name: "Priority Cold-Chain Shipping Upgrade",
    tagline: "Temperature-sensitive medications",
    description: "Priority cold-chain delivery for peptides, biologics, and injectables.",
    longDescription: "Ensures temperature integrity from compounding pharmacy to your door.",
  },
  "injection-supplies-kit": {
    name: "Injection Supplies Kit",
    tagline: "Syringes · swabs · sharps container",
    description: "Complete supply kit for injectable medication protocols.",
    longDescription: "Shipped with your first injectable order. Refills available through patient portal.",
  },
};

export function getCatalogCopy(slug: string): CatalogCopy | undefined {
  return CATALOG_COPY[slug];
}
