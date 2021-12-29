import { useEffect } from "react";
import { useRouter } from "next/router";

import Applayout from "@/layout/Applayout";
import VendorView from "@/components/VendorView";

export default function Vendors() {
  const router = useRouter();
  const { query } = router;

  useEffect(() => {
    router.isReady;
  }, [router.isReady]);

  console.log("query", query);
  return (
    <Applayout title="Shop for gloves, medic supplies, mask and respirators ...">
      <VendorView vendorQuery={query} />
    </Applayout>
  );
}
