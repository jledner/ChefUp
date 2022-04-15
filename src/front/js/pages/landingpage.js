import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import foodImg from "../../img/foods/pls.jpg";
import "../../styles/landing.css";
import { CategoryCard } from "../component/CategoryCard";
import { Card } from "../component/card";
import { MainHeader } from "../component/MainHeader";
import { useReducer } from "react/cjs/react.production.min";

export const LandingPage = (props) => {
  console.log(props);
  const [searchQuery, setSearchQuery] = useState("");
  const { store, actions } = useContext(Context);
  const [user, setUser] = useState({});
  const [trending2, setTrending] = useState([]);
  // const trending = store.trending;
  let cuisine = store.cuisine;

  useEffect(() => {
    setUser(store.user);
  }, [store.user]);

  useEffect(() => {
    setTrending(store.trending2);
  }, [store.trending2]);

  const toastStyles = {
    position: "fixed",
    bottom: "3%",
    right: "3%",
    zIndex: "2",
  };

  //both hooks are used with the toast element.
  const [scrollPosition, setScrollPosition] = useState(0);
  const [didUserScrollDown, setDidUserScrollDown] = useState(false);
  //function below constantly updates scrollPosition with the pageYOffset. Starts at 0, and increases as
  //the user scrolls down
  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
    //As soon as the user moves and the position is no longer 0, the second hook is set to true which
    //triggers the toast
    position != 0 ? setDidUserScrollDown(true) : null;
  };

  //adds the event listener on initial render and cleans it up when finished.
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div class="position-relative alt-bg">
      <MainHeader />
      <div className="trend-wrap">
        <div className="container landing">
          <div>
            <div>
              {user ? (
                <section className="Featured">
                  <div className="Featured-Content p-5">
                    <div className="trending-wrap d-inline-block position-relative mb-3">
                      <h2>
                        <span className="highlight">#</span>Trending
                      </h2>
                    </div>
                    <div className="row gy-3">
                      {trending2.map((meal) => {
                        return <Card meal={meal} />;
                      })}
                    </div>
                  </div>
                </section>
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
      </div>

      <section className="category secondary-bg px-5 py-5">
        <div className="container">
          <div className="category-content landing">
            <h2>Meals By Cuisine</h2>
            <div className="row">
              <ul>
                <div className="row gx-2 gy-2">
                  {cuisine.map((cuisine) => {
                    return (
                      <li
                        className="col-6 col-md-3 cuisine-li"
                        onClick={async () => {
                          await actions.getMeals(
                            `https://api.spoonacular.com/recipes/complexSearch?&cuisine=${cuisine.name}&maxReadyTime=20&addRecipeInformation=true&ignorePantry=true&instructionsRequired=true&fillIngredients=true&addRecipeNutrition=true&apiKey=abb3fdf4028b4f0d989e7ee0b2b23b67&number=100`,
                            cuisine.name
                          );
                          props.history.push(`/meals/browse/${cuisine.name}`);
                        }}
                      >
                        <CategoryCard cuisine={cuisine} />
                      </li>
                    );
                  })}
                </div>
              </ul>
            </div>
          </div>
        </div>
      </section>
      {/* Toast element below. When the user scrolls down even a little, the toast pops up then stays up
      until it is closed. */}
      <div
        class={
          store.user == null && didUserScrollDown ? "toast show" : "toast hide"
        }
        style={toastStyles}
        n
      >
        <div class="toast-header" style={{ backgroundColor: "#7dcfb6" }}>
          <strong class="me-auto" style={{ color: "black" }}>
            New Here?
          </strong>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="toast"
          ></button>
        </div>
        <div class="toast-body " style={{ backgroundColor: "ghostwhite" }}>
          <p>
            Check out the{" "}
            <Link to="/tutorial" className=".active">
              tutorial
            </Link>
            !
          </p>
        </div>
      </div>
    </div>
  );
};

// if (!localStorage[cuisine.name]) {
//   await actions.getMeals(
//     `https://api.spoonacular.com/recipes/complexSearch?&cuisine=${cuisine.name}&maxReadyTime=20&addRecipeInformation=true&ignorePantry=true&instructionsRequired=true&fillIngredients=true&addRecipeNutrition=true&apiKey=63c77d2857624c45a6a65b2ec5df33e0&number=100`,
//     cuisine.name
//   );
// } else {
//   setStore({
//     mealResults: JSON.parse(
//       localStorage.getItem(cuisine.name)
//     ),
//   });
// }
