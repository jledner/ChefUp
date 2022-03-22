import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import foodImg from "../../img/foods/pls.jpg";
import "../../styles/landing.css";

export const GroceryList = () => {
  const { store, actions } = useContext(Context);
  console.log(store);
  const [mealIngredients, setMealIngredients] = useState([]);

  function isNotHousehold(value) {
    if (
      value != "14412" &&
      value != "4053" &&
      value != "10719335" &&
      value != "4513" &&
      value != "10014412" &&
      value != "4053" &&
      value != "1002030" &&
      value != "20081" &&
      value != "1004513" &&
      value != "1012047" &&
      value != "19335" &&
      value != "4582" &&
      value != "2047" &&
      value != "1102047"
    ) {
      return value;
    }
  }

  store.trending.forEach((meal, i) => {
    let mealIngred = meal.nutrition.ingredients.filter((isNotHousehold) => {});
    setMealIngredients(mealIngred);
  });

  return (
    <div className="container">
      <h1>Grocery List</h1>
      <ul className="list-group">
        {mealIngredients.map((ingredient) => `<li>${ingredient.name}</li>`)}
      </ul>
      <br />
      <Link to="/">
        <button className="btn btn-primary">Back home</button>
      </Link>
    </div>
  );
};

{
  /* 
{store.trending.forEach((item, i) => {
          store.trending[i].nutrition.ingredients.map((item, index) => {
            console.log(store.trending[i].nutrition.ingredients[index]);
            console.log(store.trending[i].nutrition.ingredients[index]);
            if (
              store.trending[i].nutrition.ingredients[index].id != "14412" &&
              store.trending[i].nutrition.ingredients[index].id != "4053" &&
              store.trending[i].nutrition.ingredients[index].id != "10719335" &&
              store.trending[i].nutrition.ingredients[index].id != "4513" &&
              store.trending[i].nutrition.ingredients[index].id != "10014412" &&
              store.trending[i].nutrition.ingredients[index].id != "4053" &&
              store.trending[i].nutrition.ingredients[index].id != "1002030" &&
              store.trending[i].nutrition.ingredients[index].id != "20081" &&
              store.trending[i].nutrition.ingredients[index].id != "1004513" &&
              store.trending[i].nutrition.ingredients[index].id != "1012047" &&
              store.trending[i].nutrition.ingredients[index].id != "19335" &&
              store.trending[i].nutrition.ingredients[index].id != "4582" &&
              store.trending[i].nutrition.ingredients[index].id != "2047" &&
              store.trending[i].nutrition.ingredients[index].id != "1102047"
            ){
              return (
                <li
                  key={index}
                  className="list-group-item d-flex justify-content-between"
                  style={{ background: item.background }}
                >
                  <span>
                    {store.trending[i].nutrition.ingredients[index].name}
                  </span>
                  <span>
                    Amount:
                    <span>
                      {store.trending[i].extendedIngredients[index].amount}
                    </span>
                    <span>
                      {store.trending[i].extendedIngredients[index].unit}
                    </span>
                  </span>
                  }
                  {
                    // Conditional render example
                    // Check to see if the background is orange, if so, display the message
                    item.background === "orange" ? (
                      <p style={{ color: item.initial }}>
                        Successfully Added to Cart
                      </p>
                    ) : null
                  }
                  <button
                    className="btn btn-success"
                    onClick={() => actions.changeColor(index, "orange")}
                  >
                    Add to Cart
                  </button>
                </li>
              );
            }
          });
        })} */
}
