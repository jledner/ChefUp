import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Card } from "../component/card";
import { Link, useParams, useHistory } from "react-router-dom";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import { Demo } from "./demo";
import { FeaturedCard } from "../component/FeaturedCard";


export const NeedRandomMeals = (props) => {

    return (
        <>
            <h1>this page will show the user random meals as suggestions. I need to test the API - Jeff 3/22</h1>


            <form onSubmit={(e)=>{
                e.preventDefault()
                console.log('submit works')
            }}>

                <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="" id="vegetarian" onChange={(e) => {
                        console.log(e.target.checked)
                        console.log(e.target.id)
                    }} />
                    <label class="form-check-label" for="vegetarian">
                        Vegetarian
                    </label>
                </div>

                <button type="submit" class="btn btn-primary"> Submit</button>
            </form>



        </>


    )
}