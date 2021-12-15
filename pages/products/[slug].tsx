import swell from "swell-node";

import Applayout from "@/layout/Applayout";
import ProductOverview from "@/components/ProductOverview";
import swellNodeInit from "@/lib/swellNode";

interface ProductPage {
  pageProduct: any;
}
export default function ProductPage({ pageProduct }: ProductPage) {
  return (
    <Applayout title={pageProduct.name}>
      <ProductOverview pageProduct={pageProduct} />
    </Applayout>
  );
}

type propsType = {
  params: { slug: string };
};

export async function getStaticProps({ params }: propsType) {
  swellNodeInit();
  const products = await swell.get("/products", {
    where: { select_store: "livehealthy" },
    limit: 1000,
  });

  const pageProduct = products.results.filter(
    (product: { slug: any }) => product?.slug === params.slug
  );

  return {
    props: {
      pageProduct: pageProduct[0],
    },
  };
}

export async function getStaticPaths() {
  swellNodeInit();
  const products = await swell.get("/products", {
    where: { select_store: "livehealthy" },
    limit: 1000,
  });
  const loopProductCount = Math.ceil(products.count / 1000);
  const productArray = new Array(loopProductCount).fill(0);

  async function fetchSwellProducts(page: number) {
    const products = await swell.get("/products", {
      where: { select_store: "livehealthy" },
      limit: 1000,
      page,
    });
    return products;
  }

  return {
    paths:
      products.results.map(
        (product: { slug: any }) => `/products/${product.slug}`
      ) || [],
    fallback: false,
  };
}
