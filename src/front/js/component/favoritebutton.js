import React, { useContext, useState, useEffect } from "react";
import { Context } from "../store/appContext";

export const FavoriteButton = (props) => {
  const { store, actions } = useContext(Context);
  const [user, setUser] = useState({});
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    if (store.user != null) {
      setUser(store.user);
      setFavorites(store.user.favorites);
    }
    // setUser(store.user);
    // if (user != null) setFavorites(store.user.favorites);
  }, [store.user]);

  // setFavorites(user.favorites);

  return (
    <div>
      {user ? (
        <button
          className="btn btn-primary mb-3"
          onClick={() =>
            !favorites.map((fav) => fav.id).includes(props.meal.id)
              ? actions.addFavoriteMeal(props.meal, store.user.id)
              : actions.removeFavoriteMeal(props.meal, store.user.id)
          }
        >
          <i
            class="fas fa-heart"
            style={
              !favorites.map((favorite) => favorite.id).includes(props.meal.id)
                ? { color: "white" }
                : { color: "hotpink" }
            }
          ></i>
        </button>
      ) : (
        ""
      )}
    </div>
  );
};

// actions.addFavoriteMeal(props.meal)
