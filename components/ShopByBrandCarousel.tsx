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
import styles from "@/styles/ShopByBrandCarousel.module.css";

import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/keyboard";
import "swiper/css/mousewheel";

export default function ShopByBrandCarousel({
  brandLogo1,
  brandLogo2,
  brandLogo3,
  brandLogo4,
  brandLogo5,
  brandLogo6,
  brandLogo7,
  brandLogo8,
}: any) {
  const brandLogoImages = [
    brandLogo1,
    brandLogo2,
    brandLogo3,
    brandLogo4,
    brandLogo5,
    brandLogo6,
    brandLogo7,
    brandLogo8,
  ];
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
          {brandLogoImages.map((brand: any, index: number) => (
            <SwiperSlide key={index}>
              <div className={styles.brand}>
                <a
                  className={`${styles.brandLink} d-block bg-white shadow-sm rounded-3 py-3 py-sm-4`}
                  href="#"
                >
                  <div style={{ width: "150px" }} className="d-block mx-auto">
                    {brand}
                  </div>
                </a>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}