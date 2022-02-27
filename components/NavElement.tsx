import dynamic from "next/dynamic";
import FormattedPrice from "@/lib/formatPrice";
const HeaderCartDropdown = dynamic(() => import("./HeaderCartDropdown"));

interface AuthorizedViewProps {
  toggleAuthModalHandler: () => void;
}

export function NavToggler() {
  return (
    <>
      <button
        className="navbar-toggler"
        type="button"
        aria-label="nav-bar"
        data-bs-toggle="collapse"
        data-bs-target="#navbarCollapse"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <a className="navbar-tool navbar-stuck-toggler ms-5" href="#">
        <span className="navbar-tool-tooltip">Expand menu</span>
        <div className="navbar-tool-icon-box">
          <i className="navbar-tool-icon ci-menu"></i>
        </div>
      </a>
    </>
  );
}

export function NotAuthorizedView({
  toggleAuthModalHandler,
}: AuthorizedViewProps) {
  return (
    <>
      <a
        className="navbar-tool cursor-pointer ms-1 ms-lg-4 me-lg-2"
        href="#"
        onClick={toggleAuthModalHandler}
      >
        <span className="navbar-tool-tooltip">Sign-in / Sign-up </span>
        <div className="navbar-tool-icon-box">
          <i className="navbar-tool-icon ci-user"></i>
        </div>
        <div className="navbar-tool-text d-flex flex-column me-2 align-items-start">
          <small>Hello, Sign in</small>My Account
        </div>
      </a>
      <style jsx>
        {`
          .navbar-tool-text {
            display: flex;
            align-items: center;
            padding-left: 0px;
          }
        `}
      </style>
    </>
  );
}

interface authorizedViewProps {
  userLogout: () => void;
  userDetail: {
    firstName: string;
    lastName: string;
  };
}

export function AuthorizedView({
  userLogout,
  userDetail,
}: authorizedViewProps) {
  return (
    <div className="d-flex items-center ms-5 me-0">
      <div className="navbar-tool-icon-box">
        <i className="navbar-tool-icon ci-user"></i>
      </div>
      <div className="text d-flex flex-column">
        <a className="navbar-tool cursor-pointer ms-1 me-n1 me-lg-2">
          <span className="navbar-tool-tooltip">
            Welcome {userDetail.firstName}
          </span>
          <div className="navbar-tool-text ms-n3">
            <small className="d-flex flex-column me-3">
              <span>Hello,</span>{" "}
              <span className="fs-sm text-accent fw-bold">
                {`${userDetail.lastName} ${userDetail.firstName}`}{" "}
              </span>
            </small>
          </div>
        </a>
        <a
          onClick={userLogout}
          href="#"
          className="navbar-tool logout-user cursor-pointer ms-1 me-n1 me-lg-2"
        >
          <span className="navbar-tool-tooltip">Logout</span>
          <p className="logout mb-0 fs-xs">Logout</p>
        </a>
      </div>
      <style jsx>{`
        .logout-user p:hover {
          color: red;
        }
      `}</style>
    </div>
  );
}

interface NavbarDropdownProps {
  toggleSlideCartMobile: () => void;
  cart:
    | {
        items: any[];
        grandTotal: number;
      }
    | any;
}

export function NavbarDropdown({
  toggleSlideCartMobile,
  cart,
}: NavbarDropdownProps) {
  return (
    <>
      <div className="navbar-tool dropdown ms-1">
        <a
          onClick={toggleSlideCartMobile}
          className="navbar-tool-icon-box bg-secondary dropdown-toggle"
        >
          {cart?.items?.length > 0 && (
            <span className="navbar-tool-label">{cart?.items?.length}</span>
          )}
          <i className="navbar-tool-icon ci-cart"></i>
        </a>
        <div className="d-flex price-overview flex-column">
          <small>My Cart</small>
          <a className="navbar-tool-text">
            {cart?.grandTotal ? (
              <FormattedPrice price={cart?.grandTotal} />
            ) : (
              <FormattedPrice price={0} />
            )}
          </a>
        </div>
        {cart?.items?.length > 0 && <HeaderCartDropdown cart={cart} />}
      </div>
      <style jsx>
        {`
          .price-overview {
            width: 90px;
            margin-left: 20px;
          }
        `}
      </style>
    </>
  );
}
