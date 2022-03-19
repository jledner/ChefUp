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
      trending: [
        {
          vegetarian: false,
          vegan: false,
          glutenFree: true,
          dairyFree: true,
          veryHealthy: true,
          cheap: false,
          veryPopular: false,
          sustainable: false,
          weightWatcherSmartPoints: 7,
          gaps: "no",
          lowFodmap: false,
          aggregateLikes: 1,
          spoonacularScore: 91,
          healthScore: 99,
          creditsText:
            "Foodista.com – The Cooking Encyclopedia Everyone Can Edit",
          license: "CC BY 3.0",
          sourceName: "Foodista",
          pricePerServing: 912.62,
          extendedIngredients: [
            {
              id: 10031015,
              aisle: "Produce",
              image: "chili-peppers-green.jpg",
              consistency: "solid",
              name: "anaheim peppers",
              nameClean: "anaheim pepper",
              original: "1/2 cup Anaheim peppers, seeded, diced",
              originalName: "Anaheim peppers, seeded, diced",
              amount: 0.5,
              unit: "cup",
              meta: ["diced", "seeded"],
              measures: {
                us: {
                  amount: 0.5,
                  unitShort: "cups",
                  unitLong: "cups",
                },
                metric: {
                  amount: 118.294,
                  unitShort: "ml",
                  unitLong: "milliliters",
                },
              },
            },
            {
              id: 9070,
              aisle: "Produce",
              image: "cherries.jpg",
              consistency: "solid",
              name: "cherries",
              nameClean: "cherries",
              original: "1 1/2 cups cherries, pitted, diced",
              originalName: "cherries, pitted, diced",
              amount: 1.5,
              unit: "cups",
              meta: ["diced", "pitted"],
              measures: {
                us: {
                  amount: 1.5,
                  unitShort: "cups",
                  unitLong: "cups",
                },
                metric: {
                  amount: 354.882,
                  unitShort: "ml",
                  unitLong: "milliliters",
                },
              },
            },
            {
              id: 2044,
              aisle: "Produce",
              image: "fresh-basil.jpg",
              consistency: "solid",
              name: "fresh basil",
              nameClean: "fresh basil",
              original: "2 tablespoons chopped fresh basil",
              originalName: "chopped fresh basil",
              amount: 2,
              unit: "tablespoons",
              meta: ["fresh", "chopped"],
              measures: {
                us: {
                  amount: 2,
                  unitShort: "Tbsps",
                  unitLong: "Tbsps",
                },
                metric: {
                  amount: 2,
                  unitShort: "Tbsps",
                  unitLong: "Tbsps",
                },
              },
            },
            {
              id: 2064,
              aisle: "Produce;Spices and Seasonings",
              image: "mint.jpg",
              consistency: "solid",
              name: "fresh mint",
              nameClean: "mint",
              original: "1 teaspoon fresh mint, chiffonade",
              originalName: "fresh mint, chiffonade",
              amount: 1,
              unit: "teaspoon",
              meta: ["fresh"],
              measures: {
                us: {
                  amount: 1,
                  unitShort: "tsp",
                  unitLong: "teaspoon",
                },
                metric: {
                  amount: 1,
                  unitShort: "tsp",
                  unitLong: "teaspoon",
                },
              },
            },
            {
              id: 11215,
              aisle: "Produce",
              image: "garlic.png",
              consistency: "solid",
              name: "garlic",
              nameClean: "garlic",
              original: "1 clove garlic, minced",
              originalName: "garlic, minced",
              amount: 1,
              unit: "clove",
              meta: ["minced"],
              measures: {
                us: {
                  amount: 1,
                  unitShort: "clove",
                  unitLong: "clove",
                },
                metric: {
                  amount: 1,
                  unitShort: "clove",
                  unitLong: "clove",
                },
              },
            },
            {
              id: 9160,
              aisle: "Produce",
              image: "lime-juice.png",
              consistency: "liquid",
              name: "juice of lime",
              nameClean: "lime juice",
              original: "juice of 1 lime",
              originalName: "juice of lime",
              amount: 1,
              unit: "",
              meta: [],
              measures: {
                us: {
                  amount: 1,
                  unitShort: "",
                  unitLong: "",
                },
                metric: {
                  amount: 1,
                  unitShort: "",
                  unitLong: "",
                },
              },
            },
            {
              id: 1009159,
              aisle: "Produce",
              image: "zest-lime.jpg",
              consistency: "solid",
              name: "lime zest",
              nameClean: "lime peel",
              original: "zest of 1 lime",
              originalName: "zest of lime",
              amount: 1,
              unit: "",
              meta: [],
              measures: {
                us: {
                  amount: 1,
                  unitShort: "",
                  unitLong: "",
                },
                metric: {
                  amount: 1,
                  unitShort: "",
                  unitLong: "",
                },
              },
            },
            {
              id: 9176,
              aisle: "Produce",
              image: "mango.jpg",
              consistency: "solid",
              name: "mango",
              nameClean: "mango",
              original: "1 mango, diced",
              originalName: "mango, diced",
              amount: 1,
              unit: "",
              meta: ["diced"],
              measures: {
                us: {
                  amount: 1,
                  unitShort: "",
                  unitLong: "",
                },
                metric: {
                  amount: 1,
                  unitShort: "",
                  unitLong: "",
                },
              },
            },
            {
              id: 4053,
              aisle: "Oil, Vinegar, Salad Dressing",
              image: "olive-oil.jpg",
              consistency: "liquid",
              name: "olive oil",
              nameClean: "olive oil",
              original: "1 tbsp olive oil",
              originalName: "olive oil",
              amount: 1,
              unit: "tbsp",
              meta: [],
              measures: {
                us: {
                  amount: 1,
                  unitShort: "Tbsp",
                  unitLong: "Tbsp",
                },
                metric: {
                  amount: 1,
                  unitShort: "Tbsp",
                  unitLong: "Tbsp",
                },
              },
            },
            {
              id: 9236,
              aisle: "Produce",
              image: "peach.png",
              consistency: "solid",
              name: "peach",
              nameClean: "peach",
              original: "1 peach, peeled and diced",
              originalName: "peach, peeled and diced",
              amount: 1,
              unit: "",
              meta: ["diced", "peeled"],
              measures: {
                us: {
                  amount: 1,
                  unitShort: "",
                  unitLong: "",
                },
                metric: {
                  amount: 1,
                  unitShort: "",
                  unitLong: "",
                },
              },
            },
            {
              id: 9266,
              aisle: "Produce",
              image: "pineapple.jpg",
              consistency: "solid",
              name: "pineapple",
              nameClean: "pineapple",
              original: "1 cup fresh pineapple, diced",
              originalName: "fresh pineapple, diced",
              amount: 1,
              unit: "cup",
              meta: ["fresh", "diced"],
              measures: {
                us: {
                  amount: 1,
                  unitShort: "cup",
                  unitLong: "cup",
                },
                metric: {
                  amount: 236.588,
                  unitShort: "ml",
                  unitLong: "milliliters",
                },
              },
            },
            {
              id: 15076,
              aisle: "Seafood",
              image: "salmon.png",
              consistency: "solid",
              name: "salmon fillet",
              nameClean: "salmon",
              original: "12 ounces salmon fillet",
              originalName: "salmon fillet",
              amount: 12,
              unit: "ounces",
              meta: [],
              measures: {
                us: {
                  amount: 12,
                  unitShort: "oz",
                  unitLong: "ounces",
                },
                metric: {
                  amount: 340.194,
                  unitShort: "g",
                  unitLong: "grams",
                },
              },
            },
            {
              id: 1102047,
              aisle: "Spices and Seasonings",
              image: "salt-and-pepper.jpg",
              consistency: "solid",
              name: "salt and pepper",
              nameClean: "salt and pepper",
              original: "salt and pepper to taste",
              originalName: "salt and pepper to taste",
              amount: 2,
              unit: "servings",
              meta: ["to taste"],
              measures: {
                us: {
                  amount: 2,
                  unitShort: "servings",
                  unitLong: "servings",
                },
                metric: {
                  amount: 2,
                  unitShort: "servings",
                  unitLong: "servings",
                },
              },
            },
            {
              id: 11677,
              aisle: "Produce",
              image: "shallots.jpg",
              consistency: "solid",
              name: "shallot",
              nameClean: "shallot",
              original: "2 teaspoons minced shallot",
              originalName: "minced shallot",
              amount: 2,
              unit: "teaspoons",
              meta: ["minced"],
              measures: {
                us: {
                  amount: 2,
                  unitShort: "tsps",
                  unitLong: "teaspoons",
                },
                metric: {
                  amount: 2,
                  unitShort: "tsps",
                  unitLong: "teaspoons",
                },
              },
            },
          ],
          id: 645856,
          title: "Grilled Salmon With Cherry, Pineapple, Mango Salsa",
          readyInMinutes: 15,
          servings: 2,
          sourceUrl:
            "http://www.foodista.com/recipe/LX5DDBQX/grilled-salmon-with-cherry-pineapple-mango-salsa",
          image: "https://spoonacular.com/recipeImages/645856-312x231.jpg",
          imageType: "jpg",
          nutrition: {
            nutrients: [
              {
                name: "Calories",
                amount: 537.41,
                unit: "kcal",
                percentOfDailyNeeds: 26.87,
              },
              {
                name: "Fat",
                amount: 18.79,
                unit: "g",
                percentOfDailyNeeds: 28.9,
              },
              {
                name: "Saturated Fat",
                amount: 2.8,
                unit: "g",
                percentOfDailyNeeds: 17.51,
              },
              {
                name: "Carbohydrates",
                amount: 60.09,
                unit: "g",
                percentOfDailyNeeds: 20.03,
              },
              {
                name: "Net Carbohydrates",
                amount: 50.9,
                unit: "g",
                percentOfDailyNeeds: 18.51,
              },
              {
                name: "Sugar",
                amount: 44.81,
                unit: "g",
                percentOfDailyNeeds: 49.79,
              },
              {
                name: "Cholesterol",
                amount: 93.55,
                unit: "mg",
                percentOfDailyNeeds: 31.18,
              },
              {
                name: "Sodium",
                amount: 478.9,
                unit: "mg",
                percentOfDailyNeeds: 20.82,
              },
              {
                name: "Protein",
                amount: 37.33,
                unit: "g",
                percentOfDailyNeeds: 74.66,
              },
              {
                name: "Vitamin C",
                amount: 109.78,
                unit: "mg",
                percentOfDailyNeeds: 133.07,
              },
              {
                name: "Selenium",
                amount: 64.76,
                unit: "µg",
                percentOfDailyNeeds: 92.51,
              },
              {
                name: "Vitamin B12",
                amount: 5.41,
                unit: "µg",
                percentOfDailyNeeds: 90.15,
              },
              {
                name: "Vitamin B6",
                amount: 1.73,
                unit: "mg",
                percentOfDailyNeeds: 86.26,
              },
              {
                name: "Vitamin B3",
                amount: 15.36,
                unit: "mg",
                percentOfDailyNeeds: 76.8,
              },
              {
                name: "Manganese",
                amount: 1.04,
                unit: "mg",
                percentOfDailyNeeds: 51.79,
              },
              {
                name: "Vitamin B2",
                amount: 0.78,
                unit: "mg",
                percentOfDailyNeeds: 46.01,
              },
              {
                name: "Potassium",
                amount: 1489.26,
                unit: "mg",
                percentOfDailyNeeds: 42.55,
              },
              {
                name: "Phosphorus",
                amount: 412.3,
                unit: "mg",
                percentOfDailyNeeds: 41.23,
              },
              {
                name: "Copper",
                amount: 0.79,
                unit: "mg",
                percentOfDailyNeeds: 39.58,
              },
              {
                name: "Fiber",
                amount: 9.19,
                unit: "g",
                percentOfDailyNeeds: 36.76,
              },
              {
                name: "Vitamin B5",
                amount: 3.64,
                unit: "mg",
                percentOfDailyNeeds: 36.41,
              },
              {
                name: "Vitamin B1",
                amount: 0.54,
                unit: "mg",
                percentOfDailyNeeds: 36.22,
              },
              {
                name: "Vitamin A",
                amount: 1678.59,
                unit: "IU",
                percentOfDailyNeeds: 33.57,
              },
              {
                name: "Folate",
                amount: 116.84,
                unit: "µg",
                percentOfDailyNeeds: 29.21,
              },
              {
                name: "Magnesium",
                amount: 92.29,
                unit: "mg",
                percentOfDailyNeeds: 23.07,
              },
              {
                name: "Vitamin K",
                amount: 22.19,
                unit: "µg",
                percentOfDailyNeeds: 21.14,
              },
              {
                name: "Vitamin E",
                amount: 2.7,
                unit: "mg",
                percentOfDailyNeeds: 18,
              },
              {
                name: "Iron",
                amount: 2.76,
                unit: "mg",
                percentOfDailyNeeds: 15.36,
              },
              {
                name: "Zinc",
                amount: 1.62,
                unit: "mg",
                percentOfDailyNeeds: 10.78,
              },
              {
                name: "Calcium",
                amount: 79.44,
                unit: "mg",
                percentOfDailyNeeds: 7.94,
              },
            ],
            properties: [
              {
                name: "Glycemic Index",
                amount: 167.33,
                unit: "",
              },
              {
                name: "Glycemic Load",
                amount: 19.66,
                unit: "",
              },
            ],
            flavonoids: [
              {
                name: "Cyanidin",
                amount: 32.81,
                unit: "mg",
              },
              {
                name: "Petunidin",
                amount: 0,
                unit: "mg",
              },
              {
                name: "Delphinidin",
                amount: 0.02,
                unit: "mg",
              },
              {
                name: "Malvidin",
                amount: 0,
                unit: "mg",
              },
              {
                name: "Pelargonidin",
                amount: 0.3,
                unit: "mg",
              },
              {
                name: "Peonidin",
                amount: 1.55,
                unit: "mg",
              },
              {
                name: "Catechin",
                amount: 9.98,
                unit: "mg",
              },
              {
                name: "Epigallocatechin",
                amount: 1.13,
                unit: "mg",
              },
              {
                name: "Epicatechin",
                amount: 6.93,
                unit: "mg",
              },
              {
                name: "Epicatechin 3-gallate",
                amount: 0.05,
                unit: "mg",
              },
              {
                name: "Epigallocatechin 3-gallate",
                amount: 0.23,
                unit: "mg",
              },
              {
                name: "Theaflavin",
                amount: 0,
                unit: "",
              },
              {
                name: "Thearubigins",
                amount: 0,
                unit: "",
              },
              {
                name: "Eriodictyol",
                amount: 0.34,
                unit: "mg",
              },
              {
                name: "Hesperetin",
                amount: 15.76,
                unit: "mg",
              },
              {
                name: "Naringenin",
                amount: 1.2,
                unit: "mg",
              },
              {
                name: "Apigenin",
                amount: 0.02,
                unit: "mg",
              },
              {
                name: "Luteolin",
                amount: 0.04,
                unit: "mg",
              },
              {
                name: "Isorhamnetin",
                amount: 0.05,
                unit: "mg",
              },
              {
                name: "Kaempferol",
                amount: 0.47,
                unit: "mg",
              },
              {
                name: "Myricetin",
                amount: 0.15,
                unit: "mg",
              },
              {
                name: "Quercetin",
                amount: 3.22,
                unit: "mg",
              },
              {
                name: "Theaflavin-3,3'-digallate",
                amount: 0,
                unit: "",
              },
              {
                name: "Theaflavin-3'-gallate",
                amount: 0,
                unit: "",
              },
              {
                name: "Theaflavin-3-gallate",
                amount: 0,
                unit: "",
              },
              {
                name: "Gallocatechin",
                amount: 0,
                unit: "mg",
              },
            ],
            ingredients: [
              {
                id: 10031015,
                name: "anaheim peppers",
                amount: 0.25,
                unit: "cup",
                nutrients: [
                  {
                    name: "Cholesterol",
                    amount: 0,
                    unit: "mg",
                  },
                  {
                    name: "Saturated Fat",
                    amount: 0,
                    unit: "g",
                  },
                  {
                    name: "Fiber",
                    amount: 1.95,
                    unit: "g",
                  },
                  {
                    name: "Net Carbohydrates",
                    amount: 1.99,
                    unit: "g",
                  },
                  {
                    name: "Fat",
                    amount: 0,
                    unit: "g",
                  },
                  {
                    name: "Protein",
                    amount: 0,
                    unit: "g",
                  },
                  {
                    name: "Carbohydrates",
                    amount: 3.95,
                    unit: "g",
                  },
                  {
                    name: "Calories",
                    amount: 15.97,
                    unit: "kcal",
                  },
                  {
                    name: "Sodium",
                    amount: 196.96,
                    unit: "mg",
                  },
                  {
                    name: "Vitamin C",
                    amount: 7.1,
                    unit: "mg",
                  },
                  {
                    name: "Sugar",
                    amount: 1.97,
                    unit: "g",
                  },
                ],
              },
              {
                id: 9070,
                name: "cherries",
                amount: 0.75,
                unit: "cups",
                nutrients: [
                  {
                    name: "Folic Acid",
                    amount: 0,
                    unit: "µg",
                  },
                  {
                    name: "Vitamin E",
                    amount: 0.07,
                    unit: "mg",
                  },
                  {
                    name: "Vitamin B2",
                    amount: 0.03,
                    unit: "mg",
                  },
                  {
                    name: "Fiber",
                    amount: 2.17,
                    unit: "g",
                  },
                  {
                    name: "Mono Unsaturated Fat",
                    amount: 0.05,
                    unit: "g",
                  },
                  {
                    name: "Net Carbohydrates",
                    amount: 14.39,
                    unit: "g",
                  },
                  {
                    name: "Fat",
                    amount: 0.21,
                    unit: "g",
                  },
                  {
                    name: "Vitamin B12",
                    amount: 0,
                    unit: "µg",
                  },
                  {
                    name: "Manganese",
                    amount: 0.07,
                    unit: "mg",
                  },
                  {
                    name: "Lycopene",
                    amount: 0,
                    unit: "µg",
                  },
                  {
                    name: "Sugar",
                    amount: 13.25,
                    unit: "g",
                  },
                  {
                    name: "Potassium",
                    amount: 229.77,
                    unit: "mg",
                  },
                  {
                    name: "Folate",
                    amount: 4.14,
                    unit: "µg",
                  },
                  {
                    name: "Vitamin K",
                    amount: 2.17,
                    unit: "µg",
                  },
                  {
                    name: "Zinc",
                    amount: 0.07,
                    unit: "mg",
                  },
                  {
                    name: "Phosphorus",
                    amount: 21.74,
                    unit: "mg",
                  },
                  {
                    name: "Iron",
                    amount: 0.37,
                    unit: "mg",
                  },
                  {
                    name: "Vitamin B6",
                    amount: 0.05,
                    unit: "mg",
                  },
                  {
                    name: "Vitamin B3",
                    amount: 0.16,
                    unit: "mg",
                  },
                  {
                    name: "Vitamin C",
                    amount: 7.25,
                    unit: "mg",
                  },
                  {
                    name: "Cholesterol",
                    amount: 0,
                    unit: "mg",
                  },
                  {
                    name: "Magnesium",
                    amount: 11.39,
                    unit: "mg",
                  },
                  {
                    name: "Choline",
                    amount: 6.31,
                    unit: "mg",
                  },
                  {
                    name: "Vitamin D",
                    amount: 0,
                    unit: "µg",
                  },
                  {
                    name: "Vitamin B5",
                    amount: 0.21,
                    unit: "mg",
                  },
                  {
                    name: "Protein",
                    amount: 1.1,
                    unit: "g",
                  },
                  {
                    name: "Calories",
                    amount: 65.21,
                    unit: "kcal",
                  },
                  {
                    name: "Sodium",
                    amount: 0,
                    unit: "mg",
                  },
                  {
                    name: "Vitamin B1",
                    amount: 0.03,
                    unit: "mg",
                  },
                  {
                    name: "Fluoride",
                    amount: 2.07,
                    unit: "mg",
                  },
                  {
                    name: "Poly Unsaturated Fat",
                    amount: 0.05,
                    unit: "g",
                  },
                  {
                    name: "Copper",
                    amount: 0.06,
                    unit: "mg",
                  },
                  {
                    name: "Calcium",
                    amount: 13.46,
                    unit: "mg",
                  },
                  {
                    name: "Saturated Fat",
                    amount: 0.04,
                    unit: "g",
                  },
                  {
                    name: "Vitamin A",
                    amount: 66.24,
                    unit: "IU",
                  },
                  {
                    name: "Carbohydrates",
                    amount: 16.56,
                    unit: "g",
                  },
                  {
                    name: "Selenium",
                    amount: 0,
                    unit: "µg",
                  },
                  {
                    name: "Alcohol",
                    amount: 0,
                    unit: "g",
                  },
                  {
                    name: "Caffeine",
                    amount: 0,
                    unit: "mg",
                  },
                ],
              },
              {
                id: 2044,
                name: "fresh basil",
                amount: 1,
                unit: "tablespoons",
                nutrients: [
                  {
                    name: "Folic Acid",
                    amount: 0,
                    unit: "µg",
                  },
                  {
                    name: "Vitamin E",
                    amount: 0.02,
                    unit: "mg",
                  },
                  {
                    name: "Vitamin B2",
                    amount: 0,
                    unit: "mg",
                  },
                  {
                    name: "Fiber",
                    amount: 0.03,
                    unit: "g",
                  },
                  {
                    name: "Mono Unsaturated Fat",
                    amount: 0,
                    unit: "g",
                  },
                  {
                    name: "Net Carbohydrates",
                    amount: 0.02,
                    unit: "g",
                  },
                  {
                    name: "Fat",
                    amount: 0.01,
                    unit: "g",
                  },
                  {
                    name: "Vitamin B12",
                    amount: 0,
                    unit: "µg",
                  },
                  {
                    name: "Manganese",
                    amount: 0.02,
                    unit: "mg",
                  },
                  {
                    name: "Lycopene",
                    amount: 0,
                    unit: "µg",
                  },
                  {
                    name: "Sugar",
                    amount: 0.01,
                    unit: "g",
                  },
                  {
                    name: "Potassium",
                    amount: 5.9,
                    unit: "mg",
                  },
                  {
                    name: "Folate",
                    amount: 1.36,
                    unit: "µg",
                  },
                  {
                    name: "Vitamin K",
                    amount: 8.3,
                    unit: "µg",
                  },
                  {
                    name: "Zinc",
                    amount: 0.02,
                    unit: "mg",
                  },
                  {
                    name: "Phosphorus",
                    amount: 1.12,
                    unit: "mg",
                  },
                  {
                    name: "Iron",
                    amount: 0.06,
                    unit: "mg",
                  },
                  {
                    name: "Vitamin B6",
                    amount: 0,
                    unit: "mg",
                  },
                  {
                    name: "Vitamin B3",
                    amount: 0.02,
                    unit: "mg",
                  },
                  {
                    name: "Vitamin C",
                    amount: 0.36,
                    unit: "mg",
                  },
                  {
                    name: "Cholesterol",
                    amount: 0,
                    unit: "mg",
                  },
                  {
                    name: "Magnesium",
                    amount: 1.28,
                    unit: "mg",
                  },
                  {
                    name: "Choline",
                    amount: 0.23,
                    unit: "mg",
                  },
                  {
                    name: "Vitamin D",
                    amount: 0,
                    unit: "µg",
                  },
                  {
                    name: "Vitamin B5",
                    amount: 0,
                    unit: "mg",
                  },
                  {
                    name: "Protein",
                    amount: 0.06,
                    unit: "g",
                  },
                  {
                    name: "Calories",
                    amount: 0.46,
                    unit: "kcal",
                  },
                  {
                    name: "Sodium",
                    amount: 0.08,
                    unit: "mg",
                  },
                  {
                    name: "Vitamin B1",
                    amount: 0,
                    unit: "mg",
                  },
                  {
                    name: "Poly Unsaturated Fat",
                    amount: 0.01,
                    unit: "g",
                  },
                  {
                    name: "Copper",
                    amount: 0.01,
                    unit: "mg",
                  },
                  {
                    name: "Calcium",
                    amount: 3.54,
                    unit: "mg",
                  },
                  {
                    name: "Saturated Fat",
                    amount: 0,
                    unit: "g",
                  },
                  {
                    name: "Vitamin A",
                    amount: 105.5,
                    unit: "IU",
                  },
                  {
                    name: "Carbohydrates",
                    amount: 0.05,
                    unit: "g",
                  },
                  {
                    name: "Selenium",
                    amount: 0.01,
                    unit: "µg",
                  },
                  {
                    name: "Alcohol",
                    amount: 0,
                    unit: "g",
                  },
                  {
                    name: "Caffeine",
                    amount: 0,
                    unit: "mg",
                  },
                ],
              },
              {
                id: 2064,
                name: "fresh mint",
                amount: 0.5,
                unit: "teaspoon",
                nutrients: [
                  {
                    name: "Folic Acid",
                    amount: 0,
                    unit: "µg",
                  },
                  {
                    name: "Vitamin B2",
                    amount: 0,
                    unit: "mg",
                  },
                  {
                    name: "Fiber",
                    amount: 0,
                    unit: "g",
                  },
                  {
                    name: "Mono Unsaturated Fat",
                    amount: 0,
                    unit: "g",
                  },
                  {
                    name: "Net Carbohydrates",
                    amount: 0,
                    unit: "g",
                  },
                  {
                    name: "Fat",
                    amount: 0,
                    unit: "g",
                  },
                  {
                    name: "Vitamin B12",
                    amount: 0,
                    unit: "µg",
                  },
                  {
                    name: "Manganese",
                    amount: 0,
                    unit: "mg",
                  },
                  {
                    name: "Potassium",
                    amount: 0.28,
                    unit: "mg",
                  },
                  {
                    name: "Folate",
                    amount: 0.06,
                    unit: "µg",
                  },
                  {
                    name: "Zinc",
                    amount: 0,
                    unit: "mg",
                  },
                  {
                    name: "Phosphorus",
                    amount: 0.04,
                    unit: "mg",
                  },
                  {
                    name: "Iron",
                    amount: 0,
                    unit: "mg",
                  },
                  {
                    name: "Vitamin B6",
                    amount: 0,
                    unit: "mg",
                  },
                  {
                    name: "Vitamin B3",
                    amount: 0,
                    unit: "mg",
                  },
                  {
                    name: "Vitamin C",
                    amount: 0.02,
                    unit: "mg",
                  },
                  {
                    name: "Cholesterol",
                    amount: 0,
                    unit: "mg",
                  },
                  {
                    name: "Magnesium",
                    amount: 0.04,
                    unit: "mg",
                  },
                  {
                    name: "Vitamin D",
                    amount: 0,
                    unit: "µg",
                  },
                  {
                    name: "Vitamin B5",
                    amount: 0,
                    unit: "mg",
                  },
                  {
                    name: "Protein",
                    amount: 0,
                    unit: "g",
                  },
                  {
                    name: "Calories",
                    amount: 0.04,
                    unit: "kcal",
                  },
                  {
                    name: "Sodium",
                    amount: 0.02,
                    unit: "mg",
                  },
                  {
                    name: "Vitamin B1",
                    amount: 0,
                    unit: "mg",
                  },
                  {
                    name: "Poly Unsaturated Fat",
                    amount: 0,
                    unit: "g",
                  },
                  {
                    name: "Copper",
                    amount: 0,
                    unit: "mg",
                  },
                  {
                    name: "Calcium",
                    amount: 0.12,
                    unit: "mg",
                  },
                  {
                    name: "Saturated Fat",
                    amount: 0,
                    unit: "g",
                  },
                  {
                    name: "Vitamin A",
                    amount: 2.12,
                    unit: "IU",
                  },
                  {
                    name: "Carbohydrates",
                    amount: 0.01,
                    unit: "g",
                  },
                ],
              },
              {
                id: 11215,
                name: "garlic",
                amount: 0.5,
                unit: "clove",
                nutrients: [
                  {
                    name: "Folic Acid",
                    amount: 0,
                    unit: "µg",
                  },
                  {
                    name: "Vitamin E",
                    amount: 0,
                    unit: "mg",
                  },
                  {
                    name: "Vitamin B2",
                    amount: 0,
                    unit: "mg",
                  },
                  {
                    name: "Fiber",
                    amount: 0.03,
                    unit: "g",
                  },
                  {
                    name: "Mono Unsaturated Fat",
                    amount: 0,
                    unit: "g",
                  },
                  {
                    name: "Net Carbohydrates",
                    amount: 0.47,
                    unit: "g",
                  },
                  {
                    name: "Fat",
                    amount: 0.01,
                    unit: "g",
                  },
                  {
                    name: "Vitamin B12",
                    amount: 0,
                    unit: "µg",
                  },
                  {
                    name: "Manganese",
                    amount: 0.03,
                    unit: "mg",
                  },
                  {
                    name: "Lycopene",
                    amount: 0,
                    unit: "µg",
                  },
                  {
                    name: "Sugar",
                    amount: 0.02,
                    unit: "g",
                  },
                  {
                    name: "Potassium",
                    amount: 6.02,
                    unit: "mg",
                  },
                  {
                    name: "Folate",
                    amount: 0.05,
                    unit: "µg",
                  },
                  {
                    name: "Vitamin K",
                    amount: 0.03,
                    unit: "µg",
                  },
                  {
                    name: "Zinc",
                    amount: 0.02,
                    unit: "mg",
                  },
                  {
                    name: "Phosphorus",
                    amount: 2.3,
                    unit: "mg",
                  },
                  {
                    name: "Iron",
                    amount: 0.03,
                    unit: "mg",
                  },
                  {
                    name: "Vitamin B6",
                    amount: 0.02,
                    unit: "mg",
                  },
                  {
                    name: "Vitamin B3",
                    amount: 0.01,
                    unit: "mg",
                  },
                  {
                    name: "Vitamin C",
                    amount: 0.47,
                    unit: "mg",
                  },
                  {
                    name: "Cholesterol",
                    amount: 0,
                    unit: "mg",
                  },
                  {
                    name: "Magnesium",
                    amount: 0.38,
                    unit: "mg",
                  },
                  {
                    name: "Choline",
                    amount: 0.35,
                    unit: "mg",
                  },
                  {
                    name: "Vitamin D",
                    amount: 0,
                    unit: "µg",
                  },
                  {
                    name: "Vitamin B5",
                    amount: 0.01,
                    unit: "mg",
                  },
                  {
                    name: "Protein",
                    amount: 0.1,
                    unit: "g",
                  },
                  {
                    name: "Calories",
                    amount: 2.24,
                    unit: "kcal",
                  },
                  {
                    name: "Sodium",
                    amount: 0.26,
                    unit: "mg",
                  },
                  {
                    name: "Vitamin B1",
                    amount: 0,
                    unit: "mg",
                  },
                  {
                    name: "Poly Unsaturated Fat",
                    amount: 0,
                    unit: "g",
                  },
                  {
                    name: "Copper",
                    amount: 0,
                    unit: "mg",
                  },
                  {
                    name: "Calcium",
                    amount: 2.72,
                    unit: "mg",
                  },
                  {
                    name: "Saturated Fat",
                    amount: 0,
                    unit: "g",
                  },
                  {
                    name: "Vitamin A",
                    amount: 0.14,
                    unit: "IU",
                  },
                  {
                    name: "Carbohydrates",
                    amount: 0.5,
                    unit: "g",
                  },
                  {
                    name: "Selenium",
                    amount: 0.21,
                    unit: "µg",
                  },
                  {
                    name: "Alcohol",
                    amount: 0,
                    unit: "g",
                  },
                  {
                    name: "Caffeine",
                    amount: 0,
                    unit: "mg",
                  },
                ],
              },
              {
                id: 9160,
                name: "juice of lime",
                amount: 0.5,
                unit: "",
                nutrients: [
                  {
                    name: "Folic Acid",
                    amount: 0,
                    unit: "µg",
                  },
                  {
                    name: "Vitamin E",
                    amount: 0.03,
                    unit: "mg",
                  },
                  {
                    name: "Vitamin B2",
                    amount: 0,
                    unit: "mg",
                  },
                  {
                    name: "Fiber",
                    amount: 0.06,
                    unit: "g",
                  },
                  {
                    name: "Mono Unsaturated Fat",
                    amount: 0,
                    unit: "g",
                  },
                  {
                    name: "Net Carbohydrates",
                    amount: 1.2,
                    unit: "g",
                  },
                  {
                    name: "Fat",
                    amount: 0.01,
                    unit: "g",
                  },
                  {
                    name: "Vitamin B12",
                    amount: 0,
                    unit: "µg",
                  },
                  {
                    name: "Manganese",
                    amount: 0,
                    unit: "mg",
                  },
                  {
                    name: "Lycopene",
                    amount: 0,
                    unit: "µg",
                  },
                  {
                    name: "Sugar",
                    amount: 0.25,
                    unit: "g",
                  },
                  {
                    name: "Potassium",
                    amount: 17.55,
                    unit: "mg",
                  },
                  {
                    name: "Folate",
                    amount: 1.5,
                    unit: "µg",
                  },
                  {
                    name: "Vitamin K",
                    amount: 0.09,
                    unit: "µg",
                  },
                  {
                    name: "Zinc",
                    amount: 0.01,
                    unit: "mg",
                  },
                  {
                    name: "Phosphorus",
                    amount: 2.1,
                    unit: "mg",
                  },
                  {
                    name: "Iron",
                    amount: 0.01,
                    unit: "mg",
                  },
                  {
                    name: "Vitamin B6",
                    amount: 0.01,
                    unit: "mg",
                  },
                  {
                    name: "Vitamin B3",
                    amount: 0.02,
                    unit: "mg",
                  },
                  {
                    name: "Vitamin C",
                    amount: 4.5,
                    unit: "mg",
                  },
                  {
                    name: "Cholesterol",
                    amount: 0,
                    unit: "mg",
                  },
                  {
                    name: "Magnesium",
                    amount: 1.2,
                    unit: "mg",
                  },
                  {
                    name: "Choline",
                    amount: 0.77,
                    unit: "mg",
                  },
                  {
                    name: "Vitamin D",
                    amount: 0,
                    unit: "µg",
                  },
                  {
                    name: "Vitamin B5",
                    amount: 0.02,
                    unit: "mg",
                  },
                  {
                    name: "Protein",
                    amount: 0.06,
                    unit: "g",
                  },
                  {
                    name: "Calories",
                    amount: 3.75,
                    unit: "kcal",
                  },
                  {
                    name: "Sodium",
                    amount: 0.3,
                    unit: "mg",
                  },
                  {
                    name: "Vitamin B1",
                    amount: 0,
                    unit: "mg",
                  },
                  {
                    name: "Poly Unsaturated Fat",
                    amount: 0,
                    unit: "g",
                  },
                  {
                    name: "Copper",
                    amount: 0,
                    unit: "mg",
                  },
                  {
                    name: "Calcium",
                    amount: 2.1,
                    unit: "mg",
                  },
                  {
                    name: "Saturated Fat",
                    amount: 0,
                    unit: "g",
                  },
                  {
                    name: "Vitamin A",
                    amount: 7.5,
                    unit: "IU",
                  },
                  {
                    name: "Carbohydrates",
                    amount: 1.26,
                    unit: "g",
                  },
                  {
                    name: "Selenium",
                    amount: 0.02,
                    unit: "µg",
                  },
                  {
                    name: "Alcohol",
                    amount: 0,
                    unit: "g",
                  },
                  {
                    name: "Caffeine",
                    amount: 0,
                    unit: "mg",
                  },
                ],
              },
              {
                id: 1009159,
                name: "lime zest",
                amount: 0.5,
                unit: "",
                nutrients: [
                  {
                    name: "Folic Acid",
                    amount: 0,
                    unit: "µg",
                  },
                  {
                    name: "Vitamin E",
                    amount: 0.07,
                    unit: "mg",
                  },
                  {
                    name: "Vitamin B2",
                    amount: 0.01,
                    unit: "mg",
                  },
                  {
                    name: "Fiber",
                    amount: 0.94,
                    unit: "g",
                  },
                  {
                    name: "Mono Unsaturated Fat",
                    amount: 0.01,
                    unit: "g",
                  },
                  {
                    name: "Net Carbohydrates",
                    amount: 2.58,
                    unit: "g",
                  },
                  {
                    name: "Fat",
                    amount: 0.07,
                    unit: "g",
                  },
                  {
                    name: "Vitamin B12",
                    amount: 0,
                    unit: "µg",
                  },
                  {
                    name: "Manganese",
                    amount: 0,
                    unit: "mg",
                  },
                  {
                    name: "Lycopene",
                    amount: 0,
                    unit: "µg",
                  },
                  {
                    name: "Sugar",
                    amount: 0.57,
                    unit: "g",
                  },
                  {
                    name: "Potassium",
                    amount: 34.17,
                    unit: "mg",
                  },
                  {
                    name: "Folate",
                    amount: 2.68,
                    unit: "µg",
                  },
                  {
                    name: "Vitamin K",
                    amount: 0.2,
                    unit: "µg",
                  },
                  {
                    name: "Zinc",
                    amount: 0.04,
                    unit: "mg",
                  },
                  {
                    name: "Phosphorus",
                    amount: 6.03,
                    unit: "mg",
                  },
                  {
                    name: "Iron",
                    amount: 0.2,
                    unit: "mg",
                  },
                  {
                    name: "Vitamin B6",
                    amount: 0.01,
                    unit: "mg",
                  },
                  {
                    name: "Vitamin B3",
                    amount: 0.07,
                    unit: "mg",
                  },
                  {
                    name: "Vitamin C",
                    amount: 9.75,
                    unit: "mg",
                  },
                  {
                    name: "Cholesterol",
                    amount: 0,
                    unit: "mg",
                  },
                  {
                    name: "Magnesium",
                    amount: 2.01,
                    unit: "mg",
                  },
                  {
                    name: "Choline",
                    amount: 1.71,
                    unit: "mg",
                  },
                  {
                    name: "Vitamin D",
                    amount: 0,
                    unit: "µg",
                  },
                  {
                    name: "Vitamin B5",
                    amount: 0.07,
                    unit: "mg",
                  },
                  {
                    name: "Protein",
                    amount: 0.23,
                    unit: "g",
                  },
                  {
                    name: "Calories",
                    amount: 10.05,
                    unit: "kcal",
                  },
                  {
                    name: "Sodium",
                    amount: 0.67,
                    unit: "mg",
                  },
                  {
                    name: "Vitamin B1",
                    amount: 0.01,
                    unit: "mg",
                  },
                  {
                    name: "Poly Unsaturated Fat",
                    amount: 0.02,
                    unit: "g",
                  },
                  {
                    name: "Copper",
                    amount: 0.02,
                    unit: "mg",
                  },
                  {
                    name: "Calcium",
                    amount: 11.06,
                    unit: "mg",
                  },
                  {
                    name: "Saturated Fat",
                    amount: 0.01,
                    unit: "g",
                  },
                  {
                    name: "Vitamin A",
                    amount: 16.75,
                    unit: "IU",
                  },
                  {
                    name: "Carbohydrates",
                    amount: 3.52,
                    unit: "g",
                  },
                  {
                    name: "Selenium",
                    amount: 0.13,
                    unit: "µg",
                  },
                  {
                    name: "Alcohol",
                    amount: 0,
                    unit: "g",
                  },
                  {
                    name: "Caffeine",
                    amount: 0,
                    unit: "mg",
                  },
                ],
              },
              {
                id: 9176,
                name: "mango",
                amount: 0.5,
                unit: "",
                nutrients: [
                  {
                    name: "Folic Acid",
                    amount: 0,
                    unit: "µg",
                  },
                  {
                    name: "Vitamin E",
                    amount: 0.93,
                    unit: "mg",
                  },
                  {
                    name: "Vitamin B2",
                    amount: 0.04,
                    unit: "mg",
                  },
                  {
                    name: "Fiber",
                    amount: 1.66,
                    unit: "g",
                  },
                  {
                    name: "Mono Unsaturated Fat",
                    amount: 0.14,
                    unit: "g",
                  },
                  {
                    name: "Net Carbohydrates",
                    amount: 13.87,
                    unit: "g",
                  },
                  {
                    name: "Fat",
                    amount: 0.39,
                    unit: "g",
                  },
                  {
                    name: "Vitamin B12",
                    amount: 0,
                    unit: "µg",
                  },
                  {
                    name: "Manganese",
                    amount: 0.07,
                    unit: "mg",
                  },
                  {
                    name: "Lycopene",
                    amount: 3.11,
                    unit: "µg",
                  },
                  {
                    name: "Sugar",
                    amount: 14.18,
                    unit: "g",
                  },
                  {
                    name: "Potassium",
                    amount: 173.88,
                    unit: "mg",
                  },
                  {
                    name: "Folate",
                    amount: 44.51,
                    unit: "µg",
                  },
                  {
                    name: "Vitamin K",
                    amount: 4.35,
                    unit: "µg",
                  },
                  {
                    name: "Zinc",
                    amount: 0.09,
                    unit: "mg",
                  },
                  {
                    name: "Phosphorus",
                    amount: 14.49,
                    unit: "mg",
                  },
                  {
                    name: "Iron",
                    amount: 0.17,
                    unit: "mg",
                  },
                  {
                    name: "Vitamin B6",
                    amount: 0.12,
                    unit: "mg",
                  },
                  {
                    name: "Vitamin B3",
                    amount: 0.69,
                    unit: "mg",
                  },
                  {
                    name: "Vitamin C",
                    amount: 37.67,
                    unit: "mg",
                  },
                  {
                    name: "Cholesterol",
                    amount: 0,
                    unit: "mg",
                  },
                  {
                    name: "Magnesium",
                    amount: 10.35,
                    unit: "mg",
                  },
                  {
                    name: "Choline",
                    amount: 7.87,
                    unit: "mg",
                  },
                  {
                    name: "Vitamin D",
                    amount: 0,
                    unit: "µg",
                  },
                  {
                    name: "Vitamin B5",
                    amount: 0.2,
                    unit: "mg",
                  },
                  {
                    name: "Protein",
                    amount: 0.85,
                    unit: "g",
                  },
                  {
                    name: "Calories",
                    amount: 62.1,
                    unit: "kcal",
                  },
                  {
                    name: "Sodium",
                    amount: 1.03,
                    unit: "mg",
                  },
                  {
                    name: "Vitamin B1",
                    amount: 0.03,
                    unit: "mg",
                  },
                  {
                    name: "Poly Unsaturated Fat",
                    amount: 0.07,
                    unit: "g",
                  },
                  {
                    name: "Copper",
                    amount: 0.11,
                    unit: "mg",
                  },
                  {
                    name: "Calcium",
                    amount: 11.39,
                    unit: "mg",
                  },
                  {
                    name: "Saturated Fat",
                    amount: 0.1,
                    unit: "g",
                  },
                  {
                    name: "Vitamin A",
                    amount: 1119.87,
                    unit: "IU",
                  },
                  {
                    name: "Carbohydrates",
                    amount: 15.53,
                    unit: "g",
                  },
                  {
                    name: "Selenium",
                    amount: 0.62,
                    unit: "µg",
                  },
                  {
                    name: "Alcohol",
                    amount: 0,
                    unit: "g",
                  },
                  {
                    name: "Caffeine",
                    amount: 0,
                    unit: "mg",
                  },
                ],
              },
              {
                id: 4053,
                name: "olive oil",
                amount: 0.5,
                unit: "tbsp",
                nutrients: [
                  {
                    name: "Folic Acid",
                    amount: 0,
                    unit: "µg",
                  },
                  {
                    name: "Vitamin E",
                    amount: 1.01,
                    unit: "mg",
                  },
                  {
                    name: "Vitamin B2",
                    amount: 0,
                    unit: "mg",
                  },
                  {
                    name: "Fiber",
                    amount: 0,
                    unit: "g",
                  },
                  {
                    name: "Mono Unsaturated Fat",
                    amount: 5.11,
                    unit: "g",
                  },
                  {
                    name: "Net Carbohydrates",
                    amount: 0,
                    unit: "g",
                  },
                  {
                    name: "Fat",
                    amount: 7,
                    unit: "g",
                  },
                  {
                    name: "Vitamin B12",
                    amount: 0,
                    unit: "µg",
                  },
                  {
                    name: "Manganese",
                    amount: 0,
                    unit: "mg",
                  },
                  {
                    name: "Lycopene",
                    amount: 0,
                    unit: "µg",
                  },
                  {
                    name: "Sugar",
                    amount: 0,
                    unit: "g",
                  },
                  {
                    name: "Potassium",
                    amount: 0.07,
                    unit: "mg",
                  },
                  {
                    name: "Folate",
                    amount: 0,
                    unit: "µg",
                  },
                  {
                    name: "Vitamin K",
                    amount: 4.21,
                    unit: "µg",
                  },
                  {
                    name: "Zinc",
                    amount: 0,
                    unit: "mg",
                  },
                  {
                    name: "Phosphorus",
                    amount: 0,
                    unit: "mg",
                  },
                  {
                    name: "Iron",
                    amount: 0.04,
                    unit: "mg",
                  },
                  {
                    name: "Vitamin B6",
                    amount: 0,
                    unit: "mg",
                  },
                  {
                    name: "Vitamin B3",
                    amount: 0,
                    unit: "mg",
                  },
                  {
                    name: "Vitamin C",
                    amount: 0,
                    unit: "mg",
                  },
                  {
                    name: "Cholesterol",
                    amount: 0,
                    unit: "mg",
                  },
                  {
                    name: "Magnesium",
                    amount: 0,
                    unit: "mg",
                  },
                  {
                    name: "Choline",
                    amount: 0.02,
                    unit: "mg",
                  },
                  {
                    name: "Vitamin D",
                    amount: 0,
                    unit: "µg",
                  },
                  {
                    name: "Vitamin B5",
                    amount: 0,
                    unit: "mg",
                  },
                  {
                    name: "Protein",
                    amount: 0,
                    unit: "g",
                  },
                  {
                    name: "Calories",
                    amount: 61.88,
                    unit: "kcal",
                  },
                  {
                    name: "Sodium",
                    amount: 0.14,
                    unit: "mg",
                  },
                  {
                    name: "Vitamin B1",
                    amount: 0,
                    unit: "mg",
                  },
                  {
                    name: "Poly Unsaturated Fat",
                    amount: 0.74,
                    unit: "g",
                  },
                  {
                    name: "Copper",
                    amount: 0,
                    unit: "mg",
                  },
                  {
                    name: "Calcium",
                    amount: 0.07,
                    unit: "mg",
                  },
                  {
                    name: "Saturated Fat",
                    amount: 0.97,
                    unit: "g",
                  },
                  {
                    name: "Vitamin A",
                    amount: 0,
                    unit: "IU",
                  },
                  {
                    name: "Carbohydrates",
                    amount: 0,
                    unit: "g",
                  },
                  {
                    name: "Selenium",
                    amount: 0,
                    unit: "µg",
                  },
                  {
                    name: "Alcohol",
                    amount: 0,
                    unit: "g",
                  },
                  {
                    name: "Caffeine",
                    amount: 0,
                    unit: "mg",
                  },
                ],
              },
              {
                id: 9236,
                name: "peach",
                amount: 0.5,
                unit: "",
                nutrients: [
                  {
                    name: "Folic Acid",
                    amount: 0,
                    unit: "µg",
                  },
                  {
                    name: "Vitamin E",
                    amount: 0.55,
                    unit: "mg",
                  },
                  {
                    name: "Vitamin B2",
                    amount: 0.02,
                    unit: "mg",
                  },
                  {
                    name: "Fiber",
                    amount: 1.13,
                    unit: "g",
                  },
                  {
                    name: "Mono Unsaturated Fat",
                    amount: 0.05,
                    unit: "g",
                  },
                  {
                    name: "Net Carbohydrates",
                    amount: 6.45,
                    unit: "g",
                  },
                  {
                    name: "Fat",
                    amount: 0.2,
                    unit: "g",
                  },
                  {
                    name: "Vitamin B12",
                    amount: 0,
                    unit: "µg",
                  },
                  {
                    name: "Manganese",
                    amount: 0.05,
                    unit: "mg",
                  },
                  {
                    name: "Lycopene",
                    amount: 0,
                    unit: "µg",
                  },
                  {
                    name: "Sugar",
                    amount: 6.29,
                    unit: "g",
                  },
                  {
                    name: "Potassium",
                    amount: 91.5,
                    unit: "mg",
                  },
                  {
                    name: "Folate",
                    amount: 4.5,
                    unit: "µg",
                  },
                  {
                    name: "Vitamin K",
                    amount: 2.25,
                    unit: "µg",
                  },
                  {
                    name: "Zinc",
                    amount: 0.17,
                    unit: "mg",
                  },
                  {
                    name: "Phosphorus",
                    amount: 16.5,
                    unit: "mg",
                  },
                  {
                    name: "Iron",
                    amount: 0.26,
                    unit: "mg",
                  },
                  {
                    name: "Vitamin B6",
                    amount: 0.02,
                    unit: "mg",
                  },
                  {
                    name: "Vitamin B3",
                    amount: 0.6,
                    unit: "mg",
                  },
                  {
                    name: "Vitamin C",
                    amount: 3.08,
                    unit: "mg",
                  },
                  {
                    name: "Cholesterol",
                    amount: 0,
                    unit: "mg",
                  },
                  {
                    name: "Magnesium",
                    amount: 6,
                    unit: "mg",
                  },
                  {
                    name: "Choline",
                    amount: 4.58,
                    unit: "mg",
                  },
                  {
                    name: "Vitamin D",
                    amount: 0,
                    unit: "µg",
                  },
                  {
                    name: "Vitamin B5",
                    amount: 0.11,
                    unit: "mg",
                  },
                  {
                    name: "Protein",
                    amount: 0.68,
                    unit: "g",
                  },
                  {
                    name: "Calories",
                    amount: 31.5,
                    unit: "kcal",
                  },
                  {
                    name: "Sodium",
                    amount: 9.75,
                    unit: "mg",
                  },
                  {
                    name: "Vitamin B1",
                    amount: 0.02,
                    unit: "mg",
                  },
                  {
                    name: "Fluoride",
                    amount: 3,
                    unit: "mg",
                  },
                  {
                    name: "Poly Unsaturated Fat",
                    amount: 0.06,
                    unit: "g",
                  },
                  {
                    name: "Copper",
                    amount: 0.06,
                    unit: "mg",
                  },
                  {
                    name: "Calcium",
                    amount: 3,
                    unit: "mg",
                  },
                  {
                    name: "Saturated Fat",
                    amount: 0.01,
                    unit: "g",
                  },
                  {
                    name: "Vitamin A",
                    amount: 244.5,
                    unit: "IU",
                  },
                  {
                    name: "Carbohydrates",
                    amount: 7.58,
                    unit: "g",
                  },
                  {
                    name: "Selenium",
                    amount: 1.58,
                    unit: "µg",
                  },
                  {
                    name: "Alcohol",
                    amount: 0,
                    unit: "g",
                  },
                  {
                    name: "Caffeine",
                    amount: 0,
                    unit: "mg",
                  },
                ],
              },
              {
                id: 9266,
                name: "pineapple",
                amount: 0.5,
                unit: "cup",
                nutrients: [
                  {
                    name: "Folic Acid",
                    amount: 0,
                    unit: "µg",
                  },
                  {
                    name: "Vitamin E",
                    amount: 0.02,
                    unit: "mg",
                  },
                  {
                    name: "Vitamin B2",
                    amount: 0.03,
                    unit: "mg",
                  },
                  {
                    name: "Fiber",
                    amount: 1.15,
                    unit: "g",
                  },
                  {
                    name: "Mono Unsaturated Fat",
                    amount: 0.01,
                    unit: "g",
                  },
                  {
                    name: "Net Carbohydrates",
                    amount: 9.65,
                    unit: "g",
                  },
                  {
                    name: "Fat",
                    amount: 0.1,
                    unit: "g",
                  },
                  {
                    name: "Vitamin B12",
                    amount: 0,
                    unit: "µg",
                  },
                  {
                    name: "Manganese",
                    amount: 0.76,
                    unit: "mg",
                  },
                  {
                    name: "Lycopene",
                    amount: 0,
                    unit: "µg",
                  },
                  {
                    name: "Sugar",
                    amount: 8.13,
                    unit: "g",
                  },
                  {
                    name: "Potassium",
                    amount: 89.93,
                    unit: "mg",
                  },
                  {
                    name: "Folate",
                    amount: 14.85,
                    unit: "µg",
                  },
                  {
                    name: "Vitamin K",
                    amount: 0.58,
                    unit: "µg",
                  },
                  {
                    name: "Zinc",
                    amount: 0.1,
                    unit: "mg",
                  },
                  {
                    name: "Phosphorus",
                    amount: 6.6,
                    unit: "mg",
                  },
                  {
                    name: "Iron",
                    amount: 0.24,
                    unit: "mg",
                  },
                  {
                    name: "Vitamin B6",
                    amount: 0.09,
                    unit: "mg",
                  },
                  {
                    name: "Vitamin B3",
                    amount: 0.41,
                    unit: "mg",
                  },
                  {
                    name: "Vitamin C",
                    amount: 39.43,
                    unit: "mg",
                  },
                  {
                    name: "Cholesterol",
                    amount: 0,
                    unit: "mg",
                  },
                  {
                    name: "Magnesium",
                    amount: 9.9,
                    unit: "mg",
                  },
                  {
                    name: "Choline",
                    amount: 4.54,
                    unit: "mg",
                  },
                  {
                    name: "Vitamin D",
                    amount: 0,
                    unit: "µg",
                  },
                  {
                    name: "Vitamin B5",
                    amount: 0.18,
                    unit: "mg",
                  },
                  {
                    name: "Protein",
                    amount: 0.45,
                    unit: "g",
                  },
                  {
                    name: "Calories",
                    amount: 41.25,
                    unit: "kcal",
                  },
                  {
                    name: "Sodium",
                    amount: 0.83,
                    unit: "mg",
                  },
                  {
                    name: "Vitamin B1",
                    amount: 0.07,
                    unit: "mg",
                  },
                  {
                    name: "Poly Unsaturated Fat",
                    amount: 0.03,
                    unit: "g",
                  },
                  {
                    name: "Copper",
                    amount: 0.09,
                    unit: "mg",
                  },
                  {
                    name: "Calcium",
                    amount: 10.73,
                    unit: "mg",
                  },
                  {
                    name: "Saturated Fat",
                    amount: 0.01,
                    unit: "g",
                  },
                  {
                    name: "Vitamin A",
                    amount: 47.85,
                    unit: "IU",
                  },
                  {
                    name: "Carbohydrates",
                    amount: 10.81,
                    unit: "g",
                  },
                  {
                    name: "Selenium",
                    amount: 0.08,
                    unit: "µg",
                  },
                  {
                    name: "Alcohol",
                    amount: 0,
                    unit: "g",
                  },
                  {
                    name: "Caffeine",
                    amount: 0,
                    unit: "mg",
                  },
                ],
              },
              {
                id: 15076,
                name: "salmon fillet",
                amount: 6,
                unit: "ounces",
                nutrients: [
                  {
                    name: "Folic Acid",
                    amount: 0,
                    unit: "µg",
                  },
                  {
                    name: "Vitamin B2",
                    amount: 0.65,
                    unit: "mg",
                  },
                  {
                    name: "Fiber",
                    amount: 0,
                    unit: "g",
                  },
                  {
                    name: "Mono Unsaturated Fat",
                    amount: 3.58,
                    unit: "g",
                  },
                  {
                    name: "Net Carbohydrates",
                    amount: 0,
                    unit: "g",
                  },
                  {
                    name: "Fat",
                    amount: 10.78,
                    unit: "g",
                  },
                  {
                    name: "Vitamin B12",
                    amount: 5.41,
                    unit: "µg",
                  },
                  {
                    name: "Manganese",
                    amount: 0.03,
                    unit: "mg",
                  },
                  {
                    name: "Potassium",
                    amount: 833.48,
                    unit: "mg",
                  },
                  {
                    name: "Folate",
                    amount: 42.52,
                    unit: "µg",
                  },
                  {
                    name: "Zinc",
                    amount: 1.09,
                    unit: "mg",
                  },
                  {
                    name: "Phosphorus",
                    amount: 340.19,
                    unit: "mg",
                  },
                  {
                    name: "Iron",
                    amount: 1.36,
                    unit: "mg",
                  },
                  {
                    name: "Vitamin B6",
                    amount: 1.39,
                    unit: "mg",
                  },
                  {
                    name: "Vitamin B3",
                    amount: 13.37,
                    unit: "mg",
                  },
                  {
                    name: "Vitamin C",
                    amount: 0,
                    unit: "mg",
                  },
                  {
                    name: "Cholesterol",
                    amount: 93.55,
                    unit: "mg",
                  },
                  {
                    name: "Magnesium",
                    amount: 49.33,
                    unit: "mg",
                  },
                  {
                    name: "Vitamin B5",
                    amount: 2.83,
                    unit: "mg",
                  },
                  {
                    name: "Protein",
                    amount: 33.75,
                    unit: "g",
                  },
                  {
                    name: "Calories",
                    amount: 241.54,
                    unit: "kcal",
                  },
                  {
                    name: "Sodium",
                    amount: 74.84,
                    unit: "mg",
                  },
                  {
                    name: "Vitamin B1",
                    amount: 0.38,
                    unit: "mg",
                  },
                  {
                    name: "Poly Unsaturated Fat",
                    amount: 4.32,
                    unit: "g",
                  },
                  {
                    name: "Copper",
                    amount: 0.43,
                    unit: "mg",
                  },
                  {
                    name: "Calcium",
                    amount: 20.41,
                    unit: "mg",
                  },
                  {
                    name: "Saturated Fat",
                    amount: 1.67,
                    unit: "g",
                  },
                  {
                    name: "Vitamin A",
                    amount: 68.04,
                    unit: "IU",
                  },
                  {
                    name: "Carbohydrates",
                    amount: 0,
                    unit: "g",
                  },
                  {
                    name: "Selenium",
                    amount: 62.09,
                    unit: "µg",
                  },
                ],
              },
              {
                id: 1102047,
                name: "salt and pepper",
                amount: 1,
                unit: "servings",
                nutrients: [
                  {
                    name: "Folic Acid",
                    amount: 0,
                    unit: "µg",
                  },
                  {
                    name: "Vitamin E",
                    amount: 0,
                    unit: "mg",
                  },
                  {
                    name: "Vitamin B2",
                    amount: 0,
                    unit: "mg",
                  },
                  {
                    name: "Fiber",
                    amount: 0,
                    unit: "g",
                  },
                  {
                    name: "Mono Unsaturated Fat",
                    amount: 0,
                    unit: "g",
                  },
                  {
                    name: "Net Carbohydrates",
                    amount: 0,
                    unit: "g",
                  },
                  {
                    name: "Fat",
                    amount: 0,
                    unit: "g",
                  },
                  {
                    name: "Vitamin B12",
                    amount: 0,
                    unit: "µg",
                  },
                  {
                    name: "Manganese",
                    amount: 0,
                    unit: "mg",
                  },
                  {
                    name: "Lycopene",
                    amount: 0,
                    unit: "µg",
                  },
                  {
                    name: "Sugar",
                    amount: 0,
                    unit: "g",
                  },
                  {
                    name: "Potassium",
                    amount: 0.04,
                    unit: "mg",
                  },
                  {
                    name: "Folate",
                    amount: 0,
                    unit: "µg",
                  },
                  {
                    name: "Vitamin K",
                    amount: 0,
                    unit: "µg",
                  },
                  {
                    name: "Zinc",
                    amount: 0,
                    unit: "mg",
                  },
                  {
                    name: "Phosphorus",
                    amount: 0,
                    unit: "mg",
                  },
                  {
                    name: "Iron",
                    amount: 0,
                    unit: "mg",
                  },
                  {
                    name: "Vitamin B6",
                    amount: 0,
                    unit: "mg",
                  },
                  {
                    name: "Vitamin B3",
                    amount: 0,
                    unit: "mg",
                  },
                  {
                    name: "Vitamin C",
                    amount: 0,
                    unit: "mg",
                  },
                  {
                    name: "Cholesterol",
                    amount: 0,
                    unit: "mg",
                  },
                  {
                    name: "Magnesium",
                    amount: 0.01,
                    unit: "mg",
                  },
                  {
                    name: "Choline",
                    amount: 0,
                    unit: "mg",
                  },
                  {
                    name: "Vitamin D",
                    amount: 0,
                    unit: "µg",
                  },
                  {
                    name: "Vitamin B5",
                    amount: 0,
                    unit: "mg",
                  },
                  {
                    name: "Protein",
                    amount: 0,
                    unit: "g",
                  },
                  {
                    name: "Calories",
                    amount: 0,
                    unit: "kcal",
                  },
                  {
                    name: "Sodium",
                    amount: 193.79,
                    unit: "mg",
                  },
                  {
                    name: "Vitamin B1",
                    amount: 0,
                    unit: "mg",
                  },
                  {
                    name: "Fluoride",
                    amount: 0.01,
                    unit: "mg",
                  },
                  {
                    name: "Poly Unsaturated Fat",
                    amount: 0,
                    unit: "g",
                  },
                  {
                    name: "Copper",
                    amount: 0,
                    unit: "mg",
                  },
                  {
                    name: "Calcium",
                    amount: 0.12,
                    unit: "mg",
                  },
                  {
                    name: "Saturated Fat",
                    amount: 0,
                    unit: "g",
                  },
                  {
                    name: "Vitamin A",
                    amount: 0,
                    unit: "IU",
                  },
                  {
                    name: "Carbohydrates",
                    amount: 0,
                    unit: "g",
                  },
                  {
                    name: "Selenium",
                    amount: 0,
                    unit: "µg",
                  },
                  {
                    name: "Alcohol",
                    amount: 0,
                    unit: "g",
                  },
                  {
                    name: "Caffeine",
                    amount: 0,
                    unit: "mg",
                  },
                ],
              },
              {
                id: 11677,
                name: "shallot",
                amount: 1,
                unit: "teaspoons",
                nutrients: [
                  {
                    name: "Folic Acid",
                    amount: 0,
                    unit: "µg",
                  },
                  {
                    name: "Vitamin E",
                    amount: 0,
                    unit: "mg",
                  },
                  {
                    name: "Vitamin B2",
                    amount: 0,
                    unit: "mg",
                  },
                  {
                    name: "Fiber",
                    amount: 0.06,
                    unit: "g",
                  },
                  {
                    name: "Mono Unsaturated Fat",
                    amount: 0,
                    unit: "g",
                  },
                  {
                    name: "Net Carbohydrates",
                    amount: 0.27,
                    unit: "g",
                  },
                  {
                    name: "Fat",
                    amount: 0,
                    unit: "g",
                  },
                  {
                    name: "Vitamin B12",
                    amount: 0,
                    unit: "µg",
                  },
                  {
                    name: "Manganese",
                    amount: 0.01,
                    unit: "mg",
                  },
                  {
                    name: "Lycopene",
                    amount: 0,
                    unit: "µg",
                  },
                  {
                    name: "Sugar",
                    amount: 0.16,
                    unit: "g",
                  },
                  {
                    name: "Potassium",
                    amount: 6.68,
                    unit: "mg",
                  },
                  {
                    name: "Folate",
                    amount: 0.68,
                    unit: "µg",
                  },
                  {
                    name: "Vitamin K",
                    amount: 0.02,
                    unit: "µg",
                  },
                  {
                    name: "Zinc",
                    amount: 0.01,
                    unit: "mg",
                  },
                  {
                    name: "Phosphorus",
                    amount: 1.2,
                    unit: "mg",
                  },
                  {
                    name: "Iron",
                    amount: 0.02,
                    unit: "mg",
                  },
                  {
                    name: "Vitamin B6",
                    amount: 0.01,
                    unit: "mg",
                  },
                  {
                    name: "Vitamin B3",
                    amount: 0,
                    unit: "mg",
                  },
                  {
                    name: "Vitamin C",
                    amount: 0.16,
                    unit: "mg",
                  },
                  {
                    name: "Cholesterol",
                    amount: 0,
                    unit: "mg",
                  },
                  {
                    name: "Magnesium",
                    amount: 0.42,
                    unit: "mg",
                  },
                  {
                    name: "Choline",
                    amount: 0.23,
                    unit: "mg",
                  },
                  {
                    name: "Vitamin D",
                    amount: 0,
                    unit: "µg",
                  },
                  {
                    name: "Vitamin B5",
                    amount: 0.01,
                    unit: "mg",
                  },
                  {
                    name: "Protein",
                    amount: 0.05,
                    unit: "g",
                  },
                  {
                    name: "Calories",
                    amount: 1.44,
                    unit: "kcal",
                  },
                  {
                    name: "Sodium",
                    amount: 0.24,
                    unit: "mg",
                  },
                  {
                    name: "Vitamin B1",
                    amount: 0,
                    unit: "mg",
                  },
                  {
                    name: "Poly Unsaturated Fat",
                    amount: 0,
                    unit: "g",
                  },
                  {
                    name: "Copper",
                    amount: 0,
                    unit: "mg",
                  },
                  {
                    name: "Calcium",
                    amount: 0.74,
                    unit: "mg",
                  },
                  {
                    name: "Saturated Fat",
                    amount: 0,
                    unit: "g",
                  },
                  {
                    name: "Vitamin A",
                    amount: 0.08,
                    unit: "IU",
                  },
                  {
                    name: "Carbohydrates",
                    amount: 0.34,
                    unit: "g",
                  },
                  {
                    name: "Selenium",
                    amount: 0.02,
                    unit: "µg",
                  },
                  {
                    name: "Alcohol",
                    amount: 0,
                    unit: "g",
                  },
                  {
                    name: "Caffeine",
                    amount: 0,
                    unit: "mg",
                  },
                ],
              },
            ],
            caloricBreakdown: {
              percentProtein: 26.72,
              percentFat: 30.26,
              percentCarbs: 43.02,
            },
            weightPerServing: {
              amount: 655,
              unit: "g",
            },
          },
          summary:
            'The recipe Grilled Salmon With Cherry, Pineapple, Mango Salsa could satisfy your Mexican craving in around <b>15 minutes</b>. For <b>$9.13 per serving</b>, this recipe <b>covers 39%</b> of your daily requirements of vitamins and minerals. One serving contains <b>510 calories</b>, <b>37g of protein</b>, and <b>19g of fat</b>. It can be enjoyed any time, but it is especially good for <b>The Fourth Of July</b>. A mixture of lime zest, mango, basil, and a handful of other ingredients are all it takes to make this recipe so flavorful. To use up the peach you could follow this main course with the <a href="https://spoonacular.com/recipes/peach-pie-507369">Peach Pie</a> as a dessert. Only a few people made this recipe, and 1 would say it hit the spot. It is a good option if you\'re following a <b>caveman, gluten free, dairy free, and primal</b> diet. It works well as an expensive main course. All things considered, we decided this recipe <b>deserves a spoonacular score of 92%</b>. This score is awesome. Try <a href="https://spoonacular.com/recipes/jamaican-jerk-salmon-and-mango-pineapple-salsa-150817">Jamaican Jerk Salmon and Mango Pineapple Salsa</a>, <a href="https://spoonacular.com/recipes/grilled-pineapple-mango-salsa-58929">Grilled Pineapple Mango Salsa</a>, and <a href="https://spoonacular.com/recipes/grilled-pineapple-mango-salsa-732271">Grilled Pineapple Mango Salsa</a> for similar recipes.',
          cuisines: ["Mexican"],
          dishTypes: ["lunch", "main course", "main dish", "dinner"],
          diets: [
            "gluten free",
            "dairy free",
            "paleolithic",
            "primal",
            "pescatarian",
          ],
          occasions: ["father's day", "4th of july", "summer"],
          analyzedInstructions: [
            {
              name: "",
              steps: [
                {
                  number: 1,
                  step: "Combine all the above ingredients except the olive oil and salmon into a mixing bowl. Stir gently.",
                  ingredients: [
                    {
                      id: 4053,
                      name: "olive oil",
                      localizedName: "olive oil",
                      image: "olive-oil.jpg",
                    },
                    {
                      id: 15076,
                      name: "salmon",
                      localizedName: "salmon",
                      image: "salmon.png",
                    },
                  ],
                  equipment: [
                    {
                      id: 405907,
                      name: "mixing bowl",
                      localizedName: "mixing bowl",
                      image: "mixing-bowl.jpg",
                    },
                  ],
                },
                {
                  number: 2,
                  step: "Add one splash of olive oil and taste for seasoning. Cover and refrigerate until ready to use.Lightly oil and season a salmon fillet with a splash of olive oil and salt and pepper.",
                  ingredients: [
                    {
                      id: 1102047,
                      name: "salt and pepper",
                      localizedName: "salt and pepper",
                      image: "salt-and-pepper.jpg",
                    },
                    {
                      id: 10115076,
                      name: "salmon fillets",
                      localizedName: "salmon fillets",
                      image: "salmon.png",
                    },
                    {
                      id: 4053,
                      name: "olive oil",
                      localizedName: "olive oil",
                      image: "olive-oil.jpg",
                    },
                    {
                      id: 1042027,
                      name: "seasoning",
                      localizedName: "seasoning",
                      image: "seasoning.png",
                    },
                    {
                      id: 4582,
                      name: "cooking oil",
                      localizedName: "cooking oil",
                      image: "vegetable-oil.jpg",
                    },
                  ],
                  equipment: [],
                },
                {
                  number: 3,
                  step: "Place flesh side down on a cleaned and oiled grill or pan. Cook for 2-4 minutes depending on the thickness. Flip and cook for another 2-4 minutes until done.Top salmon with salsa and serve!",
                  ingredients: [
                    {
                      id: 15076,
                      name: "salmon",
                      localizedName: "salmon",
                      image: "salmon.png",
                    },
                    {
                      id: 6164,
                      name: "salsa",
                      localizedName: "salsa",
                      image: "salsa.png",
                    },
                  ],
                  equipment: [
                    {
                      id: 404706,
                      name: "grill",
                      localizedName: "grill",
                      image: "grill.jpg",
                    },
                    {
                      id: 404645,
                      name: "frying pan",
                      localizedName: "frying pan",
                      image: "pan.png",
                    },
                  ],
                  length: {
                    number: 8,
                    unit: "minutes",
                  },
                },
              ],
            },
          ],
          spoonacularSourceUrl:
            "https://spoonacular.com/grilled-salmon-with-cherry-pineapple-mango-salsa-645856",
          usedIngredientCount: 0,
          missedIngredientCount: 12,
          missedIngredients: [
            {
              id: 10031015,
              amount: 0.5,
              unit: "cup",
              unitLong: "cups",
              unitShort: "cup",
              aisle: "Produce",
              name: "anaheim peppers",
              original: "1/2 cup Anaheim peppers, seeded, diced",
              originalName: "Anaheim peppers, seeded, diced",
              meta: ["diced", "seeded"],
              extendedName: "diced anaheim peppers",
              image:
                "https://spoonacular.com/cdn/ingredients_100x100/chili-peppers-green.jpg",
            },
            {
              id: 9070,
              amount: 1.5,
              unit: "cups",
              unitLong: "cups",
              unitShort: "cup",
              aisle: "Produce",
              name: "cherries",
              original: "1 1/2 cups cherries, pitted, diced",
              originalName: "cherries, pitted, diced",
              meta: ["diced", "pitted"],
              extendedName: "diced cherries",
              image:
                "https://spoonacular.com/cdn/ingredients_100x100/cherries.jpg",
            },
            {
              id: 2044,
              amount: 2,
              unit: "tablespoons",
              unitLong: "tablespoons",
              unitShort: "Tbsp",
              aisle: "Produce",
              name: "fresh basil",
              original: "2 tablespoons chopped fresh basil",
              originalName: "chopped fresh basil",
              meta: ["fresh", "chopped"],
              image:
                "https://spoonacular.com/cdn/ingredients_100x100/fresh-basil.jpg",
            },
            {
              id: 2064,
              amount: 1,
              unit: "teaspoon",
              unitLong: "teaspoon",
              unitShort: "tsp",
              aisle: "Produce;Spices and Seasonings",
              name: "fresh mint",
              original: "1 teaspoon fresh mint, chiffonade",
              originalName: "fresh mint, chiffonade",
              meta: ["fresh"],
              image: "https://spoonacular.com/cdn/ingredients_100x100/mint.jpg",
            },
            {
              id: 11215,
              amount: 1,
              unit: "clove",
              unitLong: "clove",
              unitShort: "clove",
              aisle: "Produce",
              name: "garlic",
              original: "1 clove garlic, minced",
              originalName: "garlic, minced",
              meta: ["minced"],
              image:
                "https://spoonacular.com/cdn/ingredients_100x100/garlic.png",
            },
            {
              id: 9160,
              amount: 1,
              unit: "",
              unitLong: "",
              unitShort: "",
              aisle: "Produce",
              name: "juice of lime",
              original: "juice of 1 lime",
              originalName: "juice of lime",
              meta: [],
              extendedName: "lime (juice)",
              image:
                "https://spoonacular.com/cdn/ingredients_100x100/lime-juice.png",
            },
            {
              id: 1009159,
              amount: 1,
              unit: "",
              unitLong: "",
              unitShort: "",
              aisle: "Produce",
              name: "lime zest",
              original: "zest of 1 lime",
              originalName: "zest of lime",
              meta: [],
              image:
                "https://spoonacular.com/cdn/ingredients_100x100/zest-lime.jpg",
            },
            {
              id: 9176,
              amount: 1,
              unit: "",
              unitLong: "",
              unitShort: "",
              aisle: "Produce",
              name: "mango",
              original: "1 mango, diced",
              originalName: "mango, diced",
              meta: ["diced"],
              extendedName: "diced mango",
              image:
                "https://spoonacular.com/cdn/ingredients_100x100/mango.jpg",
            },
            {
              id: 9236,
              amount: 1,
              unit: "",
              unitLong: "",
              unitShort: "",
              aisle: "Produce",
              name: "peach",
              original: "1 peach, peeled and diced",
              originalName: "peach, peeled and diced",
              meta: ["diced", "peeled"],
              extendedName: "diced peach",
              image:
                "https://spoonacular.com/cdn/ingredients_100x100/peach.png",
            },
            {
              id: 9266,
              amount: 1,
              unit: "cup",
              unitLong: "cup",
              unitShort: "cup",
              aisle: "Produce",
              name: "pineapple",
              original: "1 cup fresh pineapple, diced",
              originalName: "fresh pineapple, diced",
              meta: ["fresh", "diced"],
              extendedName: "diced fresh pineapple",
              image:
                "https://spoonacular.com/cdn/ingredients_100x100/pineapple.jpg",
            },
            {
              id: 15076,
              amount: 12,
              unit: "ounces",
              unitLong: "ounces",
              unitShort: "oz",
              aisle: "Seafood",
              name: "salmon fillet",
              original: "12 ounces salmon fillet",
              originalName: "salmon fillet",
              meta: [],
              image:
                "https://spoonacular.com/cdn/ingredients_100x100/salmon.png",
            },
            {
              id: 11677,
              amount: 2,
              unit: "teaspoons",
              unitLong: "teaspoons",
              unitShort: "tsp",
              aisle: "Produce",
              name: "shallot",
              original: "2 teaspoons minced shallot",
              originalName: "minced shallot",
              meta: ["minced"],
              image:
                "https://spoonacular.com/cdn/ingredients_100x100/shallots.jpg",
            },
          ],
          likes: 0,
          usedIngredients: [],
          unusedIngredients: [],
        },
        {
          vegetarian: true,
          vegan: true,
          glutenFree: true,
          dairyFree: true,
          veryHealthy: false,
          cheap: false,
          veryPopular: false,
          sustainable: false,
          weightWatcherSmartPoints: 0,
          gaps: "GAPS_FULL",
          lowFodmap: false,
          aggregateLikes: 1,
          spoonacularScore: 83,
          healthScore: 35,
          creditsText:
            "Foodista.com – The Cooking Encyclopedia Everyone Can Edit",
          license: "CC BY 3.0",
          sourceName: "Foodista",
          pricePerServing: 163.61,
          extendedIngredients: [
            {
              id: 9042,
              aisle: "Produce",
              image: "blackberries.jpg",
              consistency: "solid",
              name: "blackberries",
              nameClean: "blackberries",
              original: "6 ounces blackberries",
              originalName: "blackberries",
              amount: 6,
              unit: "ounces",
              meta: [],
              measures: {
                us: {
                  amount: 6,
                  unitShort: "oz",
                  unitLong: "ounces",
                },
                metric: {
                  amount: 170.097,
                  unitShort: "g",
                  unitLong: "grams",
                },
              },
            },
            {
              id: 9176,
              aisle: "Produce",
              image: "mango.jpg",
              consistency: "solid",
              name: "mango",
              nameClean: "mango",
              original: "1 large mango, diced",
              originalName: "mango, diced",
              amount: 1,
              unit: "large",
              meta: ["diced"],
              measures: {
                us: {
                  amount: 1,
                  unitShort: "large",
                  unitLong: "large",
                },
                metric: {
                  amount: 1,
                  unitShort: "large",
                  unitLong: "large",
                },
              },
            },
            {
              id: 1009159,
              aisle: "Produce",
              image: "zest-lime.jpg",
              consistency: "solid",
              name: "lime zest",
              nameClean: "lime peel",
              original: "½ teaspoon lime zest",
              originalName: "lime zest",
              amount: 0.5,
              unit: "teaspoon",
              meta: [],
              measures: {
                us: {
                  amount: 0.5,
                  unitShort: "tsps",
                  unitLong: "teaspoons",
                },
                metric: {
                  amount: 0.5,
                  unitShort: "tsps",
                  unitLong: "teaspoons",
                },
              },
            },
            {
              id: 9160,
              aisle: "Produce",
              image: "lime-juice.png",
              consistency: "liquid",
              name: "lime juice",
              nameClean: "lime juice",
              original: "1 ½ teaspoons lime juice",
              originalName: "lime juice",
              amount: 1.5,
              unit: "teaspoons",
              meta: [],
              measures: {
                us: {
                  amount: 1.5,
                  unitShort: "tsps",
                  unitLong: "teaspoons",
                },
                metric: {
                  amount: 1.5,
                  unitShort: "tsps",
                  unitLong: "teaspoons",
                },
              },
            },
            {
              id: 2064,
              aisle: "Produce;Spices and Seasonings",
              image: "mint.jpg",
              consistency: "solid",
              name: "fresh mint",
              nameClean: "mint",
              original: "1 tablespoon finely chopped fresh mint",
              originalName: "finely chopped fresh mint",
              amount: 1,
              unit: "tablespoon",
              meta: ["fresh", "finely chopped"],
              measures: {
                us: {
                  amount: 1,
                  unitShort: "Tbsp",
                  unitLong: "Tbsp",
                },
                metric: {
                  amount: 1,
                  unitShort: "Tbsp",
                  unitLong: "Tbsp",
                },
              },
            },
          ],
          id: 1096279,
          title: "Mango Blackberry Side Salad",
          readyInMinutes: 5,
          servings: 2,
          sourceUrl:
            "https://www.foodista.com/recipe/7C2LWVVK/mango-blackberry-salad",
          image: "https://spoonacular.com/recipeImages/1096279-312x231.jpg",
          imageType: "jpg",
          nutrition: {
            nutrients: [
              {
                name: "Calories",
                amount: 101.51,
                unit: "kcal",
                percentOfDailyNeeds: 5.08,
              },
              {
                name: "Fat",
                amount: 0.84,
                unit: "g",
                percentOfDailyNeeds: 1.29,
              },
              {
                name: "Saturated Fat",
                amount: 0.11,
                unit: "g",
                percentOfDailyNeeds: 0.71,
              },
              {
                name: "Carbohydrates",
                amount: 24.44,
                unit: "g",
                percentOfDailyNeeds: 8.15,
              },
              {
                name: "Net Carbohydrates",
                amount: 18.05,
                unit: "g",
                percentOfDailyNeeds: 6.56,
              },
              {
                name: "Sugar",
                amount: 18.4,
                unit: "g",
                percentOfDailyNeeds: 20.45,
              },
              {
                name: "Cholesterol",
                amount: 0,
                unit: "mg",
                percentOfDailyNeeds: 0,
              },
              {
                name: "Sodium",
                amount: 2.75,
                unit: "mg",
                percentOfDailyNeeds: 0.12,
              },
              {
                name: "Protein",
                amount: 2.14,
                unit: "g",
                percentOfDailyNeeds: 4.29,
              },
              {
                name: "Vitamin C",
                amount: 57.6,
                unit: "mg",
                percentOfDailyNeeds: 69.82,
              },
              {
                name: "Manganese",
                amount: 0.64,
                unit: "mg",
                percentOfDailyNeeds: 32.24,
              },
              {
                name: "Vitamin A",
                amount: 1410.2,
                unit: "IU",
                percentOfDailyNeeds: 28.2,
              },
              {
                name: "Fiber",
                amount: 6.39,
                unit: "g",
                percentOfDailyNeeds: 25.57,
              },
              {
                name: "Vitamin K",
                amount: 21.21,
                unit: "µg",
                percentOfDailyNeeds: 20.2,
              },
              {
                name: "Folate",
                amount: 69.03,
                unit: "µg",
                percentOfDailyNeeds: 17.26,
              },
              {
                name: "Copper",
                amount: 0.26,
                unit: "mg",
                percentOfDailyNeeds: 13.24,
              },
              {
                name: "Vitamin E",
                amount: 1.94,
                unit: "mg",
                percentOfDailyNeeds: 12.91,
              },
              {
                name: "Potassium",
                amount: 330.78,
                unit: "mg",
                percentOfDailyNeeds: 9.45,
              },
              {
                name: "Vitamin B6",
                amount: 0.15,
                unit: "mg",
                percentOfDailyNeeds: 7.68,
              },
              {
                name: "Magnesium",
                amount: 29.69,
                unit: "mg",
                percentOfDailyNeeds: 7.42,
              },
              {
                name: "Vitamin B3",
                amount: 1.29,
                unit: "mg",
                percentOfDailyNeeds: 6.45,
              },
              {
                name: "Iron",
                amount: 0.83,
                unit: "mg",
                percentOfDailyNeeds: 4.59,
              },
              {
                name: "Vitamin B5",
                amount: 0.45,
                unit: "mg",
                percentOfDailyNeeds: 4.53,
              },
              {
                name: "Calcium",
                amount: 42.81,
                unit: "mg",
                percentOfDailyNeeds: 4.28,
              },
              {
                name: "Vitamin B2",
                amount: 0.07,
                unit: "mg",
                percentOfDailyNeeds: 4.04,
              },
              {
                name: "Zinc",
                amount: 0.58,
                unit: "mg",
                percentOfDailyNeeds: 3.83,
              },
              {
                name: "Phosphorus",
                amount: 35.64,
                unit: "mg",
                percentOfDailyNeeds: 3.56,
              },
              {
                name: "Vitamin B1",
                amount: 0.05,
                unit: "mg",
                percentOfDailyNeeds: 3.28,
              },
              {
                name: "Selenium",
                amount: 0.97,
                unit: "µg",
                percentOfDailyNeeds: 1.38,
              },
            ],
            properties: [
              {
                name: "Glycemic Index",
                amount: 54.38,
                unit: "",
              },
              {
                name: "Glycemic Load",
                amount: 8.11,
                unit: "",
              },
            ],
            flavonoids: [
              {
                name: "Cyanidin",
                amount: 85.11,
                unit: "mg",
              },
              {
                name: "Petunidin",
                amount: 0,
                unit: "mg",
              },
              {
                name: "Delphinidin",
                amount: 0.02,
                unit: "mg",
              },
              {
                name: "Malvidin",
                amount: 0,
                unit: "mg",
              },
              {
                name: "Pelargonidin",
                amount: 0.4,
                unit: "mg",
              },
              {
                name: "Peonidin",
                amount: 0.18,
                unit: "mg",
              },
              {
                name: "Catechin",
                amount: 33.3,
                unit: "mg",
              },
              {
                name: "Epigallocatechin",
                amount: 0.09,
                unit: "mg",
              },
              {
                name: "Epicatechin",
                amount: 3.96,
                unit: "mg",
              },
              {
                name: "Epicatechin 3-gallate",
                amount: 0,
                unit: "mg",
              },
              {
                name: "Epigallocatechin 3-gallate",
                amount: 0.58,
                unit: "mg",
              },
              {
                name: "Theaflavin",
                amount: 0,
                unit: "",
              },
              {
                name: "Thearubigins",
                amount: 0,
                unit: "",
              },
              {
                name: "Eriodictyol",
                amount: 0.86,
                unit: "mg",
              },
              {
                name: "Hesperetin",
                amount: 0.81,
                unit: "mg",
              },
              {
                name: "Naringenin",
                amount: 0.03,
                unit: "mg",
              },
              {
                name: "Apigenin",
                amount: 0.15,
                unit: "mg",
              },
              {
                name: "Luteolin",
                amount: 0.34,
                unit: "mg",
              },
              {
                name: "Isorhamnetin",
                amount: 0,
                unit: "mg",
              },
              {
                name: "Kaempferol",
                amount: 0.28,
                unit: "mg",
              },
              {
                name: "Myricetin",
                amount: 0.63,
                unit: "mg",
              },
              {
                name: "Quercetin",
                amount: 3.07,
                unit: "mg",
              },
              {
                name: "Theaflavin-3,3'-digallate",
                amount: 0,
                unit: "",
              },
              {
                name: "Theaflavin-3'-gallate",
                amount: 0,
                unit: "",
              },
              {
                name: "Theaflavin-3-gallate",
                amount: 0,
                unit: "",
              },
              {
                name: "Gallocatechin",
                amount: 0,
                unit: "mg",
              },
            ],
            ingredients: [
              {
                id: 9042,
                name: "blackberries",
                amount: 3,
                unit: "ounces",
                nutrients: [
                  {
                    name: "Folic Acid",
                    amount: 0,
                    unit: "µg",
                  },
                  {
                    name: "Vitamin E",
                    amount: 1,
                    unit: "mg",
                  },
                  {
                    name: "Vitamin B2",
                    amount: 0.02,
                    unit: "mg",
                  },
                  {
                    name: "Fiber",
                    amount: 4.51,
                    unit: "g",
                  },
                  {
                    name: "Mono Unsaturated Fat",
                    amount: 0.04,
                    unit: "g",
                  },
                  {
                    name: "Net Carbohydrates",
                    amount: 3.67,
                    unit: "g",
                  },
                  {
                    name: "Fat",
                    amount: 0.42,
                    unit: "g",
                  },
                  {
                    name: "Vitamin B12",
                    amount: 0,
                    unit: "µg",
                  },
                  {
                    name: "Manganese",
                    amount: 0.55,
                    unit: "mg",
                  },
                  {
                    name: "Lycopene",
                    amount: 0,
                    unit: "µg",
                  },
                  {
                    name: "Sugar",
                    amount: 4.15,
                    unit: "g",
                  },
                  {
                    name: "Potassium",
                    amount: 137.78,
                    unit: "mg",
                  },
                  {
                    name: "Folate",
                    amount: 21.26,
                    unit: "µg",
                  },
                  {
                    name: "Vitamin K",
                    amount: 16.84,
                    unit: "µg",
                  },
                  {
                    name: "Zinc",
                    amount: 0.45,
                    unit: "mg",
                  },
                  {
                    name: "Phosphorus",
                    amount: 18.71,
                    unit: "mg",
                  },
                  {
                    name: "Iron",
                    amount: 0.53,
                    unit: "mg",
                  },
                  {
                    name: "Vitamin B6",
                    amount: 0.03,
                    unit: "mg",
                  },
                  {
                    name: "Vitamin B3",
                    amount: 0.55,
                    unit: "mg",
                  },
                  {
                    name: "Vitamin C",
                    amount: 17.86,
                    unit: "mg",
                  },
                  {
                    name: "Cholesterol",
                    amount: 0,
                    unit: "mg",
                  },
                  {
                    name: "Magnesium",
                    amount: 17.01,
                    unit: "mg",
                  },
                  {
                    name: "Choline",
                    amount: 7.23,
                    unit: "mg",
                  },
                  {
                    name: "Vitamin D",
                    amount: 0,
                    unit: "µg",
                  },
                  {
                    name: "Vitamin B5",
                    amount: 0.23,
                    unit: "mg",
                  },
                  {
                    name: "Protein",
                    amount: 1.18,
                    unit: "g",
                  },
                  {
                    name: "Calories",
                    amount: 36.57,
                    unit: "kcal",
                  },
                  {
                    name: "Sodium",
                    amount: 0.85,
                    unit: "mg",
                  },
                  {
                    name: "Vitamin B1",
                    amount: 0.02,
                    unit: "mg",
                  },
                  {
                    name: "Poly Unsaturated Fat",
                    amount: 0.24,
                    unit: "g",
                  },
                  {
                    name: "Copper",
                    amount: 0.14,
                    unit: "mg",
                  },
                  {
                    name: "Calcium",
                    amount: 24.66,
                    unit: "mg",
                  },
                  {
                    name: "Saturated Fat",
                    amount: 0.01,
                    unit: "g",
                  },
                  {
                    name: "Vitamin A",
                    amount: 182,
                    unit: "IU",
                  },
                  {
                    name: "Carbohydrates",
                    amount: 8.17,
                    unit: "g",
                  },
                  {
                    name: "Selenium",
                    amount: 0.34,
                    unit: "µg",
                  },
                  {
                    name: "Alcohol",
                    amount: 0,
                    unit: "g",
                  },
                  {
                    name: "Caffeine",
                    amount: 0,
                    unit: "mg",
                  },
                ],
              },
              {
                id: 9176,
                name: "mango",
                amount: 0.5,
                unit: "large",
                nutrients: [
                  {
                    name: "Folic Acid",
                    amount: 0,
                    unit: "µg",
                  },
                  {
                    name: "Vitamin E",
                    amount: 0.93,
                    unit: "mg",
                  },
                  {
                    name: "Vitamin B2",
                    amount: 0.04,
                    unit: "mg",
                  },
                  {
                    name: "Fiber",
                    amount: 1.66,
                    unit: "g",
                  },
                  {
                    name: "Mono Unsaturated Fat",
                    amount: 0.14,
                    unit: "g",
                  },
                  {
                    name: "Net Carbohydrates",
                    amount: 13.87,
                    unit: "g",
                  },
                  {
                    name: "Fat",
                    amount: 0.39,
                    unit: "g",
                  },
                  {
                    name: "Vitamin B12",
                    amount: 0,
                    unit: "µg",
                  },
                  {
                    name: "Manganese",
                    amount: 0.07,
                    unit: "mg",
                  },
                  {
                    name: "Lycopene",
                    amount: 3.11,
                    unit: "µg",
                  },
                  {
                    name: "Sugar",
                    amount: 14.18,
                    unit: "g",
                  },
                  {
                    name: "Potassium",
                    amount: 173.88,
                    unit: "mg",
                  },
                  {
                    name: "Folate",
                    amount: 44.51,
                    unit: "µg",
                  },
                  {
                    name: "Vitamin K",
                    amount: 4.35,
                    unit: "µg",
                  },
                  {
                    name: "Zinc",
                    amount: 0.09,
                    unit: "mg",
                  },
                  {
                    name: "Phosphorus",
                    amount: 14.49,
                    unit: "mg",
                  },
                  {
                    name: "Iron",
                    amount: 0.17,
                    unit: "mg",
                  },
                  {
                    name: "Vitamin B6",
                    amount: 0.12,
                    unit: "mg",
                  },
                  {
                    name: "Vitamin B3",
                    amount: 0.69,
                    unit: "mg",
                  },
                  {
                    name: "Vitamin C",
                    amount: 37.67,
                    unit: "mg",
                  },
                  {
                    name: "Cholesterol",
                    amount: 0,
                    unit: "mg",
                  },
                  {
                    name: "Magnesium",
                    amount: 10.35,
                    unit: "mg",
                  },
                  {
                    name: "Choline",
                    amount: 7.87,
                    unit: "mg",
                  },
                  {
                    name: "Vitamin D",
                    amount: 0,
                    unit: "µg",
                  },
                  {
                    name: "Vitamin B5",
                    amount: 0.2,
                    unit: "mg",
                  },
                  {
                    name: "Protein",
                    amount: 0.85,
                    unit: "g",
                  },
                  {
                    name: "Calories",
                    amount: 62.1,
                    unit: "kcal",
                  },
                  {
                    name: "Sodium",
                    amount: 1.03,
                    unit: "mg",
                  },
                  {
                    name: "Vitamin B1",
                    amount: 0.03,
                    unit: "mg",
                  },
                  {
                    name: "Poly Unsaturated Fat",
                    amount: 0.07,
                    unit: "g",
                  },
                  {
                    name: "Copper",
                    amount: 0.11,
                    unit: "mg",
                  },
                  {
                    name: "Calcium",
                    amount: 11.39,
                    unit: "mg",
                  },
                  {
                    name: "Saturated Fat",
                    amount: 0.1,
                    unit: "g",
                  },
                  {
                    name: "Vitamin A",
                    amount: 1119.87,
                    unit: "IU",
                  },
                  {
                    name: "Carbohydrates",
                    amount: 15.53,
                    unit: "g",
                  },
                  {
                    name: "Selenium",
                    amount: 0.62,
                    unit: "µg",
                  },
                  {
                    name: "Alcohol",
                    amount: 0,
                    unit: "g",
                  },
                  {
                    name: "Caffeine",
                    amount: 0,
                    unit: "mg",
                  },
                ],
              },
              {
                id: 1009159,
                name: "lime zest",
                amount: 0.25,
                unit: "teaspoon",
                nutrients: [
                  {
                    name: "Folic Acid",
                    amount: 0,
                    unit: "µg",
                  },
                  {
                    name: "Vitamin E",
                    amount: 0,
                    unit: "mg",
                  },
                  {
                    name: "Vitamin B2",
                    amount: 0,
                    unit: "mg",
                  },
                  {
                    name: "Fiber",
                    amount: 0.01,
                    unit: "g",
                  },
                  {
                    name: "Mono Unsaturated Fat",
                    amount: 0,
                    unit: "g",
                  },
                  {
                    name: "Net Carbohydrates",
                    amount: 0.04,
                    unit: "g",
                  },
                  {
                    name: "Fat",
                    amount: 0,
                    unit: "g",
                  },
                  {
                    name: "Vitamin B12",
                    amount: 0,
                    unit: "µg",
                  },
                  {
                    name: "Manganese",
                    amount: 0,
                    unit: "mg",
                  },
                  {
                    name: "Lycopene",
                    amount: 0,
                    unit: "µg",
                  },
                  {
                    name: "Sugar",
                    amount: 0.01,
                    unit: "g",
                  },
                  {
                    name: "Potassium",
                    amount: 0.51,
                    unit: "mg",
                  },
                  {
                    name: "Folate",
                    amount: 0.04,
                    unit: "µg",
                  },
                  {
                    name: "Vitamin K",
                    amount: 0,
                    unit: "µg",
                  },
                  {
                    name: "Zinc",
                    amount: 0,
                    unit: "mg",
                  },
                  {
                    name: "Phosphorus",
                    amount: 0.09,
                    unit: "mg",
                  },
                  {
                    name: "Iron",
                    amount: 0,
                    unit: "mg",
                  },
                  {
                    name: "Vitamin B6",
                    amount: 0,
                    unit: "mg",
                  },
                  {
                    name: "Vitamin B3",
                    amount: 0,
                    unit: "mg",
                  },
                  {
                    name: "Vitamin C",
                    amount: 0.15,
                    unit: "mg",
                  },
                  {
                    name: "Cholesterol",
                    amount: 0,
                    unit: "mg",
                  },
                  {
                    name: "Magnesium",
                    amount: 0.03,
                    unit: "mg",
                  },
                  {
                    name: "Choline",
                    amount: 0.03,
                    unit: "mg",
                  },
                  {
                    name: "Vitamin D",
                    amount: 0,
                    unit: "µg",
                  },
                  {
                    name: "Vitamin B5",
                    amount: 0,
                    unit: "mg",
                  },
                  {
                    name: "Protein",
                    amount: 0,
                    unit: "g",
                  },
                  {
                    name: "Calories",
                    amount: 0.15,
                    unit: "kcal",
                  },
                  {
                    name: "Sodium",
                    amount: 0.01,
                    unit: "mg",
                  },
                  {
                    name: "Vitamin B1",
                    amount: 0,
                    unit: "mg",
                  },
                  {
                    name: "Poly Unsaturated Fat",
                    amount: 0,
                    unit: "g",
                  },
                  {
                    name: "Copper",
                    amount: 0,
                    unit: "mg",
                  },
                  {
                    name: "Calcium",
                    amount: 0.17,
                    unit: "mg",
                  },
                  {
                    name: "Saturated Fat",
                    amount: 0,
                    unit: "g",
                  },
                  {
                    name: "Vitamin A",
                    amount: 0.25,
                    unit: "IU",
                  },
                  {
                    name: "Carbohydrates",
                    amount: 0.05,
                    unit: "g",
                  },
                  {
                    name: "Selenium",
                    amount: 0,
                    unit: "µg",
                  },
                  {
                    name: "Alcohol",
                    amount: 0,
                    unit: "g",
                  },
                  {
                    name: "Caffeine",
                    amount: 0,
                    unit: "mg",
                  },
                ],
              },
              {
                id: 9160,
                name: "lime juice",
                amount: 0.75,
                unit: "teaspoons",
                nutrients: [
                  {
                    name: "Folic Acid",
                    amount: 0,
                    unit: "µg",
                  },
                  {
                    name: "Vitamin E",
                    amount: 0.01,
                    unit: "mg",
                  },
                  {
                    name: "Vitamin B2",
                    amount: 0,
                    unit: "mg",
                  },
                  {
                    name: "Fiber",
                    amount: 0.02,
                    unit: "g",
                  },
                  {
                    name: "Mono Unsaturated Fat",
                    amount: 0,
                    unit: "g",
                  },
                  {
                    name: "Net Carbohydrates",
                    amount: 0.3,
                    unit: "g",
                  },
                  {
                    name: "Fat",
                    amount: 0,
                    unit: "g",
                  },
                  {
                    name: "Vitamin B12",
                    amount: 0,
                    unit: "µg",
                  },
                  {
                    name: "Manganese",
                    amount: 0,
                    unit: "mg",
                  },
                  {
                    name: "Lycopene",
                    amount: 0,
                    unit: "µg",
                  },
                  {
                    name: "Sugar",
                    amount: 0.06,
                    unit: "g",
                  },
                  {
                    name: "Potassium",
                    amount: 4.39,
                    unit: "mg",
                  },
                  {
                    name: "Folate",
                    amount: 0.38,
                    unit: "µg",
                  },
                  {
                    name: "Vitamin K",
                    amount: 0.02,
                    unit: "µg",
                  },
                  {
                    name: "Zinc",
                    amount: 0,
                    unit: "mg",
                  },
                  {
                    name: "Phosphorus",
                    amount: 0.53,
                    unit: "mg",
                  },
                  {
                    name: "Iron",
                    amount: 0,
                    unit: "mg",
                  },
                  {
                    name: "Vitamin B6",
                    amount: 0,
                    unit: "mg",
                  },
                  {
                    name: "Vitamin B3",
                    amount: 0.01,
                    unit: "mg",
                  },
                  {
                    name: "Vitamin C",
                    amount: 1.13,
                    unit: "mg",
                  },
                  {
                    name: "Cholesterol",
                    amount: 0,
                    unit: "mg",
                  },
                  {
                    name: "Magnesium",
                    amount: 0.3,
                    unit: "mg",
                  },
                  {
                    name: "Choline",
                    amount: 0.19,
                    unit: "mg",
                  },
                  {
                    name: "Vitamin D",
                    amount: 0,
                    unit: "µg",
                  },
                  {
                    name: "Vitamin B5",
                    amount: 0,
                    unit: "mg",
                  },
                  {
                    name: "Protein",
                    amount: 0.02,
                    unit: "g",
                  },
                  {
                    name: "Calories",
                    amount: 0.94,
                    unit: "kcal",
                  },
                  {
                    name: "Sodium",
                    amount: 0.08,
                    unit: "mg",
                  },
                  {
                    name: "Vitamin B1",
                    amount: 0,
                    unit: "mg",
                  },
                  {
                    name: "Poly Unsaturated Fat",
                    amount: 0,
                    unit: "g",
                  },
                  {
                    name: "Copper",
                    amount: 0,
                    unit: "mg",
                  },
                  {
                    name: "Calcium",
                    amount: 0.53,
                    unit: "mg",
                  },
                  {
                    name: "Saturated Fat",
                    amount: 0,
                    unit: "g",
                  },
                  {
                    name: "Vitamin A",
                    amount: 1.88,
                    unit: "IU",
                  },
                  {
                    name: "Carbohydrates",
                    amount: 0.32,
                    unit: "g",
                  },
                  {
                    name: "Selenium",
                    amount: 0,
                    unit: "µg",
                  },
                  {
                    name: "Alcohol",
                    amount: 0,
                    unit: "g",
                  },
                  {
                    name: "Caffeine",
                    amount: 0,
                    unit: "mg",
                  },
                ],
              },
              {
                id: 2064,
                name: "fresh mint",
                amount: 0.5,
                unit: "tablespoon",
                nutrients: [
                  {
                    name: "Folic Acid",
                    amount: 0,
                    unit: "µg",
                  },
                  {
                    name: "Vitamin B2",
                    amount: 0.01,
                    unit: "mg",
                  },
                  {
                    name: "Fiber",
                    amount: 0.2,
                    unit: "g",
                  },
                  {
                    name: "Mono Unsaturated Fat",
                    amount: 0,
                    unit: "g",
                  },
                  {
                    name: "Net Carbohydrates",
                    amount: 0.17,
                    unit: "g",
                  },
                  {
                    name: "Fat",
                    amount: 0.02,
                    unit: "g",
                  },
                  {
                    name: "Vitamin B12",
                    amount: 0,
                    unit: "µg",
                  },
                  {
                    name: "Manganese",
                    amount: 0.03,
                    unit: "mg",
                  },
                  {
                    name: "Potassium",
                    amount: 14.23,
                    unit: "mg",
                  },
                  {
                    name: "Folate",
                    amount: 2.85,
                    unit: "µg",
                  },
                  {
                    name: "Zinc",
                    amount: 0.03,
                    unit: "mg",
                  },
                  {
                    name: "Phosphorus",
                    amount: 1.83,
                    unit: "mg",
                  },
                  {
                    name: "Iron",
                    amount: 0.13,
                    unit: "mg",
                  },
                  {
                    name: "Vitamin B6",
                    amount: 0,
                    unit: "mg",
                  },
                  {
                    name: "Vitamin B3",
                    amount: 0.04,
                    unit: "mg",
                  },
                  {
                    name: "Vitamin C",
                    amount: 0.8,
                    unit: "mg",
                  },
                  {
                    name: "Cholesterol",
                    amount: 0,
                    unit: "mg",
                  },
                  {
                    name: "Magnesium",
                    amount: 2,
                    unit: "mg",
                  },
                  {
                    name: "Vitamin D",
                    amount: 0,
                    unit: "µg",
                  },
                  {
                    name: "Vitamin B5",
                    amount: 0.01,
                    unit: "mg",
                  },
                  {
                    name: "Protein",
                    amount: 0.09,
                    unit: "g",
                  },
                  {
                    name: "Calories",
                    amount: 1.75,
                    unit: "kcal",
                  },
                  {
                    name: "Sodium",
                    amount: 0.78,
                    unit: "mg",
                  },
                  {
                    name: "Vitamin B1",
                    amount: 0,
                    unit: "mg",
                  },
                  {
                    name: "Poly Unsaturated Fat",
                    amount: 0.01,
                    unit: "g",
                  },
                  {
                    name: "Copper",
                    amount: 0.01,
                    unit: "mg",
                  },
                  {
                    name: "Calcium",
                    amount: 6.08,
                    unit: "mg",
                  },
                  {
                    name: "Saturated Fat",
                    amount: 0.01,
                    unit: "g",
                  },
                  {
                    name: "Vitamin A",
                    amount: 106.2,
                    unit: "IU",
                  },
                  {
                    name: "Carbohydrates",
                    amount: 0.37,
                    unit: "g",
                  },
                ],
              },
            ],
            caloricBreakdown: {
              percentProtein: 7.53,
              percentFat: 6.62,
              percentCarbs: 85.85,
            },
            weightPerServing: {
              amount: 195,
              unit: "g",
            },
          },
          summary:
            'Forget going out to eat or ordering takeout every time you crave Mexican food. Try making Mango Blackberry Side Salad at home. One serving contains <b>102 calories</b>, <b>2g of protein</b>, and <b>1g of fat</b>. This gluten free, dairy free, paleolithic, and lacto ovo vegetarian recipe serves 2 and costs <b>$1.64 per serving</b>. If you have blackberries, mango, fresh mint, and a few other ingredients on hand, you can make it. Not a lot of people made this recipe, and 1 would say it hit the spot. It works well as a reasonably priced hor d\'oeuvre. It is brought to you by Foodista. From preparation to the plate, this recipe takes roughly <b>5 minutes</b>. Overall, this recipe earns an <b>awesome spoonacular score of 85%</b>. If you like this recipe, take a look at these similar recipes: <a href="https://spoonacular.com/recipes/green-mango-salad-thai-side-dish-645474">Green Mango Salad - Thai Side Dish</a>, <a href="https://spoonacular.com/recipes/mango-and-blackberry-salad-with-mozzarella-and-frisee-1257193">Mango and Blackberry Salad with Mozzarellan and Frisee</a>, and <a href="https://spoonacular.com/recipes/mango-and-blackberry-salad-with-mozzarella-and-frisee-96778">Mango and Blackberry Salad with Mozzarellan and Frisee</a>.',
          cuisines: ["Mexican"],
          dishTypes: [
            "side dish",
            "antipasti",
            "salad",
            "starter",
            "snack",
            "appetizer",
            "antipasto",
            "hor d'oeuvre",
          ],
          diets: [
            "gluten free",
            "dairy free",
            "paleolithic",
            "lacto ovo vegetarian",
            "primal",
            "vegan",
          ],
          occasions: [],
          analyzedInstructions: [
            {
              name: "",
              steps: [
                {
                  number: 1,
                  step: "Mix all the ingredients together in a medium-sized bowl then serve.",
                  ingredients: [],
                  equipment: [
                    {
                      id: 404783,
                      name: "bowl",
                      localizedName: "bowl",
                      image: "bowl.jpg",
                    },
                  ],
                },
              ],
            },
          ],
          spoonacularSourceUrl:
            "https://spoonacular.com/mango-blackberry-side-salad-1096279",
          usedIngredientCount: 0,
          missedIngredientCount: 5,
          missedIngredients: [
            {
              id: 9042,
              amount: 6,
              unit: "ounces",
              unitLong: "ounces",
              unitShort: "oz",
              aisle: "Produce",
              name: "blackberries",
              original: "6 ounces blackberries",
              originalName: "blackberries",
              meta: [],
              image:
                "https://spoonacular.com/cdn/ingredients_100x100/blackberries.jpg",
            },
            {
              id: 9176,
              amount: 1,
              unit: "large",
              unitLong: "large",
              unitShort: "large",
              aisle: "Produce",
              name: "mango",
              original: "1 large mango, diced",
              originalName: "mango, diced",
              meta: ["diced"],
              extendedName: "diced mango",
              image:
                "https://spoonacular.com/cdn/ingredients_100x100/mango.jpg",
            },
            {
              id: 1009159,
              amount: 0.5,
              unit: "teaspoon",
              unitLong: "teaspoons",
              unitShort: "tsp",
              aisle: "Produce",
              name: "lime zest",
              original: "½ teaspoon lime zest",
              originalName: "lime zest",
              meta: [],
              image:
                "https://spoonacular.com/cdn/ingredients_100x100/zest-lime.jpg",
            },
            {
              id: 9160,
              amount: 1.5,
              unit: "teaspoons",
              unitLong: "teaspoons",
              unitShort: "tsp",
              aisle: "Produce",
              name: "lime juice",
              original: "1 ½ teaspoons lime juice",
              originalName: "lime juice",
              meta: [],
              image:
                "https://spoonacular.com/cdn/ingredients_100x100/lime-juice.png",
            },
            {
              id: 2064,
              amount: 1,
              unit: "tablespoon",
              unitLong: "tablespoon",
              unitShort: "Tbsp",
              aisle: "Produce;Spices and Seasonings",
              name: "fresh mint",
              original: "1 tablespoon finely chopped fresh mint",
              originalName: "finely chopped fresh mint",
              meta: ["fresh", "finely chopped"],
              image: "https://spoonacular.com/cdn/ingredients_100x100/mint.jpg",
            },
          ],
          likes: 0,
          usedIngredients: [],
          unusedIngredients: [],
        },
        {
          vegetarian: true,
          vegan: false,
          glutenFree: true,
          dairyFree: false,
          veryHealthy: false,
          cheap: false,
          veryPopular: false,
          sustainable: false,
          weightWatcherSmartPoints: 7,
          gaps: "no",
          lowFodmap: false,
          preparationMinutes: 10,
          cookingMinutes: 0,
          aggregateLikes: 1,
          spoonacularScore: 46,
          healthScore: 8,
          creditsText: "Jen West",
          sourceName: "Pink When",
          pricePerServing: 126.06,
          extendedIngredients: [
            {
              id: 12108,
              aisle: "Baking",
              image: "shredded-coconut.jpg",
              consistency: "solid",
              name: "coconut flakes",
              nameClean: "unsweetened coconut",
              original: "coconut flakes",
              originalName: "coconut flakes",
              amount: 2,
              unit: "servings",
              meta: [],
              measures: {
                us: {
                  amount: 2,
                  unitShort: "servings",
                  unitLong: "servings",
                },
                metric: {
                  amount: 2,
                  unitShort: "servings",
                  unitLong: "servings",
                },
              },
            },
            {
              id: 9176,
              aisle: "Produce",
              image: "mango.jpg",
              consistency: "solid",
              name: "mango",
              nameClean: "mango",
              original: "1/2 cup frozen mango",
              originalName: "frozen mango",
              amount: 0.5,
              unit: "cup",
              meta: ["frozen"],
              measures: {
                us: {
                  amount: 0.5,
                  unitShort: "cups",
                  unitLong: "cups",
                },
                metric: {
                  amount: 118.294,
                  unitShort: "ml",
                  unitLong: "milliliters",
                },
              },
            },
            {
              id: 9328,
              aisle: "Canned and Jarred",
              image: "maraschino.jpg",
              consistency: "solid",
              name: "maraschino cherry",
              nameClean: "maraschino cherries",
              original: "1 maraschino cherry",
              originalName: "maraschino cherry",
              amount: 1,
              unit: "",
              meta: [],
              measures: {
                us: {
                  amount: 1,
                  unitShort: "",
                  unitLong: "",
                },
                metric: {
                  amount: 1,
                  unitShort: "",
                  unitLong: "",
                },
              },
            },
            {
              id: 1077,
              aisle: "Milk, Eggs, Other Dairy",
              image: "milk.png",
              consistency: "liquid",
              name: "milk",
              nameClean: "milk",
              original: "1/2 cup milk",
              originalName: "milk",
              amount: 0.5,
              unit: "cup",
              meta: [],
              measures: {
                us: {
                  amount: 0.5,
                  unitShort: "cups",
                  unitLong: "cups",
                },
                metric: {
                  amount: 118.294,
                  unitShort: "ml",
                  unitLong: "milliliters",
                },
              },
            },
            {
              id: 9266,
              aisle: "Produce",
              image: "pineapple.jpg",
              consistency: "solid",
              name: "pineapple",
              nameClean: "pineapple",
              original: "1/2 cup frozen pineapple",
              originalName: "frozen pineapple",
              amount: 0.5,
              unit: "cup",
              meta: ["frozen"],
              measures: {
                us: {
                  amount: 0.5,
                  unitShort: "cups",
                  unitLong: "cups",
                },
                metric: {
                  amount: 118.294,
                  unitShort: "ml",
                  unitLong: "milliliters",
                },
              },
            },
            {
              id: 99033,
              aisle: "Milk, Eggs, Other Dairy",
              image: "vanilla-yogurt.png",
              consistency: "liquid",
              name: "skim vanilla greek yogurt",
              nameClean: "fat free vanilla greek yogurt",
              original: "1/2 cup vanilla greek yogurt",
              originalName: "vanilla greek yogurt",
              amount: 0.5,
              unit: "cup",
              meta: [],
              measures: {
                us: {
                  amount: 0.5,
                  unitShort: "cups",
                  unitLong: "cups",
                },
                metric: {
                  amount: 118.294,
                  unitShort: "ml",
                  unitLong: "milliliters",
                },
              },
            },
          ],
          id: 1018582,
          title: "Delicious Mango Pineapple Smoothie",
          readyInMinutes: 10,
          servings: 2,
          sourceUrl:
            "https://www.pinkwhen.com/delicious-mango-pineapple-smoothie-recipe/",
          image: "https://spoonacular.com/recipeImages/1018582-312x231.jpg",
          imageType: "jpg",
          nutrition: {
            nutrients: [
              {
                name: "Calories",
                amount: 197.5,
                unit: "kcal",
                percentOfDailyNeeds: 9.88,
              },
              {
                name: "Fat",
                amount: 8.62,
                unit: "g",
                percentOfDailyNeeds: 13.26,
              },
              {
                name: "Saturated Fat",
                amount: 6.9,
                unit: "g",
                percentOfDailyNeeds: 43.12,
              },
              {
                name: "Carbohydrates",
                amount: 25.04,
                unit: "g",
                percentOfDailyNeeds: 8.35,
              },
              {
                name: "Net Carbohydrates",
                amount: 22.09,
                unit: "g",
                percentOfDailyNeeds: 8.03,
              },
              {
                name: "Sugar",
                amount: 21.16,
                unit: "g",
                percentOfDailyNeeds: 23.51,
              },
              {
                name: "Cholesterol",
                amount: 9.21,
                unit: "mg",
                percentOfDailyNeeds: 3.07,
              },
              {
                name: "Sodium",
                amount: 44.83,
                unit: "mg",
                percentOfDailyNeeds: 1.95,
              },
              {
                name: "Protein",
                amount: 7.8,
                unit: "g",
                percentOfDailyNeeds: 15.59,
              },
              {
                name: "Vitamin C",
                amount: 34.88,
                unit: "mg",
                percentOfDailyNeeds: 42.28,
              },
              {
                name: "Manganese",
                amount: 0.69,
                unit: "mg",
                percentOfDailyNeeds: 34.28,
              },
              {
                name: "Fiber",
                amount: 2.95,
                unit: "g",
                percentOfDailyNeeds: 11.79,
              },
              {
                name: "Vitamin A",
                amount: 570.2,
                unit: "IU",
                percentOfDailyNeeds: 11.4,
              },
              {
                name: "Phosphorus",
                amount: 91.36,
                unit: "mg",
                percentOfDailyNeeds: 9.14,
              },
              {
                name: "Calcium",
                amount: 89.45,
                unit: "mg",
                percentOfDailyNeeds: 8.94,
              },
              {
                name: "Potassium",
                amount: 311.66,
                unit: "mg",
                percentOfDailyNeeds: 8.9,
              },
              {
                name: "Copper",
                amount: 0.17,
                unit: "mg",
                percentOfDailyNeeds: 8.75,
              },
              {
                name: "Vitamin B6",
                amount: 0.16,
                unit: "mg",
                percentOfDailyNeeds: 8.13,
              },
              {
                name: "Vitamin B2",
                amount: 0.12,
                unit: "mg",
                percentOfDailyNeeds: 7.24,
              },
              {
                name: "Folate",
                amount: 26.06,
                unit: "µg",
                percentOfDailyNeeds: 6.52,
              },
              {
                name: "Magnesium",
                amount: 25.5,
                unit: "mg",
                percentOfDailyNeeds: 6.37,
              },
              {
                name: "Vitamin B1",
                amount: 0.08,
                unit: "mg",
                percentOfDailyNeeds: 5.62,
              },
              {
                name: "Vitamin B12",
                amount: 0.33,
                unit: "µg",
                percentOfDailyNeeds: 5.49,
              },
              {
                name: "Vitamin B5",
                amount: 0.48,
                unit: "mg",
                percentOfDailyNeeds: 4.78,
              },
              {
                name: "Selenium",
                amount: 3.3,
                unit: "µg",
                percentOfDailyNeeds: 4.72,
              },
              {
                name: "Vitamin D",
                amount: 0.67,
                unit: "µg",
                percentOfDailyNeeds: 4.47,
              },
              {
                name: "Zinc",
                amount: 0.54,
                unit: "mg",
                percentOfDailyNeeds: 3.63,
              },
              {
                name: "Vitamin E",
                amount: 0.46,
                unit: "mg",
                percentOfDailyNeeds: 3.04,
              },
              {
                name: "Vitamin B3",
                amount: 0.61,
                unit: "mg",
                percentOfDailyNeeds: 3.03,
              },
              {
                name: "Iron",
                amount: 0.53,
                unit: "mg",
                percentOfDailyNeeds: 2.94,
              },
              {
                name: "Vitamin K",
                amount: 2.27,
                unit: "µg",
                percentOfDailyNeeds: 2.16,
              },
            ],
            properties: [
              {
                name: "Glycemic Index",
                amount: 74.21,
                unit: "",
              },
              {
                name: "Glycemic Load",
                amount: 6.77,
                unit: "",
              },
            ],
            flavonoids: [
              {
                name: "Cyanidin",
                amount: 0.04,
                unit: "mg",
              },
              {
                name: "Petunidin",
                amount: 0,
                unit: "mg",
              },
              {
                name: "Delphinidin",
                amount: 0.01,
                unit: "mg",
              },
              {
                name: "Malvidin",
                amount: 0,
                unit: "mg",
              },
              {
                name: "Pelargonidin",
                amount: 0.01,
                unit: "mg",
              },
              {
                name: "Peonidin",
                amount: 0,
                unit: "mg",
              },
              {
                name: "Catechin",
                amount: 0.71,
                unit: "mg",
              },
              {
                name: "Epigallocatechin",
                amount: 0,
                unit: "mg",
              },
              {
                name: "Epicatechin",
                amount: 0,
                unit: "mg",
              },
              {
                name: "Epicatechin 3-gallate",
                amount: 0,
                unit: "mg",
              },
              {
                name: "Epigallocatechin 3-gallate",
                amount: 0,
                unit: "mg",
              },
              {
                name: "Theaflavin",
                amount: 0,
                unit: "",
              },
              {
                name: "Thearubigins",
                amount: 0,
                unit: "",
              },
              {
                name: "Eriodictyol",
                amount: 0,
                unit: "",
              },
              {
                name: "Hesperetin",
                amount: 0,
                unit: "mg",
              },
              {
                name: "Naringenin",
                amount: 0,
                unit: "mg",
              },
              {
                name: "Apigenin",
                amount: 0,
                unit: "mg",
              },
              {
                name: "Luteolin",
                amount: 0.01,
                unit: "mg",
              },
              {
                name: "Isorhamnetin",
                amount: 0,
                unit: "",
              },
              {
                name: "Kaempferol",
                amount: 0.02,
                unit: "mg",
              },
              {
                name: "Myricetin",
                amount: 0.03,
                unit: "mg",
              },
              {
                name: "Quercetin",
                amount: 0.06,
                unit: "mg",
              },
              {
                name: "Theaflavin-3,3'-digallate",
                amount: 0,
                unit: "",
              },
              {
                name: "Theaflavin-3'-gallate",
                amount: 0,
                unit: "",
              },
              {
                name: "Theaflavin-3-gallate",
                amount: 0,
                unit: "",
              },
              {
                name: "Gallocatechin",
                amount: 0,
                unit: "mg",
              },
            ],
            ingredients: [
              {
                id: 12108,
                name: "coconut flakes",
                amount: 1,
                unit: "servings",
                nutrients: [
                  {
                    name: "Folic Acid",
                    amount: 0,
                    unit: "µg",
                  },
                  {
                    name: "Vitamin E",
                    amount: 0.04,
                    unit: "mg",
                  },
                  {
                    name: "Vitamin B2",
                    amount: 0.01,
                    unit: "mg",
                  },
                  {
                    name: "Fiber",
                    amount: 1.63,
                    unit: "g",
                  },
                  {
                    name: "Mono Unsaturated Fat",
                    amount: 0.27,
                    unit: "g",
                  },
                  {
                    name: "Net Carbohydrates",
                    amount: 0.73,
                    unit: "g",
                  },
                  {
                    name: "Fat",
                    amount: 6.45,
                    unit: "g",
                  },
                  {
                    name: "Vitamin B12",
                    amount: 0,
                    unit: "µg",
                  },
                  {
                    name: "Manganese",
                    amount: 0.27,
                    unit: "mg",
                  },
                  {
                    name: "Lycopene",
                    amount: 0,
                    unit: "µg",
                  },
                  {
                    name: "Sugar",
                    amount: 0.74,
                    unit: "g",
                  },
                  {
                    name: "Potassium",
                    amount: 54.3,
                    unit: "mg",
                  },
                  {
                    name: "Folate",
                    amount: 0.9,
                    unit: "µg",
                  },
                  {
                    name: "Vitamin K",
                    amount: 0.03,
                    unit: "µg",
                  },
                  {
                    name: "Zinc",
                    amount: 0.2,
                    unit: "mg",
                  },
                  {
                    name: "Phosphorus",
                    amount: 20.6,
                    unit: "mg",
                  },
                  {
                    name: "Iron",
                    amount: 0.33,
                    unit: "mg",
                  },
                  {
                    name: "Vitamin B6",
                    amount: 0.03,
                    unit: "mg",
                  },
                  {
                    name: "Vitamin B3",
                    amount: 0.06,
                    unit: "mg",
                  },
                  {
                    name: "Vitamin C",
                    amount: 0.15,
                    unit: "mg",
                  },
                  {
                    name: "Cholesterol",
                    amount: 0,
                    unit: "mg",
                  },
                  {
                    name: "Magnesium",
                    amount: 9,
                    unit: "mg",
                  },
                  {
                    name: "Choline",
                    amount: 2.21,
                    unit: "mg",
                  },
                  {
                    name: "Vitamin D",
                    amount: 0,
                    unit: "µg",
                  },
                  {
                    name: "Vitamin B5",
                    amount: 0.08,
                    unit: "mg",
                  },
                  {
                    name: "Protein",
                    amount: 0.69,
                    unit: "g",
                  },
                  {
                    name: "Calories",
                    amount: 66,
                    unit: "kcal",
                  },
                  {
                    name: "Sodium",
                    amount: 3.7,
                    unit: "mg",
                  },
                  {
                    name: "Vitamin B1",
                    amount: 0.01,
                    unit: "mg",
                  },
                  {
                    name: "Poly Unsaturated Fat",
                    amount: 0.07,
                    unit: "g",
                  },
                  {
                    name: "Copper",
                    amount: 0.08,
                    unit: "mg",
                  },
                  {
                    name: "Calcium",
                    amount: 2.6,
                    unit: "mg",
                  },
                  {
                    name: "Saturated Fat",
                    amount: 5.72,
                    unit: "g",
                  },
                  {
                    name: "Vitamin A",
                    amount: 0,
                    unit: "IU",
                  },
                  {
                    name: "Carbohydrates",
                    amount: 2.37,
                    unit: "g",
                  },
                  {
                    name: "Selenium",
                    amount: 1.85,
                    unit: "µg",
                  },
                  {
                    name: "Alcohol",
                    amount: 0,
                    unit: "g",
                  },
                  {
                    name: "Caffeine",
                    amount: 0,
                    unit: "mg",
                  },
                ],
              },
              {
                id: 9176,
                name: "mango",
                amount: 0.25,
                unit: "cup",
                nutrients: [
                  {
                    name: "Folic Acid",
                    amount: 0,
                    unit: "µg",
                  },
                  {
                    name: "Vitamin E",
                    amount: 0.37,
                    unit: "mg",
                  },
                  {
                    name: "Vitamin B2",
                    amount: 0.02,
                    unit: "mg",
                  },
                  {
                    name: "Fiber",
                    amount: 0.66,
                    unit: "g",
                  },
                  {
                    name: "Mono Unsaturated Fat",
                    amount: 0.06,
                    unit: "g",
                  },
                  {
                    name: "Net Carbohydrates",
                    amount: 5.53,
                    unit: "g",
                  },
                  {
                    name: "Fat",
                    amount: 0.16,
                    unit: "g",
                  },
                  {
                    name: "Vitamin B12",
                    amount: 0,
                    unit: "µg",
                  },
                  {
                    name: "Manganese",
                    amount: 0.03,
                    unit: "mg",
                  },
                  {
                    name: "Lycopene",
                    amount: 1.24,
                    unit: "µg",
                  },
                  {
                    name: "Sugar",
                    amount: 5.65,
                    unit: "g",
                  },
                  {
                    name: "Potassium",
                    amount: 69.3,
                    unit: "mg",
                  },
                  {
                    name: "Folate",
                    amount: 17.74,
                    unit: "µg",
                  },
                  {
                    name: "Vitamin K",
                    amount: 1.73,
                    unit: "µg",
                  },
                  {
                    name: "Zinc",
                    amount: 0.04,
                    unit: "mg",
                  },
                  {
                    name: "Phosphorus",
                    amount: 5.78,
                    unit: "mg",
                  },
                  {
                    name: "Iron",
                    amount: 0.07,
                    unit: "mg",
                  },
                  {
                    name: "Vitamin B6",
                    amount: 0.05,
                    unit: "mg",
                  },
                  {
                    name: "Vitamin B3",
                    amount: 0.28,
                    unit: "mg",
                  },
                  {
                    name: "Vitamin C",
                    amount: 15.02,
                    unit: "mg",
                  },
                  {
                    name: "Cholesterol",
                    amount: 0,
                    unit: "mg",
                  },
                  {
                    name: "Magnesium",
                    amount: 4.13,
                    unit: "mg",
                  },
                  {
                    name: "Choline",
                    amount: 3.14,
                    unit: "mg",
                  },
                  {
                    name: "Vitamin D",
                    amount: 0,
                    unit: "µg",
                  },
                  {
                    name: "Vitamin B5",
                    amount: 0.08,
                    unit: "mg",
                  },
                  {
                    name: "Protein",
                    amount: 0.34,
                    unit: "g",
                  },
                  {
                    name: "Calories",
                    amount: 24.75,
                    unit: "kcal",
                  },
                  {
                    name: "Sodium",
                    amount: 0.41,
                    unit: "mg",
                  },
                  {
                    name: "Vitamin B1",
                    amount: 0.01,
                    unit: "mg",
                  },
                  {
                    name: "Poly Unsaturated Fat",
                    amount: 0.03,
                    unit: "g",
                  },
                  {
                    name: "Copper",
                    amount: 0.05,
                    unit: "mg",
                  },
                  {
                    name: "Calcium",
                    amount: 4.54,
                    unit: "mg",
                  },
                  {
                    name: "Saturated Fat",
                    amount: 0.04,
                    unit: "g",
                  },
                  {
                    name: "Vitamin A",
                    amount: 446.33,
                    unit: "IU",
                  },
                  {
                    name: "Carbohydrates",
                    amount: 6.19,
                    unit: "g",
                  },
                  {
                    name: "Selenium",
                    amount: 0.25,
                    unit: "µg",
                  },
                  {
                    name: "Alcohol",
                    amount: 0,
                    unit: "g",
                  },
                  {
                    name: "Caffeine",
                    amount: 0,
                    unit: "mg",
                  },
                ],
              },
              {
                id: 9328,
                name: "maraschino cherry",
                amount: 0.5,
                unit: "",
                nutrients: [
                  {
                    name: "Folic Acid",
                    amount: 0,
                    unit: "µg",
                  },
                  {
                    name: "Vitamin E",
                    amount: 0,
                    unit: "mg",
                  },
                  {
                    name: "Vitamin B2",
                    amount: 0,
                    unit: "mg",
                  },
                  {
                    name: "Fiber",
                    amount: 0.08,
                    unit: "g",
                  },
                  {
                    name: "Mono Unsaturated Fat",
                    amount: 0,
                    unit: "g",
                  },
                  {
                    name: "Net Carbohydrates",
                    amount: 0.97,
                    unit: "g",
                  },
                  {
                    name: "Fat",
                    amount: 0.01,
                    unit: "g",
                  },
                  {
                    name: "Vitamin B12",
                    amount: 0,
                    unit: "µg",
                  },
                  {
                    name: "Manganese",
                    amount: 0,
                    unit: "mg",
                  },
                  {
                    name: "Lycopene",
                    amount: 0,
                    unit: "µg",
                  },
                  {
                    name: "Sugar",
                    amount: 0.97,
                    unit: "g",
                  },
                  {
                    name: "Potassium",
                    amount: 0.53,
                    unit: "mg",
                  },
                  {
                    name: "Folate",
                    amount: 0,
                    unit: "µg",
                  },
                  {
                    name: "Vitamin K",
                    amount: 0.04,
                    unit: "µg",
                  },
                  {
                    name: "Zinc",
                    amount: 0.01,
                    unit: "mg",
                  },
                  {
                    name: "Phosphorus",
                    amount: 0.08,
                    unit: "mg",
                  },
                  {
                    name: "Iron",
                    amount: 0.01,
                    unit: "mg",
                  },
                  {
                    name: "Vitamin B6",
                    amount: 0,
                    unit: "mg",
                  },
                  {
                    name: "Vitamin B3",
                    amount: 0,
                    unit: "mg",
                  },
                  {
                    name: "Vitamin C",
                    amount: 0,
                    unit: "mg",
                  },
                  {
                    name: "Cholesterol",
                    amount: 0,
                    unit: "mg",
                  },
                  {
                    name: "Magnesium",
                    amount: 0.1,
                    unit: "mg",
                  },
                  {
                    name: "Choline",
                    amount: 0.11,
                    unit: "mg",
                  },
                  {
                    name: "Vitamin D",
                    amount: 0,
                    unit: "µg",
                  },
                  {
                    name: "Vitamin B5",
                    amount: 0,
                    unit: "mg",
                  },
                  {
                    name: "Protein",
                    amount: 0.01,
                    unit: "g",
                  },
                  {
                    name: "Calories",
                    amount: 4.13,
                    unit: "kcal",
                  },
                  {
                    name: "Sodium",
                    amount: 0.1,
                    unit: "mg",
                  },
                  {
                    name: "Vitamin B1",
                    amount: 0,
                    unit: "mg",
                  },
                  {
                    name: "Poly Unsaturated Fat",
                    amount: 0,
                    unit: "g",
                  },
                  {
                    name: "Copper",
                    amount: 0,
                    unit: "mg",
                  },
                  {
                    name: "Calcium",
                    amount: 1.35,
                    unit: "mg",
                  },
                  {
                    name: "Saturated Fat",
                    amount: 0,
                    unit: "g",
                  },
                  {
                    name: "Vitamin A",
                    amount: 1.13,
                    unit: "IU",
                  },
                  {
                    name: "Carbohydrates",
                    amount: 1.05,
                    unit: "g",
                  },
                  {
                    name: "Selenium",
                    amount: 0.01,
                    unit: "µg",
                  },
                  {
                    name: "Alcohol",
                    amount: 0,
                    unit: "g",
                  },
                  {
                    name: "Caffeine",
                    amount: 0,
                    unit: "mg",
                  },
                ],
              },
              {
                id: 1077,
                name: "milk",
                amount: 0.25,
                unit: "cup",
                nutrients: [
                  {
                    name: "Folic Acid",
                    amount: 0,
                    unit: "µg",
                  },
                  {
                    name: "Vitamin E",
                    amount: 0.03,
                    unit: "mg",
                  },
                  {
                    name: "Vitamin B2",
                    amount: 0.08,
                    unit: "mg",
                  },
                  {
                    name: "Fiber",
                    amount: 0,
                    unit: "g",
                  },
                  {
                    name: "Mono Unsaturated Fat",
                    amount: 0.42,
                    unit: "g",
                  },
                  {
                    name: "Net Carbohydrates",
                    amount: 2.85,
                    unit: "g",
                  },
                  {
                    name: "Fat",
                    amount: 1.95,
                    unit: "g",
                  },
                  {
                    name: "Vitamin B12",
                    amount: 0.33,
                    unit: "µg",
                  },
                  {
                    name: "Manganese",
                    amount: 0,
                    unit: "mg",
                  },
                  {
                    name: "Lycopene",
                    amount: 0,
                    unit: "µg",
                  },
                  {
                    name: "Sugar",
                    amount: 2.93,
                    unit: "g",
                  },
                  {
                    name: "Potassium",
                    amount: 91.5,
                    unit: "mg",
                  },
                  {
                    name: "Folate",
                    amount: 0,
                    unit: "µg",
                  },
                  {
                    name: "Vitamin K",
                    amount: 0.18,
                    unit: "µg",
                  },
                  {
                    name: "Zinc",
                    amount: 0.25,
                    unit: "mg",
                  },
                  {
                    name: "Phosphorus",
                    amount: 61.61,
                    unit: "mg",
                  },
                  {
                    name: "Iron",
                    amount: 0,
                    unit: "mg",
                  },
                  {
                    name: "Vitamin B6",
                    amount: 0.04,
                    unit: "mg",
                  },
                  {
                    name: "Vitamin B3",
                    amount: 0.06,
                    unit: "mg",
                  },
                  {
                    name: "Vitamin C",
                    amount: 0,
                    unit: "mg",
                  },
                  {
                    name: "Cholesterol",
                    amount: 7.32,
                    unit: "mg",
                  },
                  {
                    name: "Magnesium",
                    amount: 7.32,
                    unit: "mg",
                  },
                  {
                    name: "Choline",
                    amount: 10.86,
                    unit: "mg",
                  },
                  {
                    name: "Vitamin D",
                    amount: 0.67,
                    unit: "µg",
                  },
                  {
                    name: "Vitamin B5",
                    amount: 0.23,
                    unit: "mg",
                  },
                  {
                    name: "Protein",
                    amount: 2,
                    unit: "g",
                  },
                  {
                    name: "Calories",
                    amount: 36.6,
                    unit: "kcal",
                  },
                  {
                    name: "Sodium",
                    amount: 23.18,
                    unit: "mg",
                  },
                  {
                    name: "Vitamin B1",
                    amount: 0.03,
                    unit: "mg",
                  },
                  {
                    name: "Poly Unsaturated Fat",
                    amount: 0.07,
                    unit: "g",
                  },
                  {
                    name: "Copper",
                    amount: 0,
                    unit: "mg",
                  },
                  {
                    name: "Calcium",
                    amount: 75.03,
                    unit: "mg",
                  },
                  {
                    name: "Saturated Fat",
                    amount: 1.13,
                    unit: "g",
                  },
                  {
                    name: "Vitamin A",
                    amount: 98.82,
                    unit: "IU",
                  },
                  {
                    name: "Carbohydrates",
                    amount: 2.85,
                    unit: "g",
                  },
                  {
                    name: "Selenium",
                    amount: 1.16,
                    unit: "µg",
                  },
                  {
                    name: "Alcohol",
                    amount: 0,
                    unit: "g",
                  },
                  {
                    name: "Caffeine",
                    amount: 0,
                    unit: "mg",
                  },
                ],
              },
              {
                id: 9266,
                name: "pineapple",
                amount: 0.25,
                unit: "cup",
                nutrients: [
                  {
                    name: "Folic Acid",
                    amount: 0,
                    unit: "µg",
                  },
                  {
                    name: "Vitamin E",
                    amount: 0.01,
                    unit: "mg",
                  },
                  {
                    name: "Vitamin B2",
                    amount: 0.01,
                    unit: "mg",
                  },
                  {
                    name: "Fiber",
                    amount: 0.58,
                    unit: "g",
                  },
                  {
                    name: "Mono Unsaturated Fat",
                    amount: 0.01,
                    unit: "g",
                  },
                  {
                    name: "Net Carbohydrates",
                    amount: 4.83,
                    unit: "g",
                  },
                  {
                    name: "Fat",
                    amount: 0.05,
                    unit: "g",
                  },
                  {
                    name: "Vitamin B12",
                    amount: 0,
                    unit: "µg",
                  },
                  {
                    name: "Manganese",
                    amount: 0.38,
                    unit: "mg",
                  },
                  {
                    name: "Lycopene",
                    amount: 0,
                    unit: "µg",
                  },
                  {
                    name: "Sugar",
                    amount: 4.06,
                    unit: "g",
                  },
                  {
                    name: "Potassium",
                    amount: 44.96,
                    unit: "mg",
                  },
                  {
                    name: "Folate",
                    amount: 7.43,
                    unit: "µg",
                  },
                  {
                    name: "Vitamin K",
                    amount: 0.29,
                    unit: "µg",
                  },
                  {
                    name: "Zinc",
                    amount: 0.05,
                    unit: "mg",
                  },
                  {
                    name: "Phosphorus",
                    amount: 3.3,
                    unit: "mg",
                  },
                  {
                    name: "Iron",
                    amount: 0.12,
                    unit: "mg",
                  },
                  {
                    name: "Vitamin B6",
                    amount: 0.05,
                    unit: "mg",
                  },
                  {
                    name: "Vitamin B3",
                    amount: 0.21,
                    unit: "mg",
                  },
                  {
                    name: "Vitamin C",
                    amount: 19.72,
                    unit: "mg",
                  },
                  {
                    name: "Cholesterol",
                    amount: 0,
                    unit: "mg",
                  },
                  {
                    name: "Magnesium",
                    amount: 4.95,
                    unit: "mg",
                  },
                  {
                    name: "Choline",
                    amount: 2.27,
                    unit: "mg",
                  },
                  {
                    name: "Vitamin D",
                    amount: 0,
                    unit: "µg",
                  },
                  {
                    name: "Vitamin B5",
                    amount: 0.09,
                    unit: "mg",
                  },
                  {
                    name: "Protein",
                    amount: 0.22,
                    unit: "g",
                  },
                  {
                    name: "Calories",
                    amount: 20.63,
                    unit: "kcal",
                  },
                  {
                    name: "Sodium",
                    amount: 0.41,
                    unit: "mg",
                  },
                  {
                    name: "Vitamin B1",
                    amount: 0.03,
                    unit: "mg",
                  },
                  {
                    name: "Poly Unsaturated Fat",
                    amount: 0.02,
                    unit: "g",
                  },
                  {
                    name: "Copper",
                    amount: 0.05,
                    unit: "mg",
                  },
                  {
                    name: "Calcium",
                    amount: 5.36,
                    unit: "mg",
                  },
                  {
                    name: "Saturated Fat",
                    amount: 0,
                    unit: "g",
                  },
                  {
                    name: "Vitamin A",
                    amount: 23.93,
                    unit: "IU",
                  },
                  {
                    name: "Carbohydrates",
                    amount: 5.4,
                    unit: "g",
                  },
                  {
                    name: "Selenium",
                    amount: 0.04,
                    unit: "µg",
                  },
                  {
                    name: "Alcohol",
                    amount: 0,
                    unit: "g",
                  },
                  {
                    name: "Caffeine",
                    amount: 0,
                    unit: "mg",
                  },
                ],
              },
              {
                id: 99033,
                name: "skim vanilla greek yogurt",
                amount: 0.25,
                unit: "cup",
                nutrients: [
                  {
                    name: "Vitamin E",
                    amount: 0,
                    unit: "mg",
                  },
                  {
                    name: "Vitamin B2",
                    amount: 0,
                    unit: "mg",
                  },
                  {
                    name: "Fiber",
                    amount: 0,
                    unit: "g",
                  },
                  {
                    name: "Mono Unsaturated Fat",
                    amount: 0,
                    unit: "g",
                  },
                  {
                    name: "Net Carbohydrates",
                    amount: 7.18,
                    unit: "g",
                  },
                  {
                    name: "Fat",
                    amount: 0,
                    unit: "g",
                  },
                  {
                    name: "Vitamin B12",
                    amount: 0,
                    unit: "µg",
                  },
                  {
                    name: "Manganese",
                    amount: 0,
                    unit: "mg",
                  },
                  {
                    name: "Sugar",
                    amount: 6.81,
                    unit: "g",
                  },
                  {
                    name: "Potassium",
                    amount: 51.08,
                    unit: "mg",
                  },
                  {
                    name: "Folate",
                    amount: 0,
                    unit: "µg",
                  },
                  {
                    name: "Vitamin K",
                    amount: 0,
                    unit: "µg",
                  },
                  {
                    name: "Zinc",
                    amount: 0,
                    unit: "mg",
                  },
                  {
                    name: "Phosphorus",
                    amount: 0,
                    unit: "mg",
                  },
                  {
                    name: "Iron",
                    amount: 0,
                    unit: "mg",
                  },
                  {
                    name: "Vitamin B6",
                    amount: 0,
                    unit: "mg",
                  },
                  {
                    name: "Vitamin B3",
                    amount: 0,
                    unit: "mg",
                  },
                  {
                    name: "Vitamin C",
                    amount: 0,
                    unit: "mg",
                  },
                  {
                    name: "Cholesterol",
                    amount: 1.89,
                    unit: "mg",
                  },
                  {
                    name: "Magnesium",
                    amount: 0,
                    unit: "mg",
                  },
                  {
                    name: "Vitamin D",
                    amount: 0,
                    unit: "µg",
                  },
                  {
                    name: "Vitamin B5",
                    amount: 0,
                    unit: "mg",
                  },
                  {
                    name: "Protein",
                    amount: 4.54,
                    unit: "g",
                  },
                  {
                    name: "Calories",
                    amount: 45.4,
                    unit: "kcal",
                  },
                  {
                    name: "Sodium",
                    amount: 17.02,
                    unit: "mg",
                  },
                  {
                    name: "Vitamin B1",
                    amount: 0,
                    unit: "mg",
                  },
                  {
                    name: "Fluoride",
                    amount: 0,
                    unit: "mg",
                  },
                  {
                    name: "Poly Unsaturated Fat",
                    amount: 0,
                    unit: "g",
                  },
                  {
                    name: "Copper",
                    amount: 0,
                    unit: "mg",
                  },
                  {
                    name: "Calcium",
                    amount: 0.57,
                    unit: "mg",
                  },
                  {
                    name: "Saturated Fat",
                    amount: 0,
                    unit: "g",
                  },
                  {
                    name: "Vitamin A",
                    amount: 0,
                    unit: "IU",
                  },
                  {
                    name: "Carbohydrates",
                    amount: 7.18,
                    unit: "g",
                  },
                  {
                    name: "Selenium",
                    amount: 0,
                    unit: "µg",
                  },
                  {
                    name: "Alcohol",
                    amount: 0,
                    unit: "g",
                  },
                  {
                    name: "Caffeine",
                    amount: 0,
                    unit: "mg",
                  },
                  {
                    name: "Trans Fat",
                    amount: 0,
                    unit: "g",
                  },
                ],
              },
            ],
            caloricBreakdown: {
              percentProtein: 14.93,
              percentFat: 37.12,
              percentCarbs: 47.95,
            },
            weightPerServing: {
              amount: 213,
              unit: "g",
            },
          },
          summary:
            'Delicious Mango Pineapple Smoothie is a <b>gluten free and lacto ovo vegetarian</b> recipe with 2 servings. For <b>$1.22 per serving</b>, this recipe <b>covers 8%</b> of your daily requirements of vitamins and minerals. This morn meal has <b>165 calories</b>, <b>7g of protein</b>, and <b>5g of fat</b> per serving. 1 person has made this recipe and would make it again. It is an <b>affordable</b> recipe for fans of Mexican food. From preparation to the plate, this recipe takes approximately <b>10 minutes</b>. This recipe from Pink When requires mango, maraschino cherry, coconut flakes, and milk. All things considered, we decided this recipe <b>deserves a spoonacular score of 45%</b>. This score is solid. If you like this recipe, take a look at these similar recipes: <a href="https://spoonacular.com/recipes/pineapple-mango-smoothie-577078">Pineapple Mango Smoothie</a>, <a href="https://spoonacular.com/recipes/mango-pineapple-smoothie-127685">Mango-Pineapple Smoothie</a>, and <a href="https://spoonacular.com/recipes/mango-pineapple-smoothie-990071">Mango Pineapple Smoothie</a>.',
          cuisines: ["Mexican"],
          dishTypes: ["side dish"],
          diets: ["gluten free", "lacto ovo vegetarian"],
          occasions: [],
          analyzedInstructions: [
            {
              name: "",
              steps: [
                {
                  number: 1,
                  step: "Combine all ingredients in a large blender and blend until smooth.Top with a cherry and coconut flakes before serving.",
                  ingredients: [
                    {
                      id: 12108,
                      name: "coconut flakes",
                      localizedName: "coconut flakes",
                      image: "coconut-flakes.png",
                    },
                    {
                      id: 9070,
                      name: "cherries",
                      localizedName: "cherries",
                      image: "cherries.jpg",
                    },
                  ],
                  equipment: [
                    {
                      id: 404726,
                      name: "blender",
                      localizedName: "blender",
                      image: "blender.png",
                    },
                  ],
                },
                {
                  number: 2,
                  step: "Serve immediately and enjoy!",
                  ingredients: [],
                  equipment: [],
                },
              ],
            },
          ],
          spoonacularSourceUrl:
            "https://spoonacular.com/delicious-mango-pineapple-smoothie-1018582",
          usedIngredientCount: 0,
          missedIngredientCount: 6,
          missedIngredients: [
            {
              id: 12108,
              amount: 2,
              unit: "servings",
              unitLong: "servings",
              unitShort: "servings",
              aisle: "Baking",
              name: "coconut flakes",
              original: "coconut flakes",
              originalName: "coconut flakes",
              meta: [],
              image:
                "https://spoonacular.com/cdn/ingredients_100x100/shredded-coconut.jpg",
            },
            {
              id: 9176,
              amount: 0.5,
              unit: "cup",
              unitLong: "cups",
              unitShort: "cup",
              aisle: "Produce",
              name: "mango",
              original: "1/2 cup frozen mango",
              originalName: "frozen mango",
              meta: ["frozen"],
              extendedName: "frozen mango",
              image:
                "https://spoonacular.com/cdn/ingredients_100x100/mango.jpg",
            },
            {
              id: 9328,
              amount: 1,
              unit: "",
              unitLong: "",
              unitShort: "",
              aisle: "Canned and Jarred",
              name: "maraschino cherry",
              original: "1 maraschino cherry",
              originalName: "maraschino cherry",
              meta: [],
              image:
                "https://spoonacular.com/cdn/ingredients_100x100/maraschino.jpg",
            },
            {
              id: 1077,
              amount: 0.5,
              unit: "cup",
              unitLong: "cups",
              unitShort: "cup",
              aisle: "Milk, Eggs, Other Dairy",
              name: "milk",
              original: "1/2 cup milk",
              originalName: "milk",
              meta: [],
              image: "https://spoonacular.com/cdn/ingredients_100x100/milk.png",
            },
            {
              id: 9266,
              amount: 0.5,
              unit: "cup",
              unitLong: "cups",
              unitShort: "cup",
              aisle: "Produce",
              name: "pineapple",
              original: "1/2 cup frozen pineapple",
              originalName: "frozen pineapple",
              meta: ["frozen"],
              extendedName: "frozen pineapple",
              image:
                "https://spoonacular.com/cdn/ingredients_100x100/pineapple.jpg",
            },
            {
              id: 99033,
              amount: 0.5,
              unit: "cup",
              unitLong: "cups",
              unitShort: "cup",
              aisle: "Milk, Eggs, Other Dairy",
              name: "skim vanilla greek yogurt",
              original: "1/2 cup vanilla greek yogurt",
              originalName: "vanilla greek yogurt",
              meta: [],
              image:
                "https://spoonacular.com/cdn/ingredients_100x100/vanilla-yogurt.png",
            },
          ],
          likes: 0,
          usedIngredients: [],
          unusedIngredients: [],
        },
      ],

      meals: [
        {
          title: "Shrimp Tacos",
          img: "https://i2.wp.com/www.downshiftology.com/wp-content/uploads/2020/04/Shrimp-Tacos-main-1.jpg",
        },
        {
          title: "Chicken Gyro",
          img: "https://www.jocooks.com/wp-content/uploads/2020/06/chicken-gyros-1-14.jpg",
        },
        {
          title: "Tuscan Chicken Pasta",
          img: "https://foodtasia.com/wp-content/uploads/2019/02/tuscan-pasta-20.jpg",
        },
        {
          title: "Flank Steak Sandwich",
          img: "https://i.guim.co.uk/img/media/fdcd34886d1d9aa696cbac74d1a3293aa4808895/0_680_6355_3814/master/6355.jpg?width=1200&height=900&quality=85&auto=format&fit=crop&s=8b6d0cb3ca5aa21a21d485bef8f481ba",
        },
        {
          title: "Mar y Tierra",
          img: "https://i.pinimg.com/originals/a1/0f/c0/a10fc083e8604ba604354599bced175f.jpg",
        },
        {
          title: "Chicken Burrito",
          img: "https://upload.wikimedia.org/wikipedia/commons/6/60/Burrito.JPG",
        },
      ],
      mealResults: [],

      MealsInCart: [
        {
          name: "Chicken Gyro",
          img: "https://www.jocooks.com/wp-content/uploads/2020/06/chicken-gyros-1-14.jpg",
        },

        {
          name: "Mar y Tierra",
          img: "https://i.pinimg.com/originals/a1/0f/c0/a10fc083e8604ba604354599bced175f.jpg",
        },
      ],
      excludedIngredients: [
        "14412",
        "10014412",
        "20081",
        "19335",
        "4053",
        "1004513",
        "4582",
        "4513",
        "1002030",
        "2047",
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

      getMeals: async (url, query) => {
        if (!localStorage[query]) {
          await fetch(url)
            .then((response) => {
              if (response.ok) return response.json();
              else throw new Error("help");
            })
            .then((response) => {
              localStorage.setItem(
                `${query}`,
                JSON.stringify(response.results)
              );
            });
          await setStore({
            mealResults: JSON.parse(localStorage.getItem(query)),
          });
        } else {
          setStore({
            mealResults: JSON.parse(localStorage.getItem(query)),
          });
        }
      },

      AddMealToCart: (index) => {
        const storecopy = getStore();
        storecopy.MealsInCart.push(storecopy.meals[index]);
        console.log(storecopy.MealsInCart);
        return setStore({ store: storecopy });
      },

      deleteAMeal: (index) => {
        const storecopy = getStore();
        storecopy.MealsInCart.splice(index, 1);

        return setStore({ store: storecopy });
      },
    },
  };
};

export default getState;

// getMeals: async (url, query) => {
//   await fetch(url)
//     .then((response) => {
//       if (response.ok) return response.json();
//       else throw new Error("help");
//     })
//     .then((response) => {
//       localStorage.setItem(`${query}`, JSON.stringify(response.results));
//     });
//   await setStore({
//     mealResults: JSON.parse(localStorage.getItem(query)),
//   });
// },
