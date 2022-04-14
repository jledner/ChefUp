import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import React, { Component } from "react";
import { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import "../../styles/card-main.css";
import { FavoriteButton } from "./favoritebutton";
import { CartButton } from "./CartButton";

export const Card = (props) => {
  const { store, actions } = useContext(Context);
  if (props.favorite) {
    return (
      <div className="col-12 col-lg-4 card-wrap">
        <div
          className="card card-main h-100 position-relative justify-content-between fav-card-content"
          id="testid"
        >
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
          <div className="d-flex justify-content-center align-items-center p-3 ">
            <div className="d-flex align-items-center justify-content-between p-3 text-center">
              <div className="d-flex justify-content-center align-items-center icon-wrap text-center">
                <i class="fas fa-utensils"></i>
              </div>
              <div>
                <Link
                  to={{
                    pathname: `/meals/details/${props.meal.id}`,
                    state: { meal: props.meal },
                  }}
                >
                  <h5 className="card-title">{props.meal.title}</h5>
                </Link>
              </div>
              <div>
                {!store.cart.map((meal) => meal.id).includes(props.meal.id) ? (
                  <button
                    type="button"
                    className="btn"
                    onClick={() => {
                      actions.AddMealToCart(props.meal);
                    }}
                  >
                    <i class="fas fa-shopping-cart"></i>
                  </button>
                ) : (
                  <button
                    type="button"
                    className="btn btn-light"
                    onClick={() => {
                      actions.deleteAMeal(props.meal.id);
                    }}
                  >
                    <i class="fas fa-shopping-cart"></i>
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="col-12 col-lg-4 card-wrap">
        <div className="card card-main h-100 position-relative" id="testid">
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
          <div className="d-flex justify-content-center align-items-center fancy-title">
            <div className="fancy-title-wrap d-flex align-items-center p-1">
              <div className="d-flex justify-content-center align-items-center icon-wrap text-center me-2">
                <i class="fas fa-utensils"></i>
              </div>
              <div>
                <Link
                  to={{
                    pathname: `/meals/details/${props.meal.id}`,
                    state: { meal: props.meal },
                  }}
                >
                  <h5 className="card-title">{props.meal.title}</h5>
                </Link>
              </div>
            </div>
          </div>
          <div className="card-body">
            {/* <Link
          to={{
            pathname: `/meals/details/${props.meal.id}`,
            state: { meal: props.meal },
          }}
        >
          <h5 className="card-title">{props.meal.title}</h5>
        </Link> */}
            <hr />
            <div className="d-flex">
              <p className="card-text" style={{ margin: "0", padding: "0" }}>
                <i class="fas fa-clock"></i> Prep Time:{" "}
                {props.meal.readyInMinutes}
              </p>

              <p className="card-text" style={{ margin: "0", padding: "0" }}>
                <i class="fab fa-nutritionix"></i>{" "}
                {props.meal.nutrition.nutrients[0].name}{" "}
                {props.meal.nutrition.nutrients[0].amount}
              </p>
            </div>
            <div className="d-flex">
              <p className="card-text" style={{ margin: "0", padding: "0" }}>
                <i class="fas fa-users"></i> Servings: {props.meal.servings}
              </p>

              <p className="card-text" style={{ margin: "0", padding: "0" }}>
                <i class="fas fa-money-bill-wave"></i> Price:{" "}
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
          </div>
          {!store.cart.map((meal) => meal.id).includes(props.meal.id) ? (
            <button
              type="button"
              className="btn card-btn"
              onClick={() => {
                actions.AddMealToCart(props.meal);
              }}
            >
              {/* Add to cart */}
              <i class="fas fa-cart-plus"></i>
            </button>
          ) : (
            <button
              type="button"
              className="btn card-btn"
              onClick={() => {
                actions.deleteAMeal(props.meal.id);
              }}
            >
              <i class="fas fa-cart-arrow-down"></i>
              {/* Remove from cart */}
            </button>
          )}
        </div>
      </div>
    );
  }
};

Card.propTypes = {
  img: PropTypes.string,
  name: PropTypes.string,
};
