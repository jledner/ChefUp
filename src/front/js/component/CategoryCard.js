import React from "react";
import propTypes from "prop-types";
export const CategoryCard = (props) => {
  return (
    <div>
      <div className="card bg-dark text-white text-center">
        <img src={props.cuisine.img} class="card-img" alt="..." />
        <div className="card-img-overlay">
          <h5>{props.cuisine.name}</h5>
        </div>
      </div>
    </div>
  );
};
