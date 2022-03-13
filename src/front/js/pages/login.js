import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams, useHistory } from "react-router-dom";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";

export const Login = props => {
  const [UserName, setUserName] = useState('')
  const [Password, setLoginPassword] = useState('')
  const history = useHistory()
  let tryLogin = () => {

    let sample = {
      
        "username": UserName,
        "password": Password
    
    }



    fetch("https://www.mecallapi.com/api/login", {

      method: "POST",
      body: JSON.stringify(sample),
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(response => {
        
        if (response.ok) {
          console.log(response);


          return response.json();
        }
      }).then(responseJSON => {
        console.log("response", responseJSON);
        if(responseJSON.status == 'ok'){
          
          history.push({pathname: '/profilepage', UserInfo: responseJSON.user})
          console.log(responseJSON)
        }
        
      })
      .catch(e => console.log(e, " THE ERROR"));
  }
 
  

  let HandleLogin = (e) => {
    e.preventDefault()

    console.log('Login with this API uses POST method', UserName, Password)
    tryLogin()

    
  }

  return (

    <div>
      <h1>This will be the login page. Maybe make it a modal linked to a button


      </h1>
      <div class="container">
        <div class="row">
          <div class="col-md-6 offset-md-3">
            <h2 class="text-center text-white mt-5">Login Form</h2>

            <div class="card my-5">

              <form class="card-body cardbody-color p-lg-5" onSubmit={HandleLogin}>

                <div class="text-center">
                  <img src="https://cdn.pixabay.com/photo/2016/03/31/19/56/avatar-1295397__340.png" class="img-fluid profile-image-pic img-thumbnail rounded-circle my-3"
                    width="200px" alt="profile" />
                </div>
                

                <div class="mb-3">
                  <input type="text" class="form-control" id="Username" aria-describedby="emailHelp"
                    placeholder="User Name" value={UserName} onChange={(e) => { setUserName(e.target.value) }} />
                </div>
                <div class="mb-3">
                  <input type="password" class="form-control" id="password" placeholder="password" value={Password} onChange={(e) => { 
                    console.log(e.target.value)
                    setLoginPassword(e.target.value) }} />
                    <p style={{color:'black'}}>The password for this API is always "mecallapi"</p>
                  
                </div>
                <div class="text-center"><button type="submit" class="btn btn-color px-5 mb-5 w-100">Login</button></div>
                <div id="emailHelp" class="form-text text-center mb-5 text-dark">Not
                  Registered? <Link to="/signup">Take me to signup</Link>
                </div>
              </form>
            </div>

          </div>
        </div>
      </div>

    </div>
  )
}

//<button onClick={() => this.props.history.push("/login")}>Take me to login</button>