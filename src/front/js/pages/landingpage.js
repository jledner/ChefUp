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
      <header className="landing-header position-relative mt-2">
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
      </header>
    </div>
  );
};
