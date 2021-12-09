/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import CarouselWrapper from "./CarouselWrapper";

export default function BlogGridCarousel() {
  const settings = {
    items: 2,
    nav: false,
    autoHeight: true,
    responsive: {
      "0": { items: 1 },
      "700": { items: 2, gutter: 20 },
      "991": { items: 2, gutter: 30 },
    },
    controlsText: [
      '<i class="ci-arrow-left"></i>',
      '<i class="ci-arrow-right"></i>',
    ],
    controlsContainer: "#blog-grid-controls",
  };
  return (
    <div className="pt-5 position-relative">
      <div className="tns-controls" id="blog-grid-controls">
        <button type="button">
          <i className="ci-arrow-left"></i>
        </button>
        <button type="button">
          <i className="ci-arrow-right"></i>
        </button>
      </div>
      <CarouselWrapper onClick={() => {}} settings={settings}>
        <article>
          <Link href="/blog-single-sidebar" passHref>
            <a className="blog-entry-thumb mb-3">
              <span className="blog-entry-meta-label fs-sm">
                <i className="ci-time"></i>Sep 10
              </span>
              <img src="/img/blog/featured/01.jpg" alt="Featured post" />
            </a>
          </Link>
          <div className="d-flex justify-content-between mb-2 pt-1">
            <h2 className="h5 blog-entry-title mb-0">
              <Link href="/blog-single-sidebar" passHref>
                <a>Healthy Food - New Way of Living</a>
              </Link>
            </h2>
            <Link href="/blog-single-sidebar#comments" passHref>
              <a className="blog-entry-meta-link fs-sm text-nowrap ms-3 pt-1">
                <i className="ci-message"></i>13
              </a>
            </Link>
          </div>
          <div className="d-flex align-items-center fs-sm">
            <a className="blog-entry-meta-link" href="#">
              <div className="blog-entry-author-ava">
                <img src="/img/blog/meta/04.jpg" alt="Olivia Reyes" />
              </div>
              Olivia Reyes
            </a>
            <span className="blog-entry-meta-divider"></span>
            <div className="fs-sm text-muted">
              in{" "}
              <a href="#" className="blog-entry-meta-link">
                Lifestyle
              </a>
              ,{" "}
              <a href="#" className="blog-entry-meta-link">
                Nutrition
              </a>
            </div>
          </div>
        </article>
        <article>
          <Link href="/blog-single-sidebar" passHref>
            <a className="blog-entry-thumb mb-3">
              <span className="blog-entry-meta-label fs-sm">
                <i className="ci-time"></i>Aug 27
              </span>
              <img src="/img/blog/featured/02.jpg" alt="Featured post" />
            </a>
          </Link>
          <div className="d-flex justify-content-between mb-2 pt-1">
            <h2 className="h5 blog-entry-title mb-0">
              <Link href="/blog-single-sidebar" passHref>
                <a>Online Payment Security Tips for Shoppers</a>
              </Link>
            </h2>
            <Link href="/blog-single-sidebar#comments" passHref>
              <a className="blog-entry-meta-link fs-sm text-nowrap ms-3 pt-1">
                <i className="ci-message"></i>9
              </a>
            </Link>
          </div>
          <div className="d-flex align-items-center fs-sm">
            <a className="blog-entry-meta-link" href="#">
              <div className="blog-entry-author-ava">
                <img src="/img/blog/meta/05.jpg" alt="Rafael Marquez" />
              </div>
              Rafael Marquez
            </a>
            <span className="blog-entry-meta-divider"></span>
            <div className="fs-sm text-muted">
              in{" "}
              <a href="#" className="blog-entry-meta-link">
                Online shpopping
              </a>
            </div>
          </div>
        </article>
        <article>
          <Link href="/blog-single-sidebar" passHref>
            <a className="blog-entry-thumb mb-3">
              <span className="blog-entry-meta-label fs-sm">
                <i className="ci-time"></i>Aug 16
              </span>
              <img src="/img/blog/featured/03.jpg" alt="Featured post" />
            </a>
          </Link>
          <div className="d-flex justify-content-between mb-2 pt-1">
            <h2 className="h5 blog-entry-title mb-0">
              <Link href="/blog-single-sidebar" passHref>
                <a>We Launched New Store in San Francisco!</a>
              </Link>
            </h2>
            <Link href="/blog-single-sidebar#comments" passHref>
              <a className="blog-entry-meta-link fs-sm text-nowrap ms-3 pt-1">
                <i className="ci-message"></i>23
              </a>
            </Link>
          </div>
          <div className="d-flex align-items-center fs-sm">
            <a className="blog-entry-meta-link" href="#">
              <div className="blog-entry-author-ava">
                <img src="/img/blog/meta/03.jpg" alt="Paul Woodred" />
              </div>
              Paul Woodred
            </a>
            <span className="blog-entry-meta-divider"></span>
            <div className="fs-sm text-muted">
              in{" "}
              <a href="#" className="blog-entry-meta-link">
                Bandicoot news
              </a>
            </div>
          </div>
        </article>
      </CarouselWrapper>
    </div>
  );
}
