/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import Applayout from "@/layout/Applayout";
import Checkout from "@/components/Checkout";
import useAirwallex from "@/hooks/useAirwallex";

export default function CheckoutSingle() {
  const { generateAirwallexAccessToken } = useAirwallex();

  useEffect(() => {
    generateAirwallexAccessToken();
  }, []);

  return (
    <Applayout title="Checkout your order">
      <Checkout />
    </Applayout>
  );
}
