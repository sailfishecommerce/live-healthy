import swell from "swell-js";
import { useAppSelector } from "@/hooks/useRedux";
import { useQuery } from "react-query";

export default function useCurrency() {
  const { currency } = useAppSelector((state) => state.currencyLanguage);
  const { data: currencies } = useQuery("currencies", listEnabledCurrencies);

  console.log("currencies", currencies);
  async function listEnabledCurrencies() {
    return await swell.currency.list();
  }

  async function selectCurrencies(currency: string) {
    return await swell.currency.select(currency);
  }

  async function getSelectedCurrencies() {
    return await swell.currency.selected();
  }
  return {
    listEnabledCurrencies,
    currencies,
    selectCurrencies,
    getSelectedCurrencies,
  };
}

export function currencySymbolFormatter(currency: {
  symbol: string;
  code: string;
}) {
  console.log("currency.symbol === $", currency.symbol === "$");
  if (currency.symbol === "$" && currency.code !== "USD") {
    return `${currency.code} ${currency.symbol} `;
  } else {
    return currency.symbol;
  }
}
