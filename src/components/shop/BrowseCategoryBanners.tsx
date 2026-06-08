import type { StoreCategory } from "../../store/types";

const BANNERS: { id: StoreCategory; title: string; subtitle: string; image: string; fallback?: string }[] = [
  {
    id: "weight-loss",
    title: "Weight Loss",
    subtitle: "Uncover GLP-1 programs designed around you",
    image: "/images/panel-weight.webp",
    fallback: "/images/panel-weight.png",
  },
  {
    id: "longevity",
    title: "Longevity",
    subtitle: "NAD+, peptides & cellular rejuvenation",
    image: "/images/panel-nad.webp",
    fallback: "/images/panel-nad.png",
  },
  {
    id: "recovery",
    title: "Muscle Recovery",
    subtitle: "Peptides for repair, sleep & performance",
    image: "/images/panel-recovery.webp",
    fallback: "/images/panel-recovery.png",
  },
  {
    id: "mens-health",
    title: "Men's Health",
    subtitle: "TRT, vitality & hormone optimization",
    image: "/images/clinical-draw.webp",
    fallback: "/images/clinical-draw.png",
  },
];

type Props = { onSelect: (id: StoreCategory) => void };

export function BrowseCategoryBanners({ onSelect }: Props) {
  return (
    <section className="pharm-section">
      <div className="pharm-wrap">
        <h2 className="pharm-section-title">Browse By Categories</h2>
        <p className="pharm-section-sub">Uncover hidden gems across our physician-guided catalog.</p>
        <div className="pharm-browse-grid">
          {BANNERS.map((b) => (
            <button
              key={b.id}
              type="button"
              className="pharm-browse-banner"
              onClick={() => {
                onSelect(b.id);
                document.getElementById("catalog")?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              <img src={b.image} data-fallback={b.fallback} alt="" loading="lazy" decoding="async" />
              <div className="pharm-browse-caption">
                <strong>{b.title}</strong>
                <span>{b.subtitle}</span>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
