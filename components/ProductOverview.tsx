import { useEffect } from "react";
import ProductBanner from "./ProductBanner";
import ProductDescription from "./ProductDescription";
import ProductGalleryDetails from "./ProductGalleryDetails";
import ProductReviews from "./ProductReviews";
import { algoliaClientRecommend } from "@/lib/algoliaConfig";

interface ProductOverviewProps {
  pageProduct?: any;
}

export default function ProductOverview({ pageProduct }: ProductOverviewProps) {
  console.log("pageProducts", pageProduct);

  useEffect(() => {
    algoliaClientRecommend
      .getRelatedProducts([
        {
          indexName: "New_Livehealthy_products_index",
          objectID: pageProduct.ObjectID,
        },
      ])
      .then(({ results }) => {
        console.log(results);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <ProductBanner product={pageProduct} />
      <ProductGalleryDetails product={pageProduct} />
      <ProductDescription product={pageProduct} />
      <ProductReviews product={pageProduct} />
      {/* <SingleShopProductCarousel1
        product={pageProduct}
        otherProducts={products}
      /> */}
    </div>
  );
}
