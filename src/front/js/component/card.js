import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import React, { Component } from "react";
import { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

//The Card component is used twice by Jeff in the profilepage view, but with two minor modifications
export const Card = (props) => {
  const { store, actions } = useContext(Context);

  const [isInCart, setIsInCart] = useState(
    store.cart.map((meal) => meal.id).includes(props.meal.id)
  );

  return (
    <div className="col">
      <div className="card bg-dark text-white">
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
            Price per serving:{" "}
            {`$${
              (Math.floor(props.meal.pricePerServing) / 100) *
              props.meal.servings
            }`}
          </p>
        </div>
        {!isInCart ? (
          <button
            type="button"
            className="btn btn-light"
            onClick={() => {
              actions.AddMealToCart(props.meal);
              setIsInCart(true);
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
              setIsInCart(false);
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
