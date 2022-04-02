import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import foodImg from "../../img/foods/pls.jpg";
import "../../styles/landing.css";
import { Card } from "../component/card";
import { MainHeader } from "../component/MainHeader";

//my adjustment was made under the h2 that says "Browse Meals." The previous code used was assigned
//to a variable at the very, very bottom of this page in case it is needed - Jeff 3/21/22
export const BrowsePage = (props) => {
  const [searchQuery, setSearchQuery] = useState("");
  const { store } = useContext(Context);
  return (
    <div>
      <MainHeader sizeClass={"landing-header-small"} />
      <section className="category px-5 py-5">
        <div className="category-content">
          <h2>Browse Meals</h2>
          {/* <div className="row"> */}
          {store.mealResults && store.mealResults.length > 0 ? (
            <div className="row row-cols-4 gy-5">
              {store.mealResults.slice(0, Math.round(store.mealResults.length/2)).map((meal) => {
                return <Card meal={meal} />;
              })}
            </div>
          ) : (
            <div>no results :(</div>
          )}
          {/* </div> */}
        </div>
      </section>
    </div>
  );
};

let previouscode = `return (
  <div>
    <MainHeader sizeClass={"landing-header-small"} />
    <section className="category px-5 py-5">
      <div className="category-content">
        <h2>Browse Meals</h2>
        {/* <div className="row"> */}
        {store.mealResults && store.mealResults.length > 0 ? (
          <div className="row row-cols-4 gy-5">
            {store.mealResults.slice(0, 3).map((meal) => {
              return <Card meal={meal} />;
            })}
          </div>
        ) : (
          <div>no results :(</div>
        )}
        {/* </div> */}
      </div>
    </section>
  </div>
);`


let findindex = `meals.findIndex((meal,index) => {
  console.log(meal)
  return index == 2
  
})`