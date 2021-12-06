/* eslint-disable react-hooks/rules-of-hooks */
import useSwellProducts from "@/hooks/useSwellProducts";
import Applayout from "@/layout/Applayout";
import ProductOverview from "@/components/ProductOverview";
import { useRouter } from "next/router";

interface ProductPage {
  products: any;
  pageProduct: any;
}
export default function ProductPage({ products, pageProduct }: ProductPage) {
  return (
    <Applayout title={pageProduct.name}>
      <ProductOverview products={products} pageProduct={pageProduct} />
    </Applayout>
  );
}

export async function getStaticProps({ params }: { params: { slug: string } }) {
  const { allProducts } = useSwellProducts();
  const data: any = await allProducts();
  const allProductsArray = data?.results;

  const pageProduct = allProductsArray?.filter(
    (product: { slug: any }) => product?.slug === params.slug
  );

  return {
    props: {
      pageProduct: pageProduct[0],
      products: data?.results,
    },
  };
}

export async function getStaticPaths() {
  const { allProducts } = useSwellProducts();
  const data: any = await allProducts();
  const allProductsArray = data?.results;

  return {
    paths:
      allProductsArray?.map(
        (product: { slug: any }) => `/products/${product.slug}`
      ) || [],
    fallback: false,
  };
}
