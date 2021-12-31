/* eslint-disable @next/next/no-img-element */
import { Dropdown } from "react-bootstrap";
import currencylanguage from "@/json/CurrencyLanguage.json";
import { useAppDispatch, useAppSelector } from "@/hooks/useRedux";
import { updateState } from "@/redux/currency-language-slice";

export default function CurrencyLanguageDropdown() {
  const dispatch = useAppDispatch();
  const { currency, language } = useAppSelector(
    (state) => state.currencyLanguage
  );
  console.log("currency, language ", currency, language);

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

  function updateSiteCurrencyOrLanguage(e: any, stateType: string) {
    if (stateType === "currency") e.preventDefault();
    const stateValue = stateType === "currency" ? e.target.value : e;

    return dispatch(
      updateState({
        stateType,
        stateValue,
      })
    );
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
            onChange={(e) => updateSiteCurrencyOrLanguage(e, "currency")}
            className="form-select form-select-sm"
          >
            {currencylanguage.currency.map((currency) => (
              <option key={currency.value} value={currency.value}>
                {currency.label}
              </option>
            ))}
          </select>
        </Dropdown.Item>
        {currencylanguage.language.map((language) => (
          <Dropdown.Item
            onClick={(e) =>
              updateSiteCurrencyOrLanguage(language.label, "language")
            }
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
