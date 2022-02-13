import axios from "axios";

export default function useAirwallexPayment() {
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

  return {
    createAccessToken,
    createPaymentIntent,
  };
}
