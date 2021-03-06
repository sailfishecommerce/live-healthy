import { SearchBox } from "react-instantsearch-dom";
import { Configure } from "react-instantsearch-dom";
import dynamic from "next/dynamic";
import { useRef, useEffect, useState, memo } from "react";

import useMediaQuery from "@/hooks/useMediaQuery";
import NewAlgoliaInstantSearch from "./NewAlgoliaInstantSearch";

import { useAppDispatch } from "@/hooks/useRedux";
import { updateQuery } from "@/redux/algolia-slice";

const SearchbarHits = dynamic((): any => import("@/components/Searchbarhits"));

function SearchBarComponent() {
  const [searching, setSearching] = useState(false);
  const inputRef: any = useRef(null);
  const dispatch = useAppDispatch();
  const tabWidth = useMediaQuery("(max-width:768px)");

  const inputClassName = !tabWidth
    ? "input-group d-none d-lg-flex mx-4"
    : "mobileInput w-100 my-0";

  const inputContainerClassName = !tabWidth ? "search-box w-100" : "my-3";

  useEffect(() => {
    const searchInputRef: any = inputRef.current;
    searchInputRef.className = "form-control rounded-end pe-5";
  }, []);

  function showSearchResult(e: any) {
    if (e.currentTarget.value?.length <= 1) {
      setSearching(true);
    }
    dispatch(updateQuery(e.target.value));
    e.currentTarget.value?.length === 0 && setSearching(false);
  }

  return (
    <>
      <NewAlgoliaInstantSearch>
        <Configure clickAnalytics distinct enablePersonalization />
        <div className="searchBox">
          <div className={inputContainerClassName}>
            <SearchBox
              translations={{
                placeholder: "Search for products...",
              }}
              autoFocus={false}
              showLoadingIndicator
              onChange={showSearchResult}
              inputRef={inputRef}
              className={inputClassName}
            />
          </div>
          {searching && <SearchbarHits />}
        </div>
      </NewAlgoliaInstantSearch>
      <style jsx>
        {`
          .searchBox {
            display: flex;
            flex-direction: column;
            width: 55%;
          }
          .navbar-tool:hover .logout {
            color: red;
          }
          .results {
            position: absolute;
            z-index: 100;
            background-color: white;
            left: 10%;
            padding: 10px;
            width: 75%;
            height: 400px;
            overflow: auto;
            margin-top: 5%;
            border-radius: 0;
            padding: 16px;
            padding-top: 19px;
            box-shadow: 0px 8px 16px 0px #33333329;
          }
          .results h6 {
            line-height: 1;
            text-transform: uppercase;
            border-bottom: 1px solid #333;
            font-weight: 500;
            color: #333;
            font-size: 14px;
            letter-spacing: 0;
            margin: 0 8px 0;
            padding-bottom: 7px;
            margin-bottom: 4px;
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
            .searchBox {
              width: 100%;
            }
          }
        `}
      </style>
    </>
  );
}

const SearchBar = memo(SearchBarComponent);

export default SearchBar;
