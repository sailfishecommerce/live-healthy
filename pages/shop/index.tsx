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

export async function getServerSideProps() {
  swellNodeInit();
  const products = await swell.get("/products", {
    where: { select_store: "livehealthy" },
    limit: 600,
  });

  return {
    props: {
      products: products.results,
    },
  };
}
