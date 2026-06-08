import type { StoreCategory } from "../../store/types";
import { CATEGORY_LABELS } from "../../store/catalog";
import { PharmacyProductCard } from "./PharmacyProductCard";
import type { PharmacyProduct } from "../../store/types";

type Props = {
  category: StoreCategory;
  products: PharmacyProduct[];
  onViewAll: (category: StoreCategory) => void;
};

export function CategoryCollectionSection({ category, products, onViewAll }: Props) {
  const label = CATEGORY_LABELS[category];
  const preview = products.slice(0, 4);

  return (
    <section className="pharm-collection" data-reveal>
      <div className="pharm-wrap">
        <div className="pharm-section-head">
          <div>
            <h2 className="pharm-section-title">{label}</h2>
            <p className="pharm-section-sub">{products.length} pharmacy-grade treatments · Rx fulfillment included</p>
          </div>
          <button type="button" className="pharm-collection-link" onClick={() => onViewAll(category)}>
            View all {products.length} →
          </button>
        </div>
        <div className="pharm-collection-grid">
          {preview.map((p, i) => (
            <PharmacyProductCard key={p.slug} product={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
