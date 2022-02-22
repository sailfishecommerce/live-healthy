import { Dropdown } from "react-bootstrap";
import Image from "next/image";
import { memo, useState } from "react";

import { useAppDispatch, useAppSelector } from "@/hooks/useRedux";
import { updateCurrency } from "@/redux/currency-language-slice";
import useCurrency, { useCurrencies } from "@/hooks/useCurrency";
import { useToast } from "@/hooks";
import styles from "@/styles/Dropdown.module.css";

interface Props {
  position?: string;
}

function CurrencyLanguageDropdownComponent({ position }: Props) {
  const dispatch = useAppDispatch();
  const { isLoading, isSuccessful, hasError } = useToast();
  const { selectCurrencies } = useCurrency();
  const [showDropdown, setShowDropdown] = useState(false);
  const [currencies, status] = useCurrencies();


  const { currency } = useAppSelector((state) => state.currencyLanguage);
  const footerStyle = position === "bottom" ? styles.bottom : "";

  function dropdownHandler(value: boolean) {
    setShowDropdown(value);
  }

  function selectCurrency(e: any): any {
    const loading = isLoading();
    return selectCurrencies(e.target.value)
      .then((response) => {
        isSuccessful(loading, `${response.currency} selected`);
        dispatch(updateCurrency(response.currency));
      })
      .catch((error) => {
        hasError(loading, "an error occured, please try again");
        dispatch(updateCurrency("USD"));
        console.error("error", error);
      });
  }

  return status === "error" ? (
    <p>unable to load currencies</p>
  ) : status === "loading" ? (
    <p>loading currencies...</p>
  ) : (
    <Dropdown
      className={`${styles.dropdown} ${footerStyle} topbar-text dropdown disable-autohide`}
    >
      <Dropdown.Toggle
        className={`${styles.dropdownToggle} topbar-link dropdown-toggle`}
      >
        <div className={styles.imageContainer}>
          <Image
            className="me-2"
            src="/img/flags/en.png"
            width={40}
            height={40}
            alt="en"
            layout="responsive"
          />
        </div>
        {`En / ${currency}`}
      </Dropdown.Toggle>
      <Dropdown.Menu className={styles.dropdownMenu}>
        <select className="form-select form-select-sm">
          {currencies &&
            currencies?.map((currency: any) => (
              <option
                onClick={selectCurrency}
                key={currency.code}
                value={currency.code}
              >
                {currency.symbol} {currency.code}
              </option>
            ))}
        </select>
      </Dropdown.Menu>
    </Dropdown>
  );
}

const CurrencyLanguageDropdown = memo(CurrencyLanguageDropdownComponent);

export default CurrencyLanguageDropdown;

// CurrencyLanguageDropdown.whyDidYouRender = true;
