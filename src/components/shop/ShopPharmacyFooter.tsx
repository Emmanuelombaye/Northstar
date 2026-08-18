"use client";

import { Link } from "@/lib/routerAdapter";
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
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/faq">FAQs</Link></li>
            <li><Link to="/privacy">Privacy</Link></li>
            <li><Link to="/terms">Terms</Link></li>
            <li><Link to="/telehealth-consent">Telehealth Consent</Link></li>
          </ul>
        </div>

        <div>
          <h4>Compliance Documents</h4>
          <ul>
            <li><a href="https://docs.google.com/document/d/1Awz6N8v7kBi4ksN7vB9tVyvYQ1lM9NfOe3Y5WQ1m2k8/edit?tab=t.0" target="_blank" rel="noopener noreferrer">Consent to Telehealth</a></li>
            <li><a href="https://docs.google.com/document/d/1Y5ikgPhsNQzr5jvIhP9KbZ6GsYvAnQzzm6QfYv2G-9Y/edit?tab=t.0" target="_blank" rel="noopener noreferrer">Notice of Privacy Practices</a></li>
            <li><a href="https://docs.google.com/document/d/1_rpphjHgaBxcrYLN3xm8xZvoAHh_xK1wTaT7wgt00aY/edit?tab=t.0" target="_blank" rel="noopener noreferrer">HIPAA Notice</a></li>
            <li><a href="https://docs.google.com/document/d/1mQbLFkD9wFj5lzR9wV5Y7h0hVn3Lr0QwKj0j6m9V4mY/edit?tab=t.0" target="_blank" rel="noopener noreferrer">Medical Consent</a></li>
            <li><a href="https://docs.google.com/document/d/1sQx8uWGtl51FHtJoleL7tFEE2hUTLWDLXOI0WqFwn_A/edit?tab=t.0" target="_blank" rel="noopener noreferrer">Medical Disclaimer</a></li>
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
