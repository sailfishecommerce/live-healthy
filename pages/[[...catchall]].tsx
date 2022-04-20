import { PlasmicComponent } from "@plasmicapp/loader-nextjs";
import { GetStaticPaths, GetStaticProps } from "next";

import {
  ComponentRenderData,
  PlasmicRootProvider,
} from "@plasmicapp/loader-react";
import Error from "next/error";
import { PLASMIC } from "../plasmic-init";
import PlasmicLayout from "@/layout/Plasmiclayout";

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
        <PlasmicComponent component={plasmicData.entryCompMetas[0].name} />
      </PlasmicRootProvider>
    </PlasmicLayout>
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
    paths: pageModules.map((mod: any) => ({
      params: {
        catchall: mod.path.substring(1).split("/"),
      },
    })),
    fallback: false,
  };
};
