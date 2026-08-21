"use client";

import { Link } from "@/lib/routerAdapter";
import { PHARMACY_PRODUCTS } from "../../store/products";
import { SafeImage } from "./SafeImage";

const BRANDS = [
  { name: "North Star MD", tag: "Clinical programs", logo: "★" },
  { name: "Licensed pharmacies", tag: "U.S. 503A partners", logo: "Rx" },
  { name: "Patient Center", tag: "Secure portal", logo: "◆" },
  { name: "Cold-chain shipping", tag: "Discreet delivery", logo: "◇" },
];

const wall = PHARMACY_PRODUCTS.filter((p) => p.popular || p.badge).slice(0, 12);

export function ShopBrandsWall() {
  return (
    <>
      <section className="pharm-section" id="brands">
        <div className="pharm-wrap">
          <h2 className="pharm-section-title">How care is delivered</h2>
          <p className="pharm-section-sub">Licensed review, U.S. pharmacy fulfillment, and discreet shipping.</p>
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
          <h2 className="pharm-section-title">Patient favorites</h2>
          <p className="pharm-section-sub">Physician-guided programs our patients start most often.</p>
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
