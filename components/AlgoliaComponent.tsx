/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import aa from "search-insights";
import { connectHitInsights, Highlight } from "react-instantsearch-dom";
import RenderSmoothImage from "render-smooth-image-react";
import useAlgoliaEvents from "@/hooks/useAlgoliaEvents";
import "render-smooth-image-react/build/style.css";

interface HitComponentProps {
  hit: {
    product_images: {
      link: string;
      alt: string;
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

  function clickedProductAfterSearchHandler() {
    clickedObjectIDsAfterSearch(insights, hit.__queryID);
  }

  return (
    <Link href={`/products/${hit.slug}?query-id=${hit.__queryID}`} passHref>
      <a
        onClick={clickedProductAfterSearchHandler}
        className="hit d-flex align-items-center my-0 py-1"
      >
        <div className="hit-image">
          <RenderSmoothImage
            src={hit.product_images[0].link}
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
          <div className="price fw-bold"> ${hit.price}</div>
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
          `}
        </style>
      </a>
    </Link>
  );
}

export const HitComponentWithInsight = connectHitInsights(aa)(HitComponent);
