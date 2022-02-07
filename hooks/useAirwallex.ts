import axios from "axios";
import { v4 as uuidv4 } from "uuid";

import {
  fetchAirwallexAccessToken,
  isTokenValid,
} from "@/lib/airwallex-payment";
import { useAppDispatch } from "@/redux/store";
import { useAppSelector } from "./useRedux";
import { airwallexType } from "@/types";
import {
  paymentError,
  updateAccessTokenStatus,
  updatePaymentIntent,
} from "@/redux/airwallex-slice";
import useCart from "./useCart";

export default function useAirwallex() {
  const dispatch = useAppDispatch();
  const { useCartData } = useCart();
  const { data: cart } = useCartData();
  const airwallex: airwallexType = useAppSelector((state) => state.airwallex);

  function generateAirwallexAccessToken() {
    const accessTokenValidity = isTokenValid(airwallex?.tokenExpiryDate);
    console.log("accessTokenValidity", accessTokenValidity);
    if (accessTokenValidity) {
      dispatch(updateAccessTokenStatus(true));
    } else {
      dispatch(updateAccessTokenStatus(false));
      fetchAirwallexAccessToken(dispatch);
    }
  }

  const paymentData = {
    paymentDetails: {
      request_id: uuidv4(),
      amount: cart?.grandTotal,
      currency: cart?.currency,
      merchant_order_id: cart?.id,
      order: {
        products: cart?.items,
      },
      payment_method_options: {
        card: {
          risk_control: {
            skip_risk_processing: false,
          },
        },
      },
    },
    auth: airwallex?.accessToken,
  };
  function airwallexPaymentIntent() {
    if (cart) {
      return axios
        .post("/api/create-payment-intent", paymentData)
        .then((response) => {
          console.log("airwallexPaymentIntent response", response.data);
          const paymentIntentData = {
            clientSecret: response.data.client_secret,
            paymentIntentId: response.data.id,
          };
          dispatch(updatePaymentIntent(paymentIntentData));
          dispatch(paymentError(null));
        })
        .catch((error) => {
          const errorMessage = error.message ? error.message : error;
          dispatch(paymentError(errorMessage));
        });
    }
  }

  function confirmAirwallexPaymentIntent(methodData: any, id: string) {
    return axios
      .post("/api/confirm-payment-intent", {
        id,
        cardDetails: methodData,
        auth: airwallex?.accessToken,
      })
      .then((response: any) => console.log("response confirm", response))
      .catch((error) => console.error("error confirm", error));
  }

  return {
    generateAirwallexAccessToken,
    airwallex,
    airwallexPaymentIntent,
    confirmAirwallexPaymentIntent,
  };
}
