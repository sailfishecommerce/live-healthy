import Head from "next/head";
import Applayout from "@/layout/Applayout";
import ProductOverview from "@/components/ProductOverview";
import fetchAllSwellProducts from "@/lib/processPageproduct";

interface ProductPage {
  pageProduct: any;
}
export default function ProductPage({ pageProduct }: ProductPage) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <meta name="keywords" content={pageProduct.tags[0]} />
        <meta name="description" content={pageProduct.description}></meta>
        <meta
          property="og:title"
          content={pageProduct.meta_title}
          key="ogtitle"
        />
        <meta
          property="og:url"
          content={`https://www.livehealthy.hk/${pageProduct.slug}`}
          key="ogurl"
        />
        <meta
          property="og:image"
          content={pageProduct.images[0].file.url}
          key="ogimage"
        />
        <meta property="og:site_name" content="Live healthy" key="ogsitename" />
        <meta
          property="og:description"
          content={pageProduct.description}
          key="ogdesc"
        />
      </Head>
      <Applayout title={pageProduct.meta_title}>
        <ProductOverview pageProduct={pageProduct} />
      </Applayout>
    </>
  );
}

type propsType = {
  params: { slug: string };
};

export async function getStaticProps({ params }: propsType) {
  const productData: any = await fetchAllSwellProducts();
  const results: any = await Promise.all(productData);

  const pageProduct = results[0].filter(
    (product: { slug: any }) => product?.slug === params.slug
  );

  return {
    props: {
      pageProduct: pageProduct[0],
    },
  };
}

export async function getStaticPaths() {
  const productData: any = await fetchAllSwellProducts();

  const results: any = await Promise.all(productData);

  return {
    paths:
      results[0].map((product: { slug: any }) => `/products/${product.slug}`) ||
      [],
    fallback: false,
  };
}
