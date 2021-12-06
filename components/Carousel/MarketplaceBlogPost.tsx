/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import dynamic from "next/dynamic";

const TinySlider: any = dynamic(() => import("tiny-slider-react"), {
  ssr: false,
});

export default function MarketplaceBlogPost() {
  const settings = {
    items: 2,
    gutter: 15,
    controls: false,
    nav: true,
    responsive: {
      "0": { items: 1 },
      "500": { items: 2 },
      "768": { items: 3 },
      "992": { items: 3, gutter: 30 },
    },
  };
  return (
    <div className="tns-carousel">
      <TinySlider onClick={() => {}} settings={settings}>
        <div>
          <div className="card">
            <Link href="/blog-single" passHref>
              <a className="blog-entry-thumb">
                <img
                  className="card-img-top"
                  src="/img/blog/05.jpg"
                  alt="Post"
                />
              </a>
            </Link>
            <div className="card-body">
              <h2 className="h6 blog-entry-title">
                <Link href="/blog-single" passHref>
                  <a>We start selling WordPress themes soon</a>
                </Link>
              </h2>
              <p className="fs-sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua enim
                ad minim...
              </p>
              <div className="fs-xs text-nowrap">
                <a className="blog-entry-meta-link text-nowrap" href="#">
                  Nov 23
                </a>
                <span className="blog-entry-meta-divider mx-2"></span>
                <Link href="/blog-single#comments" passHref>
                  <a className="blog-entry-meta-link text-nowrap">
                    <i className="ci-message"></i>
                    19
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="card">
            <Link href="/blog-single" passHref>
              <a className="blog-entry-thumb">
                <img
                  className="card-img-top"
                  src="/img/blog/06.jpg"
                  alt="Post"
                />
              </a>
            </Link>
            <div className="card-body">
              <h2 className="h6 blog-entry-title">
                <Link href="/blog-single" passHref>
                  <a>Shoot like a pro. Tips &amp; tricks</a>
                </Link>
              </h2>
              <p className="fs-sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua enim
                ad minim...
              </p>
              <div className="fs-xs text-nowrap">
                <a className="blog-entry-meta-link text-nowrap" href="#">
                  Oct 10
                </a>
                <span className="blog-entry-meta-divider mx-2"></span>
                <Link href="/blog-single#comments" passHref>
                  <a className="blog-entry-meta-link text-nowrap">
                    <i className="ci-message"></i>
                    28
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="card">
            <Link href="/blog-single" passHref>
              <a className="blog-entry-thumb">
                <img
                  className="card-img-top"
                  src="/img/blog/07.jpg"
                  alt="Post"
                />
              </a>
            </Link>
            <div className="card-body">
              <h2 className="h6 blog-entry-title">
                <Link href="/blog-single" passHref>
                  <a>Designing engaging mobile experiences</a>
                </Link>
              </h2>
              <p className="fs-sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua enim
                ad minim...
              </p>
              <div className="fs-xs text-nowrap">
                <a className="blog-entry-meta-link text-nowrap" href="#">
                  Sep 15
                </a>
                <span className="blog-entry-meta-divider mx-2"></span>
                <Link href="/blog-single#comments" passHref>
                  <a className="blog-entry-meta-link text-nowrap">
                    <i className="ci-message"></i>
                    46
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </TinySlider>
    </div>
  );
}
