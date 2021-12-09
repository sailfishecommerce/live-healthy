/* eslint-disable @next/next/no-img-element */
import CheckoutStep from "@/components/CheckoutStep";
import useCheckout from "@/hooks/useCheckout";
import CheckoutBanner from "./CheckoutBanner";
import useCart from "@/hooks/useCart";
import CheckoutSidebar from "@/components/CheckoutSidebar";

export default function CheckoutShipping() {
  const { updateCheckoutHandler } = useCheckout();
  const { cart } = useCart();
  return (
    <div>
      <CheckoutBanner title="Checkout" breadcrumb="Checkout" />
      <div className="container pb-5 mb-2 mb-md-4">
        <div className="row">
          <section className="col-lg-8">
            <CheckoutStep />
            {/*<!-- Shipping methods table-->*/}
            <h2 className="h6 pb-3 mb-2">Choose shipping method</h2>
            <div className="table-responsive">
              <table className="table table-hover fs-sm border-top">
                <thead>
                  <tr>
                    <th className="align-middle"></th>
                    <th className="align-middle">Shipping method</th>
                    <th className="align-middle">Delivery time</th>
                    <th className="align-middle">Handling fee</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <div className="form-check mb-4">
                        <input
                          className="form-check-input"
                          type="radio"
                          id="courier"
                          name="shipping-method"
                          checked
                        />
                        <label
                          className="form-check-label"
                          htmlFor="courier"
                        ></label>
                      </div>
                    </td>
                    <td className="align-middle">
                      <span className="text-dark fw-medium">Courier</span>
                      <br />
                      <span className="text-muted">
                        All addresses (default zone), United States &amp; Canada
                      </span>
                    </td>
                    <td className="align-middle">2 - 4 days</td>
                    <td className="align-middle">$26.50</td>
                  </tr>
                  <tr>
                    <td>
                      <div className="form-check mb-4">
                        <input
                          className="form-check-input"
                          type="radio"
                          id="local"
                          name="shipping-method"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="local"
                        ></label>
                      </div>
                    </td>
                    <td className="align-middle">
                      <span className="text-dark fw-medium">
                        Local Shipping
                      </span>
                      <br />
                      <span className="text-muted">
                        All addresses (default zone), United States &amp; Canada
                      </span>
                    </td>
                    <td className="align-middle">up to one week</td>
                    <td className="align-middle">$10.00</td>
                  </tr>
                  <tr>
                    <td>
                      <div className="form-check mb-4">
                        <input
                          className="form-check-input"
                          type="radio"
                          id="flat"
                          name="shipping-method"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="flat"
                        ></label>
                      </div>
                    </td>
                    <td className="align-middle">
                      <span className="text-dark fw-medium">Flat Rate</span>
                      <br />
                      <span className="text-muted">
                        All addresses (default zone)
                      </span>
                    </td>
                    <td className="align-middle">5 - 7 days</td>
                    <td className="align-middle">$33.85</td>
                  </tr>
                  <tr>
                    <td>
                      <div className="form-check mb-4">
                        <input
                          className="form-check-input"
                          type="radio"
                          id="ups"
                          name="shipping-method"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="ups"
                        ></label>
                      </div>
                    </td>
                    <td className="align-middle">
                      <span className="text-dark fw-medium">
                        UPS Ground Shipping
                      </span>
                      <br />
                      <span className="text-muted">
                        All addresses (default zone)
                      </span>
                    </td>
                    <td className="align-middle">4 - 6 days</td>
                    <td className="align-middle">$18.00</td>
                  </tr>
                  <tr>
                    <td>
                      <div className="form-check mb-4">
                        <input
                          className="form-check-input"
                          type="radio"
                          id="pickup"
                          name="shipping-method"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="pickup"
                        ></label>
                      </div>
                    </td>
                    <td className="align-middle">
                      <span className="text-dark fw-medium">
                        Local Pickup from store
                      </span>
                      <br />
                      <span className="text-muted">
                        All addresses (default zone)
                      </span>
                    </td>
                    <td className="align-middle">&mdash;</td>
                    <td className="align-middle">$0.00</td>
                  </tr>
                  <tr>
                    <td>
                      <div className="form-check mb-4">
                        <input
                          className="form-check-input"
                          type="radio"
                          id="locker"
                          name="shipping-method"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="locker"
                        ></label>
                      </div>
                    </td>
                    <td className="align-middle">
                      <span className="text-dark fw-medium">
                        Pick Up at Bandicoot Locker
                      </span>
                      <br />
                      <span className="text-muted">
                        All addresses (default zone), United States &amp; Canada
                      </span>
                    </td>
                    <td className="align-middle">&mdash;</td>
                    <td className="align-middle">$9.99</td>
                  </tr>
                  <tr>
                    <td>
                      <div className="form-check mb-4">
                        <input
                          className="form-check-input"
                          type="radio"
                          id="global-export"
                          name="shipping-method"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="global-export"
                        ></label>
                      </div>
                    </td>
                    <td className="align-middle">
                      <span className="text-dark fw-medium">
                        Bandicoot Global Export
                      </span>
                      <br />
                      <span className="text-muted fs-sm">
                        All addresses (default zone), outside United States
                      </span>
                    </td>
                    <td className="align-middle">3 - 4 days</td>
                    <td className="align-middle">$25.00</td>
                  </tr>
                  <tr>
                    <td>
                      <div className="form-check mb-4">
                        <input
                          className="form-check-input"
                          type="radio"
                          id="same-day"
                          name="shipping-method"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="same-day"
                        ></label>
                      </div>
                    </td>
                    <td className="align-middle">
                      <span className="text-dark fw-medium">
                        Same-Day Delivery
                      </span>
                      <br />
                      <span className="text-muted">Only United States</span>
                    </td>
                    <td className="align-middle">&mdash;</td>
                    <td className="align-middle">$34.00</td>
                  </tr>
                  <tr>
                    <td>
                      <div className="form-check mb-4">
                        <input
                          className="form-check-input"
                          type="radio"
                          id="international"
                          name="shipping-method"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="international"
                        ></label>
                      </div>
                    </td>
                    <td className="align-middle">
                      <span className="text-dark fw-medium">
                        International Shipping
                      </span>
                      <br />
                      <span className="text-muted">
                        All addresses (default zone)
                      </span>
                    </td>
                    <td className="align-middle">up to 15 days</td>
                    <td className="align-middle">$27.00</td>
                  </tr>
                </tbody>
              </table>
            </div>
            {/*<!-- Navigation (desktop)-->*/}
            <div className="d-none d-lg-flex pt-4">
              <div className="w-50 pe-3">
                <a
                  onClick={() => updateCheckoutHandler("details")}
                  className="btn btn-secondary d-block w-100"
                >
                  <i className="ci-arrow-left mt-sm-0 me-1"></i>
                  <span className="d-none d-sm-inline">Back to Adresses</span>
                  <span className="d-inline d-sm-none">Back</span>
                </a>
              </div>
              <div className="w-50 ps-2">
                <a
                  onClick={() => updateCheckoutHandler("payment")}
                  className="btn btn-primary d-block w-100"
                >
                  <span className="d-none d-sm-inline">Proceed to Payment</span>
                  <span className="d-inline d-sm-none">Next</span>
                  <i className="ci-arrow-right mt-sm-0 ms-1"></i>
                </a>
              </div>
            </div>
          </section>
          {/*<!-- Sidebar-->*/}
          <CheckoutSidebar cart={cart} />
        </div>
        {/*<!-- Navigation (mobile)-->*/}
        <div className="row d-lg-none">
          <div className="col-lg-8">
            <div className="d-flex pt-4 mt-3">
              <div className="w-50 pe-3">
                <a
                  onClick={() => updateCheckoutHandler("details")}
                  className="btn btn-secondary d-block w-100"
                >
                  <i className="ci-arrow-left mt-sm-0 me-1"></i>
                  <span className="d-none d-sm-inline">Back to Adresses</span>
                  <span className="d-inline d-sm-none">Back</span>
                </a>
              </div>
              <div className="w-50 ps-2">
                <a
                  onClick={() => updateCheckoutHandler("payment")}
                  className="btn btn-primary d-block w-100"
                >
                  <span className="d-none d-sm-inline">Proceed to Payment</span>
                  <span className="d-inline d-sm-none">Next</span>
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
