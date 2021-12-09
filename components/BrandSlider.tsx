/* eslint-disable @next/next/no-img-element */
import { PropsWithChildren, useRef } from "react";
import {
  Navigation,
  Pagination,
  EffectFade,
  Autoplay,
  Mousewheel,
  Keyboard,
} from "swiper";
import { Swiper } from "swiper/react";

import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/keyboard";
import "swiper/css/mousewheel";

interface SliderProps {
  children: any;
  className?: string;
}

export default function BrandSlider({
  children,
  className,
}: PropsWithChildren<SliderProps>) {
  return (
    <Swiper
      slidesPerView={3}
      spaceBetween={30}
      breakpoints={{
        320: {
          slidesPerView: 2,
          spaceBetween: 10,
        },
        // when window width is >= 480px
        480: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        // when window width is >= 640px
        640: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
        1200: {
          slidesPerView: 4,
          spaceBetween: 30,
        },
      }}
      modules={[
        Autoplay,
        Navigation,
        Pagination,
        Mousewheel,
        Keyboard,
        EffectFade,
      ]}
      autoplay={true}
      fadeEffect={{
        crossFade: true,
      }}
      loop={true}
      effect="fade"
      className={className}
      pagination={true}
      mousewheel={true}
      keyboard={true}
    >
      {children}
    </Swiper>
  );
}
