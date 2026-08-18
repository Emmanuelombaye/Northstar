"use client";

import { Link } from "@/lib/routerAdapter";
import { shop } from "../../lib/shop";
import { FooterTrustBadges } from "../layout/FooterTrustBadges";

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
            <li><Link to="/semaglutide">Semaglutide</Link></li>
            <li><Link to="/tirzepatide">Tirzepatide</Link></li>
            <li><Link to="/treatments">Treatments</Link></li>
          </ul>
        </div>

        <div>
          <h4>Shop</h4>
          <ul>
            <li><Link to="/treatments">Treatments</Link></li>
            <li><a href={shop.catalog()}>Quick enroll</a></li>
            <li><Link to="/how-it-works">How it works</Link></li>
          </ul>
        </div>

        <div>
          <h4>Company</h4>
          <ul>
            <li><Link to="/advisors">About Us</Link></li>
            <li><Link to="/faq">FAQs</Link></li>
            <li><Link to="/policies/privacy-policy">Privacy</Link></li>
            <li><Link to="/policies/terms-of-use">Terms</Link></li>
            <li><Link to="/policies/consent-to-telehealth">Telehealth Consent</Link></li>
          </ul>
        </div>

        <div>
          <h4>Compliance Documents</h4>
          <ul>
            <li><Link to="/policies">All policies</Link></li>
            <li><Link to="/policies/consent-to-telehealth">Consent to Telehealth</Link></li>
            <li><Link to="/policies/privacy-policy">Privacy Policy</Link></li>
            <li><Link to="/policies/hipaa-notice">HIPAA Notice</Link></li>
            <li><Link to="/policies/fda-and-medical-disclaimer">Medical Disclaimer</Link></li>
            <li><Link to="/policies/terms-of-use">Terms of Use</Link></li>
          </ul>
        </div>
      </div>

      <div className="pharm-wrap">
        <FooterTrustBadges />
        <div className="pharm-footer-bottom">
          <p>© {new Date().getFullYear()} North Star MD · Guided by science. Designed for you.</p>
        </div>
      </div>
    </footer>
  );
}
