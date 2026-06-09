/**
 * Generates labeled North Star pharmacy mockups (vial / bottle / cream / kit) per product slug.
 * No external stock photos — every image shows the correct product name and dosage form.
 */
import { readFileSync, mkdirSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, "..");
const PRODUCTS = join(ROOT, "public", "images", "products");

const CATEGORY_MAP = {
  wl: "weight-loss",
  lg: "longevity",
  rc: "recovery",
  mh: "mens-health",
  wh: "womens-health",
  hr: "hair",
  sk: "skincare",
  sw: "sexual-wellness",
  sl: "sleep",
  mn: "mental-health",
  ho: "hormone"
};

const COLOR_MAP = {
  "weight-loss": "#C5A059",      // Gold
  "longevity": "#0A1F3D",        // Navy
  "recovery": "#10B981",         // Emerald green
  "mens-health": "#2563EB",      // Royal blue
  "womens-health": "#EC4899",    // Rose pink
  "hair": "#8B5CF6",             // Violet purple
  "skincare": "#F59E0B",         // Amber orange
  "sexual-wellness": "#EF4444",  // Red
  "sleep": "#3B82F6",            // Indigo blue
  "mental-health": "#6366F1",    // Indigo/Purple
  "hormone": "#06B6D4"           // Cyan
};

const BG_COLOR_MAP = {
  "weight-loss": "#FAF8F5",      // Creamy soft gold
  "longevity": "#F4F7FA",        // Light blue-grey
  "recovery": "#F2FAF6",         // Light green tint
  "mens-health": "#F0F4FF",      // Light blue tint
  "womens-health": "#FFF5F9",    // Light pink tint
  "hair": "#F8F5FF",             // Light purple tint
  "skincare": "#FFF9F0",         // Light amber tint
  "sexual-wellness": "#FFF5F5",  // Light red tint
  "sleep": "#F0F6FF",            // Light blue tint
  "mental-health": "#F5F6FF",    // Light indigo tint
  "hormone": "#EDFAFD"           // Light cyan tint
};

function getContainerType(category, slug, dosageForm) {
  const s = slug.toLowerCase();
  const f = (dosageForm || "").toLowerCase();
  
  if (f.includes("bundle") || f.includes("kit") || f.includes("program") || f.includes("panel") || f.includes("consult") || f.includes("service") || s.includes("stack") || s.includes("starter") || s.includes("bundle") || s.includes("shipping") || s.includes("supplies") || s.includes("consultation") || s.includes("intake") || s.includes("panel")) {
    return "box";
  }
  if (f.includes("injection") || f.includes("vial") || s.includes("semaglutide") || s.includes("tirzepatide") || s.includes("liraglutide") || s.includes("nad-") || s.includes("sermorelin") || s.includes("bpc") || s.includes("cjc") || s.includes("tb-500") || s.includes("ghk-cu") || s.includes("testosterone") || s.includes("trt") || s.includes("hcg") || s.includes("peptide") || s.includes("pregnenolone")) {
    return "vial";
  }
  if (f.includes("cream") || f.includes("gel") || f.includes("topical") || s.includes("tretinoin") || s.includes("anti-aging") || s.includes("hydroquinone") || s.includes("azelaic") || s.includes("clindamycin") || s.includes("cream") || s.includes("gel")) {
    return "cream";
  }
  if (f.includes("dropper") || f.includes("serum") || s.includes("minoxidil") || s.includes("finasteride") || s.includes("hair-treatment") || s.includes("hair-care") || s.includes("biotin")) {
    return "dropper";
  }
  if (f.includes("tablet") || f.includes("capsule") || f.includes("pill") || s.includes("sertraline") || s.includes("escitalopram") || s.includes("buspirone") || s.includes("tadalafil") || s.includes("sildenafil") || s.includes("trazodone") || s.includes("melatonin") || s.includes("sleep") || s.includes("cbn") || s.includes("metformin") || s.includes("resveratrol") || s.includes("nmn") || s.includes("armour") || s.includes("levothyroxine") || s.includes("dhea") || s.includes("cialis") || s.includes("prostate")) {
    return "bottle";
  }
  return "box";
}

function generateSvgMockup(productName, dosageStrength, dosageForm, category, slug, isAlt) {
  const catColor = COLOR_MAP[category] || "#C5A059";
  const bgStart = BG_COLOR_MAP[category] || "#F8FAFC";
  const type = getContainerType(category, slug, dosageForm);
  
  // Title font size adaptation
  let fontSize = 18;
  if (productName.length > 25) fontSize = 16;
  if (productName.length > 32) fontSize = 14;

  let containerSvg = "";

  if (type === "vial") {
    const capColor = isAlt ? "#F59E0B" : "#94A3B8";
    const capLines = isAlt ? "#D97706" : "#CBD5E1";
    containerSvg = `
    <ellipse cx="300" cy="435" rx="80" ry="10" fill="url(#shadowGrad)" />
    <rect x="270" y="170" width="60" height="15" rx="2" fill="#94A3B8" />
    <rect x="280" y="185" width="40" height="15" fill="#475569" />
    <rect x="265" y="150" width="70" height="20" rx="3" fill="${capColor}" stroke="${capLines}" stroke-width="1" />
    <path d="M275 150 L275 170 M285 150 L285 170 M295 150 L295 170 M305 150 L305 170 M315 150 L315 170 M325 150 L325 170" stroke="${capLines}" stroke-width="1" />
    <rect x="240" y="200" width="120" height="220" rx="25" fill="url(#glassGrad)" stroke="#E2E8F0" stroke-width="1.5" />
    <rect x="246" y="290" width="108" height="120" rx="15" fill="${catColor}" opacity="0.35" />
    <rect x="243" y="225" width="114" height="100" fill="#FFFFFF" rx="2" />
    <rect x="243" y="232" width="114" height="6" fill="${catColor}" />
    <text x="300" y="252" font-family="Arial, sans-serif" font-size="9" font-weight="800" fill="#0A1F3D" text-anchor="middle">NORTH STAR</text>
    <text x="300" y="278" font-family="Arial, sans-serif" font-size="8" font-weight="700" fill="#0A1F3D" text-anchor="middle">${productName.substring(0, 15)}</text>
    <text x="300" y="292" font-family="Arial, sans-serif" font-size="7" font-weight="600" fill="#6B7280" text-anchor="middle">${dosageStrength.substring(0, 20)}</text>
    <rect x="285" y="302" width="30" height="12" rx="2" fill="#0A1F3D" />
    <text x="300" y="311" font-family="Arial, sans-serif" font-size="7" font-weight="800" fill="#C5A059" text-anchor="middle">Rx</text>
    <path d="M240 220 C265 220, 265 380, 240 410 L240 220" fill="url(#glare)" opacity="0.5" />
    `;
  } else if (type === "cream") {
    const collarColor = isAlt ? "#F59E0B" : "#CBD5E1";
    containerSvg = `
    <ellipse cx="300" cy="435" rx="85" ry="10" fill="url(#shadowGrad)" />
    <path d="M 285 160 Q 285 130 300 130 Q 320 130 320 150 L 320 160 Z" fill="#E2E8F0" stroke="#CBD5E1" />
    <path d="M 310 130 L 330 135 L 330 145 L 310 140 Z" fill="#E2E8F0" />
    <rect x="260" y="160" width="80" height="20" fill="${collarColor}" />
    <rect x="225" y="180" width="150" height="245" rx="20" fill="#F8FAFC" stroke="#E2E8F0" stroke-width="1.5" />
    <rect x="230" y="210" width="140" height="160" fill="#FFFFFF" rx="2" stroke="#F1F5F9" />
    <rect x="230" y="218" width="140" height="6" fill="${catColor}" />
    <text x="300" y="245" font-family="Arial, sans-serif" font-size="11" font-weight="800" fill="#0A1F3D" text-anchor="middle">NORTH STAR</text>
    <text x="300" y="260" font-family="Arial, sans-serif" font-size="8" font-weight="700" fill="#64748B" text-anchor="middle" letter-spacing="1">MD PHARMACY</text>
    <text x="300" y="295" font-family="Arial, sans-serif" font-size="11" font-weight="800" fill="#0A1F3D" text-anchor="middle">${productName.substring(0, 18)}</text>
    <text x="300" y="315" font-family="Arial, sans-serif" font-size="8" font-weight="600" fill="#10B981" text-anchor="middle">${dosageStrength.substring(0, 20)}</text>
    <circle cx="300" cy="342" r="10" fill="#0A1F3D" />
    <text x="300" y="345" font-family="Arial, sans-serif" font-size="7" font-weight="800" fill="#C5A059" text-anchor="middle">Rx</text>
    <path d="M225 200 C245 200, 245 380, 225 405 L225 200" fill="url(#glare)" opacity="0.4" />
    `;
  } else if (type === "dropper") {
    const bottleGrad = isAlt ? "url(#frostedGrad)" : "url(#amberGrad)";
    const bottleStroke = isAlt ? "#CBD5E1" : "#78350F";
    containerSvg = `
    <ellipse cx="300" cy="435" rx="80" ry="10" fill="url(#shadowGrad)" />
    <path d="M280 135 C280 115 320 115 320 135 L315 155 L285 155 Z" fill="#1E293B" />
    <rect x="270" y="155" width="60" height="20" fill="url(#capGrad)" stroke="#94A3B8" />
    <line x1="280" y1="155" x2="280" y2="175" stroke="#94A3B8" />
    <line x1="290" y1="155" x2="290" y2="175" stroke="#94A3B8" />
    <line x1="300" y1="155" x2="300" y2="175" stroke="#94A3B8" />
    <line x1="310" y1="155" x2="310" y2="175" stroke="#94A3B8" />
    <line x1="320" y1="155" x2="320" y2="175" stroke="#94A3B8" />
    <rect x="235" y="175" width="130" height="250" rx="20" fill="${bottleGrad}" stroke="${bottleStroke}" stroke-width="1.5" />
    <rect x="240" y="210" width="120" height="150" fill="#FFFFFF" rx="2" />
    <rect x="240" y="218" width="120" height="6" fill="${catColor}" />
    <text x="300" y="242" font-family="Arial, sans-serif" font-size="10" font-weight="800" fill="#0A1F3D" text-anchor="middle">NORTH STAR</text>
    <text x="300" y="256" font-family="Arial, sans-serif" font-size="7" font-weight="700" fill="#64748B" text-anchor="middle" letter-spacing="1">MD PHARMACY</text>
    <text x="300" y="290" font-family="Arial, sans-serif" font-size="11" font-weight="800" fill="#0A1F3D" text-anchor="middle">${productName.substring(0, 16)}</text>
    <text x="300" y="310" font-family="Arial, sans-serif" font-size="8" font-weight="600" fill="#8B5CF6" text-anchor="middle">${dosageStrength.substring(0, 20)}</text>
    <rect x="265" y="325" width="70" height="16" rx="2" fill="#0A1F3D" />
    <text x="300" y="336" font-family="Arial, sans-serif" font-size="8" font-weight="800" fill="#C5A059" text-anchor="middle">Rx Topical</text>
    <path d="M235 195 C255 195, 255 380, 235 410 L235 195" fill="url(#glare)" opacity="0.5" />
    `;
  } else if (type === "bottle") {
    const bottleGrad = isAlt ? "url(#amberGrad)" : "url(#cobaltGrad)";
    const bottleStroke = isAlt ? "#78350F" : "#1E3A8A";
    containerSvg = `
    <ellipse cx="300" cy="435" rx="90" ry="12" fill="url(#shadowGrad)" />
    <rect x="235" y="150" width="130" height="28" rx="4" fill="url(#capGrad)" stroke="#94A3B8" stroke-width="1" />
    <path d="M245 153 L245 175 M255 153 L255 175 M265 153 L265 175 M275 153 L275 175 M285 153 L285 175 M295 153 L295 175 M305 153 L305 175 M315 153 L315 175 M325 153 L325 175 M335 153 L335 175 M345 153 L345 175 M355 153 L355 175" stroke="#CBD5E1" stroke-width="2" />
    <rect x="240" y="178" width="120" height="8" fill="#CBD5E1" />
    <rect x="215" y="186" width="170" height="240" rx="18" fill="${bottleGrad}" stroke="${bottleStroke}" stroke-width="1" />
    <rect x="220" y="215" width="160" height="150" fill="#FFFFFF" rx="2" />
    <rect x="220" y="222" width="160" height="8" fill="${catColor}" />
    <text x="300" y="250" font-family="Arial, sans-serif" font-size="14" font-weight="800" fill="#0A1F3D" text-anchor="middle">NORTH STAR</text>
    <text x="300" y="266" font-family="Arial, sans-serif" font-size="10" font-weight="700" fill="#64748B" text-anchor="middle" letter-spacing="1">MD PHARMACY</text>
    <text x="300" y="300" font-family="Arial, sans-serif" font-size="13" font-weight="800" fill="#0A1F3D" text-anchor="middle">${productName.substring(0, 20)}</text>
    <text x="300" y="318" font-family="Arial, sans-serif" font-size="9" font-weight="600" fill="#EF4444" text-anchor="middle">Rx Only · ${dosageStrength.substring(0, 20)}</text>
    <rect x="250" y="330" width="100" height="18" rx="2" fill="#F1F5F9" />
    <text x="300" y="342" font-family="Arial, sans-serif" font-size="8" font-weight="700" fill="#475569" text-anchor="middle">30 COUNT</text>
    <path d="M215 210 C240 210, 240 380, 215 410 L215 210" fill="url(#glare)" opacity="0.5" />
    `;
  } else {
    // box / kit
    const boxFill = isAlt ? "#0A1F3D" : "#FFFFFF";
    const boxBorder = isAlt ? "#0F172A" : "#E2E8F0";
    const textFill = isAlt ? "#FFFFFF" : "#0A1F3D";
    const labelBg = isAlt ? "#1E293B" : "#F8FAFC";
    containerSvg = `
    <ellipse cx="300" cy="435" rx="110" ry="12" fill="url(#shadowGrad)" />
    <rect x="180" y="160" width="240" height="260" rx="12" fill="${boxFill}" stroke="${boxBorder}" stroke-width="2" />
    <rect x="180" y="200" width="240" height="24" fill="${catColor}" />
    <text x="300" y="216" font-family="Arial, sans-serif" font-size="10" font-weight="800" fill="#FFFFFF" text-anchor="middle" letter-spacing="2">NORTH STAR HEALTH</text>
    <rect x="200" y="240" width="200" height="140" fill="${labelBg}" rx="6" stroke="${isAlt ? "#334155" : "#E2E8F0"}" />
    <text x="300" y="270" font-family="Arial, sans-serif" font-size="11" font-weight="800" fill="${textFill}" text-anchor="middle">CLINICAL TREATMENT KIT</text>
    <line x1="220" y1="285" x2="380" y2="285" stroke="${catColor}" stroke-width="1.5" />
    <text x="300" y="315" font-family="Arial, sans-serif" font-size="12" font-weight="800" fill="${textFill}" text-anchor="middle">${productName.substring(0, 22)}</text>
    <text x="300" y="335" font-family="Arial, sans-serif" font-size="9" font-weight="600" fill="#6B7280" text-anchor="middle">${dosageStrength.substring(0, 25)}</text>
    <rect x="285" y="350" width="30" height="15" rx="3" fill="#0A1F3D" />
    <text x="300" y="361" font-family="Arial, sans-serif" font-size="8" font-weight="800" fill="#C5A059" text-anchor="middle">Rx</text>
    <path d="M180 180 C230 180, 230 380, 180 410 L180 180" fill="url(#glare)" opacity="0.3" />
    `;
  }

  return `
<svg width="600" height="600" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <radialGradient id="bgGrad" cx="50%" cy="30%" r="80%">
      <stop offset="0%" stop-color="${bgStart}" />
      <stop offset="100%" stop-color="#E2E8F0" />
    </radialGradient>
    <radialGradient id="shadowGrad" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#000000" stop-opacity="0.12" />
      <stop offset="100%" stop-color="#000000" stop-opacity="0" />
    </radialGradient>
    <linearGradient id="cobaltGrad" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#1E3A8A" stop-opacity="0.9" />
      <stop offset="30%" stop-color="#3B82F6" stop-opacity="0.8" />
      <stop offset="70%" stop-color="#1D4ED8" stop-opacity="0.9" />
      <stop offset="100%" stop-color="#172554" stop-opacity="0.95" />
    </linearGradient>
    <linearGradient id="amberGrad" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#78350F" stop-opacity="0.95" />
      <stop offset="30%" stop-color="#D97706" stop-opacity="0.85" />
      <stop offset="70%" stop-color="#B45309" stop-opacity="0.9" />
      <stop offset="100%" stop-color="#451A03" stop-opacity="0.98" />
    </linearGradient>
    <linearGradient id="glassGrad" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#F1F5F9" stop-opacity="0.7" />
      <stop offset="40%" stop-color="#FFFFFF" stop-opacity="0.4" />
      <stop offset="70%" stop-color="#E2E8F0" stop-opacity="0.6" />
      <stop offset="100%" stop-color="#CBD5E1" stop-opacity="0.8" />
    </linearGradient>
    <linearGradient id="frostedGrad" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#F8FAFC" stop-opacity="0.9" />
      <stop offset="40%" stop-color="#FFFFFF" stop-opacity="0.7" />
      <stop offset="100%" stop-color="#E2E8F0" stop-opacity="0.9" />
    </linearGradient>
    <linearGradient id="capGrad" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#E2E8F0" />
      <stop offset="50%" stop-color="#FFFFFF" />
      <stop offset="100%" stop-color="#CBD5E1" />
    </linearGradient>
    <linearGradient id="glare" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#FFFFFF" stop-opacity="0.45" />
      <stop offset="30%" stop-color="#FFFFFF" stop-opacity="0.1" />
      <stop offset="100%" stop-color="#FFFFFF" stop-opacity="0" />
    </linearGradient>
  </defs>

  <rect width="600" height="600" fill="url(#bgGrad)" />
  ${containerSvg}

  <rect x="20" y="470" width="560" height="110" rx="12" fill="white" opacity="0.95" />
  <path d="M 45 493 L 47 501 L 55 503 L 47 505 L 45 513 L 43 505 L 35 503 L 43 501 Z" fill="#0A1F3D" />
  <text x="62" y="502" font-family="Arial, sans-serif" font-size="10" font-weight="800" letter-spacing="1" fill="#C5A059">NORTH STAR MD PHARMACY</text>
  <text x="45" y="532" font-family="Arial, sans-serif" font-size="${fontSize}" font-weight="700" fill="#0A1F3D">${productName}</text>
  <text x="45" y="556" font-family="Arial, sans-serif" font-size="11" font-weight="500" fill="#6B7280">${dosageStrength}</text>
  <rect x="510" y="490" width="36" height="18" rx="4" fill="#0A1F3D" />
  <text x="528" y="502" font-family="Arial, sans-serif" font-size="9" font-weight="800" fill="#C5A059" text-anchor="middle">Rx</text>
  <rect x="20" y="574" width="560" height="6" rx="2" fill="${catColor}" />
</svg>
`;
}

async function writeMockup(destPath, productName, dosageStrength, dosageForm, category, slug, isAlt) {
  const svg = generateSvgMockup(productName, dosageStrength, dosageForm, category, slug, isAlt);
  await sharp(Buffer.from(svg)).jpeg({ quality: 90 }).toFile(destPath);
}

async function main() {
  mkdirSync(PRODUCTS, { recursive: true });

  // 1. Parse products from catalog.ts
  const catalogContent = readFileSync(join(ROOT, "src", "store", "catalog.ts"), "utf8");
  const itemRegex = /item\({([\s\S]*?)\}\)/g;
  const products = [];
  let match;
  while ((match = itemRegex.exec(catalogContent)) !== null) {
    const block = match[1];
    const slugMatch = block.match(/slug:\s*"([^"]+)"/);
    const categoryMatch = block.match(/category:\s*(?:([a-zA-Z0-9_]+)|"([^"]+)")/);
    if (slugMatch) {
      const catVar = categoryMatch ? (categoryMatch[1] || categoryMatch[2]) : "";
      const category = CATEGORY_MAP[catVar] || catVar;
      products.push({
        slug: slugMatch[1],
        category
      });
    }
  }

  // 2. Parse copies from catalogCopy.ts
  const copyContent = readFileSync(join(ROOT, "src", "store", "catalogCopy.ts"), "utf8");
  const copyMap = {};
  const copyMatches = copyContent.matchAll(/"([^"]+)"\s*:\s*\{([\s\S]*?)\}/g);
  for (const m of copyMatches) {
    const slug = m[1];
    const block = m[2];
    const nameM = block.match(/name:\s*"([^"]+)"/);
    copyMap[slug] = {
      name: nameM ? nameM[1] : ""
    };
  }

  // 3. Parse meta from shopifyMeta.ts
  const metaContent = readFileSync(join(ROOT, "src", "store", "shopifyMeta.ts"), "utf8");
  const metaMap = {};
  const metaMatches = metaContent.matchAll(/"([^"]+)"\s*:\s*\{([\s\S]*?)\}/g);
  for (const m of metaMatches) {
    const slug = m[1];
    const block = m[2];
    const formM = block.match(/dosageForm:\s*"([^"]+)"/);
    const strengthM = block.match(/strength:\s*"([^"]+)"/);
    metaMap[slug] = {
      dosageForm: formM ? formM[1] : "",
      strength: strengthM ? strengthM[1] : ""
    };
  }

  console.log(`Generating labeled pharmacy mockups for ${products.length} products...`);

  for (const p of products) {
    const copy = copyMap[p.slug] || {};
    const meta = metaMap[p.slug] || {};

    const rawName = copy.name || p.slug;
    const parts = rawName.split(/ — | - | – /);
    const productName = parts[0].trim();
    const subtitle = parts[1] || "";

    const dosageForm = meta.dosageForm || "Rx";
    const strength = meta.strength || subtitle || "";
    const dosageStrength = strength ? `${dosageForm} · ${strength}` : dosageForm;
    const containerType = getContainerType(p.category, p.slug, dosageForm);

    console.log(`[${p.slug}] ${containerType} mockup`);
    await writeMockup(
      join(PRODUCTS, `${p.slug}.jpg`),
      productName,
      dosageStrength,
      dosageForm,
      p.category,
      p.slug,
      false,
    );
    await writeMockup(
      join(PRODUCTS, `${p.slug}-alt.jpg`),
      productName,
      dosageStrength,
      dosageForm,
      p.category,
      p.slug,
      true,
    );
  }

  console.log(`\nDone — ${products.length * 2} images in public/images/products/`);
}

main().catch(err => {
  console.error("Fatal error during image processing:", err);
  process.exit(1);
});
