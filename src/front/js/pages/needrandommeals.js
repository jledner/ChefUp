import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Card } from "../component/card";
import { Link, useParams, useHistory } from "react-router-dom";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import { Demo } from "./demo";
import { FeaturedCard } from "../component/FeaturedCard";

//dummy meal prefs to test randomMeal
/* 
 Jeff, i made a dummy mealPrefs object. I assume we would have something like this structure in our backend/db. 
*/
const mealPrefs = {
  diet: ["vegetarian"],
  intolerances: ["Dairy", "Shellfish"],
};
//function to generate the prefs string. it will looks something like '&diet=vegan,paleo&intolerances=dairy,something' with the above data.
let generateMealPrefString = (prefs) => {
  let prefReq = "";
  //iterate over each key in the mealPrefs and store the key name in the string varialbe as '&example='
  for (let key in prefs) {
    let string = `&${key}=`;
    //for each selection ex: vegan or paleo add those to the string so now '&example=diet1,diet2...'
    prefs[key].forEach((selection, i) => {
      //this determines if we should add a comma between selections. if the list/array of prefs[key] isn't the last item and is greater than one item.
      string +=
        i != prefs[key].length - 1 && prefs[key].length > 1
          ? `${selection},`
          : `${selection}`;
    });
    prefReq += string;
  }
  return prefReq;
};
let prefString = generateMealPrefString(mealPrefs);

console.log(prefString);
let RandomMealsUrl = `https://api.spoonacular.com/recipes/complexSearch?&maxReadyTime=20${prefString}&addRecipeInformation=true&ignorePantry=true&instructionsRequired=true&fillIngredients=true&addRecipeNutrition=true&apiKey=63c77d2857624c45a6a65b2ec5df33e0&number=100`;
console.log(RandomMealsUrl);
//   "https://api.spoonacular.com/recipes/random?limitLicense=true&tags=${strForURL}&number=20&apiKey=abb3fdf4028b4f0d989e7ee0b2b23b67";

let strForURL = ""; //empty string that is populated with parameters to pass to the URL

export const NeedRandomMeals = (props) => {
  const [UrlTags, setUrlTags] = useState([]); //As boxes are checked, tags are added to this list
  const [resultsfromfetch, setresultsfromfetch] = useState(); //the results from the fetch are assigned here and then mapped over in the JSX for
  //demo purposes.
  const { store, actions } = useContext(Context);
  const history = useHistory();
  let UrlTagsHandler = (e) => {
    //I believe each checkbox that we create will receive this function. When a box is checked in the
    //JSX this function adds that tag to the URLTags list. If unchecked, this function
    //removes that tag from the URLTags list.
    e.target.checked
      ? setUrlTags([...UrlTags, e.target.id])
      : setUrlTags(UrlTags.filter((tag) => tag != e.target.id));
  };

  let  SubmitCheckboxForm = async (e) => {
    e.preventDefault();
    console.log("submit works");
    console.log(`https://api.spoonacular.com/recipes/complexSearch?&maxReadyTime=20${prefString}&addRecipeInformation=true&ignorePantry=true&instructionsRequired=true&fillIngredients=true&addRecipeNutrition=true&apiKey=63c77d2857624c45a6a65b2ec5df33e0&number=100`)
    await actions.getMeals(
      `https://api.spoonacular.com/recipes/complexSearch?&maxReadyTime=20${prefString}&addRecipeInformation=true&ignorePantry=true&instructionsRequired=true&fillIngredients=true&addRecipeNutrition=true&apiKey=63c77d2857624c45a6a65b2ec5df33e0&number=100`,
      'preftest'
    );
    history.push(`/meals/browse/preftest`);
    //On Submit,the loop below goes through the list in URLTags and adds each string to the variable
    //strForURL. If it reaches the end of the list, it adds the string without a comma at the end but
    //otherwise it is adding a string with a comma until it reaches the end.
    //e.g... dessert,vegetarian,vegan
    // for (let i = 0; i < UrlTags.length; i++) {
    //   i == UrlTags.length - 1
    //     ? (strForURL = strForURL + UrlTags[i])
    //     : (strForURL = strForURL + UrlTags[i] + ",");
    // }
    console.log("strForURL is", strForURL);
    //below is a sample of the URL that is being logged
    // console.log(
    //   `https://api.spoonacular.com/recipes/random?limitLicense=true&tags=${prefString}&number=20&apiKey=abb3fdf4028b4f0d989e7ee0b2b23b67`
    // );
    // fetch(
    //   `https://api.spoonacular.com/recipes/complexSearch?&maxReadyTime=20${prefString}&addRecipeInformation=true&ignorePantry=true&instructionsRequired=true&fillIngredients=true&addRecipeNutrition=true&apiKey=63c77d2857624c45a6a65b2ec5df33e0&number=100`
    // )
    //   .then((response) => {
    //     if (response.ok) {
    //       console.log("Successful fetch");
    //     } else {
    //       console.log("Check the response", response);
    //     }

    //     return response.json();
    //   })
    //   .then((jsonResponse) => {
    //     console.log(jsonResponse);
    //     //Below updates the state Hook with the JSON data from the parameters given to the URL
    //     setresultsfromfetch(jsonResponse);
    //     //Below "resets" the variable so that a different search can be done. I think this will be
    //     //a temporary variable
    //     strForURL = "";
    //   })
    //   .catch((error) => console.log("Error", error));
  };

  console.log(UrlTags);
  console.log(strForURL);
  return (
    <>
      <h1>this page will show the user random meals as suggestions.</h1>
      <h3>
        Feel free to open up the console log as you test this. - Jeff 3/23/22
      </h3>

      <form
        onSubmit={(e) => {
          SubmitCheckboxForm(e);
        }}
      >
        <div class="form-check">
          <input
            class="form-check-input"
            type="checkbox"
            value=""
            id="vegetarian"
            onChange={(e) => {
              console.log(e.target.id);
              UrlTagsHandler(e);
            }}
          />
          <label class="form-check-label" for="vegetarian">
            Vegetarian
          </label>
        </div>

        <div class="form-check">
          <input
            class="form-check-input"
            type="checkbox"
            value=""
            id="dessert"
            onChange={(e) => {
              console.log(e.target.id);
              UrlTagsHandler(e);
            }}
          />
          <label class="form-check-label" for="dessert">
            Dessert
          </label>
        </div>

        <button type="submit" class="btn btn-primary">
          {" "}
          On Submit, you'll see a list of random recipes depending on what boxes
          were checked
        </button>
      </form>

      {/* If the resultsfromfetch hook is empty then a message below the button is shown. Once populated
            it will show a list of the 20, random recipes*/}
      <ol class="list-group list-group-numbered">
        {resultsfromfetch ? (
          resultsfromfetch.results.map((meal) => {
            return <Card meal={meal} />;
          })
        ) : (
          <div>resultsfromfetch variable is empty right now</div>
        )}
      </ol>
    </>
  );
};
let gg = `{trending.map((meal) => {
  return <Card meal={meal} />;
})}`

let ogcode = `  <ol class="list-group list-group-numbered">
{resultsfromfetch ? (
  resultsfromfetch.recipes.map((recipe) => (
    <li class="list-group-item">{recipe.title}</li>
  ))
) : (
  <div>resultsfromfetch variable is empty right now</div>
)}
</ol>`