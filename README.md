# North Star MD

Marketing website for North Star MD — physician-guided longevity and wellness care.

## Quick start

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

## Build for production

```bash
npm run build
npm run preview
```

Static files are output to `dist/` and can be deployed to Netlify, Vercel, Cloudflare Pages, or any static host.

## Images

Photos are sliced from `public/images/mockup-full.png` (your design file):

- `hero-photo.png` — hero woman + hills
- `product.png` — kit still life
- `journey.png` — woman by window

Re-slice after updating the mockup: `npm run slice`

## Enrollment (white-label on Peak Health platform)

Marketing CTAs link to the shared clinical shop with **North Star MD branding only** (no Peak Health in the patient UI):

- **Production:** `https://www.peak-health.io/care/north-star-md/shop?brand=north-star-md&brandId=c8e7f6a2-4b1d-4e9f-a3c2-1d5e8f7a6b4c`
- **Config:** Edit `public/js/shop-links.js` (`PEAK_SHOP_ORIGIN`, `ENROLL_PATH`)
- **Custom care domain (optional):** Add `care.northstarmed.vercel.app` to the telehealth Vercel project, then set `PEAK_SHOP_ORIGIN` to that host.

`public/js/shop-links.js` runs on page load and keeps `data-shop` links in sync.

## Customize

- **Copy & sections:** Edit `index.html`
- **Colors & typography:** Edit CSS variables at the top of `css/styles.css`
