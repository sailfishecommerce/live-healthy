/* eslint-disable @next/next/no-img-element */
import dynamic from "next/dynamic";


const TinySlider: any = dynamic(() => import("tiny-slider-react"), {
  ssr: false,
});

export default function HomeGroceryCarousel() {
  const settings = {
    items: 1,
    mode: "gallery",
    nav: false,
    responsive: {
      "0": { nav: true, controls: false },
      "576": { nav: false, controls: true },
    },
    controlsText: [
      '<i class="ci-arrow-left"></i>',
      '<i class="ci-arrow-right"></i>',
    ],
  };
  return (
    <section className="tns-carousel mb-3 mb-md-5">
      <TinySlider onClick={() => {}} settings={settings}>
        {/*<!-- Slide 1-->*/}
        <div>
          <div
            className="rounded-3 px-md-5 text-center text-xl-start"
            style={{ backgroundColor: "#59c879" }}
          >
            <div
              className="d-xl-flex justify-content-between align-items-center px-4 px-sm-5 mx-auto"
              style={{ maxWidth: "1226px" }}
            >
              <div
                className="py-5 me-xl-4 mx-auto mx-xl-0"
                style={{ maxWidth: "490px" }}
              >
                <h2 className="h1 text-light">Fresh Foods a Click Away</h2>
                <p className="text-light pb-4">
                  Order any goods from our store online and we deliver them to
                  your door at a time convenient for you.
                </p>
                <h5 className="text-light pb-3">
                  On the go? Try our mobile app
                </h5>
                <div className="d-flex flex-wrap justify-content-center justify-content-xl-start">
                  <a
                    className="btn-market btn-apple me-2 mb-2"
                    href="#"
                    role="button"
                  >
                    <span className="btn-market-subtitle">Download on the</span>
                    <span className="btn-market-title">App Store</span>
                  </a>
                  <a
                    className="btn-market btn-google mb-2"
                    href="#"
                    role="button"
                  >
                    <span className="btn-market-subtitle">Download on the</span>
                    <span className="btn-market-title">Google Play</span>
                  </a>
                </div>
              </div>
              <div>
                <img src="/img/grocery/slider/slide01.jpg" alt="Image" />
              </div>
            </div>
          </div>
        </div>
        {/*<!-- Slide 2-->*/}
        <div>
          <div
            className="rounded-3 px-md-5 text-center text-xl-start"
            style={{ backgroundColor: "#1a6fb0" }}
          >
            <div
              className="d-xl-flex justify-content-between align-items-center px-4 px-sm-5 mx-auto"
              style={{ maxWidth: "1226px" }}
            >
              <div
                className="py-5 me-xl-4 mx-auto mx-xl-0"
                style={{ maxWidth: "490px" }}
              >
                <h2 className="h1 text-light">24/7 Delivery Service</h2>
                <p className="text-light pb-4">
                  Order any goods from our store online and we deliver them to
                  your door at a time convenient for you.
                </p>
                <h5 className="text-light pb-3">
                  On the go? Try our mobile app
                </h5>
                <div className="d-flex flex-wrap justify-content-center justify-content-xl-start">
                  <a
                    className="btn-market btn-apple me-2 mb-2"
                    href="#"
                    role="button"
                  >
                    <span className="btn-market-subtitle">Download on the</span>
                    <span className="btn-market-title">App Store</span>
                  </a>
                  <a
                    className="btn-market btn-google mb-2"
                    href="#"
                    role="button"
                  >
                    <span className="btn-market-subtitle">Download on the</span>
                    <span className="btn-market-title">Google Play</span>
                  </a>
                </div>
              </div>
              <div>
                <img src="/img/grocery/slider/slide02.jpg" alt="Image" />
              </div>
            </div>
          </div>
        </div>
      </TinySlider>
    </section>
  );
}
