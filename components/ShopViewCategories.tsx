import { CustomRangeSlider } from "./AlgoliaPriceRange";
import CustomRefinementList from "@/components/CustomRefinementList";
import CustomMenu from "@/components/CustomMenu";
import { RatingsList } from "./RatingsRefinementList";

export default function ShopViewCategories() {
  return (
    <aside className="col-lg-3">
      <div
        className="ShopViewCategories categoryCanvas offcanvas offcanvas-collapse bg-white w-100 rounded-3 shadow-lg py-1"
        id="shop-sidebar"
      >
        <div className="offcanvas-header align-items-center shadow-sm">
          <h2 className="h5 mb-0">Filters</h2>
          <button
            className="btn-close ms-auto"
            type="button"
            data-bs-dismiss="offcanvas"
            aria-label="close"
          ></button>
        </div>
        <div className="refinementList offcanvas-body py-grid-gutter px-lg-grid-gutter">
          <CustomMenu attribute="product_type" title="Product Type" />
          <CustomRefinementList attribute="vendor" title="Vendors" />
          <CustomRefinementList attribute="tags" title="Tags" />
          <CustomRangeSlider attribute="price" />
          <RatingsList attribute="rating" />
        </div>
      </div>
      <style jsx>
        {`
          .categoryCanvas {
            max-width: 22rem;
          }
        `}
      </style>
    </aside>
  );
}
