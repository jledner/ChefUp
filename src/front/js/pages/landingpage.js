import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import foodImg from "../../img/foods/pls.jpg";
import "../../styles/landing.css";
import { CategoryCard } from "../component/CategoryCard";
import { Card } from "../component/card";
import { MainHeader } from "../component/MainHeader";

export const LandingPage = (props) => {
  console.log(props);
  const [searchQuery, setSearchQuery] = useState("");
  const { store, actions } = useContext(Context);
  const trending = store.trending;
  let cuisine = store.cuisine;
  let meals = store.meals;
  let MealsInCart = store.MealsInCart;
  //const [MealsInCart, setMealsinCart] = useState(store.MealsInCart)

  return (
    <div>
      <MainHeader />
      <section className="Featured">
        <div className="Featured-Content p-5">
          <h2>Trending</h2>
          <div className="row">
            {trending.map((meal) => {
              return <Card meal={meal} />;
            })}
          </div>
        </div>
      </section>
      <section className="category px-5 py-5">
        <div className="category-content">
          <h2>Meals By Cuisine</h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum
            delectus sint deleniti. Excepturi et vitae eum cumque nostrum
            adipisci at.
          </p>
          <div className="row">
            <ul>
              <div className="row gx-2 gy-2">
                {cuisine.map((cuisine) => {
                  return (
                    <li
                      className="col-6 col-md-3"
                      onClick={async () => {
                        await actions.getMeals(
                          `https://api.spoonacular.com/recipes/complexSearch?&cuisine=${cuisine.name}&maxReadyTime=20&addRecipeInformation=true&ignorePantry=true&instructionsRequired=true&fillIngredients=true&addRecipeNutrition=true&apiKey=63c77d2857624c45a6a65b2ec5df33e0&number=100`,
                          cuisine.name
                        );
                        props.history.push(`/meals/browse/${cuisine.name}`);
                      }}
                    >
                      <CategoryCard cuisine={cuisine} img={foodImg} />
                    </li>
                  );
                })}
              </div>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

// if (!localStorage[cuisine.name]) {
//   await actions.getMeals(
//     `https://api.spoonacular.com/recipes/complexSearch?&cuisine=${cuisine.name}&maxReadyTime=20&addRecipeInformation=true&ignorePantry=true&instructionsRequired=true&fillIngredients=true&addRecipeNutrition=true&apiKey=63c77d2857624c45a6a65b2ec5df33e0&number=100`,
//     cuisine.name
//   );
// } else {
//   setStore({
//     mealResults: JSON.parse(
//       localStorage.getItem(cuisine.name)
//     ),
//   });
// }
