/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import dynamic from "next/dynamic";

const TinySlider: any = dynamic(() => import("tiny-slider-react"), {
  ssr: false,
});

export default function WomenProductGridCarousel() {
  const womenProductGridSettings = {
    nav: false,
    controlsContainer: "#for-women",
  };
  return (
    <section className="container pt-lg-3 mb-4 mb-sm-5">
      <div className="row">
        {/*<!-- Banner with controls-->*/}
        <div className="col-md-5">
          <div
            className="d-flex flex-column h-100 overflow-hidden rounded-3"
            style={{ backgroundColor: "#f6f8fb" }}
          >
            <div className="d-flex justify-content-between px-grid-gutter py-grid-gutter">
              <div>
                <h3 className="mb-1">For Women</h3>
                <Link href="/shop" passHref>
                  <a className="fs-md">
                    Shop for women
                    <i className="ci-arrow-right fs-xs align-middle ms-1"></i>
                  </a>
                </Link>
              </div>
              <div className="tns-carousel-controls" id="for-women">
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
                  src="/img/home/categories/cat-lg02.jpg"
                  alt="For Women"
                />
              </a>
            </Link>
          </div>
        </div>
        {/*<!-- Product grid (carousel)-->*/}
        <div className="col-md-7 pt-4 pt-md-0">
          <div className="tns-carousel">
            <TinySlider onClick={() => {}} settings={womenProductGridSettings}>
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
                          <img src="/img/shop/catalog/09.jpg" alt="Product" />
                        </a>
                      </Link>
                      <div className="card-body py-2">
                        <a className="product-meta d-block fs-xs pb-1" href="#">
                          Cosmetics
                        </a>
                        <h3 className="product-title fs-sm">
                          <Link href="/shop-single-v1" passHref>
                            <a>Metallic Lipstick (Crimson)</a>
                          </Link>
                        </h3>
                        <div className="d-flex justify-content-between">
                          <div className="product-price">
                            <span className="text-accent">
                              $12.
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
                          <img src="/img/shop/catalog/26.jpg" alt="Product" />
                        </a>
                      </Link>
                      <div className="card-body py-2">
                        <a className="product-meta d-block fs-xs pb-1" href="#">
                          Shoes
                        </a>
                        <h3 className="product-title fs-sm">
                          <Link href="/shop-single-v1" passHref>
                            <a>Textile Platform Sneakers</a>
                          </Link>
                        </h3>
                        <div className="d-flex justify-content-between">
                          <div className="product-price">
                            <span className="text-accent">
                              $59.
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
                      <span className="badge badge-danger badge-shadow">
                        Sale
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
                      <Link passHref href="/shop-single-v1">
                        <a className="card-img-top d-block overflow-hidden">
                          <img src="/img/shop/catalog/27.jpg" alt="Product" />
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
                              $17.
                              <small>99</small>
                            </span>
                            <del className="fs-sm text-muted">
                              28.
                              <small>99</small>
                            </del>
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
                          <img src="/img/shop/catalog/28.jpg" alt="Product" />
                        </a>
                      </Link>
                      <div className="card-body py-2">
                        <a className="product-meta d-block fs-xs pb-1" href="#">
                          Shoes
                        </a>
                        <h3 className="product-title fs-sm">
                          <Link href="/shop-single-v1" passHref>
                            <a>Leather Platform Sandals</a>
                          </Link>
                        </h3>
                        <div className="d-flex justify-content-between">
                          <div className="product-price">
                            <span className="text-accent">
                              $79.
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
                          <img src="/img/shop/catalog/29.jpg" alt="Product" />
                        </a>
                      </Link>
                      <div className="card-body py-2">
                        <a className="product-meta d-block fs-xs pb-1" href="#">
                          Shorts
                        </a>
                        <h3 className="product-title fs-sm">
                          <Link href="/shop-single-v1" passHref>
                            <a>Short Chino Shorts</a>
                          </Link>
                        </h3>
                        <div className="d-flex justify-content-between">
                          <div className="product-price">
                            <span className="text-accent">
                              $24.
                              <small>99</small>
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
                          <img src="/img/shop/catalog/30.jpg" alt="Product" />
                        </a>
                      </Link>
                      <div className="card-body py-2">
                        <a className="product-meta d-block fs-xs pb-1" href="#">
                          T-shirts
                        </a>
                        <h3 className="product-title fs-sm">
                          <Link href="/shop-single-v1" passHref>
                            <a>T-shirt with Motif</a>
                          </Link>
                        </h3>
                        <div className="d-flex justify-content-between">
                          <div className="product-price">
                            <span className="text-accent">
                              $13.
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
                          <img src="/img/shop/catalog/01.jpg" alt="Product" />
                        </a>
                      </Link>
                      <div className="card-body py-2">
                        <a className="product-meta d-block fs-xs pb-1" href="#">
                          Shoes
                        </a>
                        <h3 className="product-title fs-sm">
                          <Link href="/shop-single-v1" passHref>
                            <a>Colorblock Sneakers</a>
                          </Link>
                        </h3>
                        <div className="d-flex justify-content-between">
                          <div className="product-price">
                            <span className="text-accent">
                              $154.
                              <small>99</small>
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
                          <img src="/img/shop/catalog/02.jpg" alt="Product" />
                        </a>
                      </Link>
                      <div className="card-body py-2">
                        <a className="product-meta d-block fs-xs pb-1" href="#">
                          Blouse
                        </a>
                        <h3 className="product-title fs-sm">
                          <Link href="/shop-single-v1" passHref>
                            <a>Cotton Lace Blouse</a>
                          </Link>
                        </h3>
                        <div className="d-flex justify-content-between">
                          <div className="product-price">
                            <span className="text-accent">
                              $37.
                              <small>50</small>
                            </span>
                          </div>
                          <div className="star-rating">
                            <i className="star-rating-icon ci-star-filled active"></i>
                            <i className="star-rating-icon ci-star-filled active"></i>
                            <i className="star-rating-icon ci-star-filled active"></i>
                            <i className="star-rating-icon ci-star"></i>
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
                          <img src="/img/shop/catalog/03.jpg" alt="Product" />
                        </a>
                      </Link>
                      <div className="card-body py-2">
                        <a className="product-meta d-block fs-xs pb-1" href="#">
                          Shorts
                        </a>
                        <h3 className="product-title fs-sm">
                          <Link href="/shop-single-v1" passHref>
                            <a>Mom High Waist Shorts</a>
                          </Link>
                        </h3>
                        <div className="d-flex justify-content-between">
                          <div className="product-price">
                            <span className="text-accent">
                              $39.
                              <small>50</small>
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
                          <img src="/img/shop/catalog/04.jpg" alt="Product" />
                        </a>
                      </Link>
                      <div className="card-body py-2">
                        <a className="product-meta d-block fs-xs pb-1" href="#">
                          Sportswear
                        </a>
                        <h3 className="product-title fs-sm">
                          <Link href="/shop-single-v1" passHref>
                            <a>Sports Jacket</a>
                          </Link>
                        </h3>
                        <div className="d-flex justify-content-between">
                          <div className="product-price">
                            <span className="text-accent">
                              $68.
                              <small>40</small>
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
                          <img src="/img/shop/catalog/31.jpg" alt="Product" />
                        </a>
                      </Link>
                      <div className="card-body py-2">
                        <a className="product-meta d-block fs-xs pb-1" href="#">
                          Shorts
                        </a>
                        <h3 className="product-title fs-sm">
                          <Link href="/shop-single-v1" passHref>
                            <a>Leather Platform Sandals</a>
                          </Link>
                        </h3>
                        <div className="d-flex justify-content-between">
                          <div className="product-price">
                            <span className="text-accent">
                              $67.
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
                          <img src="/img/shop/catalog/07.jpg" alt="Product" />
                        </a>
                      </Link>
                      <div className="card-body py-2">
                        <a className="product-meta d-block fs-xs pb-1" href="#">
                          T-shirts
                        </a>
                        <h3 className="product-title fs-sm">
                          <Link href="/shop-single-v1" passHref>
                            <a>Two-Piece Bikini</a>
                          </Link>
                        </h3>
                        <div className="d-flex justify-content-between">
                          <div className="product-price">
                            <span className="text-accent">
                              $18.
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
                </div>
              </div>
            </TinySlider>
          </div>
        </div>
      </div>
    </section>
  );
}
