import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { Card } from "./card";
export const Navbar = () => {
  const { store, actions } = useContext(Context);
  console.log(store);
  return (
    <nav className="navbar navbar-light bg-light">
      <div className="container">
        <Link to="/">
          <span className="navbar-brand mb-0 h1">React Boilerplate</span>
        </Link>
        <div className="ml-auto">
          <Link to="/tutorial">
            <button className="btn btn-primary">How To</button>
          </Link>
        </div>
        <div className="ml-auto">
          <Link to="/">
            <button className="btn btn-primary">Home</button>
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
        {/* Modal section for cart. When the cart button is clicked and the modal is opened, it shows what
            meals are in the users' cart. The key thing to take note of here is the IsMealInCart={true} prop 
            used with the Card component inside the "modal-body." See Card component notes if needed. */}
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
                <h5 className="modal-title text-dark" id="staticBackdropLabel">
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
                <div class="d-flex d-flex">
                  {store.cart.map((meal, index) => {
                    return <Card meal={meal} />;
                  })}
                </div>
              </div>
              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
