import algoliasearch from "algoliasearch";
import { InstantSearch } from "react-instantsearch-dom";
import { PropsWithChildren } from "react";

import useAlgoliaClient from "@/hooks/useAlgoliaClient";

export default function AlgoliaInstantSearch({
  children,
}: PropsWithChildren<{}>) {
  const { getAlgoliaClient } = useAlgoliaClient();
  const algoliasearchClient = getAlgoliaClient();

  return (
    <InstantSearch
      indexName="New_Livehealthy_products_index"
      searchClient={algoliasearchClient}
    >
      {children}
    </InstantSearch>
  );
}

export function AlgoliaView({ children }: PropsWithChildren<{}>) {
  const searchClient = algoliasearch(
    `${process.env.NEXT_PUBLIC_ALGOLIA_APPLICATION_ID}`,
    `${process.env.NEXT_PUBLIC_ALGOLIA_SEARCH_API_KEY}`
  );

  return (
    <InstantSearch
      indexName="New_Livehealthy_products_index"
      searchClient={searchClient}
    >
      {children}
    </InstantSearch>
  );
}
