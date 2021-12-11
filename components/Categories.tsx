import { CustomRangeSlider } from "./AlgoliaPriceRange";
import { CategoriesRefinementList } from "./CategoryRefinementList";
import { SizeRefinementList } from "./SizeRefinementList";
import { RatingsList } from "./RatingsRefinementList";


export default function Categories() {
  return (
    <aside className="col-lg-3">
      <div
        className="offcanvas offcanvas-collapse bg-white w-100 rounded-3 shadow-lg py-1"
        id="shop-sidebar"
        style={{ maxWidth: "22rem" }}
      >
        <div className="offcanvas-header align-items-center shadow-sm">
          <h2 className="h5 mb-0">Filters</h2>
          <button
            className="btn-close ms-auto"
            type="button"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body py-grid-gutter px-lg-grid-gutter">
          <SizeRefinementList attribute="product_type" />
          <CategoriesRefinementList attribute="vendor" />
          <CustomRangeSlider attribute="price" />
          <RatingsList attribute="rating" />
        </div>
      </div>
    </aside>
  );
}
