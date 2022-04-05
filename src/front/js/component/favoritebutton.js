import React, { useContext } from "react";
import { Context } from "../store/appContext";

export const FavoriteButton = (props) => {
  const { store, actions } = useContext(Context);
  return (
    <button
      className="btn btn-primary mb-3"
      onClick={() =>
        !store.user.favorites.map((fav) => fav.id).includes(props.meal.id)
          ? actions.addFavoriteMeal(props.meal, store.user.id)
          : actions.removeFavoriteMeal(props.meal, store.user.id)
      }
    >
      <i
        class="fas fa-heart"
        style={
          !store.user.favorites
            .map((favorite) => favorite.id)
            .includes(props.meal.id)
            ? { color: "white" }
            : { color: "hotpink" }
        }
      ></i>
    </button>
  );
};

// actions.addFavoriteMeal(props.meal)
