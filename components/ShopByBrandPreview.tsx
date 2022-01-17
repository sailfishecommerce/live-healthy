/* eslint-disable @next/next/no-img-element */
import dynamic from "next/dynamic";
import brands from "@/json/brand.json";
import Brands from "./Brands";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

const OwlCarousel = dynamic(() => import("react-owl-carousel"), {
  ssr: false,
});

export default function ShopByBrandPreview() {
  return (
    <section className="container py-lg-4 mb-4">
      <h2 className="h3 text-center pb-4">Shop by brand</h2>
      <div className="row brand-row">
        <OwlCarousel
          className="owl-theme owl-carousel"
          autoplay
          loop
          margin={10}
          dots={false}
          center={true}
          items={3}
        >
          {brands.map((brand, index) => (
            <div className="item" key={index}>
              <Brands key={brand.name} brand={brand} local />
            </div>
          ))}
        </OwlCarousel>
      </div>
    </section>
  );
}
