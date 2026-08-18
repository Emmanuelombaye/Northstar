import fs from "node:fs";
import path from "node:path";
import sharp from "sharp";

const srcBase = "C:/Users/Administrator/.cursor/projects/i-ceo-northstar/assets";
const outDir = "I:/ceo/northstar/public/images/home";
fs.mkdirSync(outDir, { recursive: true });

const jobs = [
  ["gen-home-hiw-provider.png", "faq-provider-review.png"],
  ["gen-home-hiw-intake.png", "faq-safety-eligibility.png"],
  ["gen-hiw-cold-chain.png", "faq-shipping-pharmacy.png"],
];

for (const [src, dest] of jobs) {
  const srcPath = path.join(srcBase, src);
  const outPath = path.join(outDir, dest);
  await sharp(srcPath).resize(720, 720, { fit: "cover" }).png({ compressionLevel: 9 }).toFile(outPath);
  console.log(`wrote ${dest}`);
}
