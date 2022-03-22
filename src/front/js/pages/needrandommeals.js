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
        <h1>this page will show the user random meals as suggestions</h1>
        </>
    )
}