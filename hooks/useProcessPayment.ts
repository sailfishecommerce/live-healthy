/* eslint-disable react-hooks/exhaustive-deps */
import { useState } from "react";
import { useAppDispatch } from "@/redux/store";
import { useRouter } from "next/router";

import usePayment from "./usePayment";
import useSwellCart from "./useSwellCart";
import { useAuth, useToast, useAccount, useCart } from "@/hooks";
import { sendProductReview, updateSubmittedOrder } from "@/redux/payment-slice";
import { updateCart } from "@/redux/cart-slice";
import { createVboutOrder } from "@/hooks/useVbout";
import useModal from "@/hooks/useModal";
import { vboutOrderData } from "@/lib/vbout";
import { useQuery } from "react-query";

export default function useProcessPayment() {
  const router = useRouter();
  const { tokenizePayment, submitUserOrder } = usePayment();
  const { getUserDetails } = useAuth();
  const { onShowModal } = useModal();

  const { getACart, updateCartAccountID } = useSwellCart();
  const { useCartData } = useCart();
  const { data: cart } = useCartData();
  const {
    updateUserBillingInfo,
    createUserAddresstAtCheckout,
    getUserAccount,
  } = useAccount();
  const dispatch = useAppDispatch();
  const { data: userDetail, status } = useQuery("userdetails", getUserAccount);
  const [loadingState, setLoadingState] = useState(false);
  const { isLoading, isSuccessful, hasError } = useToast();

  function processPayment(data: any, loading: any) {
    function vboutOrder(order: any) {
      return createVboutOrder(vboutOrderData(cart, order));
    }
    setLoadingState(true);
    tokenizePayment()
      .then((tokenPaymentResponse) => {
        if (!tokenPaymentResponse?.code) {
          getACart()
            .then((response) => {
              updateUserBillingInfo(data, response.billing.card?.token)
                .then((response) => {
                  submitUserOrder()
                    .then((response: any) => {
                      if (response.paid) {
                        setLoadingState(false);
                        dispatch(sendProductReview(true));
                        vboutOrder(response);
                        isSuccessful(loading, "payment successful");
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
                      hasError(loading, error?.message);
                      setLoadingState(false);
                    });
                })
                .catch((error) => {
                  hasError(loading, error?.message);
                  setLoadingState(false);
                });
            })
            .catch((error) => {
              hasError(loading, error?.message);
              setLoadingState(false);
            });
        } else {
          hasError(loading, tokenPaymentResponse?.message);
          setLoadingState(false);
        }
      })
      .catch((err) => {
        hasError(loading, err?.message);
        setLoadingState(false);
      });
  }

  async function makePayment(data: any) {
    const loading = isLoading();
    getUserDetails()
      .then((response) => {
        if (response === null) {
          createUserAddresstAtCheckout(data)
            .then((response) => {
              if (response !== null && response?.email?.code === "UNIQUE") {
                hasError(
                  loading,
                  "you have an existing account with us, please login"
                );
                onShowModal(
                  "CHECKOUT_NOTIFICATION_MODAL",
                  response.email.fields.email
                );
              } else {
                processPayment(data, loading);
              }
            })
            .catch((err) => {
              hasError(loading, err?.message);
            });
        } else {
          processPayment(data, loading);
        }
      })
      .catch((error) => {
        hasError(loading, error?.message);
      });
  }

  return {
    makePayment,
    loadingState,
  };
}
