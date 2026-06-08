export function ShopNewsletter() {
  return (
    <section className="pharm-newsletter">
      <div className="pharm-wrap pharm-newsletter-inner">
        <div>
          <h2>Join Our Newsletter And Get…</h2>
          <p>Timely updates on new treatments, offers, and North Star MD programs.</p>
        </div>
        <form
          className="pharm-newsletter-form"
          onSubmit={(e) => {
            e.preventDefault();
            alert("Thanks! We'll send North Star MD offers to your inbox.");
          }}
        >
          <input type="email" required placeholder="Your email address" aria-label="Email for newsletter" />
          <button type="submit" className="pharm-newsletter-btn">
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
}
