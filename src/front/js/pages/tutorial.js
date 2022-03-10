import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Card } from "../component/card";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";

export const Tutorial = (props) => {
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
              <Card image="https://i2.wp.com/www.downshiftology.com/wp-content/uploads/2020/04/Shrimp-Tacos-main-1.jpg" />
              <div style={{ border: "5px solid green" }}>
                <Card image="https://www.jocooks.com/wp-content/uploads/2020/06/chicken-gyros-1-14.jpg" />
              </div>
              <Card image="https://foodtasia.com/wp-content/uploads/2019/02/tuscan-pasta-20.jpg" />
              <Card image="https://i.guim.co.uk/img/media/fdcd34886d1d9aa696cbac74d1a3293aa4808895/0_680_6355_3814/master/6355.jpg?width=1200&height=900&quality=85&auto=format&fit=crop&s=8b6d0cb3ca5aa21a21d485bef8f481ba" />
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
            <h5>Second slide label</h5>
            <p>Some representative placeholder content for the second slide.</p>
            <div className="row row-cols-1 row-cols-md-1 g-4">
              <Card
                image="https://i2.wp.com/www.downshiftology.com/wp-content/uploads/2020/04/Shrimp-Tacos-main-1.jpg"
                style={{
                  minWidth: "40em",
                  maxWidth: "40em",
                  minHeight: "400em",
                  maxHeight: "400em",
                  objectFit: "cover",
                  margin: "auto",
                }}
              />
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <img
            src="https://img.freepik.com/free-photo/food-background-with-place-text-with-different-kinds-pasta-tomatoes-herbs-mushrooms-eggs-seasonings-scattered-light-marble-background-top-view-italian-cuisine-concept_90258-3592.jpg?size=626&ext=jpg"
            className="d-block w-100"
            alt="..."
          />
          <div className="carousel-caption d-none d-md-block">
            <h5>Third slide label</h5>
            <p>Some representative placeholder content for the third slide.</p>
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
