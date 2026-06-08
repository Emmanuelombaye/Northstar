import { Link, useLocation } from "react-router-dom";

const LINKS = [
  { label: "Home", href: "/" },
  { label: "Categories", href: "#categories" },
  { label: "Products", href: "#catalog" },
  { label: "Brands", href: "#brands" },
  { label: "Offers", href: "#offers" },
  { label: "Pharmacy Wall", href: "#pharmacy-wall" },
];

export function ShopStoreNav() {
  const { pathname } = useLocation();
  if (!pathname.startsWith("/shop")) return null;

  return (
    <nav className="pharm-store-nav" aria-label="Store menu">
      <div className="pharm-wrap pharm-store-nav-inner">
        {LINKS.map((l) =>
          l.href.startsWith("#") ? (
            <a key={l.label} href={l.href}>
              {l.label}
            </a>
          ) : (
            <Link key={l.label} to={l.href}>
              {l.label}
            </Link>
          ),
        )}
      </div>
    </nav>
  );
}
