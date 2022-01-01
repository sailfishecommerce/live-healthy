import useCurrency, { currencySymbolFormatter } from "@/hooks/useCurrency";
import { useAppSelector } from "@/hooks/useRedux";

export function formatPrice(price: number) {
  const productPrice = price?.toFixed(2);
  const splitPrice = productPrice?.split(".");
  const mainPrice = Number(splitPrice[0]).toLocaleString();
  const centPrice = splitPrice[1];
  return { mainPrice, centPrice };
}

interface formattedPriceProps {
  price: number;
}

export default function FormattedPrice({
  price,
}: formattedPriceProps): JSX.Element {
  const { currencies } = useCurrency();
  const { currency } = useAppSelector((state) => state.currencyLanguage);

  const selectedCurrency = currencies
    ? currencies.filter(
        (currencyP: { code: string }) => currencyP.code === currency
      )
    : [{ symbol: "$", rate: 1 }];

  const priceRate = price * selectedCurrency[0].rate;

  return (
    <div className="d-flex align-items-baseline">
      {currencySymbolFormatter(selectedCurrency[0])}
      {formatPrice(priceRate).mainPrice}.
      <small>{formatPrice(priceRate).centPrice}</small>
    </div>
  );
}
