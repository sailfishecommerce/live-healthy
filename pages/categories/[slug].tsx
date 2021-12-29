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
  console.log("category", category);
  return (
    <Applayout
      title={`${category.name} | Free Delivery to HK | Live healthy Online Store`}
    >
      <Head>
        <meta name="description" content={category.meta_description} />
        <meta name="keywords" content={category.name} />
        <meta name="description" content={category.meta_description} />
        <meta property="og:title" content={category.meta_title} key="ogtitle" />
        <meta property="og:type" content="category" />
        <meta
          property="og:url"
          content={`https://www.livehealthy.hk/categories/${category.slug}`}
          key="ogurl"
        />
        <meta
          property="og:image"
          content={category.images[0].file.url}
          key="ogimage"
        />
        <meta
          property="og:image:secure_url"
          content={category.images[0].file.url}
          key="ogimage"
        />
        <meta property="og:site_name" content="Live healthy" key="ogsitename" />
        <meta
          property="og:description"
          content={category.meta_description}
          key="ogdesc"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content={category.meta_title}
          key="ogtwtitle"
        />
        <meta name="twitter:description" content={category.meta_description} />
      </Head>
      <CategoryMarketplace category={category} />
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
