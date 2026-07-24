"use client";

import React, { Suspense } from "react";
import { CartProvider } from "@/context/CartContext";
import { CheckoutProvider } from "@/context/CheckoutContext";
import { WishlistProvider } from "@/context/WishlistContext";
import { CheckoutIntakeWizard } from "@/components/shop/CheckoutIntakeWizard";
import { ScrollToTop } from "@/components/layout/ScrollToTop";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <Suspense fallback={null}>
      <CartProvider>
        <CheckoutProvider>
          <WishlistProvider>
            <ScrollToTop />
            {children}
            <CheckoutIntakeWizard />
          </WishlistProvider>
        </CheckoutProvider>
      </CartProvider>
    </Suspense>
  );
}
