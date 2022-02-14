import { memo } from "react";

import useCart from "@/hooks/useCart";
import FormattedPrice from "@/lib/formatPrice";
import { cartType } from "@/types";
import CartWidget from "./CartWidget";
import useAirwallexPayment from "@/hooks/useAirwallexPayment";
import { useAppSelector } from "@/hooks/useRedux";

interface Props {
  cart: cartType;
}

function HeaderCartDropdownComponent({ cart }: Props) {
  const { toggleCart } = useCart();
  const { checkoutHandler, disableBtn } = useAirwallexPayment();
  const { paymentForm }: any = useAppSelector((state) => state.payment);

  function onCheckout() {
    checkoutHandler(cart, paymentForm);
  }

  return (
    <div className="dropdown-menu dropdown-menu-end">
      <div className="widget widget-cart px-3 pt-2 pb-3">
        {cart?.items.map((item: cartType, index: number) => (
          <CartWidget key={`item.productId-${index}`} cart={item} />
        ))}
        <div className="d-flex flex-wrap justify-content-between align-items-center py-3">
          <div className="fs-sm me-2 py-2 align-items-baseline">
            <span className="text-muted">Subtotal:</span>
            <span className="text-accent fs-base ms-1">
              <FormattedPrice price={cart?.subTotal} />
            </span>
          </div>
          <a onClick={toggleCart} className="btn btn-outline-secondary btn-sm">
            Expand cart
            <i className="ci-arrow-right ms-1 me-n1"></i>
          </a>
        </div>
        <button
          onClick={onCheckout}
          disabled={disableBtn}
          className="btn btn-primary btn-sm d-block w-100"
        >
          <i className="ci-card me-2 fs-base align-middle"></i>
          Checkout
        </button>
      </div>
      <style jsx>
        {`
          .widget.widget-cart {
            width: 20rem;
          }
        `}
      </style>
    </div>
  );
}
const HeaderCartDropdown = memo(HeaderCartDropdownComponent);
export default HeaderCartDropdown;

// HeaderCartDropdown.whyDidYouRender = true;
