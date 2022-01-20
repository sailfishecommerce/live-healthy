/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
import formatCartItem, { dispatchCartItem } from "@/lib/formatCart";
import { useAppDispatch } from "@/redux/store";
import { useAppSelector } from "./useRedux";
import useToast from "@/hooks/useToast";
import {
  updateCartId,
  updateStoreCartCurrency,
  updateStoreCartItem,
} from "@/redux/store-cart-slice";

export default function useStoreCart(product: any) {
  const { currency } = useAppSelector((state) => state.currencyLanguage);
  const { cart, cartId } = useAppSelector((state) => state.storeCart);
  const dispatch = useAppDispatch();
  const { isLoading, isSuccessful, hasError } = useToast();

  function dispatchCart() {
    const cartItem = formatCartItem(product, currency, 1);
    dispatch(updateStoreCartItem(cartItem));
    dispatch(updateStoreCartCurrency(currency));
  }

  function createCart() {
    dispatchCart();
    postCart();
  }

  function postCart() {
    const loading = isLoading();
    console.log("postCart", cart);
    return axios
      .post("/api/cart/create", cart)
      .then((response: any) => {
        console.log("create cart", response);
        isSuccessful(loading, "successful");
        dispatch(updateCartId(response.id));
      })
      .catch((error) => {
        console.log("error", error);
        hasError(loading, "an error occurred");
      });
  }

  function updateCart() {
    const loading = isLoading();
    return axios
      .post("/api/cart/update", {
        id: cartId,
        items: cart.items,
        display_currency: currency,
      })
      .then((response: any) => {
        console.log("create cart", response);
        isSuccessful(loading, "successful");
      })
      .catch((error) => {
        console.log("error", error);
        hasError(loading, "an error occurred");
      });
  }

  function addToCart() {
    return cart.items.length === 0 ? createCart() : updateCart();
  }

  return {
    addToCart,
  };
}
