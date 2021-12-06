import { combineReducers } from "@reduxjs/toolkit";

import cartReducer from "@/redux/cart-slice";
import uiReducer from "@/redux/ui-slice";
import authReducer from "@/redux/auth-slice";
import paymentReducer from "@/redux/payment-slice";
import adminTabReducer from "@/redux/admin-tab-slice";
import sliderReducer from "@/redux/slider-slice";
import productReducer from "@/redux/product-slice";
import configReducer from "@/redux/config-slice";
import categoryReducer from "@/redux/category-slice";
import checkoutReducer from "@/redux/checkout-slice";
import airwallexReduxer from "@/redux/airwallex-slice";
import integrationReducer from "@/redux/integration-slice";
import shopReducer from "@/redux/shop-slice";

const rootReducer = combineReducers({
  cart: cartReducer,
  UI: uiReducer,
  auth: authReducer,
  payment: paymentReducer,
  adminTab: adminTabReducer,
  slider: sliderReducer,
  product: productReducer,
  config: configReducer,
  categories: categoryReducer,
  checkout: checkoutReducer,
  airwallex: airwallexReduxer,
  integrations: integrationReducer,
  shop: shopReducer,
});
export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
