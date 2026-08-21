# North Star MD

Physician-guided Semaglutide and Tirzepatide care — licensed U.S. provider review, charged only if prescribed.

## Quick start

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
npm start
```

## Site map

| Path | Page |
|------|------|
| `/` | Homepage |
| `/treatments` | Semaglutide & Tirzepatide |
| `/how-it-works` | Care path |
| `/faq` | Clinical FAQs |
| `/shop` | Program catalog |
| `/start` | Medical intake |
| `/portal` | Patient Center |

Enrollment continues at `joinnorthstarmd.com` with North Star MD branding.

## Customize

- **Homepage:** `src/components/ns/HomeShell.tsx`
- **Shop catalog:** `src/store/catalog.ts`
- **Enrollment URLs:** `src/lib/shop.ts`
- **Colors:** CSS variables in `css/styles.css`
