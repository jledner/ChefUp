import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Card } from "../component/card";
import { Link, useParams, useHistory } from "react-router-dom";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import { Demo } from "./demo";
import { FeaturedCard } from "../component/FeaturedCard";

export const ProfilePage = (props) => {
    const { store, setStore } = useContext(Context);
    let meals = store.meals;
    const history = useHistory()
    let currentUserInfo = history.location.UserInfo.user

    return (
        <div>
            <h1>Welcome {currentUserInfo.fname}</h1>
            <br></br>
            <div className="row row-cols-1 row-cols-md-2 g-4">
                {meals.map((meal) => {
                    return <Card meal={meal} />;
                })}
                {/* <Card
                image="https://www.jocooks.com/wp-content/uploads/2020/06/chicken-gyros-1-14.jpg"
                name="Chicken Gyro"
               />
              <div style={{ border: "5px solid green" }}>
                <Card image="https://i2.wp.com/www.downshiftology.com/wp-content/uploads/2020/04/Shrimp-Tacos-main-1.jpg" />
              </div>
              <Card image="https://foodtasia.com/wp-content/uploads/2019/02/tuscan-pasta-20.jpg" />
              <Card image="https://i.guim.co.uk/img/media/fdcd34886d1d9aa696cbac74d1a3293aa4808895/0_680_6355_3814/master/6355.jpg?width=1200&height=900&quality=85&auto=format&fit=crop&s=8b6d0cb3ca5aa21a21d485bef8f481ba" /> */}
            </div>

              
            <div class="container mt-3">
                <div class="row">
                    
                    <div class="col-3 offset-10">
                        <button type="button" class="btn btn-primary float-right" onClick={() => {
                            //sessionStorage.clear()
                            console.log(currentUserInfo)
                            //window.location.href = "/login";
                        }}>Fake Log Out Button</button>
                    </div>
                </div>


            </div>
            </div>


            )
}
