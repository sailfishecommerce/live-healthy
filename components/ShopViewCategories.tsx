import { CustomRangeSlider } from "./AlgoliaPriceRange";
import AttributeRefinementList from "./AttributeRefinementList";
import { RatingsList } from "./RatingsRefinementList";
import MarketplaceCategoryMenu from "./MarketplaceCategoryMenu";

export default function ShopViewCategories() {
  return (
    <aside className="col-lg-3">
      <div
        className="categoryCanvas offcanvas offcanvas-collapse bg-white w-100 rounded-3 shadow-lg py-1"
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
          <MarketplaceCategoryMenu
            searchable={true}
            attribute="product_type"
            showMoreLimit={100}
            showMore={true}
          />
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
