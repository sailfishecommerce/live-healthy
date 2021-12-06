/* eslint-disable @next/next/no-img-element */
import Link from "next/link";

import useCheckout from "@/hooks/useCheckout";
import FormattedPrice from "@/lib/formatPrice";
import useCart from "@/hooks/useCart";
import { cartType, productType } from "@/types";
import CheckoutBanner from "./CheckoutBanner";

interface CartItemProps {
  item: cartType;
  removeFromCart: (item: cartType) => void;
}

function CartItem({ item, removeFromCart }: CartItemProps) {
  return (
    <div className="d-sm-flex justify-content-between align-items-center my-2 pb-3 border-bottom">
      <div className="d-block d-sm-flex align-items-center text-center text-sm-start">
        <Link href={`/products/${item.product.slug}`} passHref>
          <a className="d-inline-block flex-shrink-0 mx-auto me-sm-4">
            <img
              src={item.product.images[0].file.url}
              alt={item.product.name}
              width="160"
            />
          </a>
        </Link>
        <div className="pt-2">
          <h3 className="product-title fs-base mb-2">
            <Link href={`/products/${item.product.slug}`} passHref>
              <a>{item.product.name}</a>
            </Link>
          </h3>
          <div className="fs-sm">
            <span className="text-muted me-2">Size:</span>
            8.5
          </div>
          <div className="fs-sm">
            <span className="text-muted me-2">Color:</span>
            White &amp; Blue
          </div>
          <div className="fs-lg text-accent pt-2">
            <FormattedPrice price={item.price} />
          </div>
        </div>
      </div>
      <div
        className="pt-2 pt-sm-0 ps-sm-3 mx-auto mx-sm-0 text-center text-sm-start"
        style={{ maxWidth: "9rem" }}
      >
        <label className="form-label" htmlFor="quantity1">
          Quantity
        </label>
        <input
          className="form-control"
          type="number"
          id="quantity1"
          min="1"
          value={item.quantity}
        />
        <button
          onClick={() => removeFromCart(item)}
          className="btn btn-link px-0 text-danger"
          type="button"
        >
          <i className="ci-close-circle me-2"></i>
          <span className="fs-sm">Remove</span>
        </button>
      </div>
    </div>
  );
}

export default function Cart() {
  const { updateCheckoutHandler } = useCheckout();
  const { cart, removeFromCart }: any = useCart();
  return (
    <main className="page-wrapper">
      <CheckoutBanner title="Your cart" breadcrumb="Cart" />
      <div className="container pb-5 mb-2 mb-md-4">
        <div className="row">
          {/*<!-- List of items-->*/}
          <section className="col-lg-8">
            <div className="d-flex justify-content-between align-items-center pt-3 pb-4 pb-sm-5 mt-1">
              <h2 className="h6 text-light mb-0">Products</h2>
              <Link href="/shop" passHref>
                <a className="btn btn-outline-primary btn-sm ps-2">
                  <i className="ci-arrow-left me-2"></i>
                  Continue shopping
                </a>
              </Link>
            </div>
            {cart ? (
              cart?.items.map((item: any) => (
                <CartItem
                  key={item.productId}
                  removeFromCart={removeFromCart}
                  item={item}
                />
              ))
            ) : (
              <p>Cart is empty </p>
            )}
          </section>
          {/*<!-- Sidebar-->*/}
          <aside className="col-lg-4 pt-4 pt-lg-0 ps-xl-5">
            <div className="bg-white rounded-3 shadow-lg p-4">
              <div className="py-2 px-xl-2">
                <div className="text-center mb-4 pb-3 border-bottom">
                  <h2 className="h6 mb-3 pb-1">Subtotal</h2>
                  <h3 className="fw-normal">
                    <FormattedPrice price={cart.subTotal} />
                  </h3>
                </div>
                <div className="mb-3 mb-4">
                  <label className="form-label mb-3" htmlFor="order-comments">
                    <span className="badge bg-info fs-xs me-2">Note</span>
                    <span className="fw-medium">Additional comments</span>
                  </label>
                  <textarea
                    className="form-control"
                    rows={6}
                    id="order-comments"
                  ></textarea>
                </div>
                <div className="accordion" id="order-options">
                  <div className="accordion-item">
                    <h3 className="accordion-header">
                      <a
                        className="accordion-button"
                        href="#promo-code"
                        role="button"
                        data-bs-toggle="collapse"
                        aria-expanded="true"
                        aria-controls="promo-code"
                      >
                        Apply promo code
                      </a>
                    </h3>
                    <div
                      className="accordion-collapse collapse show"
                      id="promo-code"
                      data-bs-parent="#order-options"
                    >
                      <form
                        className="accordion-body needs-validation"
                        method="post"
                        noValidate
                      >
                        <div className="mb-3">
                          <input
                            className="form-control"
                            type="text"
                            placeholder="Promo code"
                            required
                          />
                          <div className="invalid-feedback">
                            Please provide promo code.
                          </div>
                        </div>
                        <button
                          className="btn btn-outline-primary d-block w-100"
                          type="submit"
                        >
                          Apply promo code
                        </button>
                      </form>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h3 className="accordion-header">
                      <a
                        className="accordion-button collapsed"
                        href="#shipping-estimates"
                        role="button"
                        data-bs-toggle="collapse"
                        aria-expanded="true"
                        aria-controls="shipping-estimates"
                      >
                        Shipping estimates
                      </a>
                    </h3>
                    <div
                      className="accordion-collapse collapse"
                      id="shipping-estimates"
                      data-bs-parent="#order-options"
                    >
                      <div className="accordion-body">
                        <form className="needs-validation" noValidate>
                          <div className="mb-3">
                            <select className="form-select" required>
                              <option value="">Choose your country</option>
                              <option value="Australia">Australia</option>
                              <option value="Belgium">Belgium</option>
                              <option value="Canada">Canada</option>
                              <option value="Finland">Finland</option>
                              <option value="Mexico">Mexico</option>
                              <option value="New Zealand">New Zealand</option>
                              <option value="Switzerland">Switzerland</option>
                              <option value="United States">
                                United States
                              </option>
                            </select>
                            <div className="invalid-feedback">
                              Please choose your country!
                            </div>
                          </div>
                          <div className="mb-3">
                            <select className="form-select" required>
                              <option value="">Choose your city</option>
                              <option value="Bern">Bern</option>
                              <option value="Brussels">Brussels</option>
                              <option value="Canberra">Canberra</option>
                              <option value="Helsinki">Helsinki</option>
                              <option value="Mexico City">Mexico City</option>
                              <option value="Ottawa">Ottawa</option>
                              <option value="Washington D.C.">
                                Washington D.C.
                              </option>
                              <option value="Wellington">Wellington</option>
                            </select>
                            <div className="invalid-feedback">
                              Please choose your city!
                            </div>
                          </div>
                          <div className="mb-3">
                            <input
                              className="form-control"
                              type="text"
                              placeholder="ZIP / Postal code"
                              required
                            />
                            <div className="invalid-feedback">
                              Please provide a valid zip!
                            </div>
                          </div>
                          <button
                            className="btn btn-outline-primary d-block w-100"
                            type="button"
                          >
                            Calculate shipping
                          </button>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
                <a
                  onClick={() => updateCheckoutHandler("details")}
                  className="btn btn-primary btn-shadow d-block w-100 mt-4"
                >
                  <i className="ci-card fs-lg me-2"></i>
                  Proceed to Checkout
                </a>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}
