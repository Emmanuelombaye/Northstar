import { SiteLayout } from "@/components/layout/SiteLayout";
import Link from "next/link";

export default function NotFound() {
  return (
    <SiteLayout>
      <div style={{ textAlign: "center", padding: "120px 20px" }}>
        <h1 style={{ fontSize: "3rem", marginBottom: "1rem" }}>404 - Page Not Found</h1>
        <p style={{ marginBottom: "2rem" }}>
          The page you are looking for does not exist or has been moved.
        </p>
        <Link href="/" className="btn btn-gold btn-pill">
          Return Home
        </Link>
      </div>
    </SiteLayout>
  );
}
