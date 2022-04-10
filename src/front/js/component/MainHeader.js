import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import { useHistory } from "react-router-dom";

export const MainHeader = (props) => {
  const history = useHistory();
  const { store, actions } = useContext(Context);
  const [searchQuery, setSearchQuery] = useState("");
  return (
    <header
      className={`${
        props.sizeClass ? `${props.sizeClass}` : `landing-header`
      } d-flex flex-column justify-content-center p-5 position-relative`}
    >
      <div className="head-content row">
        <div className="col-12 col-xl-1"></div>
        <div className="col-12 col-xl-5">
          {!props.sizeClass ? (
            <div>
              {" "}
              <h1>
                Search <span className="highlight">thousands</span> of quick,
                delicous meals on <span className="highlight">Chefup</span>!
              </h1>
              <p>Nom nom nom nom...</p>
            </div>
          ) : (
            ""
          )}

          <form className="d-flex">
            <div className="form-group">
              <input
                type="text"
                className="form-control bg-transparent"
                id="exampleFormControlInput1"
                placeholder="Search for noms"
                value={searchQuery}
                onChange={(e) =>
                  setSearchQuery(e.target.value) && getProducts(e.target.value)
                }
              />
            </div>
            <button
              className="btn btn-header"
              onClick={async (e) => {
                e.preventDefault();
                await actions.getMeals(
                  `https://api.spoonacular.com/recipes/complexSearch?query=${searchQuery}&maxReadyTime=30&addRecipeInformation=true&ignorePantry=true&instructionsRequired=true&fillIngredients=true&addRecipeNutrition=true&apiKey=abb3fdf4028b4f0d989e7ee0b2b23b67&number=100`,
                  searchQuery
                );
                history.push(`/meals/browse/${searchQuery}`);
              }}
            >
              <i className="fas fa-search"></i>
            </button>
          </form>
        </div>
      </div>
    </header>
  );
};
