/* eslint-disable react-hooks/rules-of-hooks */
import Head from "next/head";

import Applayout from "@/layout/Applayout";
import useCategory from "@/hooks/useCategory";
import { categoryType, productType } from "@/types";
import Marketplace from "@/components/Marketplace";

interface CategoryProps {
  category: categoryType;
  allCategoriesArray: [];
}
export default function Category({ category }: CategoryProps): JSX.Element {
  console.log("category", category);
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
  const { listAllCategory } = useCategory();
  const data: any = await listAllCategory();
  const allCategoriesArray = data?.results;

  const category = allCategoriesArray?.filter(
    (category: { slug: any }) => category?.slug === params.slug
  );

  return {
    props: {
      category: category[0],
      allCategoriesArray,
    },
  };
}

export async function getStaticPaths() {
  const { listAllCategory } = useCategory();
  const data: any = await listAllCategory();
  const allCategoriesArray = data?.results;

  return {
    paths:
      allCategoriesArray?.map(
        (category: { slug: any }) => `/categories/${category.slug}`
      ) || [],
    fallback: false,
  };
}
