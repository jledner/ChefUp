import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Card } from "../component/card";
import { Link, useParams,useHistory } from "react-router-dom";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import { Demo } from "./demo";
import { FeaturedCard } from "../component/FeaturedCard";

export const ProfilePage = (props) => {
    
    const history = useHistory()

    return (
        <div>
            <button onClick={()=>{console.log(history.location)}}>click to see UserInfo after opening console</button>
           <h1></h1> 

            
           
        </div>


    )
}
