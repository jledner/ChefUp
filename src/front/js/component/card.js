import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import React, { Component } from "react";

export const Card = (props) => (
  <div className="col">
    <div className="card">
      <img
        src={props.image}
        className="card-img-top"
        alt="..."
        style={{
          minWidth: "20em",
          maxWidth: "20em",
          minHeight: "12em",
          maxHeight: "12em",
          objectFit: "cover",
          margin: "auto",
        }}
      />
      <div className="card-body">
        <h5 className="card-title">Shrimp Tacos</h5>
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
    </div>
  </div>
);

Card.propTypes = {
  image: PropTypes.string,
};
