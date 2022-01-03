/* eslint-disable @next/next/no-img-element */
// import { useEffect } from "react";
import { Dropdown } from "react-bootstrap";

import currencylanguage from "@/json/CurrencyLanguage.json";
import { useAppDispatch, useAppSelector } from "@/hooks/useRedux";
import {
  updateLanguage,
  updateCurrency,
} from "@/redux/currency-language-slice";
import useCurrency from "@/hooks/useCurrency";
import { useToast } from "@/hooks";
import styles from "@/styles/Dropdown.module.css";
import useLanguage from "@/hooks/useLanguage";

interface Props {
  position?: string;
}

export default function CurrencyLanguageDropdown({ position }: Props) {
  const dispatch = useAppDispatch();
  const { isLoading, isSuccessful, hasError } = useToast();
  const { currencies, selectCurrencies } = useCurrency();
  const { getLanguageList } = useLanguage();
  const { language, currency } = useAppSelector(
    (state) => state.currencyLanguage
  );
  console.log("language", language);

  const footerStyle = position === "bottom" ? styles.bottom : "";

  // useEffect(() => {
  //   getLanguageList()
  //     .then((response) => console.log("response language", response))
  //     .catch((error) => console.error("error", error));
  // }, []);

  function displayFlag() {
    switch (language) {
      case "EN":
        return "/img/flags/en.png";
      case "FR":
        return "/img/flags/fr.png";
      case "DE":
        return "/img/flags/de.png";
      case "ITL":
        return "/img/flags/itl.png";
      default:
        return "/img/flags/en.png";
    }
  }

  function updateSiteLanguage(e: any) {
    e.preventDefault();
    return dispatch(updateLanguage(e.target.value));
  }

  function selectCurrency(e: any): any {
    const loading = isLoading();
    return selectCurrencies(e.target.value)
      .then((response) => {
        console.log("response", response);
        isSuccessful(loading, `${response.currency} selected`);
        dispatch(updateCurrency(response.currency));
      })
      .catch((error) => {
        hasError(loading, "an error occured, please try again");
        dispatch(updateCurrency("USD"));
        console.error("error", error);
      });
  }

  return (
    <Dropdown
      className={`${styles.dropdown}${footerStyle} topbar-text dropdown disable-autohide`}
    >
      <Dropdown.Toggle className="topbar-link dropdown-toggle">
        <img className="me-2" src="/img/flags/en.png" width="20" alt="en" />
        {`En / ${currency}`}
      </Dropdown.Toggle>
      <Dropdown.Menu>
        <Dropdown.Item>
          <select
            onChange={selectCurrency}
            className="form-select form-select-sm"
          >
            {currencies &&
              currencies.map((currency: any) => (
                <option key={currency.code} value={currency.code}>
                  {currency.symbol} {currency.code}
                </option>
              ))}
          </select>
        </Dropdown.Item>
        {currencylanguage.language.map((language) => (
          <Dropdown.Item key={language.label} className="pb-1">
            <img
              className="me-2"
              src={language.img}
              width="20"
              alt={language.alt}
            />
            {language.label}
          </Dropdown.Item>
        ))}
      </Dropdown.Menu>
    </Dropdown>
  );
}
