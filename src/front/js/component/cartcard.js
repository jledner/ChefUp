import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import React, { Component } from "react";
import { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import "../../styles/card-main.css";
import { FavoriteButton } from "./favoritebutton";
import Fraction from "fraction.js";

export const CartCard = (props) => {
  const { store, actions } = useContext(Context);
  return (
    <div>
      <div className="col-12">
        <div className="card cart-card py-3">
          <div className="row">
            <div className="col-3">
              <div className="p-3">
                <Link
                  to={{
                    pathname: `/meals/details/${props.meal.id}`,
                    state: { meal: props.meal },
                  }}
                >
                  <img
                    src={props.meal.image}
                    className="cart-card card-img-top rounded"
                    alt="..."
                  />
                </Link>
              </div>
            </div>
            <div className="col-9">
              <Link
                to={{
                  pathname: `/meals/details/${props.meal.id}`,
                  state: { meal: props.meal },
                }}
              >
                <h5 className="card-title">{props.meal.title}</h5>
              </Link>
              <div className="card-body position-relative">
                <ul class="cart-ingredients-list p-0 row">
                  {props.meal.nutrition.ingredients
                    .filter((ingredient) => {
                      return !store.excludedIngredients.includes(
                        `${ingredient.id}`
                      );
                    })
                    .map((ingredient) => {
                      let amount = new Fraction(ingredient.amount);
                      return (
                        <li className="col-3">
                          <span className="ingredient-amounts">{`${ingredient.amount} ${ingredient.unit} `}</span>
                          <span>{`${ingredient.name}`}</span>
                        </li>
                      );
                    })}
                </ul>
              </div>
              <button
                type="button"
                className="ms-auto btn btn-chef btn-delete position-absolute"
                onClick={() => {
                  actions.deleteAMeal(props.meal.id);
                }}
              >
                <i class="fas fa-cart-arrow-down"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// import ReactDOM from "react-dom";
// import PropTypes from "prop-types";
// import React, { Component } from "react";
// import { useState, useEffect, useContext } from "react";
// import { Context } from "../store/appContext";
// import { Link } from "react-router-dom";
// import "../../styles/card-main.css";
// import { FavoriteButton } from "./favoritebutton";

// export const CartCard = (props) => {
//   const { store, actions } = useContext(Context);
//   return (
//     <div className="col">
//       <div className="card h-100 bg-dark text-white position-relative">
//         <div className="fav position-absolute">
//           <FavoriteButton meal={props.meal} />
//         </div>
//         <Link
//           to={{
//             pathname: `/meals/details/${props.meal.id}`,
//             state: { meal: props.meal },
//           }}
//         >
//           <img src={props.meal.image} className="card-img-top" alt="..." />
//         </Link>
//         <div className="card-body">
//           <Link
//             to={{
//               pathname: `/meals/details/${props.meal.id}`,
//               state: { meal: props.meal },
//             }}
//           >
//             <h5 className="card-title">{props.meal.title}</h5>
//           </Link>
//           <p className="card-text" style={{ margin: "0", padding: "0" }}>
//             Prep Time: {props.meal.readyInMinutes}
//           </p>
//           <p className="card-text" style={{ margin: "0", padding: "0" }}>
//             {props.meal.nutrition.nutrients[0].name}{" "}
//             {props.meal.nutrition.nutrients[0].amount}
//           </p>
//           <p className="card-text" style={{ margin: "0", padding: "0" }}>
//             Servings: {props.meal.servings}
//           </p>
//           <p className="card-text" style={{ margin: "0", padding: "0" }}>
//             Price per serving:{" "}
//             {`$${
//               (Math.floor(props.meal.pricePerServing) / 100) *
//               props.meal.servings
//             }`}
//           </p>
//         </div>
//         {!store.cart.map((meal) => meal.id).includes(props.meal.id) ? (
//           <button
//             type="button"
//             className="btn btn-light"
//             onClick={() => {
//               actions.AddMealToCart(props.meal);
//             }}
//           >
//             Add to Cart
//           </button>
//         ) : (
//           <button
//             type="button"
//             className="btn btn-light"
//             onClick={() => {
//               actions.deleteAMeal(props.meal.id);
//             }}
//           >
//             Remove from Cart
//           </button>
//         )}
//       </div>
//     </div>
//   );
// };
