import type { ReactNode } from "react";
import { useLocation } from "react-router-dom";
import { ShopMobileNav } from "../shop/ShopMobileNav";
import { AnnouncementBar } from "./AnnouncementBar";
import { SiteFooter } from "./SiteFooter";
import { SiteHeader } from "./SiteHeader";

export function SiteLayout({ children }: { children: ReactNode }) {
  const isShop = useLocation().pathname.startsWith("/shop");

  return (
    <>
      {!isShop ? <AnnouncementBar /> : null}
      <SiteHeader />
      {children}
      {!isShop ? <SiteFooter /> : null}
      <ShopMobileNav />
    </>
  );
}
