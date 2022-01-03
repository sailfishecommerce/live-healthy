/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { useQuery } from "react-query";
import axios from "axios";

import LoadProducts from "@/components/ProductsLoader";
import { useLiveHealthyProduct } from "@/hooks/useSwellProducts";
import Product from "./Product";
import { productType } from "@/types";

interface CategoriesProductProps {
  category: string;
  title: string;
}

export default function CategoriesProducts({
  category,
  title,
}: CategoriesProductProps) {
  async function getCategoryProduct() {
    return await axios.post("/api/fetch-category-products", { category });
  }

  const { data: categoryProduct }: any = useQuery(
    `${title}Product`,
    getCategoryProduct
  );

  return (
    <section className="container pt-md-3 pb-5 mb-md-3 w-100">
      <h2 className="h3 text-start">{title} products</h2>
      {categoryProduct === "error" ? (
        "unable to fetch products"
      ) : categoryProduct === "loading" ? (
        <LoadProducts />
      ) : (
        <div className="row pt-4 mx-n2">
          {categoryProduct && categoryProduct.data.length > 0 ? (
            categoryProduct.data.map((product: productType) => (
              <Product key={product.id} product={product} />
            ))
          ) : (
            <h2 className="text-center">No product in this store.</h2>
          )}
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
