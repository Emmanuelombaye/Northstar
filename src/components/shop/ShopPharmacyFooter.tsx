import { Link, useLocation } from "react-router-dom";
import { shop } from "../../lib/shop";
import { STORE_CATEGORIES } from "../../store/products";

export function ShopPharmacyFooter() {
  const { pathname } = useLocation();
  if (!pathname.startsWith("/shop")) return null;

  const cats = STORE_CATEGORIES.filter((c) => c.id !== "all");

  return (
    <footer className="pharm-footer">
      <div className="pharm-wrap pharm-footer-grid">
        <div className="pharm-footer-brand">
          <svg viewBox="0 0 48 48" fill="none" aria-hidden="true">
            <path
              d="M24 4L27 18L41 21L27 24L24 38L21 24L7 21L21 18L24 4Z"
              stroke="currentColor"
              strokeWidth="1.2"
              strokeLinejoin="round"
            />
          </svg>
          <span>North Star MD Pharmacy</span>
        </div>
        <div>
          <h3>Categories</h3>
          <ul>
            {cats.map((c) => (
              <li key={c.id}>
                <a href={`#category-${c.id}`}>{c.label}</a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#brands">Brands</a></li>
            <li><a href="#categories">Categories</a></li>
            <li><a href="#catalog">Products</a></li>
            <li><a href="#offers">Offers</a></li>
            <li><a href="#pharmacy-wall">Pharmacy Wall</a></li>
            <li><a href={shop.login()}>Patient Portal</a></li>
          </ul>
        </div>
        <div>
          <h3>Legal</h3>
          <ul>
            <li><a href="/about">About Us</a></li>
            <li><a href="/privacy">Privacy</a></li>
            <li><a href="/terms">Terms</a></li>
            <li><a href="/telehealth-consent">Telehealth Consent</a></li>
          </ul>
        </div>
      </div>
      <p className="pharm-footer-copy">
        © {new Date().getFullYear()} North Star MD · Guided by science. Designed for you.
      </p>
    </footer>
  );
}
