/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import swell from "swell-node";
import dynamic from "next/dynamic";

import swellNodeInit from "@/lib/swellNode";
import FeaturedCategory from "@/components/FeaturedCategory";
import PopularCategories from "@/components/PopularCategories";
import Applayout from "@/layout/Applayout";
import HomepageSlider from "@/components/HomepageSlider";
import Metatag from "@/components/Metatag";
import useUserToken from "@/hooks/useUserToken";

const TrendingProducts = dynamic(() => import("@/components/TrendingProduct"));
const ShopByBrand = dynamic(() => import("@/components/ShopByBrand"));
const Banners = dynamic(() => import("@/components/Banner"));
const InfoCards = dynamic(() => import("@/components/InfoCards"));

export default function Index({ products }: any) {
  const { generateUserToken, authorized } = useUserToken();

  useEffect(() => {
    generateUserToken();
  }, [authorized]);

  return (
    <Applayout title="Live healthy Store - Quality Australian Products - Free Shipping to HK">
      <Metatag />
      <HomepageSlider />
      <PopularCategories />
      <TrendingProducts products={products} />
      <FeaturedCategory />
      <Banners />
      <ShopByBrand />
      <InfoCards />
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
  const products: any = await swell.get("/products", {
    where: { select_store: "livehealthy" },
  });

  return {
    props: {
      products: products.results,
    },
  };
}
