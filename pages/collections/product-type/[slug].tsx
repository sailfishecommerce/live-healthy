/* eslint-disable react-hooks/rules-of-hooks */
import Head from "next/head";

import Applayout from "@/layout/Applayout";
import { categoryType } from "@/types";
import CollectionMarketplace from "@/components/CollectionMarketplace";
import getStoreCategories from "@/lib/getStoreCategories";
import styles from "@/styles/shop.module.css";
import CategoryMetatag from "@/components/CategoryMetatag";

interface collectionProps {
  collection: categoryType;
}
export default function Category({ collection }: collectionProps): JSX.Element {
  return (
    <Applayout
      title={`${collection.name} | Free Delivery to HK | Live healthy Online Store`}
    >
      <CategoryMetatag collection={collection} />
      <div className={styles.shop}>
        {/* <CollectionMarketplace collection={collection} /> */}
        <h1>Hello</h1>
      </div>
    </Applayout>
  );
}

// export async function getStaticProps({ params }: { params: { slug: string } }) {
//   const storeCategories: any[] = await getStoreCategories();

//   const collection = storeCategories?.filter(
//     (collection: { slug: any }) => collection?.slug === params.slug
//   );

//   return {
//     props: {
//       collection: collection[0],
//     },
//   };
// }

export async function getStaticPaths() {
  const storeCategories: any[] = await getStoreCategories();

  return {
    paths:
      storeCategories?.map(
        (collection: { slug: any }) =>
          `/collections/product-type/${collection.slug}`
      ) || [],
    fallback: false,
  };
}
