import PropTypes from "prop-types";
import React from "react";

export const FeaturedCard = (props) => {
  return (
    <div className="featured d-flex justify-content-center">
      <div class="card featured-card text-center">
        <div class="card-body">
          <img className="d-block" src={props.img} />
          <h5 class="card-title">Featured</h5>
          <p class="card-text">
            With supporting text below as a natural lead-in to additional
            content.
          </p>
          <a href="#" class="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
    </div>
  );
};

FeaturedCard.propTypes = {
  img: PropTypes.string,
};
