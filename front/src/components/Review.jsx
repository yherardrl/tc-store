import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import StarRating from "./StarRating";
// import { Spinner } from "react-bootstrap";

const Review = ({
  singleUser,
  onSubmiteHandler,
  textAreaHandler,
  singleProductReviews,
  rating,
  setRating,
}) => {
  const [dejoReview, setDejoReview] = useState(false);

  useEffect(() => {
    setDejoReview(false);
    singleProductReviews &&
      singleProductReviews.forEach((reviews) => {
        reviews.user._id == singleUser.id ? setDejoReview(true) : null;
      });
  });

  return dejoReview == true && singleUser.name ? (
    <div className="formulario">
      <h2 className="h2">Did you buy this product {singleUser.name}?</h2>
      <h3 className="h3">Then, please, leave us a review</h3>
      <form onSubmit={onSubmiteHandler}>
        <div>Rate our product</div>

        <StarRating rating={rating} setRating={setRating} />

        <div>Write your feedback</div>
        <textarea
          onChange={textAreaHandler}
          className="textarea"
          rows="10"
        ></textarea>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  ) : null;
};

export default Review;
