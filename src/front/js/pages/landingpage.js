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
          <div className="col-12 col-xl-10 m-auto">
            <div className="featured-main p-3">
              <b>hello world</b>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
