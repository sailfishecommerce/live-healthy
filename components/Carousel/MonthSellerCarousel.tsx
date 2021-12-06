/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import dynamic from "next/dynamic";

const TinySlider: any = dynamic(() => import("tiny-slider-react"), {
  ssr: false,
});


export default function MonthSellerCarousel() {
  const settings = {
    items: 2,
    gutter: 16,
    controls: false,
    nav: true,
    responsive: { "0": { items: 1 }, "500": { items: 2 }, "768": { items: 3 } },
  };
  return (
    <div className="col-lg-8">
      <div className="tns-carousel">
        <TinySlider onClick={() => {}} settings={settings}>
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
                <img src="/img/marketplace/products/13.jpg" alt="Product" />
              </div>
              <div className="card-body">
                <h3 className="product-title fs-sm mb-2">
                  <Link href="/marketplace-single" passHref>
                    <a>Hardcover Book Catalog Mockup</a>
                  </Link>
                </h3>
                <div className="d-flex flex-wrap justify-content-between align-items-center">
                  <div className="fs-sm me-2">
                    <i className="ci-download text-muted me-1"></i>
                    39
                    <span className="fs-xs ms-1">Sales</span>
                  </div>
                  <div className="bg-faded-accent text-accent rounded-1 py-1 px-2">
                    $12.
                    <small>00</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
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
                <img src="/img/marketplace/products/14.jpg" alt="Product" />
              </div>
              <div className="card-body">
                <h3 className="product-title fs-sm mb-2">
                  <Link href="/marketplace-single" passHref>
                    <a>Top View Smartwatch 3D Render</a>
                  </Link>
                </h3>
                <div className="d-flex flex-wrap justify-content-between align-items-center">
                  <div className="fs-sm me-2">
                    <i className="ci-download text-muted me-1"></i>
                    28
                    <span className="fs-xs ms-1">Sales</span>
                  </div>
                  <div className="bg-faded-accent text-accent rounded-1 py-1 px-2">
                    $14.
                    <small>00</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
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
                    $16.
                    <small>00</small>
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
