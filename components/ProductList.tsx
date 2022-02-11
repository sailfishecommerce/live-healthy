import Link from "next/link";
import dynamic from "next/dynamic";

import Image from "@/components/Image";
import FormattedPrice from "@/lib/formatPrice";
import RatingStar from "@/components/RatingStar";
import { productType } from "@/types";
import useAlgoliaEvents from "@/hooks/useAlgoliaEvents";
import useShoppingCart from "@/hooks/useShoppingCart";

interface ProductProps {
  product: productType;
}

const ProductListQuickView = dynamic(() => import("./ProductListQuickView"));

export default function ProductList({ product }: ProductProps) {
  const { itemViewed } = useAlgoliaEvents();
  const { dataStatus, addItemToCart } = useShoppingCart();

  dataStatus(addItemToCart, `${product.name} added to cart`);

  function productViewedHandler() {
    itemViewed("product_viewed", [product.objectID]);
  }

  return (
    <>
      <div className="card product-card  product-list mb-3 border-bottom justify-content-center">
        <span className="badge bg-danger badge-shadow">Sale</span>
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
        <div className="d-sm-flex align-items-center">
          <Link href={`/products/${product.slug}`} passHref>
            <a onClick={productViewedHandler} className="product-list-thumb">
              <Image
                height={300}
                width={300}
                src={product.images[0]?.file?.url}
                alt={
                  product?.image_alt_text
                    ? product?.image_alt_text[0]
                    : product.name
                }
                className="productImage"
                placeholder="blur"
                blurDataURL={product.images[0]?.file?.url}
                loading="lazy"
              />
            </a>
          </Link>
          <div className="card-body py-2">
            <a className="product-meta d-block fs-xs pb-1">{product.vendor}</a>
            <h3 className="product-title fs-base">
              <Link href={`/products/${product.slug}`} passHref>
                <a onClick={productViewedHandler}>{product.name}</a>
              </Link>
            </h3>
            <div className="d-flex justify-content-between">
              <div className="product-price d-flex align-items-baseline">
                <span className="text-accent">
                  <FormattedPrice price={product.price} />
                </span>
                {product.origPrice && (
                  <span className="small text-accent mx-2">
                    <del className="fs-sm text-muted">
                      <FormattedPrice price={product.origPrice} />
                    </del>
                  </span>
                )}
              </div>
              <RatingStar rate={product.rating} />
            </div>
            <ProductListQuickView product={product} />
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .card-body.card-body-hidden {
            height: 100%;
          }

          .select.form-select.select-size {
            max-width: 14rem;
          }
        `}
      </style>
    </>
  );
}
