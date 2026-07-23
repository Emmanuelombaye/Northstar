import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useCartContext } from "../../context/CartContext";
import { useWishlistContext } from "../../context/WishlistContext";

export function UniversalMobileNav() {
  const { pathname } = useLocation();
  const cart = useCartContext();
  const wishlist = useWishlistContext();
  const [isSheetOpen, setIsSheetOpen] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  // Hide dock on scroll down, show on scroll up
  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      if (currentY > 120 && currentY > lastScrollY + 10) {
        setIsHidden(true);
      } else if (currentY < lastScrollY - 10) {
        setIsHidden(false);
      }
      setLastScrollY(currentY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  // Close drawer on path change
  useEffect(() => {
    setIsSheetOpen(false);
  }, [pathname]);

  const totalBadges = (cart?.count || 0) + (wishlist?.count || 0);

  return (
    <>
      {/* Floating Bottom Dock */}
      <nav
        className={`universal-mobile-dock${isHidden && !isSheetOpen ? " is-hidden" : ""}`}
        aria-label="Mobile Navigation"
      >
        <Link
          to="/"
          className={`dock-item bouncy-touch${pathname === "/" ? " is-active" : ""}`}
        >
          <div className="dock-icon">
            <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path
                d="M3 10.2L12 3l9 7.2V20a1 1 0 01-1 1h-5v-6H9v6H4a1 1 0 01-1-1v-9.8z"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <span>Home</span>
        </Link>

        <Link
          to="/treatments"
          className={`dock-item bouncy-touch${pathname.startsWith("/treatments") || pathname === "/explore-treatments" ? " is-active" : ""}`}
        >
          <div className="dock-icon">
            <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path
                d="M19.5 4.5l-15 15M9 3h6M3 9v6M21 9v6M9 21h6"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
              />
              <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="1.8" />
            </svg>
          </div>
          <span>Care</span>
        </Link>

        {/* Center Intake CTA Pill */}
        <Link to="/start" className="dock-item dock-item-intake bouncy-btn">
          <div className="dock-icon">
            <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path
                d="M12 4v16m-8-8h16"
                stroke="currentColor"
                strokeWidth="2.4"
                strokeLinecap="round"
              />
            </svg>
          </div>
          <span>Intake</span>
        </Link>

        <Link
          to="/shop"
          className={`dock-item bouncy-touch${pathname.startsWith("/shop") ? " is-active" : ""}`}
        >
          <div className="dock-icon">
            <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path
                d="M6 6h15l-1.5 9h-12z"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinejoin="round"
              />
              <circle cx="9" cy="20" r="1.5" fill="currentColor" />
              <circle cx="18" cy="20" r="1.5" fill="currentColor" />
            </svg>
          </div>
          <span>Shop</span>
          {totalBadges > 0 && <span className="dock-badge">{totalBadges}</span>}
        </Link>

        <button
          type="button"
          className={`dock-item bouncy-touch${isSheetOpen ? " is-active" : ""}`}
          onClick={() => setIsSheetOpen((o) => !o)}
          aria-label="Open Navigation Sheet"
        >
          <div className="dock-icon">
            <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path
                d="M4 7h16M4 12h16M4 17h16"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </div>
          <span>Menu</span>
        </button>
      </nav>

      {/* Spring Bottom Sheet Drawer */}
      <div
        className={`mobile-sheet-overlay${isSheetOpen ? " is-open" : ""}`}
        onClick={() => setIsSheetOpen(false)}
      />

      <aside className={`mobile-sheet-drawer${isSheetOpen ? " is-open" : ""}`} aria-label="Menu Sheet">
        <div className="sheet-handle-bar" onClick={() => setIsSheetOpen(false)} />

        <div className="sheet-header">
          <span className="sheet-title">North Star MD Navigation</span>
          <button
            type="button"
            className="sheet-close-btn bouncy-touch"
            onClick={() => setIsSheetOpen(false)}
            aria-label="Close sheet"
          >
            ✕
          </button>
        </div>

        <div className="sheet-grid">
          <Link
            to="/treatments"
            className="sheet-card-link bouncy-card"
            onClick={() => setIsSheetOpen(false)}
          >
            <div className="sheet-card-icon">🧪</div>
            <div className="sheet-card-title">Treatments</div>
            <div className="sheet-card-desc">GLP-1, NAD+, Sermorelin therapies</div>
          </Link>

          <Link
            to="/shop"
            className="sheet-card-link bouncy-card"
            onClick={() => setIsSheetOpen(false)}
          >
            <div className="sheet-card-icon">🛍️</div>
            <div className="sheet-card-title">Supplement Store</div>
            <div className="sheet-card-desc">Physician-grade wellness formulas</div>
          </Link>

          <Link
            to="/vision"
            className="sheet-card-link bouncy-card"
            onClick={() => setIsSheetOpen(false)}
          >
            <div className="sheet-card-icon">⭐</div>
            <div className="sheet-card-title">Our Vision</div>
            <div className="sheet-card-desc">Decoupling healthcare from sickcare</div>
          </Link>

          <Link
            to="/threats"
            className="sheet-card-link bouncy-card"
            onClick={() => setIsSheetOpen(false)}
          >
            <div className="sheet-card-icon">⚡</div>
            <div className="sheet-card-title">The Threats</div>
            <div className="sheet-card-desc">Metabolic & cellular longevity risks</div>
          </Link>

          <Link
            to="/advisors"
            className="sheet-card-link bouncy-card"
            onClick={() => setIsSheetOpen(false)}
          >
            <div className="sheet-card-icon">👨‍⚕️</div>
            <div className="sheet-card-title">Advisors & Team</div>
            <div className="sheet-card-desc">Board-certified clinical leadership</div>
          </Link>

          <Link
            to="/education"
            className="sheet-card-link bouncy-card"
            onClick={() => setIsSheetOpen(false)}
          >
            <div className="sheet-card-icon">📚</div>
            <div className="sheet-card-title">Education & Science</div>
            <div className="sheet-card-desc">Clinical guides and longevity resources</div>
          </Link>
        </div>

        <Link
          to="/start"
          className="sheet-action-btn bouncy-btn"
          onClick={() => setIsSheetOpen(false)}
        >
          Find My Treatment &rarr;
        </Link>
      </aside>
    </>
  );
}
