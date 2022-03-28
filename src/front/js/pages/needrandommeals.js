import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Card } from "../component/card";
import { Link, useParams, useHistory } from "react-router-dom";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import { Demo } from "./demo";
import { FeaturedCard } from "../component/FeaturedCard";






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

  let SubmitCheckboxForm = async (e) => {
    e.preventDefault();
    console.log("submit works");
    let diets = ['vegetarian', 'vegan', 'lacto-vegetarian', 'ovo-vegetarian',]
    let intolerances = ['peanut', 'soy', 'sulfite', 'sesame','dairy']
    let URLforIntolerances = '&intolerances='
    let URLforDiets = '&diet='
    for (let checkedboxes of UrlTags) {

      for (let items of intolerances) {
        if (checkedboxes == items) {
          URLforIntolerances += checkedboxes + ','
        }
      }
    }
    for (let checkedboxes of UrlTags) {

      for (let items of diets) {
        if (checkedboxes == items) {
          URLforDiets += checkedboxes + ','
        }
      }
    }

    let noFinalCommaInIntolerancesURL = URLforIntolerances.substring(0, URLforIntolerances.length - 1);
    console.log(noFinalCommaInIntolerancesURL)


    let noFinalCommaInDietURL = URLforDiets.substring(0, URLforDiets.length - 1);
    console.log(noFinalCommaInDietURL)
    console.log(
      `https://api.spoonacular.com/recipes/complexSearch?&maxReadyTime=20${noFinalCommaInDietURL}${noFinalCommaInIntolerancesURL}&addRecipeInformation=true&ignorePantry=true&instructionsRequired=true&fillIngredients=true&addRecipeNutrition=true&apiKey=abb3fdf4028b4f0d989e7ee0b2b23b67&number=100`

    );
    await actions.getMeals(
      `https://api.spoonacular.com/recipes/complexSearch?&maxReadyTime=20${noFinalCommaInDietURL}${noFinalCommaInIntolerancesURL}&addRecipeInformation=true&ignorePantry=true&instructionsRequired=true&fillIngredients=true&addRecipeNutrition=true&apiKey=abb3fdf4028b4f0d989e7ee0b2b23b67&number=100`,
     'suggestions'//!!!this is the offender that messes with your search results!!!
     )
     history.push(`/meals/browse/preftest`);
    //below is a sample of the URL that is being logged

    // fetch(
    //   `https://api.spoonacular.com/recipes/complexSearch?&maxReadyTime=20${noFinalCommaDiet}${noFinalCommaIntolerances}&addRecipeInformation=true&ignorePantry=true&instructionsRequired=true&fillIngredients=true&addRecipeNutrition=true&apiKey=abb3fdf4028b4f0d989e7ee0b2b23b67&number=100`
    // )
    //     .then((response) => {
    //       if (response.ok) {
    //         console.log("Successful fetch");
    //       } else {
    //         console.log("Check the response", response);
    //       }

    //       return response.json();
    //     })
    //     .then((jsonResponse) => {
    //       console.log(jsonResponse);
    //       //Below updates the state Hook with the JSON data from the parameters given to the URL
    //       //setresultsfromfetch(jsonResponse);
    //       //Below "resets" the variable so that a different search can be done. I think this will be
    //       //a temporary variable

    //     })
    //     .catch((error) => console.log("Error", error));
    // };
  }
    console.log(UrlTags);
    
    return (
      <>
        <h1> exampleURL  = '&diet=vegetarian&intolerances=dairy,peanut'</h1>
        <h3>
          Diets
        </h3>

        <form
          onSubmit={(e) => {
            SubmitCheckboxForm(e);
          }}
        >
          <div class="form-check">
            <input
              name="diet"
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
              name="diet"
              class="form-check-input"
              type="checkbox"
              value=""
              id="vegan"
              onChange={(e) => {
                console.log(e.target.id);
                UrlTagsHandler(e);
              }}
            />
            <label class="form-check-label" for="vegan">
              Vegan
            </label>
          </div>
          <div class="form-check">
            <input
              name="diet"
              class="form-check-input"
              type="checkbox"
              value=""
              id="ovo-vegetarian"
              onChange={(e) => {
                console.log(e.target.id);
                UrlTagsHandler(e);
              }}
            />
            <label class="form-check-label" for="ovo-vegetarian">
              Ovo-Vegetarian(excludes dairy)
            </label>
          </div>
          <div class="form-check">
            <input
              name="diet"
              class="form-check-input"
              type="checkbox"
              value=""
              id="lacto-vegetarian"
              onChange={(e) => {
                console.log(e.target.id);
                UrlTagsHandler(e);
              }}
            />
            <label class="form-check-label" for="lacto-vegetarian">
            Lacto-Vegetarian(exludes eggs)
            </label>
          </div>
          
          <h3>
            Intolerances
          </h3>
          <div class="form-check">
            <input
              name="diet"
              class="form-check-input"
              type="checkbox"
              value=""
              id="sesame"
              onChange={(e) => {
                console.log(e.target.id);
                UrlTagsHandler(e);
              }}
            />
            <label class="form-check-label" for="sesame">
            Sesame
            </label>
          </div>
          <div class="form-check">
            <input
              name="diet"
              class="form-check-input"
              type="checkbox"
              value=""
              id="sulfite"
              onChange={(e) => {
                console.log(e.target.id);
                UrlTagsHandler(e);
              }}
            />
            <label class="form-check-label" for="sulfite">
              Sulfite
            </label>
          </div>
          <div class="form-check">
            <input
              name="diet"
              class="form-check-input"
              type="checkbox"
              value=""
              id="soy"
              onChange={(e) => {
                console.log(e.target.id);
                UrlTagsHandler(e);
              }}
            />
            <label class="form-check-label" for="soy">
              Soy
            </label>
          </div>
          <div class="form-check">
            <input
              name="diet"
              class="form-check-input"
              type="checkbox"
              value=""
              id="peanut"
              onChange={(e) => {
                console.log(e.target.id);
                UrlTagsHandler(e);
              }}
            />
            <label class="form-check-label" for="peanut">
              Peanut
            </label>
          </div>
          
          <div class="form-check">
            <input
              name="diet"
              class="form-check-input"
              type="checkbox"
              value=""
              id="dairy"
              onChange={(e) => {
                console.log(e.target.id);
                UrlTagsHandler(e);
              }}
            />
            <label class="form-check-label" for="dairy">
            Dairy
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
  }


let ogcode = `  <ol class="list-group list-group-numbered">
{resultsfromfetch ? (
  resultsfromfetch.recipes.map((recipe) => (
    <li class="list-group-item">{recipe.title}</li>
  ))
) : (
  <div>resultsfromfetch variable is empty right now</div>
)}
</ol>`

//Waynes code below

//dummy meal prefs to test randomMeal
/*
 Jeff, i made a dummy mealPrefs object. I assume we would have something like this structure in our backend/db.
*/
// const mealPrefs = {
//   diet: ["vegetarian"],
//   intolerances: ["Dairy", "Shellfish"],
// };
// //function to generate the prefs string. it will looks something like '&diet=vegan,paleo&intolerances=dairy,something' with the above data.
// let generateMealPrefString = (prefs) => {
//   let prefReq = "";
//   //iterate over each key in the mealPrefs and store the key name in the string varialbe as '&example='
//   for (let key in prefs) {
//     let string = `&${key}=`;
//     //for each selection ex: vegan or paleo add those to the string so now '&example=diet1,diet2...'
//     prefs[key].forEach((selection, i) => {
//       //this determines if we should add a comma between selections. if the list/array of prefs[key] isn't the last item and is greater than one item.
//       string +=
//         i != prefs[key].length - 1 && prefs[key].length > 1
//           ? `${selection},`
//           : `${selection}`;
//     });
//     prefReq += string;
//   }
//   return prefReq;
// };
// let prefString = generateMealPrefString(mealPrefs);

// console.log(prefString);

//let RandomMealsUrl = `https://api.spoonacular.com/recipes/complexSearch?&maxReadyTime=20${prefString}&addRecipeInformation=true&ignorePantry=true&instructionsRequired=true&fillIngredients=true&addRecipeNutrition=true&apiKey=63c77d2857624c45a6a65b2ec5df33e0&number=100`;





//takes valid url and takes us to browse page with results....watch the prefString

// console.log(`https://api.spoonacular.com/recipes/complexSearch?&maxReadyTime=20${prefString}&addRecipeInformation=true&ignorePantry=true&instructionsRequired=true&fillIngredients=true&addRecipeNutrition=true&apiKey=63c77d2857624c45a6a65b2ec5df33e0&number=100`)
//     await actions.getMeals(
//       `https://api.spoonacular.com/recipes/complexSearch?&maxReadyTime=20${prefString}&addRecipeInformation=true&ignorePantry=true&instructionsRequired=true&fillIngredients=true&addRecipeNutrition=true&apiKey=63c77d2857624c45a6a65b2ec5df33e0&number=100`,
//       'preftest'
//     );
//     history.push(`/meals/browse/preftest`);////////