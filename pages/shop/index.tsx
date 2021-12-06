import Applayout from "@/layout/Applayout";
import ShopComponent from "@/components/ShopComponent";
import Marketplace from "@/components/Marketplace";

export default function Shop() {
  return (
    <Applayout title="Shop for gloves, medic supplies, mask and respirators ...">
      {/* <ShopComponent /> */}
      <Marketplace />
    </Applayout>
  );
}
