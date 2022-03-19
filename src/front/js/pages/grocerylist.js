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

  return (
    <div className="container">
      <ul className="list-group">
        <h1>Grocery List</h1>
        {store.trending.forEach((item, i) => {
          store.trending[i].nutrition.ingredients.map((item, index) => {
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
            ) {
              return (
                <li
                  key={index}
                  className="list-group-item d-flex justify-content-between"
                  style={{ background: item.background }}
                >
                  <span>
                    {store.trending[i].nutrition.ingredients[index].name}
                  </span>
                  <span
                    style={{
                      padding: "0 30px",
                    }}
                  >
                    Amount:
                    <span>
                      {
                        store.trending[i].extendedIngredients[index].measures.us
                          .amount
                      }
                    </span>
                    <span>
                      {
                        store.trending[i].extendedIngredients[index].measures.us
                          .unitLong
                      }
                    </span>
                  </span>
                  {/* <Link to={"/single/" + index}>
                <span>Link to: {item.title}</span>
              </Link> */}
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
        })}
      </ul>
      <br />
      <Link to="/">
        <button className="btn btn-primary">Back home</button>
      </Link>
    </div>
  );
};
