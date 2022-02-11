import useCart from "@/hooks/useCart";
import { useAppDispatch, useAppSelector } from "@/hooks/useRedux";
import { toggleAuthModal, toggleSlideCart } from "@/redux/ui-slice";
import { useAuth } from "@/hooks";

import useMediaQuery from "@/hooks/useMediaQuery";
import {
  AuthorizedView,
  NavbarDropdown,
  NavToggler,
  NotAuthorizedView,
} from "./NavElement";

export default function NavMenu() {
  const { useCartData } = useCart();
  const { authorized, userDetail }: any = useAppSelector((state) => state.auth);
  const { userLogout } = useAuth();
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
        {!authorized ? (
          <AuthorizedView toggleAuthModalHandler={toggleAuthModalHandler} />
        ) : (
          <NotAuthorizedView userLogout={userLogout} userDetail={userDetail} />
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
