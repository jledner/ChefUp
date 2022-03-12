import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import foodImg from "../../img/foods/pls.jpg";
import "../../styles/landing.css";
import { FeaturedCard } from "../component/FeaturedCard";

export const LandingPage = (props) => {
  return (
    <div>
      {/* <header className="landing-header position-relative mt-2">
        <div className="landing-bg d-flex justify-content-center align-items-center">
          <div className="featured-text">
            <h1>ChefUp</h1>
            <p>
              Cool fancy line here (styling isn't finished, don't panic guys -
              Wayne)
            </p>
          </div>
        </div>
        <FeaturedCard img={foodImg} />
      </header> */}
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
                  placeholder="name@example.com"
                />
              </div>
              <div class="form-group">
                <select
                  class="form-control bg-transparent"
                  id="exampleFormControlSelect1"
                  placeholder="hi"
                >
                  <option>Categories</option>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </select>
              </div>
              <button className="btn btn-header">
                <i class="fas fa-search"></i>
              </button>
            </form>
          </div>
        </div>
      </header>
    </div>
  );
};
