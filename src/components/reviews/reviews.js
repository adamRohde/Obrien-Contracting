import React from "react";
import data from "../../Data/data";

function reviews() {
  return (
    <div className="reviews-container">
      <div className="h2-container">
        <h2>Reviews</h2>
      </div>
      <p>{data.reviews.review1}</p>
      <p>{data.reviews.review2}</p>
      <p>{data.reviews.review3}</p>
    </div>
  );
}

export default reviews;
