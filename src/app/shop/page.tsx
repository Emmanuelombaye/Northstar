import { Suspense } from "react";
import { SiteLayout } from "@/components/layout/SiteLayout";
import { ShopPage } from "@/views/ShopPage";

export default function Shop() {
  return (
    <SiteLayout>
      <Suspense fallback={null}>
        <ShopPage />
      </Suspense>
    </SiteLayout>
  );
}
