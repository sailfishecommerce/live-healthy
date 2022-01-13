/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
import { useState, useEffect } from "react";

import CheckoutBanner from "./CheckoutBanner";
import { useCart } from "@/hooks";
import ShippingCheckoutForm from "./ShippingCheckoutForm";
import { useAppSelector, useAppDispatch } from "@/hooks/useRedux";
import { CheckoutSidebar } from "@/components";
import useAirwallex from "@/hooks/useAirwallex";
import CheckoutPaymentMethod from "./CheckoutPaymentMethod";
import { clientSecretValidity } from "@/lib/airwallex-payment";
import { updateClientSecretStatus } from "@/redux/airwallex-slice";

export default function Checkout() {
  const { userDetail } = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();
  const { airwallex, airwallexPaymentIntent } = useAirwallex();
  const [formStages, setFormStages] = useState<any>({
    stage1: false,
    shippingForm: null,
    stage2: false,
  });
  const { cart } = useCart();

  useEffect(() => {
    const isClientSecretValid = clientSecretValidity(airwallex?.clientSecret);
    if (isClientSecretValid) {
      dispatch(updateClientSecretStatus(true));
    } else {
      dispatch(updateClientSecretStatus(false));
      airwallexPaymentIntent();
    }
  }, []);

  return (
    <div>
      <CheckoutBanner title="Checkout" breadcrumb="Checkout" />
      <div className="container">
        <div className="row mb-5">
          <section className="col-lg-8 d-flex flex-column">
            <div className="d-sm-flex justify-content-between align-items-center bg-secondary p-4 rounded-3 mb-grid-gutter">
              <div className="d-flex align-items-center">
                <div className="img-thumbnail rounded-circle position-relative flex-shrink-0">
                  <span
                    className="badge bg-warning position-absolute end-0 mt-n2"
                    data-bs-toggle="tooltip"
                    title="Reward points"
                  >
                    384
                  </span>
                  <img
                    className="rounded-circle"
                    src="/img/shop/account/avatar.jpg"
                    width="90"
                    alt="Susan Gardner"
                  />
                </div>
                <div className="ps-3">
                  <h3 className="fs-base mb-0">
                    {userDetail?.firstName} {userDetail?.lastName}
                  </h3>
                  <span className="text-accent fs-sm">{userDetail?.email}</span>
                </div>
              </div>
            </div>
            <div className="accordion mb-3" id="shipping-form">
              <ShippingCheckoutForm
                formStages={formStages}
                setFormStages={setFormStages}
              />
              <CheckoutPaymentMethod formStages={formStages} />
            </div>
          </section>
          {cart && <CheckoutSidebar cart={cart} />}
        </div>
      </div>
    </div>
  );
}
