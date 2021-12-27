/* eslint-disable react-hooks/rules-of-hooks */
import Head from "next/head";

import Applayout from "@/layout/Applayout";
import { categoryType } from "@/types";
import CategoryMarketplace from "@/components/CategoryMarketplace";
import getStoreCategories from "@/lib/getStoreCategories";

interface CategoryProps {
  category: categoryType;
}
export default function Category({ category }: CategoryProps): JSX.Element {
  return (
    <Applayout title={`${category.name} category`}>
      <Head>
        <meta name="description" content={category.metaDescription} />
      </Head>
      <CategoryMarketplace category={category} />
    </Applayout>
  );
}

export async function getStaticProps({ params }: { params: { slug: string } }) {
  const storeCategories: any[] = await getStoreCategories();

  console.log("storeCategories", storeCategories);

  const category = storeCategories?.filter(
    (category: { slug: any }) => category?.slug === params.slug
  );

  return {
    props: {
      category: category[0],
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
