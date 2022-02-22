import { useRouter } from "next/router";
import { InstantSearch } from "react-instantsearch-dom";
import qs from "qs";
import { useEffect, useRef, useState, PropsWithChildren } from "react";

import searchClient from "@/lib/algoliaConfig";
import { useAppDispatch } from "@/redux/store";
import { updateQuery } from "@/redux/algolia-slice";

const DEBOUNCE_TIME = 700;

const DEFAULT_PROPS = {
  searchClient,
  indexName: "New_Livehealthy_products_index",
};

const createURL = (state: any, route: string) => {
  const isDefaultRoute =
    !state.query &&
    state.page === 1 &&
    state.refinementList &&
    state.refinementList.brand.length === 0 &&
    state.menu &&
    !state.menu.categories;

  if (isDefaultRoute) {
    return "";
  }

  const categoryPath = state.menu.categories ? `${state.menu.categories}/` : "";
  const queryParameters: any = {};

  if (state.query) {
    queryParameters.query = encodeURIComponent(state.query);
  }
  if (state.page !== 1) {
    queryParameters.page = state.page;
  }
  if (state.refinementList.brand) {
    queryParameters.brands = state.refinementList.brand.map(encodeURIComponent);
  }

  const queryString = qs.stringify(queryParameters, {
    addQueryPrefix: true,
    arrayFormat: "repeat",
  });

  return `/${route}?search/${categoryPath}${queryString}`;
};

const searchStateToUrl = (searchState: any, route: string) => {
  console.log("searchState", searchState);
  return searchState ? createURL(searchState, route) : "";
};

const urlToSearchState = (location: any) => {
  const pathnameMatches = location.match(/search\/(.*?)\/?$/);
  const category = pathnameMatches ? pathnameMatches[0].split("/")[1] : "";
  console.log("category", category);

  const queryValue = location ? location.split("/?")[1] : "";
  console.log("queryValue", queryValue);

  const { query = "", page = 1, brands = [] }: any = qs.parse(queryValue);
  console.log("qs.parse(queryValue)", qs.parse(queryValue));
  // location.search.slice(1));
  // `qs` does not return an array when there's a single value.
  const allBrands = Array.isArray(brands) ? brands : [brands].filter(Boolean);

  return {
    query: decodeURIComponent(query),
    page,
    menu: {
      categories: decodeURIComponent(category),
    },
    refinementList: {
      brand: allBrands.map(decodeURIComponent),
    },
  };
};

export default function NewAlgoliaInstantSearch({
  children,
}: PropsWithChildren<{}>) {
  const dispatch = useAppDispatch();

  const algoliasearchClient = {
    ...searchClient,
    search(requests: any) {
      if (requests.every(({ params }: any) => !params.query.length)) {
        dispatch(updateQuery(requests[0].params?.query));

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

  const router = useRouter();
  const { asPath, pathname } = router;
  const [searchState, setSearchState] = useState<any>(urlToSearchState(asPath));
  const debouncedSetStateRef: any = useRef(null);
  const onSearchStateChange = (updatedSearchState: string) => {
    clearTimeout(debouncedSetStateRef.current);
    const href = searchStateToUrl(updatedSearchState, pathname);
    console.log("href", href);
    debouncedSetStateRef.current = setTimeout(() => {
      router.push(href, href, {
        shallow: true,
      });
    }, DEBOUNCE_TIME);

    setSearchState(updatedSearchState);
  };

  useEffect(() => {
    setSearchState(urlToSearchState(asPath));
  }, [asPath]);

  return (
    <InstantSearch
      {...DEFAULT_PROPS}
      indexName="New_Livehealthy_products_index"
      searchClient={algoliasearchClient}
      searchState={searchState}
      onSearchStateChange={onSearchStateChange}
      createURL={createURL}
    >
      {children}
    </InstantSearch>
  );
}
