import { Component } from "react";
import isEqual from "lodash.isequal";
import { withRouter } from "next/router";
import qs from "qs";
import { findResultsState } from "react-instantsearch-dom/server";

import searchClient from "@/lib/algoliaConfig";
import Applayout from "@/layout/Applayout";
import MarketplaceTemp from "../../components/MarketplaceTemp";

const updateAfter = 700;

const createURL = (state) => `?${qs.stringify(state)}`;

const pathToSearchState = (path) =>
  path.includes("?") ? qs.parse(path.substring(path.indexOf("?") + 1)) : {};

const searchStateToURL = (searchState) =>
  searchState ? `${window.location.pathname}?${qs.stringify(searchState)}` : "";

const DEFAULT_PROPS = {
  searchClient,
  indexName: "New_Livehealthy_products_index",
};

class Shop extends Component {
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

export default withRouter(Shop);
