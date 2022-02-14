/* eslint-disable react-hooks/exhaustive-deps */
import dynamic from "next/dynamic";
import { useEffect } from "react";

import Applayout from "@/layout/Applayout";
import useUserToken from "@/hooks/useUserToken";

const Hero = dynamic(() => import("@/components/Hero"));
const Metatag = dynamic(() => import("@/components/Metatag"));
const TrendingProducts = dynamic(() => import("@/components/TrendingProduct"));
const ShopByBrand = dynamic(() => import("@/components/ShopByBrand"));
const Banners = dynamic(() => import("@/components/Banner"));
const InfoCards = dynamic(() => import("@/components/InfoCards"));
const FeaturedCategory = dynamic(() => import("@/components/FeaturedCategory"));

export default function Index() {
  const { generateUserToken, authorized } = useUserToken();

  useEffect(() => {
    generateUserToken();
  }, [authorized]);

  return (
    <Applayout title="Live healthy Store - Quality Australian Products - Free Shipping to HK">
      <Metatag />
      <Hero />
      <TrendingProducts />
      <FeaturedCategory />
      <Banners />
      <ShopByBrand />
      <InfoCards />
    </Applayout>
  );
}
