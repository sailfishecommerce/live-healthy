/* eslint-disable @next/next/no-img-element */
import CheckoutStep from "@/components/CheckoutStep";
import Orderdetails from "@/components/Orderdetails";
import useCart from "@/hooks/useCart";
import useCheckout from "@/hooks/useCheckout";
import CheckoutBanner from "./CheckoutBanner";
import CheckoutReviewSidebar from "@/components/CheckoutReviewSidebar";

export default function CheckoutReview() {
  const { updateCheckoutHandler } = useCheckout();
  const { cart } = useCart();
  return (
    <div>
      <CheckoutBanner title="Checkout" breadcrumb="Checkout" />
      <div className="container pb-5 mb-2 mb-md-4">
        <div className="row">
          <section className="col-lg-8">
            <CheckoutStep />
            {cart && <Orderdetails cart={cart} />}
            {/*<!-- Client details-->*/}
            <div className="bg-secondary rounded-3 px-4 pt-4 pb-2">
              <div className="row">
                <div className="col-sm-6">
                  <h4 className="h6">Shipping to:</h4>
                  <ul className="list-unstyled fs-sm">
                    <li>
                      <span className="text-muted">Client:&nbsp;</span>
                      Susan Gardner
                    </li>
                    <li>
                      <span className="text-muted">Address:&nbsp;</span>
                      44 Shirley Ave. West Chicago, IL 60185, USA
                    </li>
                    <li>
                      <span className="text-muted">Phone:&nbsp;</span>
                      +1 (808) 764 554 330
                    </li>
                  </ul>
                </div>
                <div className="col-sm-6">
                  <h4 className="h6">Payment method:</h4>
                  <ul className="list-unstyled fs-sm">
                    <li>
                      <span className="text-muted">Credit Card:&nbsp;</span>
                      **** **** **** 5300
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            {/*<!-- Navigation (desktop)-->*/}
            <div className="d-none d-lg-flex pt-4">
              <div className="w-50 pe-3">
                <a
                  onClick={() => updateCheckoutHandler("shipping")}
                  className="btn btn-secondary d-block w-100"
                >
                  <i className="ci-arrow-left mt-sm-0 me-1"></i>
                  <span className="d-none d-sm-inline">Back to Payment</span>
                  <span className="d-inline d-sm-none">Back</span>
                </a>
              </div>
              <div className="w-50 ps-2">
                <a
                  onClick={() => updateCheckoutHandler("complete")}
                  className="btn btn-primary d-block w-100"
                >
                  <span className="d-none d-sm-inline">Complete order</span>
                  <span className="d-inline d-sm-none">Complete</span>
                  <i className="ci-arrow-right mt-sm-0 ms-1"></i>
                </a>
              </div>
            </div>
          </section>
          {/*<!-- Sidebar-->*/}
          {cart && <CheckoutReviewSidebar cart={cart} />}
        </div>
        {/*<!-- Navigation (mobile)-->*/}
        <div className="row d-lg-none">
          <div className="col-lg-8">
            <div className="d-flex pt-4 mt-3">
              <div className="w-50 pe-3">
                <a
                  onClick={() => updateCheckoutHandler("payment")}
                  className="btn btn-secondary d-block w-100"
                >
                  <i className="ci-arrow-left mt-sm-0 me-1"></i>
                  <span className="d-none d-sm-inline">Back to Payment</span>
                  <span className="d-inline d-sm-none">Back</span>
                </a>
              </div>
              <div className="w-50 ps-2">
                <a
                  onClick={() => updateCheckoutHandler("complete")}
                  className="btn btn-primary d-block w-100"
                >
                  <span className="d-none d-sm-inline">Complete order</span>
                  <span className="d-inline d-sm-none">Complete</span>
                  <i className="ci-arrow-right mt-sm-0 ms-1"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
