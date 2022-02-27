import { memo } from "react";
import { useQuery } from "react-query";

import useCart from "@/hooks/useCart";
import { useAppDispatch } from "@/hooks/useRedux";
import { toggleAuthModal, toggleSlideCart } from "@/redux/ui-slice";
import { useAccount, useAuth } from "@/hooks";
import useMediaQuery from "@/hooks/useMediaQuery";
import {
  AuthorizedView,
  NavbarDropdown,
  NavToggler,
  NotAuthorizedView,
} from "./NavElement";
import { LineLoader } from "./ProductsLoader";

function NavMenuComponent() {
  const { useCartData } = useCart();
  const { userLogout } = useAuth();
  const { getUserAccount } = useAccount();
  const { data: userDetails, status } = useQuery("userdetails", getUserAccount);
  const dispatch = useAppDispatch();
  const tabWidth = useMediaQuery("(max-width:768px)");

  const { data: cart } = useCartData();

  function toggleAuthModalHandler() {
    dispatch(toggleAuthModal());
  }

  function toggleSlideCartMobile() {
    tabWidth && dispatch(toggleSlideCart());
  }
  return (
    <>
      <div className="navbar-toolbar d-flex flex-shrink-0 align-items-center">
        <NavToggler />
        {status === "error" ? (
          "unable to fetch user details"
        ) : status === "loading" ? (
          <LineLoader />
        ) : userDetails !== null ? (
          <AuthorizedView userLogout={userLogout} userDetail={userDetails} />
        ) : (
          <NotAuthorizedView toggleAuthModalHandler={toggleAuthModalHandler} />
        )}
        <NavbarDropdown
          cart={cart}
          toggleSlideCartMobile={toggleSlideCartMobile}
        />
      </div>
      <style jsx>
        {`
          @media (max-width: 768px) {
            .navbar-toolbar {
              justify-content: space-between;
              width: 100%;
              margin-left: -15px;
            }
          }
        `}
      </style>
    </>
  );
}

const NavMenu = memo(NavMenuComponent);

export default NavMenu;
