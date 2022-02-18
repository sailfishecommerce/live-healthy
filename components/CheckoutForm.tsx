import { memo } from "react";
import CheckoutPaymentMethod from "@/components/CheckoutPaymentMethod";
import ShippingCheckoutForm from "@/components/ShippingCheckoutForm";

function CheckoutFormComponent() {
  return (
    <div className="accordion mb-3" id="shipping-form">
      <ShippingCheckoutForm />
      <CheckoutPaymentMethod  />
    </div>
  );
}

const CheckoutForm = memo(CheckoutFormComponent);

export default CheckoutForm;

// CheckoutForm.whyDidYouRender = true;
