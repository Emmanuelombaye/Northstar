import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Scroll to the top of the window on every route change
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant" // Use instant to prevent weird scrolling animations between pages
    });
  }, [pathname]);

  return null;
}
