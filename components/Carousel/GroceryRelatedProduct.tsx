/* eslint-disable @next/next/no-img-element */
import Link from "next/link";

import dynamic from "next/dynamic";

const TinySlider: any = dynamic(() => import("tiny-slider-react"), {
  ssr: false,
});

export default function GroceryRelatedProduct() {
  const settings = {
    items: 2,
    gutter: 16,
    controls: true,
    responsive: {
      "0": { items: 1 },
      "480": { items: 2 },
      "720": { items: 3 },
      "991": { items: 2 },
      "1140": { items: 3 },
      "1300": { items: 4 },
      "1500": { items: 5 },
    },
    navPosition: "bottom",
    controlsText: [
      '<i class="ci-arrow-left"></i>',
      '<i class="ci-arrow-right"></i>',
    ],
  };
  return (
    <div className="tns-carousel tns-controls-static tns-controls-outside tns-nav-enabled">
      <TinySlider onClick={() => {}} settings={settings}>
        {/*<!-- Product-->*/}
        <div>
          <div className="card product-card card-static pb-3">
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
                <img src="/img/grocery/catalog/08.jpg" alt="Product" />
              </a>
            </Link>
            <div className="card-body py-2">
              <a className="product-meta d-block fs-xs pb-1" href="#">
                Dairy and Eggs
              </a>
              <h3 className="product-title fs-sm">
                <Link href="/grocery-single" passHref>
                  <a>Mozzarella Cheese (125g)</a>
                </Link>
              </h3>
              <div className="product-price">
                <span className="text-accent">
                  $4.<small>30</small>
                </span>
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
                <img src="/img/grocery/catalog/09.jpg" alt="Product" />
              </a>
            </Link>
            <div className="card-body py-2">
              <a className="product-meta d-block fs-xs pb-1" href="#">
                Personal hygiene
              </a>
              <h3 className="product-title fs-sm text-truncate">
                <Link href="/grocery-single" passHref>
                  <a>Men’s Shampoo (400ml)</a>
                </Link>
              </h3>
              <div className="product-price">
                <span className="text-accent">
                  $5.<small>99</small>
                </span>
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
                <img src="/img/grocery/catalog/10.jpg" alt="Product" />
              </a>
            </Link>
            <div className="card-body py-2">
              <a className="product-meta d-block fs-xs pb-1" href="#">
                Meat and Poultry
              </a>
              <h3 className="product-title fs-sm text-truncate">
                <Link href="/grocery-single">
                  <a>Frozen Oven-ready Poultry</a>
                </Link>
              </h3>
              <div className="product-price">
                <span className="text-accent">
                  $12.<small>00</small>
                </span>
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
                <img src="/img/grocery/catalog/11.jpg" alt="Product" />
              </a>
            </Link>
            <div className="card-body py-2">
              <a className="product-meta d-block fs-xs pb-1" href="#">
                Snacks, Sweets and Chips
              </a>

              <h3 className="product-title fs-sm text-truncate">
                <Link href="/grocery-single" passHref>
                  <a>Dark Chocolate with Nuts</a>
                </Link>
              </h3>
              <div className="product-price">
                <span className="text-accent">
                  $2.<small>50</small>
                </span>
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
                <img src="/img/grocery/catalog/12.jpg" alt="Product" />
              </a>
            </Link>
            <div className="card-body py-2">
              <a className="product-meta d-block fs-xs pb-1" href="#">
                Canned Food and Oil
              </a>
              <h3 className="product-title fs-sm text-truncate">
                <Link href="/grocery-single" passHref>
                  <a>Corn Oil Bottle (500ml)</a>
                </Link>
              </h3>
              <div className="product-price">
                <span className="text-accent">
                  $3.<small>10</small>
                </span>
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
                <img src="/img/grocery/catalog/13.jpg" alt="Product" />
              </a>
            </Link>
            <div className="card-body py-2">
              <a className="product-meta d-block fs-xs pb-1" href="#">
                Fish and Seafood
              </a>
              <h3 className="product-title fs-sm text-truncate">
                <Link href="/grocery-single" passHref>
                  <a>Steak Salmon Fillet (1kg)</a>
                </Link>
              </h3>
              <div className="product-price">
                <span className="text-accent">
                  $17.<small>99</small>
                </span>
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
                <img src="/img/grocery/catalog/14.jpg" alt="Product" />
              </a>
            </Link>
            <div className="card-body py-2">
              <a className="product-meta d-block fs-xs pb-1" href="#">
                Canned Food and Oil
              </a>
              <h3 className="product-title fs-sm text-truncate">
                <Link href="/grocery-single" passHref>
                  <a>Sardine in Tomato Sauce (105g)</a>
                </Link>
                s
              </h3>
              <div className="product-price">
                <span className="text-accent">
                  $3.<small>25</small>
                </span>
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
  );
}
