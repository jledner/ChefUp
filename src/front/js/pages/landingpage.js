import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import foodImg from "../../img/foods/pls.jpg";
import "../../styles/landing.css";
import { CategoryCard } from "../component/CategoryCard";
import { Card } from "../component/card";

export const LandingPage = (props) => {
  const [searchQuery, setSearchQuery] = useState("");
  const { store, actions } = useContext(Context);
  let cuisine = store.cuisine;
  let meals = store.meals;
  let MealsInCart = store.MealsInCart
  //const [MealsInCart, setMealsinCart] = useState(store.MealsInCart)
  
  return (
    <div>
      <header className="landing-header d-flex flex-column justify-content-center p-5">
        <div className="row">
          <div className="col-12 col-xl-1"></div>
          <div className="col-12 col-xl-6">
            <h1>Search thousands of quick, delicous meals on Chefup!</h1>
            <p>Nom nome nome nom...</p>
            <form className="d-flex">
              <div className="form-group">
                <input
                  type="text"
                  className="form-control bg-transparent"
                  id="exampleFormControlInput1"
                  placeholder="Search for noms"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <div className="form-group">
                <select
                  className="form-control bg-transparent"
                  id="exampleFormControlSelect1"
                  placeholder="hi"
                >
                  <option>Categories</option>
                  <option>An Option</option>
                  <option>Another Option</option>
                </select>
              </div>
              <button className="btn btn-header">
                <i className="fas fa-search"></i>
              </button>
            </form>
          </div>
        </div>
      </header>
      <section className="Featured">
        <div className="Featured-Content p-5">
          <h2>Trending</h2>
          <div className="row">
            {meals
              .filter((meal, i) => i <= 2)
              .map((meal) => {
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
                    <li className="col-6 col-md-3">
                      <Link
                        to={`/meals/cuisine/${cuisine.name}/browse`}
                        onClick={async () =>
                          await actions.handleGetMealByCuisine(cuisine)
                        }
                      >
                        <CategoryCard cuisine={cuisine} img={foodImg} />
                      </Link>
                    </li>
                  );
                })}
              </div>
            </ul>
          </div>
        </div>
      </section>

      
      <button type="button" class="btn btn-primary" data-bs-toggle="modal" 
      data-bs-target="#staticBackdrop" onClick={()=>{
        console.log(MealsInCart)
      }} >
        Testing something minor with cart idea - Jeff
      </button>


      <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div class="modal-dialog modal-lg">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title text-dark" id="staticBackdropLabel">Your Cart</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <div class="container-fluid">
                {MealsInCart.map((meal, index) => {
                  return <Card meal={meal} IsMealInCart={true} IndexOfMeal={index} />
                }
                )}
              </div>

            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
