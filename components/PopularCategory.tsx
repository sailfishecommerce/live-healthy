import Link from "next/link";
import useMediaQuery from "@/hooks/useMediaQuery";

import useMarketplaceCategory from "@/hooks/useMarketplaceCategory";

interface PopularCategoryProps {
  category: {
    images: {
      file: {
        url: string;
      };
    }[];
    name: string;
    slug: string;
  };
}

export default function PopularCategory({ category }: PopularCategoryProps) {
  const selectedFooterCategory = useMarketplaceCategory();
  const mobileView = useMediaQuery("(max-width:768px)");
  const size = mobileView
    ? { height: 300, width: 300 }
    : { height: 250, width: 250 };

  return (
    <div className="popularCategory col-12 col-md-4 px-1 mb-grid-gutter">
      <Link href={`/collections/product-type/${category.slug}`} passHref>
        <a
          onClick={() => selectedFooterCategory(category.name)}
          className="imgLink d-flex flex-column text-center text-decoration-none"
        >
          <img
            height={size.height}
            width={size.width}
            src={category.images[0].file.url}
            alt={category.name}
            placeholder="blur"
            loading="lazy"
            className="d-block rounded mx-1 mb-3"
          />
          <h3 className="fs-base pt-1 mb-0">{category.name}</h3>
        </a>
      </Link>
      <style jsx>
        {`
          .popularCategory img {
            height: 200px;
          }
          .popularCategory img:hover {
            -webkit-transform: scale(1.03);
            -moz-transform: scale(1.03);
            -ms-transform: scale(1.03);
            transform: scale(1.03);
            -webkit-transition: -webkit-transform 300ms ease-in 0s;
            transition: transform 300ms ease-in 0s;
          }
          .popularCategory img {
            width: 300px;
            height: 200px;
          }
          .popularCategory:hover h3 {
            color: #fb696a;
          }
          @media (max-width: 768px) {
            .imgLink {
              width: 100%;
              height: 100%;
            }
          }
        `}
      </style>
    </div>
  );
}
