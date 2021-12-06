/* eslint-disable @next/next/no-img-element */
import dynamic from "next/dynamic";

const TinySlider: any = dynamic(() => import("tiny-slider-react"), {
  ssr: false,
});

export default function ShopSingleV2Carousel() {
  const otherProductSettings = {
    items: 2,
    controls: true,
    nav: false,
    responsive: {
      "0": { items: 1 },
      "500": { items: 2, gutter: 18 },
      "768": { items: 3, gutter: 20 },
      "1100": { items: 4, gutter: 30 },
    },
    controlsText: [
      '<i class="ci-arrow-left"></i>',
      '<i class="ci-arrow-right"></i>',
    ],
  };

  const productSettings = {
    items: 1,
    controls: false,
    nav: true,
  };
  return (
    <div className="container pt-lg-2 pb-5 mb-md-3">
      <h2 className="h3 text-center pb-4">You may also like</h2>
      <div className="tns-carousel tns-controls-static tns-controls-outside">
        <TinySlider onClick={() => {}} settings={otherProductSettings}>
          <div>
            <div className="card product-card card-static">
              <button
                className="btn-wishlist btn-sm"
                type="button"
                data-bs-toggle="tooltip"
                data-bs-placement="left"
                title="Add to wishlist"
              >
                <i className="ci-heart"></i>
              </button>
              <a className="card-img-top d-block overflow-hidden" href="#">
                <img src="/img/shop/catalog/66.jpg" alt="Product" />
              </a>
              <div className="card-body py-2">
                <a className="product-meta d-block fs-xs pb-1" href="#">
                  Smartwatches
                </a>
                <h3 className="product-title fs-sm">
                  <a href="#">Health &amp; Fitness Smartwatch</a>
                </h3>
                <div className="d-flex justify-content-between">
                  <div className="product-price">
                    <span className="text-accent">
                      $250.<small>00</small>
                    </span>
                  </div>
                  <div className="star-rating">
                    <i className="star-rating-icon ci-star-filled active"></i>
                    <i className="star-rating-icon ci-star-filled active"></i>
                    <i className="star-rating-icon ci-star-filled active"></i>
                    <i className="star-rating-icon ci-star-filled active"></i>
                    <i className="star-rating-icon ci-star"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="card product-card card-static">
              <button
                className="btn-wishlist btn-sm"
                type="button"
                data-bs-toggle="tooltip"
                data-bs-placement="left"
                title="Add to wishlist"
              >
                <i className="ci-heart"></i>
              </button>
              <a className="card-img-top d-block overflow-hidden" href="#">
                <img src="/img/shop/catalog/67.jpg" alt="Product" />
              </a>
              <div className="card-body py-2">
                <a className="product-meta d-block fs-xs pb-1" href="#">
                  Smartwatches
                </a>
                <h3 className="product-title fs-sm">
                  <a href="#">Heart Rate &amp; Activity Tracker</a>
                </h3>
                <div className="d-flex justify-content-between">
                  <div className="product-price text-accent">
                    $26.<small>99</small>
                  </div>
                  <div className="star-rating">
                    <i className="star-rating-icon ci-star-filled active"></i>
                    <i className="star-rating-icon ci-star-filled active"></i>
                    <i className="star-rating-icon ci-star-half active"></i>
                    <i className="star-rating-icon ci-star"></i>
                    <i className="star-rating-icon ci-star"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="card product-card card-static">
              <button
                className="btn-wishlist btn-sm"
                type="button"
                data-bs-toggle="tooltip"
                data-bs-placement="left"
                title="Add to wishlist"
              >
                <i className="ci-heart"></i>
              </button>
              <a className="card-img-top d-block overflow-hidden" href="#">
                <img src="/img/shop/catalog/64.jpg" alt="Product" />
              </a>
              <div className="card-body py-2">
                <a className="product-meta d-block fs-xs pb-1" href="#">
                  Smartwatches
                </a>
                <h3 className="product-title fs-sm">
                  <a href="#">Smart Watch Series 5, Aluminium</a>
                </h3>
                <div className="d-flex justify-content-between">
                  <div className="product-price text-accent">
                    $349.<small>99</small>
                  </div>
                  <div className="star-rating">
                    <i className="star-rating-icon ci-star-filled active"></i>
                    <i className="star-rating-icon ci-star-filled active"></i>
                    <i className="star-rating-icon ci-star-filled active"></i>
                    <i className="star-rating-icon ci-star-filled active"></i>
                    <i className="star-rating-icon ci-star"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="card product-card card-static">
              <button
                className="btn-wishlist btn-sm"
                type="button"
                data-bs-toggle="tooltip"
                data-bs-placement="left"
                title="Add to wishlist"
              >
                <i className="ci-heart"></i>
              </button>
              <a className="card-img-top d-block overflow-hidden" href="#">
                <img src="/img/shop/catalog/68.jpg" alt="Product" />
              </a>
              <div className="card-body py-2">
                <a className="product-meta d-block fs-xs pb-1" href="#">
                  Smartwatches
                </a>
                <h3 className="product-title fs-sm">
                  <a href="#">Health &amp; Fitness Smartwatch</a>
                </h3>
                <div className="d-flex justify-content-between">
                  <div className="product-price text-accent">
                    $118.<small>00</small>
                  </div>
                  <div className="star-rating">
                    <i className="star-rating-icon ci-star-filled active"></i>
                    <i className="star-rating-icon ci-star-filled active"></i>
                    <i className="star-rating-icon ci-star-filled active"></i>
                    <i className="star-rating-icon ci-star-filled active"></i>
                    <i className="star-rating-icon ci-star-filled active"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="card product-card card-static">
              <button
                className="btn-wishlist btn-sm"
                type="button"
                data-bs-toggle="tooltip"
                data-bs-placement="left"
                title="Add to wishlist"
              >
                <i className="ci-heart"></i>
              </button>
              <a className="card-img-top d-block overflow-hidden" href="#">
                <img src="/img/shop/catalog/69.jpg" alt="Product" />
              </a>
              <div className="card-body py-2">
                <a className="product-meta d-block fs-xs pb-1" href="#">
                  Smartwatches
                </a>
                <h3 className="product-title fs-sm">
                  <a href="#">Heart Rate &amp; Activity Tracker</a>
                </h3>
                <div className="d-flex justify-content-between">
                  <div className="product-price text-accent">
                    $25.<small>00</small>
                  </div>
                  <div className="star-rating">
                    <i className="star-rating-icon ci-star-filled active"></i>
                    <i className="star-rating-icon ci-star-filled active"></i>
                    <i className="star-rating-icon ci-star-filled active"></i>
                    <i className="star-rating-icon ci-star-half active"></i>
                    <i className="star-rating-icon ci-star"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </TinySlider>
      </div>
    </div>
  );
}
