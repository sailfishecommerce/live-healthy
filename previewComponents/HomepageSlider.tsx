/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import dynamic from "next/dynamic";

const TinySlider: any = dynamic(() => import("tiny-slider-react"), {
  ssr: false,
});

interface HomepageSliderProps {
  bgColor1: string;
  sliderTitle1: string;
  sliderCaption1: string;
  sliderDescription1: string;
  sliderImg1: any;
  bgColor2: string;
  bgColor3: string;
  sliderTitle2: string;
  sliderTitle3: string;
  sliderCaption2: string;
  sliderCaption3: string;
  sliderDescription2: string;
  sliderDescription3: string;
  sliderImg2: any;
  sliderImg3: any;
}

export default function HomepageSlider({
  bgColor1,
  bgColor2,
  bgColor3,
  sliderTitle1,
  sliderTitle2,
  sliderTitle3,
  sliderCaption1,
  sliderCaption2,
  sliderCaption3,
  sliderDescription1,
  sliderDescription2,
  sliderDescription3,
  sliderImg1,
  sliderImg2,
  sliderImg3,
}: HomepageSliderProps) {
  const settings = {
    controlsText: [
      '<i class="ci-arrow-left"></i>',
      '<i class="ci-arrow-right"></i>',
    ],
    nav: false,
    mouseDrag: true,
    speed: 500,
    loop: true,
    autoplay: true,
    autoplayHoverPause: true,
    autoplayButtonOutput: false,
  };
  const content = [
    {
      bgColor: bgColor1,
      sliderTitle: sliderTitle1,
      sliderCaption: sliderCaption1,
      sliderDescription: sliderDescription1,
      sliderImg: sliderImg1,
    },
    {
      bgColor: bgColor2,
      sliderTitle: sliderTitle2,
      sliderCaption: sliderCaption2,
      sliderDescription: sliderDescription2,
      sliderImg: sliderImg2,
    },
    {
      bgColor: bgColor3,
      sliderTitle: sliderTitle3,
      sliderCaption: sliderCaption3,
      sliderDescription: sliderDescription3,
      sliderImg: sliderImg3,
    },
  ];
  return (
    <section className="section-carousel tns-carousel tns-controls-lg mb-4 mb-lg-5">
      <TinySlider settings={settings}>
        {content.map((item, index) => (
          <div
            key={index}
            className="px-lg-5"
            style={{ backgroundColor: `${item.bgColor}` }}
          >
            <div className="d-lg-flex justify-content-between align-items-center ps-lg-4">
              <img
                src={item.sliderImg}
                height="50%"
                width="50%"
                className="carouselImg d-block order-lg-2 me-lg-n5 flex-shrink-0"
                alt="Summer Collection"
              />
              <div
                className="position-relative mx-auto me-lg-n5 py-5 px-4 mb-lg-5 order-lg-1"
                style={{ maxWidth: "42rem", zIndex: 10 }}
              >
                <div className="pb-lg-5 mb-lg-5 text-center text-lg-start text-lg-nowrap">
                  <h3 className="h2 text-light fw-light pb-1 from-start">
                    {item.sliderCaption}
                  </h3>
                  <h2 className="text-light display-5 from-start delay-1">
                    {item.sliderTitle}
                  </h2>
                  <p className="fs-lg text-light pb-3 from-start delay-2">
                    {item.sliderDescription}
                  </p>
                  <div className="d-table scale-up delay-4 mx-auto mx-lg-0">
                    <Link href="/shop" passHref>
                      <a className="btn btn-primary">
                        Shop Now
                        <i className="ci-arrow-right ms-2 me-n1"></i>
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </TinySlider>
    </section>
  );
}
