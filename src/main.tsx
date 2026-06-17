import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "../css/styles.css";
import "../css/mobile.css";
import "../css/shop.css";
import "../css/pharm.css";
import "../css/checkout-intake.css";

// Marketing Pages CSS
import "../css/about.css";
import "../css/explore-treatments.css";
import "../css/faq.css";
import "../css/how-it-works.css";
import "../css/membership.css";
import "../css/resources.css";
import "../css/treatments.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
