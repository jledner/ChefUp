import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams, useHistory } from "react-router-dom";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";

export const SignUp = (props) => {
  const [SignUpInfo, setSignUpInfo] = useState({
    SignUpFirstName: "",
    SignUpLastName: "",
    SignUpUserName: "",
    SignUpEmail: "",
    SignUpPassword: "",
  });

  const history = useHistory();

  //Sends a Post Request to the MeCall API to create a new user account. While the API is limited in
  //functionality, it helps to understand clearer the flow of the app
  let PostToMeCallAPI = () => {
    let sample = {
      fname: SignUpInfo.SignUpFirstName,
      lname: SignUpInfo.SignUpLastName,

      username: SignUpInfo.SignUpUserName,
      email: SignUpInfo.SignUpEmail,
      avatar: "https://www.mecallapi.com/users/cat.png",
    };

    fetch("https://www.mecallapi.com/api/users/create", {
      method: "POST",
      body: JSON.stringify(sample),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (response.ok) {
          console.log(response);
          //found this info about sessionStorage and decided to mess around with it. Don't think we'll need it
          //but it adds an extra way to pass data around the app
          //more info here: https://www.w3schools.com/jsref/prop_win_sessionstorage.asp
          // sessionStorage.setItem("SignUpFirstName", SignUpInfo.SignUpFirstName);
          // sessionStorage.setItem("SignUpLastName", SignUpInfo.SignUpLastName);
          // sessionStorage.setItem("SignUpUserName", SignUpInfo.SignUpUserName);
          // sessionStorage.setItem("SignUpEmail", SignUpInfo.SignUpEmail);
          // sessionStorage.setItem("SignUpPassword", SignUpInfo.SignUpPassword);

          //How to access the data if needed: console.log(sessionStorage.getItem("SignUpUserName"))

          return response.json();
        }
      })
      .then((responseJSON) => {
        console.log("response", responseJSON);
        if (responseJSON.status == "ok") {
          //if the signup request to the API goes through ok, then our app takes us to the login page
          //StarWars blog reading list
          history.push({ pathname: "/login", UserInfo: responseJSON });
        }
      })
      .catch((e) => console.log(e, " THE ERROR"));
  };

  //The idea with these useStates is that they start out as true on render, and should remain true onSubmit if they pass the logic tests we give them.
  //If the user enters invalid data, these useStates become false and the corresponding error messages in the ternary operators located in the
  //JSX become visible as feedback for the user.
  const [IsEmailVerified, setIsEmailVerified] = useState(true);
  const [IsPasswordVerified, setIsPasswordVerified] = useState(true);
  const [IsUserNameVerified, setIsUserNameVerified] = useState(true);

  // SpecialCharCount and isUpperCaseCount are used with the function passwordVerifier. Passwords should have at least 1 uppercase letter
  //and one special character
  let SpecialCharCount = 0;
  let isUpperCaseCount = 0;

  //blankSpacesforUsername is used with the function checksForBlankSpaces. Usernames should not have a blankspace in them
  let blankSpacesforUsername = 0;

  //emailregex and blankespaceregex are referenced in the HandleSubmit function
  const emailregex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
  const blankspaceregex = /^\s*$/;

  const passwordVerifier = (givenpassword) => {
    //two functions below. They test one character and return true if depending on if the character
    //is uppercase or a special character(e.g... ~`!#$%\^&*+=\-\[\]\\';,/{}|\\":<>\?)
    const isSpecialChar = (eachcharacter) =>
      /[~`!#$%\^&*+=\-\[\]\\'@;,/{}|\\":<>\?]/g.test(eachcharacter);
    const isUpperCase = (eachcharacter) => /^[A-Z]*$/.test(eachcharacter);

    for (let eachcharacter of givenpassword) {
      //goes through each character in the given password and checks for the special character. If true, SpecialCharCount is incremented
      if (isSpecialChar(eachcharacter) == true) {
        SpecialCharCount += 1;
      }
      //goes through each character in the given password and checks for the uppercase. If true, isUpperCaseCount is incremented
      if (isUpperCase(eachcharacter) == true) {
        isUpperCaseCount += 1;
      }
    }
    //Ideally, the given password has a count of at least one special character and uppercase letter. It should also be at least 6 characters.
    //If all those conditions are met, the function passwordVerifier returns a boolean of "true."
    return (
      SpecialCharCount >= 1 &&
      isUpperCaseCount >= 1 &&
      givenpassword.length >= 6
    );
  };

  const checksForBlankSpaces = (givenUserName) => {
    const isBlankSpace = (eachcharacter) => /^\s*$/.test(eachcharacter) == true;
    const blankspaceregex = /^\s*$/;
    //goes through each character in the given username and checks for a blank space that ideally does not exist
    for (let eachcharacter of givenUserName) {
      if (isBlankSpace(eachcharacter) == true) {
        blankSpacesforUsername += 1;
      }
    }
    //If the user gives us a username with no blank spaces, the function "checksForBlankSpaces" should return a boolean
    //of "true." Also checks that the length is at least 6 characters
    return givenUserName.length >= 6;

    //Below was removed from return statement on 4/4/22: blankSpacesforUsername == 0 &&
  };

  const HandleChange = (e) => {
    console.log("The chosen key is: ", e.target.id);
    console.log(
      "the key will be updated with the following info: ",
      e.target.value
    );
    //The target ids in the JSX were set to the key values in the SignUpInfo object so that the line below could be a bit more abstract.
    // e.target.id should always result in either SignUpUserName, SignUpEmail, SignUpPassword, SignUpFirstName, or
    //SignUpLastName
    setSignUpInfo({ ...SignUpInfo, [e.target.id]: e.target.value });
  };

  //function below is called at the end of the HandleSubmit
  let VerifyGivenData = (results) => {
    console.log("Are the User Name, Email, and Password valid?", results);
    results === true
      ? console.log("Username, Email, Password good to go")
      : null;
    if (results == true) {
      history.push({ pathname: "/login", UserInfo: SignUpInfo });
      //function below is disabled. We don't need the MeCallAPI anymore.
      //PostToMeCallAPI()
    }
  };

  //to the best of my ability, the function below is...functional lol.
  const HandleSubmit = (e) => {
    //preventDefault used to prevent the refresh of the page when the submit button is clicked
    e.preventDefault();
    //The regex below was found online and "regex.test(SignUpInfo.SignUpEmail)" returns true or false if the given email is
    //entered in a valid format. If false, isEmailVerified is set to false and an error message is displayed for the user
    setIsEmailVerified(emailregex.test(SignUpInfo.SignUpEmail));

    //passwordverifier is given SignUpPassword as a parameter and returns "true" or "false". If false, isPasswordVerified is set to false
    //and an error message is displayed for the user.
    setIsPasswordVerified(passwordVerifier(SignUpInfo.SignUpPassword));

    //checks if the given username is a valid length and does not contain blank spaces. Ideally, it returns 5 "true" booleans.
    setIsUserNameVerified(
      SignUpInfo.SignUpUserName != "" &&
        //endsWith and startsWith are probably overkill given the function "checksForBlankSpaces" but I guess the extra checks don't hurt
        !SignUpInfo.SignUpUserName.endsWith(" ") &&
        !SignUpInfo.SignUpUserName.startsWith(" ") &&
        SignUpInfo.SignUpUserName.length >= 6 &&
        checksForBlankSpaces(SignUpInfo.SignUpUserName)
    );
    //goal is to be able to have all these expressions evaluate to true, confirming that the username, email, and password are entered correctly
    VerifyGivenData(
      //Checks the email format
      emailregex.test(SignUpInfo.SignUpEmail) &&
        //checks the user name format
        SignUpInfo.SignUpUserName != "" &&
        !SignUpInfo.SignUpUserName.endsWith(" ") &&
        !SignUpInfo.SignUpUserName.startsWith(" ") &&
        checksForBlankSpaces(SignUpInfo.SignUpUserName) &&
        SignUpInfo.SignUpUserName.length >= 6 &&
        //checks the password format
        SpecialCharCount >= 1 &&
        isUpperCaseCount >= 1 &&
        SignUpInfo.SignUpPassword.length >= 6
    );
  };

  return (
    <div className="container">
      <>
        {/* The divs with the labels "SignUpUserName","SignUpEmail, and "SignUpPassword" contain the ternary operators linked to
      linked to the useStates in lines 11-13 */}

        {/* second form below */}
        <div class="container h-100 mt-5">
          <div class="row d-flex justify-content-center align-items-center h-100">
            <div class="col-12 col-md-9 col-lg-7 col-xl-6">
              <div class="card" style={{ borderRadius: "15px" }}>
                <div class="card-body p-5">
                  <h2 class="text-uppercase text-center text-dark mb-5">
                    Create an account
                  </h2>

                  <form>
                    <div class="form-floating mb-3">
                      <input
                        type="email"
                        class="form-control text-dark"
                        id="SignUpEmail"
                        placeholder="name@example.com"
                        value={SignUpInfo.SignUpEmail}
                        onChange={HandleChange}
                      />
                      <label class=" text-dark" for="SignUpEmail">
                        Email Address
                      </label>
                      {IsEmailVerified ? null : (
                        <p style={{ color: "red" }}>
                          Invalid email! Please check the format and try again
                        </p>
                      )}
                    </div>

                    <div class="form-floating mb-3">
                      <input
                        type="text"
                        class="form-control text-dark"
                        id="SignUpUserName"
                        placeholder="name@example.com"
                        value={SignUpInfo.SignUpUserName}
                        onChange={HandleChange}
                      />
                      <label class=" text-dark" for="SignUpUserName">
                        User Name
                      </label>
                      {IsUserNameVerified ? null : (
                        <p style={{ color: "red" }}>
                          Invalid username! Must be at least 6 characters in
                          length and contain no blank spaces
                        </p>
                      )}
                    </div>

                    <div class="form-floating mb-3">
                      <input
                        type="password"
                        class="form-control text-dark"
                        id="SignUpPassword"
                        placeholder="name@example.com"
                        value={SignUpInfo.SignUpPassword}
                        onChange={HandleChange}
                      />
                      <label class=" text-dark" for="SignUpPassword">
                        Password
                      </label>
                      {IsPasswordVerified ? null : (
                        <p style={{ color: "red" }}>
                          Invalid password! Must be at least 6 characters in
                          length and contain at least one capital letter and one
                          special character
                        </p>
                      )}
                    </div>

                    <div class="d-flex justify-content-center">
                      <button
                        type="button"
                        class="btn btn-success btn-block btn-lg gradient-custom-4 text-body"
                        onClick={HandleSubmit}
                      >
                        Register
                      </button>
                    </div>

                    <p class="text-center text-muted mt-5 mb-0">
                      Have an account already?{" "}
                      <Link to="/login" class="fw-bold text-body">
                        <u>Login here</u>
                      </Link>
                    </p>
                    {/*  <Link to="/signup">Take me to signup</Link> */}
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    </div>
  );
};

let oldSignUpPage = `<form className="row g-3" onSubmit={HandleSubmit} noValidate >
<div className="col-md-6">
  <label for="SignUpFirstName" className="form-label">First Name</label>
  <input type="text" className="form-control" id="SignUpFirstName" value={SignUpInfo.SignUpFirstName} onChange={HandleChange} />
</div>
<div className="col-md-6">
  <label for="SignUpLastName" className="form-label">Last Name</label>
  <input type="text" className="form-control" id="SignUpLastName" value={SignUpInfo.SignUpLastName} onChange={HandleChange} />
</div>
<div className="col-md-4">
  <label for="SignUpUserName" className="form-label">Username</label>
  <input type="text" className="form-control" id="SignUpUserName" value={SignUpInfo.SignUpUserName} onChange={HandleChange} />
  {IsUserNameVerified ? null : <p style={{ color: "red" }}>Invalid username! Must be at least 6 characters in length and contain no blank spaces</p>}
</div>
<div className="col-md-4">
  <label for="SignUpEmail" className="form-label">Email</label>
  <input type="email" className="form-control" id="SignUpEmail" value={SignUpInfo.SignUpEmail} onChange={HandleChange} />
  {IsEmailVerified ? null : <p style={{ color: "red" }}>Invalid email! Please check the format and try again</p>}
</div>
<div className="col-md-4">
  <label for="SignUpPassword" className="form-label">Password</label>
  <input type="password" className="form-control" id="SignUpPassword" value={SignUpInfo.SignUpPassword} onChange={HandleChange} />
  {IsPasswordVerified ? null : <p style={{ color: "red" }}>Invalid password! Must be at least 6 characters in length and contain at least one capital letter and one special character</p>}
</div>
<div className="col-12">
  <label for="inputAddress" className="form-label">Address</label>
  <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St" />
</div>
<div className="col-12">
  <label for="inputAddress2" className="form-label">Address 2</label>
  <input type="text" className="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor" />
</div>
<div className="col-md-6">
  <label for="inputCity" className="form-label">City</label>
  <input type="text" className="form-control" id="inputCity" />
</div>


<div className="col-md-2">
  <label for="inputZip" className="form-label">Zip</label>
  <input type="text" className="form-control" id="inputZip" />
</div>


<div className="col-md-6">
  <label for="FoodAllergies" className="form-label">Food Allergies</label>
  <input type="email" className="form-control" id="FoodAllergies" />
</div>
<div className="col-md-6">
  <label for="FavoriteCuisines" className="form-label">Favorite Cuisines</label>

  <select id="FavoriteCuisines" className="form-select">
    <option selected>Choose...</option>
    <option>I think the API has a section that lists all the cuisines it has recipes for</option>
  </select>

</div>
<div className="col-6">
  <button type="submit" className="btn btn-primary" >Sign Up</button>
</div>
<div className="col-6">
  <Link to="/login">
    <button className="btn btn-primary">Test button to Login</button>
  </Link>
</div>
</form>`;
