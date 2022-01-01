import swell from "swell-js";
import { useAppSelector } from "@/hooks/useRedux";

export default function useCurrency() {
  const { currency } = useAppSelector((state) => state.currencyLanguage);

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
