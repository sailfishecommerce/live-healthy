/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import dynamic from "next/dynamic";

const TinySlider: any = dynamic(() => import("tiny-slider-react"), {
  ssr: false,
});

export default function KidsProductGridCarousel() {
  const kidProductGridSettings = {
    nav: false,
    controlsContainer: "#for-kids",
  };
  return (
    <section className="container pt-lg-4 mb-4 mb-md-5">
      <div className="row">
        {/*<!-- Banner with controls-->*/}
        <div className="col-md-5">
          <div
            className="d-flex flex-column h-100 overflow-hidden rounded-3"
            style={{ backgroundColor: "#f6f8fb" }}
          >
            <div className="d-flex justify-content-between px-grid-gutter py-grid-gutter">
              <div>
                <h3 className="mb-1">For Kids</h3>
                <Link href="/shop" passHref>
                  <a className="fs-md">
                    Shop for kids
                    <i className="ci-arrow-right fs-xs align-middle ms-1"></i>
                  </a>
                </Link>
              </div>
              <div className="tns-carousel-controls" id="for-kids">
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
                  src="/img/home/categories/cat-lg03.jpg"
                  alt="For Kids"
                />
              </a>
            </Link>
          </div>
        </div>
        {/*<!-- Product grid (carousel)-->*/}
        <div className="col-md-7 pt-4 pt-md-0">
          <div className="tns-carousel">
            <TinySlider onClick={() => {}} settings={kidProductGridSettings}>
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
                          <img src="/img/shop/catalog/40.jpg" alt="Product" />
                        </a>
                      </Link>
                      <div className="card-body py-2">
                        <a className="product-meta d-block fs-xs pb-1" href="#">
                          Clothing
                        </a>
                        <h3 className="product-title fs-sm">
                          <Link href="/shop-single-v1" passHref>
                            <a>Girl’s Denim Jacket</a>
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
                            <i className="star-rating-icon ci-star-filled active"></i>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-6 px-0 px-sm-2 mb-sm-4">
                    <div className="card product-card card-static">
                      <span className="badge badge-success badge-shadow">
                        Trending
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
                          <img src="/img/shop/catalog/41.jpg" alt="Product" />
                        </a>
                      </Link>
                      <div className="card-body py-2">
                        <a className="product-meta d-block fs-xs pb-1" href="#">
                          Shoes
                        </a>
                        <h3 className="product-title fs-sm">
                          <Link href="/shop-single-v1" passHref>
                            <a>Textile Ballet Flats</a>
                          </Link>
                        </h3>
                        <div className="d-flex justify-content-between">
                          <div className="product-price">
                            <span className="text-accent">
                              $16.
                              <small>50</small>
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
                          <img src="/img/shop/catalog/42.jpg" alt="Product" />
                        </a>
                      </Link>
                      <div className="card-body py-2">
                        <a className="product-meta d-block fs-xs pb-1" href="#">
                          T-shirts
                        </a>
                        <h3 className="product-title fs-sm">
                          <Link href="/shop-single-v1" passHref>
                            <a>Boys T-shirt with Motif</a>
                          </Link>
                        </h3>
                        <div className="d-flex justify-content-between">
                          <div className="product-price">
                            <span className="text-accent">
                              $17.
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
                          <img src="/img/shop/catalog/43.jpg" alt="Product" />
                        </a>
                      </Link>
                      <div className="card-body py-2">
                        <a className="product-meta d-block fs-xs pb-1" href="#">
                          Accessories
                        </a>
                        <h3 className="product-title fs-sm">
                          <Link href="/shop-single-v1" passHref>
                            <a>Dotted Shoulder Bag</a>
                          </Link>
                        </h3>
                        <div className="d-flex justify-content-between">
                          <div className="product-price">
                            <span className="text-accent">
                              $23.
                              <small>00</small>
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
                          <img src="/img/shop/catalog/44.jpg" alt="Product" />
                        </a>
                      </Link>
                      <div className="card-body py-2">
                        <a className="product-meta d-block fs-xs pb-1" href="#">
                          Hats &amp; Caps
                        </a>
                        <h3 className="product-title fs-sm">
                          <Link href="/shop-single-v1" passHref>
                            <a>2-pack Cotton Sun Hats</a>
                          </Link>
                        </h3>
                        <div className="d-flex justify-content-between">
                          <div className="product-price">
                            <span className="text-accent">
                              $18.
                              <small>00</small>
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
                          <img src="/img/shop/catalog/08.jpg" alt="Product" />
                        </a>
                      </Link>
                      <div className="card-body py-2">
                        <a className="product-meta d-block fs-xs pb-1" href="#">
                          Toys
                        </a>
                        <h3 className="product-title fs-sm">
                          <Link href="/shop-single-v1" passHref>
                            <a>Soft Panda Teddy Bear</a>
                          </Link>
                        </h3>
                        <div className="d-flex justify-content-between">
                          <div className="product-price">
                            <span className="text-accent">
                              $14.
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
                          <img src="/img/shop/catalog/45.jpg" alt="Product" />
                        </a>
                      </Link>
                      <div className="card-body py-2">
                        <a className="product-meta d-block fs-xs pb-1" href="#">
                          T-shirts
                        </a>
                        <h3 className="product-title fs-sm">
                          <Link href="/shop-single-v1" passHref>
                            <a>Outlined Star Chevron Tee</a>
                          </Link>
                        </h3>
                        <div className="d-flex justify-content-between">
                          <div className="product-price">
                            <span className="text-accent">
                              $10.
                              <small>99</small>
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
                          <img src="/img/shop/catalog/46.jpg" alt="Product" />
                        </a>
                      </Link>
                      <div className="card-body py-2">
                        <a className="product-meta d-block fs-xs pb-1" href="#">
                          Hats &amp; Caps
                        </a>
                        <h3 className="product-title fs-sm">
                          <Link href="/shop-single-v1" passHref>
                            <a>Banana Embroidery Cap</a>
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
                          <img src="/img/shop/catalog/47.jpg" alt="Product" />
                        </a>
                      </Link>
                      <div className="card-body py-2">
                        <a className="product-meta d-block fs-xs pb-1" href="#">
                          Shoes
                        </a>
                        <h3 className="product-title fs-sm">
                          <Link href="/shop-single-v1" passHref>
                            <a>Big Kid Sneakers</a>
                          </Link>
                        </h3>
                        <div className="d-flex justify-content-between">
                          <div className="product-price">
                            <span className="text-accent">
                              $42.
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
                          <img src="/img/shop/catalog/48.jpg" alt="Product" />
                        </a>
                      </Link>
                      <div className="card-body py-2">
                        <a className="product-meta d-block fs-xs pb-1" href="#">
                          Clothing
                        </a>
                        <h3 className="product-title fs-sm">
                          <Link href="/shop-single-v1" passHref>
                            <a>Boy&#39;s Printed Shorts</a>
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
                          <img src="/img/shop/catalog/49.jpg" alt="Product" />
                        </a>
                      </Link>
                      <div className="card-body py-2">
                        <a className="product-meta d-block fs-xs pb-1" href="#">
                          Toys
                        </a>
                        <h3 className="product-title fs-sm">
                          <Link href="/shop-single-v1" passHref>
                            <a>Unicorn Soft Toy</a>
                          </Link>
                        </h3>
                        <div className="d-flex justify-content-between">
                          <div className="product-price">
                            <span className="text-accent">
                              $22.
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
                          <img src="/img/shop/catalog/50.jpg" alt="Product" />
                        </a>
                      </Link>
                      <div className="card-body py-2">
                        <a className="product-meta d-block fs-xs pb-1" href="#">
                          Swimwear
                        </a>
                        <h3 className="product-title fs-sm">
                          <Link href="/shop-single-v1" passHref>
                            <a>Pool Santorini Tankini</a>
                          </Link>
                        </h3>
                        <div className="d-flex justify-content-between">
                          <div className="product-price">
                            <span className="text-accent">
                              $20.
                              <small>00</small>
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
                </div>
              </div>
            </TinySlider>
          </div>
        </div>
      </div>
    </section>
  );
}
