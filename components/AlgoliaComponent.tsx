/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import aa from "search-insights";
import { connectHitInsights, Highlight } from "react-instantsearch-dom";
import useAlgoliaEvents from "@/hooks/useAlgoliaEvents";

interface HitComponentProps {
  hit: {
    images: {
      file: {
        url: string;
      };
    }[];
    price: string;
    name: string;
    slug: string;
    __queryID: string;
  };
  insights: any;
}

export function HitComponent({
  hit,
  insights,
}: HitComponentProps): JSX.Element {
  const { clickedObjectIDsAfterSearch } = useAlgoliaEvents();
  console.log("hits", hit);

  function clickedProductAfterSearchHandler() {
    clickedObjectIDsAfterSearch(insights, hit.__queryID);
  }

  return (
    <Link href={`/products/${hit.slug}?query-id=${hit.__queryID}`} passHref>
      <a
        onClick={clickedProductAfterSearchHandler}
        className="hit d-flex align-items-center my-0 border-bottom py-1"
      >
        <div className="hit-image">
          <img
            src={hit.images[0].file.url}
            alt={hit.name}
            className="productImage"
            height="70px"
            width="100px"
          />
        </div>
        <div className="hit-content d-flex">
          <h6 className="ms-2 me-1">
            <Highlight attribute="name" hit={hit} />
          </h6>
          <div className="price"> - ${hit.price}</div>
        </div>
        <style jsx>
          {`
            .hit-content.d-flex h6 {
              font-size: 13px;
              padding: 0 px;
            }
            .price {
              font-size: 13px;
            }
          `}
        </style>
      </a>
    </Link>
  );
}

export const HitComponentWithInsight = connectHitInsights(aa)(HitComponent);
