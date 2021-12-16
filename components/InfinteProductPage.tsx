import { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { connectHits } from "react-instantsearch-dom";

import { useAppSelector } from "@/hooks/useRedux";
import ShopLoader from "@/components/ShopLoader";
import ProductList from "./ProductList";
import Product from "./Product";
import { productType } from "@/types";

interface InfinteProductsListProps {
  hits: productType[];
}

function InfinteProductsList({ hits }: InfinteProductsListProps) {
  const filterHits = hits.filter((fhits) => fhits.images.length !== 0);
  console.log("hits", hits.length, "filter", filterHits.length);
  const { productView } = useAppSelector((state) => state.shop);
  const [productCounter, setProductCounter] = useState(30);
  const productSlice = filterHits?.slice(0, 30);
  const [storeProducts, setStoreProducts] = useState(productSlice);

  useEffect(() => {}, [hits]);

  function fetchData() {
    const newProductSlice = filterHits?.slice(
      productCounter,
      Number(productCounter + 30)
    );
    const newProductList: any = storeProducts?.concat(newProductSlice);
    setStoreProducts(newProductList);
    setProductCounter((productCount) => productCount + 30);
  }

  return (
    <>
      {filterHits.length > 0 ? (
        <InfiniteScroll
          dataLength={storeProducts?.length}
          next={fetchData}
          hasMore={true}
          style={{ overflow: "none" }}
          className="row"
          loader={<ShopLoader />}
          endMessage={
            <p style={{ textAlign: "center" }}>
              <b>Yay! You have seen it all</b>
            </p>
          }
        >
          {storeProducts?.map((product: productType, index: number) => {
            return productView === "grid" ? (
              <Product key={index} product={product} />
            ) : (
              <ProductList key={index} product={product} />
            );
          })}
        </InfiniteScroll>
      ) : (
        <ShopLoader />
      )}
    </>
  );
}

const InfinteProductPage = connectHits(InfinteProductsList);

export default InfinteProductPage;
