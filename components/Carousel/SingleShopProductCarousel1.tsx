/* eslint-disable @next/next/no-img-element */
import dynamic from "next/dynamic";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { productType } from "@/types";
import ProductCarouselView from "../ProductCarouselView";

const OwlCarousel = dynamic(() => import("react-owl-carousel"), {
  ssr: false,
});

interface Props {
  otherProducts: productType[];
  product: productType;
}

export default function SingleShopProductCarousel1({
  otherProducts,
  product,
}: Props) {
  const filterProduct = otherProducts?.filter((p) => p.id !== product.id);

  return (
    <div className="otherProductCarousel container py-5 my-md-3">
      <h2 className="h3 text-center pb-4">You may also like</h2>
      <OwlCarousel
        className="owl-theme owl-carousel"
        autoplay
        loop
        margin={10}
        dots={false}
        center={true}
        items={3}
      >
        {filterProduct.map((product: productType) => (
          <div className="item" key={product.id}>
            <ProductCarouselView product={product} />
          </div>
        ))}
      </OwlCarousel>
    </div>
  );
}
