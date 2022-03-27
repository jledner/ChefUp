import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Card } from "../component/card";
import { Link, useParams, useHistory } from "react-router-dom";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import { Demo } from "./demo";
import { FeaturedCard } from "../component/FeaturedCard";



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
    let diets = ['vegetarian', 'Vegan', 'Dairy Free', 'Gluten Free']
    let intolerances = ['Peanut', 'Soy', 'Sulfite', 'Egg']
    let URLforIntolerances = 'intolerances='
    let URLforDiets = 'diet='
    for(let checkedboxes of UrlTags){
      
      for(let items of intolerances){
        if(checkedboxes==items){
          URLforIntolerances += checkedboxes+','
        }
      }
    }
    for(let checkedboxes of UrlTags){
      
      for(let items of diets){
        if(checkedboxes==items){
          URLforDiets += checkedboxes+','
        }
      }
    }
    // console.log(URLforIntolerances)
    // let result = URLforIntolerances.substring(0,URLforIntolerances.length-1);
    // console.log(result)

    console.log(URLforDiets)
    let result = URLforDiets.substring(0,URLforDiets.length-1);
    console.log(result)
    
  
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
      <h1> example = '&diet=vegan,paleo&intolerances=dairy,something'</h1>
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
            id="Vegetarian"
            onChange={(e) => {
              console.log(e.target.id);
              UrlTagsHandler(e);
            }}
          />
          <label class="form-check-label" for="Vegetarian">
            Vegetarian
          </label>
        </div>
        <div class="form-check">
          <input
          name="diet"
            class="form-check-input"
            type="checkbox"
            value=""
            id="Vegan"
            onChange={(e) => {
              console.log(e.target.id);
              UrlTagsHandler(e);
            }}
          />
          <label class="form-check-label" for="Vegan">
            Vegan
          </label>
        </div>
        <div class="form-check">
          <input
          name="diet"
            class="form-check-input"
            type="checkbox"
            value=""
            id="Dairy Free"
            onChange={(e) => {
              console.log(e.target.id);
              UrlTagsHandler(e);
            }}
          />
          <label class="form-check-label" for="Dairy Free">
            Dairy Free
          </label>
        </div>
        <div class="form-check">
          <input
          name="diet"
            class="form-check-input"
            type="checkbox"
            value=""
            id="Gluten Free"
            onChange={(e) => {
              console.log(e.target.id);
              UrlTagsHandler(e);
            }}
          />
          <label class="form-check-label" for="Gluten Free">
            Gluten Free
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
            id="Egg"
            onChange={(e) => {
              console.log(e.target.id);
              UrlTagsHandler(e);
            }}
          />
          <label class="form-check-label" for="Egg">
            Egg
          </label>
        </div>
        <div class="form-check">
          <input
          name="diet"
            class="form-check-input"
            type="checkbox"
            value=""
            id="Sulfite"
            onChange={(e) => {
              console.log(e.target.id);
              UrlTagsHandler(e);
            }}
          />
          <label class="form-check-label" for="Sulfite">
            Sulfite
          </label>
        </div>
        <div class="form-check">
          <input
          name="diet"
            class="form-check-input"
            type="checkbox"
            value=""
            id="Soy"
            onChange={(e) => {
              console.log(e.target.id);
              UrlTagsHandler(e);
            }}
          />
          <label class="form-check-label" for="Soy">
            Soy
          </label>
        </div>
        <div class="form-check">
          <input
          name="diet"
            class="form-check-input"
            type="checkbox"
            value=""
            id="Peanut"
            onChange={(e) => {
              console.log(e.target.id);
              UrlTagsHandler(e);
            }}
          />
          <label class="form-check-label" for="Peanut">
            Peanut 
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
//     history.push(`/meals/browse/preftest`);