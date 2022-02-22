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

const encodedCategories = {
  Cameras: "Cameras & Camcorders",
  Cars: "Car Electronics & GPS",
  Phones: "Cell Phones",
  TV: "TV & Home Theater",
};

const decodedCategories = Object.keys(encodedCategories).reduce((acc, key) => {
  const newKey = encodedCategories[key];
  const newValue = key;

  return {
    ...acc,
    [newKey]: newValue,
  };
}, {});

function getCategorySlug(name) {
  const encodedName = decodedCategories[name] || name;

  return encodedName.split(" ").map(encodeURIComponent).join("+");
}

// Returns a name from the category slug.
// The "+" are replaced by spaces and other
// characters are decoded.
function getCategoryName(slug) {
  const decodedSlug = encodedCategories[slug] || slug;

  return decodedSlug.split("+").map(decodeURIComponent).join(" ");
}

const createURL = (state) => {
  console.log("createURL-state", state);
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

  const categoryPath = state.menu.categories
    ? `${getCategorySlug(state.menu.categories)}/`
    : "";
  const queryParameters = {};

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

  return `/shop/demo?search/${categoryPath}${queryString}`;
};

const searchStateToUrl = (searchState) => {
  console.log("searchState", searchState);
  return searchState ? createURL(searchState) : "";
};

const urlToSearchState = (location) => {
  const pathnameMatches = location.match(/search\/(.*?)\/?$/);
  const categoryPath = pathnameMatches ? pathnameMatches[0].split("/")[1] : "";
  const category = getCategoryName(categoryPath);
  console.log("category", category);

  const queryValue = location ? location.split("/?")[1] : "";
  console.log("queryValue", queryValue);

  const { query = "", page = 1, brands = [] } = qs.parse(queryValue);
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

const App = () => {
  const router = useRouter();
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
