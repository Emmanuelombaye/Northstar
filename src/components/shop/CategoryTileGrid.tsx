import { SafeImage } from "./SafeImage";
import type { StoreCategory } from "../../store/types";

const TILES: { id: StoreCategory; label: string; image: string; fallback?: string }[] = [
  { id: "weight-loss", label: "Weight Loss", image: "/images/tirzepatide-hero.webp", fallback: "/images/tirzepatide-hero.png" },
  { id: "longevity", label: "Longevity", image: "/images/nad-hero.webp", fallback: "/images/nad-hero.png" },
  { id: "recovery", label: "Recovery", image: "/images/sermorelin-hero.webp", fallback: "/images/sermorelin-hero.png" },
  { id: "mens-health", label: "Men's Health", image: "/images/store/trt-kit.webp", fallback: "/images/store/trt-kit.jpg" },
  { id: "womens-health", label: "Women's Health", image: "/images/store/womens-wellness.webp", fallback: "/images/store/womens-wellness.jpg" },
  { id: "hair", label: "Hair", image: "/images/store/hair-treatment.webp", fallback: "/images/store/hair-treatment.jpg" },
  { id: "skincare", label: "Skincare", image: "/images/store/skincare-cream.webp", fallback: "/images/store/skincare-cream.jpg" },
  { id: "sexual-wellness", label: "Sexual Wellness", image: "/images/store/sexual-wellness.webp", fallback: "/images/store/sexual-wellness.jpg" },
  { id: "sleep", label: "Sleep", image: "/images/store/sleep-rest.webp", fallback: "/images/store/sleep-rest.jpg" },
  { id: "mental-health", label: "Mental Health", image: "/images/store/mental-calm.webp", fallback: "/images/store/mental-calm.jpg" },
  { id: "hormone", label: "Hormone", image: "/images/store/hormone-lab.webp", fallback: "/images/store/hormone-lab.jpg" },
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
              <SafeImage path={t.fallback ?? t.image} alt="" extraFallbacks={[t.image]} />
              <span>{t.label}</span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
