import type { ReactNode } from "react";
import { useLocation } from "react-router-dom";
import { ShopMobileNav } from "../shop/ShopMobileNav";
import { AnnouncementBar } from "./AnnouncementBar";
import { SiteFooter } from "./SiteFooter";
import { SiteHeader } from "./SiteHeader";
import { useMobileNav } from "../../hooks/useMobileNav";

export function SiteLayout({ children }: { children: ReactNode }) {
  useMobileNav();
  const isShop = useLocation().pathname.startsWith("/shop");

  return (
    <>
      {!isShop ? <AnnouncementBar /> : null}
      <SiteHeader />
      {children}
      <SiteFooter />
      <ShopMobileNav />
    </>
  );
}
