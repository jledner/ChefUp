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
      } d-flex flex-column justify-content-center p-5`}
    >
      <div className="row">
        <div className="col-12 col-xl-1"></div>
        <div className="col-12 col-xl-6">
          <h1>Search thousands of quick, delicous meals on Chefup!</h1>
          <p>Nom nome nome nom...</p>
          <form className="d-flex">
            <div className="form-group">
              <input
                type="text"
                className="form-control bg-transparent"
                id="exampleFormControlInput1"
                placeholder="Search for noms"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <button
              className="btn btn-header"
              onClick={async (e) => {
                e.preventDefault();
                await actions.getMeals(
                  `https://api.spoonacular.com/recipes/complexSearch?query=${searchQuery}&maxReadyTime=30&addRecipeInformation=true&ignorePantry=true&instructionsRequired=true&fillIngredients=true&addRecipeNutrition=true&apiKey=63c77d2857624c45a6a65b2ec5df33e0&number=100`,
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
