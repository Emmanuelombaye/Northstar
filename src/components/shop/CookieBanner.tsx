import { useEffect, useState } from "react";

const KEY = "northstar-cookies-ok";

export function CookieBanner() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!localStorage.getItem(KEY)) setOpen(true);
  }, []);

  if (!open) return null;

  return (
    <div className="pharm-cookie" role="dialog" aria-label="Cookie notice">
      <div className="pharm-cookie-inner">
        <strong>Cookies</strong>
        <p>We use cookies to make your North Star MD pharmacy experience better.</p>
        <button
          type="button"
          onClick={() => {
            localStorage.setItem(KEY, "1");
            setOpen(false);
          }}
        >
          OK
        </button>
      </div>
    </div>
  );
}
