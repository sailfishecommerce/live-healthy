import { useMutation, useQueryClient } from "react-query";
import { toast } from "react-toastify";
import useSwellCart from "./useSwellCart";

export default function useMutationAction() {
  const { emptyCart, deleteCart } = useSwellCart();
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

  function useEmptyCart() {
    return useMutation(emptyCart, {
      onSuccess: (data) => {
        queryClient.invalidateQueries("cart");
        toast.success("cart cleared");
      },
    });
  }

  function useDeleteCart() {
    return useMutation(deleteCart, {
      onSuccess: (data, status) => {
        //
        //
        queryClient.invalidateQueries("cart");
        toast.success("cart deleted");
      },
      onError: (data) => {
        //
        toast.error("error deleting cart");
      },
    });
  }

  return {
    useUpdateCartItem,
    useAddItemToCart,
    useRemoveFromCart,
    useEmptyCart,
    useAddItemToCartModal,
    useDeleteCart,
  };
}
