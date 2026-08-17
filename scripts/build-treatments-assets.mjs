import fs from 'fs'
import path from 'path'
import sharp from 'sharp'

const ASSETS = 'C:/Users/Administrator/.cursor/projects/i-ceo-northstar/assets'
const OUT = 'I:/ceo/northstar/public/images/treatments'

fs.mkdirSync(OUT, { recursive: true })

function labelSvg(width, height, title, sub) {
  const lx = Math.round(width * 0.31)
  const ly = Math.round(height * 0.34)
  const lw = Math.round(width * 0.38)
  const lh = Math.round(height * 0.32)
  const cx = lx + lw / 2
  return Buffer.from(`<svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
    <rect x="${lx}" y="${ly}" width="${lw}" height="${lh}" rx="${Math.round(lw * 0.06)}" fill="#f4f1ea"/>
    <rect x="${lx}" y="${ly}" width="${lw}" height="3" fill="#c5a059"/>
    <text x="${cx}" y="${ly + lh * 0.48}" text-anchor="middle" font-family="Arial, Helvetica, sans-serif" font-size="${Math.round(lw * 0.1)}" font-weight="700" fill="#0a1f3d">${title}</text>
    <text x="${cx}" y="${ly + lh * 0.68}" text-anchor="middle" font-family="Arial, Helvetica, sans-serif" font-size="${Math.round(lw * 0.055)}" fill="#6b7280">${sub}</text>
  </svg>`)
}

async function toAvif(src, dest, width) {
  await sharp(src)
    .resize({ width, withoutEnlargement: true })
    .avif({ quality: 66 })
    .toFile(dest)
  console.log('avif', path.basename(dest), fs.statSync(dest).size)
}

async function labelVial(blank, dest, title, sub, width = 720) {
  const meta = await sharp(blank).metadata()
  const w = meta.width ?? 1024
  const h = meta.height ?? 1024
  const buf = await sharp(blank)
    .composite([{ input: labelSvg(w, h, title, sub), blend: 'over' }])
    .png()
    .toBuffer()
  await sharp(buf).resize({ width, withoutEnlargement: true }).avif({ quality: 68 }).toFile(dest)
  console.log('vial', path.basename(dest), fs.statSync(dest).size)
}

const photos = [
  ['treat-hero-vials.png', 'hero-glp1-vials.avif', 1100],
  ['treat-vials-protocol.png', 'vials-protocol.avif', 1200],
  ['treat-vials-faq.png', 'vials-faq.avif', 1100],
  ['treat-vials-why.png', 'vials-why.avif', 1100],
  ['treat-expect-week-1-4.png', 'expect-week-1-4.avif', 1200],
  ['treat-expect-week-4-12.png', 'expect-week-4-12.avif', 1200],
  ['treat-expect-month-3.png', 'expect-month-3.avif', 1200],
  ['treat-portal-intake.png', 'portal-intake.avif', 1200],
  ['treat-closing-wellness.png', 'closing-wellness.avif', 1600],
]

for (const [src, dest, width] of photos) {
  await toAvif(path.join(ASSETS, src), path.join(OUT, dest), width)
}

await labelVial(path.join(ASSETS, 'treat-vial-blank-a.png'), path.join(OUT, 'vial-sema-thumb.avif'), 'SEMAGLUTIDE', 'GLP-1  ·  Rx Only', 640)
await labelVial(path.join(ASSETS, 'treat-vial-blank-b.png'), path.join(OUT, 'vial-tirz-thumb.avif'), 'TIRZEPATIDE', 'GLP-1 + GIP  ·  Rx Only', 640)
await labelVial(path.join(ASSETS, 'treat-vial-blank-c.png'), path.join(OUT, 'vial-sema-clinical.avif'), 'SEMAGLUTIDE', 'GLP-1  ·  Rx Only', 900)
await labelVial(path.join(ASSETS, 'treat-vial-blank-d.png'), path.join(OUT, 'vial-tirz-clinical.avif'), 'TIRZEPATIDE', 'GLP-1 + GIP  ·  Rx Only', 900)

console.log('done')
