import swell from "swell-node";

import swellNodeInit from "@/lib/swellNode";
import Applayout from "@/layout/Applayout";
import Marketplace from "@/components/Marketplace";

interface Shop {
  products: any[];
}

export default function Shop({ products }: Shop) {
  return (
    <Applayout title="Shop for gloves, medic supplies, mask and respirators ...">
      <Marketplace products={products} />
    </Applayout>
  );
}

export async function getStaticProps() {
  swellNodeInit();
  const products = await swell.get("/products", {
    where: { select_store: "livehealthy" },
    limit: 1000,
  });

  return {
    props: {
      products: products.results,
    },
  };
}
