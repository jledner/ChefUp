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
    let MealsInCart = store.MealsInCart;
    let meals = store.meals
    const history = useHistory()
    //let currentUserInfo = history.location.UserInfo.user was commented out to work on the page a bit 
    //easier. It's used with the commented out h1 tag in the JSX to display the logged in user's first name
    //let currentUserInfo = history.location.UserInfo.user

    return (

        <div>
            {/*Can uncomment later, but this displays <h1>Welcome {currentUserInfo.fname}</h1> */}

            {/* Modal section for cart. When the cart button is clicked and the modal is opened, it shows what
            meals are in the users' cart. The key thing to take note of here is the IsMealInCart={true} prop 
            used with the Card component inside the "modal-body." See Card component notes if needed. */}
            <button type="button" className="btn btn-primary" data-bs-toggle="modal"
                data-bs-target="#staticBackdrop" onClick={() => {
                    console.log(MealsInCart)
                }} >Testing Cart{'('+MealsInCart.length+')'}
                <i class="fas fa-shopping-cart"></i>
                
            </button>


            <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div class="modal-dialog modal-xl">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 className="modal-title text-dark" id="staticBackdropLabel">Your Cart</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <div class="d-flex flex-wrap d-flex justify-content-between">
                                {MealsInCart.map((meal, index) => {
                                    return <Card meal={meal} IsMealInCart={true} IndexOfMeal={index}  key={index}/>
                                }
                                )}
                            </div>

                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>

                        </div>
                    </div>
                </div>
            </div>
            {/* End of the Modal section for cart*/}
            <br></br>
            {/* "Meal display" section. It shows what meals are available for the logged in user to choose
                from. The key thing to take note of here is the IsUserLoggedIn={true} prop used with
                the Card component.See Card component notes if needed. */}
            <div className="row row-cols-1 row-cols-md-2 g-4">
                {meals.map((meal, index) => {
                    return <Card meal={meal} IsUserLoggedIn={true} IndexOfEachMealCard={index} key={index}/>; 
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
              {/* End of the "Meal Display" section */}

              {/* Log Out Button. Basically, it just redirects the user back to the login page when they
                finish.*/}
            <div className="container mt-3">
                <div className="row">

                    <div className="col-3 offset-10">
                        <button type="button" className="btn btn-primary float-right" onClick={() => {
                            sessionStorage.clear()
                            //two lines were commented out below to be able to work on this page easier
                            // console.log(currentUserInfo)
                            // console.log(history.location)
                            window.location.href = "/login";
                        }}>"Log Out" Button</button>
                    </div>
                </div>
                {/* End of the Log Out Button section */}

            </div>




        </div>


    )
}
