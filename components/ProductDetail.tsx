import { useState } from "react";
import ContactForMoreModal from "./ContactForMoreModal";

import { productType } from "@/types";
import FormattedPrice from "@/lib/formatPrice";
import Rating from "./Rating";
import ProductForm from "./ProductForm";

interface Props {
  product: productType;
}

export default function ProductDetail({ product }: Props) {
  const [modal, setModal] = useState(false);

  function toggleModal() {
    setModal(!modal);
  }

  return (
    <div>
      <ContactForMoreModal
        show={modal}
        onHide={toggleModal}
        productName={product.name}
      />
      <div className="d-flex justify-content-between align-items-center mb-2">
        <Rating product={product} />
        <button
          className="btn-wishlist me-0 me-lg-n3"
          type="button"
          data-bs-toggle="tooltip"
          title="Add to wishlist"
        >
          <i className="ci-heart"></i>
        </button>
      </div>
      <div className="mb-3 d-flex align-items-center justify-content-between">
        <div className="d-flex align-items-center">
          <span className="h3 fw-normal text-accent me-1">
            <FormattedPrice price={product.price} />
          </span>
          {product.origPrice && (
            <span className="h5 fw-normal text-accent mx-2">
              <del>
                <FormattedPrice price={product.origPrice} />
              </del>
            </span>
          )}
        </div>
        <span className="badge bg-danger badge-shadow align-middle mt-n2">
          Sale
        </span>
      </div>
      <ProductForm product={product} />
      <button
        onClick={toggleModal}
        className="btn btn-link link-accent text-decoration-underline px-0"
      >
        Not enough? Contact us for more
      </button>
    </div>
  );
}