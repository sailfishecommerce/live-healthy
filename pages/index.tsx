import { GetStaticProps } from "next";
import dynamic from "next/dynamic";
import {
  ComponentRenderData,
  PlasmicRootProvider,
} from "@plasmicapp/loader-react";
import Error from "next/error";
import PlasmicLayout from "@/layout/Plasmiclayout";
import { PLASMIC } from "../plasmic-init";

const DyanmicPlasmicComponent: any = dynamic(() =>
  import("@plasmicapp/loader-nextjs").then(
    (response: any) => response.PlasmicComponent
  )
);

export default function Indexpage(props: {
  plasmicData?: ComponentRenderData;
}) {
  const { plasmicData } = props;
  if (!plasmicData || plasmicData.entryCompMetas.length === 0) {
    return <Error statusCode={404} />;
  }
  return (
    <PlasmicLayout>
      <PlasmicRootProvider loader={PLASMIC} prefetchedData={plasmicData}>
        <DyanmicPlasmicComponent component="header-section" />
        <DyanmicPlasmicComponent component="HomepageSlider" />
        <DyanmicPlasmicComponent component="popular-category-section" />
        <DyanmicPlasmicComponent component="trending-product-section" />
        <DyanmicPlasmicComponent component="ads-banner-section" />
        <DyanmicPlasmicComponent component="featured-category-section" />
        <DyanmicPlasmicComponent component="info-section" />
        <DyanmicPlasmicComponent component="footer-section" />
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
