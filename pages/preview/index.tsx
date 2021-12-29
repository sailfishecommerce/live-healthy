/* eslint-disable react-hooks/exhaustive-deps */
import Head from "next/head";
import { useEffect } from "react";
import swell from "swell-node";
import swellNodeInit from "@/lib/swellNode";

import FeaturedCategory from "@/components/FeaturedCategory";
import InfoCards from "@/components/InfoCards";
import { ShopByBrandPreview } from "@/components/ShopByBrands";
import PopularCategories from "@/components/PopularCategories";
import Banners from "@/components/Banner";
import Applayout from "@/layout/Applayout";
import HomepageSlider from "@/previewComponents/HomepageSlider";
import useVbout from "@/hooks/useVbout";
import { useCart } from "@/hooks";
import { useAppDispatch, useAppSelector } from "@/hooks/useRedux";
import { createCartVbout } from "@/redux/integration-slice";
import { productType } from "@/types";
import TrendingProductsPreview from "@/components/TrendingProductPreview";

interface PropsType {
  products: productType[];
}

export default function Index({ products }: PropsType) {
  const { createVboutCart } = useVbout();
  const dispatch = useAppDispatch();
  const vboutSlice = useAppSelector((state) => state.integrations);
  const { cart }: any = useCart();

  const vboutContent = {
    id: cart?.id,
    cartId: cart?.id,
    email: cart?.account?.email,
    customerInfo: {
      firstname: cart?.account?.firstname,
      lastname: cart?.account?.lastname,
    },
  };

  useEffect(() => {
    if (cart !== null && !vboutSlice?.vbout.createCart) {
      dispatch(createCartVbout());
      createVboutCart(vboutContent);
    }
  }, [cart]);

  return (
    <Applayout title="Live healthy Store - Quality Australian Products - Free Shipping to HK">
      <Head>
        <meta property="og:site_name" content="Live healthy" />
        <meta property="og:url" content="https://livehealthy.hk/" />
        <meta
          property="og:title"
          content="Live healthy Store - Quality Australian Products - Free Shipping to HK"
        />
        <meta property="og:type" content="website" />
        <meta
          name="description"
          content="No minimum orders and free shipping to Hong Kong. Quality imported products from Australia. Choose from over 10,000 genuine health, personal care, confectionery, beauty and baby care products. Get vitamins, health and food supplements, cosmetics, confectionery, quit smoking aids, hair colours, baby food and much more. Owned & operated by HK'ers."
        />

        <meta name="twitter:site" content="@https://" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Live healthy Store - Quality Australian Products - Free Shipping to HK"
        />
        <meta property="og:image:width" content="1000" />
        <meta property="og:image:height" content="1000" />
        <meta
          property="og:image"
          content="https://cdn.shopify.com/s/files/1/0040/1699/6481/files/Facebook_DP_97730035-fb01-4b92-930e-1e651e16b00b.png?v=1627736864"
        />
        <meta
          name="twitter:description"
          content="No minimum orders and free shipping to Hong Kong. Quality imported products from Australia. Choose from over 10,000 genuine health, beauty and baby care products. Get vitamins, health and food supplements, cosmetics, quit smoking aids, hair colours, baby food and much more. Owned &amp; operated by HK'ers."
        />
        <script type="application/ld+json">
          {`{
            "@context": "https://schema.org",
            "@type": "Organization",
            "url":"https://livehealthy.hk/",
            "logo": "//cdn.shopify.com/s/files/1/0040/1699/6481/files/Sailfish-logo.png?v=1626620681"
          }`}
        </script>
        <script type="application/ld+json">
          {`{
            "@context": "https://schema.org",
            "@type": "Organization",
            "url":"https://livehealthy.hk/",
            "logo": "//cdn.shopify.com/s/files/1/0040/1699/6481/files/Sailfish-logo.png?v=1626620681"
          }`}
        </script>
      </Head>
      <HomepageSlider
        bgColor1="#3aafd2"
        bgColor2="#f5b1b0"
        bgColor3="#eba170"
        sliderTitle1="Huge Summer Collection"
        sliderTitle2="Women Sportswear Sale"
        sliderTitle3="New Men Accessories"
        sliderCaption1="Has just arrived!"
        sliderCaption2="Hurry up! Limited time offer."
        sliderCaption3="Complete your look with"
        sliderDescription1="Swimwear, Tops, Shorts, Sunglasses &amp; much more..."
        sliderDescription2="Sneakers, Keds, Sweatshirts, Hoodies &amp; much more..."
        sliderDescription3="Hats &amp; Caps, Sunglasses, Bags &amp; much more..."
        sliderImg1="/img/home/hero-slider/01.jpg"
        sliderImg2="/img/home/hero-slider/02.jpg"
        sliderImg3="/img/home/hero-slider/03.jpg"
      />
      <PopularCategories />
      <TrendingProductsPreview products={products} />
      <FeaturedCategory
        categoryTitle="Shop for medicine"
        categoryCaption="Get started now"
        bannerBgColor="#e2e9ef"
      />
      <Banners
        banner1Title="Hurry up! Limited time offer"
        banner2Title="Your Add Banner Here"
        banner1Caption="Converse All Star on Sale"
        banner2Caption="Hurry up to reserve your spot"
      />
      <ShopByBrandPreview />
      <InfoCards
        section1Title="Read the blog"
        section1Description="Latest store, fashion news and trends"
        section1BgColor="#FEF1F1"
        section2Title="Follow on Instagram"
        section2Description="Latest store, fashion news and trends"
        section2BgColor="#EFEFFB"
      />
      <style jsx>
        {`
          @media (min-width: 800px) {
            .reviewBadge {
              width: 400px;
            }
          }
          @media (max-width: 768px) {
            .reviewBadge {
              display: none;
            }
          }
        `}
      </style>
    </Applayout>
  );
}

export async function getStaticProps() {
  swellNodeInit();
  const products = await swell.get("/products", {
    where: { select_store: "livehealthy" },
    limit: 30,
  });

  return {
    props: {
      products: products.results,
    },
    revalidate: 60,
  };
}
