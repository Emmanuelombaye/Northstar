import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CartProvider } from "./context/CartContext";
import { CheckoutProvider } from "./context/CheckoutContext";
import { WishlistProvider } from "./context/WishlistContext";
import { CheckoutIntakeWizard } from "./components/shop/CheckoutIntakeWizard";
import { SiteLayout } from "./components/layout/SiteLayout";
import { ScrollToTop } from "./components/layout/ScrollToTop";
import { HomePage } from "./pages/HomePage";
import { ShopPage } from "./pages/ShopPage";
import { ProductDetailPage } from "./pages/ProductDetailPage";

// Marketing Pages
import { HowItWorksPage } from "./pages/marketing/HowItWorksPage";
import { AboutPage } from "./pages/marketing/AboutPage";
import { FaqPage } from "./pages/marketing/FaqPage";
import { ExploreTreatmentsPage } from "./pages/marketing/ExploreTreatmentsPage";
import { MembershipPage } from "./pages/marketing/MembershipPage";
import { PrivacyPage } from "./pages/marketing/PrivacyPage";
import { TermsPage } from "./pages/marketing/TermsPage";
import { TelehealthConsentPage } from "./pages/marketing/TelehealthConsentPage";
import { NadPage } from "./pages/marketing/NadPage";
import { SemaglutidePage } from "./pages/marketing/SemaglutidePage";
import { SermorelinPage } from "./pages/marketing/SermorelinPage";
import { TirzepatidePage } from "./pages/marketing/TirzepatidePage";
import { ResourcesPage } from "./pages/marketing/ResourcesPage";

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <CartProvider>
        <CheckoutProvider>
        <WishlistProvider>
        <SiteLayout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/shop" element={<ShopPage />} />
            <Route path="/shop/product/:slug" element={<ProductDetailPage />} />
            
            {/* Marketing Routes */}
            <Route path="/how-it-works" element={<HowItWorksPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/faq" element={<FaqPage />} />
            <Route path="/explore-treatments" element={<ExploreTreatmentsPage />} />
            <Route path="/membership" element={<MembershipPage />} />
            <Route path="/privacy" element={<PrivacyPage />} />
            <Route path="/terms" element={<TermsPage />} />
            <Route path="/telehealth-consent" element={<TelehealthConsentPage />} />
            <Route path="/nad" element={<NadPage />} />
            <Route path="/semaglutide" element={<SemaglutidePage />} />
            <Route path="/sermorelin" element={<SermorelinPage />} />
            <Route path="/tirzepatide" element={<TirzepatidePage />} />
            <Route path="/resources" element={<ResourcesPage />} />
          </Routes>
        </SiteLayout>
        <CheckoutIntakeWizard />
        </WishlistProvider>
        </CheckoutProvider>
      </CartProvider>
    </BrowserRouter>
  );
}
