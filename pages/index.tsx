import dynamic from "next/dynamic";
import { PlasmicRootProvider } from "@plasmicapp/loader-react";
import PlasmicLayout from "@/layout/Plasmiclayout";
import { PLASMIC } from "../plasmic-init";

const DyanmicPlasmicComponent: any = dynamic(() =>
  import("@plasmicapp/loader-nextjs").then(
    (response: any) => response.PlasmicComponent
  )
);

export default function Indexpage() {
  return (
    <PlasmicLayout>
      <PlasmicRootProvider loader={PLASMIC}>
        <DyanmicPlasmicComponent component="Header" />
        <DyanmicPlasmicComponent component="HomepageSlider" />
        <DyanmicPlasmicComponent component="PopularCategories" />
        <DyanmicPlasmicComponent component="TrendingProducts" />
        <DyanmicPlasmicComponent component="Adsbanner" />
        <DyanmicPlasmicComponent component="FeaturedCategory" />
        <DyanmicPlasmicComponent component="InfoCard" />
        <DyanmicPlasmicComponent component="Footer" />
      </PlasmicRootProvider>
    </PlasmicLayout>
  );
}
