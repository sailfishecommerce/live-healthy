/* eslint-disable react-hooks/exhaustive-deps */
import CategoryBanner from "./CategoryBanner";
import JustInView from "@/components/JustInView";
import CategoriesCarousel from "./Carousel/CategoriesCarousel";

export default function FeaturedCategory() {
  return (
    <JustInView section="FeaturedCategory">
      <section className="container mb-4 pb-3 pb-sm-0 mb-sm-5">
        <div className="row align-items-center">
          <CategoryBanner />
          <CategoriesCarousel />
        </div>
      </section>
    </JustInView>
  );
}

// FeaturedCategory.whyDidYouRender = true;
