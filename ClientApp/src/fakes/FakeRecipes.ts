import Recipe from "../models/Recipe";

const fakeRecipes = (): Recipe[] => {
  let recipes = [] as Recipe[];

  let recipeOne: Recipe = {
    id: "123",
    label: "Chicken Vesuvio",
    url:
      "http://www.seriouseats.com/recipes/2011/12/chicken-vesuvio-recipe.html",
    uri:
      "http://www.edamam.com/ontologies/edamam.owl#recipe_b79327d05b8e5b838ad6cfd9576b30b6",
    image:
      "https://www.edamam.com/web-img/e42/e42f9119813e890af34c259785ae1cfb.jpg",
    shareAs:
      "http://www.edamam.com/recipe/chicken-vesuvio-b79327d05b8e5b838ad6cfd9576b30b6/chicken",
    source: "Serious Eats",
    yield: 4.0,
    dietLabels: [],
    healthLabels: [],
    cautions: [],
    ingredientLines: [],
    ingredients: [],
    calories: 4055.76,
    totalTime: 60.0,
    totalWeight: 2765.59,
  };
  recipes.push(recipeOne);
  let recipeTwo: Recipe = {
    id: "456",
    label: "Chicken Paprikash",
    url: "http://norecipes.com/recipe/chicken-paprikash/",
    uri:
      "http://www.edamam.com/ontologies/edamam.owl#recipe_8275bb28647abcedef0baaf2dcf34f8b",
    image:
      "https://www.edamam.com/web-img/e12/e12b8c5581226d7639168f41d126f2ff.jpg",
    shareAs:
      "http://www.edamam.com/recipe/chicken-paprikash-8275bb28647abcedef0baaf2dcf34f8b/chicken",
    source: "No Recipes",
    yield: 4.0,
    dietLabels: [],
    healthLabels: [],
    cautions: [],
    ingredientLines: [],
    ingredients: [],
    calories: 3033.2,
    totalTime: 0.0,
    totalWeight: 1824.61,
  };
  recipes.push(recipeTwo);

  return recipes;
};

export default fakeRecipes;
