import React from "react";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Review from "../components/Review";
import { postReview } from "../store/actions/productAction";

const ReviewContainer = () => {
  const dispatch = useDispatch();

  const [review, SetReview] = useState("");
  const [rating, setRating] = useState(0);

  const { singleProduct } = useSelector((state) => state.productsReducer);
  const { singleUser } = useSelector((state) => state.usersReducer);

  const textAreaHandler = (e) => {
    SetReview(e.target.value);
  };

  const onSubmiteHandler = (e) => {
    e.preventDefault();
    dispatch(postReview(singleProduct, { review, rating }));
  };

  return (
    <Review
      onSubmiteHandler={onSubmiteHandler}
      singleUser={singleUser}
      singleProductReviews={singleProduct.reviews}
      textAreaHandler={textAreaHandler}
      rating={rating}
      setRating={setRating}
    />
  );
};

export default ReviewContainer;
