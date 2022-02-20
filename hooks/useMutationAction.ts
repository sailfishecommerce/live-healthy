import { useMutation, useQueryClient } from "react-query";
import useSwellCart from "./useSwellCart";

import { addNewUserToList } from "./useVbout";
import useToast from "@/hooks/useToast";
import useAccount from "@/hooks/useAccount";

export default function useMutationAction() {
  const { isLoading, isSuccessful, hasError } = useToast();
  const { createUserAccount } = useAccount();
  const queryClient = useQueryClient();
  const { updateCartItemQuantity, addToCart, addToCartModal, removeCartItem } =
    useSwellCart();

  function useUpdateCartItem() {
    return useMutation(
      ({ product, quantity }: any) => updateCartItemQuantity(product, quantity),
      {
        onSettled: () => {
          queryClient.invalidateQueries("cart");
        },
      }
    );
  }

  function useAddItemToCart() {
    return useMutation(
      ({ product, quantity }: any) => addToCart(product, quantity),
      {
        onSettled: () => {
          queryClient.invalidateQueries("cart");
        },
      }
    );
  }

  function useRemoveFromCart() {
    return useMutation((item: any) => removeCartItem(item), {
      onSettled: () => {
        queryClient.invalidateQueries("cart");
      },
    });
  }

  function useAddItemToCartModal() {
    return useMutation(
      ({ product, productQty, selectedOptions }: any) =>
        addToCartModal(product, productQty, selectedOptions),
      {
        onSettled: () => {
          queryClient.invalidateQueries("cart");
        },
      }
    );
  }

  return {
    useUpdateCartItem,
    useAddItemToCart,
    useRemoveFromCart,
    useAddItemToCartModal,
  };
}
