import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams, useHistory } from "react-router-dom";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import foodImg from "../../img/foods/pls.jpg";
import "../../styles/landing.css";
import { Card } from "../component/card";
import { MainHeader } from "../component/MainHeader";

export const BrowsePage3 = (props) => {
    const { store } = useContext(Context);
    const [searchQuery, setSearchQuery] = useState("");
    const history = useHistory();


    return (
        <div>
            <MainHeader sizeClass={"landing-header-small"} />
            <section className="category px-5 py-5">
                <div className="category-content">
                    <h2>Browse Meals</h2>
                    <div className="row row-cols-4 gy-5">
                        {
                            store.mealResults.slice(Math.round((store.mealResults.length / 3) * 2), store.mealResults.length).map((meal) => {
                                return <Card meal={meal} />;
                            })
                            }
                    </div>

                    <div class="d-flex justify-content-around mx-auto my-5 gap-2">
                        <div>
                            <Link to="/meals/page2">
                                <button type="button" class="btn btn-light">To Page 2</button>

                            </Link>
                        </div>
                        <div>
                            <Link to="/randommeals">
                                <button type="button" class="btn btn-light">Run Another Search</button>

                            </Link>
                        </div>
                    </div>



                </div>
            </section >
        </div >
    );
}