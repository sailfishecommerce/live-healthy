/* eslint-disable react-hooks/exhaustive-deps */
import dynamic from "next/dynamic";
import { useEffect } from "react";
import { GetStaticPaths, GetStaticProps } from "next";
import {
  ComponentRenderData,
  PlasmicRootProvider,
} from "@plasmicapp/loader-react";
import Error from "next/error";
import swell from "swell-js";

import useUserToken from "@/hooks/useUserToken";
import PlasmicLayout from "@/layout/Plasmiclayout";
import Metatag from "@/components/Metatag";
import { PLASMIC } from "../plasmic-init";
import { useAppSelector } from "@/hooks/useRedux";
import { useQueryClient } from "react-query";
import usePrefetch from "@/hooks/usePrefetch";
import useShoppingCart from "@/hooks/useShoppingCart";

const DyanmicPlasmicComponent: any = dynamic(() =>
  import("@plasmicapp/loader-nextjs").then(
    (response: any) => response.PlasmicComponent
  )
);

async function getCart() {
  return await swell.cart.get();
}

export default function PlasmicLoaderPage(props: {
  plasmicData?: ComponentRenderData;
}) {
  const { plasmicData } = props;
  const { generateUserToken } = useUserToken();
  const { getShopCart } = useShoppingCart();
  const { getCategories, fetchCurrencies, getUserAccountDetails, getCart } =
    usePrefetch();

  getCategories();
  fetchCurrencies();
  getUserAccountDetails();
  getCart();
  // const { cart } = useAppSelector((state) => state.storeCart);

  useEffect(() => {
    generateUserToken();
  }, []);

  // useEffect(() => {
  //   generateUserToken();
  // }, [authorized]);
  
  useEffect(() => {
    getCart()
      .then((response) => console.log("cart response", response))
      .catch((error) => console.log("error", error));
  }, []);

  // console.log("store cart", cart);

  // useEffect(() => {
  //   axios
  //     .post("/api/cart/retrieve", { id: "61e93193c5f78c7ecf9787f6" })
  //     .then((response) => console.log("response", response))
  //     .catch((error) => console.log("error", error));
  // }, []);

  if (!plasmicData || plasmicData.entryCompMetas.length === 0) {
    return <Error statusCode={404} />;
  }

  return (
    <>
      <Metatag />
      <PlasmicLayout>
        <PlasmicRootProvider loader={PLASMIC} prefetchedData={plasmicData}>
          <DyanmicPlasmicComponent
            component={plasmicData.entryCompMetas[0].name}
          />
        </PlasmicRootProvider>
      </PlasmicLayout>
    </>
  );
}

export const getStaticProps: GetStaticProps = async (context) => {
  const { catchall } = context.params ?? {};

  const plasmicPath =
    typeof catchall === "string"
      ? catchall
      : Array.isArray(catchall)
      ? `/${catchall.join("/")}`
      : "/";

  const plasmicData = await PLASMIC.maybeFetchComponentData(plasmicPath);
  if (plasmicData) {
    return {
      props: { plasmicData },
    };
  }
  return {
    props: {},
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const pageModules = await PLASMIC.fetchPages();

  return {
    paths: pageModules.map((mod) => ({
      params: {
        catchall: mod.path.substring(1).split("/"),
      },
    })),
    fallback: false,
  };
};
