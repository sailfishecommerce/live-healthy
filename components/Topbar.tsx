/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import dynamic from "next/dynamic";
import TopbarAdsSlider from "./TopbarAdsSlider";

const TinySlider: any = dynamic(() => import("tiny-slider-react"), {
  ssr: false,
});

interface TopbarProps {
  support: string;
  sliderContent: { text: string; icon: string }[];
  topbarBgColor: string;
}
export default function Topbar({
  support,
  sliderContent,
  topbarBgColor,
}: TopbarProps) {
  return (
    <div
      style={{ backgroundColor: topbarBgColor, width: "100%" }}
      className="topbar topbar-dark"
    >
      <div className="container">
        <div className="topbar-text dropdown d-md-none">
          <a
            className="topbar-link dropdown-toggle"
            href="#"
            data-bs-toggle="dropdown"
          >
            Useful links
          </a>
          <ul className="dropdown-menu">
            <li>
              <a className="dropdown-item" href="tel:00331697720">
                <i className="ci-support text-muted me-2"></i>
                {support}
              </a>
            </li>
            <li>
              <Link href="/order-tracking" passHref>
                <a className="dropdown-item">
                  <i className="ci-location text-muted me-2"></i>
                  Order tracking
                </a>
              </Link>
            </li>
          </ul>
        </div>
        <div className="topbar-text text-nowrap d-none d-md-inline-block">
          <i className="ci-support"></i>
          <span className="text-muted me-1">Support</span>
          <a className="topbar-link" href="tel:00331697720">
            {support}
          </a>
        </div>
        <TopbarAdsSlider sliderContent={sliderContent} />
        <div className="ms-3 text-nowrap">
          <Link href="/order-tracking" passHref>
            <a className="topbar-link me-4 d-none d-md-inline-block">
              <i className="ci-location"></i>Order tracking
            </a>
          </Link>
          <div className="topbar-text dropdown disable-autohide">
            <a
              className="topbar-link dropdown-toggle"
              href="#"
              data-bs-toggle="dropdown"
            >
              <img
                className="me-2"
                src="/img/flags/en.png"
                width="20"
                alt="English"
              />
              Eng / $
            </a>
            <ul className="dropdown-menu dropdown-menu-end">
              <li className="dropdown-item">
                <select className="form-select form-select-sm">
                  <option value="usd">$ USD</option>
                  <option value="eur">€ EUR</option>
                  <option value="ukp">£ UKP</option>
                  <option value="jpy">¥ JPY</option>
                </select>
              </li>
              <li>
                <a className="dropdown-item pb-1" href="#">
                  <img
                    className="me-2"
                    src="/img/flags/fr.png"
                    width="20"
                    alt="Français"
                  />
                  Français
                </a>
              </li>
              <li>
                <a className="dropdown-item pb-1" href="#">
                  <img
                    className="me-2"
                    src="/img/flags/de.png"
                    width="20"
                    alt="Deutsch"
                  />
                  Deutsch
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  <img
                    className="me-2"
                    src="/img/flags/it.png"
                    width="20"
                    alt="Italiano"
                  />
                  Italiano
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          @media (max-width: 768px) {
            .topbar a.topbar-link.dropdown-toggle {
              font-size: 12px;
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
