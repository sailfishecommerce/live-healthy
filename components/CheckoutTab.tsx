import { useAppSelector } from "@/hooks/useRedux";
import Cart from "./Cart";
import CheckoutComplete from "./CheckoutComplete";
import CheckoutDetail from "./CheckoutDetail";
import CheckoutPayment from "./CheckoutPayment";
import CheckoutReview from "./CheckoutReview";
import CheckoutShipping from "./CheckoutShipping";

export default function CheckoutTab() {
  const { checkout } = useAppSelector((state) => state.checkout);

  console.log("checkout", checkout);

  switch (checkout) {
    case "cart": {
      return <Cart />;
    }
    case "details": {
      return <CheckoutDetail />;
    }
    case "shipping": {
      return <CheckoutShipping />;
    }
    case "payment": {
      return <CheckoutPayment />;
    }
    case "review": {
      return <CheckoutReview />;
    }
    case "complete": {
      return <CheckoutComplete />;
    }
    default:
      return null;
  }
}

export function switchTab(stage: any) {
  switch (stage) {
    case "cart": {
      return 1;
    }
    case "details": {
      return 2;
    }
    case "shipping": {
      return 3;
    }
    case "payment": {
      return 4;
    }
    case "review": {
      return 5;
    }
    default:
      return null;
  }
}
