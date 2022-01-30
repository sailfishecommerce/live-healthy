import { memo } from "react";

import LoadProducts from "@/components/ProductsLoader";
import { useLiveHealthyProduct } from "@/hooks/useSwellProducts";
import Product from "./Product";
import { productType } from "@/types";
import useMediaQuery from "@/hooks/useMediaQuery";

function TrendingProductsFromSwell() {
  const { liveHealthyProduct, liveHealthyProductStatus } =
    useLiveHealthyProduct();
  const mobileView = useMediaQuery("(max-width:768px)");

  function updateProductSize(productData: any[]) {
    const productSize = mobileView ? productData.slice(0, 14) : productData;
    console.log("productSize", productSize.length);
    return productSize;
  }

  return (
    <section className="container pt-md-3 pb-0 mb-md-3 w-100">
      <h2 className="h3 text-center">Trending products</h2>
      {liveHealthyProductStatus === "error" ? (
        "unable to fetch products"
      ) : liveHealthyProductStatus === "loading" ? (
        <LoadProducts />
      ) : (
        <div className="row pt-4 mx-n2">
          {liveHealthyProduct.data.length > 0 ? (
            updateProductSize(liveHealthyProduct.data).map(
              (product: productType) => (
                <Product
                  key={product.id}
                  product={product}
                  algoliaEvent="click"
                />
              )
            )
          ) : (
            <h2 className="text-center">No product in this store.</h2>
          )}
        </div>
      )}
      <style jsx>
        {`
          section.container h2 {
            font-size: 25px;
          }
        `}
      </style>
    </section>
  );
}

export const TrendingProducts = memo(TrendingProductsFromSwell);
