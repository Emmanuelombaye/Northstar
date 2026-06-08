import type { ReactNode } from "react";
import { AnnouncementBar } from "./AnnouncementBar";
import { SiteFooter } from "./SiteFooter";
import { SiteHeader } from "./SiteHeader";
import { useMobileNav } from "../../hooks/useMobileNav";

export function SiteLayout({ children }: { children: ReactNode }) {
  useMobileNav();

  return (
    <>
      <AnnouncementBar />
      <SiteHeader />
      {children}
      <SiteFooter />
    </>
  );
}
