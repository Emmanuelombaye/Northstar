import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { CartProvider } from "./context/CartContext";
import { CheckoutProvider } from "./context/CheckoutContext";
import { WishlistProvider } from "./context/WishlistContext";
import { CheckoutIntakeWizard } from "./components/shop/CheckoutIntakeWizard";
import { SiteLayout } from "./components/layout/SiteLayout";
import { ScrollToTop } from "./components/layout/ScrollToTop";
import { HomePage } from "./pages/HomePage";
import { ShopPage } from "./pages/ShopPage";
import { ProductDetailPage } from "./pages/ProductDetailPage";
import { StartPage } from "./pages/start/StartPage";
import { PortalApp } from "./pages/portal/PortalApp";

// Pax-style marketing pages
import { VisionPage } from "./pages/marketing/VisionPage";
import { ThreatsPage } from "./pages/marketing/ThreatsPage";
import { EducationPage } from "./pages/marketing/EducationPage";
import { TreatmentsHubPage } from "./pages/marketing/TreatmentsHubPage";
import { AdvisorsPage } from "./pages/marketing/AdvisorsPage";

// Legacy marketing pages (kept for deep links / SEO)
import { HowItWorksPage } from "./pages/marketing/HowItWorksPage";
import { FaqPage } from "./pages/marketing/FaqPage";
import { MembershipPage } from "./pages/marketing/MembershipPage";
import { PrivacyPage } from "./pages/marketing/PrivacyPage";
import { TermsPage } from "./pages/marketing/TermsPage";
import { TelehealthConsentPage } from "./pages/marketing/TelehealthConsentPage";
import { NadPage } from "./pages/marketing/NadPage";
import { SemaglutidePage } from "./pages/marketing/SemaglutidePage";
import { SermorelinPage } from "./pages/marketing/SermorelinPage";
import { TirzepatidePage } from "./pages/marketing/TirzepatidePage";

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <CartProvider>
        <CheckoutProvider>
          <WishlistProvider>
            <Routes>
              {/* Standalone surfaces — no SiteLayout chrome */}
              <Route path="/start" element={<StartPage />} />
              <Route path="/portal/*" element={<PortalApp />} />

              <Route
                path="*"
                element={
                  <>
                    <SiteLayout>
                      <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/shop" element={<ShopPage />} />
                        <Route path="/shop/product/:slug" element={<ProductDetailPage />} />

                        {/* Pax-style flow */}
                        <Route path="/vision" element={<VisionPage />} />
                        <Route path="/threats" element={<ThreatsPage />} />
                        <Route path="/treatments" element={<TreatmentsHubPage />} />
                        <Route path="/advisors" element={<AdvisorsPage />} />
                        <Route path="/education" element={<EducationPage />} />

                        {/* Legacy aliases */}
                        <Route path="/about" element={<Navigate to="/advisors" replace />} />
                        <Route path="/resources" element={<Navigate to="/education" replace />} />
                        <Route path="/explore-treatments" element={<Navigate to="/treatments" replace />} />

                        {/* Legacy pages still available */}
                        <Route path="/how-it-works" element={<HowItWorksPage />} />
                        <Route path="/faq" element={<FaqPage />} />
                        <Route path="/membership" element={<MembershipPage />} />
                        <Route path="/privacy" element={<PrivacyPage />} />
                        <Route path="/terms" element={<TermsPage />} />
                        <Route path="/telehealth-consent" element={<TelehealthConsentPage />} />
                        <Route path="/nad" element={<NadPage />} />
                        <Route path="/semaglutide" element={<SemaglutidePage />} />
                        <Route path="/sermorelin" element={<SermorelinPage />} />
                        <Route path="/tirzepatide" element={<TirzepatidePage />} />
                      </Routes>
                    </SiteLayout>
                    <CheckoutIntakeWizard />
                  </>
                }
              />
            </Routes>
          </WishlistProvider>
        </CheckoutProvider>
      </CartProvider>
    </BrowserRouter>
  );
}
