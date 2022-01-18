/* eslint-disable react-hooks/rules-of-hooks */
import swell from "swell-node";
import { PlasmicComponent } from "@plasmicapp/loader-react";
import { PlasmicRootProvider } from "@plasmicapp/loader-react";
import swellNodeInit from "@/lib/swellNode";

import { PLASMIC } from "../plasmic-init";

export default function Homepage({ products }: any) {
  console.log("products", products);
  return (
    <PlasmicRootProvider loader={PLASMIC}>
      <PlasmicComponent component="Nav" />
    </PlasmicRootProvider>
  );
}

export async function getStaticProps(context: any) {
  swellNodeInit();
  const data = await swell.get("/products", {
    where: { select_store: "livehealthy" },
    limit: 50,
    page: 1,
  });
  console.log("data", data);
  return {
    props: {
      products: data.results,
    },
  };
}
