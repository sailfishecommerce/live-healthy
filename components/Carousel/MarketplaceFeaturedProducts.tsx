/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import dynamic from "next/dynamic";

const TinySlider: any = dynamic(() => import("tiny-slider-react"), {
  ssr: false,
});

export default function MarketplaceFeaturedProducts() {
  const settings = {
    items: 2,
    gutter: 15,
    controls: false,
    nav: true,
    responsive: {
      "0": { items: 1 },
      "500": { items: 2 },
      "768": { items: 3 },
      "992": { items: 3, gutter: 30 },
    },
    navPosition: "bottom",
  };
  return (
    <section
      className="container position-relative pt-3 pt-lg-0 pb-5 mt-lg-n10"
      style={{ zIndex: 10 }}
    >
      <div className="card px-lg-2 border-0 shadow-lg">
        <div className="card-body px-4 pt-5 pb-4">
          <h2 className="h3 text-center">Discover featured products</h2>
          <p className="text-muted text-center">
            Every week we hand-pick some of the best items from our collection
          </p>
          {/*<!-- Carousel-->*/}
          <div className="tns-carousel pt-4">
            <TinySlider onClick={() => {}} settings={settings}>
              {/*<!-- Product-->*/}
              <div>
                <div className="card product-card-alt">
                  <div className="product-thumb">
                    <button className="btn-wishlist btn-sm" type="button">
                      <i className="ci-heart"></i>
                    </button>
                    <div className="product-card-actions">
                      <Link href="/marketplace-single" passHref>
                        <a className="btn btn-light btn-icon btn-shadow fs-base mx-2">
                          <i className="ci-eye"></i>
                        </a>
                      </Link>
                      <button
                        className="btn btn-light btn-icon btn-shadow fs-base mx-2"
                        type="button"
                      >
                        <i className="ci-cart"></i>
                      </button>
                    </div>
                    <Link href="/marketplace-single" passHref>
                      <a className="product-thumb-overlay"></a>
                    </Link>
                    <img src="/img/marketplace/products/02.jpg" alt="Product" />
                  </div>
                  <div className="card-body">
                    <div className="d-flex flex-wrap justify-content-between align-items-start pb-2">
                      <div className="text-muted fs-xs me-1">
                        by{" "}
                        <a className="product-meta fw-medium" href="#">
                          Bandicoot Std.{" "}
                        </a>
                        in{" "}
                        <a className="product-meta fw-medium" href="#">
                          Graphics
                        </a>
                      </div>
                      <div className="star-rating">
                        <i className="star-rating-icon ci-star-filled active"></i>
                        <i className="star-rating-icon ci-star-filled active"></i>
                        <i className="star-rating-icon ci-star-filled active"></i>
                        <i className="star-rating-icon ci-star-filled active"></i>
                        <i className="star-rating-icon ci-star-filled active"></i>
                      </div>
                    </div>
                    <h3 className="product-title fs-sm mb-2">
                      <Link href="/marketplace-single" passHref>
                        <a>Floating Phone and Tablet Mockup (PSD)</a>
                      </Link>
                    </h3>
                    <div className="d-flex flex-wrap justify-content-between align-items-center">
                      <div className="fs-sm me-2">
                        <i className="ci-download text-muted me-1"></i>
                        109
                        <span className="fs-xs ms-1">Sales</span>
                      </div>
                      <div className="bg-faded-accent text-accent rounded-1 py-1 px-2">
                        $15.<small>00</small>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/*<!-- Product-->*/}
              <div>
                <div className="card product-card-alt">
                  <div className="product-thumb">
                    <button className="btn-wishlist btn-sm" type="button">
                      <i className="ci-heart"></i>
                    </button>
                    <div className="product-card-actions">
                      <Link href="/marketplace-single" passHref>
                        <a className="btn btn-light btn-icon btn-shadow fs-base mx-2">
                          <i className="ci-eye"></i>
                        </a>
                      </Link>
                      <button
                        className="btn btn-light btn-icon btn-shadow fs-base mx-2"
                        type="button"
                      >
                        <i className="ci-cart"></i>
                      </button>
                    </div>
                    <Link href="/marketplace-single" passHref>
                      <a className="product-thumb-overlay"></a>
                    </Link>
                    <img src="/img/marketplace/products/03.jpg" alt="Product" />
                  </div>
                  <div className="card-body">
                    <div className="d-flex flex-wrap justify-content-between align-items-start pb-2">
                      <div className="text-muted fs-xs me-1">
                        by{" "}
                        <a className="product-meta fw-medium" href="#">
                          Bandicoot Std.{" "}
                        </a>
                        in{" "}
                        <a className="product-meta fw-medium" href="#">
                          Graphics
                        </a>
                      </div>
                      <div className="star-rating">
                        <i className="star-rating-icon ci-star-filled active"></i>
                        <i className="star-rating-icon ci-star-filled active"></i>
                        <i className="star-rating-icon ci-star-filled active"></i>
                        <i className="star-rating-icon ci-star-filled active"></i>
                        <i className="star-rating-icon ci-star"></i>
                      </div>
                    </div>
                    <h3 className="product-title fs-sm mb-2">
                      <Link href="/marketplace-single" passHref>
                        <a>Project Devices Showcase (PSD)</a>
                      </Link>
                    </h3>
                    <div className="d-flex flex-wrap justify-content-between align-items-center">
                      <div className="fs-sm me-2">
                        <i className="ci-download text-muted me-1"></i>
                        95
                        <span className="fs-xs ms-1">Sales</span>
                      </div>
                      <div className="bg-faded-accent text-accent rounded-1 py-1 px-2">
                        $18.<small>00</small>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/*<!-- Product-->*/}
              <div>
                <div className="card product-card-alt">
                  <div className="product-thumb">
                    <button className="btn-wishlist btn-sm" type="button">
                      <i className="ci-heart"></i>
                    </button>
                    <div className="product-card-actions">
                      <Link href="/marketplace-single" passHref>
                        <a className="btn btn-light btn-icon btn-shadow fs-base mx-2">
                          <i className="ci-eye"></i>
                        </a>
                      </Link>
                      <button
                        className="btn btn-light btn-icon btn-shadow fs-base mx-2"
                        type="button"
                      >
                        <i className="ci-cart"></i>
                      </button>
                    </div>
                    <Link href="/marketplace-single" passHref>
                      <a className="product-thumb-overlay"></a>
                    </Link>
                    <img src="/img/marketplace/products/08.jpg" alt="Product" />
                  </div>
                  <div className="card-body">
                    <div className="d-flex flex-wrap justify-content-between align-items-start pb-2">
                      <div className="text-muted fs-xs me-1">
                        by{" "}
                        <a className="product-meta fw-medium" href="#">
                          pixels{" "}
                        </a>
                        in{" "}
                        <a className="product-meta fw-medium" href="#">
                          Graphics
                        </a>
                      </div>
                      <div className="star-rating">
                        <i className="star-rating-icon ci-star-filled active"></i>
                        <i className="star-rating-icon ci-star-filled active"></i>
                        <i className="star-rating-icon ci-star-filled active"></i>
                        <i className="star-rating-icon ci-star-half active"></i>
                        <i className="star-rating-icon ci-star"></i>
                      </div>
                    </div>
                    <h3 className="product-title fs-sm mb-2">
                      <Link href="/marketplace-single" passHref>
                        <a>Business Card Branding Mockup</a>
                      </Link>
                    </h3>
                    <div className="d-flex flex-wrap justify-content-between align-items-center">
                      <div className="fs-sm me-2">
                        <i className="ci-download text-muted me-1"></i>
                        316
                        <span className="fs-xs ms-1">Sales</span>
                      </div>
                      <div className="bg-faded-accent text-accent rounded-1 py-1 px-2">
                        $17.<small>00</small>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/*<!-- Product-->*/}
              <div>
                <div className="card product-card-alt">
                  <div className="product-thumb">
                    <button className="btn-wishlist btn-sm" type="button">
                      <i className="ci-heart"></i>
                    </button>
                    <div className="product-card-actions">
                      <Link href="/marketplace-single" passHref>
                        <a className="btn btn-light btn-icon btn-shadow fs-base mx-2">
                          <i className="ci-eye"></i>
                        </a>
                      </Link>
                      <button
                        className="btn btn-light btn-icon btn-shadow fs-base mx-2"
                        type="button"
                      >
                        <i className="ci-cart"></i>
                      </button>
                    </div>
                    <Link href="/marketplace-single" passHref>
                      <a className="product-thumb-overlay"></a>
                    </Link>
                    <img src="/img/marketplace/products/07.jpg" alt="Product" />
                  </div>
                  <div className="card-body">
                    <div className="d-flex flex-wrap justify-content-between align-items-start pb-2">
                      <div className="text-muted fs-xs me-1">
                        by{" "}
                        <a className="product-meta fw-medium" href="#">
                          pixels{" "}
                        </a>
                        in{" "}
                        <a className="product-meta fw-medium" href="#">
                          Graphics
                        </a>
                      </div>
                      <div className="star-rating">
                        <i className="star-rating-icon ci-star-filled active"></i>
                        <i className="star-rating-icon ci-star-filled active"></i>
                        <i className="star-rating-icon ci-star-filled active"></i>
                        <i className="star-rating-icon ci-star-filled active"></i>
                        <i className="star-rating-icon ci-star"></i>
                      </div>
                    </div>
                    <h3 className="product-title fs-sm mb-2">
                      <Link href="/marketplace-single" passHref>
                        <a>Gravity Device Mockups (PSD)</a>
                      </Link>
                    </h3>
                    <div className="d-flex flex-wrap justify-content-between align-items-center">
                      <div className="fs-sm me-2">
                        <i className="ci-download text-muted me-1"></i>
                        234
                        <span className="fs-xs ms-1">Sales</span>
                      </div>
                      <div className="bg-faded-accent text-accent rounded-1 py-1 px-2">
                        $16.<small>00</small>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </TinySlider>
          </div>
        </div>
      </div>
    </section>
  );
}
