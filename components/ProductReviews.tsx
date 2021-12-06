/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
import { productType } from "@/types";

interface Props {
  product: productType;
}
export default function ProductReviews({ product }: Props) {
  console.log("product", product);
  return (
    <div className="border-top border-bottom my-lg-3 py-5 w-100">
      <Head>
        <script
          src={`https://en.trustmate.io/api/widget/95d50730-e6a5-4465-b950-3fab710cf306/script?product=/products/${product.slug}`}
          defer
        ></script>
        <script
          src="https://en.trustmate.io/api/widget/5c6b265a-9520-4676-9d01-2ecfca53d95c/script"
          defer
        ></script>
      </Head>
      <div className="container pt-md-2" id="reviews">
        <div className="row pb-3">
          <div className="col-lg-4 col-md-5">
            <h2 className="h3 mb-4">74 Reviews</h2>
            <div className="star-rating me-2">
              <i className="ci-star-filled fs-sm text-accent me-1"></i>
              <i className="ci-star-filled fs-sm text-accent me-1"></i>
              <i className="ci-star-filled fs-sm text-accent me-1"></i>
              <i className="ci-star-filled fs-sm text-accent me-1"></i>
              <i className="ci-star fs-sm text-muted me-1"></i>
            </div>
            <span className="d-inline-block align-middle">
              4.1 Overall rating
            </span>
            <p className="pt-3 fs-sm text-muted">
              58 out of 74 (77%)
              <br />
              Customers recommended this product
            </p>
          </div>
          <div className="col-lg-8 col-md-7">
            <div className="d-flex align-items-center mb-2">
              <div className="text-nowrap me-3">
                <span className="d-inline-block align-middle text-muted">
                  5
                </span>
                <i className="ci-star-filled fs-xs ms-1"></i>
              </div>
              <div className="w-100">
                <div className="progress" style={{ height: "4px" }}>
                  <div
                    className="progress-bar bg-success"
                    role="progressbar"
                    style={{ width: "60%" }}
                    aria-valuenow={60}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  ></div>
                </div>
              </div>
              <span className="text-muted ms-3">43</span>
            </div>
            <div className="d-flex align-items-center mb-2">
              <div className="text-nowrap me-3">
                <span className="d-inline-block align-middle text-muted">
                  4
                </span>
                <i className="ci-star-filled fs-xs ms-1"></i>
              </div>
              <div className="w-100">
                <div className="progress" style={{ height: "4px" }}>
                  <div
                    className="progress-bar"
                    role="progressbar"
                    style={{
                      width: "27%",
                      backgroundColor: "#a7e453",
                    }}
                    aria-valuenow={27}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  />
                </div>
              </div>
              <span className="text-muted ms-3">16</span>
            </div>
            <div className="d-flex align-items-center mb-2">
              <div className="text-nowrap me-3">
                <span className="d-inline-block align-middle text-muted">
                  3
                </span>
                <i className="ci-star-filled fs-xs ms-1"></i>
              </div>
              <div className="w-100">
                <div className="progress" style={{ height: "4px" }}>
                  <div
                    className="progress-bar"
                    role="progressbar"
                    style={{
                      width: "17%",
                      backgroundColor: "#ffda75",
                    }}
                    aria-valuenow={17}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  ></div>
                </div>
              </div>
              <span className="text-muted ms-3">9</span>
            </div>
            <div className="d-flex align-items-center mb-2">
              <div className="text-nowrap me-3">
                <span className="d-inline-block align-middle text-muted">
                  2
                </span>
                <i className="ci-star-filled fs-xs ms-1"></i>
              </div>
              <div className="w-100">
                <div className="progress" style={{ height: "4px" }}>
                  <div
                    className="progress-bar"
                    role="progressbar"
                    style={{
                      width: "9%",
                      backgroundColor: "#fea569",
                    }}
                    aria-valuenow={9}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  />
                </div>
              </div>
              <span className="text-muted ms-3">4</span>
            </div>
            <div className="d-flex align-items-center">
              <div className="text-nowrap me-3">
                <span className="d-inline-block align-middle text-muted">
                  1
                </span>
                <i className="ci-star-filled fs-xs ms-1"></i>
              </div>
              <div className="w-100">
                <div className="progress" style={{ height: "4px" }}>
                  <div
                    className="progress-bar bg-danger"
                    role="progressbar"
                    style={{ height: "4px" }}
                    aria-valuenow={4}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  ></div>
                </div>
              </div>
              <span className="text-muted ms-3">2</span>
            </div>
          </div>
        </div>
        <hr className="mt-4 mb-3" />
        <div className="row pt-4">
          {/*<!-- Reviews list-->*/}
          <div className="col-md-7">
            <div className="d-flex justify-content-end pb-4">
              <div className="d-flex align-items-center flex-nowrap">
                <label
                  className="fs-sm text-muted text-nowrap me-2 d-none d-sm-block"
                  htmlFor="sort-reviews"
                >
                  Sort by:
                </label>
                <select
                  className="form-select form-select-sm"
                  id="sort-reviews"
                >
                  <option>Newest</option>
                  <option>Oldest</option>
                  <option>Popular</option>
                  <option>High rating</option>
                  <option>Low rating</option>
                </select>
              </div>
            </div>
            {/*<!-- Review-->*/}
            <div className="product-review pb-4 mb-4 border-bottom">
              <div className="d-flex mb-3">
                <div className="d-flex align-items-center me-4 pe-2">
                  <img
                    className="rounded-circle"
                    src="/img/shop/reviews/01.jpg"
                    width="50"
                    alt="Rafael Marquez"
                  />
                  <div className="ps-3">
                    <h6 className="fs-sm mb-0">Rafael Marquez</h6>
                    <span className="fs-ms text-muted">June 28, 2019</span>
                  </div>
                </div>
                <div>
                  <div className="star-rating">
                    <i className="star-rating-icon ci-star-filled active"></i>
                    <i className="star-rating-icon ci-star-filled active"></i>
                    <i className="star-rating-icon ci-star-filled active"></i>
                    <i className="star-rating-icon ci-star-filled active"></i>
                    <i className="star-rating-icon ci-star"></i>
                  </div>
                  <div className="fs-ms text-muted">
                    83% of users found this review helpful
                  </div>
                </div>
              </div>
              <p className="fs-md mb-2">
                Nam libero tempore, cum soluta nobis est eligendi optio cumque
                nihil impedit quo minus id quod maxime placeat facere possimus,
                omnis voluptas assumenda est...
              </p>
              <ul className="list-unstyled fs-ms pt-1">
                <li className="mb-1">
                  <span className="fw-medium">Pros:&nbsp;</span>
                  Consequuntur magni, voluptatem sequi, tempora
                </li>
                <li className="mb-1">
                  <span className="fw-medium">Cons:&nbsp;</span>
                  Architecto beatae, quis autem
                </li>
              </ul>
              <div className="text-nowrap">
                <button className="btn-like" type="button">
                  15
                </button>
                <button className="btn-dislike" type="button">
                  3
                </button>
              </div>
            </div>
            {/*<!-- Review-->*/}
            <div className="product-review pb-4 mb-4 border-bottom">
              <div className="d-flex mb-3">
                <div className="d-flex align-items-center me-4 pe-2">
                  <img
                    className="rounded-circle"
                    src="/img/shop/reviews/02.jpg"
                    width="50"
                    alt="Barbara Palson"
                  />
                  <div className="ps-3">
                    <h6 className="fs-sm mb-0">Barbara Palson</h6>
                    <span className="fs-ms text-muted">May 17, 2019</span>
                  </div>
                </div>
                <div>
                  <div className="star-rating">
                    <i className="star-rating-icon ci-star-filled active"></i>
                    <i className="star-rating-icon ci-star-filled active"></i>
                    <i className="star-rating-icon ci-star-filled active"></i>
                    <i className="star-rating-icon ci-star-filled active"></i>
                    <i className="star-rating-icon ci-star-filled active"></i>
                  </div>
                  <div className="fs-ms text-muted">
                    99% of users found this review helpful
                  </div>
                </div>
              </div>
              <p className="fs-md mb-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
              <ul className="list-unstyled fs-ms pt-1">
                <li className="mb-1">
                  <span className="fw-medium">Pros:&nbsp;</span>
                  Consequuntur magni, voluptatem sequi, tempora
                </li>
                <li className="mb-1">
                  <span className="fw-medium">Cons:&nbsp;</span>
                  Architecto beatae, quis autem
                </li>
              </ul>
              <div className="text-nowrap">
                <button className="btn-like" type="button">
                  34
                </button>
                <button className="btn-dislike" type="button">
                  1
                </button>
              </div>
            </div>
            {/*<!-- Review-->*/}
            <div className="product-review pb-4 mb-4 border-bottom">
              <div className="d-flex mb-3">
                <div className="d-flex align-items-center me-4 pe-2">
                  <img
                    className="rounded-circle"
                    src="/img/shop/reviews/03.jpg"
                    width="50"
                    alt="Daniel Adams"
                  />
                  <div className="ps-3">
                    <h6 className="fs-sm mb-0">Daniel Adams</h6>
                    <span className="fs-ms text-muted">May 8, 2019</span>
                  </div>
                </div>
                <div>
                  <div className="star-rating">
                    <i className="star-rating-icon ci-star-filled active"></i>
                    <i className="star-rating-icon ci-star-filled active"></i>
                    <i className="star-rating-icon ci-star-filled active"></i>
                    <i className="star-rating-icon ci-star"></i>
                    <i className="star-rating-icon ci-star"></i>
                  </div>
                  <div className="fs-ms text-muted">
                    75% of users found this review helpful
                  </div>
                </div>
              </div>
              <p className="fs-md mb-2">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis et quasi architecto beatae
                vitae dicta sunt explicabo. Nemo enim ipsam voluptatem.
              </p>
              <ul className="list-unstyled fs-ms pt-1">
                <li className="mb-1">
                  <span className="fw-medium">Pros:&nbsp;</span>
                  Consequuntur magni, voluptatem sequi
                </li>
                <li className="mb-1">
                  <span className="fw-medium">Cons:&nbsp;</span>
                  Architecto beatae, quis autem, voluptatem sequ
                </li>
              </ul>
              <div className="text-nowrap">
                <button className="btn-like" type="button">
                  26
                </button>
                <button className="btn-dislike" type="button">
                  9
                </button>
              </div>
            </div>

            <div id="95d50730-e6a5-4465-b950-3fab710cf306"></div>
            <div id="5c6b265a-9520-4676-9d01-2ecfca53d95c"></div>
            <div className="text-center">
              <button className="btn btn-outline-accent" type="button">
                <i className="ci-reload me-2"></i>Load more reviews
              </button>
            </div>
          </div>
          {/*<!-- Leave review form-->*/}
          <div className="col-md-5 mt-2 pt-4 mt-md-0 pt-md-0">
            <div className="bg-secondary py-grid-gutter px-grid-gutter rounded-3">
              <h3 className="h4 pb-2">Write a review</h3>
              <form className="needs-validation" method="post" noValidate>
                <div className="mb-3">
                  <label className="form-label" htmlFor="review-name">
                    Your name
                    <span className="text-danger">*</span>
                  </label>
                  <input
                    className="form-control"
                    type="text"
                    required
                    id="review-name"
                  />
                  <div className="invalid-feedback">
                    Please enter your name!
                  </div>
                  <small className="form-text text-muted">
                    Will be displayed on the comment.
                  </small>
                </div>
                <div className="mb-3">
                  <label className="form-label" htmlFor="review-email">
                    Your email
                    <span className="text-danger">*</span>
                  </label>
                  <input
                    className="form-control"
                    type="email"
                    required
                    id="review-email"
                  />
                  <div className="invalid-feedback">
                    Please provide valid email address!
                  </div>
                  <small className="form-text text-muted">
                    Authentication only - we wont spam you.
                  </small>
                </div>
                <div className="mb-3">
                  <label className="form-label" htmlFor="review-rating">
                    Rating
                    <span className="text-danger">*</span>
                  </label>
                  <select className="form-select" required id="review-rating">
                    <option value="">Choose rating</option>
                    <option value="5">5 stars</option>
                    <option value="4">4 stars</option>
                    <option value="3">3 stars</option>
                    <option value="2">2 stars</option>
                    <option value="1">1 star</option>
                  </select>
                  <div className="invalid-feedback">Please choose rating!</div>
                </div>
                <div className="mb-3">
                  <label className="form-label" htmlFor="review-text">
                    Review
                    <span className="text-danger">*</span>
                  </label>
                  <textarea
                    className="form-control"
                    rows={6}
                    required
                    id="review-text"
                  ></textarea>
                  <div className="invalid-feedback">Please write a review!</div>
                  <small className="form-text text-muted">
                    Your review must be at least 50 characters.
                  </small>
                </div>
                <div className="mb-3">
                  <label className="form-label" htmlFor="review-pros">
                    Pros
                  </label>
                  <textarea
                    className="form-control"
                    rows={2}
                    placeholder="Separated by commas"
                    id="review-pros"
                  ></textarea>
                </div>
                <div className="mb-3 mb-4">
                  <label className="form-label" htmlFor="review-cons">
                    Cons
                  </label>
                  <textarea
                    className="form-control"
                    rows={2}
                    placeholder="Separated by commas"
                    id="review-cons"
                  ></textarea>
                </div>
                <button
                  className="btn btn-primary btn-shadow d-block w-100"
                  type="button"
                >
                  Submit a Review
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
