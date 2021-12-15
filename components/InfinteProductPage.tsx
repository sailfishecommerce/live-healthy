import { useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import ProductList from "./ProductList";
import { useAppSelector } from "@/hooks/useRedux";
import Product from "./Product";
import { productType } from "@/types";

export default function InfinteProductPage({ products }: any) {
  const { productView } = useAppSelector((state) => state.shop);
  const productSlice = products.slice(0, 30);
  const [productCounter, setProductCounter] = useState(30);
  const [storeProducts, setStoreProducts] = useState(productSlice);

  function fetchData() {
    const newProductSlice = products.slice(
      productCounter,
      Number(productCounter + 30)
    );
    const newProductList = storeProducts.concat(newProductSlice);
    setStoreProducts(newProductList);
    setProductCounter((productCount) => productCount + 30);
  }

  return (
    <InfiniteScroll
      dataLength={storeProducts.length}
      next={fetchData}
      hasMore={true}
      style={{ overflow: "none" }}
      className="row"
      loader={<h4>Loading...</h4>}
      endMessage={
        <p style={{ textAlign: "center" }}>
          <b>Yay! You have seen it all</b>
        </p>
      }
    >
      {storeProducts.map((product: productType, index: number) => {
        return productView === "grid" ? (
          <Product key={index} product={product} />
        ) : (
          <ProductList key={index} product={product} />
        );
      })}
    </InfiniteScroll>
  );
}
