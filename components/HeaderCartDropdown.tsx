/* eslint-disable @next/next/no-img-element */
import Link from "next/link";

import useCart from "@/hooks/useCart";
import FormattedPrice from "@/lib/formatPrice";
import { cartType } from "@/types";
import useVbout from "@/hooks/useVbout";

interface Props {
  cart: cartType;
  toggleCart: () => void;
}

interface CartWidgetProps {
  cart: cartType;
  removeFromCart: (cart: any) => void;
}

function CartWidget({ cart, removeFromCart }: CartWidgetProps) {
  const { removeVboutCartItem } = useVbout();

  function removeItemFromCart() {
    removeFromCart(cart);
    removeVboutCartItem({
      cartId: cart.id,
      productId: cart.productId,
    });
  }

  return (
    <div className="widget-cart-item py-2 border-bottom">
      <button
        className="btn-close text-danger"
        type="button"
        onClick={removeItemFromCart}
        aria-label="Remove"
      >
        <span aria-hidden="true">&times;</span>
      </button>
      <div className="d-flex align-items-center">
        <Link href={`/products/${cart.product.slug}`} passHref>
          <a className="flex-shrink-0">
            <img
              src={cart.product?.images[0].file.url.split(";")[0]}
              alt={cart.product.name}
              width="64"
            />
          </a>
        </Link>
        <div className="ps-2">
          <h6 className="widget-product-title">
            <Link href={`/products/${cart.product.slug}`} passHref>
              <a>{cart.product.name}</a>
            </Link>
          </h6>
          <div className="widget-product-meta d-flex align-items-baseline">
            <span className="text-accent me-2">
              <FormattedPrice price={cart?.price} />
            </span>
            <span className="text-muted">x {cart.quantity}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function HeaderCartDropdown({ cart, toggleCart }: Props) {
  const { removeFromCart } = useCart();
  return (
    <div className="dropdown-menu dropdown-menu-end">
      <div
        className="widget widget-cart px-3 pt-2 pb-3"
        style={{ width: "20rem" }}
      >
        {cart?.items.map((item: cartType, index: number) => (
          <CartWidget
            removeFromCart={removeFromCart}
            key={`item.productId-${index}`}
            cart={item}
          />
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
        <Link href="/preview/single-checkout" passHref>
          <a className="btn btn-primary btn-sm d-block w-100">
            <i className="ci-card me-2 fs-base align-middle"></i>
            Checkout
          </a>
        </Link>
      </div>
    </div>
  );
}
