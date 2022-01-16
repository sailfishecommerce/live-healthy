/* eslint-disable @next/next/no-img-element */
import dynamic from "next/dynamic";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

const OwlCarousel = dynamic(() => import("react-owl-carousel"), {
  ssr: false,
});

export default function TopHeaderSlider({
  icon1,
  icon2,
  icon3,
  sliderText1,
  sliderText2,
  sliderText3,
}: any) {
  const sliderContent = [
    {
      icon: icon1,
      text: sliderText1,
    },
    {
      icon: icon2,
      text: sliderText2,
    },
    {
      icon: icon3,
      text: sliderText3,
    },
  ];
  return (
    <>
      <OwlCarousel
        className="owl-theme owl-carousel"
        autoplay
        loop
        margin={10}
        dots={false}
        style={{ width: "50%" }}
        center={true}
        nav={false}
        items={1}
      >
        {sliderContent.map((content) => (
          <div
            key={content.icon}
            style={{ backgroundColor: "#373F50" }}
            className="item slider-container d-flex align-items-center m-auto justify-content-center"
          >
            <div className="icon-container">{content.icon}</div>
            <p className="text-white text-center mb-0">{content.text}</p>
          </div>
        ))}
      </OwlCarousel>
      <style jsx>{`
        .icon-container {
          height: 50px;
          width: 60px;
          margin: 0px 10px;
        }
      `}</style>
    </>
  );
}
