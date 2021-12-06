import SingleShopProductCarousel1 from "./Carousel/SingleShopProductCarousel1";
import ProductBanner from "./ProductBanner";
import ProductDescription from "./ProductDescription";
import ProductGalleryDetails from "./ProductGalleryDetails";
import ProductReviews from "./ProductReviews";

interface ProductOverviewProps {
  products?: any;
  pageProduct?: any;
}

export default function ProductOverview({
  products,
  pageProduct,
}: ProductOverviewProps) {
  return (
    <div>
      <ProductBanner product={pageProduct} />
      <ProductGalleryDetails product={pageProduct} />
      <ProductDescription product={pageProduct} />
      <ProductReviews product={pageProduct} />
      <SingleShopProductCarousel1
        product={pageProduct}
        otherProducts={products}
      />
    </div>
  );
}
