import { RefinementList, Menu } from "react-instantsearch-dom";
import { CustomRangeSlider } from "./AlgoliaPriceRange";
import AttributeRefinementList from "./AttributeRefinementList";
import { TagsRefinementList } from "./TagsRefinementList";
import { SingleVendorRefinementList } from "./SingleVendorRefinementList";
import { RatingsList } from "./RatingsRefinementList";
import MarketplaceCategoryMenu from "./MarketplaceCategoryMenu";

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
          <h3>Product Type</h3>
          <Menu
            searchable={true}
            attribute="product_type"
            showMoreLimit={100}
          />
          <h5>Vendors </h5>
          <RefinementList
            searchable={true}
            attribute="vendor"
            showMoreLimit={100}
            showMore={true}
          />
          {/* 
          <AttributeRefinementList
            showMoreLimit={100}
            showMore={true}
            searchable={true}
            attribute="vendor"
            title="Vendor"
          />
           <AttributeRefinementList
             showMoreLimit={100}
            showMore={true}
            searchable={true}
            attribute="tags"
            title="Tags"
          />
           */}
          <h5>Tags </h5>
          <RefinementList
            searchable={true}
            attribute="tags"
            showMoreLimit={100}
            showMore={true}
          />
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
