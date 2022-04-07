import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import React, { Component } from "react";
import { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import "../../styles/card-main.css";
import { FavoriteButton } from "./favoritebutton";

export const Card = (props) => {
  const { store, actions } = useContext(Context);
  return (
    <div className="col-12 col-lg">
      <div className="card h-100 position-relative">
        <div className="fav position-absolute">
          <FavoriteButton meal={props.meal} />
        </div>
        <Link
          to={{
            pathname: `/meals/details/${props.meal.id}`,
            state: { meal: props.meal },
          }}
        >
          <img src={props.meal.image} className="card-img-top" alt="..." />
        </Link>
        <div className="card-body">
          <Link
            to={{
              pathname: `/meals/details/${props.meal.id}`,
              state: { meal: props.meal },
            }}
          >
            <h5 className="card-title">{props.meal.title}</h5>
          </Link>
          <p className="card-text" style={{ margin: "0", padding: "0" }}>
            Prep Time: {props.meal.readyInMinutes}
          </p>
          <p className="card-text" style={{ margin: "0", padding: "0" }}>
            {props.meal.nutrition.nutrients[0].name}{" "}
            {props.meal.nutrition.nutrients[0].amount}
          </p>
          <p className="card-text" style={{ margin: "0", padding: "0" }}>
            Servings: {props.meal.servings}
          </p>
          <p className="card-text" style={{ margin: "0", padding: "0" }}>
            Price:{" "}
            {`$${
              Math.round(
                ((Math.floor(props.meal.pricePerServing) / 100) *
                  props.meal.servings +
                  Number.EPSILON) *
                  100
              ) / 100
            }`}
          </p>
        </div>
        {!store.cart.map((meal) => meal.id).includes(props.meal.id) ? (
          <button
            type="button"
            className="btn btn-light"
            onClick={() => {
              actions.AddMealToCart(props.meal);
            }}
          >
            Add to Cart
          </button>
        ) : (
          <button
            type="button"
            className="btn btn-light"
            onClick={() => {
              actions.deleteAMeal(props.meal.id);
            }}
          >
            Remove from Cart
          </button>
        )}
      </div>
    </div>
  );
};

Card.propTypes = {
  img: PropTypes.string,
  name: PropTypes.string,
};
