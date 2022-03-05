import { useQuery } from "react-query";

import useSwellProducts from "@/hooks/useSwellProducts";
import ProductBanner from "./ProductBanner";
import ProductDescription from "./ProductDescription";
import ProductGalleryDetails from "./ProductGalleryDetails";
import RelatedProductSlider from "./RelatedProductSlider";
import SpinnerRipple from "./spinnerLoader";

interface ProductOverviewProps {
  pageProduct?: any;
}

export default function ProductOverview({ pageProduct }: ProductOverviewProps) {
  const { getProductsInCategory } = useSwellProducts();
  const { data, status } = useQuery("getProductsInCategory", () =>
    getProductsInCategory(pageProduct.product_type)
  );

  return (
    <div>
      <ProductBanner product={pageProduct} />
      <ProductGalleryDetails product={pageProduct} />
      <ProductDescription product={pageProduct} />
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
