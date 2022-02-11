/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { useRouter } from "next/router";
import dynamic from "next/dynamic";
import { useState } from "react";

import { useAppSelector } from "@/hooks/useRedux";
import menuLink from "@/json/menu.json";
import useMediaQuery from "@/hooks/useMediaQuery";

const CategoryDropdown = dynamic(() => import("./NavDropdown"));
const MobileCategoryList = dynamic(() => import("./MobileCategoryList"));
const SearchBar = dynamic(() => import("@/components/SearchBar"));

export default function Menu() {
  const { userDetail }: any = useAppSelector((state) => state.auth);
  const router = useRouter();
  const [toggleCollection, setToggleCollection] = useState(false);
  const tabWidth = useMediaQuery("(max-width:768px)");
  const largerDeviceWidth = useMediaQuery("(min-width:768px)");

  function onCollectionMenuHandler() {
    setToggleCollection(!toggleCollection);
  }

  return (
    <div className="navbar navbar-expand-lg navbar-light navbar-stuck-menu mt-n2 pt-0 pb-2">
      <div className="container">
        <div className="collapse navbar-collapse" id="navbarCollapse">
          {tabWidth && (
            <small className="ms-0 my-2 text-danger fw-bold">
              Hello, {userDetail.name ? userDetail.name : "Guest"}
            </small>
          )}
          {tabWidth && <SearchBar />}
          {/*<!-- Departments menu-->*/}
          <ul className="navbar-nav navbar-mega-nav pe-lg-2 me-lg-2">
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle ps-lg-0"
                href="#"
                onClick={onCollectionMenuHandler}
                data-bs-toggle="dropdown"
              >
                <i className="ci-view-grid me-2"></i>
                Collections
              </a>
              {largerDeviceWidth ? (
                <CategoryDropdown />
              ) : (
                !largerDeviceWidth && toggleCollection && <MobileCategoryList />
              )}
            </li>
          </ul>
          <ul className="navbar-nav">
            {menuLink.map((menu) => {
              const style = router.asPath === menu.link ? "active" : "";
              return (
                <li key={menu.link} className={`nav-item dropdown ${style}`}>
                  <Link href={menu.link} passHref>
                    <a className="nav-link">{menu.name}</a>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}
