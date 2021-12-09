import { Highlight, connectRefinementList } from "react-instantsearch-dom";

export function CategoryList({
  items,
  isFromSearch,
  refine,
  searchForItems,
  createURL,
  title,
}: any) {
  function searchItems(e: any) {
    searchForItems(e.currentTarget.value);
  }
  function refineSearch(item: any) {
    refine(item.value);
  }
  return (
    <div className="widget widget-categories mb-4 pb-4 border-bottom">
      <h3 className="widget-title">Categories</h3>
      <div className="input-group input-group-sm mb-2">
        <input
          className="widget-filter-search form-control rounded-end"
          type="text"
          onChange={searchItems}
          placeholder="Search"
        />
        <i className="ci-search position-absolute top-50 end-0 translate-middle-y fs-sm me-3"></i>
      </div>
      <div className="accordion mt-n1" id="shop-categories">
        {items.map((item: { label: string; count: number }) => (
          <div key={item.label} className="accordion-item">
            <h3 className="text-sm">
              <a onClick={() => refineSearch(item)} className="cat-link">
                {isFromSearch ? (
                  <Highlight attribute="label" hit={item} />
                ) : (
                  <>
                    {item.label}
                    <span className="mx-2 badge bg-danger">{item.count}</span>
                  </>
                )}
              </a>
            </h3>
          </div>
        ))}
      </div>
      <style jsx>
        {`
          a.cat-link {
            font-size: 0.9375rem;
            color: #4b566b;
            font-weight: normal;
          }
          a:hover {
            color: #fe696a;
          }
          a.badge {
            font-size: 0.75rem;
            font-weight: normal;
            color: white;
          }
        `}
      </style>
    </div>
  );
}

export const CategoriesRefinementList = connectRefinementList(CategoryList);
