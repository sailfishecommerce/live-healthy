import { useEffect } from "react";
import { useRouter } from "next/router";
import fetchAllSwellProducts from "@/lib/processPageproduct";

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

export async function getStaticProps({ params }) {
  const productData = await fetchAllSwellProducts();
  const results = await Promise.all(productData);

  let vendorArray = [];
  results[0].map((result) => vendorArray.push(result.vendor));

  let vendors = [...new Set(vendorArray)];

  return {
    props: {
      vendors,
    },
  };
}

export async function getStaticPaths() {
  const productData = await fetchAllSwellProducts();
  const results = await Promise.all(productData);

  let vendorArray = [];
  results[0].map((result) => vendorArray.push(result.vendor));

  let vendors = [...new Set(vendorArray)];

  return {
    paths: vendors?.map((vendor) => `/collections/vendors/${vendor}`) || [],
    fallback: false,
  };
}
