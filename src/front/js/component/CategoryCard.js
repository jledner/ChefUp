import React from "react";
import propTypes from "prop-types";

import "../../styles/index.css";
export const CategoryCard = (props) => {
  return (
    <div className="card category-card bg-dark text-white text-center">
      <img src={props.cuisine.img} class="card-img" alt="..." />
      <div className="card-img-overlay">
        <h5>{props.cuisine.name}</h5>
      </div>
    </div>
  );
};
