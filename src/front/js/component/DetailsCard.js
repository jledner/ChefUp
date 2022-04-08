import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import React, { Component } from "react";
import { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import "../../styles/card-main.css";
import { FavoriteButton } from "./favoritebutton";
import { CartButton } from "./CartButton";

export const DetailsCard = (props) => {
  const { store, actions } = useContext(Context);
  return (
    <div className="col-12 col-lg">
      <div className="card h-100 position-relative" id="testid">
        <div className="fav position-absolute" id="transparent">
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

        {!store.cart.map((meal) => meal.id).includes(props.meal.id) ? (
          <button
            type="button"
            className="btn btn-light"
            onClick={() => {
              actions.AddMealToCart(props.meal);
            }}
          >
            Add to cart
          </button>
        ) : (
          <button
            type="button"
            className="btn btn-light"
            onClick={() => {
              actions.deleteAMeal(props.meal.id);
            }}
          >
            Remove from cart
          </button>
        )}
      </div>
    </div>
  );
};

DetailsCard.propTypes = {
  img: PropTypes.string,
  name: PropTypes.string,
};
