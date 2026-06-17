import { SafeImage } from "./SafeImage";
import type { StoreCategory } from "../../store/types";

const TILES: { id: StoreCategory; label: string; image: string }[] = [
  { id: "weight-loss", label: "Weight Loss", image: "/images/store/weight-loss-starter.png" },
  { id: "mens-health", label: "Men's Health", image: "/images/store/testosterone-trt.png" },
  { id: "hair", label: "Hair", image: "/images/store/hair-care.jpg" },
  { id: "skincare", label: "Skincare", image: "/images/store/anti-aging-cream.png" },
  { id: "sexual-wellness", label: "Sexual Wellness", image: "/images/store/sexual-wellness.jpg" },
  { id: "hormone", label: "Hormone", image: "/images/store/hormone-lab.jpg" },
];

type Props = {
  onSelect: (id: StoreCategory) => void;
  active?: StoreCategory | "all";
};

export function CategoryTileGrid({ onSelect, active }: Props) {
  return (
    <section className="pharm-section" id="categories">
      <div className="pharm-wrap">
        <h2 className="pharm-section-title">All Categories</h2>
        <div className="pharm-cat-grid">
          {TILES.map((t) => (
            <button
              key={t.id}
              type="button"
              id={`category-${t.id}`}
              className={`pharm-cat-tile${active === t.id ? " is-active" : ""}`}
              onClick={() => {
                onSelect(t.id);
                document.getElementById("catalog")?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              <SafeImage path={t.image} alt="" />
              <span>{t.label}</span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
