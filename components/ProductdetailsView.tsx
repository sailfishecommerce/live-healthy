/* eslint-disable @next/next/no-img-element */
import FormattedPrice from "@/lib/formatPrice";
import Rating from "./Rating";
import ProductForm from "./ProductForm";
import discountPrice from "@/lib/discountPrice";

export default function ProductdetailsView({ product }: any) {
  const { productToView } = product;

  return (
    <div className="col-lg-5 pt-4 pt-lg-0">
      <div className="product-details ms-auto pb-3">
        <div className="d-flex justify-content-between align-items-center mb-2">
          <Rating product={productToView} />
          <button
            className="btn-wishlist"
            type="button"
            aria-label="Add to wishlist"
            data-bs-toggle="tooltip"
            title="Add to wishlist"
          >
            <i className="ci-heart"></i>
          </button>
        </div>
        <div className="price-group mb-2 d-flex justify-content-between align-items-center">
          <div className="d-flex price align-items-center">
            <div className="text-accent me-2 fs-lg">
              <FormattedPrice price={productToView.price} isProduct />
            </div>
            {productToView.hkd_compare_at_price > 0 && (
              <del className="small text-accent fs-ms">
                <FormattedPrice
                  price={productToView.hkd_compare_at_price}
                  oldPrice
                  isProduct
                />
              </del>
            )}
          </div>
          {productToView.hkd_compare_at_price > 0 && (
            <div className="percentage">{`${discountPrice(
              productToView
            )} %`}</div>
          )}
        </div>
        <ProductForm product={productToView} />
        <div
          className="description"
          dangerouslySetInnerHTML={{
            __html: productToView["description"],
          }}
        />
      </div>
    </div>
  );
}
