import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Card } from "../component/card";
import { Link, useParams, useHistory } from "react-router-dom";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import { Demo } from "./demo";
import { FeaturedCard } from "../component/FeaturedCard";
let RandomMealsUrl = 'https://api.spoonacular.com/recipes/random?limitLicense=true&tags=vegetarian&number=20'
let apiKey = 'abb3fdf4028b4f0d989e7ee0b2b23b67'


export const NeedRandomMeals = (props) => {
    const [UrlTags,setUrlTags] = useState([])

    let UrlTagsHandler = (e) =>{
        e.target.checked ? setUrlTags([...UrlTags,e.target.id]):setUrlTags(UrlTags.filter((tag)=> tag != e.target.id))
        
    }
    console.log(UrlTags)
    return (
        <>
            <h1>this page will show the user random meals as suggestions. I need to test the API - Jeff 3/22</h1>


            <form onSubmit={(e)=>{
                e.preventDefault()
                console.log('submit works')
                let strForURL = ''
                for (let i = 0; i < UrlTags.length; i++) {
                    i == UrlTags.length-1 ? strForURL = strForURL + UrlTags[i]:strForURL = strForURL + UrlTags[i]+','
                  }
                console.log(strForURL)
                console.log(`https://api.spoonacular.com/recipes/random?limitLicense=true&tags=${strForURL}&number=20apiKey=abb3fdf4028b4f0d989e7ee0b2b23b67`)
            }}>

                <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="" id="vegetarian" onChange={(e) => {
                        
                        console.log(e.target.id)
                        UrlTagsHandler(e)
                    }} />
                    <label class="form-check-label" for="vegetarian">
                        Vegetarian
                    </label>
                </div>

                <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="" id="dessert" onChange={(e) => {
                        
                        console.log(e.target.id)
                        UrlTagsHandler(e)

                        
                    }} />
                    <label class="form-check-label" for="dessert">
                        Dessert
                    </label>
                </div>

                <button type="submit" class="btn btn-primary"> Submit</button>
            </form>



        </>


    )
}