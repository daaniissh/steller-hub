import React from "react";

function StarRating({ rating, title, id }) {
  let stars = [];
  for (let i = 0; i < 5; i++) {
    stars.push(
      <input
        type="radio"
        key={i}
        name={title + id}
        disabled
        checked={rating >= i * 25}
        className="mask mask-star-2 bg-pink-700"
      />
    );
  }
  return stars;
}

export default StarRating;
