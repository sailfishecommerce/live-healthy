import { useRouter } from "next/router";
import { InstantSearch } from "react-instantsearch-dom";
import qs from "qs";
import { useEffect, useRef, useState, PropsWithChildren } from "react";

import searchClient from "@/lib/algoliaConfig";
import { useAppDispatch } from "@/redux/store";
import { updateQuery } from "@/redux/algolia-slice";

const DEBOUNCE_TIME = 700;

const createURL = (state: any, route: string) => {
  const isDefaultRoute =
    !state.query &&
    state.page === 1 &&
    state.refinementList &&
    state.refinementList.vendors.length === 0 &&
    state.refinementList.tags.length === 0 &&
    state.menu &&
    !state.menu.product_type;

  if (isDefaultRoute) {
    return "";
  }

  const categoryPath = state.menu.product_type
    ? `${encodeURIComponent(state.menu.product_type)}/`
    : "";
  const queryParameters: any = {};

  if (state.query) {
    queryParameters.query = encodeURIComponent(state.query);
  }
  if (state.page !== 1) {
    queryParameters.page = state.page;
  }
  if (state.refinementList.vendor) {
    queryParameters.vendors =
      state.refinementList.vendor.map(encodeURIComponent);
  }
  if (state.refinementList.tags) {
    queryParameters.tags = state.refinementList.tags.map(encodeURIComponent);
  }

  const queryString = qs.stringify(queryParameters, {
    addQueryPrefix: true,
    arrayFormat: "repeat",
  });

  return `/${route}?search/${categoryPath}${queryString}`;
};

const searchStateToUrl = (searchState: any, route: string) => {
  return searchState ? createURL(searchState, route) : "";
};

const urlToSearchState = (location: any) => {
  const pathnameMatches = location.match(/search\/(.*?)\/?$/);
  const validPathName = pathnameMatches ? pathnameMatches[0].split("/")[1] : "";
  const validCategory =
    !validPathName.includes("page") &&
    !validPathName.includes("vendor") &&
    !validPathName.includes("tags")
      ? validPathName
      : "";
  const category = decodeURIComponent(validCategory);

  const queryValue = location ? location.split("/?")[1] : "";

  const {
    query = "",
    page,
    vendors = [],
    tags = [],
  }: any = qs.parse(queryValue);
  // location.search.slice(1));
  // `qs` does not return an array when there's a single value.
  const allVendors = Array.isArray(vendors)
    ? vendors
    : [vendors].filter(Boolean);
  const allTags = Array.isArray(tags) ? tags : [tags].filter(Boolean);

  return {
    query: decodeURIComponent(query),
    page,
    menu: {
      product_type: decodeURIComponent(category),
    },
    refinementList: {
      vendors: allVendors.map(decodeURIComponent),
      tags: allTags.map(decodeURIComponent),
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
    debouncedSetStateRef.current = setTimeout(() => {
      router.push(href, href, {
        shallow: true,
      });
    }, DEBOUNCE_TIME);

    setSearchState(updatedSearchState);
  };

  return (
    <InstantSearch
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
