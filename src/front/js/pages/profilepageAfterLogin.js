import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Card } from "../component/card";
import { Link, useParams, useHistory } from "react-router-dom";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import { Demo } from "../pages/demo";
import { FeaturedCard } from "../component/FeaturedCard";

export const profilepageAfterLogin = (props) => {
    const history = useHistory()


    return (
        <div>
            <h1>This will be a basic profile page once logged in</h1>
            
           
        </div>


    )
}
