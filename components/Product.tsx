/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import Head from "next/head";

import FormattedPrice from "@/lib/formatPrice";
import { productType } from "@/types";
import useProduct from "@/hooks/useProduct";

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

  console.log("product", product);

  const categoryStyle = forCategory ? "d-flex flex-column" : "d-flex";

  return (
    <div className="col-md-4 col-sm-6 mb-4">
      <Head>
        <script id="productLDJSon" type="application/ld+json">
          {`{
            "@context":"https://schema.org",
            "@type":"Product",
            "name":"${product.name}",
            "description":"${product.description}",      
            "image":"${product.images[0].file.url}",
            "url":"https://just-medic.vercel.app/products/${product.slug}",        
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "5.0",
              "reviewCount": "1"
            },
            "review": {
              "@type": "Review",
              "reviewRating": {
                "@type": "Rating",
                "ratingValue":"5",
                "bestRating":"5"
                },
              "author":{
                "@type":"Person",
                "name":"Dave Olubisi"
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
              "priceValidUntil": "2021-12-31",
              "availability": "https://schema.org/InStock",
              "price":"${product.price}",
              "priceCurrency": "USD"
            }
          }
        `}
        </script>
      </Head>
      <div className="card product-card p-2">
        <button
          className="btn-wishlist btn-sm"
          type="button"
          data-bs-toggle="tooltip"
          data-bs-placement="left"
          title="Add to wishlist"
        >
          <i className="ci-heart"></i>
        </button>
        <Link href={`/products/${product.slug}`} passHref>
          <a
            onClick={productViewEvent}
            className="productLink card-img-top d-block overflow-hidden"
          >
            <img
              src={product.product_image}
              alt={product.image_alt_text[0]}
              className="productImage"
            />
          </a>
        </Link>
        <div className="card-body py-3">
          <h3 className="product-title fs-sm">
            <Link href={`/products/${product.slug}`} passHref>
              <a onClick={productViewEvent}>{product.name}</a>
            </Link>
          </h3>
          <div className="d-flex justify-content-between">
            <div className="product-price d-flex align-items-baseline">
              <span className="text-accent">
                <FormattedPrice price={product.price} />
              </span>
              {product.origPrice && (
                <span className="small text-accent mx-2">
                  <del>
                    <FormattedPrice price={product.origPrice} />
                  </del>
                </span>
              )}
            </div>
            <div className="star-rating">
              <i className="star-rating-icon ci-star-filled active"></i>
              <i className="star-rating-icon ci-star-filled active"></i>
              <i className="star-rating-icon ci-star-filled active"></i>
              <i className="star-rating-icon ci-star"></i>
              <i className="star-rating-icon ci-star"></i>
            </div>
          </div>
        </div>
        <div className="card-body card-body-hidden">
          <form onSubmit={addToCartHandler}>
            {product?.options.length > 0 ? (
              product?.options.map((option) => {
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
          img.productImage:hover {
            transform: scale(1.03);
            transition: transform 300ms ease-in 0s;
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
