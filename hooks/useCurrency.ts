import { useAppSelector } from "@/hooks/useRedux";

export default function useCurrency() {
  const { currency } = useAppSelector((state) => state.currencyLanguage);

  return {
    currencySymbol: currencySymbolFormatter(currency),
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
