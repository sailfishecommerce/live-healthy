import { currencySymbolFormatter, useCurrencies } from "@/hooks/useCurrency";
import { LineLoader } from "@/components/ProductsLoader";

import { useAppSelector } from "@/hooks/useRedux";
export function formatPrice(price: number) {
  const productPrice = price?.toFixed(2);
  return numberWithCommas(productPrice);
}

interface formattedPriceProps {
  price: string | number;
  isProduct?: boolean;
}

interface formatCurrencyProps extends formattedPriceProps {
  currencies: any[];
  currency: any;
}

function FormatCurrency({
  price,
  isProduct,
  currencies,
  currency,
}: formatCurrencyProps): JSX.Element {
  const selectedCurrency = currencies?.filter(
    (currencyP: { code: string }) => currencyP.code === currency
  );
  const nPrice = Number(price);
  const priceRate = nPrice * selectedCurrency[0].rate;

  // console.log(
  //   "price",
  //   price,
  //   "selectedCurrency[0].rate",
  //   selectedCurrency[0].rate
  // );

  const productItemPrice = isProduct ? priceRate : nPrice;
  const itemPrice = formatPrice(productItemPrice);
  return (
    <>
      {currencySymbolFormatter(selectedCurrency[0])}
      {itemPrice}
    </>
  );
}

export default function FormattedPrice({
  price,
  isProduct,
}: formattedPriceProps): JSX.Element {
  const { currencyList } = useCurrencies();
  const { currency } = useAppSelector((state) => state.currencyLanguage);

  return (
    <div className="d-flex align-items-baseline">
      {currencyList === undefined ? (
        "unable to fetch price"
      ) : currencyList === null ? (
        <LineLoader />
      ) : (
        <FormatCurrency
          price={price}
          isProduct={isProduct}
          currencies={currencyList}
          currency={currency}
        />
      )}
    </div>
  );
}

export function numberWithCommas(x: number | string) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
