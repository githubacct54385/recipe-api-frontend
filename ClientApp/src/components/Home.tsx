import React, { useState, useEffect } from "react";
import RecipeSearch from "./Recipe/RecipeSearch";
import SearchButton from "./Recipe/SearchButton";
import RecipeGrid from "./Recipe/RecipeGrid";
import Recipe from "../models/Recipe";
import ModalStatus from "../models/ModalStatus";
import "../styles/AppStyles.css";
import AppContext from "../context/AppContext";
import FetchRecipes from "../dataFetch/FetchData";
import SearchParams from "../models/SearchParams";
import RecipePayload from "../models/RecipePayload";
import Hit from "../models/Hit";
import Warning from "./Recipe/Warning";

export function Home() {
  const [searchTerm, setSearchTerm] = useState("");
  const [isSearching, setIsSearching] = useState(false);
  const [recipes, setRecipes] = useState([] as Recipe[]);
  const [modalStatus, setModalStatus] = useState({} as ModalStatus);
  const [searchWarning, setSearchWarning] = useState("");

  useEffect(() => {
    //setRecipes([]);
    setModalStatus({ isOpen: false, recipe: undefined });
  }, []);

  // event handlers

  const handleSearchClick = async () => {
    // reset search warning and set boolean searching flag to true
    setSearchWarning("");
    setIsSearching(true);

    // init search params
    // get first ten
    const searchParams: SearchParams = {
      searchTerm: searchTerm,
      from: 0,
      to: 10,
    };

    // do search and retrieve from API
    const recipePayload: RecipePayload = await FetchRecipes(searchParams);
    handleResponse(recipePayload);
    handleWarning(recipePayload.warning);
    setIsSearching(false);
  };

  const handleResponse = (recipePayload: RecipePayload) => {
    // if hits length is > 0, you have recipes
    if (recipePayload.hits.length > 0) {
      setRecipesToState(recipePayload.hits);
    } else {
      // otherwise the results turned up with nothing
      // the state should be reset to an empty array
      setRecipes([]);
    }
  };

  const handleWarning = (warning: string) => {
    // if there is a warning, set it to state
    if (warning !== "") {
      setSearchWarning(warning);
    } else {
      // if no error, clear the search term
      setSearchTerm("");
    }
  };

  const setRecipesToState = (hits: Hit[]) => {
    // get all the recipes from the hits
    const recipesList: Recipe[] = hits.map((hit: Hit) => {
      return hit.recipe;
    });
    setRecipes(recipesList);
  };

  const handleSetModalToRecipe = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    recipe: Recipe
  ) => {
    e.preventDefault();
    setModalStatus({ isOpen: true, recipe: recipe });
  };

  const handleClearModal = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    setModalStatus({ isOpen: false, recipe: undefined });
  };

  return (
    <AppContext.Provider
      value={{
        recipes: recipes,
        modalStatus: modalStatus,
        searchTerm: searchTerm,
        isSearching: isSearching,
        setSearchTerm: (searchTerm: string) => setSearchTerm(searchTerm),
        startSearch: () => handleSearchClick(),
        setModalToRecipe: (
          e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
          recipe: Recipe
        ) => handleSetModalToRecipe(e, recipe),
        clearModal: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) =>
          handleClearModal(e),
        searchWarning: searchWarning,
        setSearchWarning: (warn: string) => setSearchWarning(warn),
      }}
    >
      <div className="search-bar-wrapper">
        <RecipeSearch />
        <SearchButton />
      </div>
      <Warning />
      <RecipeGrid />
    </AppContext.Provider>
  );
}
