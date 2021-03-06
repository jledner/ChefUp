import React, { useContext, useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { Context } from "../store/appContext";
import { Card } from "./card";
import logo from "../../img/ChefUp.png";

import { CartCard } from "./cartcard";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
export const ChefNavbar = (props) => {
  const history = useHistory();
  const { store, actions } = useContext(Context);
  const [user, setUser] = useState({});
  const [cartTotal, setCartTotal] = useState(0);

  useEffect(() => {
    setUser(store.user);
  }, [store.user]);

  useEffect(() => {
    const totalMealCost = (meal) => {
      return (
        Math.round(
          ((Math.floor(meal.pricePerServing) / 100) * meal.servings +
            Number.EPSILON) *
            100
        ) / 100
      );
    };
    if (store.cart.length > 1) {
      let total = store.cart.reduce((total, current) => {
        return total + totalMealCost(current);
      }, 0);
      setCartTotal(Math.round((total + Number.EPSILON) * 100) / 100);
    } else if (store.cart.length > 0) {
      setCartTotal(totalMealCost(store.cart[0]));
    } else {
      setCartTotal(0);
    }
  }, [store.cart]);

  return (
    <nav class="navbar navbar-expand-lg navbar-light">
      <div class="container-fluid">
        <div className="logo-container">
          <Link to="/">
            <img className="img-fluid logo" src={logo} />
          </Link>
        </div>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarTogglerDemo02"
          aria-controls="navbarTogglerDemo02"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul
            class="navbar-nav ms-auto mb-2 mb-lg-0"
            onClick={(e) => console.log(e.target.parentNode)}
          >
            <li class="nav-item">
              <NavLink
                exact={true}
                to="/"
                className={(isActive) => {
                  return `nav-link ${isActive ? "active" : ""}`;
                }}
              >
                <i class="fas fa-home"></i> Home
              </NavLink>
            </li>
            {/* <li class="nav-item">
              <NavLink
                to="/tutorial"
                className={(isActive) => {
                  return `nav-link ${isActive ? "active" : ""}`;
                }}
              >
                Tutorial
              </NavLink>
            </li> */}
            <li class={`nav-item ${user ? "d-none" : ""}`}>
              <NavLink
                to="/signup"
                className={(isActive) => {
                  return `nav-link ${isActive ? "active" : ""}`;
                }}
              >
                <i class="fas fa-user-plus"></i> Sign up
              </NavLink>
            </li>
            <li class={`nav-item ${user ? "d-none" : ""}`}>
              <NavLink
                to="/login"
                className={(isActive) => {
                  return `nav-link ${isActive ? "active" : ""}`;
                }}
              >
                <i class="fas fa-sign-in-alt"></i> Login
              </NavLink>
            </li>
            <ul
              className={`navbar-nav mb-2 mb-lg-0 nav-item d-flex ${
                user ? "" : "d-none"
              }`}
            >
              <li class="nav-item">
                <NavLink
                  to="/grocerylist"
                  exact={true}
                  className={(isActive) => {
                    return `nav-link ${isActive ? "active" : ""}`;
                  }}
                >
                  <i class="fas fa-list"></i> Grocery List
                </NavLink>
              </li>
              <li class="nav-item">
                <NavLink
                  to="/randommeals"
                  className={(isActive) => {
                    return `nav-link ${isActive ? "active" : ""}`;
                  }}
                >
                  <i class="fas fa-cookie-bite"></i> Random Meals
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to={
                    store.user
                      ? `/profilepage/${store.user.username.toLowerCase()}`
                      : ""
                  }
                  className={(isActive) => {
                    return `nav-link ${isActive ? "active" : ""}`;
                  }}
                >
                  <i class="fas fa-address-card"></i> Profile
                </NavLink>
              </li>
              <li className="cart nav-item">
                <button
                  type="button"
                  className="btn btn-primary"
                  data-bs-toggle="modal"
                  data-bs-target="#staticBackdrop"
                  onClick={() => {
                    // console.log(MealsInCart);
                  }}
                >
                  {/* Testing Cart{"(" + MealsInCart.length + ")"} */}
                  <i class="fas fa-shopping-cart"></i>
                </button>

                <div
                  class="modal fade"
                  id="staticBackdrop"
                  data-bs-backdrop="static"
                  data-bs-keyboard="false"
                  tabIndex="-1"
                  aria-labelledby="staticBackdropLabel"
                  aria-hidden="true"
                >
                  <div class="modal-dialog modal-xl">
                    <div class="modal-content text-black">
                      <div class="modal-header">
                        <h5
                          className="modal-title text-dark"
                          id="staticBackdropLabel"
                        >
                          Your Cart
                        </h5>
                        <button
                          type="button"
                          className="btn-close"
                          data-bs-dismiss="modal"
                          aria-label="Close"
                        ></button>
                      </div>
                      <div class="modal-body">
                        {/* <div class="row row-cols-3 gy-4"> */}
                        <div class="row gy-3">
                          {store.cart.map((meal, index) => {
                            return <CartCard meal={meal} />;
                          })}
                        </div>
                      </div>
                      <div className="modal-footer">Total: {cartTotal} </div>
                      <div class="modal-footer">
                        <Link
                          className="btn btn-chef"
                          data-bs-dismiss="modal"
                          onClick={() => {
                            history.push("/grocerylist");
                          }}
                        >
                          Grocery List
                        </Link>
                        <button
                          type="button"
                          class="btn btn-chef"
                          data-bs-dismiss="modal"
                        >
                          Close
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li className="user-nav-icon">
                <div class="dropdown">
                  <button
                    class="btn btn-secondary dropdown-toggle"
                    type="button"
                    id="dropdownMenuButton1"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <i class="fas fa-user fa-1x"></i>
                  </button>
                  <ul
                    class="dropdown-menu"
                    aria-labelledby="dropdownMenuButton1"
                  >
                    <li className="logout">
                      <button
                        class="dropdown-item logout"
                        href="#"
                        onClick={() => {
                          localStorage.clear();
                          actions.setUser(null);
                          history.push("/");
                        }}
                      >
                        Logout
                      </button>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </ul>
        </div>
      </div>
    </nav>
  );
};

{
  /* <nav class="navbar navbar-expand-lg navbar-light bg-light">
<div className="container">
  <Link to="/">
    <span className="navbar-brand mb-0 h1">Home(logo here)</span>
  </Link>
  <div className="ml-auto">
    <Link to="/tutorial">
      <button className="btn btn-primary">How To</button>
    </Link>
  </div>

  <div className="ml-auto">
    <Link to="/signup">
      <button className="btn btn-primary">Sign Up</button>
    </Link>
  </div>
  <div className="ml-auto">
    <Link to="/login">
      <button className="btn btn-primary">Login</button>
    </Link>
  </div>
  <div className="ml-auto">
    <Link to="/grocerylist">
      <button className="btn btn-primary">Grocery List</button>
    </Link>
  </div>
  <div className="ml-auto">
    <Link to="/randommeals">
      <button className="btn btn-primary">
        To Random Meals Page(in progress)
      </button>
    </Link>
  </div>
  <div className="ml-auto">
    <Link to={store.user ? `/profilepage/${store.user.username}` : ""}>
      <button className="btn btn-primary">Profile</button>
    </Link>
  </div>

  {/* Note to self: It's data-bs-toggle="dropdown" not data-toggle="dropdown". */
}
//   <div class="dropdown">
//     <button
//       class="btn btn-info dropdown-toggle"
//       type="button"
//       id="dropdownMenu2"
//       data-bs-toggle="dropdown"
//       aria-haspopup="true"
//       aria-expanded="false"
//     >
//       Sample "Menu?"
//     </button>
//     <div class="dropdown-menu" aria-labelledby="dropdownMenu2">
//       <Link to="/tutorial">
//         <button class="dropdown-item" type="button">
//           How To
//         </button>
//       </Link>
//       <Link to="/grocerylist">
//         <button class="dropdown-item" type="button">
//           Grocery List
//         </button>
//       </Link>
//       <Link to="/randommeals">
//         <button class="dropdown-item" type="button">
//           {" "}
//           To Random Meals Page(in progress)
//         </button>
//       </Link>
//       <Link to="/profilepage/user">
//         <button class="dropdown-item" type="button">
//           {" "}
//           Profile
//         </button>
//       </Link>
//     </div>
//   </div>

//   <button
//     type="button"
//     className="btn btn-primary"
//     data-bs-toggle="modal"
//     data-bs-target="#staticBackdrop"
//     onClick={() => {
//       // console.log(MealsInCart);
//     }}
//   >
//     {/* Testing Cart{"(" + MealsInCart.length + ")"} */}
//     <i class="fas fa-shopping-cart"></i>
//   </button>

//     </div>
//   </div>
