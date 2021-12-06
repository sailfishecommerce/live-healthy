/* eslint-disable @next/next/no-img-element */
import dynamic from "next/dynamic";

const TinySlider: any = dynamic(() => import("tiny-slider-react"), {
  ssr: false,
});

export default function CustomerReviewCarousel() {
  const settings = {
    items: 2,
    controls: false,
    responsive: {
      "0": { items: 1, gutter: 20 },
      "576": { items: 2, gutter: 20 },
      "850": { items: 3, gutter: 20 },
      "1080": { items: 4, gutter: 25 },
    },
    navPosition: "bottom",
  };
  return (
    <div className="tns-carousel mb-3">
      <TinySlider onClick={() => {}} settings={settings}>
        <blockquote className="mb-2">
          <div className="card card-body fs-md text-muted border-0 shadow-sm">
            <div className="mb-2">
              <div className="star-rating">
                <i className="star-rating-icon ci-star-filled active"></i>
                <i className="star-rating-icon ci-star-filled active"></i>
                <i className="star-rating-icon ci-star-filled active"></i>
                <i className="star-rating-icon ci-star-filled active"></i>
                <i className="star-rating-icon ci-star"></i>
              </div>
            </div>
            Lorem ipsum dolor sit amet, quia non consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </div>
          <footer className="d-flex justify-content-center align-items-center pt-4">
            <img
              className="rounded-circle"
              src="/img/testimonials/03.jpg"
              width="50"
              alt="Richard Davis"
            />
            <div className="ps-3">
              <h6 className="fs-sm mb-n1">Richard Davis</h6>
              <span className="fs-ms text-muted opacity-75">Feb 14, 2020</span>
            </div>
          </footer>
        </blockquote>
        <blockquote className="mb-2">
          <div className="card card-body fs-md text-muted border-0 shadow-sm">
            <div className="mb-2">
              <div className="star-rating">
                <i className="star-rating-icon ci-star-filled active"></i>
                <i className="star-rating-icon ci-star-filled active"></i>
                <i className="star-rating-icon ci-star-filled active"></i>
                <i className="star-rating-icon ci-star-filled active"></i>
                <i className="star-rating-icon ci-star-filled active"></i>
              </div>
            </div>
            Lorem ipsum dolor sit amet, quia non consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </div>
          <footer className="d-flex justify-content-center align-items-center pt-4">
            <img
              className="rounded-circle"
              src="/img/testimonials/04.jpg"
              width="50"
              alt="Laura Willson"
            />
            <div className="ps-3">
              <h6 className="fs-sm mb-n1">Laura Willson</h6>
              <span className="fs-ms text-muted opacity-75">Feb 05, 2020</span>
            </div>
          </footer>
        </blockquote>
        <blockquote className="mb-2">
          <div className="card card-body fs-md text-muted border-0 shadow-sm">
            <div className="mb-2">
              <div className="star-rating">
                <i className="star-rating-icon ci-star-filled active"></i>
                <i className="star-rating-icon ci-star-filled active"></i>
                <i className="star-rating-icon ci-star-filled active"></i>
                <i className="star-rating-icon ci-star"></i>
                <i className="star-rating-icon ci-star"></i>
              </div>
            </div>
            Lorem ipsum dolor sit amet, quia non consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </div>
          <footer className="d-flex justify-content-center align-items-center pt-4">
            <img
              className="rounded-circle"
              src="/img/testimonials/01.jpg"
              width="50"
              alt="Mary Grant"
            />
            <div className="ps-3">
              <h6 className="fs-sm mb-n1">Mary Alice Grant</h6>
              <span className="fs-ms text-muted opacity-75">Jan 27, 2020</span>
            </div>
          </footer>
        </blockquote>
        <blockquote className="mb-2">
          <div className="card card-body fs-md text-muted border-0 shadow-sm">
            <div className="mb-2">
              <div className="star-rating">
                <i className="star-rating-icon ci-star-filled active"></i>
                <i className="star-rating-icon ci-star-filled active"></i>
                <i className="star-rating-icon ci-star-filled active"></i>
                <i className="star-rating-icon ci-star-filled active"></i>
                <i className="star-rating-icon ci-star"></i>
              </div>
            </div>
            Lorem ipsum dolor sit amet, quia non consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </div>
          <footer className="d-flex justify-content-center align-items-center pt-4">
            <img
              className="rounded-circle"
              src="/img/shop/reviews/01.jpg"
              width="50"
              alt="Rafael Marquez"
            />
            <div className="ps-3">
              <h6 className="fs-sm mb-n1">Rafael Marquez</h6>
              <span className="fs-ms text-muted opacity-75">Dec 19, 2020</span>
            </div>
          </footer>
        </blockquote>
        <blockquote className="mb-2">
          <div className="card card-body fs-md text-muted border-0 shadow-sm">
            <div className="mb-2">
              <div className="star-rating">
                <i className="star-rating-icon ci-star-filled active"></i>
                <i className="star-rating-icon ci-star-filled active"></i>
                <i className="star-rating-icon ci-star-filled active"></i>
                <i className="star-rating-icon ci-star-filled active"></i>
                <i className="star-rating-icon ci-star-filled active"></i>
              </div>
            </div>
            Lorem ipsum dolor sit amet, quia non consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </div>
          <footer className="d-flex justify-content-center align-items-center pt-4">
            <img
              className="rounded-circle"
              src="/img/testimonials/02.jpg"
              width="50"
              alt="Adrian Lewis"
            />
            <div className="ps-3">
              <h6 className="fs-sm mb-n1">Adrian Lewis</h6>
              <span className="fs-ms text-muted opacity-75">Dec 13, 2020</span>
            </div>
          </footer>
        </blockquote>
        <blockquote className="mb-2">
          <div className="card card-body fs-md text-muted border-0 shadow-sm">
            <div className="mb-2">
              <div className="star-rating">
                <i className="star-rating-icon ci-star-filled active"></i>
                <i className="star-rating-icon ci-star-filled active"></i>
                <i className="star-rating-icon ci-star-filled active"></i>
                <i className="star-rating-icon ci-star"></i>
                <i className="star-rating-icon ci-star"></i>
              </div>
            </div>
            Lorem ipsum dolor sit amet, quia non consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </div>
          <footer className="d-flex justify-content-center align-items-center pt-4">
            <img
              className="rounded-circle"
              src="/img/shop/reviews/03.jpg"
              width="50"
              alt="Daniel Adams"
            />
            <div className="ps-3">
              <h6 className="fs-sm mb-n1">Daniel Adams</h6>
              <span className="fs-ms text-muted opacity-75">Dec 04, 2020</span>
            </div>
          </footer>
        </blockquote>
      </TinySlider>
    </div>
  );
}
