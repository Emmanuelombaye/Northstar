import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CartProvider } from "./context/CartContext";
import { WishlistProvider } from "./context/WishlistContext";
import { SiteLayout } from "./components/layout/SiteLayout";
import { HomePage } from "./pages/HomePage";
import { ShopPage } from "./pages/ShopPage";
import { ProductDetailPage } from "./pages/ProductDetailPage";

export default function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <WishlistProvider>
        <SiteLayout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/shop" element={<ShopPage />} />
            <Route path="/shop/product/:slug" element={<ProductDetailPage />} />
          </Routes>
        </SiteLayout>
        </WishlistProvider>
      </CartProvider>
    </BrowserRouter>
  );
}
