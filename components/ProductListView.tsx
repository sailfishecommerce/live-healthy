import Link from "next/link";
import dynamic from "next/dynamic";

import FormattedPrice from "@/lib/formatPrice";
import RatingStar from "@/components/RatingStar";
import useAlgoliaEvents from "@/hooks/useAlgoliaEvents";
import useShoppingCart from "@/hooks/useShoppingCart";

const ProductListQuickView = dynamic(() => import("./ProductListQuickView"));

export default function ProductListView({ product }: any) {
  const { itemViewed } = useAlgoliaEvents();
  const { dataStatus, addItemToCart } = useShoppingCart();

  dataStatus(addItemToCart, `${product.name} added to cart`);

  function productViewedHandler() {
    itemViewed("product_viewed", [product.objectID]);
  }
  return (
    <>
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
      <style jsx>
        {`
          .card-body.card-body-hidden {
            height: 100%;
          }
        `}
      </style>
    </>
  );
}