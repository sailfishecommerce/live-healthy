/* eslint-disable @next/next/no-img-element */

import CurrencyLanguageDropdown from "@/components/CurrencyLanguageDropdown";

interface FooterBottomSectionProps {
  bottomSectionBgColor: string;
}

export default function FooterBottomSection({
  bottomSectionBgColor,
}: FooterBottomSectionProps) {
  return (
    <div style={{ backgroundColor: bottomSectionBgColor }} className="pt-5">
      <div className="container">
        <div className="row pb-3">
          <div className="col-md-3 col-sm-6 mb-4 icon-text">
            <div className="d-flex">
              <i
                className="ci-rocket text-primary"
                style={{ fontSize: "2.25rem" }}
              ></i>
              <div className="ps-3">
                <h6 className="fs-base text-light mb-1">
                  Fast and free delivery
                </h6>
                <p className="mb-0 fs-ms text-light opacity-50">
                  Free delivery for all orders over $200
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 mb-4 icon-text">
            <div className="d-flex">
              <i
                className="ci-currency-exchange text-primary"
                style={{ fontSize: "2.25rem" }}
              ></i>
              <div className="ps-3">
                <h6 className="fs-base text-light mb-1">
                  Money back guarantee
                </h6>
                <p className="mb-0 fs-ms text-light opacity-50">
                  We return money within 30 days
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 mb-4 icon-text">
            <div className="d-flex">
              <i
                className="ci-support text-primary"
                style={{ fontSize: "2.25rem" }}
              ></i>
              <div className="ps-3">
                <h6 className="fs-base text-light mb-1">
                  24/7 customer support
                </h6>
                <p className="mb-0 fs-ms text-light opacity-50">
                  Friendly 24/7 customer support
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 mb-4 icon-text">
            <div className="d-flex">
              <i
                className="ci-card text-primary"
                style={{ fontSize: "2.25rem" }}
              ></i>
              <div className="ps-3">
                <h6 className="fs-base text-light mb-1">
                  Secure online payment
                </h6>
                <p className="mb-0 fs-ms text-light opacity-50">
                  We possess SSL / Secure сertificate
                </p>
              </div>
            </div>
          </div>
        </div>
        <hr className="hr-light mb-5" />
        <div className="row pb-2">
          <div className="col-md-6 text-center text-md-start mb-4">
            <div className="text-nowrap mb-4 d-flex align-items-center">
              <a className="d-inline-block align-middle mt-n1 me-3" href="#">
                <img
                  className="d-block"
                  src="/logo.png"
                  width="117"
                  alt="Bandicoot"
                />
              </a>
              <CurrencyLanguageDropdown position="bottom" />
            </div>
            <div className="widget widget-links widget-light">
              <ul className="widget-list d-flex flex-wrap justify-content-center justify-content-md-start">
                <li className="widget-list-item me-4">
                  <a className="widget-list-link" href="#">
                    Outlets
                  </a>
                </li>
                <li className="widget-list-item me-4">
                  <a className="widget-list-link" href="#">
                    Affiliates
                  </a>
                </li>
                <li className="widget-list-item me-4">
                  <a className="widget-list-link" href="#">
                    Support
                  </a>
                </li>
                <li className="widget-list-item me-4">
                  <a className="widget-list-link" href="#">
                    Privacy
                  </a>
                </li>
                <li className="widget-list-item me-4">
                  <a className="widget-list-link" href="#">
                    Terms of use
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-6 text-center text-md-end mb-4">
            <div className="mb-3">
              <a className="btn-social bs-light bs-twitter ms-2 mb-2" href="#">
                <i className="ci-twitter"></i>
              </a>
              <a className="btn-social bs-light bs-facebook ms-2 mb-2" href="#">
                <i className="ci-facebook"></i>
              </a>
              <a
                className="btn-social bs-light bs-instagram ms-2 mb-2"
                href="#"
              >
                <i className="ci-instagram"></i>
              </a>
              <a
                className="btn-social bs-light bs-pinterest ms-2 mb-2"
                href="#"
              >
                <i className="ci-pinterest"></i>
              </a>
              <a className="btn-social bs-light bs-youtube ms-2 mb-2" href="#">
                <i className="ci-youtube"></i>
              </a>
            </div>
            <img
              className="d-inline-block"
              src="/img/cards-alt.png"
              width="187"
              alt="Payment methods"
            />
          </div>
        </div>
        <div className="pb-4 fs-xs text-light opacity-50 text-center text-md-start">
          © All rights reserved. Made by{" "}
          <a
            className="text-light"
            href="https://createx.studio/"
            target="_blank"
            rel="noreferrer"
          >
            Bandicoot Studio
          </a>
        </div>
      </div>
      <style jsx>
        {`
          .icon-text:hover i {
            transition: 0.9s;
            transform: rotateY(180deg);
          }
        `}
      </style>
    </div>
  );
}
