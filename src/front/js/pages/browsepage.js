import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import foodImg from "../../img/foods/pls.jpg";
import "../../styles/landing.css";
import { Card } from "../component/card";
import { CardsForBrowsePage } from "../component/cardsForBrowsePage";
import { MainHeader } from "../component/MainHeader";

//my adjustment was made under the h2 that says "Browse Meals." The previous code used was assigned
//to a variable at the very, very bottom of this page in case it is needed - Jeff 3/21/22
export const BrowsePage = (props) => {
  const { store } = useContext(Context);
  const [searchQuery, setSearchQuery] = useState("");
  const [showMoreMeals1, setShowMoreMeals1] = useState(false);
  const [showMoreMeals2, setShowMoreMeals2] = useState(false);

  return (
    <div className="container">
      <a name="backToTop"></a>
      <MainHeader sizeClass={"landing-header-small"} />
      <section className="category px-5 py-5">
        <div className="category-content">
          <h2>Browse Meals</h2>

          <div className="row row-cols-4 gy-5">
            {/* <div className="row"> */}
            {store.mealResults && store.mealResults.length > 0 ? (
              store.mealResults
                .slice(0, Math.round(store.mealResults.length / 3))
                .map((meal) => {
                  return <CardsForBrowsePage meal={meal} />;
                })
            ) : (
              <div>no results :(</div>
            )}
          </div>
          {store.mealResults && store.mealResults.length > 10 ? (
            <div class="d-flex justify-content-spaceEvenly mx-auto my-5 g-5" style={{justifyContent: 'space-evenly'}}>
              <div><button type="button" class="btn btn-light"><a href="#top" style={{ color: 'black', fontSize: '1.3vw' }}>To the top of page<i class="fas fa-level-up-alt"></i></a>
            </button>
              </div>
              <Link to="/meals/page2">
                <button type="button" class="btn btn-light">
                  To Page 2
                </button>
              </Link>
            </div>
          ) : null}
        </div>
        
      </section>
    </div>
  );
};

let previouscode = `return (
  <div>
    <MainHeader sizeClass={"landing-header-small"} />
    <section className="category px-5 py-5">
      <div className="category-content">
        <h2>Browse Meals</h2>
        {/* <div className="row"> */}
        {store.mealResults && store.mealResults.length > 0 ? (
          <div className="row row-cols-4 gy-5">
            {store.mealResults.slice(0, 3).map((meal) => {
              return <Card meal={meal} />;
            })}
          </div>
        ) : (
          <div>no results :(</div>
        )}
        {/* </div> */}
      </div>
    </section>
  </div>
);`;

let backToTopvar = `<a name="backToTop"></a>
<a href="#top" style={{color:'black',fontSize:'1.3vw'}}>Back to top of page<i class="fas fa-level-up-alt"></i></a>

`
