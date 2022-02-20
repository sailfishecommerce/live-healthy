import { findResultsState } from "react-instantsearch-dom/server";
import isEqual from "react-fast-compare";
import { Component } from "react";
import { withRouter } from "next/router";
import qs from "qs";

import searchClient from "@/lib/algoliaConfig";
import Applayout from "@/layout/Applayout";
import MarketplaceTemp from "@/components/MarketplaceTemp";
import styles from "@/styles/shop.module.css";

const updateAfter = 700;

const pathToSearchState = (path) =>
  path.includes("?") ? qs.parse(path.substring(path.indexOf("?") + 1)) : {};

const searchStateToURL = (searchState) =>
  searchState ? `${window.location.pathname}?${qs.stringify(searchState)}` : "";

const DEFAULT_PROPS = {
  searchClient,
  indexName: "New_Livehealthy_products_index",
};

const createURL = (state) => {
  const isDefaultRoute =
    !state.query &&
    state.page === 1 &&
    state.refinementList &&
    state.refinementList.vendor?.length === 0 &&
    state.menu &&
    !state.menu?.categories;

  if (isDefaultRoute) {
    return "";
  }

  const categoryPath = state.menu?.categories
    ? `${getCategorySlug(state.menu?.categories)}/`
    : "";
  const queryParameters = {};

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

  const queryString = qs.stringify(queryParameters, {
    addQueryPrefix: true,
    arrayFormat: "repeat",
  });

  return `/search/${categoryPath}${queryString}`;
};

class Shop extends Component {
  state = {
    searchState: this.props.searchState,
    lastRouter: this.props.router,
  };

  static async getInitialProps({ asPath }) {
    const searchState = pathToSearchState(asPath);
    console.log("asPath", asPath, "searchState", searchState);
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
    console.log("searchState", searchState);
    console.log("this?.state?.searchState", this.state);
    clearTimeout(this.debouncedSetState);

    const searchStateValue = {
      searchState: {
        ...searchState,
        ...this.state.searchState,
      },
    };

    console.log("searchStateValuesearchStateValue", searchStateValue);

    this.debouncedSetState = setTimeout(() => {
      const href = searchStateToURL(searchState);

      this.props.router.push(href, href, {
        shallow: true,
      });
    }, updateAfter);

    this.setState({ searchState });
  };
  render() {
    console.log("this.state", this.state);

    return (
      <Applayout
        title="Shop for quality imported products from Australia. Choose from over 10,000 genuine health, personal care, confectionery, beauty and baby care products. Get vitamins, health and food supplements, cosmetics, confectionery, quit smoking aids, hair colours, baby food and much more. Owned & operated by HK'ers"
        local
      >
        <div className={styles.shop}>
          <MarketplaceTemp
            {...DEFAULT_PROPS}
            searchState={this.props.searchState}
            resultsState={this.props.resultsState}
            onSearchStateChange={this.onSearchStateChange}
            createURL={createURL}
          />
        </div>
      </Applayout>
    );
  }
}

export default withRouter(Shop);
