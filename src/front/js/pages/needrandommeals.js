import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Card } from "../component/card";
import { Link, useParams, useHistory } from "react-router-dom";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import { Demo } from "./demo";
import { FeaturedCard } from "../component/FeaturedCard";
import { MainHeader } from "../component/MainHeader";

export const NeedRandomMeals = (props) => {
  let newobj = JSON.parse(localStorage.getItem("user"));
  const [UrlParams, setUrlParams] = useState([]); //As boxes are checked, params are added to this list
  const [showToast, setShowToast] = useState(false);
  // useEffect(() => {

  // }, [showToast]);
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
    let diets = ["vegetarian", "vegan", "lacto-vegetarian", "ovo-vegetarian"];
    let intolerances = [
      "peanut",
      "soy",
      "sulfite",
      "sesame",
      "dairy",
      "gluten",
    ];
    let URLforIntolerances = "&intolerances=";
    let URLforDiets = "&diet=";

    let newobj = JSON.parse(localStorage.getItem("user"));
    for (let diets of newobj.mealPrefs.diets) {
      URLforDiets += diets + ",";
    }

    for (let intolerances of newobj.mealPrefs.intolerances) {
      URLforIntolerances += intolerances + ",";
    }

    //goes through each checkedbox that was added to URLParams hook
    for (let checkedbox of UrlParams) {
      //goes through each intolerance in the intolerances array
      for (let anIntolerance of intolerances) {
        //if a match if found, the match is concatenated to URLforIntolerances
        if (checkedbox == anIntolerance) {
          URLforIntolerances += checkedbox + ",";
        }
      }
    }
    //goes through each checkedbox that was added to URLParams hook
    for (let chosenbox of UrlParams) {
      //goes through each diet in the diets array
      for (let diet of diets) {
        //if a match if found, the match is concatenated to URLforDiets
        if (chosenbox == diet) {
          URLforDiets += chosenbox + ",";
        }
      }
    }
    //substring() removes the trailing comma for both strings below that will be used as URLs
    let noFinalCommaInIntolerancesURL = URLforIntolerances.substring(
      0,
      URLforIntolerances.length - 1
    );
    console.log(noFinalCommaInIntolerancesURL);

    let noFinalCommaInDietURL = URLforDiets.substring(
      0,
      URLforDiets.length - 1
    );
    // 63c77d2857624c45a6a65b2ec5df33e0
    // abb3fdf4028b4f0d989e7ee0b2b23b67
    console.log(noFinalCommaInDietURL);
    console.log(
      `https://api.spoonacular.com/recipes/complexSearch?&maxReadyTime=20${noFinalCommaInDietURL}${noFinalCommaInIntolerancesURL}&addRecipeInformation=true&ignorePantry=true&instructionsRequired=true&fillIngredients=true&addRecipeNutrition=true&apiKey=63c77d2857624c45a6a65b2ec5df33e0&number=100`
    );
    await actions.getMeals(
      `https://api.spoonacular.com/recipes/complexSearch?&maxReadyTime=20${noFinalCommaInDietURL}${noFinalCommaInIntolerancesURL}&addRecipeInformation=true&ignorePantry=true&instructionsRequired=true&fillIngredients=true&addRecipeNutrition=true&apiKey=63c77d2857624c45a6a65b2ec5df33e0&number=100`,
      "UrlParams: " + noFinalCommaInIntolerancesURL + noFinalCommaInDietURL
    );
    history.push(`/meals/browse/page1`);
  };

  console.log(UrlParams);
  //json.parse -->
  //for the JSX below each input id is set to either a diet or intolerance. When checked, the id
  //is added to the UrlParams to be used later in the URL to fetch the meals

  const toastStyles = {
    position: "absolute",
    bottom: "30%",
    left: "15%",
  };

  let userobj = JSON.parse(localStorage.getItem("user"));
  console.log(userobj);
  console.log(userobj.mealPrefs.diets);
  console.log(userobj["mealPrefs"].intolerances);
  let dietsString = "";
  let intolerancesString = "";
  for (let diets of userobj.mealPrefs.diets) {
    dietsString += diets + " ";
  }
  for (let intolerances of userobj["mealPrefs"]["intolerances"]) {
    intolerancesString += intolerances + " ";
  }

  return (
    <>
      <MainHeader sizeClass={"landing-header-small"} />
      <br></br>

      <br></br>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          position: "relative",
        }}
      >
        <div style={{ width: "75%" }}>
          <hr></hr>
        </div>
      </div>

      <div
        class="formdiv"
        style={{
          display: "flex",
          justifyContent: "center",
          position: "relative",
        }}
      >
        <div className="formcontainer" style={{ width: "75%" }}>
          <br></br>

          <form
            class="m-0 random-meals"
            style={{
              borderRadius: "8px",
              borderWidth: "1px",
              // border: "#fbd1a2",
              // borderStyle: "solid",
              color: "black",
              padding: "3%",
            }}
            onSubmit={(e) => {
              SubmitCheckboxForm(e);
            }}
          >
            <div class="d-flex justify-content-center">
              <div>
                <h2>Meals for you!</h2>
              </div>
            </div>
            <div class="d-flex justify-content-center">
              <div>
                <p>Your preferences are shown below. Choose more if needed.</p>
              </div>
            </div>

            <div class="d-flex justify-content-around ">
              <div id="intolerances div" class="p-5">
                <h3>Intolerances</h3>
                <br></br>
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
                    checked
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
                    checked
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
              </div>
              {/* diet div starts below
  diet div starts below
  diet div starts below
  
  */}
              <div id="dietdiv" class="p-5">
                <h3>Diets</h3>
                <br></br>

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
                  <label class="form-check-label" for="vegetarian">
                    {/*the value after for= must match the id in inputtag*/}
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
                    checked
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
              </div>
            </div>
          </form>
          {/* Search button below */}
          {/* Search button below */}
          <br></br>

          <div class="container mt-3">
            <div class="row justify-content-end">
              <div class="col-3 ">
                <button
                  type="submit"
                  class="btn btn-primary "
                  onClick={SubmitCheckboxForm}
                >
                  Search for Suggestions
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

let oldjumbrotron = `<div class='jumbotroncontainer' style={{  display: 'flex', justifyContent: 'center', position: 'relative' }}>
<div class="jumbotron" style={{borderRadius:'8px', backgroundColor: 'lightblue', width: '75%', padding: '5%' }}>
  <div class="d-flex justify-content-center">
    <div>
      <h3><em>A Conversation As Old As Time...</em></h3>
    </div>

  </div>
  <br />
  <br />
  <div class="container">
    <div class="row justify-content-start">
      <div class="col-3"><blockquote><p class='lead'>What do you want to eat today?</p>
        &mdash; <cite>You</cite> </blockquote></div>
    </div>

  </div>
  <br></br>
  <div class="container">
    <div class="row justify-content-end">
      <div class="col-3"><blockquote><p class='lead'>I don't know, what do you want to eat today?</p>
        &mdash; <cite>Your friend, cousin, girlfriend, uncle, etc</cite> </blockquote></div>
    </div>

  </div>
  <br />

  <hr class="my-4" />
  <h5>Let's help you with that. First, let's upload your preferences from your user profile.</h5>
  <button
    type="button"
    class="btn btn-primary btn-sm"
    onClick={() => {
      console.log('upload prefs clicked')
      setShowToast(!showToast)
      }}
  >
    Upload Preferences
  </button>
  <div class={showToast ? "toast show" : "toast hide"} style={toastStyles}>
    <div class="toast-header" style={{ backgroundColor: "lightgreen" }}>
      <strong class="me-auto" style={{ color: "darkgreen" }} >Upload Complete!</strong>
      <button
        type="button"
        class="btn-close"
        data-bs-dismiss="toast"
        onClick={() => {
          console.log('cose click')
          setShowToast(!showToast)
          }}
      ></button>
    </div>
    <div class="toast-body " style={{ backgroundColor: "ghostwhite" }}>
      <p>
      <p>Uploaded the following diet(s): {dietsString}</p>
      </p>
      <p>Uploaded the following intolerances(s): {intolerancesString}</p>
    </div>
  </div>
</div>

</div>`;

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
