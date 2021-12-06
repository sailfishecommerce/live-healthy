export default function Rating() {
  return (
    <a href="#reviews" data-scroll>
      <div className="star-rating">
        <i className="star-rating-icon ci-star-filled active"></i>
        <i className="star-rating-icon ci-star-filled active"></i>
        <i className="star-rating-icon ci-star-filled active"></i>
        <i className="star-rating-icon ci-star-filled active"></i>
        <i className="star-rating-icon ci-star"></i>
      </div>
      <span className="d-inline-block fs-sm text-body align-middle mt-1 ms-1">
        74 Reviews
      </span>
    </a>
  );
}
