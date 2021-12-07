/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { useQuery } from "react-query";

import LoadProducts from "@/components/ProductsLoader";
import useSwellProducts, {
  useDocsuppliesProduct,
} from "@/hooks/useSwellProducts";
import Product from "./Product";
import { productType } from "@/types";

export default function TrendingProducts() {
  const { listProducts } = useSwellProducts();
  const { docsuppliesProduct, docsuppliesStatus } = useDocsuppliesProduct();

  const { data, status, error } = useQuery("listProducts", listProducts);

  return (
    <section className="container pt-md-3 pb-5 mb-md-3 w-100">
      <h2 className="h3 text-center">Trending products</h2>
      {status === "error" ? (
        "unable to fetch products"
      ) : status === "loading" ? (
        <LoadProducts />
      ) : (
        <div className="row pt-4 mx-n2">
          {data.results.map((product: productType) => (
            <Product key={product.id} product={product} />
          ))}
        </div>
      )}
      <div className="text-center pt-5 mt-5">
        <Link href="/shop" passHref>
          <a className="btn btn-outline-accent">
            More products<i className="ci-arrow-right ms-1"></i>
          </a>
        </Link>
      </div>
    </section>
  );
}
