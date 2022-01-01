import swell from "swell-js";
import { useAppSelector } from "@/hooks/useRedux";
import { useQuery } from "react-query";

export default function useCurrency() {
  const { currency } = useAppSelector((state) => state.currencyLanguage);
  const { data: currencies } = useQuery("currencies", listEnabledCurrencies);

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
    currencySymbol: currencySymbolFormatter(currency),
    listEnabledCurrencies,
    currencies,
    selectCurrencies,
    getSelectedCurrencies,
  };
}

function currencySymbolFormatter(currency: string) {
  switch (currency) {
    case "USD":
      return "$";
    case "HKD":
      return "HKD $";
    case "EUR":
      return "€";
    case "UKP":
      return "£";
    case "JPY":
      return "¥";
  }
}
