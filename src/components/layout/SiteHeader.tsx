import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useCartContext } from "../../context/CartContext";
import { useWishlistContext } from "../../context/WishlistContext";

const NAV_LINKS = [
  { to: "/", label: "Home", match: (p: string) => p === "/" },
  { to: "/vision", label: "Vision", match: (p: string) => p === "/vision" },
  { to: "/threats", label: "The Threats", match: (p: string) => p === "/threats" },
  { to: "/treatments", label: "Treatments", match: (p: string) => p.startsWith("/treatments") || p === "/explore-treatments" },
  { to: "/advisors", label: "Advisors", match: (p: string) => p === "/advisors" || p === "/about" },
  { to: "/education", label: "Education", match: (p: string) => p === "/education" || p === "/resources" },
  { to: "/portal", label: "Patient Center", match: () => false },
] as const;

export function SiteHeader() {
  const { pathname } = useLocation();
  const isShop = pathname.startsWith("/shop");
  const cart = useCartContext();
  const wishlist = useWishlistContext();
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    setIsNavOpen(false);
  }, [pathname]);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 50);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.classList.toggle("nav-open", isNavOpen);
    return () => document.body.classList.remove("nav-open");
  }, [isNavOpen]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsNavOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  const closeNav = () => setIsNavOpen(false);

  return (
    <header
      className={`site-header${isShop ? " site-header-pharm" : ""}${isScrolled ? " is-scrolled" : ""}`}
    >
      <div className="header-inner">
        <div className="header-left">
          <Link to="/" className="logo" aria-label="North Star MD home" onClick={closeNav}>
            <svg className="logo-star" viewBox="0 0 48 48" fill="none" aria-hidden="true">
              <path
                d="M24 4L27 18L41 21L27 24L24 38L21 24L7 21L21 18L24 4Z"
                stroke="currentColor"
                strokeWidth="1.2"
                strokeLinejoin="round"
              />
              <path
                d="M24 12L25.5 18.5L32 20L25.5 21.5L24 28L22.5 21.5L16 20L22.5 18.5L24 12Z"
                stroke="currentColor"
                strokeWidth="0.9"
                strokeLinejoin="round"
              />
            </svg>
            <div className="logo-text">
              <span className="logo-name">North Star MD</span>
              <span className="logo-tagline">Guided by science. Designed for you.</span>
            </div>
          </Link>
        </div>

        <button
          className={`nav-toggle${isNavOpen ? " is-open" : ""}`}
          aria-label={isNavOpen ? "Close menu" : "Open menu"}
          aria-expanded={isNavOpen}
          type="button"
          onClick={() => setIsNavOpen((o) => !o)}
        >
          <span />
          <span />
          <span />
        </button>

        <div className="header-center">
          <nav className={`main-nav${isNavOpen ? " is-open" : ""}`} aria-label="Main navigation">
            <div className="mobile-nav-header">
              <div className="mobile-nav-title">
                <svg className="logo-star" viewBox="0 0 48 48" fill="none" aria-hidden="true" style={{ width: 22, height: 22, color: "#c4a962" }}>
                  <path d="M24 4L27 18L41 21L27 24L24 38L21 24L7 21L21 18L24 4Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
                </svg>
                <span>Navigation</span>
              </div>
              <button
                type="button"
                className="mobile-nav-close bouncy-touch"
                onClick={closeNav}
                aria-label="Close navigation menu"
              >
                ✕
              </button>
            </div>

            <ul>
              {NAV_LINKS.map((link) => {
                const isActive = link.match(pathname);
                return (
                  <li key={link.to}>
                    <Link
                      to={link.to}
                      className={`bouncy-touch${isActive ? " is-active" : ""}`}
                      aria-current={isActive ? "page" : undefined}
                      onClick={closeNav}
                    >
                      <span>{link.label}</span>
                      {isActive && <span className="nav-active-dot">★</span>}
                    </Link>
                  </li>
                );
              })}
              <li className="nav-cta-mobile">
                <Link to="/start" className="btn btn-gold btn-pill btn-block bouncy-btn" onClick={closeNav}>
                  Find my treatment &rarr;
                </Link>
              </li>
            </ul>
          </nav>
        </div>

        <div className="header-right header-ctas">
          {isShop ? (
            <>
              <button
                type="button"
                className="shop-header-cart"
                onClick={() => document.getElementById("catalog")?.scrollIntoView({ behavior: "smooth" })}
                aria-label={`Wishlist, ${wishlist.count} items`}
              >
                <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path
                    d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
                    stroke="currentColor"
                    strokeWidth="1.4"
                  />
                </svg>
                {wishlist.count > 0 ? <span className="shop-header-cart-count">{wishlist.count}</span> : null}
              </button>
              <button
                type="button"
                className="shop-header-cart"
                onClick={() => cart.setOpen(true)}
                aria-label={`Cart, ${cart.count} items`}
              >
                <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path d="M6 6h15l-1.5 9h-12z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
                  <circle cx="9" cy="20" r="1.2" fill="currentColor" />
                  <circle cx="18" cy="20" r="1.2" fill="currentColor" />
                  <path d="M6 6L5 3H2" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
                </svg>
                {cart.count > 0 ? <span className="shop-header-cart-count">{cart.count}</span> : null}
              </button>
            </>
          ) : null}

          <Link to="/start" className="btn btn-navy btn-pill btn-get-started">
            Find my treatment
          </Link>
        </div>
      </div>

      <div
        className={`nav-overlay${isNavOpen ? " is-open" : ""}`}
        aria-hidden={!isNavOpen}
        onClick={closeNav}
      />
    </header>
  );
}
