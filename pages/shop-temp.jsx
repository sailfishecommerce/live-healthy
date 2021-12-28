import { Component } from "react";
import isEqual from "lodash.isequal";
import { withRouter } from "next/router";
import qs from "qs";
import { findResultsState } from "react-instantsearch-dom/server";

import searchClient from "@/lib/algoliaConfig";
import Applayout from "@/layout/Applayout";
import MarketplaceTemp from "../components/MarketplaceTemp";

const updateAfter = 700;

// const createURL = (state) => `?${qs.stringify(state)}`;

const pathToSearchState = (path) =>
  path.includes("?") ? qs.parse(path.substring(path.indexOf("?") + 1)) : {};

function getCategorySlug(name) {
  return name.split(" ").map(encodeURIComponent).join("+");
}

function getCategoryName(slug) {
  return slug.split("+").map(decodeURIComponent).join(" ");
}

const createURL = (state) => {
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

  return `/search/${categoryPath}${queryString}`;
};

// const searchStateToURL = (searchState) =>
//   searchState ? `${window.location.pathname}?${qs.stringify(searchState)}` : "";

const searchStateToURL = (searchState) =>
  searchState ? createURL(searchState) : "";

const urlToSearchState = (location) => {
  const pathnameMatches = location.pathname.match(/search\/(.*?)\/?$/);
  const category = getCategoryName(
    (pathnameMatches && pathnameMatches[1]) || ""
  );
  const {
    query = "",
    page = 1,
    brands = [],
  } = qs.parse(location.search.slice(1));
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

const DEFAULT_PROPS = {
  searchClient,
  indexName: "New_Livehealthy_products_index",
};

class Page extends Component {
  state = {
    searchState: this.props.searchState,
    lastRouter: this.props.router,
  };

  static async getInitialProps({ asPath }) {
    console.log("asPath getInitialProps", asPath);
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
      <Applayout title="Shop for gloves, medic supplies, mask and respirators ...">
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

export default withRouter(Page);
