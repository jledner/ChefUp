const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      message: null,
      demo: [
        {
          title: "FIRST",
          background: "white",
          initial: "white",
        },
        {
          title: "SECOND",
          background: "white",
          initial: "white",
        },
      ],
      cuisine: [
        {
          name: "italian",
        },
        {
          name: "american",
        },
        {
          name: "mexican",
        },
        {
          name: "chinese",
        },
        {
          name: "cajun",
        },
        {
          name: "greek",
        },
        {
          name: "japanese",
        },
        {
          name: "european",
        },
      ],

      meals: [
        {
          name: "Shrimp Tacos",
          img: "https://i2.wp.com/www.downshiftology.com/wp-content/uploads/2020/04/Shrimp-Tacos-main-1.jpg",
        },
        {
          name: "Chicken Gyro",
          img: "https://www.jocooks.com/wp-content/uploads/2020/06/chicken-gyros-1-14.jpg",
        },
        {
          name: "Tuscan Chicken Pasta",
          img: "https://foodtasia.com/wp-content/uploads/2019/02/tuscan-pasta-20.jpg",
        },
        {
          name: "Flank Steak Sandwich",
          img: "https://i.guim.co.uk/img/media/fdcd34886d1d9aa696cbac74d1a3293aa4808895/0_680_6355_3814/master/6355.jpg?width=1200&height=900&quality=85&auto=format&fit=crop&s=8b6d0cb3ca5aa21a21d485bef8f481ba",
        },
        {
          name: "Mar y Tierra",
          img: "https://i.pinimg.com/originals/a1/0f/c0/a10fc083e8604ba604354599bced175f.jpg",
        },
        {
          name: "Chicken Burrito",
          img: "https://upload.wikimedia.org/wikipedia/commons/6/60/Burrito.JPG",
        },
      ],
    },
    actions: {
      // Use getActions to call a function within a fuction
      exampleFunction: () => {
        getActions().changeColor(0, "green");
      },

      getMessage: () => {
        // fetching data from the backend
        fetch(process.env.BACKEND_URL + "/api/hello")
          .then((resp) => resp.json())
          .then((data) => setStore({ message: data.message }))
          .catch((error) =>
            console.log("Error loading message from backend", error)
          );
      },
      changeColor: (index, color) => {
        //get the store
        const store = getStore();

        //we have to loop the entire demo array to look for the respective index
        //and change its color
        const demo = store.demo.map((elm, i) => {
          if (i === index) elm.background = color;
          return elm;
        });

        //reset the global store
        setStore({ demo: demo });
      },

      handleGetMealByCuisine: (cuisine) => {
        fetch(
          `https://api.spoonacular.com/recipes/complexSearch?cuisine=${cuisine.name}&maxReadyTime=20&addRecipeInformation=true&ignorePantry=true&instructionsRequired=true&fillIngredients=true&addRecipeNutrition=true&apiKey=63c77d2857624c45a6a65b2ec5df33e0&number=100`
        )
          .then((response) => {
            if (response.ok) return response.json();
            else throw new Error("help");
          })
          .then((response) => {
            localStorage.setItem(
              `${cuisine.name}`,
              JSON.stringify(response.results)
            );
          });
      },
    },
  };
};

export default getState;
