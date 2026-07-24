"use client";

import { Link, useLocation } from "@/lib/routerAdapter";
import { useCartContext } from "../../context/CartContext";
import { useWishlistContext } from "../../context/WishlistContext";

export function ShopMobileNav() {
  const { pathname } = useLocation();
  const cart = useCartContext();
  const wishlist = useWishlistContext();

  if (!pathname.startsWith("/shop")) return null;

  return (
    <nav className="pharm-mobile-nav" aria-label="Store navigation">
      <Link to="/" className={pathname === "/" ? "is-active" : ""}>
        <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="M4 10.5L12 4l8 6.5V20a1 1 0 01-1 1h-5v-6H10v6H5a1 1 0 01-1-1v-9.5z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
        </svg>
        Home
      </Link>
      <a href="#categories">
        <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <rect x="4" y="4" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="1.4" />
          <rect x="13" y="4" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="1.4" />
          <rect x="4" y="13" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="1.4" />
          <rect x="13" y="13" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="1.4" />
        </svg>
        Categories
      </a>
      <a href="#catalog">
        <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <circle cx="11" cy="11" r="6" stroke="currentColor" strokeWidth="1.4" />
          <path d="M16 16l5 5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
        </svg>
        Search
      </a>
      <button type="button" onClick={() => document.getElementById("catalog")?.scrollIntoView({ behavior: "smooth" })}>
        <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" stroke="currentColor" strokeWidth="1.4" />
        </svg>
        Wishlist
        {wishlist.count > 0 ? <em>{wishlist.count}</em> : null}
      </button>
      <button type="button" onClick={() => cart.setOpen(true)}>
        <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="M6 6h15l-1.5 9h-12z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
          <circle cx="9" cy="20" r="1.2" fill="currentColor" />
          <circle cx="18" cy="20" r="1.2" fill="currentColor" />
        </svg>
        Cart
        {cart.count > 0 ? <em>{cart.count}</em> : null}
      </button>
    </nav>
  );
}
