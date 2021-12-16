// import swell from "swell-node";

import Applayout from "@/layout/Applayout";
import Marketplace from "@/components/Marketplace";
import { productType } from "@/types";

interface ShopProps {
  products: productType;
}

export default function Shop() {
  return (
    <Applayout title="Shop for gloves, medic supplies, mask and respirators ...">
      <Marketplace />
    </Applayout>
  );
}

// export async function getServerSideProps() {
//   swellNodeInit();
//   const products = await swell.get("/products", {
//     where: { select_store: "livehealthy" },
//     limit: 400,
//   });

//   return {
//     props: {
//       products: products.results,
//     },
//   };
// }
