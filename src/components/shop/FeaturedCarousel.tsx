import { Link } from "react-router-dom";
import { PHARMACY_PRODUCTS, formatPrice } from "../../store/products";

const featured = PHARMACY_PRODUCTS.filter((p) => p.popular).slice(0, 6);

export function FeaturedCarousel() {
  const items = [...featured, ...featured];

  return (
    <section className="shop-featured" data-reveal>
      <div className="shop-wrap">
        <div className="shop-section-head">
          <p className="eyebrow">Featured programs</p>
          <h2>Physician favorites</h2>
        </div>
      </div>
      <div className="shop-featured-track-wrap">
        <div className="shop-featured-track">
          {items.map((p, i) => (
            <Link key={`${p.slug}-${i}`} to={`/shop/product/${p.slug}`} className="shop-featured-slide">
              <img src={p.image} data-fallback={p.imageFallback} alt="" loading="lazy" decoding="async" />
              <div className="shop-featured-slide-body">
                <span>{p.categoryLabel}</span>
                <strong>{p.name}</strong>
                <em>{formatPrice(p.priceMonthly)}</em>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
