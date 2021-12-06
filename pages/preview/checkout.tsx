import CheckoutTab from "@/components/CheckoutTab";
import Applayout from "@/layout/Applayout";

export default function checkout() {
  return <Applayout title="Checkout your Order">{CheckoutTab()}</Applayout>;
}
