import {
  PlasmicComponent,
  ComponentRenderData,
  PlasmicRootProvider,
} from "@plasmicapp/loader-nextjs";
import { GetStaticPaths, GetStaticProps } from "next";
import Error from "next/error";

import PlasmicLayout from "@/layout/Plasmiclayout";
import { PLASMIC } from "../plasmic-init";

export default function CatchallPage(props: {
  plasmicData?: ComponentRenderData;
}) {
  const { plasmicData } = props;
  if (!plasmicData || plasmicData.entryCompMetas.length === 0) {
    return <Error statusCode={404} />;
  }
  const pageMeta = plasmicData.entryCompMetas[0];
  return (
    <PlasmicLayout>
      <PlasmicRootProvider loader={PLASMIC} prefetchedData={plasmicData}>
        <PlasmicComponent component={pageMeta.name} />
      </PlasmicRootProvider>
    </PlasmicLayout>
  );
}

export const getStaticProps: GetStaticProps = async (context: any) => {
  const { catchall } = context.params ?? {};

  // Convert the catchall param into a path string
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
  } else {
    // This is some non-Plasmic catch-all page
    return {
      props: {},
    };
  }
};

export const getStaticPaths: GetStaticPaths = async () => {
  const pages = await PLASMIC.fetchPages();
  return {
    paths: pages.map((page: any) => ({
      params: { catchall: page.path.substring(1).split("/") },
    })),
    fallback: false,
  };
};
