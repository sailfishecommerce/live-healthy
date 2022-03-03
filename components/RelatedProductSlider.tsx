import { Splide, SplideSlide } from "@splidejs/react-splide";
import Link from "next/link";

import Image from "@/components/Image";
import FormattedPrice from "@/lib/formatPrice";
import Product from "@/components/Product";

import "@splidejs/splide/dist/css/splide.min.css";

interface RelatedProductSliderProps {
  relatedProducts: any[];
}

export default function RelatedProductSlider({
  relatedProducts,
}: RelatedProductSliderProps) {
  return (
    <div className="container">
      <div className="row">
        <h4 className="text-center mb-4">Related Products</h4>
        <Splide
          options={{
            autoplay: true,
            perPage: 5,
            type: "loop",
          }}
        >
          {relatedProducts.map((item, index: number) => (
            <SplideSlide key={index}>
              <Product product={item} />
            </SplideSlide>
          ))}
        </Splide>
        <style jsx>{``}</style>
      </div>
    </div>
  );
}
