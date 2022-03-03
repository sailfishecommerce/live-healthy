import { CustomRangeSlider } from "./AlgoliaPriceRange";
import { RatingsList } from "./RatingsRefinementList";
import CustomRefinementList from "@/components/CustomRefinementList";

interface props {
  vendor: string;
}

export default function VendorCategories({ vendor }: props) {
  return (
    <aside className="col-lg-3">
      <div
        className="vendorCategoryCanvas offcanvas offcanvas-collapse bg-white w-100 rounded-3 shadow-lg py-1"
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
        <div className="offcanvas-body py-grid-gutter px-lg-grid-gutter">
          <CustomRefinementList
            attribute="vendor"
            title="Vendor"
            defaultRefinement={[vendor]}
          />
          <CustomRefinementList attribute="tags" title="Tags" />
          <CustomRangeSlider attribute="price" />
          <RatingsList attribute="rating" />
        </div>
      </div>
      <style jsx>
        {`
          .vendorCategoryCanvas {
            max-width: 22rem;
          }
        `}
      </style>
    </aside>
  );
}
