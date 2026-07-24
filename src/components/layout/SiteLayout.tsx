"use client";

import type { ReactNode } from "react";
import { useLocation } from "@/lib/routerAdapter";
import { AnnouncementBar } from "./AnnouncementBar";
import { SiteFooter } from "./SiteFooter";
import { SiteHeader } from "./SiteHeader";
import { UniversalMobileNav } from "./UniversalMobileNav";

export function SiteLayout({ children }: { children: ReactNode }) {
  const isShop = useLocation().pathname.startsWith("/shop");

  return (
    <>
      {!isShop ? <AnnouncementBar /> : null}
      <SiteHeader />
      {children}
      {!isShop ? <SiteFooter /> : null}
      <UniversalMobileNav />
    </>
  );
}
