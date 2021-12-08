/* eslint-disable react-hooks/rules-of-hooks */
import swell from "swell-node";
import Applayout from "@/layout/Applayout";
import ProductOverview from "@/components/ProductOverview";
import { getLiveHealthyProduct } from "@/hooks/useSwellProducts";
import swellNodeInit from "@/lib/swellNode";

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
  swellNodeInit();
  const products = await swell.get("/products", {
    where: { select_store: "livehealthy" },
  });
  const pageProduct = products.results.filter(
    (product: { slug: any }) => product?.slug === params.slug
  );

  return {
    props: {
      pageProduct: pageProduct[0],
      products,
    },
  };
}

export async function getStaticPaths() {
  swellNodeInit();
  const products = await swell.get("/products", {
    where: { select_store: "livehealthy" },
  });

  return {
    paths:
      products.results.map(
        (product: { slug: any }) => `/products/${product.slug}`
      ) || [],
    fallback: false,
  };
}
