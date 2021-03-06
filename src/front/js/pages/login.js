import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams, useHistory } from "react-router-dom";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import logo from "../../img/ChefUp.png";
//We'll come back to this and the Login page later 3-22-22 - Jeff
export const Login = (props) => {
  const { store, actions } = useContext(Context);
  const [UserName, setUserName] = useState("");
  const [Password, setLoginPassword] = useState("");
  const history = useHistory();

  // let HandleLogin = (e) => {
  //   e.preventDefault();
  //   tryLogin();
  // };

  return (
    <>
      <div class="container h-100 ">
        <div class="row d-flex justify-content-center my-5 h-100">
          <div class="col-12 col-md-9 col-lg-7 col-xl-6">
            <div class="card" style={{ borderRadius: "15px" }}>
              <form
                class="card-body cardbody-color p-lg-5"
                onSubmit={async (e) => {
                  e.preventDefault();
                  await actions.userLogin({ username: UserName });
                  props.history.push("/");
                }}
              >
                <div class="text-center mb-5">
                  <img
                    src={logo}
                    class="img-fluid profile-image-pic img-thumbnail rounded-circle"
                    width="200px"
                    alt="profile"
                  />
                </div>

                <div class="mb-3">
                  <input
                    type="text"
                    class="form-control"
                    id="Username"
                    aria-describedby="emailHelp"
                    placeholder="Username"
                    value={UserName}
                    onChange={(e) => {
                      setUserName(e.target.value);
                    }}
                  />
                </div>
                <div class="mb-3">
                  <input
                    type="password"
                    class="form-control"
                    id="password"
                    placeholder="Password"
                    value={Password}
                    onChange={(e) => {
                      console.log(e.target.value);
                      setLoginPassword(e.target.value);
                    }}
                  />
                </div>
                <div class="text-center">
                  <button type="submit" class="btn btn-primary mb-5 w-25">
                    Login
                  </button>
                </div>
                <div
                  id="emailHelp"
                  class="form-text text-center mb-5 text-dark"
                >
                  <p class="text-center text-muted mt-5 mb-0">
                    Not Registered?{" "}
                    <Link to="/signup" class="fw-bold text-body">
                      <u>Sign up here</u>
                    </Link>
                  </p>
                  {/* <p class="text-center text-muted mt-5 mb-0">Have an account already? <Link to="/login" class="fw-bold text-body"><u>Login here</u></Link></p> */}
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

let oldlogin = `<div class="container h-100 m-3">
<div class="row">
  <div class="col-md-6 offset-md-3">
    <h2 class="text-center text-white mt-5">Login Form</h2>

    <div class="card my-5">
      <form
        class="card-body cardbody-color p-lg-5"
        onSubmit={async (e) => {
          e.preventDefault();
          await actions.userLogin({ username: UserName });
          props.history.push("/");
        }}
      >
        

        <div class="text-center">
          <img
            src="https://cdn.pixabay.com/photo/2016/03/31/19/56/avatar-1295397__340.png"
            class="img-fluid profile-image-pic img-thumbnail rounded-circle my-3"
            width="200px"
            alt="profile"
          />
        </div>

        <div class="mb-3">
          <input
            type="text"
            class="form-control"
            id="Username"
            aria-describedby="emailHelp"
            placeholder="Username"
            value={UserName}
            onChange={(e) => {
              setUserName(e.target.value);
            }}
          />
         
        </div>
        <div class="mb-3">
          <input
            type="password"
            class="form-control"
            id="password"
            placeholder="Password"
            value={Password}
            onChange={(e) => {
              console.log(e.target.value);
              setLoginPassword(e.target.value);
            }}
          />
         
        </div>
        <div class="text-center">
          <button type="submit" class="btn btn-primary mb-5 w-25">
            Login
          </button>
        </div>
        <div
          id="emailHelp"
          class="form-text text-center mb-5 text-dark"
        >
          <p class="text-center text-muted mt-5 mb-0">Not Registered? <Link to="/signup" class="fw-bold text-body"><u>Sign up here</u></Link></p>
          {/* <p class="text-center text-muted mt-5 mb-0">Have an account already? <Link to="/login" class="fw-bold text-body"><u>Login here</u></Link></p> */}
        </div>
      </form>
    </div>
  </div>
</div>
</div>`;

// let tryLogin = () => {

//   let sample = {
//     //changed from UserName and Password useStates so that login is always successful
//     //every time "login" is clicked on the login page, this info is sent over and with the way the
//     //API is set up the login info below never times out
//       "username": 'diego.greene@mecallapi.com',
//       "password": 'mecallapi'

//   }

//   fetch("https://www.mecallapi.com/api/login", {

//     method: "POST",
//     body: JSON.stringify(sample),
//     headers: {
//       "Content-Type": "application/json"
//     }
//   })
//     .then(response => {

//       if (response.ok) {
//         console.log(response);

//         return response.json();
//       }
//     }).then(responseJSON => {
//       console.log('response',responseJSON)
//       console.log('userinfo',responseJSON.user)
//       //found this info about sessionStorage and decided to mess around with it. Don't think we'll need it
//       //but it adds an extra way to pass data around the app
//       //more info here: https://www.w3schools.com/jsref/prop_win_sessionstorage.asp
//       sessionStorage.setItem("LoginFirstName", responseJSON.user.fname);
//       sessionStorage.setItem("LoginLastName", responseJSON.user.lname);
//       sessionStorage.setItem("LoginUserName", responseJSON.user.username);
//       sessionStorage.setItem("LoginEmail", responseJSON.user.email);
//       if(responseJSON.status == 'ok'){

//         //I believe this line below would have to be moved to inside the "HandleLogin function"
//         //if we wanted to skip over the Login API completely, but that could be down the road if needed
//         history.push({pathname: `/profilepage/${responseJSON.user.fname}`, UserInfo: responseJSON})

//       }

//     })
//     .catch(e => console.log(e, " THE ERROR"));
// }
