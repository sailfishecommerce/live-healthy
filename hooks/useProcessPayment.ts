import { useAppDispatch } from "@/redux/store";
import { useRouter } from "next/router";

import useToast from "@/hooks/useToast";
import useAccount from "./useAccount";
import usePayment from "./usePayment";
import useSwellCart from "./useSwellCart";
import { updateCart } from "@/redux/cart-slice";
import useCart from "./useCart";
import { useAuth } from ".";
import { toggleAuthModal } from "@/redux/ui-slice";
import { sendProductReview, updateSubmittedOrder } from "@/redux/payment-slice";
import useVbout from "./useVbout";

export default function useProcessPayment() {
  const router = useRouter();
  const { tokenizePayment, submitUserOrder } = usePayment();
  const { getUserDetails } = useAuth();

  const { getACart } = useSwellCart();
  const { cart }: any = useCart();
  const { updateUserBillingInfo, createUserAddresstAtCheckout } = useAccount();
  const dispatch = useAppDispatch();
  const { createVboutOrder } = useVbout();
  const { isLoading, isSuccessful, hasError } = useToast();

  function processPayment(data: any) {
    const toastId = isLoading();

    function vboutOrder(order: any) {
      createVboutOrder({
        cartId: cart.id,
        uniqueId: `${cart.id}-${order.id}`,
        orderId: order.id,
        orderNumber: order.number,
        paymentMethod: order.billing?.card.brand,
        grand_total: order.grand_total,
        status: order.status,
        subtotal: order.subtotal,
        customerInfo: {
          firstname: order.account.firstName,
          lastname: order.account.lastName,
          email: order.account.email,
          country: order.billing.country,
        },
        billingInfo: {
          firstname: order.account.firstName,
          lastname: order.account.lastName,
          email: order.account.email,
          address: `${order.billing.address1} ${order.billing.address1}`,
          city: order.billing.city,
          statename: order.billing.state,
          countryname: order.billing.country,
          zipcode: order.billing.zip,
        },
        shippingInfo: {
          firstname: order.account.firstName,
          lastname: order.account.lastName,
          email: order.account.email,
          address: `${order.billing.address1} ${order.billing.address1}`,
          city: order.billing.city,
          statename: order.billing.state,
          countryname: order.billing.country,
          zipcode: order.billing.zip,
        },
      });
    }

    tokenizePayment()
      .then((tokenPaymentResponse) => {
        console.log("tokenPaymentResponse", tokenPaymentResponse);
        if (!tokenPaymentResponse?.code) {
          getACart()
            .then((response) => {
              console.log("response makePayment", response);
              updateUserBillingInfo(data, response.billing.card?.token)
                .then((response) => {
                  console.log("response userBilling", response);
                  submitUserOrder()
                    .then((response: any) => {
                      console.log("submitOrder", response);
                      if (response.paid) {
                        dispatch(sendProductReview(true));
                        vboutOrder(response);
                        isSuccessful(toastId, "payment successful");
                        dispatch(
                          updateSubmittedOrder({
                            account: response?.account,
                            orderNumber: response?.number,
                            products: response?.items,
                          })
                        );
                        router.push("/checkout-complete");
                        dispatch(updateCart(null));
                      }
                      return response;
                    })
                    .catch((error) => {
                      console.log("error submitUserOrder", error);
                      hasError(toastId, error?.message);
                    });
                })
                .catch((error) => {
                  console.log("updateUserBillingInfo error", error);
                  hasError(toastId, error?.message);
                });
            })
            .catch((error) => {
              hasError(toastId, error?.message);
            });
        } else {
          hasError(toastId, tokenPaymentResponse?.message);
        }
      })
      .catch((err) => {
        console.log("error makePayment", err);
        hasError(toastId, err?.message);
      });
  }
  async function makePayment(data: any) {
    const loading = isLoading();
    getUserDetails().then((response) => {
      console.log("response getUserDetails", response);
      if (response === null) {
        createUserAddresstAtCheckout(data)
          .then((response) => {
            console.log("createUserAddresstAtCheckout", response);
            if (response.email.code === "UNIQUE") {
              hasError(
                loading,
                `user with email ${response.email.fields.email} already exist`
              );
              // dispatch(toggleAuthModal());
              processPayment(data);
            } else {
              // processPayment(data, setLoading);
            }
          })
          .catch((err) => {
            console.log("err createUserAddresstAtCheckout", err?.message);
            hasError(loading, err?.message);
          });
      } else {
        processPayment(data);
      }
    });
  }

  return {
    makePayment,
  };
}
