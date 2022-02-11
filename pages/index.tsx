/* eslint-disable react-hooks/exhaustive-deps */
import swell from "swell-node";
import { useEffect } from "react";
import dynamic from "next/dynamic";

import swellNodeInit from "@/lib/swellNode";
import Applayout from "@/layout/Applayout";
import useUserToken from "@/hooks/useUserToken";

const Hero = dynamic(() => import("@/components/Hero"));
const Metatag = dynamic(() => import("@/components/Metatag"));
const TrendingProducts = dynamic(() => import("@/components/TrendingProduct"));
const ShopByBrand = dynamic(() => import("@/components/ShopByBrand"));
const Banners = dynamic(() => import("@/components/Banner"));
const InfoCards = dynamic(() => import("@/components/InfoCards"));
const FeaturedCategory = dynamic(() => import("@/components/FeaturedCategory"));

export default function Index({ products }: any) {
  const { generateUserToken, authorized } = useUserToken();

  useEffect(() => {
    generateUserToken();
  }, [authorized]);

  return (
    <Applayout title="Live healthy Store - Quality Australian Products - Free Shipping to HK">
      <Metatag />
      <Hero />
      <TrendingProducts products={products} />
      <FeaturedCategory />
      <Banners />
      <ShopByBrand />
      <InfoCards />
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
