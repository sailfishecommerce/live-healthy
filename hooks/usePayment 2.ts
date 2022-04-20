import swellClientInit from "@/lib/config";

export default function usePayment() {
  const { swell, initializeSwell } = swellClientInit();

  initializeSwell();

  async function tokenizePayment() {
    return await swell.payment.tokenize({
      card: {
        onError: (err: any) => {
          return err;
        },
        onSuccess: (ev: any) => {
          return ev;
        },
      },
    });
  }

  async function submitUserOrder() {
    return await swell.cart.submitOrder();
  }

  return {
    tokenizePayment,
    submitUserOrder,
  };
}
