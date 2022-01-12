/* eslint-disable @next/next/no-img-element */

export default function PartnerOutlet() {
  return (
    <section className="container pt-4 mt-md-4 mb-5">
      <h2 className="h3 text-center mb-3">Partner outlet stores</h2>
      <div className="row pt-4">
        <div className="col-md-4 col-sm-6 mb-grid-gutter">
          <div className="card border-0 shadow">
            <img
              className="card-img-top"
              src="/img/contacts/orlando.jpg"
              alt="Orlando"
            />
            <div className="card-body">
              <h6>Orlando, USA</h6>
              <ul className="list-unstyled mb-0">
                <li className="d-flex pb-3 border-bottom">
                  <i className="ci-location fs-lg mt-2 mb-0 text-primary"></i>
                  <div className="ps-3">
                    <span className="fs-ms text-muted">Find us</span>
                    <a className="d-block text-heading fs-sm" href="#">
                      514 S. Magnolia St. Orlando, FL 32806, USA
                    </a>
                  </div>
                </li>
                <li className="d-flex pt-2 pb-3 border-bottom">
                  <i className="ci-phone fs-lg mt-2 mb-0 text-primary"></i>
                  <div className="ps-3">
                    <span className="fs-ms text-muted">Call us</span>
                    <a
                      className="d-block text-heading fs-sm"
                      href="tel:+178632256040"
                    >
                      +1 (786) 322 560 40
                    </a>
                  </div>
                </li>
                <li className="d-flex pt-2">
                  <i className="ci-mail fs-lg mt-2 mb-0 text-primary"></i>
                  <div className="ps-3">
                    <span className="fs-ms text-muted">Write us</span>
                    <a
                      className="d-block text-heading fs-sm"
                      href="mailto:orlando@example.com"
                    >
                      orlando@example.com
                    </a>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-md-4 col-sm-6 mb-grid-gutter">
          <div className="card border-0 shadow">
            <img
              className="card-img-top"
              src="/img/contacts/chicago.jpg"
              alt="Chicago"
            />
            <div className="card-body">
              <h6>Chicago, USA</h6>
              <ul className="list-unstyled mb-0">
                <li className="d-flex pb-3 border-bottom">
                  <i className="ci-location fs-lg mt-2 mb-0 text-primary"></i>
                  <div className="ps-3">
                    <span className="fs-ms text-muted">Find us</span>
                    <a className="d-block text-heading fs-sm" href="#">
                      769, Industrial, West Chicago, IL 60185, USA
                    </a>
                  </div>
                </li>
                <li className="d-flex pt-2 pb-3 border-bottom">
                  <i className="ci-phone fs-lg mt-2 mb-0 text-primary"></i>
                  <div className="ps-3">
                    <span className="fs-ms text-muted">Call us</span>
                    <a
                      className="d-block text-heading fs-sm"
                      href="tel:+184725276533"
                    >
                      +1 (847) 252 765 33
                    </a>
                  </div>
                </li>
                <li className="d-flex pt-2">
                  <i className="ci-mail fs-lg mt-2 mb-0 text-primary"></i>
                  <div className="ps-3">
                    <span className="fs-ms text-muted">Write us</span>
                    <a
                      className="d-block text-heading fs-sm"
                      href="mailto:chicago@example.com"
                    >
                      chicago@example.com
                    </a>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-md-4 col-sm-12 mb-grid-gutter">
          <div className="card border-0 shadow">
            <img
              className="card-img-top"
              src="/img/contacts/newyork.jpg"
              alt="New York"
            />
            <div className="card-body">
              <h6>New York, USA</h6>
              <ul className="list-unstyled mb-0">
                <li className="d-flex pb-3 border-bottom">
                  <i className="ci-location fs-lg mt-2 mb-0 text-primary"></i>
                  <div className="ps-3">
                    <span className="fs-ms text-muted">Find us</span>
                    <a className="d-block text-heading fs-sm" href="#">
                      396 Lillian Blvd, Holbrook, NY 11741, USA
                    </a>
                  </div>
                </li>
                <li className="d-flex pt-2 pb-3 border-bottom">
                  <i className="ci-phone fs-lg mt-2 mb-0 text-primary"></i>
                  <div className="ps-3">
                    <span className="fs-ms text-muted">Call us</span>
                    <a
                      className="d-block text-heading fs-sm"
                      href="tel:+1212477690000"
                    >
                      +1 (212) 477 690 000
                    </a>
                  </div>
                </li>
                <li className="d-flex pt-2">
                  <i className="ci-mail fs-lg mt-2 mb-0 text-primary"></i>
                  <div className="ps-3">
                    <span className="fs-ms text-muted">Write us</span>
                    <a
                      className="d-block text-heading fs-sm"
                      href="mailto:newyork@example.com"
                    >
                      newyork@example.com
                    </a>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
