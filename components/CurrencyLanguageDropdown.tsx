/* eslint-disable @next/next/no-img-element */
import { Dropdown } from "react-bootstrap";

import currencylanguage from "@/json/CurrencyLanguage.json";
import { useAppDispatch, useAppSelector } from "@/hooks/useRedux";
import {
  updateLanguage,
  updateCurrency,
} from "@/redux/currency-language-slice";
import useCurrency from "@/hooks/useCurrency";
import { useToast } from "@/hooks";

export default function CurrencyLanguageDropdown() {
  const dispatch = useAppDispatch();
  const { isLoading, isSuccessful, hasError } = useToast();
  const { currencies, selectCurrencies } = useCurrency();
  const { language, currency } = useAppSelector(
    (state) => state.currencyLanguage
  );

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
    }
  }

  function updateSiteLanguage(e: any) {
    e.preventDefault();
    return dispatch(updateLanguage(e.target.value));
  }

  function selectCurrency(e: any): any {
    const loading = isLoading();
    console.log("e.target.value", e.target.value);
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
    <Dropdown className="topbar-text dropdown disable-autohide">
      <Dropdown.Toggle className="topbar-link dropdown-toggle">
        <img className="me-2" src={displayFlag()} width="20" alt={language} />
        {`${language} / ${currency}`}
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
          <Dropdown.Item
            onClick={updateSiteLanguage}
            key={language.label}
            className="pb-1"
          >
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
