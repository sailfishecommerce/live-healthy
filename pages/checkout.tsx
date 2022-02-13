/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import dynamic from "next/dynamic";

import Applayout from "@/layout/Applayout";
import useAirwallex from "@/hooks/useAirwallex";
import CheckoutBanner from "@/components/CheckoutBanner";
import { useAppDispatch } from "@/hooks/useRedux";
import useCart from "@/hooks/useCart";
import { clientSecretValidity } from "@/lib/airwallex-payment";
import { updateClientSecretStatus } from "@/redux/airwallex-slice";

const DynamicCheckoutSidebar = dynamic(
  () => import("../components/CheckoutSidebar")
);
const DynamicCheckoutForm = dynamic(() => import("@/components/CheckoutForm"));
const CheckoutWelcomeBanner = dynamic(
  () => import("@/components/CheckoutWelcomeBanner")
);

export default function Checkout() {
  // const { generateAirwallexAccessToken } = useAirwallex();
  const dispatch = useAppDispatch();
  // const { airwallex, airwallexPaymentIntent } = useAirwallex();
  const { useCartData } = useCart();
  const { data: cart } = useCartData();

  // useEffect(() => {
  //   generateAirwallexAccessToken();
  // }, []);

  // useEffect(() => {
  //   const isClientSecretValid = clientSecretValidity(airwallex?.clientSecret);
  //   if (isClientSecretValid) {
  //     dispatch(updateClientSecretStatus(true));
  //   } else {
  //     dispatch(updateClientSecretStatus(false));
  //     airwallexPaymentIntent();
  //   }
  // }, [cart]);

  return (
    <Applayout title="Checkout your order">
      <CheckoutBanner title="Checkout" breadcrumb="Checkout" />
      <div className="container checkout-page-content">
        <div className="row mb-5">
          <section className="col-lg-8 d-flex flex-column">
            <CheckoutWelcomeBanner />
            <DynamicCheckoutForm />
          </section>
          {cart && <DynamicCheckoutSidebar cart={cart} />}
        </div>
      </div>
      <style jsx>{`
        .checkout-page-content {
          min-height: 500px;
        }
      `}</style>
    </Applayout>
  );
}

// Checkout.whyDidYouRender = true;
