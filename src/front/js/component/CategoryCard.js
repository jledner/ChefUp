import React from "react";
import propTypes from "prop-types";
export const CategoryCard = (props) => {
  return (
    <div>
      <div class="card bg-dark text-white">
        <img src={props.img} class="card-img" alt="..." />
        <div class="card-img-overlay">
          <h5 class="card-title">{props.cuisine.name}</h5>
        </div>
      </div>
    </div>
  );
};
