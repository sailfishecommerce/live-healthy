import { Splide, SplideSlide } from "@splidejs/react-splide";
import Link from "next/link";
import Image from "@/components/Image";

import "@splidejs/splide/dist/css/splide.min.css";

interface RelatedProductSliderProps {
  relatedProducts: any[];
}

export default function RelatedProductSlider({
  relatedProducts,
}: RelatedProductSliderProps) {
  return (
    <div>
      <Splide
        options={{
          autoplay: true,
          perPage: 6,
          type: "loop",
        }}
      >
        {relatedProducts.map((item, index: number) => (
          <SplideSlide key={index}>
            <Link href="/shop" passHref>
              <Image
                src={item.sliderImg}
                alt={item.sliderTitle}
                height={300}
                width={400}
                layout="responsive"
                size="true"
                priority={true}
              />
            </Link>
          </SplideSlide>
        ))}
      </Splide>
      <style jsx>{``}</style>
    </div>
  );
}
