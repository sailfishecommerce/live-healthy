/* eslint-disable @next/next/no-img-element */
import { Dropdown } from "react-bootstrap";
import Link from "next/link";
import dynamic from "next/dynamic";
import HeaderSlider from "@/components/Carousel/HeaderSlider";
import styles from "@/styles/Topbar.module.css";

const CurrencyLanguageDropdown = dynamic(
  () => import("@/components/CurrencyLanguageDropdown")
);

export default function Topbar() {
  return (
    <div className="topbar topbar-dark">
      <div className="container">
        <div className="topbar-text text-nowrap d-none d-md-inline-block">
          <i className="ci-support"></i>
          <span className="text-muted me-1">Support</span>
          <a className="topbar-link" href="tel:00331697720">
            00123-456-789
          </a>
        </div>
        <HeaderSlider />
        <div className="ms-3 text-nowrap">
          <Link href="/order-tracking" passHref>
            <a className="topbar-link me-4 d-none d-md-inline-block">
              <i className="ci-location"></i>Order tracking
            </a>
          </Link>
          <CurrencyLanguageDropdown />
        </div>
      </div>
      <style jsx>
        {`
          .topbar.topbar-dark {
            background-color: #373f50;
            width: 100%;
          }
          @media (max-width: 768px) {
            .topbar a.topbar-link.dropdown-toggle {
              font-size: 12px;
            }
            .topbar-text.dropdown {
              display: none;
            }
            .topbar-text {
              display: none;
            }
          }
        `}
      </style>
    </div>
  );
}
