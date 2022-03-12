import propTypes from "prop-types";
import React from "react";

export const FeaturedCard = (props) => {
  return (
    <div className="featured d-flex justify-content-center">
      <div className="card featured-card text-center">
        <div className="card-body position-relative">
          <img className="d-block" src={props.img} />
          <div className="card-text featured-text position-absolute">
            <p>
              With supporting text below as a natural lead-in to additional
              content.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
