/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import dynamic from "next/dynamic";

const TinySlider: any = dynamic(() => import("tiny-slider-react"), {
  ssr: false,
});

export default function MenProductGridCarousel() {
  const menProductGridSettings = {
    nav: false,
    controlsContainer: "#for-men",
  };
  return (
    <section className="container pt-lg-4 mb-4 mb-sm-5">
      <div className="row">
        {/*<!-- Banner with controls-->*/}
        <div className="col-md-5 order-md-2">
          <div
            className="d-flex flex-column h-100 overflow-hidden rounded-3"
            style={{ backgroundColor: "#f6f8fb" }}
          >
            <div className="d-flex justify-content-between px-grid-gutter py-grid-gutter">
              <div className="order-md-2">
                <h3 className="mb-1">For Men</h3>
                <Link href="/shop" passHref>
                  <a className="fs-md">
                    Shop for men
                    <i className="ci-arrow-right fs-xs align-middle ms-1"></i>
                  </a>
                </Link>
              </div>
              <div className="tns-carousel-controls order-md-1" id="for-men">
                <button type="button">
                  <i className="ci-arrow-left"></i>
                </button>
                <button type="button">
                  <i className="ci-arrow-right"></i>
                </button>
              </div>
            </div>
            <Link href="/shop" passHref>
              <a className="d-none d-md-block mt-auto">
                <img
                  className="d-block w-100"
                  src="/img/home/categories/cat-lg01.jpg"
                  alt="For Men"
                />
              </a>
            </Link>
          </div>
        </div>
        {/*<!-- Product grid (carousel)-->*/}
        <div className="col-md-7 pt-4 pt-md-0 order-md-1">
          <div className="tns-carousel">
            <TinySlider onClick={() => {}} settings={menProductGridSettings}>
              {/*<!-- Carousel item-->*/}
              <div>
                <div className="row mx-n2">
                  <div className="col-lg-4 col-6 px-0 px-sm-2 mb-sm-4">
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
                      <Link href="/shop-single-v1" passHref>
                        <a className="card-img-top d-block overflow-hidden">
                          <img src="/img/shop/catalog/32.jpg" alt="Product" />
                        </a>
                      </Link>
                      <div className="card-body py-2">
                        <a className="product-meta d-block fs-xs pb-1" href="#">
                          Hats &amp; Caps
                        </a>
                        <h3 className="product-title fs-sm">
                          <Link href="/shop-single-v1" passHref>
                            <a>Cap with Appliqué</a>
                          </Link>
                        </h3>
                        <div className="d-flex justify-content-between">
                          <div className="product-price">
                            <span className="text-accent">
                              $15.
                              <small>99</small>
                            </span>
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
                  <div className="col-lg-4 col-6 px-0 px-sm-2 mb-sm-4">
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
                      <Link href="/shop-single-v1" passHref>
                        <a className="card-img-top d-block overflow-hidden">
                          <img src="/img/shop/catalog/33.jpg" alt="Product" />
                        </a>
                      </Link>
                      <div className="card-body py-2">
                        <a className="product-meta d-block fs-xs pb-1" href="#">
                          T-shirts
                        </a>
                        <h3 className="product-title fs-sm">
                          <Link href="/shop-single-v1" passHref>
                            <a>Regular Fit Cotton Shirt</a>
                          </Link>
                        </h3>
                        <div className="d-flex justify-content-between">
                          <div className="product-price">
                            <span className="text-accent">
                              $19.
                              <small>99</small>
                            </span>
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
                  <div className="col-lg-4 col-6 px-0 px-sm-2 mb-sm-4">
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
                      <Link href="/shop-single-v1" passHref>
                        <a className="card-img-top d-block overflow-hidden">
                          <img src="/img/shop/catalog/34.jpg" alt="Product" />
                        </a>
                      </Link>
                      <div className="card-body py-2">
                        <a className="product-meta d-block fs-xs pb-1" href="#">
                          Accessories
                        </a>
                        <h3 className="product-title fs-sm">
                          <Link href="/shop-single-v1" passHref>
                            <a>Polarized Sunglasses</a>
                          </Link>
                        </h3>
                        <div className="d-flex justify-content-between">
                          <div className="product-price">
                            <span className="text-accent">
                              $37.
                              <small>99</small>
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
                  <div className="col-lg-4 col-6 px-0 px-sm-2 mb-sm-4">
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
                      <Link href="/shop-single-v1" passHref>
                        <a className="card-img-top d-block overflow-hidden">
                          <img src="/img/shop/catalog/35.jpg" alt="Product" />
                        </a>
                      </Link>
                      <div className="card-body py-2">
                        <a className="product-meta d-block fs-xs pb-1" href="#">
                          Shoes
                        </a>
                        <h3 className="product-title fs-sm">
                          <Link href="/shop-single-v1" passHref>
                            <a>Leather Men’s Sneakers</a>
                          </Link>
                        </h3>
                        <div className="d-flex justify-content-between">
                          <div className="product-price">
                            <span className="text-accent">
                              $45.
                              <small>99</small>
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
                  <div className="col-lg-4 col-6 px-0 px-sm-2 mb-sm-4 d-none d-lg-block">
                    <div className="card product-card card-static">
                      <span className="badge badge-info badge-shadow">
                        Popular
                      </span>
                      <button
                        className="btn-wishlist btn-sm"
                        type="button"
                        data-bs-toggle="tooltip"
                        data-bs-placement="left"
                        title="Add to wishlist"
                      >
                        <i className="ci-heart"></i>
                      </button>
                      <Link href="/shop-single-v1" passHref>
                        <a className="card-img-top d-block overflow-hidden">
                          <img src="/img/shop/catalog/36.jpg" alt="Product" />
                        </a>
                      </Link>
                      <div className="card-body py-2">
                        <a className="product-meta d-block fs-xs pb-1" href="#">
                          Bags
                        </a>
                        <h3 className="product-title fs-sm">
                          <Link href="/shop-single-v1" passHref>
                            <a>Swedish Backpack</a>
                          </Link>
                        </h3>
                        <div className="d-flex justify-content-between">
                          <div className="product-price">
                            <span className="text-accent">
                              $68.
                              <small>95</small>
                            </span>
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
                  <div className="col-lg-4 col-6 px-0 px-sm-2 mb-sm-4 d-none d-lg-block">
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
                      <Link href="/shop-single-v1" passHref>
                        <a className="card-img-top d-block overflow-hidden">
                          <img src="/img/shop/catalog/37.jpg" alt="Product" />
                        </a>
                      </Link>
                      <div className="card-body py-2">
                        <a className="product-meta d-block fs-xs pb-1" href="#">
                          Accessories
                        </a>
                        <h3 className="product-title fs-sm">
                          <Link href="/shop-single-v1" passHref>
                            <a>Stainless Steel Watches</a>
                          </Link>
                        </h3>
                        <div className="d-flex justify-content-between">
                          <div className="product-price">
                            <span className="text-accent">
                              $542.
                              <small>80</small>
                            </span>
                          </div>
                          <div className="star-rating">
                            <i className="star-rating-icon ci-star-filled active"></i>
                            <i className="star-rating-icon ci-star-filled active"></i>
                            <i className="star-rating-icon ci-star-filled active"></i>
                            <i className="star-rating-icon ci-star-filled active"></i>
                            <i className="star-rating-icon ci-star-half active"></i>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/*<!-- Carousel item-->*/}
              <div>
                <div className="row mx-n2">
                  <div className="col-lg-4 col-6 px-0 px-sm-2 mb-sm-4">
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
                      <Link href="/shop-single-v1" passHref>
                        <a className="card-img-top d-block overflow-hidden">
                          <img src="/img/shop/catalog/11.jpg" alt="Product" />
                        </a>
                      </Link>
                      <div className="card-body py-2">
                        <a className="product-meta d-block fs-xs pb-1" href="#">
                          Sandals
                        </a>
                        <h3 className="product-title fs-sm">
                          <Link href="/shop-single-v1" passHref>
                            <a>Soft Footbed Sandals</a>
                          </Link>
                        </h3>
                        <div className="d-flex justify-content-between">
                          <div className="product-price">
                            <span className="text-accent">
                              $99.
                              <small>50</small>
                            </span>
                          </div>
                          <div className="star-rating">
                            <i className="star-rating-icon ci-star-filled active"></i>
                            <i className="star-rating-icon ci-star-filled active"></i>
                            <i className="star-rating-icon ci-star-filled active"></i>
                            <i className="star-rating-icon ci-star-filled active"></i>
                            <i className="star-rating-icon ci-star-half active"></i>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-6 px-0 px-sm-2 mb-sm-4">
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
                      <Link href="/shop-single-v1" passHref>
                        <a className="card-img-top d-block overflow-hidden">
                          <img src="/img/shop/catalog/38.jpg" alt="Product" />
                        </a>
                      </Link>
                      <div className="card-body py-2">
                        <a className="product-meta d-block fs-xs pb-1" href="#">
                          Shorts
                        </a>
                        <h3 className="product-title fs-sm">
                          <Link href="/shop-single-v1" passHref>
                            <a>Silver Ringe Cargo Short</a>
                          </Link>
                        </h3>
                        <div className="d-flex justify-content-between">
                          <div className="product-price">
                            <span className="text-accent">
                              $45.
                              <small>00</small>
                            </span>
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
                  <div className="col-lg-4 col-6 px-0 px-sm-2 mb-sm-4">
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
                      <Link href="/shop-single-v1" passHref>
                        <a className="card-img-top d-block overflow-hidden">
                          <img src="/img/shop/catalog/10.jpg" alt="Product" />
                        </a>
                      </Link>
                      <div className="card-body py-2">
                        <a className="product-meta d-block fs-xs pb-1" href="#">
                          Shorts
                        </a>
                        <h3 className="product-title fs-sm">
                          <Link href="/shop-single-v1" passHref>
                            <a>Multicolor Bracelets</a>
                          </Link>
                        </h3>
                        <div className="d-flex justify-content-between">
                          <div className="product-price">
                            <span className="text-accent">
                              $7.
                              <small>99</small>
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
                  <div className="col-lg-4 col-6 px-0 px-sm-2 mb-sm-4">
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
                      <Link href="/shop-single-v1" passHref>
                        <a className="card-img-top d-block overflow-hidden">
                          <img src="/img/shop/catalog/39.jpg" alt="Product" />
                        </a>
                      </Link>
                      <div className="card-body py-2">
                        <a className="product-meta d-block fs-xs pb-1" href="#">
                          T-shirts
                        </a>
                        <h3 className="product-title fs-sm">
                          <Link href="/shop-single-v1" passHref>
                            <a>3-pack T-shirts Slim Fit</a>
                          </Link>
                        </h3>
                        <div className="d-flex justify-content-between">
                          <div className="product-price">
                            <span className="text-accent">
                              $21.
                              <small>70</small>
                            </span>
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
                  <div className="col-lg-4 col-6 px-0 px-sm-2 mb-sm-4 d-none d-lg-block">
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
                      <Link href="/shop-single-v1" passHref>
                        <a className="card-img-top d-block overflow-hidden">
                          <img src="/img/shop/catalog/12.jpg" alt="Product" />
                        </a>
                      </Link>
                      <div className="card-body py-2">
                        <a className="product-meta d-block fs-xs pb-1" href="#">
                          Hats &amp; Caps
                        </a>
                        <h3 className="product-title fs-sm">
                          <Link href="/shop-single-v1" passHref>
                            <a>3-Color Sun Stash Hat</a>
                          </Link>
                        </h3>
                        <div className="d-flex justify-content-between">
                          <div className="product-price">
                            <span className="text-accent">
                              $25.
                              <small>9</small>
                            </span>
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
                  <div className="col-lg-4 col-6 px-0 px-sm-2 mb-sm-4 d-none d-lg-block">
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
                      <Link href="/shop-single-v1" passHref>
                        <a className="card-img-top d-block overflow-hidden">
                          <img src="/img/shop/catalog/06.jpg" alt="Product" />
                        </a>
                      </Link>
                      <div className="card-body py-2">
                        <a className="product-meta d-block fs-xs pb-1" href="#">
                          Bags
                        </a>
                        <h3 className="product-title fs-sm">
                          <Link href="/shop-single-v1" passHref>
                            <a>TH Jeans City Backpack</a>
                          </Link>
                        </h3>
                        <div className="d-flex justify-content-between">
                          <div className="product-price">
                            <span className="text-accent">
                              $79.
                              <small>50</small>
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
                </div>
              </div>
            </TinySlider>
          </div>
        </div>
      </div>
    </section>
  );
}
