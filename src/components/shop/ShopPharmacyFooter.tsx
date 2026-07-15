import { Link } from "react-router-dom";
import { shop } from "../../lib/shop";

export function ShopPharmacyFooter() {
  return (
    <footer className="pharm-footer">
      <div className="pharm-wrap pharm-footer-grid">
        <div className="pharm-footer-brand">
          <Link to="/" className="pharm-footer-logo">
            North Star MD
          </Link>
          <p className="pharm-footer-desc">
            Physician-guided longevity and wellness — compounded therapies, licensed providers, and discreet delivery.
          </p>
        </div>

        <div>
          <h4>Programs</h4>
          <ul>
            <li><Link to="/shop?category=weight-loss">Weight Loss</Link></li>
            <li><Link to="/shop?category=longevity">Longevity</Link></li>
            <li><Link to="/shop?category=recovery">Muscle Recovery</Link></li>
            <li><Link to="/shop?category=mens-health">Men&apos;s Health</Link></li>
          </ul>
        </div>

        <div>
          <h4>Shop</h4>
          <ul>
            <li><a href="#catalog">All treatments</a></li>
            <li><a href={shop.catalog()}>Quick enroll</a></li>
            <li><Link to="/how-it-works">How it works</Link></li>
          </ul>
        </div>

        <div>
          <h4>Company</h4>
          <ul>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/faq">FAQs</Link></li>
            <li><Link to="/privacy">Privacy</Link></li>
            <li><Link to="/terms">Terms</Link></li>
            <li><Link to="/telehealth-consent">Telehealth Consent</Link></li>
          </ul>
        </div>
      </div>

      <div className="pharm-wrap">
        <div className="pharm-footer-bottom">
          <p>© {new Date().getFullYear()} North Star MD · Guided by science. Designed for you.</p>
        </div>
      </div>
    </footer>
  );
}
