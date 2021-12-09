/* eslint-disable @next/next/no-img-element */
import CheckoutStep from "@/components/CheckoutStep";
import useCheckout from "@/hooks/useCheckout";
import useCart from "@/hooks/useCart";
import CheckoutSidebar from "@/components/CheckoutSidebar";
import CheckoutBanner from "./CheckoutBanner";

export default function CheckoutPayment() {
  const { updateCheckoutHandler } = useCheckout();
  const { cart } = useCart();

  return (
    <div>
      <CheckoutBanner title="Checkout" breadcrumb="Checkout" />
      <div className="container pb-5 mb-2 mb-md-4">
        <div className="row">
          <section className="col-lg-8">
            <CheckoutStep />
            <div>
              <h2 className="h6 pb-3 mb-2">Choose payment method</h2>
              <div className="accordion mb-2" id="payment-method">
                <div className="accordion-item">
                  <h3 className="accordion-header">
                    <a
                      className="accordion-button"
                      href="#card"
                      data-bs-toggle="collapse"
                    >
                      <i className="ci-card fs-lg me-2 mt-n1 align-middle"></i>
                      Pay with Credit Card
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
                      <div className="credit-card-wrapper"></div>
                      <form className="credit-card-form row">
                        <div className="mb-3 col-sm-6">
                          <input
                            className="form-control"
                            type="text"
                            name="number"
                            placeholder="Card Number"
                            required
                          />
                        </div>
                        <div className="mb-3 col-sm-6">
                          <input
                            className="form-control"
                            type="text"
                            name="name"
                            placeholder="Full Name"
                            required
                          />
                        </div>
                        <div className="mb-3 col-sm-3">
                          <input
                            className="form-control"
                            type="text"
                            name="expiry"
                            placeholder="MM/YY"
                            required
                          />
                        </div>
                        <div className="mb-3 col-sm-3">
                          <input
                            className="form-control"
                            type="text"
                            name="cvc"
                            placeholder="CVC"
                            required
                          />
                        </div>
                        <div className="col-sm-6">
                          <button
                            className="btn btn-outline-primary d-block w-100 mt-0"
                            type="submit"
                          >
                            Submit
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h3 className="accordion-header">
                    <a
                      className="accordion-button collapsed"
                      href="#paypal"
                      data-bs-toggle="collapse"
                    >
                      <i className="ci-paypal me-2 align-middle"></i>
                      Pay with PayPal
                    </a>
                  </h3>
                  <div
                    className="accordion-collapse collapse"
                    id="paypal"
                    data-bs-parent="#payment-method"
                  >
                    <div className="accordion-body fs-sm">
                      <p>
                        <span className="fw-medium">PayPal</span> - the safer,
                        easier way to pay
                      </p>
                      <form
                        className="row needs-validation"
                        method="post"
                        noValidate
                      >
                        <div className="col-sm-6">
                          <div className="mb-3">
                            <input
                              className="form-control"
                              type="email"
                              placeholder="E-mail"
                              required
                            />
                            <div className="invalid-feedback">
                              Please enter valid email address
                            </div>
                          </div>
                        </div>
                        <div className="col-sm-6">
                          <div className="mb-3">
                            <input
                              className="form-control"
                              type="password"
                              placeholder="Password"
                              required
                            />
                            <div className="invalid-feedback">
                              Please enter your password
                            </div>
                          </div>
                        </div>
                        <div className="col-12">
                          <div className="d-flex flex-wrap justify-content-between align-items-center">
                            <a className="nav-link-style" href="#">
                              Forgot password?
                            </a>
                            <button className="btn btn-primary" type="submit">
                              Log In
                            </button>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h3 className="accordion-header">
                    <a
                      className="accordion-button collapsed"
                      href="#points"
                      data-bs-toggle="collapse"
                    >
                      <i className="ci-gift me-2"></i>
                      Redeem Reward Points
                    </a>
                  </h3>
                  <div
                    className="accordion-collapse collapse"
                    id="points"
                    data-bs-parent="#payment-method"
                  >
                    <div className="accordion-body">
                      <p>
                        You currently have
                        <span className="fw-medium">&nbsp;384</span>
                        &nbsp;Reward Points to spend.
                      </p>
                      <div className="form-check d-block">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          id="use_points"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="use_points"
                        >
                          Use my Reward Points to pay for this order.
                        </label>
                      </div>
                    </div>
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
                    <span className="d-none d-sm-inline">Back to Shipping</span>
                    <span className="d-inline d-sm-none">Back</span>
                  </a>
                </div>
                <div className="w-50 ps-2">
                  <a
                    onClick={() => updateCheckoutHandler("review")}
                    className="btn btn-primary d-block w-100"
                  >
                    <span className="d-none d-sm-inline">
                      Review your order
                    </span>
                    <span className="d-inline d-sm-none">Review order</span>
                    <i className="ci-arrow-right mt-sm-0 ms-1"></i>
                  </a>
                </div>
              </div>
            </div>
          </section>
          <CheckoutSidebar cart={cart} />
        </div>
        {/*<!-- Navigation (mobile)-->*/}
        <div className="row d-lg-none">
          <div className="col-lg-8">
            <div className="d-flex pt-4 mt-3">
              <div className="w-50 pe-3">
                <a
                  onClick={() => updateCheckoutHandler("shipping")}
                  className="btn btn-secondary d-block w-100"
                >
                  <i className="ci-arrow-left mt-sm-0 me-1"></i>
                  <span className="d-none d-sm-inline">Back to Shipping</span>
                  <span className="d-inline d-sm-none">Back</span>
                </a>
              </div>
              <div className="w-50 ps-2">
                <a
                  onClick={() => updateCheckoutHandler("review")}
                  className="btn btn-primary d-block w-100"
                >
                  <span className="d-none d-sm-inline">Review your order</span>
                  <span className="d-inline d-sm-none">Review order</span>
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
