export default function ProductReviewForm() {
  return (
    <div className="col-md-5 mt-2 pt-4 mt-md-0 pt-md-0">
      <div className="bg-secondary py-grid-gutter px-grid-gutter rounded-3">
        <h3 className="h4 pb-2">Write a review</h3>
        <form className="needs-validation" method="post" noValidate>
          <div className="mb-3">
            <label className="form-label" htmlFor="review-name">
              Your name
              <span className="text-danger">*</span>
            </label>
            <input
              className="form-control"
              type="text"
              required
              id="review-name"
            />
            <div className="invalid-feedback">Please enter your name!</div>
            <small className="form-text text-muted">
              Will be displayed on the comment.
            </small>
          </div>
          <div className="mb-3">
            <label className="form-label" htmlFor="review-email">
              Your email
              <span className="text-danger">*</span>
            </label>
            <input
              className="form-control"
              type="email"
              required
              id="review-email"
            />
            <div className="invalid-feedback">
              Please provide valid email address!
            </div>
            <small className="form-text text-muted">
              Authentication only - we wont spam you.
            </small>
          </div>
          <div className="mb-3">
            <label className="form-label" htmlFor="review-rating">
              Rating
              <span className="text-danger">*</span>
            </label>
            <select className="form-select" required id="review-rating">
              <option value="">Choose rating</option>
              <option value="5">5 stars</option>
              <option value="4">4 stars</option>
              <option value="3">3 stars</option>
              <option value="2">2 stars</option>
              <option value="1">1 star</option>
            </select>
            <div className="invalid-feedback">Please choose rating!</div>
          </div>
          <div className="mb-3">
            <label className="form-label" htmlFor="review-text">
              Review
              <span className="text-danger">*</span>
            </label>
            <textarea
              className="form-control"
              rows={6}
              required
              id="review-text"
            ></textarea>
            <div className="invalid-feedback">Please write a review!</div>
            <small className="form-text text-muted">
              Your review must be at least 50 characters.
            </small>
          </div>
          <div className="mb-3">
            <label className="form-label" htmlFor="review-pros">
              Pros
            </label>
            <textarea
              className="form-control"
              rows={2}
              placeholder="Separated by commas"
              id="review-pros"
            ></textarea>
          </div>
          <div className="mb-3 mb-4">
            <label className="form-label" htmlFor="review-cons">
              Cons
            </label>
            <textarea
              className="form-control"
              rows={2}
              placeholder="Separated by commas"
              id="review-cons"
            ></textarea>
          </div>
          <button
            className="btn btn-primary btn-shadow d-block w-100"
            type="button"
          >
            Submit a Review
          </button>
        </form>
      </div>
    </div>
  );
}
