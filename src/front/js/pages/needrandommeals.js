import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Card } from "../component/card";
import { Link, useParams, useHistory } from "react-router-dom";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import { Demo } from "./demo";
import { FeaturedCard } from "../component/FeaturedCard";
let RandomMealsUrl = 'https://api.spoonacular.com/recipes/random?limitLicense=true&tags=${strForURL}&number=20&apiKey=abb3fdf4028b4f0d989e7ee0b2b23b67'
let apiKey = 'abb3fdf4028b4f0d989e7ee0b2b23b67'
let strForURL = ''
let resultsfromfetch;

export const NeedRandomMeals = (props) => {
    const [UrlTags, setUrlTags] = useState([])
    const [resultsfromfetch, setresultsfromfetch] = useState()

    let UrlTagsHandler = (e) => {
        e.target.checked ? setUrlTags([...UrlTags, e.target.id]) : setUrlTags(UrlTags.filter((tag) => tag != e.target.id))

    }
    console.log(UrlTags)
    return (
        <>
            <h1>this page will show the user random meals as suggestions.</h1>
            <h2>Check the console log frequently as you work on this. I need to continue to touch up the page and add some notes to it - Jeff 3/22/22</h2>


            <form onSubmit={(e) => {
                e.preventDefault()
                console.log('submit works')

                for (let i = 0; i < UrlTags.length; i++) {
                    i == UrlTags.length - 1 ? strForURL = strForURL + UrlTags[i] : strForURL = strForURL + UrlTags[i] + ','
                }
                console.log('strForURL is',strForURL)
                console.log(`https://api.spoonacular.com/recipes/random?limitLicense=true&tags=${strForURL}&number=20&apiKey=abb3fdf4028b4f0d989e7ee0b2b23b67`)
                fetch(`https://api.spoonacular.com/recipes/random?limitLicense=true&tags=${strForURL}&number=20&apiKey=abb3fdf4028b4f0d989e7ee0b2b23b67`)
                    .then((response) => {
                        if (response.ok) {
                            console.log('Successful fetch')
                        } else { console.log('Check the response', response) }

                        return response.json()
                    })
                    .then((jsonResponse) => {
                        console.log(jsonResponse)
                        setresultsfromfetch(jsonResponse)
                        




                    })
                    .catch(error => console.log('Error', error))

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

                <button type="submit" class="btn btn-primary"> On Submit, you'll see a list of
                random recipes depending on what boxes were checked</button>
            </form>


            <ol class="list-group list-group-numbered">
                {resultsfromfetch ? resultsfromfetch.recipes.map((recipe)=> <li class="list-group-item">{recipe.title}</li>):<div>resultsfromfetch variable is empty right now</div>}
                
            </ol>


        </>


    )
}