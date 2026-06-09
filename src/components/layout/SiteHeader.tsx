import { Link, useLocation } from "react-router-dom";
import { shop } from "../../lib/shop";
import { useCartContext } from "../../context/CartContext";
import { useWishlistContext } from "../../context/WishlistContext";

export function SiteHeader() {
  const { pathname } = useLocation();
  const isShop = pathname.startsWith("/shop");
  const cart = useCartContext();
  const wishlist = useWishlistContext();

  return (
    <header className={`site-header${isShop ? " site-header-pharm" : ""}`}>
      <div className="header-inner">
        <Link to="/" className="logo" aria-label="North Star MD home">
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

        <button className="nav-toggle" aria-label="Open menu" aria-expanded="false" type="button">
          <span />
          <span />
          <span />
        </button>

        <div className="nav-overlay" aria-hidden="true" />

        <nav className="main-nav" aria-label="Main navigation">
          <ul>
            <li>
              <a href="/about">About Us</a>
            </li>
            <li>
              <Link to="/shop" aria-current={pathname === "/shop" ? "page" : undefined}>
                Shop
              </Link>
            </li>

            <li>
              <a href="/how-it-works">How It Works</a>
            </li>
            <li>
              <a href="/faq">FAQ</a>
            </li>
            <li className="nav-cta-mobile">
              <Link to="/shop" className="btn btn-navy btn-pill btn-block">
                Get Started
              </Link>
            </li>
          </ul>
        </nav>

        <div className="header-ctas">
          {isShop ? (
            <>
            <button
              type="button"
              className="shop-header-cart"
              onClick={() => document.getElementById("catalog")?.scrollIntoView({ behavior: "smooth" })}
              aria-label={`Wishlist, ${wishlist.count} items`}
            >
              <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" stroke="currentColor" strokeWidth="1.4" />
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

          <Link to="/shop" className="btn btn-navy btn-pill">
            Get Started
          </Link>
        </div>
      </div>
    </header>
  );
}
