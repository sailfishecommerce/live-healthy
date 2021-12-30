import fetchAllSwellProducts from "@/lib/processPageproduct";
import Metatag from "@/components/Metatag";

import Applayout from "@/layout/Applayout";
import VendorView from "@/components/VendorView";
import toTitleCase from "@/lib/formatString";

export default function Vendors({ vendor }) {
  return (
    <Applayout title="Live healthy Store - Quality Australian Products - Free Shipping to HK">
      <Metatag />
      <VendorView vendor={vendor} />
    </Applayout>
  );
}

export async function getStaticProps({ params }) {
  const formatVendor = params.slug.replaceAll("-", " ");
  const vendor = toTitleCase(formatVendor);

  return {
    props: {
      vendor,
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
    paths:
      vendors?.map((vendor) => {
        console.log("vendor");
        const formattedVendor = `/collections/vendors/${vendor
          .toString()
          .replaceAll(" ", "-")}`.toLowerCase();
        return formattedVendor;
      }) || [],
    fallback: false,
  };
}
