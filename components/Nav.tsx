/* eslint-disable @next/next/no-img-element */
import Link from "next/link";

import useCart from "@/hooks/useCart";
import HeaderCartDropdown from "./HeaderCartDropdown";
import { useAppDispatch, useAppSelector } from "@/hooks/useRedux";
import { toggleAuthModal, toggleSlideCart } from "@/redux/ui-slice";
import CategoryDropdown from "./NavDropdown";
import menuLink from "@/json/menu.json";
import { useAuth } from "@/hooks";
import SearchBar from "@/components/SearchBar";
import useScroll from "@/hooks/useScroll";
import useMediaQuery from "@/hooks/useMediaQuery";
import { useRouter } from "next/router";

interface NavProps {
  logo: any;
  navBgColor: string;
  local?: boolean;
}

export default function Nav({ local, logo, navBgColor }: NavProps) {
  const { cart, toggleCart }: any = useCart();
  const { authorized, userDetail }: any = useAppSelector((state) => state.auth);
  const { userLogout } = useAuth();
  const router = useRouter();
  const { scroll } = useScroll();
  const scrollUp = Number(scroll) > 400 ? true : false;
  const navStyle = scrollUp ? "navbar-sticky navbar-stuck" : "navbar-sticky";
  const dispatch = useAppDispatch();
  const tabWidth = useMediaQuery("(max-width:768px)");
  const largerDeviceWidth = useMediaQuery("(min-width:768px)");

  function toggleAuthModalHandler() {
    dispatch(toggleAuthModal());
  }

  function toggleSlideCartMobile() {
    tabWidth && dispatch(toggleSlideCart());
  }
  const homeLink = local ? "/preview" : "/";

  return (
    <div
      style={{ backgroundColor: navBgColor, width: "100%" }}
      className={navStyle}
    >
      <div className="navbar navbar-expand-lg navbar-light">
        <div className="container position-relative">
          <Link href={homeLink} passHref>
            <a className="navbar-brand d-none d-sm-block flex-shrink-0">
              {local ? (
                <img src="/logo.png" width="142" alt="Bandicoot" />
              ) : (
                logo
              )}
            </a>
          </Link>
          <Link href="/preview" passHref>
            <a className="navbar-brand d-sm-none flex-shrink-0 me-2">
              <img src="/logo.png" width="74" alt="Bandicoot" />
            </a>
          </Link>
          {largerDeviceWidth && <SearchBar />}
          <div className="navbar-toolbar d-flex flex-shrink-0 align-items-center">
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarCollapse"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <a className="navbar-tool navbar-stuck-toggler" href="#">
              <span className="navbar-tool-tooltip">Expand menu</span>
              <div className="navbar-tool-icon-box">
                <i className="navbar-tool-icon ci-menu"></i>
              </div>
            </a>
            <Link href="/account-wishlist" passHref>
              <a className="navbar-tool d-none d-lg-flex">
                <span className="navbar-tool-tooltip">Wishlist</span>
                <div className="navbar-tool-icon-box">
                  <i className="navbar-tool-icon ci-heart"></i>
                </div>
              </a>
            </Link>
            {!authorized ? (
              <a
                className="navbar-tool cursor-pointer ms-1 ms-lg-0 me-n1 me-lg-2"
                href="#"
                onClick={toggleAuthModalHandler}
              >
                <span className="navbar-tool-tooltip">Sign-in / Sign-up </span>
                <div className="navbar-tool-icon-box">
                  <i className="navbar-tool-icon ci-user"></i>
                </div>
                <div className="navbar-tool-text ms-n3">
                  <small>Hello, Sign in</small>My Account
                </div>
              </a>
            ) : (
              <a
                onClick={userLogout}
                href="#"
                className="navbar-tool cursor-pointer ms-1 ms-lg-0 me-n1 me-lg-2"
              >
                <span className="navbar-tool-tooltip">Logout</span>
                <div className="navbar-tool-icon-box">
                  <i className="navbar-tool-icon ci-user"></i>
                </div>
                <div className="navbar-tool-text ms-n3">
                  <small>Hello, {userDetail.name}</small>
                  <p className="logout">Logout</p>
                </div>
              </a>
            )}
            <div className="navbar-tool dropdown ms-3">
              <a
                onClick={toggleSlideCartMobile}
                className="navbar-tool-icon-box bg-secondary dropdown-toggle"
              >
                {cart?.items?.length > 0 && (
                  <span className="navbar-tool-label">
                    {cart?.items?.length}
                  </span>
                )}
                <i className="navbar-tool-icon ci-cart"></i>
              </a>
              <a className="navbar-tool-text">
                <small>My Cart</small>
                {cart?.grandTotal ? `${cart?.grandTotal.toFixed(2)}` : "$ 0.00"}
              </a>
              {cart?.items.length > 0 && (
                <HeaderCartDropdown toggleCart={toggleCart} cart={cart} />
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="navbar navbar-expand-lg navbar-light navbar-stuck-menu mt-n2 pt-0 pb-2">
        <div className="container">
          <div className="collapse navbar-collapse" id="navbarCollapse">
            {tabWidth && (
              <small className="ms-0 my-2 text-danger fw-bold">
                Hello, {userDetail.name ? userDetail.name : "Guest"}
              </small>
            )}
            {tabWidth && <SearchBar />}
            {/*<!-- Search-->*/}
            {/* <div className="input-group d-lg-none my-3">
              <i className="ci-search position-absolute top-50 start-0 translate-middle-y text-muted fs-base ms-3"></i>
              <input
                className="form-control rounded-start"
                type="text"
                placeholder="Search for products"
              />
            </div> */}
            {/*<!-- Departments menu-->*/}
            <ul className="navbar-nav navbar-mega-nav pe-lg-2 me-lg-2">
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle ps-lg-0"
                  href="#"
                  data-bs-toggle="dropdown"
                >
                  <i className="ci-view-grid me-2"></i>
                  Collections
                </a>
                <CategoryDropdown />
              </li>
            </ul>
            <ul className="navbar-nav">
              {menuLink.map((menu) => {
                const style = router.asPath === menu.link ? "active" : "";
                return (
                  <li key={menu.link} className={`nav-item dropdown ${style}`}>
                    <Link href={menu.link} passHref>
                      <a className="nav-link dropdown-toggle">{menu.name}</a>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .navbar-brand.d-sm-none.flex-shrink-0.me-2 img {
            height: 50px;
            width: 100%;
          }
        `}
      </style>
    </div>
  );
}
