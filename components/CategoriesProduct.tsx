import { memo } from "react";
import {
  Configure,
  connectRefinementList,
} from "react-instantsearch-dom";

import { HitProduct } from "@/components/ProductHit";
import AlgoliaInstantSearch from "./AlgoliaInstantSearch";

interface Props {
  category: string;
}

function CategoryRefinement() {
  return null;
}

const RefinedCategory = connectRefinementList(CategoryRefinement);

function CategoryProducts({ category }: Props) {
  return (
    <section className="container pt-md-3 pb-0 mb-md-3 w-100">
      <h2 className="h3 text-start">{category} products</h2>
      <AlgoliaInstantSearch>
        <Configure
          hitsPerPage={3}
          clickAnalytics
          distinct
          enablePersonalization={true}
        />
        <RefinedCategory
          defaultRefinement={[category]}
          attribute="product_type"
        />
        <HitProduct />
      </AlgoliaInstantSearch>
      <style jsx>
        {`
          section.container h2 {
            font-size: 20px;
          }
        `}
      </style>
    </section>
  );
}
export const CategoriesProducts = memo(CategoryProducts);
