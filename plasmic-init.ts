import { initPlasmicLoader } from "@plasmicapp/loader-nextjs";

import Error404 from "./components/404Error";
import PasswordReset from "./components/account-recovery/PasswordReset";
import ContactBanner from "./components/banners/ContactusBanner";
import ProductBanner from "./components/banners/ProductBanner";
import ShippingBanner from "./components/banners/ShippingBanner";
import BlogOverview from "./components/blog/BlogOverview";
import ContactusCard from "./components/cards/ContactusCard";
import Footer from "./components/footer/";
import Header from "./components/header";
import OrderHistory from "./components/order/OrderHistory";
import AboutusOverview from "./components/page-view/AboutusOverview";
import AccountOverview from "./components/page-view/AccountOverview";
import ContactusMapFormView from "./components/page-view/ContactusMapFormView";
import PartnerOutlet from "./components/page-view/PartnerOutlet";
import UserReviews from "./components/reviews/UserReviews";
import AccountDetail from "./components/shipping/AccountDetail";
import BestSellerSlider from "./components/slider/BestSellerSlider";
import HomepageSlider from "./components/slider/HomepageSlider";
import ProductSlider from "./components/slider/ProductSlider";
import ProductTabSlider from "./components/slider/ProductTabSlider";
import Values from "./components/values";

export const PLASMIC = initPlasmicLoader({
  projects: [
    {
      id: "66VbGm9b15WKJ87v7sQuGU",
      token:
        "S5yanTB19i7QRbGa3hNUnewYQBOvMxrnyJEJNQEyKgG4YjtlEeaFJpkMzZuOxnl8uZk0jbN3IFlTdtZeA",
    },
  ],
  preview: true,
});

PLASMIC.registerComponent(Header, {
  name: "Header",
  props: {},
  isDefaultExport: true,
});

PLASMIC.registerComponent(HomepageSlider, {
  name: "HomepageSlider",
  props: {},
  isDefaultExport: true,
});

PLASMIC.registerComponent(Footer, {
  name: "Footer",
  props: {},
  isDefaultExport: true,
});

PLASMIC.registerComponent(ProductSlider, {
  name: "Product Slider",
  props: {
    title: {
      displayName: "Title",
      type: "string",
    },
    tags: {
      displayName: "Tags",
      type: "object",
    },
    tabColor: {
      displayName: "Tab Color",
      type: "string",
    },
    productName: {
      displayName: "Product Name",
      type: "string",
    },
    randomColor: {
      displayName: "Random Color",
      type: "boolean",
    },
  },
  isDefaultExport: true,
});

PLASMIC.registerComponent(ProductBanner, {
  name: "Product Banner",
  props: {},
  isDefaultExport: true,
});

PLASMIC.registerComponent(BlogOverview, {
  name: "Blog Overview ",
  props: {},
  isDefaultExport: true,
});


PLASMIC.registerComponent(ShippingBanner, {
  name: "Shipping Banner",
  props: {},
  isDefaultExport: true,
});

PLASMIC.registerComponent(UserReviews, {
  name: "User Reviews",
  props: {},
  isDefaultExport: true,
});

PLASMIC.registerComponent(Values, {
  name: "Our Values",
  props: {},
  isDefaultExport: true,
});

PLASMIC.registerComponent(Error404, {
  name: "Error404",
  props: {},
  isDefaultExport: true,
});

PLASMIC.registerComponent(ProductTabSlider, {
  name: "Product Tab Slider",
  props: {},
  isDefaultExport: true,
});

PLASMIC.registerComponent(BestSellerSlider, {
  name: "BestSeller Slider",
  props: {},
  isDefaultExport: true,
});

PLASMIC.registerComponent(ContactusMapFormView, {
  name: "Contactus Map Form View",
  props: {},
  isDefaultExport: true,
});

PLASMIC.registerComponent(ContactBanner, {
  name: "Contact Banner",
  props: {},
  isDefaultExport: true,
});

PLASMIC.registerComponent(PasswordReset, {
  name: "Password Reset",
  props: {},
  isDefaultExport: true,
});

PLASMIC.registerComponent(ContactusCard, {
  name: "Contact us Card",
  props: {},
  isDefaultExport: true,
});

PLASMIC.registerComponent(PartnerOutlet, {
  name: "Partner Outlet",
  props: {},
  isDefaultExport: true,
});

PLASMIC.registerComponent(AboutusOverview, {
  name: "Aboutus Overview",
  props: {},
  isDefaultExport: true,
});

PLASMIC.registerComponent(AccountOverview, {
  name: "Account Overview",
  props: {},
  isDefaultExport: true,
});

PLASMIC.registerComponent(AccountDetail, {
  name: "Account Details",
  props: {},
  isDefaultExport: true,
});

PLASMIC.registerComponent(OrderHistory, {
  name: "Order History",
  props: {},
  isDefaultExport: true,
});