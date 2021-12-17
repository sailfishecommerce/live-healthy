/* eslint-disable @next/next/no-img-element */
import { InstantSearch, Configure } from "react-instantsearch-dom";
import Link from "next/link";
import searchClient from "@/lib/algoliaConfig";

import AlgoliaCurrentRefinement from "@/components/AlgoliaCurrentRefinement";
import { useAppSelector } from "@/hooks/useRedux";
import Categories from "@/components/Categories";
import ShopBannerToolbar from "./ShopBannerToolbar";
import InfiniteProductHits from "./InfiniteHits";

export default function Marketplace() {
  const { productView } = useAppSelector((state) => state.shop);

  return (
    <InstantSearch
      indexName={`${process.env.NEXT_PUBLIC_ALGOLIA_INDEX_NAME}`}
      searchClient={searchClient}
    >
      <Configure
        hitsPerPage={30}
        clickAnalytics
        distinct
        enablePersonalization={true}
      />
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
                <InfiniteProductHits minHitsPerPage={30} />
              </div>
              <hr className="mb-2" />
            </div>
          </section>
        </div>
      </div>
    </InstantSearch>
  );
}
