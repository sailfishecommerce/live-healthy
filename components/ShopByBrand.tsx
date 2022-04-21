/* eslint-disable @next/next/no-img-element */
import { memo } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";

import useMediaQuery from "@/hooks/useMediaQuery";
import brands from "@/json/brand.json";
import styles from "@/styles/ShopByBrandCarousel.module.css";
import "@splidejs/splide/dist/css/splide.min.css";

function ShopByBrandComponent() {
  const tabWidth = useMediaQuery("(max-width:768px)");

  const imageSize = tabWidth
    ? { height: 40, width: 120 }
    : { height: 60, width: 200 };

  return (
    <section className="container py-lg-4 mb-4">
      <h2 className="h3 text-center pb-4">Shop by brand</h2>
      <div className="row brand-row">
        <Splide
          options={{
            type: "loop",
            autoplay: true,
            perPage: 5,
            breakpoints: {
              450: {
                perPage: 2,
                gap: "1rem",
              },
              600: {
                perPage: 3,
                gap: "1.5rem",
              },
              1200: {
                perPage: 4,
                gap: "2.5rem",
              },
            },
          }}
        >
          {brands.map((brand: any, index: number) => (
            <SplideSlide key={index}>
              <div className={styles.brand}>
                <a
                  className={`${styles.brandLink} d-flex bg-white shadow-sm rounded-3 py-3 py-sm-4`}
                  href="#"
                >
                  <div className="brandContainer d-flex justify-content-center align-items-center mx-auto">
                    <img
                      src={brand.img}
                      alt={brand.name}
                      height={imageSize.height}
                      width={imageSize.width}
                    />
                  </div>
                </a>
              </div>
            </SplideSlide>
          ))}
        </Splide>
      </div>
      <style jsx>
        {`
          .brandContainer {
            width: 200px;
            height: 100px;
          }
        `}
      </style>
    </section>
  );
}

const ShopByBrand = memo(ShopByBrandComponent);
export default ShopByBrand;
