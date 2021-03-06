/* eslint-disable react-hooks/exhaustive-deps */
import Link from "next/link";

import useMarketplaceCategory from "@/hooks/useMarketplaceCategory";
import RatingStar from "./RatingStar";

interface CategoryProps {
  category: {
    name: string;
    slug: string;
    images: {
      file: {
        url: string;
      };
      name: string;
    }[];
  };
}
export default function Category({ category }: CategoryProps): JSX.Element {
  const selectedFooterCategory = useMarketplaceCategory();

  return (
    <div className="category col-12  px-0 px-sm-2 my-2 mb-sm-4">
      <div className="card product-card card-static">
        <button
          className="btn-wishlist btn-sm"
          type="button"
          aria-label="Add to Wishlist"
          data-bs-toggle="tooltip"
          data-bs-placement="left"
          title="Add to wishlist "
        >
          <i className="ci-heart"></i>
        </button>
        {category?.images && (
          <Link href={`/collections/product-type/${category.slug}`} passHref>
            <a
              onClick={() => selectedFooterCategory(category.name)}
              className="card-img-top d-block overflow-hidden"
            >
              <img
                height={300}
                width={400}
                className="categoryImg"
                src={category.images[0].file.url}
                alt={category.name}
                loading="lazy"
              />
            </a>
          </Link>
        )}
        <div className="card-body py-2">
          <h3 className="product-title fs-sm">
            <Link href={`/collections/${category.slug}`} passHref>
              <a onClick={() => selectedFooterCategory(category.name)}>
                {category.name}
              </a>
            </Link>
          </h3>
          <RatingStar rate={5} />
        </div>
      </div>
      <style jsx>
        {`
          .categoryImg {
            height: 200px;
            width: 100%;
            max-height: 250px;
          }
          .card-img-top .categoryImg:hover {
            transform: scale(1.03);
            -webkit-transition: -webkit-transform 300ms ease-in 0s;
            -webkit-transition: -webkit-transform 300ms ease-in 0s;
            transition: transform 300ms ease-in 0s;
          }
          @media (max-width: 768px) {
            .category {
              padding: 0px 5px !important;
            }
          }
        `}
      </style>
    </div>
  );
}
