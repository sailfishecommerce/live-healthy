import useSwellProducts from "@/hooks/useSwellProducts";
import { useQuery } from "react-query";
import ProductBanner from "./ProductBanner";
import ProductDescription from "./ProductDescription";
import ProductGalleryDetails from "./ProductGalleryDetails";
import ProductReviews from "./ProductReviews";

interface ProductOverviewProps {
  pageProduct?: any;
}

export default function ProductOverview({ pageProduct }: ProductOverviewProps) {
  const { getProductsInCategory } = useSwellProducts();
  const { data } = useQuery("getProductsInCategory", () =>
    getProductsInCategory(pageProduct.product_type)
  );

  console.log("data getProductsInCategory", data?.results);
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
