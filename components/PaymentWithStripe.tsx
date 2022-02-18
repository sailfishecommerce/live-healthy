/* eslint-disable @next/next/no-img-element */
import { useProcessPayment } from "@/hooks";
import StripePaymentMethod from "./StripePaymentMethod";
import { useAppSelector } from "@/hooks/useRedux";
import { useState } from "react";

export default function PaymentWithStripe() {
  const { paymentForm } = useAppSelector((state) => state.payment);
  const [loadingState, setLoadingState] = useState(false);
  const { makePayment } = useProcessPayment();

  function makePaymentHandler() {
    console.log("formStages.shippingForm", paymentForm);
    setLoadingState(true);
    makePayment(paymentForm)
      .then((response) => {
        setLoadingState(false);
        console.log("makePayment", response);
      })
      .catch((err) => {
        setLoadingState(false);
        console.error("error", err);
      });
  }

  return (
    <div className="accordion-item">
      <h3 className="accordion-header">
        <a className="accordion-button" href="#card" data-bs-toggle="collapse">
          <i className="ci-card fs-lg me-2 mt-n1 align-middle"></i>
          Pay with Credit Card (powered by Stripe)
        </a>
      </h3>
      <div
        className="accordion-collapse collapse show"
        id="card"
        data-bs-parent="#payment-method"
      >
        <div className="accordion-body">
          <p className="fs-sm">
            We accept following credit cards:&nbsp;&nbsp;
            <img
              className="d-inline-block align-middle"
              src="/img/cards.png"
              width="187"
              alt="Cerdit Cards"
            />
          </p>
          <StripePaymentMethod />
        </div>
      </div>
    </div>
  );
}
