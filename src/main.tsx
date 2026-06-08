import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "../css/styles.css";
import "../css/mobile.css";
import "../css/shop.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
