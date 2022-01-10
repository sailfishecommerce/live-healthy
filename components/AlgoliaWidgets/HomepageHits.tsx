import { Configure, InstantSearch } from "react-instantsearch-dom";
import searchClient from "@/lib/algoliaConfig";

import { HitProduct } from "@/components/ProductHit";

export default function HomepageHits() {
  return (
    <InstantSearch
      indexName="New_Livehealthy_products_index"
      searchClient={searchClient}
    >
      <Configure
        hitsPerPage={9}
        clickAnalytics
        distinct
        enablePersonalization={true}
      />
      <section className="container pt-md-3 pb-0 mb-md-3 w-100">
        <div className="text-center">Trending Products</div>
        <HitProduct />
      </section>
    </InstantSearch>
  );
}
