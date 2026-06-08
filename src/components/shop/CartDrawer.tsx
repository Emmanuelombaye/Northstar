import { useCartContext } from "../../context/CartContext";
import { useCheckoutContext } from "../../context/CheckoutContext";
import { formatPrice } from "../../store/products";

export function CartDrawer() {
  const { items, open, setOpen, remove, total } = useCartContext();
  const { startCheckout } = useCheckoutContext();

  if (!open) return null;

  return (
    <>
      <button type="button" className="shop-cart-overlay" aria-label="Close cart" onClick={() => setOpen(false)} />
      <aside className="shop-cart-drawer" role="dialog" aria-label="Shopping cart">
        <header className="shop-cart-head">
          <h2>Your programs</h2>
          <button type="button" className="shop-cart-close" onClick={() => setOpen(false)} aria-label="Close">
            ×
          </button>
        </header>

        {items.length === 0 ? (
          <p className="shop-cart-empty">Your cart is empty. Browse treatments below.</p>
        ) : (
          <ul className="shop-cart-list">
            {items.map((item) => (
              <li key={item.slug} className="shop-cart-item">
                <img src={item.image} alt="" />
                <div>
                  <strong>{item.name}</strong>
                  <span>{formatPrice(item.priceMonthly)}</span>
                </div>
                <button type="button" onClick={() => remove(item.slug)} aria-label={`Remove ${item.name}`}>
                  ×
                </button>
              </li>
            ))}
          </ul>
        )}

        <footer className="shop-cart-foot">
          {items.length > 0 ? (
            <>
              <p className="shop-cart-total">
                Est. from <strong>{formatPrice(total)}</strong>
              </p>
              <p className="shop-cart-note">
                Medical programs are enrolled one at a time. Secure checkout walks you through clinical intake before patient login.
              </p>
              <button
                type="button"
                className="btn btn-gold btn-pill btn-block"
                onClick={() => {
                  const last = items[items.length - 1];
                  if (last) {
                    setOpen(false);
                    startCheckout(last.slug);
                  }
                }}
              >
                Secure checkout
              </button>
            </>
          ) : (
            <button type="button" className="btn btn-navy btn-pill btn-block" onClick={() => setOpen(false)}>
              Continue shopping
            </button>
          )}
        </footer>
      </aside>
    </>
  );
}
