import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";

export const LandingPage = (props) => {
  return (
    <div>
      <header className="landing-header mt-4">
        <div className="user-info d-flex justify-content-between">
          <div>
            <h3>Hello, World!</h3>
            <p>Ready to nom on some foods...</p>
          </div>
          <div>
            <img
              className="img-fluid"
              src="https://forums.terraria.org/data/avatars/o/128/128493.jpg?1550988870"
            ></img>
          </div>
        </div>
      </header>
      <div className="featured mt-3">
        <div className="row">
          <div className="col-12 col-xl-12 m-auto">
            <div className="featured-main py-5 px-5 position-relative">
              <div className="row">
                <div className="col-12 col-xl-4">
                  <h1>Featured Text</h1>
                  <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Dicta, ducimus voluptatum? Quod quae obcaecati, modi maxime
                    quisquam maiores, voluptatem qui repudiandae incidunt
                    consectetur ullam aliquam voluptatum. Soluta a unde
                    voluptatum.
                  </p>
                  <span className="d-inline-block munch-later position-absolute">
                    <i class="fas fa-teeth-open"></i>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
