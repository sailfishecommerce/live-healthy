/* eslint-disable react-hooks/exhaustive-deps */
import { Highlight } from "react-instantsearch-dom";
import Link from "next/link";
import { hitType } from "@/types";
import { useAppSelector } from "@/hooks/useRedux";
import { useRouter } from "next/router";

import useAlgoliaEvents from "@/hooks/useAlgoliaEvents";
import { useAppDispatch } from "@/redux/store";
import { closeSearch, updateViewSearch } from "@/redux/algolia-slice";

interface SearchHitsProps {
  hits: hitType[];
}

export default function ViewSearchQuery({ hits }: SearchHitsProps) {
  const formattedHit = hits.slice(0, 6);
  const { query } = useAppSelector((state) => state.algolia);
  const router = useRouter();
  const dispatch = useAppDispatch();
  const { clickedItemAfterSearch } = useAlgoliaEvents();

  function viewHits() {
    dispatch(updateViewSearch());
    dispatch(closeSearch());
    router.push({ pathname: "/search", query: { query } });
  }

  return (
    <div className="searchhits">
      <div className="results row">
        <div className="col-lg-4">
          <h6>Popular Suggestions</h6>
          {hits.length > 0 && (
            <button
              aria-label="view all searched product"
              onClick={viewHits}
              className="btn btn-primary"
            >
              VIEW ALL {hits.length} ITEMS{" "}
            </button>
          )}
        </div>
        <div className="col-lg-8">
          <h6>Products</h6>
          {formattedHit.length > 1 ? (
            <ul className="ais-Hits-list">
              {formattedHit.map((hit, index) => (
                <li className="ais-Hits-item" key={index}>
                  <Link
                    href={`/products/${hit.slug}?query-id=${hit.__queryID}`}
                    passHref
                  >
                    <a
                      onClick={() =>
                        clickedItemAfterSearch(
                          hit.__queryID,
                          [hit.objectID],
                          [hit.__position],
                          "product clicked after a search"
                        )
                      }
                      className="hit d-flex align-items-center my-0 py-1"
                    >
                      <div className="hit-image">
                        <img
                          src={hit.images[0]?.file?.url}
                          alt={hit.name}
                          className="productImage"
                          height={70}
                          width={100}
                          placeholder="blur"
                          loading="lazy"
                        />
                      </div>
                      <div className="hit-content d-flex">
                        <h6 className="ms-2 me-1">
                          <Highlight attribute="name" hit={hit} />
                        </h6>
                        <div className="price fw-bold"> ${hit.price}</div>
                      </div>
                    </a>
                  </Link>
                </li>
              ))}
            </ul>
          ) : (
            <p>Start typing for search results</p>
          )}
        </div>
      </div>
      <style jsx>
        {`
          .hit-content.d-flex h6 {
            font-size: 13px;
            padding: 0px;
            white-space: nowrap;
            width: 180px;
            overflow: hidden;
            text-overflow: ellipsis;
          }
          .hit-content.d-flex {
            flex-direction: column;
          }
          .price {
            font-size: 13px;
          }
          .hit-image {
            height: 70px;
            width: 100px;
          }
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
            left: 6%;
            width: 85%;
            height: 380px;
            overflow: auto;
            margin-top: 1%;
            border-radius: 0;
            padding: 16px;
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
          button.btn.btn-primary {
            border-radius: 0px;
            margin-top: 10px;
          }
          @media (max-width: 768px) {
            .results {
              z-index: 1000;
              left: 5%;
              top: 24%;
              padding: 0px;
              width: 90%;
            }
          }
        `}
      </style>
    </div>
  );
}
