import Applayout from "@/layout/Applayout";
import Marketplace from "@/components/Marketplace";
import { productType } from "@/types";

interface ShopProps {
  products: productType[];
}

export default function Shop() {
  return (
    <Applayout title="Shop for gloves, medic supplies, mask and respirators ...">
      <Marketplace  />
    </Applayout>
  );
}
