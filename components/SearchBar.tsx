import {
  SearchBox,
  Hits,
  InstantSearch,
  Configure,
} from "react-instantsearch-dom";
import { useRef, useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";

import { HitComponentWithInsight } from "./AlgoliaComponent";
import searchClient from "@/lib/algoliaConfig";
import useMediaQuery from "@/hooks/useMediaQuery";
import useVbout from "@/hooks/useVbout";
import { useAppSelector } from "@/hooks/useRedux";

type paramsType = {
  params: {
    query: string;
  };
};

export default function SearchBar() {
  const [querylength, setQueryLength] = useState();
  const inputRef = useRef(null);
  const { userDetail }: any = useAppSelector((state) => state.auth);
  const tabWidth = useMediaQuery("(max-width:768px)");
  const { addProductSearch } = useVbout();

  const inputClassName = !tabWidth
    ? "input-group d-none d-lg-flex mx-4"
    : "mobileInput w-100 my-0";

  const inputContainerClassName = !tabWidth ? "search-box w-50" : "my-3";

  useEffect(() => {
    const searchInputRef: any = inputRef.current;
    searchInputRef.className = "form-control rounded-end pe-5";
  }, []);

  const algoliasearchClient = {
    ...searchClient,
    search(requests: any) {
      const reqlength = requests[0].params?.query.length;
      setQueryLength(reqlength);
      const searchContent = {
        id: uuidv4(),
        email: userDetail?.email ? userDetail?.email : "",
        query: requests[0]?.params?.query,
      };
      reqlength > 0 && addProductSearch(searchContent);
      if (requests.every(({ params }: paramsType): boolean => !params.query)) {
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
      indexName="docsupplies_products"
      searchClient={algoliasearchClient}
    >
      <Configure clickAnalytics />
      <div className={inputContainerClassName}>
        <SearchBox
          translations={{
            placeholder: "Search for products...",
          }}
          autoFocus
          showLoadingIndicator
          inputRef={inputRef}
          className={inputClassName}
        />
        {querylength !== 0 && (
          <div className="results shadow-lg">
            <Hits hitComponent={HitComponentWithInsight} />
          </div>
        )}
      </div>
      <style jsx>
        {`
          .navbar-tool:hover .logout {
            color: red;
          }
          .results {
            position: absolute;
            z-index: 100;
            background-color: white;
            left: 25px;
            padding: 10px;
            width: 100%;
          }
          .search-box {
            position: relative;
          }
          @media (max-width: 768px) {
            .results {
              z-index: 1000;
              left: 5%;
              top: 24%;
              padding: 0px;
              width: 90%;
            }
          }
        `}
      </style>
    </InstantSearch>
  );
}
