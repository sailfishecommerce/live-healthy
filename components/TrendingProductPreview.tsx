/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import Product from "./Product";
import { productType } from "@/types";

interface PropsType {
  products: productType[];
}

export default function TrendingProductsPreview({ products }: PropsType) {
  return (
    <section className="container pt-md-3 pb-5 mb-md-3 w-100">
      <h2 className="text-center trending">Trending products</h2>
      <div className="row pt-4 mx-n2">
        {products.map((product: productType) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
      <div className="text-center pt-5 mt-5">
        <Link href="/shop" passHref>
          <a className="btn btn-outline-accent">
            More products<i className="ci-arrow-right ms-1"></i>
          </a>
        </Link>
      </div>
      <style jsx>
        {`
          @media (max-width: 768px) {
            h2.trending {
              font-size: 20px;
            }
          }
        `}
      </style>
    </section>
  );
}
