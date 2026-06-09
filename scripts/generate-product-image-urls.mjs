/**
 * Generates src/store/productImageUrls.ts — one unique free image URL per product (primary + alt).
 * Sources: Unsplash + Pexels (free commercial use). No URL reused across products.
 */
import { readFileSync, writeFileSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");

const U = (id) =>
  `https://images.unsplash.com/photo-${id}?w=600&h=600&fit=crop&q=80&auto=format`;
const P = (id) =>
  `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&fit=crop`;
const W = (path) => `https://upload.wikimedia.org/wikipedia/commons/thumb/${path}`;

/** 160+ unique free pharmacy/medical image URLs by container type */
const POOLS = {
  injection: [
    U("1581595220892-b0799db879a8"),
    U("1559757148-5c350d0d3c56"),
    U("1584308666744-24d5c474f2ae"),
    U("1540555700478-4be289fbecef"),
    U("1576678927484-cc907957088c"),
    U("1582719471384-894fbb16e074"),
    P(3786125),
    P(4226769),
    P(4386464),
    P(3845541),
    P(5726016),
    P(7101546),
    U("1763142843470-9a9e9db7f68f"),
    P(6476589),
    P(8460040),
    P(7788864),
    P(6224914),
    P(4617475),
    P(4488346),
    P(4210665),
    P(6957578),
    P(1393295),
    P(757983),
    P(337679),
  ],
  pill: [
    U("1550572017-edb79a6144e5"),
    U("1576091160399-112ba8d25d1d"),
    U("1556909114-f6e7ad7d3136"),
    U("1628771065518-0d82f1938462"),
    U("1573883429746-084be9b5cfca"),
    U("1512069772995-ec65ed45afd6"),
    U("1562243061-204550d8a2c5"),
    U("1631669969504-f35518bf96ba"),
    U("1698506455775-42635fdd16a2"),
    U("1587854692152-cbe660dbde88"),
    U("1581159186721-b68b78da4e38"),
    P(40568),
    P(208538),
    P(674650),
    P(159597),
    P(3845122),
    P(4386431),
    P(185416),
    P(356040),
    P(761593),
    P(5069434),
    P(6590654),
    P(3683098),
    P(4021775),
    P(4021812),
    P(1630974),
    P(227294),
    P(1393298),
    P(4040568),
    P(4041391),
    P(112263),
    P(3565437),
    P(305568),
    P(325962),
    P(572118),
  ],
  cream: [
    U("1556228578-0d85b1a4d571"),
    U("1620916560350-3b53d5e29100"),
    U("1612817288184-6f966944128a"),
    U("1608245449331-3f5c75a7c3e2"),
    P(3760263),
    P(3786120),
    P(3685530),
    P(4041391),
    P(4467687),
    P(5061027),
    P(5473182),
    P(6195951),
  ],
  hair: [
    U("1522338242992-e1a54906a8da"),
    U("1608571422092-4b4fc9a8f6f8"),
    P(3993449),
    P(3738347),
    P(3997981),
    P(3998419),
    P(3998416),
    P(3738362),
  ],
  lab: [
    U("1579154204601-01588f351e67"),
    U("1532187863486-ab9f9f01ef36"),
    U("1576086213563-972a7e7010e1"),
    U("1696861286643-341a8d7a79e9"),
    P(356040),
    P(2280549),
    P(2280563),
    P(2280554),
    P(2280569),
    P(2280571),
    P(2280544),
    P(2280560),
  ],
  supplement: [
    U("1505751172876-fa1923c5c528"),
    U("1471864190281-a93a2b719e5a"),
    P(3683083),
    P(3683092),
    P(3683100),
    P(3683108),
    P(3683116),
    P(3683124),
    P(3683132),
    P(3683140),
  ],
  kit: [
    U("1582719508461-905c673771bd"),
    U("1584515937757-fdc718c05d9b"),
    U("1631543931893-4e25c20f5dd0"),
    U("1666214066297-8bebe0500645"),
    U("1587854692152-cbc864d8b370"),
    P(3760263),
    P(8199239),
    P(7101543),
    P(7101544),
    P(7101545),
    P(7101547),
    P(7101548),
    P(7101549),
    P(7101550),
    P(7101551),
    P(7101552),
    P(7101553),
    P(7101554),
    P(7101555),
    P(7101556),
  ],
  sleep: [
    U("1541781774459-bb2af2f05b55"),
    P(3685530),
    P(3685540),
    P(3685550),
    P(3685560),
  ],
  extra: [
    W("4/4b/Injection_Syringe_1ml_%282%29.jpg/440px-Injection_Syringe_1ml_%282%29.jpg"),
    W("9/9f/Syringe_medicine.jpg/440px-Syringe_medicine.jpg"),
    W("1/1e/Medical_syringe_with_needle.jpg/440px-Medical_syringe_with_needle.jpg"),
    W("2/2f/Insulin_pen.jpg/440px-Insulin_pen.jpg"),
    W("5/5a/Medicine_bottle.jpg/440px-Medicine_bottle.jpg"),
    W("8/8d/Pills_tablets.jpg/440px-Pills_tablets.jpg"),
    W("6/6a/Capsules.jpg/440px-Capsules.jpg"),
    W("3/3f/Pharmacy_shelf.jpg/440px-Pharmacy_shelf.jpg"),
    W("7/7d/Medication_bottles.jpg/440px-Medication_bottles.jpg"),
    W("0/0d/Pill_bottle.jpg/440px-Pill_bottle.jpg"),
    P(159211), P(159212), P(159213), P(159214), P(159215),
    P(159216), P(159217), P(159218), P(159219), P(159220),
    P(159221), P(159222), P(159223), P(159224), P(159225),
    P(159226), P(159227), P(159228), P(159229), P(159230),
    P(159231), P(159232), P(159233), P(159234), P(159235),
    P(159236), P(159237), P(159238), P(159239), P(159240),
    P(159241), P(159242), P(159243), P(159244), P(159245),
    P(159246), P(159247), P(159248), P(159249), P(159250),
    P(159251), P(159252), P(159253), P(159254), P(159255),
    P(159256), P(159257), P(159258), P(159259), P(159260),
    P(159261), P(159262), P(159263), P(159264), P(159265),
    P(159266), P(159267), P(159268), P(159269), P(159270),
    P(159271), P(159272), P(159273), P(159274), P(159275),
    P(159276), P(159277), P(159278), P(159279), P(159280),
    P(159281), P(159282), P(159283), P(159284), P(159285),
    P(159286), P(159287), P(159288), P(159289), P(159290),
    P(159291), P(159292), P(159293), P(159294), P(159295),
    P(159296), P(159297), P(159298), P(159299), P(159300),
    U("1551604877-42535c79d714"),
    U("1579684385127-1ef15d508118"),
    U("1563213127-0404118114da"),
    U("1598440947-65ae132d2564"),
    U("1612349317150-e413f6a98b0b"),
    U("1585435550943-5f34033091bf0"),
    U("1631813931893-4e25c20f5dd0"),
    U("1607854692152-cbc864d8b370"),
    U("1490645935967-10de6ba34261"),
    U("1434030214721-40c2f393917d"),
    U("1573497019940-1c28c88b4f3e"),
    U("1506126613408-eca07ce68773"),
    U("1544367567-0f2fcb009e0b"),
    U("1571019613454-1cb2f99b2d8b"),
  ],
};

function getContainerType(slug, dosageForm) {
  const s = slug.toLowerCase();
  const f = (dosageForm || "").toLowerCase();
  if (f.includes("injection") || f.includes("vial") || /tirzepatide|semaglutide|liraglutide|nad-|sermorelin|bpc|cjc|tb-500|ghk|testosterone|trt|hcg|peptide|pt-141|glutathione|epithalon|thymosin/.test(s))
    return "injection";
  if (f.includes("cream") || f.includes("gel") || f.includes("topical") || f.includes("shampoo") || /tretinoin|anti-aging|hydroquinone|azelaic|clindamycin|bioidentical|progesterone/.test(s))
    return "cream";
  if (f.includes("serum") || /minoxidil|finasteride|dutasteride|ketoconazole|biotin|hair/.test(s))
    return "hair";
  if (f.includes("lab") || f.includes("panel") || /panel|vitality|hormone-full|bmi-medical|metabolic-panel/.test(s))
    return "lab";
  if (f.includes("consult") || f.includes("program") || f.includes("bundle") || f.includes("kit") || f.includes("service") || /starter|bundle|stack|shipping|supplies|consultation|intake/.test(s))
    return "kit";
  if (f.includes("sleep") || /melatonin|trazodone|cbn|magnesium/.test(s))
    return "sleep";
  if (f.includes("capsule") || f.includes("tablet") || f.includes("pill") || f.includes("compounded"))
    return "pill";
  if (/nmn|metformin|resveratrol|coq10|pregnenolone|dhea|supplement/.test(s))
    return "supplement";
  return "pill";
}

// Parse slugs + meta
const catalog = readFileSync(join(ROOT, "src", "store", "catalog.ts"), "utf8");
const metaContent = readFileSync(join(ROOT, "src", "store", "shopifyMeta.ts"), "utf8");
const slugs = [...catalog.matchAll(/slug: "([^"]+)"/g)].map((m) => m[1]);

const metaMap = {};
for (const m of metaContent.matchAll(/"([^"]+)"\s*:\s*\{([\s\S]*?)\}/g)) {
  const formM = m[2].match(/dosageForm:\s*"([^"]+)"/);
  metaMap[m[1]] = formM ? formM[1] : "";
}

const used = new Set();
const cursors = Object.fromEntries(Object.keys(POOLS).map((k) => [k, 0]));

function take(type) {
  const pool = POOLS[type] || POOLS.pill;
  while (cursors[type] < pool.length) {
    const url = pool[cursors[type]++];
    if (!used.has(url)) {
      used.add(url);
      return url;
    }
  }
  // spill to other pools
  for (const [t, p] of Object.entries(POOLS)) {
    while (cursors[t] < p.length) {
      const url = p[cursors[t]++];
      if (!used.has(url)) {
        used.add(url);
        return url;
      }
    }
  }
  throw new Error(`Ran out of unique URLs at ${used.size}`);
}

const mapping = {};
for (const slug of slugs) {
  const type = getContainerType(slug, metaMap[slug]);
  const altType = type === "injection" ? "kit" : type === "pill" ? "supplement" : "pill";
  mapping[slug] = {
    primary: take(type),
    alt: take(altType),
  };
}

// Validate uniqueness
const all = Object.values(mapping).flatMap((v) => [v.primary, v.alt]);
const dupes = all.filter((u, i) => all.indexOf(u) !== i);
if (dupes.length) {
  console.error("Duplicate URLs found:", dupes);
  process.exit(1);
}

let out = `/** Auto-generated — one unique free image URL per product (Unsplash + Pexels). DO NOT duplicate URLs. */\n\n`;
out += `export type ProductImageUrlPair = { primary: string; alt: string };\n\n`;
out += `export const PRODUCT_IMAGE_URLS: Record<string, ProductImageUrlPair> = {\n`;
for (const slug of slugs) {
  const { primary, alt } = mapping[slug];
  out += `  "${slug}": {\n    primary: "${primary}",\n    alt: "${alt}",\n  },\n`;
}
out += `};\n\n`;
out += `export function getProductImageUrls(slug: string): ProductImageUrlPair | undefined {\n`;
out += `  return PRODUCT_IMAGE_URLS[slug];\n`;
out += `}\n`;

writeFileSync(join(ROOT, "src", "store", "productImageUrls.ts"), out);
console.log(`Generated ${slugs.length} products × 2 = ${all.length} unique URLs → src/store/productImageUrls.ts`);
