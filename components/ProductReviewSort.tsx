import productReview from "@/json/product-review.json";

export default function ProductReviewSort() {
  return (
    <div className="d-flex justify-content-between pb-4">
      <h2 className="h3 mb-4"> Reviews</h2>
      <div className="d-flex align-items-center flex-nowrap">
        <label
          className="fs-sm text-muted text-nowrap me-2 d-none d-sm-block"
          htmlFor="sort-reviews"
        >
          Sort by:
        </label>
        <select className="form-select form-select-sm" id="sort-reviews">
          {productReview.sortReviews.map((review) => (
            <option key={review}>{review}</option>
          ))}
        </select>
      </div>
    </div>
  );
}
