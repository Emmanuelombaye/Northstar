import fs from 'fs'
import path from 'path'
import sharp from 'sharp'

const ASSETS = 'C:/Users/Administrator/.cursor/projects/i-ceo-northstar/assets'
const OUT = 'I:/ceo/northstar/public/images/home'

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

async function buildVial(blank, destAvif, destPng, title, sub) {
  const meta = await sharp(blank).metadata()
  const w = meta.width ?? 1024
  const h = meta.height ?? 1365
  const buf = await sharp(blank)
    .composite([{ input: labelSvg(w, h, title, sub), blend: 'over' }])
    .png()
    .toBuffer()
  await sharp(buf).png().toFile(destPng)
  await sharp(buf).resize({ width: 800, withoutEnlargement: true }).avif({ quality: 70 }).toFile(destAvif)
  console.log('built', path.basename(destAvif))
}

await buildVial(
  path.join(ASSETS, 'home-atlas-blank-sema.png'),
  path.join(OUT, 'atlas-vial-sema.avif'),
  path.join(OUT, 'atlas-vial-sema.png'),
  'SEMAGLUTIDE',
  'GLP-1 · Weekly · Rx Only',
)
await buildVial(
  path.join(ASSETS, 'home-atlas-blank-tirz.png'),
  path.join(OUT, 'atlas-vial-tirz.avif'),
  path.join(OUT, 'atlas-vial-tirz.png'),
  'TIRZEPATIDE',
  'GLP-1 + GIP · Weekly · Rx Only',
)

console.log('done')
