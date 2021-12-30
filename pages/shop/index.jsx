import { Component } from "react";
import isEqual from "lodash.isequal";
import { withRouter } from "next/router";
import qs from "qs";
import { findResultsState } from "react-instantsearch-dom/server";

import searchClient from "@/lib/algoliaConfig";
import Applayout from "@/layout/Applayout";
import MarketplaceTemp from "../../components/MarketplaceTemp";

const updateAfter = 700;

// const createURL = (state) => `?${qs.stringify(state)}`;

const pathToSearchState = (path) =>
  path.includes("?") ? qs.parse(path.substring(path.indexOf("?") + 1)) : {};

// const searchStateToURL = (searchState) =>
//   searchState ? `${window.location.pathname}?${qs.stringify(searchState)}` : "";

const DEFAULT_PROPS = {
  searchClient,
  indexName: "New_Livehealthy_products_index",
};

const createURL = (state) => {
  console.log("state", state);
  const isDefaultRoute =
    !state.query &&
    state.page === 1 &&
    state.refinementList &&
    state.refinementList?.vendor?.length === 0 &&
    state?.menu &&
    !state?.menu?.product_type;

  if (isDefaultRoute) {
    return "";
  }

  const categoryPath = state?.menu?.product_type
    ? `/${getCategorySlug(state?.menu?.product_type)}/`
    : "";
  const queryParameters = {};

  if (state.query) {
    queryParameters.query = encodeURIComponent(state.query);
  }
  if (state.page !== 1) {
    queryParameters.page = state.page;
  }
  if (state.refinementList?.vendor) {
    queryParameters.vendor =
      state.refinementList?.vendor?.map(encodeURIComponent);
  }
  if (state.refinementList?.tags) {
    queryParameters.tags = state.refinementList?.tags.map(encodeURIComponent);
  }

  const queryString = qs.stringify(queryParameters, {
    addQueryPrefix: true,
    arrayFormat: "repeat",
  });

  return `/shop/${categoryPath}${queryString}`;
};

const searchStateToURL = (searchState) =>
  searchState ? createURL(searchState) : "";

function getCategorySlug(name) {
  return name.split(" ").map(encodeURIComponent).join("-");
}

function getCategoryName(slug) {
  return slug.split("-").map(decodeURIComponent).join(" ");
}

const urlToSearchState = (location) => {
  console.log("location", location);
  const pathnameMatches = location.pathname?.match(/shop\/(.*?)\/?$/);
  const category = getCategoryName(
    (pathnameMatches && pathnameMatches[1]) || ""
  );
  const {
    query = "",
    page = 1,
    vendors = [],
    tags = [],
  } = qs.parse(location?.search?.slice(1));
  // `qs` does not return an array when there's a single value.
  const allVendors = Array.isArray(vendors)
    ? vendors
    : [vendors].filter(Boolean);
  const allTags = Array.isArray(tags) ? tags : [tags].filter(Boolean);
  console.log("allVendors", allVendors, "allTags", allTags);
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

class Shop extends Component {
  state = {
    searchState: urlToSearchState(this.props.searchState),
    lastRouter: this.props.router,
  };

  static async getInitialProps({ asPath }) {
    const searchState = pathToSearchState(asPath);
    const resultsState = await findResultsState(MarketplaceTemp, {
      ...DEFAULT_PROPS,
      searchState,
    });

    return {
      resultsState,
      searchState,
    };
  }

  static getDerivedStateFromProps(props, state) {
    if (!isEqual(state.lastRouter, props.router)) {
      return {
        searchState: pathToSearchState(props.router.asPath),
        lastRouter: props.router,
      };
    }

    return null;
  }

  onSearchStateChange = (searchState) => {
    clearTimeout(this.debouncedSetState);

    this.debouncedSetState = setTimeout(() => {
      const href = searchStateToURL(searchState);

      this.props.router.push(href, href, {
        shallow: true,
      });
    }, updateAfter);

    this.setState({ searchState });
  };

  render() {
    return (
      <Applayout title="Shop for quality imported products from Australia. Choose from over 10,000 genuine health, personal care, confectionery, beauty and baby care products. Get vitamins, health and food supplements, cosmetics, confectionery, quit smoking aids, hair colours, baby food and much more. Owned & operated by HK'ers">
        <MarketplaceTemp
          {...DEFAULT_PROPS}
          searchState={this.state.searchState}
          resultsState={this.props.resultsState}
          onSearchStateChange={this.onSearchStateChange}
          createURL={createURL}
        />
      </Applayout>
    );
  }
}

export default withRouter(Shop);
