import algoliasearch from "algoliasearch";
import { InstantSearch } from "react-instantsearch-dom";
import { PropsWithChildren } from "react";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

import searchClient from "@/lib/algoliaConfig";
import { useAppDispatch } from "@/redux/store";
import { updateQuery } from "@/redux/algolia-slice";
import { useAppSelector } from "@/hooks/useRedux";
import { addProductSearch } from "@/hooks/useVbout";

export default function AlgoliaInstantSearch({
  children,
}: PropsWithChildren<{}>) {
  const [querylength, setQueryLength] = useState(null);
  const dispatch = useAppDispatch();
  const { userDetail }: any = useAppSelector((state) => state.auth);

  console.log("querylength", querylength);

  const algoliasearchClient = {
    ...searchClient,
    search(requests: any) {
      if (requests.every(({ params }: any) => !params.query)) {
        const reqlength = requests[0].params?.query.length;
        console.log("reqlength", reqlength);
        setQueryLength(reqlength);
        dispatch(updateQuery(requests[0].params?.query));
        const searchContent = {
          id: uuidv4(),
          email: userDetail?.email ? userDetail?.email : "",
          query: requests[0]?.params?.query,
        };
        reqlength > 0 && addProductSearch(searchContent);

        return Promise.resolve({
          results: requests.map(() => ({
            hits: [],
            nbHits: 0,
            nbPages: 0,
            page: 0,
            processingTimeMS: 0,
          })),
        });
      }
      return searchClient.search(requests);
    },
  };

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
