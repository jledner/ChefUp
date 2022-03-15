import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import React, { Component } from "react";

export const Card = (props) => {
  
  return (
  <div className="col">
    <div className="card bg-dark text-white">
      <img
        src={props.meal.img}
        className="card-img-top"
        alt="..."
        style={{
          minWidth: "20em",
          maxWidth: "20em",
          minHeight: "10em",
          maxHeight: "10em",
          objectFit: "cover",
          margin: "auto",
          padding: "0",
        }}
      />
      <div className="card-body">
        <h5 className="card-title">{props.meal.name}</h5>
        <p className="card-text" style={{ margin: "0", padding: "0" }}>
          Prep time: 20 minutes
        </p>
        <p className="card-text" style={{ margin: "0", padding: "0" }}>
          Calories: 500
        </p>
        <p className="card-text" style={{ margin: "0", padding: "0" }}>
          Price: $5.99
        </p>
      </div>
      <button type="button" className="btn btn-light">
        Add to Cart
      </button>
    </div>
  </div>)
};

Card.propTypes = {
  img: PropTypes.string,
  name: PropTypes.string,
};
