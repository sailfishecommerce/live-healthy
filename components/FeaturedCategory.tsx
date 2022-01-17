/* eslint-disable react-hooks/exhaustive-deps */
import { useRef } from "react";

import CategoryBanner from "./CategoryBanner";
import FeaturedCategoryCarousel from "./Carousel/FeaturedCategoryCarousel";

interface FeaturedCategoryProps {
  categoryImg?: string;
  categoryTitle: string;
  categoryCaption: string;
  bannerBgColor: string;
  local?: boolean;
}

export default function FeaturedCategory({
  categoryImg,
  categoryTitle,
  categoryCaption,
  bannerBgColor,
  local,
}: FeaturedCategoryProps) {
  return (
    <section className="container mb-4 pb-3 pb-sm-0 mb-sm-5">
      <div className="row">
        {/*<!-- Banner with controls-->*/}
        <CategoryBanner
          categoryTitle={categoryTitle}
          categoryImg={categoryImg}
          categoryCaption={categoryCaption}
          bannerBgColor={bannerBgColor}
          local={local}
        />
        {/*<!-- Product grid (carousel)-->*/}
        <FeaturedCategoryCarousel  />
      </div>
    </section>
  );
}
