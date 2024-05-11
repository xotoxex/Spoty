import React, { useState } from "react";
import { useContext } from "../App";

function Review({ params }) {
  const { star, Setstar, bol } = useContext();
  const paramss = parseInt(params.id);
  const revnum = star
    .filter((item) => item.post_id === paramss)
    .map((item) => item.rev);

  const newar = star.filter((item) => item.post_id !== paramss);

  const changeReview = (rating) => {
    if (bol === "true") {
      const newStar = [...newar, { rev: rating, post_id: paramss }];
      Setstar(newStar);
    } else {
      alert("login to rate");
    }
  };

  return (
    <div className="stars">
      <div className="1" onClick={() => changeReview(1)}>
        {revnum > 0 ? (
          <i className="fa-solid fa-star"></i>
        ) : (
          <i className="fa-regular fa-star"></i>
        )}
      </div>
      <div className="2" onClick={() => changeReview(2)}>
        {revnum > 1 ? (
          <i className="fa-solid fa-star"></i>
        ) : (
          <i className="fa-regular fa-star"></i>
        )}
      </div>
      <div className="3" onClick={() => changeReview(3)}>
        {revnum > 2 ? (
          <i className="fa-solid fa-star"></i>
        ) : (
          <i className="fa-regular fa-star"></i>
        )}
      </div>
      <div className="4" onClick={() => changeReview(4)}>
        {revnum > 3 ? (
          <i className="fa-solid fa-star"></i>
        ) : (
          <i className="fa-regular fa-star"></i>
        )}
      </div>
      <div className="5" onClick={() => changeReview(5)}>
        {star.find((item) => item.post_id === paramss && item.rev >= 5) ? (
          <i className="fa-solid fa-star"></i>
        ) : (
          <i className="fa-regular fa-star"></i>
        )}
      </div>
    </div>
  );
}

export default Review;
