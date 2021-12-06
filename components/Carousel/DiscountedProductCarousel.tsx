/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import dynamic from "next/dynamic";

const TinySlider: any = dynamic(() => import("tiny-slider-react"), {
  ssr: false,
});

export default function DiscountedProductCarousel() {
  const settings = {
    items: 2,
    gutter: 16,
    controls: true,
    autoHeight: true,
    responsive: {
      "0": { items: 1 },
      "480": { items: 2 },
      "720": { items: 3 },
      "991": { items: 2 },
      "1140": { items: 3 },
      "1300": { items: 4 },
      "1500": { items: 5 },
    },
    controlsText: [
      '<i class="ci-arrow-left"></i>',
      '<i class="ci-arrow-right"></i>',
    ],
  };
  return (
    <section className="pt-3 pt-md-4">
      {/*<!-- Heading-->*/}
      <div className="d-flex flex-wrap justify-content-between align-items-center pt-1 border-bottom pb-4 mb-4">
        <h2 className="h3 mb-0 pt-3 me-3">Discounted products</h2>
        <div className="pt-3">
          <Link href="/grocery-catalog" passHref>
            <a className="btn btn-outline-accent btn-sm">
              More products
              <i className="ci-arrow-right ms-1 me-n1"></i>
            </a>
          </Link>
        </div>
      </div>
      <div className="tns-carousel tns-controls-static tns-controls-outside tns-nav-enabled pt-2">
        <TinySlider onClick={() => {}} settings={settings}>
          {/*<!-- Product-->*/}
          <div>
            <div className="card product-card card-static pb-3">
              <span className="badge bg-danger badge-shadow">Sale</span>
              <button
                className="btn-wishlist btn-sm"
                type="button"
                data-bs-toggle="tooltip"
                data-bs-placement="left"
                title="Add to wishlist"
              >
                <i className="ci-heart"></i>
              </button>
              <Link href="/grocery-single" passHref>
                <a className="card-img-top d-block overflow-hidden">
                  <img src="/img/grocery/catalog/01.jpg" alt="Product" />
                </a>
              </Link>
              <div className="card-body py-2">
                <a className="product-meta d-block fs-xs pb-1" href="#">
                  Fruits and Vegetables
                </a>
                <h3 className="product-title fs-sm text-truncate">
                  <Link href="/grocery-single" passHref>
                    <a>Coconut, Indonesia (piece)</a>
                  </Link>
                </h3>
                <div className="product-price">
                  <span className="text-accent">
                    $1.<small>99</small>
                  </span>
                  <del className="fs-sm text-muted">
                    $2.<small>99</small>
                  </del>
                </div>
              </div>
              <div className="product-floating-btn">
                <button
                  className="btn btn-primary btn-shadow btn-sm"
                  type="button"
                >
                  +<i className="ci-cart fs-base ms-1"></i>
                </button>
              </div>
            </div>
          </div>
          {/*<!-- Product-->*/}
          <div>
            <div className="card product-card card-static pb-3">
              <span className="badge bg-danger badge-shadow">Sale</span>
              <button
                className="btn-wishlist btn-sm"
                type="button"
                data-bs-toggle="tooltip"
                data-bs-placement="left"
                title="Add to wishlist"
              >
                <i className="ci-heart"></i>
              </button>
              <Link href="/grocery-single" passHref>
                <a className="card-img-top d-block overflow-hidden">
                  <img src="/img/grocery/catalog/02.jpg" alt="Product" />
                </a>
              </Link>
              <div className="card-body py-2">
                <a className="product-meta d-block fs-xs pb-1" href="#">
                  Dairy and Eggs
                </a>
                <h3 className="product-title fs-sm text-truncate">
                  <Link href="/grocery-single" passHref>
                    <a>Soft Creme Cheese (200g)</a>
                  </Link>
                </h3>
                <div className="product-price">
                  <span className="text-accent">
                    $2.<small>99</small>
                  </span>
                  <del className="fs-sm text-muted">
                    $3.<small>99</small>
                  </del>
                </div>
              </div>
              <div className="product-floating-btn">
                <button
                  className="btn btn-primary btn-shadow btn-sm"
                  type="button"
                >
                  +<i className="ci-cart fs-base ms-1"></i>
                </button>
              </div>
            </div>
          </div>
          {/*<!-- Product-->*/}
          <div>
            <div className="card product-card card-static pb-3">
              <span className="badge bg-danger badge-shadow">Sale</span>
              <button
                className="btn-wishlist btn-sm"
                type="button"
                data-bs-toggle="tooltip"
                data-bs-placement="left"
                title="Add to wishlist"
              >
                <i className="ci-heart"></i>
              </button>
              <Link href="/grocery-single" passHref>
                <a className="card-img-top d-block overflow-hidden">
                  <img src="/img/grocery/catalog/03.jpg" alt="Product" />
                </a>
              </Link>
              <div className="card-body py-2">
                <a className="product-meta d-block fs-xs pb-1" href="#">
                  Soft Drinks and Juice
                </a>
                <h3 className="product-title fs-sm text-truncate">
                  <Link href="/grocery-single" passHref>
                    <a>Pepsi Soda Can (.33ml)</a>
                  </Link>
                </h3>
                <div className="product-price">
                  <span className="text-accent">
                    $1.<small>00</small>
                  </span>
                  <del className="fs-sm text-muted">
                    $1.<small>25</small>
                  </del>
                </div>
              </div>
              <div className="product-floating-btn">
                <button
                  className="btn btn-primary btn-shadow btn-sm"
                  type="button"
                >
                  +<i className="ci-cart fs-base ms-1"></i>
                </button>
              </div>
            </div>
          </div>
          {/*<!-- Product-->*/}
          <div>
            <div className="card product-card card-static pb-3">
              <span className="badge bg-danger badge-shadow">Sale</span>
              <button
                className="btn-wishlist btn-sm"
                type="button"
                data-bs-toggle="tooltip"
                data-bs-placement="left"
                title="Add to wishlist"
              >
                <i className="ci-heart"></i>
              </button>
              <Link href="/grocery-single" passHref>
                <a className="card-img-top d-block overflow-hidden">
                  <img src="/img/grocery/catalog/04.jpg" alt="Product" />
                </a>
              </Link>
              <div className="card-body py-2">
                <a className="product-meta d-block fs-xs pb-1" href="#">
                  Fruits and Vegetables
                </a>
                <h3 className="product-title fs-sm text-truncate">
                  <Link href="/grocery-single" passHref>
                    <a>Fresh Orange, Spain (1kg)</a>
                  </Link>
                </h3>
                <div className="product-price">
                  <span className="text-accent">
                    $1.<small>15</small>
                  </span>
                  <del className="fs-sm text-muted">
                    $1.<small>75</small>
                  </del>
                </div>
              </div>
              <div className="product-floating-btn">
                <button
                  className="btn btn-primary btn-shadow btn-sm"
                  type="button"
                >
                  +<i className="ci-cart fs-base ms-1"></i>
                </button>
              </div>
            </div>
          </div>
          {/*<!-- Product-->*/}
          <div>
            <div className="card product-card card-static pb-3">
              <span className="badge bg-danger badge-shadow">Sale</span>
              <button
                className="btn-wishlist btn-sm"
                type="button"
                data-bs-toggle="tooltip"
                data-bs-placement="left"
                title="Add to wishlist"
              >
                <i className="ci-heart"></i>
              </button>
              <Link href="/grocery-single" passHref>
                <a className="card-img-top d-block overflow-hidden">
                  <img src="/img/grocery/catalog/05.jpg" alt="Product" />
                </a>
              </Link>
              <div className="card-body py-2">
                <a className="product-meta d-block fs-xs pb-1" href="#">
                  Personal hygiene
                </a>
                <h3 className="product-title fs-sm text-truncate">
                  <Link href="/grocery-single" passHref>
                    <a>Moisture Body Lotion (250ml)</a>
                  </Link>
                </h3>
                <div className="product-price">
                  <span className="text-accent">
                    $4.<small>20</small>
                  </span>
                  <del className="fs-sm text-muted">
                    $5.<small>99</small>
                  </del>
                </div>
              </div>
              <div className="product-floating-btn">
                <button
                  className="btn btn-primary btn-shadow btn-sm"
                  type="button"
                >
                  +<i className="ci-cart fs-base ms-1"></i>
                </button>
              </div>
            </div>
          </div>
          {/*<!-- Product-->*/}
          <div>
            <div className="card product-card card-static pb-3">
              <span className="badge bg-danger badge-shadow">Sale</span>
              <button
                className="btn-wishlist btn-sm"
                type="button"
                data-bs-toggle="tooltip"
                data-bs-placement="left"
                title="Add to wishlist"
              >
                <i className="ci-heart"></i>
              </button>
              <Link href="/grocery-single" passHref>
                <a className="card-img-top d-block overflow-hidden">
                  <img src="/img/grocery/catalog/06.jpg" alt="Product" />
                </a>
              </Link>
              <div className="card-body py-2">
                <a className="product-meta d-block fs-xs pb-1" href="#">
                  Snacks, Sweets and Chips
                </a>
                <h3 className="product-title fs-sm text-truncate">
                  <Link href="/grocery-single" passHref>
                    <a>Nut Chocolate Paste (750g)</a>
                  </Link>
                </h3>
                <div className="product-price">
                  <span className="text-accent">
                    $6.<small>50</small>
                  </span>
                  <del className="fs-sm text-muted">
                    $7.<small>99</small>
                  </del>
                </div>
              </div>
              <div className="product-floating-btn">
                <button
                  className="btn btn-primary btn-shadow btn-sm"
                  type="button"
                >
                  +<i className="ci-cart fs-base ms-1"></i>
                </button>
              </div>
            </div>
          </div>
          {/*<!-- Product-->*/}
          <div>
            <div className="card product-card card-static pb-3">
              <span className="badge bg-danger badge-shadow">Sale</span>
              <button
                className="btn-wishlist btn-sm"
                type="button"
                data-bs-toggle="tooltip"
                data-bs-placement="left"
                title="Add to wishlist"
              >
                <i className="ci-heart"></i>
              </button>
              <Link href="/grocery-single" passHref>
                <a className="card-img-top d-block overflow-hidden">
                  <img src="/img/grocery/catalog/07.jpg" alt="Product" />
                </a>
              </Link>
              <div className="card-body py-2">
                <a className="product-meta d-block fs-xs pb-1" href="#">
                  Dairy and Eggs
                </a>
                <h3 className="product-title fs-sm text-truncate">
                  <Link href="/grocery-single" passHref>
                    <a>Mozzarella Mini Cheese</a>
                  </Link>
                </h3>
                <div className="product-price">
                  <span className="text-accent">
                    $3.<small>50</small>
                  </span>
                  <del className="fs-sm text-muted">
                    $4.<small>99</small>
                  </del>
                </div>
              </div>
              <div className="product-floating-btn">
                <button
                  className="btn btn-primary btn-shadow btn-sm"
                  type="button"
                >
                  +<i className="ci-cart fs-base ms-1"></i>
                </button>
              </div>
            </div>
          </div>
        </TinySlider>
      </div>
    </section>
  );
}
