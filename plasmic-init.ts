import { initPlasmicLoader } from "@plasmicapp/loader-nextjs";
import Header from "@/plasmicComponent/Header";
import HomepageSlider from "@/plasmicComponent/HomepageSlider";
import PopularCategories from "./components/PopularCategories";
import Footer from "./components/Footer";
import TrendingProducts from "./components/TrendingProducts";
import Banners from "./components/Banner";
import ShopByBrand, { Brand } from "./components/ShopByBrands";
import InfoCards from "./components/InfoCards";
import FeaturedCategory from "./components/FeaturedCategory";
import Error404 from "./components/404Error";
import ProductBanner from "./components/ProductBanner";
import ProductDescription from "./components/ProductDescription";
import ProductGalleryDetails from "./components/ProductGalleryDetails";
import ProductReviews from "./components/ProductReviews";
import PopularCategory from "./components/PopularCategory";
import ProductOverview from "./components/ProductOverview";
import Checkout from "./components/Checkout";

export const PLASMIC = initPlasmicLoader({
  projects: [
    {
      id: "66VbGm9b15WKJ87v7sQuGU",
      token:
        "S5yanTB19i7QRbGa3hNUnewYQBOvMxrnyJEJNQEyKgG4YjtlEeaFJpkMzZuOxnl8uZk0jbN3IFlTdtZeA",
    },
  ],

  preview: false,
});

PLASMIC.registerComponent(Header, {
  name: "Header",
  props: {
    logo: "slot",
    headerSliderText1: {
      displayName: "Topbar Content - Text 1",
      type: "string",
      defaultValue: "Free shipping for order over $200",
    },
    headerSliderText2: {
      displayName: "Topbar Content - Text 2",
      type: "string",
      defaultValue: "We return money within 30 days",
    },
    headerSliderText3: {
      displayName: "Topbar Content - Text 2",
      type: "string",
      defaultValue: "Delivery to your doorstep",
    },
    support: "string",
    topbarBgColor: {
      displayName: "Topbar Background Color",
      type: "string",
      defaultValue: "#373F50",
    },
    navBgColor: {
      displayName: "Nav Background Color",
      defaultValue: "white",
      type: "string",
    },
  },
  isDefaultExport: true,
});

PLASMIC.registerComponent(HomepageSlider, {
  name: "HomepageSlider",
  props: {
    sliderTitle1: {
      type: "string",
      displayName: "Slider-1 title",
      defaultValue: "Huge Summer Collection",
    },
    sliderCaption1: {
      type: "string",
      displayName: "Slider-1 Caption",
      defaultValue: "Has just arrived!",
    },
    sliderDescription1: {
      type: "string",
      displayName: "Slider-1 Description",
      defaultValue: "Swimwear, Tops, Shorts, Sunglasses &amp; much more...",
    },
    sliderImg1: {
      type: "slot",
      displayName: "Slider-1 Image",
    },
    bgColor1: {
      type: "string",
      displayName: "Slider-3 background color",
      defaultValue: "#3aafd2",
    },
    sliderTitle2: {
      type: "string",
      displayName: "Slider-2 title",
      defaultValue: "Women Sportswear Sale",
    },
    sliderCaption2: {
      type: "string",
      displayName: "Slider-2 Caption",
      defaultValue: "Hurry up! Limited time offer.",
    },
    sliderDescription2: {
      type: "string",
      displayName: "Slider-2 Description",
      defaultValue: "Sneakers, Keds, Sweatshirts, Hoodies &amp; much more...",
    },
    sliderImg2: {
      type: "slot",
      displayName: "Slider-2 Image",
    },
    bgColor2: {
      type: "string",
      displayName: "Slider-3 background color",
      defaultValue: "#f5b1b0",
    },
    sliderTitle3: {
      type: "string",
      displayName: "Slider-3 title",
      defaultValue: "New Men Accessories",
    },

    sliderCaption3: {
      type: "string",
      displayName: "Slider-3 Caption",
      defaultValue: "Complete your look with",
    },

    sliderDescription3: {
      type: "string",
      displayName: "Slider-3 Description",
      defaultValue: "Hats &amp; Caps, Sunglasses, Bags &amp; much more...",
    },

    sliderImg3: {
      type: "slot",
      displayName: "Slider-3 Image",
    },
    bgColor3: {
      type: "string",
      displayName: "Slider-3 background color",
      defaultValue: "#eba170",
    },
  },
});

PLASMIC.registerComponent(Footer, {
  name: "Footer",
  props: {
    topSectionBgColor: {
      displayName: "Top Section Background Color",
      type: "string",
      defaultValue: "#373F50",
    },
    bottomSectionBgColor: {
      displayName: "Bottom Section Background Color",
      type: "string",
      defaultValue: "#2B3445",
    },
  },
  isDefaultExport: true,
});

PLASMIC.registerComponent(TrendingProducts, {
  name: "Trending Products",
  props: {},
  isDefaultExport: true,
});

PLASMIC.registerComponent(PopularCategories, {
  name: "Popular Categories",
  props: {
    children: "slot",
  },
  isDefaultExport: true,
});

PLASMIC.registerComponent(PopularCategory, {
  name: "Popular Category",
  props: {
    categoryImg: {
      displayName: "Category Image",
      type: "slot",
    },
    categoryName: {
      displayName: "Category Name",
      type: "string",
    },
  },
  isDefaultExport: true,
});

PLASMIC.registerComponent(Banners, {
  name: "Ads Banner",
  props: {
    banner1Title: {
      displayName: "Banner-1 Title",
      type: "string",
      defaultValue: "Hurry up! Limited time offer",
    },
    banner1Caption: {
      displayName: "Banner-1 Caption",
      type: "string",
      defaultValue: "Converse All Star on Sale",
    },
    banner2Title: {
      displayName: "Banner-2 Title",
      type: "string",
      defaultValue: "Your Add Banner Here",
    },
    banner2Caption: {
      displayName: "Banner-2 Caption",
      type: "string",
      defaultValue: "Hurry up to reserve your spot",
    },
  },
  isDefaultExport: true,
});

PLASMIC.registerComponent(Brand, {
  name: "Brand",
  props: {
    brand: {
      displayName: "brand image",
      type: "slot",
    },
  },
});

PLASMIC.registerComponent(ShopByBrand, {
  name: "Shop by brand",
  props: {
    children: "slot",
  },
  isDefaultExport: true,
});

PLASMIC.registerComponent(InfoCards, {
  name: "Info Card",
  props: {
    section1Title: {
      displayName: "Section-1 Title",
      type: "string",
      defaultValue: "Read the blog",
    },
    section1Description: {
      displayName: "Section-1 Description",
      type: "string",
      defaultValue: "Latest store, fashion news and trends",
    },
    section2Title: {
      displayName: "Section-2 Title",
      type: "string",
      defaultValue: "Follow on Instagram",
    },
    section2Description: {
      displayName: "Section-1 Description",
      type: "string",
      defaultValue: "Latest store, fashion news and trends",
    },
    section1BgColor: {
      displayName: "Section-1 background color",
      type: "string",
      defaultValue: "#FEF1F1",
    },
    section2BgColor: {
      displayName: "Section-2 background color",
      type: "string",
      defaultValue: "#EFEFFB",
    },
  },
  isDefaultExport: true,
});

PLASMIC.registerComponent(FeaturedCategory, {
  name: "Featured Category",
  props: {
    categoryImg: {
      displayName: "Category Banner Image",
      type: "slot",
    },
    categoryTitle: {
      displayName: "Category Title",
      type: "string",
      defaultValue: "Shop for medicine",
    },
    categoryCaption: {
      displayName: "Category Caption",
      type: "string",
      defaultValue: "Get started now",
    },
    bannerBgColor: {
      displayName: "Category banner background color",
      type: "string",
      defaultValue: "#e2e9ef",
    },
  },
  isDefaultExport: true,
});

PLASMIC.registerComponent(Error404, {
  name: "Error404",
  props: {},
  isDefaultExport: true,
});

PLASMIC.registerComponent(ProductBanner, {
  name: "Product Banner",
  props: {},
  isDefaultExport: true,
});

PLASMIC.registerComponent(ProductDescription, {
  name: "Product Description",
  props: {},
  isDefaultExport: true,
});

PLASMIC.registerComponent(ProductGalleryDetails, {
  name: "Product Gallery Details",
  props: {},
  isDefaultExport: true,
});

PLASMIC.registerComponent(ProductReviews, {
  name: "Product Review",
  props: {},
  isDefaultExport: true,
});

PLASMIC.registerComponent(ProductOverview, {
  name: "Product Overview",
  props: {},
  isDefaultExport: true,
});

PLASMIC.registerComponent(Checkout, {
  name: "Checkout component",
  props: {},
  isDefaultExport: true,
});
