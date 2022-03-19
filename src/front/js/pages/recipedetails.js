import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams, useLocation } from "react-router-dom";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import { MainHeader } from "../component/MainHeader";

export const RecipeDetails = (props) => {
  const location = useLocation();
  const meal = location.state.meal;
  console.log(meal);
  let instructions = meal.analyzedInstructions;
  let ingredients = meal.nutrition.ingredients;

  return (
    <div>
      <MainHeader />
      <section className="details-main">
        <div className="row">
          <div className="col-2">
            <div className="d-flex flex-column align-items-center">
              <button className="btn btn-primary mb-3">
                <i class="fas fa-heart"></i>
              </button>
              <button className="btn btn-primary">
                <i class="fas fa-cart-plus"></i>
              </button>
            </div>
          </div>
          <div className="col-7">
            <div className="card mb-3 bg-dark">
              <img src={meal.image} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">{meal.title}</h5>
                <p className="card-text">
                  <h6>Ingredients</h6>
                  <ul>
                    {ingredients.map((ingredient) => (
                      <li>{ingredient.name}</li>
                    ))}
                  </ul>
                </p>
                <p className="card-text">
                  <h6>Instructions</h6>
                  <ul>
                    {instructions.map((set) => {
                      return set.steps.map((step) => {
                        return <li>{step.step}</li>;
                      });
                    })}
                  </ul>
                </p>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div>
              <p>Prep time: {meal.readyInMinutes}</p>
              <p>Servings {meal.servings}</p>
              <p>
                Price per serving:{" "}
                {`$${Math.floor(meal.pricePerServing) / 100}`}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
