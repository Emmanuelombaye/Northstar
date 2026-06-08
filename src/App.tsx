import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CartProvider } from "./context/CartContext";
import { CheckoutProvider } from "./context/CheckoutContext";
import { WishlistProvider } from "./context/WishlistContext";
import { CheckoutIntakeWizard } from "./components/shop/CheckoutIntakeWizard";
import { SiteLayout } from "./components/layout/SiteLayout";
import { HomePage } from "./pages/HomePage";
import { ShopPage } from "./pages/ShopPage";
import { ProductDetailPage } from "./pages/ProductDetailPage";

export default function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <CheckoutProvider>
        <WishlistProvider>
        <SiteLayout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/shop" element={<ShopPage />} />
            <Route path="/shop/product/:slug" element={<ProductDetailPage />} />
          </Routes>
        </SiteLayout>
        <CheckoutIntakeWizard />
        </WishlistProvider>
        </CheckoutProvider>
      </CartProvider>
    </BrowserRouter>
  );
}
