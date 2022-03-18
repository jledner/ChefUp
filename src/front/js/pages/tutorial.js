import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { TutorialCard } from "../component/TutorialCard";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import { Demo } from "../pages/demo";
import { FeaturedCard } from "../component/FeaturedCard";

export const Tutorial = (props) => {
  const { store, setStore } = useContext(Context);
  let meals = store.meals;
  console.log(meals);
  return (
    <div
      id="carouselExampleDark"
      className="carousel carousel-dark slide"
      data-bs-ride="carousel"
    >
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide-to="0"
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active" data-bs-interval="10000">
          <img
            src="https://img.freepik.com/free-photo/food-background-with-place-text-with-different-kinds-pasta-tomatoes-herbs-mushrooms-eggs-seasonings-scattered-light-marble-background-top-view-italian-cuisine-concept_90258-3592.jpg?size=626&ext=jpg"
            className="d-block w-100"
            alt="..."
          />
          <div className="carousel-caption d-none d-md-block">
            <h2>Enjoy good food simply. As it should be.</h2>
            <h5>
              <em>
                Sit back and relax while ChefUp gathers all your ingredients.
              </em>
            </h5>
            <div className="row row-cols-1 row-cols-md-2 g-4">
              {meals.slice(0, 4).map((meal, i) => {
                return <TutorialCard key={i} meal={meal} />;
              })}
            </div>
          </div>
        </div>

        <div className="carousel-item" data-bs-interval="2000">
          <img
            src="https://img.freepik.com/free-photo/food-background-with-place-text-with-different-kinds-pasta-tomatoes-herbs-mushrooms-eggs-seasonings-scattered-light-marble-background-top-view-italian-cuisine-concept_90258-3592.jpg?size=626&ext=jpg"
            className="d-block w-100"
            alt="..."
          />
          <div className="carousel-caption d-none d-md-block">
            <h5>Choose what's best for you!</h5>
            <p>See prep time, calories, and cost for each item</p>
            <FeaturedCard img="https://i2.wp.com/www.downshiftology.com/wp-content/uploads/2020/04/Shrimp-Tacos-main-1.jpg" />
            <div style={{ background: "white", border: "4px solid black" }}>
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
          </div>
        </div>

        <div className="carousel-item" data-bs-interval="2000">
          <img
            src="https://img.freepik.com/free-photo/food-background-with-place-text-with-different-kinds-pasta-tomatoes-herbs-mushrooms-eggs-seasonings-scattered-light-marble-background-top-view-italian-cuisine-concept_90258-3592.jpg?size=626&ext=jpg"
            className="d-block w-100"
            alt="..."
          />
          <div className="carousel-caption d-none d-md-block">
            <h5>Grocery List</h5>
            <p>
              After you have selected all your meals, the ingredients will show
              up here
            </p>
            <Demo />
            <i>
              We assume you have all household ingredients like butter, salt,
              etc.
            </i>
          </div>
        </div>
      </div>

      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleDark"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleDark"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
      <br />
      <br />
      <br />
      <br />
    </div>
  );
};
