import type { StoreCategory } from "../../store/types";

const CATEGORIES: { id: StoreCategory; label: string; icon: React.ReactNode }[] = [
  {
    id: "weight-loss",
    label: "Weight Loss",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"></path>
        <line x1="7" y1="7" x2="7.01" y2="7"></line>
      </svg>
    ),
  },
  {
    id: "mens-health",
    label: "Men's Health",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="10" cy="14" r="5"></circle>
        <line x1="13.5" y1="10.5" x2="21" y2="3"></line>
        <polyline points="16 3 21 3 21 8"></polyline>
      </svg>
    ),
  },
  {
    id: "hair",
    label: "Hair & Scalp",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"></circle>
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
        <path d="M2 12h20"></path>
      </svg>
    ),
  },
  {
    id: "skincare",
    label: "Skincare",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
      </svg>
    ),
  },
  {
    id: "sexual-wellness",
    label: "Intimacy",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
      </svg>
    ),
  },
  {
    id: "hormone",
    label: "Hormone Optimization",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
        <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
        <line x1="12" y1="22.08" x2="12" y2="12"></line>
      </svg>
    ),
  },
];

type Props = { onSelect: (id: StoreCategory) => void };

export function BrowseCategoryBanners({ onSelect }: Props) {
  return (
    <section className="airbnb-categories-section">
      <div className="pharm-wrap">
        <div className="airbnb-categories-header">
          <h2>Browse By Categories</h2>
          <p>Uncover hidden gems across our physician-guided catalog.</p>
        </div>
        <div className="airbnb-categories-track">
          {CATEGORIES.map((c) => (
            <button
              key={c.id}
              type="button"
              className="airbnb-category-btn"
              onClick={() => {
                onSelect(c.id);
                document.getElementById("catalog")?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              <span className="airbnb-category-icon">{c.icon}</span>
              <span className="airbnb-category-label">{c.label}</span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
