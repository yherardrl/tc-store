import React, { useState } from "react";
import { FaStar } from "react-icons/fa";

const StarRating = ({ rating, setRating }) => {
  const [hover, setHover] = useState(null);

  return (
    <div>
      <div className="starsContainer">
        {[...Array(5)].map((star, i) => {
          const ratingVal = i + 1;
          return (
            <label className="starMargins" key={i}>
              <input
                className="inputRadio"
                type="radio"
                name="rating"
                value={ratingVal}
                onClick={() => setRating(ratingVal)}
              />
              <FaStar
                className="stars"
                color={ratingVal <= (hover || rating) ? "#e7cf34" : "grey"}
                size={50}
                onMouseEnter={() => setHover(ratingVal)}
                onMouseLeave={() => setHover(null)}
              />
            </label>
          );
        })}
      </div>
      <p style={{ backgroundColor: "white" }}>La valoracion es {rating}</p>
    </div>
  );
};

export default StarRating;
