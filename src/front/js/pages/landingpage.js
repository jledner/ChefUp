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
import { useReducer } from "react/cjs/react.production.min";

export const LandingPage = (props) => {
  console.log(props);
  const [searchQuery, setSearchQuery] = useState("");
  const { store, actions } = useContext(Context);
  const [user, setUser] = useState({});
  const [trending, setTrending] = useState([]);
  // const trending = store.trending;
  let cuisine = store.cuisine;

  useEffect(() => {
    setUser(store.user);
  }, [store.user]);

  useEffect(() => {
    setTrending(store.trending);
  }, [store.trending]);

  return (
    <div>
      <MainHeader />
      <div className="container landing">
        <div>
          <div>
            {user ? (
              <section className="Featured">
                <div className="Featured-Content p-5">
                  <div className="trending-wrap d-inline-block position-relative mb-3">
                    <h2>
                      <span className="highlight">#</span>Trending
                    </h2>
                  </div>
                  <div className="row">
                    {trending.map((meal) => {
                      return <Card meal={meal} />;
                    })}
                  </div>
                </div>
              </section>
            ) : (
              ""
            )}
          </div>
          <section className="category px-5 py-5">
            <div className="category-content">
              <h2>Meals By Cuisine</h2>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Voluptatum delectus sint deleniti. Excepturi et vitae eum cumque
                nostrum adipisci at.
              </p>
              <div className="row">
                <ul>
                  <div className="row gx-2 gy-2">
                    {cuisine.map((cuisine) => {
                      return (
                        <li
                          className="col-6 col-md-3 cuisine-li"
                          onClick={async () => {
                            await actions.getMeals(
                              `https://api.spoonacular.com/recipes/complexSearch?&cuisine=${cuisine.name}&maxReadyTime=20&addRecipeInformation=true&ignorePantry=true&instructionsRequired=true&fillIngredients=true&addRecipeNutrition=true&apiKey=abb3fdf4028b4f0d989e7ee0b2b23b67&number=100`,
                              cuisine.name
                            );
                            props.history.push(`/meals/browse/${cuisine.name}`);
                          }}
                        >
                          <CategoryCard cuisine={cuisine} />
                        </li>
                      );
                    })}
                  </div>
                </ul>
              </div>
            </div>
          </section>
        </div>
      </div>
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
