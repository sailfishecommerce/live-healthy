/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import Head from "next/head";
import { useState } from "react";
import RenderSmoothImage from "render-smooth-image-react";
import "render-smooth-image-react/build/style.css";

import { productType } from "@/types";
import useProduct from "@/hooks/useProduct";
import RatingStar from "./RatingStar";
import { replaceSpaceWithHypen } from "@/lib/formatString";
import useCurrency from "@/hooks/useCurrency";
import discountPrice from "@/lib/discountPrice";
import useProductPrice from "@/hooks/useProductPrice";
import SpinnerRipple from "./spinnerLoader";

interface ProductProps {
  product: productType;
  forCategory?: boolean;
}

declare function tcjs(trigger: string, type: string, name: string): any;

export default function Product({
  product,
  forCategory,
}: ProductProps): JSX.Element {
  const {
    productViewEvent,
    addToCartHandler,
    quickViewHandler,
    optionHandler,
  } = useProduct(product);
  const [inHover, setHover] = useState(false);
  const { currency } = useCurrency();
  const { price, oldPrice } = useProductPrice(product);

  const categoryStyle = forCategory ? "d-flex flex-column" : "d-flex";

  const productImage =
    inHover && product.images.length > 1
      ? product.images[1]?.file?.url
      : product.images[0]?.file?.url;

  function displaySecondProductImgOnHover() {
    if (inHover && product.images.length > 1) {
      return (
        <>
          <SpinnerRipple />
        </>
      );
    }
  }
  return (
    <div className="col-md-4 col-sm-6 mb-4">
      <Head>
        <script id="productLDJSon" type="application/ld+json">
          {`{
            "@context":"https://schema.org",
            "@type":"Product",
            "name":"${product.name}",
            "description":"${product.description}",      
            "image":"${product.images[0]?.file?.url}",
            "url":"https://just-medic.vercel.app/products/${product.slug}",        
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "${product.rating}",
              "reviewCount": "${product.review_rating}"
            },
            "review": {
              "@type": "Review",
              "reviewRating": {
                "@type": "Rating",
                "ratingValue":"${product.rating}",
                "bestRating":"${product.review_rating}"
                },
              "author":{
                "@type":"Organization",
                "name":"Live healthy",
                "url":"https://livehealthy.hk/",
                "logo": "//cdn.shopify.com/s/files/1/0040/1699/6481/files/Sailfish-logo.png?v=1626620681"
              }
            },
            "brand":{
              "@type":"Brand",
              "name":"${product.name}"
            },                  
            "isbn":"${product.id}",
            "sku":"${product.id}",
            "offers": {
              "@type": "Offer",
              "url":"https://just-medic.vercel.app/products/${product.slug}",        
              "priceValidUntil": "2022-12-31",
              "availability": "https://schema.org/InStock",
              "price":"${product.price}",
              "priceCurrency": "USD"
            }
          }
        `}
        </script>
        <meta title={product.meta_title} />
        <meta name="description" content={product.description} />
      </Head>
      <div className="card product-card p-2">
        <div className="d-flex justify-content-between">
          {product.hkd_compare_at_price > 0 && (
            <div className="discount-price mt-2">
              {discountPrice(product)} %
            </div>
          )}
          <button
            className="btn-wishlist btn-sm"
            type="button"
            data-bs-toggle="tooltip"
            data-bs-placement="left"
            title="Add to wishlist"
          >
            <i className="ci-heart"></i>
          </button>
        </div>
        {/* {<SpinnerRipple />} */}
        <Link href={`/products/${product.slug}`} passHref>
          <a
            onClick={productViewEvent}
            className="productLink card-img-top d-block overflow-hidden"
          >
            <div
              onMouseEnter={() => setHover(true)}
              onMouseLeave={() => setHover(false)}
              className="productImage"
            >
              <RenderSmoothImage
                src={productImage}
                alt={product?.image_alt_text[0]}
                className="productImage"
              />
            </div>
          </a>
        </Link>
        <div className="card-body py-3">
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
              <a onClick={productViewEvent}>{product.name}</a>
            </Link>
          </h3>
          <div className="d-flex justify-content-between">
            <div className="product-price d-flex align-items-baseline">
              <div className="text-accent">{price()}</div>
              {currency === "HKD" && product.hkd_compare_at_price > 0 && (
                <span className="small text-accent mx-2">{oldPrice()}</span>
              )}
            </div>
            <div className="reviewRating d-flex flex-column">
              <RatingStar rate={product.rating} />
              {product.review_rating && (
                <p className="widget-product-meta">
                  ({product.review_rating} reviews)
                </p>
              )}
            </div>
          </div>
        </div>
        <div className="card-body card-body-hidden">
          <form onSubmit={addToCartHandler}>
            {product?.options?.length > 0 ? (
              product?.options?.map((option) => {
                return option.name === "Color" ? (
                  <div key={option.id} className="text-center pb-2">
                    {option.values.map(
                      (value: { name: string; id: string }) => (
                        <div
                          key={value.id}
                          className="form-check form-option form-check-inline mb-2"
                        >
                          <input
                            className="form-check-input"
                            type="radio"
                            value={value.name}
                            onChange={optionHandler}
                            name={option.name}
                            id={value.id}
                            required
                          />
                          <label
                            className="form-option-label rounded-circle"
                            htmlFor={value.id}
                          >
                            <span
                              className="form-option-color rounded-circle"
                              style={{
                                backgroundColor: `${value.name.toLowerCase()}`,
                              }}
                            ></span>
                          </label>
                        </div>
                      )
                    )}
                  </div>
                ) : option.name === "Size" ? (
                  <div key={option.id} className={`mb-2 ${categoryStyle}`}>
                    <select
                      onChange={optionHandler}
                      name="Size"
                      className="form-select form-select-sm me-2 mb-2"
                      required
                    >
                      <option value="">Select Size</option>
                      {option.values.map(
                        (value: { name: string; id: string }) => (
                          <option value={value.name} key={value.id}>
                            {value.name}
                          </option>
                        )
                      )}
                    </select>
                    <button className="btn btn-primary btn-sm" type="submit">
                      <i className="ci-cart fs-sm me-1"></i>
                      Add to Cart
                    </button>
                  </div>
                ) : null;
              })
            ) : (
              <button
                className="btn btn-primary btn-sm m-auto d-flex align-items-center"
                type="submit"
              >
                <i className="ci-cart fs-sm me-1"></i>
                Add to Cart
              </button>
            )}
          </form>
          <div className="text-center">
            <button
              className="nav-link-style fs-ms btn btn-link"
              onClick={() => quickViewHandler(product)}
              data-bs-toggle="quickViewModal"
            >
              <i className="ci-eye align-middle me-1"></i>
              Quick view
            </button>
          </div>
        </div>
      </div>
      <hr className="d-sm-none" />
      <style jsx>
        {`
          .productImage {
            height: 220px;
            display: flex;
            margin: auto;
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
          .reviewRating p {
            font-size: 12px;
          }
          @media (max-width: 768px) {
            .productLink img {
              margin: auto;
              display: flex;
            }
          }
        `}
      </style>
    </div>
  );
}
