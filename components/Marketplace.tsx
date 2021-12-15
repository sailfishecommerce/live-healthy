/* eslint-disable @next/next/no-img-element */
import axios from "axios";
import { useQuery } from "react-query";
import { InstantSearch, Pagination, Configure } from "react-instantsearch-dom";
import Link from "next/link";
import searchClient from "@/lib/algoliaConfig";
import AlgoliaCurrentRefinement from "@/components/AlgoliaCurrentRefinement";

import Categories from "@/components/Categories";
import ShopBannerToolbar from "./ShopBannerToolbar";
import { HitProduct, HitProductList } from "@/components/ProductHit";
import InfinteProductPage from "./InfinteProductPage";

export default function Marketplace({ products }: any) {
  function fetchProducts() {
    return axios.get("/api/fetch-products");
  }
  const { data, status, error } = useQuery("fetchStoreProducts", fetchProducts);

  console.log("data", data?.data);

  return (
    <InstantSearch
      indexName={`${process.env.NEXT_PUBLIC_ALGOLIA_INDEX_NAME}`}
      searchClient={searchClient}
    >
      <Configure hitsPerPage={24} />
      <div className="page-title-overlap bg-dark pt-4">
        <div className="container d-lg-flex justify-content-between py-2 py-lg-3">
          <div className="order-lg-2 mb-3 mb-lg-0 pt-lg-2">
            <nav aria-label="breadcrumb">
              <AlgoliaCurrentRefinement />
              <ol className="breadcrumb breadcrumb-light flex-lg-nowrap justify-content-center justify-content-lg-start">
                <li className="breadcrumb-item">
                  <Link href="/" passHref>
                    <a className="text-nowrap">Home</a>
                  </Link>
                </li>
                <li className="breadcrumb-item text-nowrap">
                  <a>Shop</a>
                </li>
              </ol>
            </nav>
          </div>
        </div>
      </div>
      <div className="container pb-5 mb-2 mb-md-4">
        <div className="row">
          <Categories />
          <section className="col-lg-9">
            <ShopBannerToolbar />
            <div>
              <div className="row mx-n2 mb-5">
                {/* {productView === "grid" ? <HitProduct /> : <HitProductList />} */}
                <InfinteProductPage products={products} />
              </div>
              <hr className="mb-2" />
            </div>
          </section>
        </div>
      </div>
    </InstantSearch>
  );
}
