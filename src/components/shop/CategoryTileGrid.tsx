import { SafeImage } from "./SafeImage";
import type { StoreCategory } from "../../store/types";

const TILES: { id: StoreCategory; label: string; image: string }[] = [
  { id: "weight-loss", label: "Weight Loss", image: "/images/tirzepatide-hero.png" },
  { id: "longevity", label: "Longevity", image: "/images/nad-hero.png" },
  { id: "recovery", label: "Recovery", image: "/images/sermorelin-hero.png" },
  { id: "mens-health", label: "Men's Health", image: "https://loremflickr.com/600/600/mens,fitness?lock=1004" },
  { id: "womens-health", label: "Women's Health", image: "https://loremflickr.com/600/600/womens,wellness?lock=1005" },
  { id: "hair", label: "Hair", image: "https://loremflickr.com/600/600/hair,care?lock=1006" },
  { id: "skincare", label: "Skincare", image: "https://loremflickr.com/600/600/skincare,cream?lock=1007" },
  { id: "sexual-wellness", label: "Sexual Wellness", image: "https://loremflickr.com/600/600/wellness,couple?lock=1008" },
  { id: "sleep", label: "Sleep", image: "https://loremflickr.com/600/600/sleep,rest?lock=1009" },
  { id: "mental-health", label: "Mental Health", image: "https://loremflickr.com/600/600/mental,calm?lock=1010" },
  { id: "hormone", label: "Hormone", image: "https://loremflickr.com/600/600/hormone,lab?lock=1011" },
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
