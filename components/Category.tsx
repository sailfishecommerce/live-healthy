/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import useMarketplaceCategory from "@/hooks/useMarketplaceCategory";

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
    <div className="category col-lg-4 col-6 px-0 px-sm-2 my-2 mb-sm-4">
      <div className="card product-card card-static">
        <button
          className="btn-wishlist btn-sm"
          type="button"
          data-bs-toggle="tooltip"
          data-bs-placement="left"
          title="Add to wishlist "
        >
          <i className="ci-heart"></i>
        </button>
        {category?.images && (
          <Link href={`/categories/${category.slug}`} passHref>
            <a
              onClick={() => selectedFooterCategory(category.name)}
              className="card-img-top d-block overflow-hidden"
            >
              <img
                className="categoryImg"
                src={category.images[0].file.url}
                alt={category.images[0].name}
              />
            </a>
          </Link>
        )}
        <div className="card-body py-2">
          <h3 className="product-title fs-sm">
            <Link href={`/categories/${category.slug}`} passHref>
              <a onClick={() => selectedFooterCategory(category.name)}>
                {category.name}
              </a>
            </Link>
          </h3>
          <div className="d-flex justify-content-between">
            <div className="star-rating">
              <i className="star-rating-icon ci-star-filled active"></i>
              <i className="star-rating-icon ci-star-filled active"></i>
              <i className="star-rating-icon ci-star-filled active"></i>
              <i className="star-rating-icon ci-star-filled active"></i>
              <i className="star-rating-icon ci-star"></i>
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .categoryImg {
            height: 200px;
            width: 100%;
            max-height: 250px;
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
