/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { useState, memo } from "react";
import dynamic from "next/dynamic";

import { ProductProps } from "@/types";
import useMediaQuery from "@/hooks/useMediaQuery";
import { replaceSpaceWithHypen } from "@/lib/formatString";
import discountPrice from "@/lib/discountPrice";
import useAlgoliaEvents from "@/hooks/useAlgoliaEvents";
import ProductPriceView from "./ProductPriceView";

const DynamicProductViewForm = dynamic(
  () => import("@/components/ProductViewForm")
);

const DynamicProductMetatags = dynamic(
  () => import("../components/ProductMeta")
);
declare function tcjs(trigger: string, type: string, name: string): any;

const MProduct = ({
  product,
  forCategory,
  algoliaEvent,
  slider,
}: ProductProps) => {
  const { itemViewed, clickedItemAfterSearch } = useAlgoliaEvents();
  const [inHover, setHover] = useState(false);

  function productViewHandler() {
    itemViewed("product_viewed", [product.objectID]);
  }

  const mobileView = useMediaQuery("(max-width:768px)");

  const linkURL =
    algoliaEvent === "search"
      ? `/products/${product.slug}?query-id=${product.__queryID}`
      : `/products/${product.slug}`;

  const productImage =
    inHover && product.images?.length > 1
      ? product.images[1]?.file?.url
      : product.images[0]?.file?.url;

  const imageAlt = product.image_alt_text
    ? product.image_alt_text[0]
    : product.name;

  function algoliaClickedProductAfterSearch() {
    if (algoliaEvent === "search") {
      clickedItemAfterSearch(
        product.__queryID,
        [product.objectID],
        [product.__position],
        "product clicked after search"
      );
    } else {
      return null;
    }
  }

  const productClass = slider ? "col-12" : "col-md-4 col-6 mb-3 mb-lg-4";

  return (
    <div className={`${productClass} p-0 p-md-1 product`}>
      <DynamicProductMetatags product={product} />
      <div className="card product-card p-1 p-md-2">
        <div className="d-flex justify-content-between">
          {product.rrp && (
            <div className="discount-price mt-2">
              {discountPrice(product)} %
            </div>
          )}
          <button
            className="btn-wishlist btn-sm"
            type="button"
            aria-label="Add to Wishlist"
            data-bs-toggle="tooltip"
            data-bs-placement="left"
            title="Add to wishlist"
          >
            <i className="ci-heart"></i>
          </button>
        </div>
        <Link href={linkURL} passHref>
          <a
            onClick={algoliaClickedProductAfterSearch}
            className="productLink card-img-top d-block"
          >
            <div
              onMouseEnter={() => setHover(true)}
              onMouseLeave={() => setHover(false)}
              className="productImage"
            >
              <img
                height={300}
                width={300}
                src={productImage}
                alt={imageAlt}
                placeholder="blur"
                loading="lazy"
              />
            </div>
          </a>
        </Link>
        <div className="card-body p-1 py-lg-3">
          <Link
            href={`/collections/vendors/${replaceSpaceWithHypen(
              product.vendor
            )}`}
            passHref
          >
            <a className="product-meta d-block fs-xs pb-1">{product.vendor}</a>
          </Link>
          <h3 className="product-title fs-sm">
            <Link href={`/products/${product.slug}`} passHref>
              <a onClick={productViewHandler}>{product.name}</a>
            </Link>
          </h3>
          <ProductPriceView product={product} />
        </div>
        {!mobileView && (
          <DynamicProductViewForm
            product={product}
            algoliaEvent={algoliaEvent}
            forCategory={forCategory}
          />
        )}
      </div>
      <hr className="d-sm-none" />
      <style jsx>
        {`
          .productImage {
            height: 220px;
            display: flex;
            margin: auto;
            justify-content: center;
          }
          .productImage img.productImage:hover {
            transform: scale(1.03) !important;
            transition: transform 300ms ease-in 0s !important;
          }
          .product-meta:hover {
            color: red;
          }
          .discount-price {
            height: 35px;
            width: 50px;
            color: white;
            background-color: #fb696a;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 12px;
          }

          @media (max-width: 768px) {
            .card.product-card {
              min-height: 380px;
            }
            .product {
              min-height: 380px;
            }
            .productLink img {
              margin: auto;
              display: flex;
            }
            h3.product-title {
              width: 150px;
              white-space: nowrap;
              overflow: hidden;
              text-overflow: ellipsis;
            }
          }
        `}
      </style>
    </div>
  );
};

const Product = memo(MProduct);
export default Product;

// Product.whyDidYouRender = true;
