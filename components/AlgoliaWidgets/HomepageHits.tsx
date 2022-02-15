import { Configure } from "react-instantsearch-dom";

import { HitProduct } from "@/components/ProductHit";
import { AlgoliaView } from "../AlgoliaInstantSearch";

export default function HomepageHits() {
  return (
    <AlgoliaView>
      <Configure
        hitsPerPage={6}
        clickAnalytics
        distinct
        enablePersonalization={true}
      />
      <section className="container pt-md-3 pb-0 mb-md-3 w-100">
        <h3 className="text-center mb-2">Trending Products</h3>
        <HitProduct />
      </section>
    </AlgoliaView>
  );
}
