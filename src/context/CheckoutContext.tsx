import { createContext, useCallback, useContext, useState, type ReactNode } from "react";
import type { PharmacyProduct } from "../store/types";
import { getProductBySlug } from "../store/products";

type CheckoutContextValue = {
  open: boolean;
  product: PharmacyProduct | null;
  startCheckout: (slug: string) => void;
  closeCheckout: () => void;
};

const CheckoutContext = createContext<CheckoutContextValue | null>(null);

export function CheckoutProvider({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  const [product, setProduct] = useState<PharmacyProduct | null>(null);

  const startCheckout = useCallback((slug: string) => {
    const p = getProductBySlug(slug);
    if (!p) return;
    setProduct(p);
    setOpen(true);
  }, []);

  const closeCheckout = useCallback(() => {
    setOpen(false);
    setProduct(null);
  }, []);

  return (
    <CheckoutContext.Provider value={{ open, product, startCheckout, closeCheckout }}>
      {children}
    </CheckoutContext.Provider>
  );
}

export function useCheckoutContext() {
  const ctx = useContext(CheckoutContext);
  if (!ctx) throw new Error("useCheckoutContext must be used within CheckoutProvider");
  return ctx;
}
