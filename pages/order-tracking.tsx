import Link from "next/link";
import Applayout from "@/layout/Applayout";

export default function OrderTracking() {
  return (
    <Applayout title="Track your order">
      <div className="bg-dark py-4">
        <div className="container d-lg-flex justify-content-between py-2 py-lg-3">
          <div className="order-lg-2 mb-3 mb-lg-0 pt-lg-2">
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb breadcrumb-light flex-lg-nowrap justify-content-center justify-content-lg-start">
                <li className="breadcrumb-item">
                  <Link href="/" passHref>
                    <a className="text-nowrap">
                      <i className="ci-home"></i>Home
                    </a>
                  </Link>
                </li>
                <li className="breadcrumb-item text-nowrap">
                  <a href="#">Shop</a>
                </li>
                <li
                  className="breadcrumb-item text-nowrap active"
                  aria-current="page"
                >
                  Order tracking
                </li>
              </ol>
            </nav>
          </div>
          <div className="order-lg-1 pe-lg-4 text-center text-lg-start">
            <h1 className="h3 text-light mb-0">
              Tracking order:{" "}
              <span className="h4 fw-normal text-light">34VB5540K83</span>
            </h1>
          </div>
        </div>
      </div>
      <div className="container py-5 mb-2 mb-md-3">
        {/*<!-- Details-->*/}
        <div className="row gx-4 mb-4">
          <div className="col-md-4 mb-2">
            <div className="bg-secondary h-100 p-4 text-center rounded-3">
              <span className="fw-medium text-dark me-2">Shipped via:</span>
              UPS Ground
            </div>
          </div>
          <div className="col-md-4 mb-2">
            <div className="bg-secondary h-100 p-4 text-center rounded-3">
              <span className="fw-medium text-dark me-2">Status:</span>
              Processing order
            </div>
          </div>
          <div className="col-md-4 mb-2">
            <div className="bg-secondary h-100 p-4 text-center rounded-3">
              <span className="fw-medium text-dark me-2">Expected date:</span>
              October 15, 2019
            </div>
          </div>
        </div>
        {/*<!-- Progress-->*/}
        <div className="card border-0 shadow-lg">
          <div className="card-body pb-2">
            <ul className="nav nav-tabs media-tabs nav-justified">
              <li className="nav-item">
                <div className="nav-link completed">
                  <div className="d-flex align-items-center">
                    <div className="media-tab-media">
                      <i className="ci-bag"></i>
                    </div>
                    <div className="ps-3">
                      <div className="media-tab-subtitle text-muted fs-xs mb-1">
                        First step
                      </div>
                      <h6 className="media-tab-title text-nowrap mb-0">
                        Order placed
                      </h6>
                    </div>
                  </div>
                </div>
              </li>
              <li className="nav-item">
                <div className="nav-link active">
                  <div className="d-flex align-items-center">
                    <div className="media-tab-media">
                      <i className="ci-settings"></i>
                    </div>
                    <div className="ps-3">
                      <div className="media-tab-subtitle text-muted fs-xs mb-1">
                        Second step
                      </div>
                      <h6 className="media-tab-title text-nowrap mb-0">
                        Processing order
                      </h6>
                    </div>
                  </div>
                </div>
              </li>
              <li className="nav-item">
                <div className="nav-link">
                  <div className="d-flex align-items-center">
                    <div className="media-tab-media">
                      <i className="ci-star"></i>
                    </div>
                    <div className="ps-3">
                      <div className="media-tab-subtitle text-muted fs-xs mb-1">
                        Third step
                      </div>
                      <h6 className="media-tab-title text-nowrap mb-0">
                        Quality check
                      </h6>
                    </div>
                  </div>
                </div>
              </li>
              <li className="nav-item">
                <div className="nav-link">
                  <div className="d-flex align-items-center">
                    <div className="media-tab-media">
                      <i className="ci-package"></i>
                    </div>
                    <div className="ps-3">
                      <div className="media-tab-subtitle text-muted fs-xs mb-1">
                        Fourth step
                      </div>
                      <h6 className="media-tab-title text-nowrap mb-0">
                        Product dispatched
                      </h6>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="d-sm-flex flex-wrap justify-content-between align-items-center text-center pt-4">
          <div className="form-check mt-2 me-3">
            <input
              className="form-check-input"
              type="checkbox"
              id="notify-me"
              checked
            />
            <label className="form-check-label" htmlFor="notify-me">
              Notify me when order is delivered
            </label>
          </div>
          <a
            className="btn btn-primary btn-sm mt-2"
            href="#order-details"
            data-bs-toggle="modal"
          >
            View Order Details
          </a>
        </div>
      </div>
    </Applayout>
  );
}
