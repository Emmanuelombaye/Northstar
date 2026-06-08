import { Link, useParams } from "react-router-dom";

import { useMemo } from "react";

import {

  PHARMACY_PRODUCTS,

  formatPrice,

  getProductBySlug,

} from "../store/products";

import { useCartContext } from "../context/CartContext";
import { useCheckoutContext } from "../context/CheckoutContext";

import { useMediaLoader } from "../hooks/useMediaLoader";

import { useScrollReveal } from "../hooks/useScrollReveal";

import { PharmacyProductCard } from "../components/shop/PharmacyProductCard";

import { CartDrawer } from "../components/shop/CartDrawer";
import { ProductImageFlip } from "../components/shop/ProductImageFlip";
import { ShopPharmacyBar } from "../components/shop/ShopPharmacyBar";
import { ShopStoreNav } from "../components/shop/ShopStoreNav";
import { CookieBanner } from "../components/shop/CookieBanner";
import { getProductImagePair } from "../lib/productImages";



export function ProductDetailPage() {

  const { slug = "" } = useParams();

  const product = getProductBySlug(slug);

  const { add } = useCartContext();
  const { startCheckout } = useCheckoutContext();



  const related = useMemo(() => {

    if (!product) return [];

    const same = PHARMACY_PRODUCTS.filter(
      (p) => p.category === product.category && p.slug !== product.slug,
    );
    const cross = PHARMACY_PRODUCTS.filter(
      (p) => p.popular && p.slug !== product.slug && p.category !== product.category,
    ).slice(0, 4);
    return [...same, ...cross].slice(0, 8);

  }, [product]);



  useMediaLoader([slug]);

  useScrollReveal([slug]);



  if (!product) {

    return (

      <main className="shop-page shop-pdp pharm-store">
        <ShopPharmacyBar />

        <div className="shop-wrap shop-pdp-missing">

          <h1>Program not found</h1>

          <Link to="/shop" className="btn btn-navy btn-pill">

            Back to store

          </Link>

        </div>

      </main>

    );

  }



  const pair = getProductImagePair(product);
  const images = [pair.primary, pair.secondary, ...(product.gallery ?? [])].filter(
    (v, i, a) => a.indexOf(v) === i,
  );



  return (

    <main className="shop-page shop-pdp pharm-store">
      <ShopPharmacyBar />
      <ShopStoreNav />

      <div className="shop-wrap">

        <nav className="shop-breadcrumb" aria-label="Breadcrumb">

          <Link to="/shop">Store</Link>

          <span>/</span>

          <span>{product.categoryLabel}</span>

          <span>/</span>

          <span aria-current="page">{product.name}</span>

        </nav>



        <div className="shop-pdp-grid">

          <div className="shop-pdp-gallery" data-reveal>

            <div className="shop-pdp-main-img pharm-pdp-flip">

              <ProductImageFlip product={product} autoPlay />

            </div>

            {images.length > 1 ? (

              <div className="shop-pdp-thumbs">

                {images.map((src) => (

                  <img key={src} src={src} alt="" loading="lazy" decoding="async" />

                ))}

              </div>

            ) : null}

          </div>



          <div className="shop-pdp-info" data-reveal>

            {product.badge ? <span className="shop-badge">{product.badge}</span> : null}

            <p className="shop-card-category">{product.categoryLabel}</p>

            {product.vendor ? <p className="shop-pdp-vendor">{product.vendor}</p> : null}

            <h1>{product.name}</h1>

            {product.dosageForm ? (
              <p className="shop-pdp-form">
                {product.dosageForm}
                {product.strength ? ` · ${product.strength}` : ""}
              </p>
            ) : null}

            <p className="shop-pdp-tagline">{product.tagline}</p>

            <div className="shop-card-rating shop-pdp-rating">

              <span className="shop-stars" aria-hidden="true">

                {"★".repeat(Math.round(product.rating))}

                {"☆".repeat(5 - Math.round(product.rating))}

              </span>

              <span>

                {product.rating} · {product.reviews.toLocaleString()} reviews

              </span>

            </div>

            <div className="shop-pdp-pricing">

              <strong>{formatPrice(product.priceMonthly)}</strong>

              {product.compareAtPrice ? <s>${product.compareAtPrice}/mo</s> : null}

            </div>

            <p className="shop-pdp-desc">{product.longDescription}</p>



            <ul className="shop-pdp-features">

              {product.features.map((f) => (

                <li key={f}>{f}</li>

              ))}

            </ul>



            <div className="shop-pdp-ctas">

              <button type="button" className="btn btn-gold btn-pill btn-lg shop-pdp-checkout" onClick={() => startCheckout(product.slug)}>

                Start secure checkout

              </button>

              <button type="button" className="btn btn-navy btn-pill btn-lg" onClick={() => add(product.slug)}>

                Add to cart

              </button>

            </div>



            <div className="shop-pdp-includes">

              <p className="plan-includes-title">All plans include:</p>

              <ul className="plan-includes">

                {product.includes.map((item) => (

                  <li key={item}>{item}</li>

                ))}

              </ul>

            </div>

          </div>

        </div>



        {related.length > 0 ? (

          <section className="shop-pdp-related">

            <h2>You may also like</h2>
            <p className="pharm-section-sub">Related {product.categoryLabel} programs &amp; patient favorites</p>

            <div className="pharm-featured-grid">

              {related.map((p, i) => (

                <PharmacyProductCard key={p.slug} product={p} index={i} />

              ))}

            </div>

          </section>

        ) : null}

      </div>

      <CartDrawer />
      <CookieBanner />

    </main>

  );

}

