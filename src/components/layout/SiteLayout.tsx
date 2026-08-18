"use client";

import type { ReactNode } from "react";
import { useLocation } from "@/lib/routerAdapter";
import { AnnouncementBar } from "./AnnouncementBar";
import { SiteFooter } from "./SiteFooter";
import { SiteHeader } from "./SiteHeader";
import { UniversalMobileNav } from "./UniversalMobileNav";

export function SiteLayout({ children }: { children: ReactNode }) {
  const pathname = useLocation().pathname;
  const isShop = pathname.startsWith("/shop");
  const isPortal = pathname.startsWith("/portal");

  return (
    <>
      {!isShop ? <AnnouncementBar /> : null}
      <SiteHeader />
      {children}
      {!isShop && !isPortal ? <SiteFooter /> : null}
    </>
  );
}
