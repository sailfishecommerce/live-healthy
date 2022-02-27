import FormattedPrice from "@/lib/formatPrice";
import styles from "@/styles/ui.module.css";
import RatingStar from "./RatingStar";

export default function ProductPriceView({ product }: any) {
  return (
    <div className="d-flex justify-content-between">
      <ul className="product-price d-flex flex-column align-items-baseline">
        <li className={`text-accent fs-sm fs-lg ${styles.price}`}>
          <FormattedPrice price={product.price} isProduct />
        </li>
        {product.hkd_compare_at_price > 0 && (
          <li className="m-0">
            <del className={`small text-accent fs-xs ${styles.oldPrice} `}>
              <FormattedPrice price={product.hkd_compare_at_price} oldPrice />
            </del>
          </li>
        )}
      </ul>
      <div className="reviewRating d-flex flex-column">
        <RatingStar rate={product.rating} />
        {product.review_rating ? (
          <p className="widget-product-meta review">
            ({product.review_rating} reviews)
          </p>
        ) : (
          ""
        )}
      </div>
      <style jsx>
        {`
          .product-price {
            padding: 0px;
          }
          .product-price li {
            list-style: none;
            padding: 0px;
          }
          ul.product-price {
            font-size: 13px;
          }
          .reviewRating p {
            font-size: 12px;
          }
          @media (max-width: 768px) {
            .reviewRating p.review {
              font-size: 10px;
            }
          }
        `}
      </style>
    </div>
  );
}
