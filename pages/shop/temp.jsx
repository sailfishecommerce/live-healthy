import isEqual from "react-fast-compare";
import React from "react";
import PropTypes from "prop-types";
import { withRouter } from "next/router";
import qs from "qs";
import { findResultsState } from "react-instantsearch-dom/server";
import SearchTest from "@/components/searchTest";
import searchClient from "@/lib/algoliaConfig";

const updateAfter = 700;

const createURL = (state) => {
  const isDefaultRoute =
    !state.query &&
    state.page === 1 &&
    state.refinementList &&
    state.refinementList.product_type.length === 0 &&
    state.menu &&
    !state.menu?.categories;

  if (isDefaultRoute) {
    return "";
  }

  const queryParameters = {};

  if (state.query) {
    queryParameters.query = encodeURIComponent(state.query);
  }

  if (state.page !== 1) {
    queryParameters.page = state.page;
  }

  if (state.refinementList.product_type) {
    queryParameters.product_types =
      state.refinementList.product_type.map(encodeURIComponent);
  }

  const queryString = qs.stringify(queryParameters, {
    addQueryPrefix: true,
    arrayFormat: "repeat",
  });

  console.log("state", state);
  return `${queryString}`;
};

const pathToSearchState = (path) =>
  path.includes("?") ? qs.parse(path.substring(path.indexOf("?") + 1)) : {};

const searchStateToURL = (searchState) =>
  searchState ? createURL(searchState) : "";

const DEFAULT_PROPS = {
  searchClient,
  indexName: "New_Livehealthy_products_index",
};

const urlToSearchState = (location) => {
  console.log("location", location);

  const locationString =
    Object.keys(location).length >= 1 ? `query=${location.query}` : "";
  const { query = "", page = 1, product_types = [] } = qs.parse(locationString);
  // `qs` does not return an array when there's a single value.
  const allProductTypes = Array.isArray(product_types)
    ? product_types
    : [product_types].filter(Boolean);

  console.log("allProductTypes", allProductTypes);

  return {
    query: decodeURIComponent(query),
    page,
    refinementList: {
      product_typproduct_typee: allProductTypes.map(decodeURIComponent),
    },
  };
};

class TempPage extends React.Component {
  static propTypes = {
    router: PropTypes.object.isRequired,
    resultsState: PropTypes.object,
    searchState: PropTypes.object,
  };

  state = {
    searchState: urlToSearchState(this.props.searchState),
    lastRouter: searchStateToURL(this.props.router),
  };

  static async getInitialProps({ asPath }) {
    const searchState = pathToSearchState(asPath);
    const resultsState = await findResultsState(SearchTest, {
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

      this.props.router.push(href, href);
    }, updateAfter);

    this.setState({ searchState });
  };

  render() {
    console.log("this.props.searchState", this.props.searchState);
    console.log("this.props.router", this.props.router);

    return (
      <div>
        <SearchTest
          {...DEFAULT_PROPS}
          searchState={this.state.searchState}
          resultsState={this.props.resultsState}
          onSearchStateChange={this.onSearchStateChange}
          createURL={createURL}
        />
      </div>
    );
  }
}

export default withRouter(TempPage);
