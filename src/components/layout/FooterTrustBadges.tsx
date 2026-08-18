'use client'

import { Link } from "@/lib/routerAdapter";

function UsaFlagIcon() {
  return (
    <span className="ns-footer-trust__flag" aria-hidden="true">
      <svg viewBox="0 0 48 32" xmlns="http://www.w3.org/2000/svg">
        <rect width="48" height="32" fill="#bf0a30" />
        <rect y="2.46" width="48" height="2.46" fill="#fff" />
        <rect y="7.38" width="48" height="2.46" fill="#fff" />
        <rect y="12.31" width="48" height="2.46" fill="#fff" />
        <rect y="17.23" width="48" height="2.46" fill="#fff" />
        <rect y="22.15" width="48" height="2.46" fill="#fff" />
        <rect y="27.08" width="48" height="2.46" fill="#fff" />
        <rect width="19.2" height="17.23" fill="#002868" />
        {[
          [3.2, 2.8],
          [7.2, 2.8],
          [11.2, 2.8],
          [15.2, 2.8],
          [5.2, 5.6],
          [9.2, 5.6],
          [13.2, 5.6],
          [3.2, 8.4],
          [7.2, 8.4],
          [11.2, 8.4],
          [15.2, 8.4],
          [5.2, 11.2],
          [9.2, 11.2],
          [13.2, 11.2],
          [3.2, 14],
          [7.2, 14],
          [11.2, 14],
          [15.2, 14],
        ].map(([x, y], i) => (
          <circle key={i} cx={x} cy={y} r="0.7" fill="#fff" />
        ))}
      </svg>
    </span>
  );
}

function CaduceusIcon() {
  return (
    <span className="ns-footer-trust__caduceus" aria-hidden="true">
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M24 6v36" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
        <path
          d="M24 11c-7.5-1.8-13 2.2-14.5 8.2 2.2 1.6 6.4.4 9.2-2.4 3.4-3.4 7.2-4.2 11.3-1.2 3.4 2.5 5.2 7.2 2.4 11.2-2.6 3.7-7.6 4.4-11.6 1.8-3.6-2.4-5.4-6.8-3.2-10.6"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
        />
        <path
          d="M24 11c7.5-1.8 13 2.2 14.5 8.2-2.2 1.6-6.4.4-9.2-2.4-3.4-3.4-7.2-4.2-11.3-1.2-3.4 2.5-5.2 7.2-2.4 11.2 2.6 3.7 7.6 4.4 11.6 1.8 3.6-2.4 5.4-6.8 3.2-10.6"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
        />
        <path
          d="M16 10c-5 1.2-8.5 4.8-8.8 9.2"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path
          d="M32 10c5 1.2 8.5 4.8 8.8 9.2"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <circle cx="24" cy="6" r="1.6" fill="currentColor" />
      </svg>
    </span>
  );
}

/** JoinStar-style compliance marks used on every brand footer. */
export function FooterTrustBadges() {
  return (
    <div className="ns-footer-trust" aria-label="Compliance">
      <div className="ns-footer-trust__item">
        <UsaFlagIcon />
        <span className="ns-footer-trust__copy">
          <span className="ns-footer-trust__kicker">Compounded by</span>
          <span className="ns-footer-trust__title">Licensed Pharmacies in the USA</span>
        </span>
      </div>

      <Link to="/policies/hipaa-notice" className="ns-footer-trust__item ns-footer-trust__item--link">
        <CaduceusIcon />
        <span className="ns-footer-trust__copy">
          <span className="ns-footer-trust__kicker">Data protected</span>
          <span className="ns-footer-trust__title">
            HIPAA <span className="ns-footer-trust__sub">Compliant</span>
          </span>
        </span>
      </Link>
    </div>
  );
}
