import { shop } from "../../lib/shop";

export function ShopPharmacyBar() {
  return (
    <div className="pharm-topbar">
      <div className="pharm-wrap pharm-topbar-inner">
        <span className="pharm-topbar-pill">
          <svg viewBox="0 0 20 20" fill="none" aria-hidden="true">
            <path d="M10 2v16M4 8h12" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
            <circle cx="10" cy="5" r="2" stroke="currentColor" strokeWidth="1.3" />
          </svg>
          24/7 Physician Support
        </span>
        <span className="pharm-topbar-divider">|</span>
        <span>Free expedited U.S. pharmacy shipping</span>
        <a href={shop.catalog()} className="pharm-topbar-link">
          Quick enroll →
        </a>
      </div>
    </div>
  );
}
