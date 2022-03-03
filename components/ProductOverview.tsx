import useSwellProducts from "@/hooks/useSwellProducts";
import { useQuery } from "react-query";

import ProductBanner from "./ProductBanner";
import ProductDescription from "./ProductDescription";
import ProductGalleryDetails from "./ProductGalleryDetails";
import ProductReviews from "./ProductReviews";
import RelatedProductSlider from "./RelatedProductSlider";
import SpinnerRipple from "./spinnerLoader";

interface ProductOverviewProps {
  pageProduct?: any;
}

export default function ProductOverview({ pageProduct }: ProductOverviewProps) {
  console.log("product_type", pageProduct.product_type);
  const { getProductsInCategory } = useSwellProducts();
  const { data, status } = useQuery("getProductsInCategory", () =>
    getProductsInCategory(pageProduct.product_type)
  );

  console.log("data getProductsInCategory", data?.results);
  return (
    <div>
      <ProductBanner product={pageProduct} />
      <ProductGalleryDetails product={pageProduct} />
      <ProductDescription product={pageProduct} />
      {/* <ProductReviews product={pageProduct} /> */}
      {status === "error" ? (
        ""
      ) : status === "loading" ? (
        <SpinnerRipple />
      ) : (
        <RelatedProductSlider relatedProducts={data.results} />
      )}
    </div>
  );
}
