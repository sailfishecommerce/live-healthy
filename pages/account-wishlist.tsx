/* eslint-disable @next/next/no-img-element */
import Link from "next/link";

import Applayout from "@/layout/Applayout";

export default function AccountWishlist() {
  return (
    <Applayout title="Your Wishlist">
      {/*<!-- Page Title-->*/}
      <div className="page-title-overlap bg-dark pt-4">
        <div className="container d-lg-flex justify-content-between py-2 py-lg-3">
          <div className="order-lg-2 mb-3 mb-lg-0 pt-lg-2">
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb breadcrumb-light flex-lg-nowrap justify-content-center justify-content-lg-start">
                <li className="breadcrumb-item">
                  <a className="text-nowrap" href="index">
                    <i className="ci-home"></i>Home
                  </a>
                </li>
                <li className="breadcrumb-item text-nowrap">
                  <a href="#">Account</a>
                </li>
                <li
                  className="breadcrumb-item text-nowrap active"
                  aria-current="page"
                >
                  Wishlist
                </li>
              </ol>
            </nav>
          </div>
          <div className="order-lg-1 pe-lg-4 text-center text-lg-start">
            <h1 className="h3 text-light mb-0">My wishlist</h1>
          </div>
        </div>
      </div>
      <div className="container pb-5 mb-2 mb-md-4">
        <div className="row">
          {/*<!-- Sidebar-->*/}
          <aside className="col-lg-4 pt-4 pt-lg-0 pe-xl-5">
            <div className="bg-white rounded-3 shadow-lg pt-1 mb-5 mb-lg-0">
              <div className="d-md-flex justify-content-between align-items-center text-center text-md-start p-4">
                <div className="d-md-flex align-items-center">
                  <div
                    className="img-thumbnail rounded-circle position-relative flex-shrink-0 mx-auto mb-2 mx-md-0 mb-md-0"
                    style={{ width: "6.375rem" }}
                  >
                    <span
                      className="badge bg-warning position-absolute end-0 mt-n2"
                      data-bs-toggle="tooltip"
                      title="Reward points"
                    >
                      384
                    </span>
                    <img
                      className="rounded-circle"
                      src="/img/shop/account/avatar.jpg"
                      alt="Susan Gardner"
                    />
                  </div>
                  <div className="ps-md-3">
                    <h3 className="fs-base mb-0">Susan Gardner</h3>
                    <span className="text-accent fs-sm">
                      s.gardner@example.com
                    </span>
                  </div>
                </div>
                <a
                  className="btn btn-primary d-lg-none mb-2 mt-3 mt-md-0"
                  href="#account-menu"
                  data-bs-toggle="collapse"
                  aria-expanded="false"
                >
                  <i className="ci-menu me-2"></i>Account menu
                </a>
              </div>
              <div className="d-lg-block collapse" id="account-menu">
                <div className="bg-secondary px-4 py-3">
                  <h3 className="fs-sm mb-0 text-muted">Dashboard</h3>
                </div>
                <ul className="list-unstyled mb-0">
                  <li className="border-bottom mb-0">
                    <Link href="/account-orders" passHref>
                      <a className="nav-link-style d-flex align-items-center px-4 py-3">
                        <i className="ci-bag opacity-60 me-2"></i>
                        Orders
                        <span className="fs-sm text-muted ms-auto">1</span>
                      </a>
                    </Link>
                  </li>
                  <li className="border-bottom mb-0">
                    <a
                      className="nav-link-style d-flex align-items-center px-4 py-3 active"
                      href="account-wishlist"
                    >
                      <i className="ci-heart opacity-60 me-2"></i>
                      Wishlist
                      <span className="fs-sm text-muted ms-auto">3</span>
                    </a>
                  </li>
                  <li className="mb-0">
                    <Link href="/account-tickets" passHref>
                      <a className="nav-link-style d-flex align-items-center px-4 py-3">
                        <i className="ci-help opacity-60 me-2"></i>
                        Support tickets
                        <span className="fs-sm text-muted ms-auto">1</span>
                      </a>
                    </Link>
                  </li>
                </ul>
                <div className="bg-secondary px-4 py-3">
                  <h3 className="fs-sm mb-0 text-muted">Account settings</h3>
                </div>
                <ul className="list-unstyled mb-0">
                  <li className="border-bottom mb-0">
                    <Link href="/account-profile" passHref>
                      <a className="nav-link-style d-flex align-items-center px-4 py-3">
                        <i className="ci-user opacity-60 me-2"></i>
                        Profile info
                      </a>
                    </Link>
                  </li>
                  <li className="border-bottom mb-0">
                    <a
                      className="nav-link-style d-flex align-items-center px-4 py-3"
                      href="account-address"
                    >
                      <i className="ci-location opacity-60 me-2"></i>
                      Addresses
                    </a>
                  </li>
                  <li className="mb-0">
                    <Link href="/account-payment" passHref>
                      <a className="nav-link-style d-flex align-items-center px-4 py-3">
                        <i className="ci-card opacity-60 me-2"></i>
                        Payment methods
                      </a>
                    </Link>
                  </li>
                  <li className="d-lg-none border-top mb-0">
                    <Link href="/account-signin" passHref>
                      <a className="nav-link-style d-flex align-items-center px-4 py-3">
                        <i className="ci-sign-out opacity-60 me-2"></i>
                        Sign out
                      </a>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </aside>
          {/*<!-- Content  -->*/}
          <section className="col-lg-8">
            {/*<!-- Toolbar-->*/}
            <div className="d-none d-lg-flex justify-content-between align-items-center pt-lg-3 pb-4 pb-lg-5 mb-lg-3">
              <h6 className="fs-base text-light mb-0">
                List of items you added to wishlist:
              </h6>
              <Link href="/account-signin" passHref>
                <a className="btn btn-primary btn-sm">
                  <i className="ci-sign-out me-2"></i>Sign out
                </a>
              </Link>
            </div>
            {/*<!-- Wishlist-->*/}
            {/*<!-- Item-->*/}
            <div className="d-sm-flex justify-content-between mt-lg-4 mb-4 pb-3 pb-sm-2 border-bottom">
              <div className="d-block d-sm-flex align-items-start text-center text-sm-start">
                <Link href="/shop-single-v1" passHref>
                  <a
                    className="d-block flex-shrink-0 mx-auto me-sm-4"
                    style={{ width: "10rem" }}
                  >
                    <img src="/img/shop/cart/02.jpg" alt="Product" />
                  </a>
                </Link>
                <div className="pt-2">
                  <h3 className="product-title fs-base mb-2">
                    <Link href="/shop-single-v1" passHref>
                      <a>TH Jeans City Backpack</a>
                    </Link>
                  </h3>
                  <div className="fs-sm">
                    <span className="text-muted me-2">Brand:</span>
                    Tommy Hilfiger
                  </div>
                  <div className="fs-sm">
                    <span className="text-muted me-2">Color:</span>
                    Khaki
                  </div>
                  <div className="fs-lg text-accent pt-2">
                    $79.<small>50</small>
                  </div>
                </div>
              </div>
              <div className="pt-2 ps-sm-3 mx-auto mx-sm-0 text-center">
                <button className="btn btn-outline-danger btn-sm" type="button">
                  <i className="ci-trash me-2"></i>Remove
                </button>
              </div>
            </div>
            {/*<!-- Item-->*/}
            <div className="d-sm-flex justify-content-between my-4 pb-3 pb-sm-2 border-bottom">
              <div className="d-block d-sm-flex align-items-start text-center text-sm-start">
                <Link href="/shop-single-v1" passHref>
                  <a
                    className="d-block flex-shrink-0 mx-auto me-sm-4"
                    style={{ width: "10rem" }}
                  >
                    <img src="/img/shop/cart/03.jpg" alt="Product" />
                  </a>
                </Link>
                <div className="pt-2">
                  <h3 className="product-title fs-base mb-2">
                    <Link href="/shop-single-v1" passHref>
                      <a>3-Color Sun Stash Hat</a>
                    </Link>
                  </h3>
                  <div className="fs-sm">
                    <span className="text-muted me-2">Brand:</span>
                    The North Face
                  </div>
                  <div className="fs-sm">
                    <span className="text-muted me-2">Color:</span>
                    Pink / Beige / Dark blue
                  </div>
                  <div className="fs-lg text-accent pt-2">
                    $22.<small>50</small>
                  </div>
                </div>
              </div>
              <div className="pt-2 ps-sm-3 mx-auto mx-sm-0 text-center">
                <button className="btn btn-outline-danger btn-sm" type="button">
                  <i className="ci-trash me-2"></i>Remove
                </button>
              </div>
            </div>
            {/*<!-- Item-->*/}
            <div className="d-sm-flex justify-content-between mt-4">
              <div className="d-block d-sm-flex align-items-start text-center text-sm-start">
                <Link href="/shop-single-v1" passHref>
                  <a
                    className="d-block flex-shrink-0 mx-auto me-sm-4"
                    style={{ width: "10rem" }}
                  >
                    <img src="/img/shop/cart/04.jpg" alt="Product" />
                  </a>
                </Link>
                <div className="pt-2">
                  <h3 className="product-title fs-base mb-2">
                    <Link href="/shop-single-v1" passHref>
                      <a>Cotton Polo Regular Fit</a>
                    </Link>
                  </h3>
                  <div className="fs-sm">
                    <span className="text-muted me-2">Size:</span>
                    42
                  </div>
                  <div className="fs-sm">
                    <span className="text-muted me-2">Color:</span>
                    Light blue
                  </div>
                  <div className="fs-lg text-accent pt-2">
                    $9.<small>00</small>
                  </div>
                </div>
              </div>
              <div className="pt-2 ps-sm-3 mx-auto mx-sm-0 text-center">
                <button className="btn btn-outline-danger btn-sm" type="button">
                  <i className="ci-trash me-2"></i>Remove
                </button>
              </div>
            </div>
          </section>
        </div>
      </div>
    </Applayout>
  );
}
