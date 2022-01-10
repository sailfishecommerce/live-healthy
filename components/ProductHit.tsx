import { connectHits } from "react-instantsearch-dom";

import Product from "./Product";
import ProductList from "./ProductList";
import LoadProducts from "@/components/ProductsLoader";

export function ProductHit({ hits }: any) {
  console.log("hits", hits);

  return (
    <div className="row pt-4 mx-n2">
      {hits.length > 0 ? (
        hits.map((hit: any, index: number) => (
          <Product key={index} product={hit} />
        ))
      ) : (
        <LoadProducts />
      )}
    </div>
  );
}

export const HitProduct = connectHits(ProductHit);

export function ProductHitList({ hits }: any) {
  return (
    <div className="row mx-n2">
      {hits.length > 0 ? (
        hits.map((hit: any, index: number) => (
          <ProductList key={index} product={hit} />
        ))
      ) : (
        <LoadProducts />
      )}
    </div>
  );
}

export const HitProductList = connectHits(ProductHitList);
