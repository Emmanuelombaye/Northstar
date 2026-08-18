import fs from 'fs'
import path from 'path'
import sharp from 'sharp'

const ASSETS = 'C:/Users/Administrator/.cursor/projects/i-ceo-northstar/assets'
const ROOT = 'I:/ceo/northstar/public/images'
const HIW = `${ROOT}/ns/hiw`
const NS_IMG = `${ROOT}/ns`
const HOME = `${ROOT}/home`
const PREVIEW = 'I:/ceo/northstar/.tmp-img-preview'

async function avif(src, dest, width) {
  await sharp(src)
    .resize({ width, withoutEnlargement: true })
    .avif({ quality: 66 })
    .toFile(dest)
  const st = fs.statSync(dest)
  console.log('avif', path.basename(dest), st.size)
}

function labelSvg(width, height, title, sub) {
  const lx = Math.round(width * 0.31)
  const ly = Math.round(height * 0.34)
  const lw = Math.round(width * 0.38)
  const lh = Math.round(height * 0.32)
  const cx = lx + lw / 2
  const titleY = ly + lh * 0.48
  const subY = ly + lh * 0.68
  return Buffer.from(`<svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
    <rect x="${lx}" y="${ly}" width="${lw}" height="${lh}" rx="${Math.round(lw * 0.06)}" fill="#f4f1ea"/>
    <text x="${cx}" y="${titleY}" text-anchor="middle" font-family="Arial, Helvetica, sans-serif" font-size="${Math.round(lw * 0.11)}" font-weight="700" fill="#0a1f3d">${title}</text>
    <text x="${cx}" y="${subY}" text-anchor="middle" font-family="Arial, Helvetica, sans-serif" font-size="${Math.round(lw * 0.055)}" fill="#6b7280">${sub}</text>
  </svg>`)
}

async function relabelVial(src, destPng, destAvif, title, sub) {
  const img = sharp(src)
  const meta = await img.metadata()
  const width = meta.width ?? 1024
  const height = meta.height ?? 1536
  const labeled = await sharp(src)
    .composite([{ input: labelSvg(width, height, title, sub), blend: 'over' }])
    .png()
    .toBuffer()
  await sharp(labeled).png().toFile(destPng)
  await sharp(labeled).resize({ width: 900, withoutEnlargement: true }).avif({ quality: 68 }).toFile(destAvif)
  console.log('vial', title, fs.statSync(destPng).size, fs.statSync(destAvif).size)
}

const photos = [
  ['hiw-licensed-provider.png', `${HIW}/Licensed-Providers.avif`, 1000],
  ['hiw-medical-review.png', `${HIW}/medical-review-licensed-provider-yucca-health.avif`, 1200],
  ['hiw-pharmacy.png', `${HIW}/quality-sourcing-verified-compounded-medications-yucca-health.avif`, 1400],
  ['hiw-home-delivery.png', `${HIW}/home-delivery.avif`, 1200],
  ['hiw-guidance.png', `${HIW}/1_1-Guidance-throughout-treatment.avif`, 1200],
  ['hiw-intake.png', `${HIW}/Get-Started.avif`, 1200],
  ['hiw-intake.png', `${HIW}/Provider-reviews-intake_2.avif`, 1200],
  ['hiw-coldchain.png', `${HIW}/Receive-your-medication_3.avif`, 1200],
]

for (const [file, dest, width] of photos) {
  await avif(path.join(ASSETS, file), dest, width)
}

const nologoPair = path.join(PREVIEW, 'Personalized-GLP-1-Injections-nologo.png')
const nologoPlan = path.join(PREVIEW, 'Treatment-Plan-nologo.png')
if (fs.existsSync(nologoPair)) {
  await avif(nologoPair, `${NS_IMG}/Personalized-GLP-1-Injections.avif`, 1100)
}
if (fs.existsSync(nologoPlan)) {
  await avif(nologoPlan, `${HIW}/Treatment-Plan.avif`, 1100)
}

await relabelVial(
  path.join(ASSETS, 'vial-sema-blank.png'),
  `${HOME}/home-vial-sema.png`,
  `${NS_IMG}/personalized-semaglutide-glp-1-injection-vial-yucca-health.avif`,
  'SEMAGLUTIDE',
  'GLP-1  ·  Rx Only',
)

await relabelVial(
  path.join(ASSETS, 'vial-tirz-blank.png'),
  `${HOME}/home-vial-tirz.png`,
  `${NS_IMG}/personalized-tirzepatide-glp-1-injection-vial-yucca-health.avif`,
  'TIRZEPATIDE',
  'GLP-1 + GIP  ·  Rx Only',
)

console.log('done')
