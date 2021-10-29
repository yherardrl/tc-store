import React from "react";
import { Spinner, Jumbotron } from "react-bootstrap";

const ContenedorDeReviews = ({ singleProductReviews }) => {
  return (
    <Jumbotron className="reviewsContainer">
      <h2>Reviews:</h2>
      {singleProductReviews ? (
        singleProductReviews.map((review) => {
          return (
            <div key={review._id} className="reviewsbox">
              <h3 style={{ textAlign: "left" }}>{review.user.name} dijo:</h3>
              <h4>{review.description}</h4>
            </div>
          );
        })
      ) : (
          <Spinner className="spinner" animation="border" variant="light" />
        )}
    </Jumbotron>
  );
};

export default ContenedorDeReviews;
