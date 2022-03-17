import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import foodImg from "../../img/foods/pls.jpg";
import "../../styles/landing.css";
import { Card } from "../component/card";

export const BrowsePage = (props) => {
  const [searchQuery, setSearchQuery] = useState("");
  const { store, setStore } = useContext(Context);
  const params = useParams();
  const [meals, setMeals] = useState(
    params.cuisine ? JSON.parse(localStorage.getItem(params.cuisine)) : null
  );
  console.log(meals);
  return (
    <div>
      <header className="landing-header-small d-flex flex-column justify-content-center">
        <div className="row">
          <div className="col-12 col-xl-6">
            <form className="d-flex">
              <div class="form-group">
                <input
                  type="text"
                  class="form-control bg-transparent"
                  id="exampleFormControlInput1"
                  placeholder="Search for noms"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <div class="form-group">
                <select
                  class="form-control bg-transparent"
                  id="exampleFormControlSelect1"
                  placeholder="hi"
                >
                  <option>Categories</option>
                  <option>An Option</option>
                  <option>Another Option</option>
                </select>
              </div>
              <button className="btn btn-header">
                <i class="fas fa-search"></i>
              </button>
            </form>
          </div>
        </div>
      </header>
      <section className="category px-5 py-5">
        <div className="category-content">
          <h2>Browse Meals</h2>
          <div className="row">
            {meals && meals.length > 0 ? (
              <ul>
                <div className="row">
                  {meals.map((meal) => {
                    return (
                      <li className="col-lg-3 mb-1">
                        <Card meal={meal} />
                      </li>
                    );
                  })}
                </div>
              </ul>
            ) : (
              <div>no results :(</div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};
