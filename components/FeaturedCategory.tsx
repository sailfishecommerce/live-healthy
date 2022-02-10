/* eslint-disable react-hooks/exhaustive-deps */
import CategoryBanner from "./CategoryBanner";
import CategoriesCarousel from "./Carousel/CategoriesCarousel";

export default function FeaturedCategory() {
  return (
    <section className="container mb-4 pb-3 pb-sm-0 mb-sm-5">
      <div className="row align-items-center">
        <CategoryBanner />
        <CategoriesCarousel />
      </div>
    </section>
  );
}

// FeaturedCategory.whyDidYouRender = true;
