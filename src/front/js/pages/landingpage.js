import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import foodImg from "../../img/foods/pls.jpg";
import "../../styles/landing.css";
import { CategoryCard } from "../component/CategoryCard";

export const LandingPage = (props) => {
  const [searchQuery, setSearchQuery] = useState("");
  const { store, setStore } = useContext(Context);
  let cuisine = store.cuisine;
  console.log(cuisine);
  return (
    <div>
      <header className="landing-header d-flex flex-column justify-content-center">
        <div className="row">
          <div className="col-12 col-xl-1"></div>
          <div className="col-12 col-xl-6">
            <h1>Search thousands of quick, delicous meals on Chefup!</h1>
            <p>Nom nome nome nom...</p>
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
          <h2>Meals By Cuisine</h2>
          <div className="row">
            <ul>
              <div className="row">
                {cuisine.map((cuisine) => {
                  return (
                    <li className="col-lg-3 mb-1">
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
