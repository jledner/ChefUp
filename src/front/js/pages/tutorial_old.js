import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { TutorialCard } from "../component/TutorialCard";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import { Demo } from "../pages/demo";
import { Card } from "../component/card";
import { CartCard } from "../component/cartcard";
import { FeaturedCard } from "../component/FeaturedCard";

export const Tutorial = (props) => {
  const { store, setStore } = useContext(Context);
  let meals = store.meals;
  const trending = store.trending;
  console.log(meals);
  let background =
    "https://cdn.shopify.com/s/files/1/0533/2089/files/5-websites-to-download-free-subtle-textures-lost.jpg?4487992953913685304";

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
      <div className="carousel-inner bg">
        <div className="carousel-item active" data-bs-interval="10000">
          <div className="carousel-caption d-none d-md-block">
            <h1>Choose what's best for you!</h1>
            <h5>See prep time, calories, and cost for each item</h5>
            <div className="Featured-Content p-6">
              <div className="row">
                {trending.map((meal) => {
                  return <Card meal={meal} />;
                })}
              </div>
            </div>
          </div>
        </div>
        <div className="carousel-item" data-bs-interval="2000">
          {/* <img src={background} className="d-block w-100" alt="..." /> */}
          <div className="carousel-caption d-none d-md-block">
            <div className="container">
              <h5>Choose what's best for you!</h5>
              <p>See prep time, calories, and cost for each item</p>
              <div className="Featured-Content p-5">
                <div class="row gy-4">
                  {trending.map((meal, index) => {
                    return <CartCard meal={meal} />;
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="carousel-item" data-bs-interval="2000">
          {/* <img src={background} className="d-block w-100" alt="..." /> */}
          <div className="carousel-caption d-none d-md-block">
            <div className="container">
              <h1>Grocery List</h1>
              <p>
                After you have selected all your meals, the ingredients will
                show up here
              </p>
              <ul className="list-group">
                <li class="list-group-item d-flex justify-content-between align-items-center">
                  shrimp
                  <span class="badge bg-primary rounded-pill">{`14`}</span>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-center">
                  zucchini
                  <span class="badge bg-primary rounded-pill">{`2`}</span>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-center">
                  parsley
                  <span class="badge bg-primary rounded-pill">{`1 tsp`}</span>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-center">
                  garlic powder
                  <span class="badge bg-primary rounded-pill">{`1 tsp`}</span>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-center">
                  red pepper flakes
                  <span class="badge bg-primary rounded-pill">{`1/2 tsp`}</span>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-center">
                  lemon
                  <span class="badge bg-primary rounded-pill">{`1`}</span>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-center">
                  jalapeño
                  <span class="badge bg-primary rounded-pill">{`1 serving`}</span>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-center">
                  tomato
                  <span class="badge bg-primary rounded-pill">{`1`}</span>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-center">
                  onion
                  <span class="badge bg-primary rounded-pill">{`1`}</span>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-center">
                  garlic
                  <span class="badge bg-primary rounded-pill">{`2 cloves`}</span>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-center">
                  cilantro
                  <span class="badge bg-primary rounded-pill">{`1/3 cup`}</span>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-center">
                  cheddar cheese
                  <span class="badge bg-primary rounded-pill">{`1 cup`}</span>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-center">
                  lime
                  <span class="badge bg-primary rounded-pill">{`1/2`}</span>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-center">
                  chips
                  <span class="badge bg-primary rounded-pill">{`1 serving`}</span>
                </li>
              </ul>
              <br />
              <Link to="/">
                <button className="btn btn-primary">Back home</button>
              </Link>
            </div>
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
