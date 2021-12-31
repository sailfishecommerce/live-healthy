import useCurrency from "@/hooks/useCurrency";

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
  const { currencySymbol } = useCurrency();
  return (
    <div className="d-flex align-items-baseline">
      {currencySymbol}
      {formatPrice(price).mainPrice}.
      <small>{formatPrice(price).centPrice}</small>
    </div>
  );
}
