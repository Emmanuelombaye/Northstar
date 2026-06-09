import { Link } from "react-router-dom";
import { PHARMACY_PRODUCTS } from "../../store/products";
import { SafeImage } from "./SafeImage";

const BRANDS = [
  { name: "North Star MD", tag: "House brand", logo: "★" },
  { name: "Compounded Rx", tag: "503A pharmacies", logo: "Rx" },
  { name: "Peak Health", tag: "Portal partner", logo: "◆" },
  { name: "VialsRX", tag: "Fulfillment", logo: "◇" },
];

const wall = PHARMACY_PRODUCTS.filter((p) => p.popular || p.badge).slice(0, 12);

export function ShopBrandsWall() {
  return (
    <>
      <section className="pharm-section" id="brands">
        <div className="pharm-wrap">
          <h2 className="pharm-section-title">Brands</h2>
          <p className="pharm-section-sub">Trusted partners behind every North Star MD prescription.</p>
          <div className="pharm-brands-row">
            {BRANDS.map((b) => (
              <div key={b.name} className="pharm-brand-chip">
                <span className="pharm-brand-logo">{b.logo}</span>
                <div>
                  <strong>{b.name}</strong>
                  <em>{b.tag}</em>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="pharm-section pharm-wall" id="pharmacy-wall">
        <div className="pharm-wrap">
          <h2 className="pharm-section-title">Pharmacy Wall</h2>
          <p className="pharm-section-sub">Patient favorites — physician-guided programs our community loves.</p>
          <div className="pharm-wall-grid">
            {wall.map((p) => (
              <Link key={p.slug} to={`/shop/product/${p.slug}`} className="pharm-wall-tile">
                <SafeImage path={p.image} alt="" extraFallbacks={p.imageFallback ? [p.imageFallback] : []} />
                <span>{p.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
