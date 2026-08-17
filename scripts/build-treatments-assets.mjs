import fs from 'fs'
import path from 'path'
import sharp from 'sharp'

const ASSETS = 'C:/Users/Administrator/.cursor/projects/i-ceo-northstar/assets'
const OUT = 'I:/ceo/northstar/public/images/treatments'

fs.mkdirSync(OUT, { recursive: true })

function labelSvg(width, height, title, sub) {
  const lx = Math.round(width * 0.28)
  const ly = Math.round(height * 0.32)
  const lw = Math.round(width * 0.44)
  const lh = Math.round(height * 0.36)
  const cx = lx + lw / 2
  return Buffer.from(`<svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
    <rect x="${lx}" y="${ly}" width="${lw}" height="${lh}" rx="${Math.round(lw * 0.05)}" fill="#faf8f4"/>
    <rect x="${lx}" y="${ly}" width="${lw}" height="4" fill="#c5a059"/>
    <text x="${cx}" y="${ly + lh * 0.46}" text-anchor="middle" font-family="Georgia, serif" font-size="${Math.round(lw * 0.09)}" font-weight="700" fill="#0a1f3d">${title}</text>
    <text x="${cx}" y="${ly + lh * 0.66}" text-anchor="middle" font-family="Arial, sans-serif" font-size="${Math.round(lw * 0.052)}" fill="#6b7280">${sub}</text>
  </svg>`)
}

async function toAvif(src, dest, width, brighten = false) {
  let img = sharp(src)
  if (brighten) {
    img = img.modulate({ brightness: 1.06, saturation: 1.04 })
  }
  await img.resize({ width, withoutEnlargement: true }).avif({ quality: 72 }).toFile(dest)
  console.log('avif', path.basename(dest), fs.statSync(dest).size)
}

async function labelVial(blank, dest, title, sub, width = 720) {
  const meta = await sharp(blank).metadata()
  const w = meta.width ?? 1024
  const h = meta.height ?? 1365
  const buf = await sharp(blank)
    .composite([{ input: labelSvg(w, h, title, sub), blend: 'over' }])
    .png()
    .toBuffer()
  await sharp(buf).resize({ width, withoutEnlargement: true }).avif({ quality: 74 }).toFile(dest)
  console.log('vial', path.basename(dest), fs.statSync(dest).size)
}

const photos = [
  ['treat-hero-vials-bright.png', 'hero-glp1-vials.avif', 1100, false],
  ['treat-vials-protocol-bright.png', 'vials-protocol.avif', 1200, false],
  ['treat-vials-faq-bright.png', 'vials-faq.avif', 1100, false],
  ['treat-vials-why-bright.png', 'vials-why.avif', 1100, false],
  ['treat-expect-week-1-4.png', 'expect-week-1-4.avif', 1200, true],
  ['treat-expect-week-4-12.png', 'expect-week-4-12.avif', 1200, true],
  ['treat-expect-month-3.png', 'expect-month-3.avif', 1200, true],
  ['treat-portal-intake.png', 'portal-intake.avif', 1200, true],
  ['treat-closing-wellness.png', 'closing-wellness.avif', 1600, true],
]

for (const [src, dest, width, brighten] of photos) {
  await toAvif(path.join(ASSETS, src), path.join(OUT, dest), width, brighten)
}

await labelVial(path.join(ASSETS, 'treat-vial-cream-a.png'), path.join(OUT, 'vial-sema-thumb.avif'), 'SEMAGLUTIDE', 'GLP-1 · Rx Only', 640)
await labelVial(path.join(ASSETS, 'treat-vial-cream-b.png'), path.join(OUT, 'vial-tirz-thumb.avif'), 'TIRZEPATIDE', 'GLP-1 + GIP · Rx Only', 640)
await labelVial(path.join(ASSETS, 'treat-vial-cream-c.png'), path.join(OUT, 'vial-sema-clinical.avif'), 'SEMAGLUTIDE', 'GLP-1 · Rx Only', 900)
await labelVial(path.join(ASSETS, 'treat-vial-cream-d.png'), path.join(OUT, 'vial-tirz-clinical.avif'), 'TIRZEPATIDE', 'GLP-1 + GIP · Rx Only', 900)

console.log('done')
