import { memo, useCallback, useRef } from "react";
import { useVirtual } from "react-virtual";

import LoadProducts from "@/components/ProductsLoader";
import { useLiveHealthyProduct } from "@/hooks/useSwellProducts";
import Product from "./Product";
import { productType } from "@/types";

function TrendingProductsFromSwell() {
  const { liveHealthyProduct, liveHealthyProductStatus } =
    useLiveHealthyProduct();

  const parentRef: any = useRef();

  const rowVirtualizerFixed = useVirtual({
    size: liveHealthyProduct?.data.length,
    parentRef,
    estimateSize: useCallback(() => 10, []),
    overscan: 6,
  });

  return (
    <section className="container pt-md-3 pb-0 mb-md-3 w-100">
      <h2 className="h3 text-center">Trending products</h2>
      {liveHealthyProductStatus === "error" ? (
        "unable to fetch products"
      ) : liveHealthyProductStatus === "loading" ? (
        <LoadProducts />
      ) : (
        <div
          // ref={parentRef}
          // style={{ height: `${rowVirtualizerFixed.totalSize}px` }}
          className="row pt-4 mx-n2"
        >
          {liveHealthyProduct.data.length > 0 ? (
            liveHealthyProduct.data.map((product: productType) => (
              <Product
                key={product.id}
                product={product}
                algoliaEvent="click"
              />
            ))
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
