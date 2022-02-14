import axios from "axios";
import { toast } from "react-toastify";

import { formatIntentData } from "@/lib/formatAirwallex";
import { useRouter } from "next/router";
import { updatePaymentIntent } from "@/redux/airwallex-slice";
import { useAppDispatch } from "@/redux/store";
import { cartType } from "@/types";

export default function useAirwallexPayment() {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const disableBtn = router.pathname.includes("checkout") ? true : false;

  function createAccessToken() {
    return axios.request({
      url: `/api/get-payment-token`,
      method: "get",
    });
  }

  function createPaymentIntent(requestBody: any) {
    return axios.request({
      url: `/api/create-payment-intent`,
      method: "post",
      data: requestBody,
    });
  }

  function checkoutHandler(cart: cartType, paymentForm: any) {
    const paymentDetails = formatIntentData(cart, paymentForm);
    createAccessToken()
      .then(({ data }) => {
        createPaymentIntent({
          auth: data.token,
          paymentDetails,
        });
      })
      .then(({ data }: any) => {
        console.log("createPaymentIntent response", data);
        dispatch(
          updatePaymentIntent({
            clientSecret: data.client_secret,
            paymentIntentId: data.id,
          })
        );
      })
      .catch((error) => {
        console.log("error", error.response?.data);
        toast.error(error.response?.data?.message);
      });
    router.push("/checkout");
  }

  return {
    createAccessToken,
    createPaymentIntent,
    checkoutHandler,
    disableBtn,
  };
}
