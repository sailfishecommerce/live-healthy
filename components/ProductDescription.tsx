/* eslint-disable @next/next/no-img-element */
import { productType } from "../types";

interface Props {
  product: productType;
}

export default function ProductDescription({ product }: Props) {
  return (
    <div className="container productDescription">
      <div className="row align-items-center py-md-3">
        <div className="col-lg-12 col-md-12 py-4 order-md-1">
          <h2 className="h3 mb-4 pb-2">Product description</h2>
          <h6 className="fs-base mb-3">{product.name}</h6>
          <div
            className="productInfo"
            dangerouslySetInnerHTML={{
              __html: product["description"],
            }}
          />
        </div>
      </div>
    </div>
  );
}
