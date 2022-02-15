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
