/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import dynamic from "next/dynamic";

const TinySlider: any = dynamic(() => import("tiny-slider-react"), {
  ssr: false,
});

export default function HomeElectronicsCarousel() {
  const settings = {
    items: 1,
    controls: false,
    loop: false,
    navPosition: "bottom",
  };
  return (
    <div className="tns-carousel">
      <TinySlider onClick={() => {}} settings={settings}>
        <div>
          <div className="row align-items-center">
            <div className="col-md-6 order-md-2">
              <img
                className="d-block mx-auto"
                src="/img/home/hero-slider/05.jpg"
                alt="VR Collection"
              />
            </div>
            <div className="col-lg-5 col-md-6 offset-lg-1 order-md-1 pt-4 pb-md-4 text-center text-md-start">
              <h2 className="fw-light pb-1 from-bottom">World of music with</h2>
              <h1 className="display-4 from-bottom delay-1">Headphones</h1>
              <h5 className="fw-light pb-3 from-bottom delay-2">
                Choose between top brands
              </h5>
              <div className="d-table scale-up delay-4 mx-auto mx-md-0">
                <Link href="/shop" passHref>
                  <a className="btn btn-primary btn-shadow">
                    Shop Now
                    <i className="ci-arrow-right ms-2 me-n1"></i>
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="row align-items-center">
            <div className="col-md-6 order-md-2">
              <img
                className="d-block mx-auto"
                src="/img/home/hero-slider/04.jpg"
                alt="VR Collection"
              />
            </div>
            <div className="col-lg-5 col-md-6 offset-lg-1 order-md-1 pt-4 pb-md-4 text-center text-md-start">
              <h2 className="fw-light pb-1 from-start">Explore the best</h2>
              <h1 className="display-4 from-start delay-1">VR Collection</h1>
              <h5 className="fw-light pb-3 from-start delay-2">
                on the market
              </h5>
              <div className="d-table scale-up delay-4 mx-auto mx-md-0">
                <Link href="/shop" passHref>
                  <a className="btn btn-primary btn-shadow">
                    Shop Now
                    <i className="ci-arrow-right ms-2 me-n1"></i>
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="row align-items-center">
            <div className="col-md-6 order-md-2">
              <img
                className="d-block mx-auto"
                src="/img/home/hero-slider/06.jpg"
                alt="VR Collection"
              />
            </div>
            <div className="col-lg-5 col-md-6 offset-lg-1 order-md-1 pt-4 pb-md-4 text-center text-md-start">
              <h2 className="fw-light pb-1 scale-up">Check our huge</h2>
              <h1 className="display-4 scale-up delay-1">Smartphones</h1>
              <h5 className="fw-light pb-3 scale-up delay-2">
                &amp; Accessories collection
              </h5>
              <div className="d-table scale-up delay-4 mx-auto mx-md-0">
                <Link href="/shop" passHref>
                  <a className="btn btn-primary btn-shadow">
                    Shop Now
                    <i className="ci-arrow-right ms-2 me-n1"></i>
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
