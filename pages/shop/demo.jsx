import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";
import qs from "qs";

import Applayout from "@/layout/Applayout";
import ShopView from "@/components/ShopView";
import searchClient from "@/lib/algoliaConfig";

const DEBOUNCE_TIME = 700;

const DEFAULT_PROPS = {
  searchClient,
  indexName: "New_Livehealthy_products_index",
};

const createURL = (state) => {
  const isDefaultRoute =
    !state.query &&
    state.page === 1 &&
    state.refinementList &&
    state.refinementList.vendor.length === 0 &&
    state.refinementList.tags.length === 0 &&
    state.menu &&
    !state.menu.product_type;

  if (isDefaultRoute) {
    return "";
  }

  const categoryPath = state.menu.product_type
    ? `${encodeURIComponent(state.menu.product_type)}/`
    : "";
  const queryParameters = {};

  if (state.query) {
    queryParameters.query = encodeURIComponent(state.query);
  }
  if (state.page !== 1) {
    queryParameters.page = state.page;
  }
  if (state.refinementList.vendor) {
    queryParameters.vendor =
      state.refinementList.vendor.map(encodeURIComponent);
  }
  if (state.refinementList.tags) {
    queryParameters.tags = state.refinementList.tags.map(encodeURIComponent);
  }

  const queryString = qs.stringify(queryParameters, {
    addQueryPrefix: true,
    arrayFormat: "repeat",
  });

  return `/shop/demo?search/${categoryPath}${queryString}`;
};

const searchStateToUrl = (searchState) => {
  console.log("searchState", searchState);
  return searchState ? createURL(searchState) : "";
};

const urlToSearchState = (location) => {
  const pathnameMatches = location.match(/product_type\/(.*?)\/?$/);
  const categoryPath = pathnameMatches ? pathnameMatches[0].split("/")[1] : "";
  const category = decodeURIComponent(categoryPath);
  console.log("category", category);

  console.log("location", location);

  const queryValue = location ? location.split("/?")[1] : "";
  console.log("queryValue", queryValue);

  const { query = "", page = 1, vendor = [], tags = [] } = qs.parse(queryValue);
  console.log("qs.parse(queryValue)", qs.parse(queryValue));
  // location.search.slice(1));
  // `qs` does not return an array when there's a single value.
  const allVendors = Array.isArray(vendor) ? vendor : [vendor].filter(Boolean);
  const allTags = Array.isArray(tags) ? tags : [tags].filter(Boolean);

  return {
    query: decodeURIComponent(query),
    page,
    menu: {
      product_type: decodeURIComponent(category),
    },
    refinementList: {
      vendor: allVendors.map(decodeURIComponent),
      tags: allTags.map(decodeURIComponent),
    },
  };
};

const App = () => {
  const router = useRouter();
  console.log("router", router);
  const { asPath } = router;
  const [searchState, setSearchState] = useState(urlToSearchState(asPath));
  const debouncedSetStateRef = useRef(null);
  const onSearchStateChange = (updatedSearchState) => {
    clearTimeout(debouncedSetStateRef.current);
    const href = searchStateToUrl(updatedSearchState);
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
    <Applayout
      title="Shop for quality imported products from Australia. Choose from over 10,000 genuine health, personal care, confectionery, beauty and baby care products. Get vitamins, health and food supplements, cosmetics, confectionery, quit smoking aids, hair colours, baby food and much more. Owned & operated by HK'ers"
      local
    >
      <ShopView
        {...DEFAULT_PROPS}
        searchClient={searchClient}
        indexName="New_Livehealthy_products_index"
        searchState={searchState}
        onSearchStateChange={onSearchStateChange}
        createURL={createURL}
      />
    </Applayout>
  );
};

export default App;
