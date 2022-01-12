/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import dynamic from "next/dynamic";
import Applayout from "@/layout/Applayout";

const DynamicContactMap = dynamic(() => import("../components/ContactMap"));
const DynamicContactForm = dynamic(() => import("../components/ContactForm"));
const DynamicPartnerOutlet = dynamic(
  () => import("../components/PartnerOutlet")
);

export default function ContactUs() {
  return (
    <Applayout title="Contact us">
      <div className="bg-secondary py-4">
        <div className="container d-lg-flex justify-content-between py-2 py-lg-3">
          <div className="order-lg-2 mb-3 mb-lg-0 pt-lg-2">
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb flex-lg-nowrap justify-content-center justify-content-lg-start">
                <li className="breadcrumb-item">
                  <Link href="/" passHref>
                    <a className="text-nowrap">
                      <i className="ci-home"></i>Home
                    </a>
                  </Link>
                </li>
                <li
                  className="breadcrumb-item text-nowrap active"
                  aria-current="page"
                >
                  Contacts
                </li>
              </ol>
            </nav>
          </div>
          <div className="order-lg-1 pe-lg-4 text-center text-lg-start">
            <h1 className="h3 mb-0">Contacts</h1>
          </div>
        </div>
      </div>
      {/*<!-- Contact detail cards-->*/}
      <section className="container-fluid pt-grid-gutter">
        <div className="row">
          <div className="col-xl-3 col-sm-6 mb-grid-gutter">
            <a className="card h-100" href="#map" data-scroll>
              <div className="card-body text-center">
                <i className="ci-location h3 mt-2 mb-4 text-primary"></i>
                <h3 className="h6 mb-2">Main store address</h3>
                <p className="fs-sm text-muted">
                  396 Lillian Blvd, Holbrook, NY 11741, USA
                </p>
                <div className="fs-sm text-primary">
                  Click to see map
                  <i className="ci-arrow-right align-middle ms-1"></i>
                </div>
              </div>
            </a>
          </div>
          <div className="col-xl-3 col-sm-6 mb-grid-gutter">
            <div className="card h-100">
              <div className="card-body text-center">
                <i className="ci-time h3 mt-2 mb-4 text-primary"></i>
                <h3 className="h6 mb-3">Working hours</h3>
                <ul className="list-unstyled fs-sm text-muted mb-0">
                  <li>Mon - Fri: 10AM - 7PM</li>
                  <li className="mb-0">Sta: 11AM - 5PM</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-sm-6 mb-grid-gutter">
            <div className="card h-100">
              <div className="card-body text-center">
                <i className="ci-phone h3 mt-2 mb-4 text-primary"></i>
                <h3 className="h6 mb-3">Phone numbers</h3>
                <ul className="list-unstyled fs-sm mb-0">
                  <li>
                    <span className="text-muted me-1">For customers:</span>
                    <a className="nav-link-style" href="tel:+108044357260">
                      +1 (080) 44 357 260
                    </a>
                  </li>
                  <li className="mb-0">
                    <span className="text-muted me-1">Tech support:</span>
                    <a className="nav-link-style" href="tel:+100331697720">
                      +1 00 33 169 7720
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-sm-6 mb-grid-gutter">
            <div className="card h-100">
              <div className="card-body text-center">
                <i className="ci-mail h3 mt-2 mb-4 text-primary"></i>
                <h3 className="h6 mb-3">Email addresses</h3>
                <ul className="list-unstyled fs-sm mb-0">
                  <li>
                    <span className="text-muted me-1">For customers:</span>
                    <a className="nav-link-style" href="mailto:+108044357260">
                      customer@example.com
                    </a>
                  </li>
                  <li className="mb-0">
                    <span className="text-muted me-1">Tech support:</span>
                    <a
                      className="nav-link-style"
                      href="mailto:support@example.com"
                    >
                      support@example.com
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <DynamicPartnerOutlet />
      <div className="container-fluid px-0" id="map">
        <div className="row g-0">
          <DynamicContactMap />
          <DynamicContactForm />
        </div>
      </div>
    </Applayout>
  );
}
