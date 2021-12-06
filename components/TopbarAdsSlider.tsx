/* eslint-disable @next/next/no-img-element */
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Autoplay, Mousewheel } from "swiper";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/effect-fade";
import "swiper/css/mousewheel";

interface TopbarAdsSlider {
  sliderContent: { text: string; icon: string }[];
}

export default function TopbarAdsSlider({ sliderContent }: TopbarAdsSlider) {
  return (
    <Swiper
      spaceBetween={30}
      loop={true}
      autoplay={true}
      slidesPerView={1}
      modules={[Autoplay, Mousewheel, EffectFade]}
      effect={"fade"}
      mousewheel={true}
      navigation={false}
    >
      {sliderContent.map((slider, index) => (
        <SwiperSlide key={index}>
          <div
            style={{ backgroundColor: "#373F50" }}
            className="slider-container d-flex align-items-center m-auto justify-content-center"
          >
            {slider.icon && (
              <img
                src={`/img/${slider.icon}`}
                className="sliderIcon"
                alt="slider icon"
              />
            )}
            <p className="text-white text-center mb-0">{slider.text}</p>
          </div>
        </SwiperSlide>
      ))}
      <style jsx>
        {`
          .sliderIcon {
            height: 40px;
            width: 40px;
            margin: 0px 5px;
          }
          @media (max-width: 768px) {
            .slider-container p.text-white.text-center.mb-0 {
              font-size: 14px;
            }
            .slider-container {
              height: 40px;
            }
          }
        `}
      </style>
    </Swiper>
  );
}
