/* eslint-disable @next/next/no-img-element */
import { useRouter } from "next/router";

import { useAppDispatch, useAppSelector } from "@/hooks/useRedux";
import { displayCheckoutModalAction } from "@/redux/ui-slice";
import { CartDiscount } from "./CartElements";
import SlideCartNote from "./SlideCartNote";
import FormattedPrice from "@/lib/formatPrice";
import SlideCartProduct from "./SlideCartProduct";
import styles from "@/styles/ui.module.css";
import { useCart } from "@/hooks";
import useAirwallexPayment from "@/hooks/useAirwallexPayment";
import { updatePaymentIntent } from "@/redux/airwallex-slice";

interface slideCartProps {
  toggle: () => void;
}

export default function SlideCart(props: slideCartProps) {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const { paymentForm }: any = useAppSelector((state) => state.payment);
  const { createAccessToken, createPaymentIntent } = useAirwallexPayment();
  const { useCartData } = useCart();
  const { data: cart } = useCartData();

  console.log("paymentForm", paymentForm);

  function toggleCheckoutModal() {
    dispatch(displayCheckoutModalAction());
    props.toggle();
  }

  function formatProductsArray() {
    let productArray: any[] = [];
    cart?.items.map((item: any, index: number) => {
      productArray[index] = {
        desc: item.product?.metaTitle,
        name: item.product.name,
        quantity: item.quantity,
        unit_price: item.price,
        url: `https://www.livehealthy.hk/products/${item.product.slug}`,
        sku: item?.product.sku,
      };
    });
    return productArray;
  }

  function checkoutHandler() {
    const products = formatProductsArray();
    const street = paymentForm.address1
      ? paymentForm.address1
      : paymentForm.state;
    toggleCheckoutModal();
    createAccessToken().then(({ data }) => {
      createPaymentIntent({
        auth: data.token,
        paymentDetails: {
          amount: cart.grandTotal,
          currency: cart.currency,
          merchant_order_id: cart.checkoutId,
          request_id: `${cart.id}-aa`,
          order: {
            products,
            shipping: {
              address: {
                city: paymentForm.city,
                country_code: paymentForm.country.toUpperCase(),
                state: paymentForm.state,
                postcode: paymentForm.zip,
                street,
              },
              first_name: paymentForm.firstName,
              last_name: paymentForm.lastName,
            },
          },
          payment_method_options: {
            card: {
              risk_control: {
                skip_risk_processing: false,
                three_domain_secure_action: null,
                three_ds_action: null,
              },
            },
          },
        },
      })
        .then(({ data }) => {
          console.log("createPaymentIntent response", data);
          dispatch(
            updatePaymentIntent({
              clientSecret: data.client_secret,
              paymentIntentId: data.id,
            })
          );
        })
        .catch((error) => console.log("error", error.response.data));
    });
  }

  const cartStyle = cart?.items?.length === 0 ? "justify-center" : "";

  return (
    <div>
      <div className="slidecart d-flex align-items-center h-full position-fixed top-0 w-full justify-content-between right">
        <div
          onClick={props.toggle}
          className="overlay slidecartOverlay w-3/4 h-screen cursor-pointer"
        />
        <div
          data-aos="fade-left"
          data-aos-duration="500"
          data-aos-easing="ease-in-back"
          className={`cart bg-white fixed d-flex flex-column right-0 ${cartStyle} px-2`}
        >
          {cart?.items?.length > 0 ? (
            <div>
              <div className="cart-body">
                <SlideCartNote />
                <div
                  className={`${styles.slideCart} sidebar-cart-product-wrapper custom-scrollbar`}
                >
                  {cart?.items.map((item: any, index: number) => (
                    <SlideCartProduct key={`item.id-${index}`} item={item} />
                  ))}
                </div>
              </div>
              <div className="cart-footer bg-white px-4">
                <CartDiscount cartItem={0} />
                <div className="mt-6">
                  <h5 className="mt-5 mb-2 subtotal d-flex align-items-center">
                    Subtotal:{" "}
                    <span className="mx-2">
                      {cart ? <FormattedPrice price={cart.subTotal} /> : "0.00"}
                    </span>
                  </h5>
                  <hr />
                </div>
                {/* <Link href="/checkout" passHref> */}
                <button
                  aria-label="Proceed to Checkout"
                  onClick={checkoutHandler}
                  className="btn btn-outline-primary d-block w-100 proceedBtn"
                  type="button"
                >
                  <img alt="checkout icon" src="/icons/checkoutIcon.svg" />{" "}
                  <span className="mx-2">PROCEED TO CHECKOUT</span>
                </button>
                {/* </Link> */}
              </div>
            </div>
          ) : (
            <div className="emptyCart text-center d-flex flex-column justify-content-center align-items-center">
              <i className="fas fa-shopping-cart my-2 fa-3x rounded-full bg-gray-200 text-red-400 d-flex text-white"></i>
              <p className="font-bold text-2xl">Your cart is empty </p>
            </div>
          )}
        </div>
      </div>
      <style jsx>
        {`
          .overlay.slidecartOverlay {
            background-color: #190f0fc4;
          }
          .sidebar-cart-product-wrapper.custom-scrollbar {
            height: 400px;
            overflow-y: auto;
            overflow-x: hidden;
          }
          button.proceedBtn {
            background-color: #373f50;
            font-size: 12px;
          }
          .emptyCart {
            height: 180px;
            width: 180px;
            margin: auto;
            background-color: #fb696a;
            border-radius: 50%;
            color: white;
            font-size: 15px;
            font-weight: bold;
          }
          .slidecart {
            z-index: 200;
            display: d-flex;
            position: fixed;
            right: 0;
            width: 100%;
            align-items: center;
            justify-content: space-between;
            height: 100%;
          }
          .overlay {
            width: 75%;
            background-color: #190f0fc4;
            height: 100%;
            position: fixed;
            left: 0;
            top: 0;
          }
          .cart {
            width: 25%;
            right: 0;
            position: fixed;
            height: 100vh;
            overflow-y: auto;
          }
          .subtotal {
            font-size: 20px;
          }
          @media (max-width: 768px) {
            .overlay {
              width: 25%;
            }
            .cart {
              width: 75%;
            }
            .slidecart {
              z-index: 2000;
            }
            .sidebar-cart-product-wrapper.custom-scrollbar {
              height: 300px;
            }
            .subtotal {
              font-size: 16px;
            }
          }
        `}
      </style>
    </div>
  );
}
