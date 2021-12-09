/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { Modal } from "react-bootstrap";

import { quickViewModal } from "@/redux/ui-slice";
import Rating from "../Rating";
import ProductForm from "../ProductForm";
import { useAppDispatch } from "@/hooks/useRedux";
import ProductGallery from "@/components/ProductGallery";

interface QuickViewModalProps {
  product: {
    active: boolean;
    productToView: any;
  };
}

type productOptions = {
  name: string;
  id: string;
  values: { id: string; name: string }[];
};

export default function QuickViewModal({ product }: QuickViewModalProps) {
  const dispatch = useAppDispatch();
  const { productToView } = product;

  function quickViewHandler(product: any) {
    dispatch(quickViewModal(product));
  }
  console.log("quickViewMM", product);

  function submitFormHandler(e: any) {
    e.preventDefault;
  }
  return (
    <Modal
      show={product.active}
      onHide={quickViewHandler}
      size="xl"
      role="dialog"
    >
      <Modal.Header closeButton>
        <Modal.Title>
          <h4 className="modal-title product-title">
            <Link href={`/products/${productToView.slug}`} passHref>
              <a
                data-bs-toggle="tooltip"
                data-bs-placement="right"
                title="Go to product page"
              >
                {productToView.name}
                <i className="ci-arrow-right fs-lg ms-2"></i>
              </a>
            </Link>
          </h4>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="row">
          <ProductGallery product={productToView} quickView />
          <div className="col-lg-5 pt-4 pt-lg-0">
            <div className="product-details ms-auto pb-3">
              <div className="d-flex justify-content-between align-items-center mb-2">
                <Rating product={productToView} />
                <button
                  className="btn-wishlist"
                  type="button"
                  data-bs-toggle="tooltip"
                  title="Add to wishlist"
                >
                  <i className="ci-heart"></i>
                </button>
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
        </div>
        <style jsx>
          {`
            .description {
              height: 400 px;
              overflow: auto;
            }
          `}
        </style>
      </Modal.Body>
    </Modal>
  );
}
