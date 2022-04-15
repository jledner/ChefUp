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
    <section className="tutorial mt-5">
      <div
        id="carouselExampleIndicators"
        class="carousel slide"
        data-bs-ride="carousel"
      >
        <div class="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            class="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active" data-bs-interval="99999">
            <div className="container">
              <div className="tutorial-content">
                <div className="tutorial-head">
                  <div>
                    <h5>Choose what's best for you!</h5>
                    <p>See prep time, calories, and cost for each item</p>
                  </div>
                </div>
                <div className="Featured-Content p-5">
                  <div class="row gy-4">
                    {trending.map((meal, index) => {
                      return <Card meal={meal} />;
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="carousel-item" data-bs-interval="99999">
            <div className="container">
              <div className="tutorial-content">
                <div className="tutorial-head">
                  <h5>Choose what's best for you!</h5>
                  <p>See prep time, calories, and cost for each item</p>
                </div>
                <div className="Featured-Content">
                  <div class="row gy-4">
                    {trending.map((meal, index) => {
                      return <CartCard meal={meal} />;
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="carousel-item" data-bs-interval="99999">
            <div className="container">
              <div className="tutorial-content">
                <div className="tutorial-head">
                  <h1>Grocery List</h1>
                  <p>
                    After you have selected all your meals, the ingredients will
                    show up here
                  </p>
                </div>
                <ul class="list-group grocery-list-ul content-border">
                  <li class="list-group-item d-flex justify-content-between align-items-center">
                    shrimp
                    <div class="d-flex justify-content-between">
                      <span class="badge rounded-pill gl d-block me-2">7 </span>
                      <span>
                        <i class="fa fa-trash"></i>
                      </span>
                    </div>
                  </li>
                  <li class="list-group-item d-flex justify-content-between align-items-center">
                    zucchini
                    <div class="d-flex justify-content-between">
                      <span class="badge rounded-pill gl d-block me-2">1 </span>
                      <span>
                        <i class="fa fa-trash"></i>
                      </span>
                    </div>
                  </li>
                  <li class="list-group-item d-flex justify-content-between align-items-center">
                    garlic powder
                    <div class="d-flex justify-content-between">
                      <span class="badge rounded-pill gl d-block me-2">
                        0.5 tsp
                      </span>
                      <span>
                        <i class="fa fa-trash"></i>
                      </span>
                    </div>
                  </li>
                  <li class="list-group-item d-flex justify-content-between align-items-center">
                    parsley
                    <div class="d-flex justify-content-between">
                      <span class="badge rounded-pill gl d-block me-2">
                        0.5 tsp
                      </span>
                      <span>
                        <i class="fa fa-trash"></i>
                      </span>
                    </div>
                  </li>
                  <li class="list-group-item d-flex justify-content-between align-items-center">
                    red pepper flakes
                    <div class="d-flex justify-content-between">
                      <span class="badge rounded-pill gl d-block me-2">
                        0.25 tsp
                      </span>
                      <span>
                        <i class="fa fa-trash"></i>
                      </span>
                    </div>
                  </li>
                  <li class="list-group-item d-flex justify-content-between align-items-center">
                    lemon zest
                    <div class="d-flex justify-content-between">
                      <span class="badge rounded-pill gl d-block me-2">
                        0.13 tsp
                      </span>
                      <span>
                        <i class="fa fa-trash"></i>
                      </span>
                    </div>
                  </li>
                  <li class="list-group-item d-flex justify-content-between align-items-center">
                    black beans from the instant pot
                    <div class="d-flex justify-content-between">
                      <span class="badge rounded-pill gl d-block me-2">
                        0.25 serving
                      </span>
                      <span>
                        <i class="fa fa-trash"></i>
                      </span>
                    </div>
                  </li>
                  <li class="list-group-item d-flex justify-content-between align-items-center">
                    jalapeño
                    <div class="d-flex justify-content-between">
                      <span class="badge rounded-pill gl d-block me-2">
                        0.25{" "}
                      </span>
                      <span>
                        <i class="fa fa-trash"></i>
                      </span>
                    </div>
                  </li>
                  <li class="list-group-item d-flex justify-content-between align-items-center">
                    tomato
                    <div class="d-flex justify-content-between">
                      <span class="badge rounded-pill gl d-block me-2">
                        0.25{" "}
                      </span>
                      <span>
                        <i class="fa fa-trash"></i>
                      </span>
                    </div>
                  </li>
                  <li class="list-group-item d-flex justify-content-between align-items-center">
                    onion
                    <div class="d-flex justify-content-between">
                      <span class="badge rounded-pill gl d-block me-2">
                        0.08 cup
                      </span>
                      <span>
                        <i class="fa fa-trash"></i>
                      </span>
                    </div>
                  </li>
                  <li class="list-group-item d-flex justify-content-between align-items-center">
                    garlic
                    <div class="d-flex justify-content-between">
                      <span class="badge rounded-pill gl d-block me-2">
                        0.5 cloves
                      </span>
                      <span>
                        <i class="fa fa-trash"></i>
                      </span>
                    </div>
                  </li>
                  <li class="list-group-item d-flex justify-content-between align-items-center">
                    cilantro
                    <div class="d-flex justify-content-between">
                      <span class="badge rounded-pill gl d-block me-2">
                        0.25 tbsp
                      </span>
                      <span>
                        <i class="fa fa-trash"></i>
                      </span>
                    </div>
                  </li>
                  <li class="list-group-item d-flex justify-content-between align-items-center">
                    cumin
                    <div class="d-flex justify-content-between">
                      <span class="badge rounded-pill gl d-block me-2">
                        0.13 tsp
                      </span>
                      <span>
                        <i class="fa fa-trash"></i>
                      </span>
                    </div>
                  </li>
                  <li class="list-group-item d-flex justify-content-between align-items-center">
                    cheddar cheese
                    <div class="d-flex justify-content-between">
                      <span class="badge rounded-pill gl d-block me-2">
                        0.25 cup
                      </span>
                      <span>
                        <i class="fa fa-trash"></i>
                      </span>
                    </div>
                  </li>
                  <li class="list-group-item d-flex justify-content-between align-items-center">
                    lime
                    <div class="d-flex justify-content-between">
                      <span class="badge rounded-pill gl d-block me-2">
                        0.13{" "}
                      </span>
                      <span>
                        <i class="fa fa-trash"></i>
                      </span>
                    </div>
                  </li>
                  <li class="list-group-item d-flex justify-content-between align-items-center">
                    chips
                    <div class="d-flex justify-content-between">
                      <span class="badge rounded-pill gl d-block me-2">
                        0.25 serving
                      </span>
                      <span>
                        <i class="fa fa-trash"></i>
                      </span>
                    </div>
                  </li>
                  <li class="list-group-item d-flex justify-content-between align-items-center">
                    hanger steak
                    <div class="d-flex justify-content-between">
                      <span class="badge rounded-pill gl d-block me-2">
                        0.5 lb
                      </span>
                      <span>
                        <i class="fa fa-trash"></i>
                      </span>
                    </div>
                  </li>
                  <li class="list-group-item d-flex justify-content-between align-items-center">
                    rice wine vinegar
                    <div class="d-flex justify-content-between">
                      <span class="badge rounded-pill gl d-block me-2">
                        0.13 c
                      </span>
                      <span>
                        <i class="fa fa-trash"></i>
                      </span>
                    </div>
                  </li>
                  <li class="list-group-item d-flex justify-content-between align-items-center">
                    cornstarch
                    <div class="d-flex justify-content-between">
                      <span class="badge rounded-pill gl d-block me-2">
                        0.5 Tbsp
                      </span>
                      <span>
                        <i class="fa fa-trash"></i>
                      </span>
                    </div>
                  </li>
                  <li class="list-group-item d-flex justify-content-between align-items-center">
                    peanut oil
                    <div class="d-flex justify-content-between">
                      <span class="badge rounded-pill gl d-block me-2">
                        0.13 c
                      </span>
                      <span>
                        <i class="fa fa-trash"></i>
                      </span>
                    </div>
                  </li>
                  <li class="list-group-item d-flex justify-content-between align-items-center">
                    broccoli
                    <div class="d-flex justify-content-between">
                      <span class="badge rounded-pill gl d-block me-2">
                        6 oz
                      </span>
                      <span>
                        <i class="fa fa-trash"></i>
                      </span>
                    </div>
                  </li>
                  <li class="list-group-item d-flex justify-content-between align-items-center">
                    soy sauce
                    <div class="d-flex justify-content-between">
                      <span class="badge rounded-pill gl d-block me-2">
                        3 Tbsp
                      </span>
                      <span>
                        <i class="fa fa-trash"></i>
                      </span>
                    </div>
                  </li>
                  <li class="list-group-item d-flex justify-content-between align-items-center">
                    hoisin sauce
                    <div class="d-flex justify-content-between">
                      <span class="badge rounded-pill gl d-block me-2">
                        0.13 c
                      </span>
                      <span>
                        <i class="fa fa-trash"></i>
                      </span>
                    </div>
                  </li>
                  <li class="list-group-item d-flex justify-content-between align-items-center">
                    sambal oelek
                    <div class="d-flex justify-content-between">
                      <span class="badge rounded-pill gl d-block me-2">
                        0.5 Tbsp
                      </span>
                      <span>
                        <i class="fa fa-trash"></i>
                      </span>
                    </div>
                  </li>
                  <li class="list-group-item d-flex justify-content-between align-items-center">
                    butter
                    <div class="d-flex justify-content-between">
                      <span class="badge rounded-pill gl d-block me-2">
                        1 Tbsp
                      </span>
                      <span>
                        <i class="fa fa-trash"></i>
                      </span>
                    </div>
                  </li>
                  <li class="list-group-item d-flex justify-content-between align-items-center">
                    ginger
                    <div class="d-flex justify-content-between">
                      <span class="badge rounded-pill gl d-block me-2">
                        0.5 Tbsp
                      </span>
                      <span>
                        <i class="fa fa-trash"></i>
                      </span>
                    </div>
                  </li>
                  <li class="list-group-item d-flex justify-content-between align-items-center">
                    rice
                    <div class="d-flex justify-content-between">
                      <span class="badge rounded-pill gl d-block me-2">
                        1 c
                      </span>
                      <span>
                        <i class="fa fa-trash"></i>
                      </span>
                    </div>
                  </li>
                </ul>
                <i>
                  We assume you have all household ingredients like butter,
                  salt, etc.
                </i>
              </div>
            </div>
          </div>
        </div>
      </div>
      <button
        class="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="prev"
      >
        <i class="fas fa-angle-double-left"></i>
        {/* <span class="carousel-control-prev-icon" aria-hidden="true"></span> */}
        <span class="visually-hidden">Previous</span>
      </button>
      <button
        class="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="next"
      >
        <i class="fas fa-angle-double-right"></i>
        {/* <span class="carousel-control-next-icon" aria-hidden="true"></span> */}
        <span class="visually-hidden">Next</span>
      </button>
    </section>
  );
};
