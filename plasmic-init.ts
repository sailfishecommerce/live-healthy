import { initPlasmicLoader } from "@plasmicapp/loader-nextjs";

import Error404 from "./components/404Error";
import ProductBanner from "./components/banners/ProductBanner";
import ShippingBanner from "./components/banners/ShippingBanner";
import Footer from "./components/footer/";
import Header from "./components/header";
import ProductReview from "./components/product/ProductReview";
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
      type: "string",
    },
    tabColor: {
      displayName: "Tab Color",
      type: "string",
    },
    productName: {
      displayName: "Product Name",
      type: "string",
    },
    productClassName: {
      displayName: "ClassName",
      type: "string",
    },
    randomColor: {
      displayName: "Random Color",
      type: "string",
    },
  },
  isDefaultExport: true,
});

PLASMIC.registerComponent(ProductBanner, {
  name: "Ads Banner",
  props: {},
  isDefaultExport: true,
});

PLASMIC.registerComponent(ShippingBanner, {
  name: "Shipping Banner",
  props: {},
  isDefaultExport: true,
});

PLASMIC.registerComponent(ProductReview, {
  name: "Product Review",
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
