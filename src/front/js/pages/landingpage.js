import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";

export const LandingPage = props => {


    return (

            <div>
            <h1>This will be the landing page. 
                Ideally, it displays differently if the user is logged in or not.<br></br>
                
                The tutorial can go on this page</h1>
            </div>
    )
}