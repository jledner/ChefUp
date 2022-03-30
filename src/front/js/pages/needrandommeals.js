import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Card } from "../component/card";
import { Link, useParams, useHistory } from "react-router-dom";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import { Demo } from "./demo";
import { FeaturedCard } from "../component/FeaturedCard";






export const NeedRandomMeals = (props) => {
  const [UrlParams, setUrlParams] = useState([]); //As boxes are checked, params are added to this list
  
  const { store, actions } = useContext(Context);
  const history = useHistory();
  let UrlParamsHandler = (e) => {
    //Each checkbox that we create will receive this function. When a box is checked in the
    //JSX this function adds that param to URLParams using e.target.id . If unchecked, this function
    //removes that tag from the URLParams array.
    e.target.checked
      ? setUrlParams([...UrlParams, e.target.id])
      : setUrlParams(UrlParams.filter((tag) => tag != e.target.id));
  };

  let SubmitCheckboxForm = async (e) => {
    e.preventDefault();
    console.log("submit works");
    //"master lists" of diets and intolerances. These can easily be modified
    let diets = ['vegetarian', 'vegan', 'lacto-vegetarian', 'ovo-vegetarian',]
    let intolerances = ['peanut', 'soy', 'sulfite', 'sesame','dairy','gluten']
    let URLforIntolerances = '&intolerances='
    let URLforDiets = '&diet='

    //goes through each checkedbox that was added to URLParams hook
    for (let checkedbox of UrlParams) {
      //goes through each intolerance in the intolerances array
      for (let anIntolerance of intolerances) {
        //if a match if found, the match is concatenated to URLforIntolerances
        if (checkedbox == anIntolerance) {
          URLforIntolerances += checkedbox + ','
        }
      }
    }
    //goes through each checkedbox that was added to URLParams hook
    for (let chosenbox of UrlParams) {
      //goes through each diet in the diets array
      for (let diet of diets) {
         //if a match if found, the match is concatenated to URLforDiets
        if (chosenbox == diet) {
          URLforDiets += chosenbox + ','
        }
      }
    }
    //substring() removes the trailing comma for both strings below that will be used as URLs
    let noFinalCommaInIntolerancesURL = URLforIntolerances.substring(0, URLforIntolerances.length - 1);
    console.log(noFinalCommaInIntolerancesURL)


    let noFinalCommaInDietURL = URLforDiets.substring(0, URLforDiets.length - 1);
    console.log(noFinalCommaInDietURL)
    console.log(
      `https://api.spoonacular.com/recipes/complexSearch?&maxReadyTime=20${noFinalCommaInDietURL}${noFinalCommaInIntolerancesURL}&addRecipeInformation=true&ignorePantry=true&instructionsRequired=true&fillIngredients=true&addRecipeNutrition=true&apiKey=abb3fdf4028b4f0d989e7ee0b2b23b67&number=100`

    );
    await actions.getMeals(
      `https://api.spoonacular.com/recipes/complexSearch?&maxReadyTime=20${noFinalCommaInDietURL}${noFinalCommaInIntolerancesURL}&addRecipeInformation=true&ignorePantry=true&instructionsRequired=true&fillIngredients=true&addRecipeNutrition=true&apiKey=abb3fdf4028b4f0d989e7ee0b2b23b67&number=100`,
      'UrlParams: '+noFinalCommaInIntolerancesURL+noFinalCommaInDietURL
     )
     history.push(`/meals/browse/test`);

  }
    console.log(UrlParams);
    
    //for the JSX below each input id is set to either a diet or intolerance. When checked, the id
    //is added to the UrlParams to be used later in the URL to fetch the meals
    return (
      <>
        <h1>Framework in place. Test it out with the console open preferably</h1>
        <h2>Code will probably be modified later. Page was coded this way for the time being to give us a
          clear idea of what we want it to do.  - Jeff 3/27/22
        </h2>
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
              id="vegetarian" //each input id is set to to either a diet or intolerance
              onChange={(e) => {
                console.log(e.target.id);
                UrlParamsHandler(e);
              }}
            />
            <label class="form-check-label" for="vegetarian">{/*the value after for= must match the id in inputtag*/}
              Vegetarian
              {/* Each piece of text is set to match the id in the input located in the same div */}
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
                UrlParamsHandler(e);
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
                UrlParamsHandler(e);
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
                UrlParamsHandler(e);
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
                UrlParamsHandler(e);
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
                UrlParamsHandler(e);
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
                UrlParamsHandler(e);
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
                UrlParamsHandler(e);
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
                UrlParamsHandler(e);
              }}
            />
            <label class="form-check-label" for="dairy">
            Dairy
            </label>
          </div>
          <div class="form-check">
            <input
              name="diet"
              class="form-check-input"
              type="checkbox"
              value=""
              id="gluten"
              onChange={(e) => {
                console.log(e.target.id);
                UrlParamsHandler(e);
              }}
            />
            <label class="form-check-label" for="gluten">
            Gluten
            </label>
          </div>

          <button type="submit" class="btn btn-primary">
            {" "}
            Once preferences are chosen, click me to be taken to browse page.
          </button>
        </form>

        
      </>
    );
  }



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