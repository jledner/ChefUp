import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import React, { Component } from "react";
import { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

//The Card component is used twice by Jeff in the profilepage view, but with two minor modifications
export const Card = (props) => {
  const { store, actions } = useContext(Context);
  let MealsInCart = store.MealsInCart;

  // 1) Section for cards to be rendered for the meals in the users' cart
  if (props.IsMealInCart == true) {
    //If IsMealInCart={true} is set as a prop, only this section is used

    //passed props are meal={meal}(from the map) MealInCart={true} IndexOfMeal={index}
    return (
      <div className="col-4 m-5">
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
          {/* The reason why (props.IsMealInCart == true) is in place is for this button below. I figure 
          the user needs to be able to remove the meals from their cart once they are actually in the cart */}
          <button
            type="button"
            className="btn btn-light"
            onClick={() => {
              actions.deleteAMeal(props.IndexOfMeal);
              console.log(MealsInCart);
            }}
          >
            Remove from Cart
          </button>
        </div>
      </div>
    );
  }
  //End of  Section for cards to be rendered for the meals in the users' cart

  // 2) Section for meal cards that are displayed to the logged in user.

  if (props.IsUserLoggedIn == true) {
    //If IsUserLoggedIn={true} is set as a prop, only this section is used

    //passed props are  meal={meal}(from the map) IsUserLoggedIn={true} IndexOfEachMealCard = {index}
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
          {/* The reason why IsUserLoggedIn={true} is in place is for this button below. Only someone who
          is logged in should have a truly functional "Add to Cart" button */}
          <button
            type="button"
            className="btn btn-light"
            onClick={() => {
              console.log(props.IndexOfEachMealCard);
              console.log(MealsInCart);
              actions.AddMealToCart(props.IndexOfEachMealCard);
            }}
          >
            Add to Cart(functional I think)
          </button>
        </div>
      </div>
    );
  }
  //End of Section for meal cards that are displayed only to the logged in user.
  else {
    //If the Card component is used without MealInCart={true} or IsUserLoggedIn={true} set they get
    //this Card layout. Basically, visitors who try and "Add to Cart" should be redirected to sign up I think
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
              {`$${
                (Math.floor(props.meal.pricePerServing) / 100) *
                props.meal.servings
              }`}
            </p>
          </div>
          {/* Thinking of wrapping this in a link tag that redirects to the Sign Up page - Jeff */}
          <button type="button" className="btn btn-light">
            Add to Cart
          </button>
        </div>
      </div>
    );
  }
};

Card.propTypes = {
  img: PropTypes.string,
  name: PropTypes.string,
};
