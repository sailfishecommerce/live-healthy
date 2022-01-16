import { initPlasmicLoader } from "@plasmicapp/loader-nextjs";
import Header from "@/plasmicComponent/Header";
import HomepageSlider from "@/plasmicComponent/HomepageSlider";
import PopularCategories from "./components/PopularCategories";
import Footer from "./components/Footer";
import TrendingProducts from "./components/TrendingProducts";
import Banners from "./components/Banner";
import InfoCards from "./components/InfoCards";
import FeaturedCategory from "./components/FeaturedCategory";
import Error404 from "./components/404Error";
import ProductBanner from "./components/ProductBanner";
import ProductDescription from "./components/ProductDescription";
import ProductGalleryDetails from "./components/ProductGalleryDetails";
import ProductReviews from "./components/ProductReviews";
import PopularCategory from "./components/PopularCategory";
import ProductOverview from "./components/ProductOverview";
import ShopByBrandCarousel from "./components/ShopByBrandCarousel";
import CategoriesProducts from "./components/CategoriesProduct";
import Loadmore from "./components/Loadmore";
import HomepageHits from "@/components/AlgoliaWidgets/HomepageHits";
import TopHeaderSlider from "./components/Carousel/TopHeaderSlider";
import plasmicJson from "@/json/plasmic-init.json";

const plasmicJsonContent: any = plasmicJson;

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
  props: plasmicJsonContent.header,
  isDefaultExport: true,
});

PLASMIC.registerComponent(HomepageSlider, {
  name: "HomepageSlider",
  props: plasmicJsonContent.homepageSlider,
});

PLASMIC.registerComponent(HomepageHits, {
  name: "Homepage Hits",
  props: {},
  isDefaultExport: true,
});
PLASMIC.registerComponent(Loadmore, {
  name: "Load more",
  props: {},
  isDefaultExport: true,
});

PLASMIC.registerComponent(Footer, {
  name: "Footer",
  props: plasmicJsonContent.footer,
  isDefaultExport: true,
});

PLASMIC.registerComponent(CategoriesProducts, {
  name: "Medicine Products",
  props: plasmicJsonContent.medicineProducts,
});

PLASMIC.registerComponent(CategoriesProducts, {
  name: "Hair Care Products",
  props: plasmicJsonContent.hairCareProducts,
});

PLASMIC.registerComponent(CategoriesProducts, {
  name: "Personal Care Products",
  props: plasmicJsonContent.personalCareProducts,
});

PLASMIC.registerComponent(CategoriesProducts, {
  name: "Beauty Products",
  props: plasmicJsonContent.beautyProducts,
});

PLASMIC.registerComponent(CategoriesProducts, {
  name: "Veterinary and Pet Care Products",
  props: plasmicJsonContent.vetProducts,
});

PLASMIC.registerComponent(CategoriesProducts, {
  name: "Confectionery Products",
  props: plasmicJsonContent.confectioneryProducts,
});

PLASMIC.registerComponent(ShopByBrandCarousel, {
  name: "Shop by brand carousel",
  props: plasmicJsonContent.shopByBrand,
  isDefaultExport: true,
});

PLASMIC.registerComponent(TopHeaderSlider, {
  name: "Header Slider",
  props: {
    icon1: "slot",
    icon2: "slot",
    icon3: "slot",
    sliderText1: {
      displayName: "Topbar Content - Text 1",
      type: "string",
      defaultValue: "Free shipping for order over $200",
    },
    sliderText2: {
      displayName: "Topbar Content - Text 2",
      type: "string",
      defaultValue: "We return money within 30 days",
    },
    sliderText3: {
      displayName: "Topbar Content - Text 2",
      type: "string",
      defaultValue: "Delivery to your doorstep",
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
