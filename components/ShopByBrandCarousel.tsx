/* eslint-disable @next/next/no-img-element */
/* eslint-disable @next/next/no-img-element */
import dynamic from "next/dynamic";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import styles from "@/styles/ShopByBrandCarousel.module.css";

const OwlCarousel = dynamic(() => import("react-owl-carousel"), {
  ssr: false,
});

export default function ShopByBrandCarousel({
  brandLogo1,
  brandLogo2,
  brandLogo3,
  brandLogo4,
  brandLogo5,
  brandLogo6,
  brandLogo7,
  brandLogo8,
  brandLogo9,
  brandLogo10,
  brandLogo11,
  brandLogo12,
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
    brandLogo9,
    brandLogo10,
    brandLogo11,
    brandLogo12,
  ];

  const responsiveConfig = {
    0: {
      items: 2,
    },
    480: {
      items: 3,
    },
    768: {
      items: 4,
    },
    1200: {
      items: 5,
    },
  };

  return (
    <section className="container py-lg-4 mb-4">
      <h2 className="h3 text-center pb-4">Shop by brand</h2>
      <div className="row brand-row">
        <OwlCarousel
          className="owl-theme owl-carousel"
          autoplay
          loop
          margin={10}
          dots
          center={true}
          responsive={responsiveConfig}
          items={4}
        >
          {brandLogoImages.map((brand: any, index: number) => (
            <div className="item" key={index}>
              <div className={styles.brand}>
                <a
                  className={`${styles.brandLink} d-flex bg-white shadow-sm rounded-3 py-3 py-sm-4`}
                  href="#"
                >
                  <div style={{ width: "150px" }} className="d-flex mx-auto">
                    {brand}
                  </div>
                </a>
              </div>
            </div>
          ))}
        </OwlCarousel>
      </div>
    </section>
  );
}
