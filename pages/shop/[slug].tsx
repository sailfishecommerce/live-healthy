/* eslint-disable react-hooks/rules-of-hooks */
import Head from "next/head";

import Applayout from "@/layout/Applayout";
import useCategory from "@/hooks/useCategory";
import { categoryType } from "@/types";
import Marketplace from "@/components/Marketplace";

interface CategoryProps {
  category: categoryType;
  allCategoriesArray: [];
}
export default function ShopCategory({ category }: CategoryProps): JSX.Element {
  return (
    <Applayout title={`Shop for ${category.name}`}>
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
  const allShopCategoriesArray = data?.results;

  const shopCategory = allShopCategoriesArray?.filter(
    (shop: { slug: any }) => shop?.slug === params.slug
  );

  return {
    props: {
      category: shopCategory[0],
      allShopCategoriesArray,
    },
  };
}

export async function getStaticPaths() {
  const { listAllCategory } = useCategory();
  const data: any = await listAllCategory();
  const allCategoriesArray = data?.results;

  return {
    paths:
      allCategoriesArray?.map((shop: { slug: any }) => `/shop/${shop.slug}`) ||
      [],
    fallback: false,
  };
}
