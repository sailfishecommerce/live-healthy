/* eslint-disable @next/next/no-img-element */
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  EffectFade,
  Autoplay,
  Mousewheel,
  Keyboard,
} from "swiper";
import brands from "@/json/brand.json";

import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/keyboard";
import "swiper/css/mousewheel";
import Brands from "./Brands";

export default function ShopByBrandPreview() {
  return (
    <section className="container py-lg-4 mb-4">
      <h2 className="h3 text-center pb-4">Shop by brand</h2>
      <div className="row brand-row">
        <Swiper
          spaceBetween={50}
          loop={true}
          className="d-flex"
          autoplay={true}
          slidesPerView={3}
          modules={[
            Autoplay,
            Navigation,
            Pagination,
            Mousewheel,
            Keyboard,
            EffectFade,
          ]}
          pagination={true}
          mousewheel={true}
          keyboard={true}
          navigation={true}
        >
          {brands.map((brand, index) => (
            <SwiperSlide key={index}>
              <Brands key={brand.name} brand={brand} local />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
