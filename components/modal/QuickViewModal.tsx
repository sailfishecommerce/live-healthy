/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { Icon } from "@iconify/react";
import { Modal } from "react-bootstrap";

import { quickViewModal } from "@/redux/ui-slice";
import { PaymentNote } from "../ProductView";
import Rating from "../Rating";
import ProductForm from "../ProductForm";
import { useAppDispatch } from "@/hooks/useRedux";
import { CartCounter } from "@/components/CartCounter";
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
          {productToView.options.length > 0 ? (
            <ProductGallery product={productToView} />
          ) : (
            <ProductGallery product={productToView} quickView />
          )}
          <div className="col-lg-5 pt-4 pt-lg-0 image-zoom-pane">
            <div className="product-details ms-auto pb-3">
              <div className="d-flex justify-content-between align-items-center mb-2">
                <Rating />
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
              <>
                {productToView.content.productBenefits && (
                  <div className="product-benefit">
                    <h5 className="h6 mb-3 pb-2 border-bottom">
                      <i className="ci-announcement text-muted fs-lg align-middle mt-n1 me-2"></i>
                      Product info
                    </h5>
                    <h6 className="fs-sm mb-2">Benefits</h6>
                    <ul className="fs-sm px-0">
                      {productToView.content.productBenefits.map(
                        (benefit: { icon: string; text: string }) => (
                          <li className="my-1 list-unstyled" key={benefit.icon}>
                            <Icon
                              fontSize="22px"
                              className="mx-2"
                              icon={benefit.icon}
                            />
                            {benefit.text}
                          </li>
                        )
                      )}
                    </ul>
                  </div>
                )}
              </>
            </div>
            {productToView.options.length === 0 && <PaymentNote />}
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
}
