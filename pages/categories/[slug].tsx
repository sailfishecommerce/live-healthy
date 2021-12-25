/* eslint-disable react-hooks/rules-of-hooks */
import Head from "next/head";

import Applayout from "@/layout/Applayout";
import { categoryType } from "@/types";
import Marketplace from "@/components/Marketplace";
import getStoreCategories from "@/lib/getStoreCategories";

interface CategoryProps {
  category: categoryType;
  storeCategories: any[];
}
export default function Category({
  category,
  storeCategories,
}: CategoryProps): JSX.Element {
  console.log("category", category);
  console.log("storeCategories", storeCategories);
  return (
    <Applayout title={`${category.name} category`}>
      <Head>
        <meta name="description" content={category.metaDescription} />
      </Head>
      <Marketplace />
    </Applayout>
  );
}

export async function getStaticProps({ params }: { params: { slug: string } }) {
  const storeCategories: any[] = await getStoreCategories();

  const category = storeCategories?.filter(
    (category: { slug: any }) => category?.slug === params.slug
  );

  return {
    props: {
      category: category[0],
      storeCategories,
    },
  };
}

export async function getStaticPaths() {
  const storeCategories: any[] = await getStoreCategories();

  return {
    paths:
      storeCategories?.map(
        (category: { slug: any }) => `/categories/${category.slug}`
      ) || [],
    fallback: false,
  };
}
