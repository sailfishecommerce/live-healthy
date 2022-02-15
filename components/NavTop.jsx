/* eslint-disable react-hooks/exhaustive-deps */
import { useCallback, memo } from "react";
import SearchBar from "@/components/SearchBar";
import Logo from "@/components/Logo";

import useMediaQuery from "@/hooks/useMediaQuery";
import NavMenu from "./NavMenu";

function NavTopComponent() {
  const largerDeviceWidth = useMediaQuery("(min-width:768px)");

  function DispalySearchBar() {
    return <>{largerDeviceWidth && <SearchBar />}</>;
  }

  const displaySearchBar = useCallback(<DispalySearchBar />, [
    largerDeviceWidth,
  ]);

  return (
    <>
      <div className="navbar navbar-expand-lg navbar-light">
        <div className="container position-relative">
          <Logo className="navbar-brand d-none d-sm-block flex-shrink-0" />
          <Logo className="navbar-brand d-sm-none flex-shrink-0 me-2" />
          {largerDeviceWidth && <SearchBar />}
          <NavMenu />
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
    </>
  );
}

const NavTop = memo(NavTopComponent);
export default NavTop;
