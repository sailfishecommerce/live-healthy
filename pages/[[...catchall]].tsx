/* eslint-disable react-hooks/rules-of-hooks */
import axios from "axios";
import swell from "swell-node";
import dynamic from "next/dynamic";
import { GetStaticPaths, GetStaticProps } from "next";

import {
  ComponentRenderData,
  PlasmicRootProvider,
} from "@plasmicapp/loader-react";
import Error from "next/error";
import { PLASMIC } from "../plasmic-init";
import PlasmicLayout from "@/layout/Plasmiclayout";
import useLiveHealthyProduct from "@/hooks/useLiveHealthyProducts";

const DyanmicPlasmicComponent: any = dynamic(() =>
  import("@plasmicapp/loader-nextjs").then(
    (response: any) => response.PlasmicComponent
  )
);

export default function PlasmicLoaderPage(props: {
  plasmicData?: ComponentRenderData;
}) {
  const { plasmicData } = props;
  if (!plasmicData || plasmicData.entryCompMetas.length === 0) {
    return <Error statusCode={404} />;
  }
  return (
    <PlasmicLayout>
      <PlasmicRootProvider loader={PLASMIC} prefetchedData={plasmicData}>
        <DyanmicPlasmicComponent
          component={plasmicData.entryCompMetas[0].name}
        />
      </PlasmicRootProvider>
    </PlasmicLayout>
  );
}

export const getStaticProps: GetStaticProps = async (context) => {
  const { catchall } = context.params ?? {};
  // const products = useLiveHealthyProduct();

  // console.log("data getStaticProps", products);

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
  // const data = useLiveHealthyProduct();

  return {
    paths: pageModules.map((mod) => ({
      params: {
        catchall: mod.path.substring(1).split("/"),
      },
    })),
    fallback: false,
  };
};
