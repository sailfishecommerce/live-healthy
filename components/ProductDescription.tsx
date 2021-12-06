/* eslint-disable @next/next/no-img-element */
import { productType } from "../types";

interface Props {
  product: productType;
}

export default function ProductDescription({ product }: Props) {
  return (
    <div className="container">
      <div className="row align-items-center py-md-3">
        <div className="col-lg-5 col-md-6 offset-lg-1 order-md-2">
          <img
            className="d-block rounded-3"
            src="/img/shop/single/prod-img.jpg"
            alt="Image"
          />
        </div>
        <div className="col-lg-4 col-md-6 offset-lg-1 py-4 order-md-1">
          <h2 className="h3 mb-4 pb-2">Product description</h2>
          <h6 className="fs-base mb-3">{product.name}</h6>
          <p
            className="fs-sm text-muted pb-2"
            dangerouslySetInnerHTML={{
              __html: product["description"],
            }}
          />
          <h6 className="fs-base mb-3">Washing instructions</h6>
          <ul className="nav nav-tabs mb-3" role="tablist">
            <li className="nav-item">
              <a
                className="nav-link active"
                href="#wash"
                data-bs-toggle="tab"
                role="tab"
              >
                <i className="ci-wash fs-xl"></i>
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="#bleach"
                data-bs-toggle="tab"
                role="tab"
              >
                <i className="ci-bleach fs-xl"></i>
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="#hand-wash"
                data-bs-toggle="tab"
                role="tab"
              >
                <i className="ci-hand-wash fs-xl"></i>
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="#ironing"
                data-bs-toggle="tab"
                role="tab"
              >
                <i className="ci-ironing fs-xl"></i>
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="#dry-clean"
                data-bs-toggle="tab"
                role="tab"
              >
                <i className="ci-dry-clean fs-xl"></i>
              </a>
            </li>
          </ul>
          <div className="tab-content text-muted fs-sm">
            <div
              className="tab-pane fade show active"
              id="wash"
              role="tabpanel"
            >
              30° mild machine washing
            </div>
            <div className="tab-pane fade" id="bleach" role="tabpanel">
              Do not use any bleach
            </div>
            <div className="tab-pane fade" id="hand-wash" role="tabpanel">
              Hand wash normal (30°)
            </div>
            <div className="tab-pane fade" id="ironing" role="tabpanel">
              Low temperature ironing
            </div>
            <div className="tab-pane fade" id="dry-clean" role="tabpanel">
              Do not dry clean
            </div>
          </div>
        </div>
      </div>
      <div className="row align-items-center py-4 py-lg-5">
        <div className="col-lg-5 col-md-6 offset-lg-1">
          <img
            className="d-block rounded-3"
            src="/img/shop/single/prod-map.png"
            alt="Map"
          />
        </div>
        <div className="col-lg-4 col-md-6 offset-lg-1 py-4">
          <h2 className="h3 mb-4 pb-2">Where is it made?</h2>
          <h6 className="fs-base mb-3">Apparel Manufacturer, Ltd.</h6>
          <p className="fs-sm text-muted pb-2">
            ​Sam Tower, 6 Road No 32, Dhaka 1875, Bangladesh
          </p>
          <div className="d-flex mb-2">
            <div className="me-4 pe-2 text-center">
              <h4 className="h2 text-accent mb-1">3258</h4>
              <p>Workers</p>
            </div>
            <div className="me-4 pe-2 text-center">
              <h4 className="h2 text-accent mb-1">43%</h4>
              <p>Female</p>
            </div>
            <div className="text-center">
              <h4 className="h2 text-accent mb-1">57%</h4>
              <p>Male</p>
            </div>
          </div>
          <h6 className="fs-base mb-3">Factory information</h6>
          <p className="fs-sm text-muted pb-md-2">
            ​Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore.
          </p>
        </div>
      </div>
    </div>
  );
}
