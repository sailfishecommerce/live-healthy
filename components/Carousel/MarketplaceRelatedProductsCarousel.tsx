/* eslint-disable @next/next/no-img-element */
import dynamic from "next/dynamic";

const TinySlider: any = dynamic(() => import("tiny-slider-react"), {
  ssr: false,
});


export default function MarketplaceRelatedProductsCarousel() {
  const settings = {
    items: 2,
    gutter: 16,
    controls: false,
    nav: true,
    responsive: {
      "0": { items: 1 },
      "500": { items: 2 },
      "768": { items: 3 },
      "992": { items: 4 },
    },
  };
  return (
    <div className="tns-carousel">
      <TinySlider onClick={() => {}} settings={settings}>
        {/*<!-- Product-->*/}
        <div>
          <div className="card product-card-alt">
            <div className="product-thumb">
              <button className="btn-wishlist btn-sm" type="button">
                <i className="ci-heart"></i>
              </button>
              <div className="product-card-actions">
                <a
                  className="btn btn-light btn-icon btn-shadow fs-base mx-2"
                  href="#"
                >
                  <i className="ci-eye"></i>
                </a>
                <button
                  className="btn btn-light btn-icon btn-shadow fs-base mx-2"
                  type="button"
                >
                  <i className="ci-cart"></i>
                </button>
              </div>
              <a className="product-thumb-overlay" href="#"></a>
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
                <a href="#">Floating Phone and Tablet Mockup</a>
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
                <a
                  className="btn btn-light btn-icon btn-shadow fs-base mx-2"
                  href="#"
                >
                  <i className="ci-eye"></i>
                </a>
                <button
                  className="btn btn-light btn-icon btn-shadow fs-base mx-2"
                  type="button"
                >
                  <i className="ci-cart"></i>
                </button>
              </div>
              <a className="product-thumb-overlay" href="#"></a>
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
                  <i className="star-rating-icon ci-star-half active"></i>
                  <i className="star-rating-icon ci-star"></i>
                </div>
              </div>
              <h3 className="product-title fs-sm mb-2">
                <a href="#">Project Devices Showcase (PSD)</a>
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
                <a
                  className="btn btn-light btn-icon btn-shadow fs-base mx-2"
                  href="#"
                >
                  <i className="ci-eye"></i>
                </a>
                <button
                  className="btn btn-light btn-icon btn-shadow fs-base mx-2"
                  type="button"
                >
                  <i className="ci-cart"></i>
                </button>
              </div>
              <a className="product-thumb-overlay" href="#"></a>
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
                  <i className="star-rating-icon ci-star-filled active"></i>
                  <i className="star-rating-icon ci-star-half active"></i>
                </div>
              </div>
              <h3 className="product-title fs-sm mb-2">
                <a href="#">Business Card Branding Mockup</a>
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
                <a
                  className="btn btn-light btn-icon btn-shadow fs-base mx-2"
                  href="#"
                >
                  <i className="ci-eye"></i>
                </a>
                <button
                  className="btn btn-light btn-icon btn-shadow fs-base mx-2"
                  type="button"
                >
                  <i className="ci-cart"></i>
                </button>
              </div>
              <a className="product-thumb-overlay" href="#"></a>
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
                <a href="#">Gravity Device Mockups (PSD)</a>
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
  );
}
