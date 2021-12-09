/* eslint-disable @next/next/no-img-element */
import Link from "next/link";

import { useCart } from "@/hooks";
import FormattedPrice from "@/lib/formatPrice";

export default function BottomTab() {
  const { cart }: any = useCart();
  return (
    <div className="handheld-toolbar">
      <div className="d-table table-layout-fixed w-100">
        <Link href="/shop" passHref>
          <a className="d-table-cell handheld-toolbar-item">
            <span className="handheld-toolbar-icon">
              <i className="ci-store"></i>
            </span>
            <span className="handheld-toolbar-label">Shop</span>
          </a>
        </Link>
        <a
          className="d-table-cell handheld-toolbar-item"
          data-bs-toggle="collapse"
          data-bs-target="#navbarCollapse"
        >
          <span className="handheld-toolbar-icon">
            <i className="ci-menu"></i>
          </span>
          <span className="handheld-toolbar-label">Menu</span>
        </a>
        <Link href="/preview/single-checkout" passHref>
          <a className="d-table-cell handheld-toolbar-item">
            <span className="handheld-toolbar-icon">
              <i className="ci-cart"></i>
              {cart && (
                <span className="badge bg-primary rounded-pill ms-1">
                  {" "}
                  {cart?.items?.length}
                </span>
              )}
            </span>
            {cart ? (
              <span className="handheld-toolbar-label">
                <FormattedPrice price={cart?.subTotal} />
              </span>
            ) : (
              <p className="handheld-toolbar-label">Cart</p>
            )}
          </a>
        </Link>
      </div>
    </div>
  );
}
