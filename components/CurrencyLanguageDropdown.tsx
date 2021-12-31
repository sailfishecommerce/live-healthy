/* eslint-disable @next/next/no-img-element */
import { Dropdown } from "react-bootstrap";

export default function CurrencyLanguageDropdown() {
    
  return (
    <Dropdown className="topbar-text dropdown disable-autohide">
      <Dropdown.Toggle className="topbar-link dropdown-toggle">
        <img
          className="me-2"
          src="/img/flags/en.png"
          width="20"
          alt="English"
        />
        Eng / $
      </Dropdown.Toggle>
      <Dropdown.Menu>
        <Dropdown.Item>
          <select className="form-select form-select-sm">
            <option value="usd">$ USD</option>
            <option value="hkd">$ HKD</option>
            <option value="eur">€ EUR</option>
            <option value="ukp">£ UKP</option>
            <option value="jpy">¥ JPY</option>
          </select>
        </Dropdown.Item>
        <Dropdown.Item className="pb-1">
          <img
            className="me-2"
            src="/img/flags/fr.png"
            width="20"
            alt="Français"
          />
          Français
        </Dropdown.Item>
        <Dropdown.Item className="pb-1">
          <img
            className="me-2"
            src="/img/flags/de.png"
            width="20"
            alt="Deutsch"
          />
          Deutsch
        </Dropdown.Item>
        <Dropdown.Item className="pb-1">
          <img
            className="me-2"
            src="/img/flags/it.png"
            width="20"
            alt="Italiano"
          />
          Italiano
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}
