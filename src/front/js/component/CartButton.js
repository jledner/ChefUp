import React, { useContext } from "react";
import { Context } from "../store/appContext";

export const CartButton = (props) => {
  const { store, actions } = useContext(Context);
  return (
    <div>
      {!store.cart.map((meal) => meal.id).includes(props.meal.id) ? (
        <button
          type="button"
          className="btn btn-light"
          onClick={() => {
            actions.AddMealToCart(props.meal);
          }}
        >
          <i class="fas fa-shopping-cart"></i>
        </button>
      ) : (
        <button
          type="button"
          className="btn btn-light"
          style={{ color: "red" }}
          onClick={() => {
            actions.deleteAMeal(props.meal.id);
          }}
        >
          <i class="fas fa-shopping-cart"></i>
        </button>
      )}
    </div>
  );
};
