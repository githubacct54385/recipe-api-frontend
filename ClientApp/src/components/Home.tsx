import React, { useState, useEffect } from 'react';
import RecipeSearch from "./RecipeSearch";
import SearchButton from "./SearchButton";
import RecipeGrid from "./RecipeGrid";
import Recipe from "../models/Recipe";
import ModalStatus from "../models/ModalStatus";
import "../styles/AppStyles.css";

export function Home() {
  const [searchTerm, setSearchTerm] = useState("");
  const [isSearching, setIsSearching] = useState(false);
  const [recipes, setRecipes] = useState([] as Recipe[]);
  const [modalStatus, setModalStatus] = useState({} as ModalStatus);

  useEffect(() => {
    setRecipes(fakeRecipes());
    setModalStatus({ isModal: false, recipeId: undefined });
  }, [])

  const fakeRecipes = (): Recipe[] => {
    let recipes = [] as Recipe[];

    let recipeOne: Recipe = {
      id: "123",
      label: "Chicken Vesuvio",
      url: "http://www.edamam.com/ontologies/edamam.owl#recipe_b79327d05b8e5b838ad6cfd9576b30b6",
      uri: "https://google.com",
      image: "https://www.edamam.com/web-img/e42/e42f9119813e890af34c259785ae1cfb.jpg",
      shareAs: "https://google.com",
      source: "Google",
      yield: 4.0,
      dietLabels: [],
      healthLabels: [],
      cautions: [],
      ingredientLines: [],
      ingredients: [],
      calories: 4055.76,
      totalTime: 60.0
    }
    recipes.push(recipeOne);
    let recipeTwo: Recipe = {
      id: "456",
      label: "Chicken Paprikash",
      url: "http://norecipes.com/recipe/chicken-paprikash/",
      uri: "http://www.edamam.com/ontologies/edamam.owl#recipe_8275bb28647abcedef0baaf2dcf34f8b",
      image: "https://www.edamam.com/web-img/e12/e12b8c5581226d7639168f41d126f2ff.jpg",
      shareAs: "http://www.edamam.com/recipe/chicken-paprikash-8275bb28647abcedef0baaf2dcf34f8b/chicken",
      source: "No Recipes",
      yield: 4.0,
      dietLabels: [],
      healthLabels: [],
      cautions: [],
      ingredientLines: [],
      ingredients: [],
      calories: 3033.20,
      totalTime: 0.0
    }
    recipes.push(recipeTwo);

    return recipes;
  }

  // event handlers

  const handleSearchClick = () => {
    setIsSearching(true);
  }

  const handleSetModalToRecipe = (recipeId: string) => {
    setModalStatus({ isModal: true, recipeId: recipeId });
  }

  const handleClearModal = () => {
    setModalStatus({ isModal: false, recipeId: undefined });
  }

  return (
    <div>
      <div className="search-bar-wrapper">
        <RecipeSearch value={searchTerm} onChange={setSearchTerm} />
        <SearchButton isSearching={isSearching} toggleSearch={() => handleSearchClick()} />
      </div>
      <RecipeGrid recipes={recipes} modalStatus={modalStatus} setModalToRecipe={handleSetModalToRecipe} clearModal={handleClearModal} />
    </div>
  );
}
