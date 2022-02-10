import {memo} from 'react'
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";

import { useCategoryData } from "@/hooks/useCategory";
import Category from "../Category";
import LoadCategory from "../CategoryLoader";

function CategorieCarouselComponent() {
  const [categories, status] = useCategoryData();
  const sliceCategories = (category: any[]) => category.slice(12);

  return (
    <div className="col-md-7 pt-4 pt-md-0">
      {status === "error" ? (
        "error loading categories"
      ) : status === "loading" ? (
        <LoadCategory arrayType={4} gridStyle="col-6" />
      ) : (
        <Splide
          options={{
            type: "loop",
            perPage: 2,
            gap: "1rem",
            autoplay: true,
          }}
        >
          {sliceCategories(categories.results).map(
            (category: any, index: number) => (
              <SplideSlide key={index}>
                <div className="row mx-n2">
                  <Category key={category.id} category={category} />
                </div>
              </SplideSlide>
            )
          )}
        </Splide>
      )}
    </div>
  );
}

export default CategorieCarousel