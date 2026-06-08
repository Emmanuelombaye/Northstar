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

- **Production:** `https://joinnorthstarmd.com/care/north-star-md/shop?brand=north-star-md&brandId=c8e7f6a2-4b1d-4e9f-a3c2-1d5e8f7a6b4c`
- **Config:** Edit `public/js/shop-links.js` (`PEAK_SHOP_ORIGIN`, `ENROLL_PATH`)
- **Domain:** `joinnorthstarmd.com` on this Vercel project proxies enrollment to the telehealth app (see `vercel.json`).

`public/js/shop-links.js` runs on page load and keeps `data-shop` links in sync.

## Frontend architecture (2026 rewrite)

| Path | Stack |
|------|--------|
| `/` | React — exact legacy homepage (`src/pages/HomePage.tsx`) |
| `/shop` | Premium pharmacy store (20+ products, cart, animations) |
| `/shop/product/:slug` | Product detail → Peak secure checkout |
| `/about`, `/faq`, … | Legacy static HTML (unchanged until migrated) |

Checkout still runs on Peak: `joinnorthstarmd.com/care/north-star-md/shop` (proxied in `vercel.json`).

## Customize

- **Homepage:** `src/pages/HomePage.tsx` (keep layout/classes in sync with design)
- **Shop catalog:** `src/data/products.ts` + `src/pages/ShopPage.tsx`
- **Enrollment URLs:** `src/lib/shop.ts`
- **Colors & typography:** CSS variables at the top of `css/styles.css`
