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

interface BrandProps {
  brand?: any;
  local: boolean;
}
export function Brand({ brand, local }: BrandProps) {
  return (
    <div
      // className="col-md-3 col-sm-4 col-6"
      className="brand"
    >
      <a
        // className="d-block bg-white shadow-sm rounded-3 py-3 py-sm-4 mb-grid-gutter"
        className=" brand-link d-block bg-white shadow-sm rounded-3 py-3 py-sm-4"
        href="#"
      >
        {local ? (
          <img src={brand.img} alt={brand.name} className="d-block mx-auto" />
        ) : (
          <div style={{ width: "150px" }} className="d-block mx-auto">
            {brand}
          </div>
        )}
      </a>
      <style jsx>
        {`
          .brand {
            height: 220px;
          }
          .brand-link {
            height: 200px;
          }
          @media (max-width: 768px) {
            .brand {
              height: 100px;
              width: 130px;
            }
            .brand-link {
              height: 80px;
            }
          }
        `}
      </style>
    </div>
  );
}

interface ShopByBrand {
  children: any;
}
export default function ShopByBrand({ children }: ShopByBrand) {
  return (
    <section className="container py-lg-4 mb-4">
      <h2 className="h3 text-center pb-4">Shop by brand</h2>
      <div className="row">{children}</div>
    </section>
  );
}

export function ShopByBrandPreview() {
  return (
    <section className="container py-lg-4 mb-4">
      <h2 className="h3 text-center pb-4">Shop by brand</h2>
      <div className="row brand-row">
        <Swiper
          spaceBetween={50}
          loop={true}
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
              <Brand key={brand.name} brand={brand} local />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
