"use client";

import { Link } from "../../lib/routerAdapter";

export function MembershipPage() {
  return (
    <main className="page-shell" style={{ padding: "3rem 1.25rem 4rem", maxWidth: "46rem", margin: "0 auto" }}>
      <p
        className="eyebrow"
        style={{ letterSpacing: "0.08em", textTransform: "uppercase", fontSize: "0.75rem", color: "#5a7286" }}
      >
        North Star MD · Programs
      </p>
      <h1
        style={{
          fontFamily: "Playfair Display, Georgia, serif",
          fontWeight: 500,
          fontSize: "clamp(1.85rem, 4vw, 2.5rem)",
          color: "#0a1f3d",
        }}
      >
        Physician-guided GLP-1 care, charged only if prescribed
      </h1>
      <p style={{ marginTop: "0.85rem", color: "#3a4d61", lineHeight: 1.6 }}>
        North Star MD offers Semaglutide and Tirzepatide after a licensed U.S. provider reviews your medical intake.
        There are no membership tiers to buy first — you start with eligibility, then enroll only if treatment is
        approved.
      </p>

      <ul style={{ marginTop: "2rem", paddingLeft: "1.2rem", color: "#0a1f3d", lineHeight: 1.7 }}>
        <li>
          <strong>Semaglutide</strong> — weekly GLP-1 support from $125/mo on a 6-month plan, if prescribed.
        </li>
        <li>
          <strong>Tirzepatide</strong> — weekly dual GLP-1 + GIP support from $225/mo on a 6-month plan, if prescribed.
        </li>
        <li>
          <strong>Patient Center</strong> — messaging, follow-up, and dose questions after enrollment.
        </li>
      </ul>

      <p style={{ marginTop: "2rem", display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
        <Link href="/start" className="btn btn-navy btn-pill">
          Check Eligibility
        </Link>
        <Link href="/semaglutide" className="btn btn-pill" style={{ border: "1.5px solid #e5e0d8" }}>
          Semaglutide
        </Link>
        <Link href="/tirzepatide" className="btn btn-pill" style={{ border: "1.5px solid #e5e0d8" }}>
          Tirzepatide
        </Link>
      </p>
    </main>
  );
}
