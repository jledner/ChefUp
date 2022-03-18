import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import React, { Component } from "react";
import { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";

export const TutorialCard = (props) => {
  return (
    <div className="col m-5">
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
          <h5 className="card-title">{props.meal.title}</h5>
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
          Add to Cart(functional I think)
        </button>
      </div>
    </div>
  );
};

TutorialCard.propTypes = {
  img: PropTypes.string,
  name: PropTypes.string,
};
