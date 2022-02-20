/* eslint-disable react-hooks/exhaustive-deps */
import dynamic from "next/dynamic";
import { useQuery } from "react-query";

import { useAccount } from "@/hooks";
import Applayout from "@/layout/Applayout";
import CheckoutBanner from "@/components/CheckoutBanner";
import useCart from "@/hooks/useCart";
import SpinnerRipple from "@/components/spinnerLoader";

const DynamicCheckoutSidebar = dynamic(
  () => import("../components/CheckoutSidebar")
);
const DynamicCheckoutForm = dynamic(() => import("@/components/CheckoutForm"));
const CheckoutWelcomeBanner = dynamic(
  () => import("@/components/CheckoutWelcomeBanner")
);

export default function Checkout() {
  const { getUserAccount } = useAccount();
  const { useCartData } = useCart();
  const { data: cart } = useCartData();
  const { data } = useQuery("userDetails", getUserAccount);
  console.log("data-getUserAccount", data, "cart", cart);
  return (
    <Applayout title="Checkout your order">
      <CheckoutBanner title="Checkout" breadcrumb="Checkout" />
      <div className="container checkout-page-content">
        <div className="row mb-5">
          <section className="col-lg-8 d-flex flex-column">
            <CheckoutWelcomeBanner />
            <DynamicCheckoutForm />
          </section>
          {cart ? (
            <DynamicCheckoutSidebar cart={cart} />
          ) : (
            <div className="loader d-flex col-lg-4 justify-content-center m-auto">
              <SpinnerRipple />
            </div>
          )}
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
