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
import Pagination from "../models/pagination";
import topFunction from "../utils/scrollToTop";

export function Home() {
  const [searchTerm, setSearchTerm] = useState("");
  const [lastQuery, setLastQuery] = useState("");
  const [isSearching, setIsSearching] = useState(false);
  const [recipes, setRecipes] = useState([] as Recipe[]);
  const [modalStatus, setModalStatus] = useState({} as ModalStatus);
  const [searchWarning, setSearchWarning] = useState("");
  const [pagination, setPagination] = useState({
    from: 0,
    to: 10,
    more: false,
    count: 0,
  } as Pagination);

  useEffect(() => {
    setModalStatus({ isOpen: false, recipe: undefined });
  }, []);

  // event handlers

  const paginateRight = () => {};

  const handleSearchClick = async () => {
    // reset search warning and set boolean searching flag to true
    setSearchWarning("");
    setIsSearching(true);

    // init search params
    // get first ten
    const searchParams: SearchParams = {
      searchTerm: searchTerm,
      from: 0,
      to: getDefaultQueryAmount(),
    };

    // do search and retrieve from API
    const recipePayload: RecipePayload = await FetchRecipes(searchParams);
    handleResponse(recipePayload);
    handleWarning(recipePayload.warning);
    setIsSearching(false);
  };

  const getDefaultQueryAmount = (): number => {
    // get for azure config the default query amount for each recipe api call
    // if undefined, set to 100
    // maximum number that can be queied is 100
    // this is defined by the Edamam API
    let defaultQueryAmount = process.env.DEFAULT_QUERY_AMOUNT;
    if (defaultQueryAmount === undefined) defaultQueryAmount = "100";

    return parseInt(defaultQueryAmount);
  };

  const handleResponse = (recipePayload: RecipePayload) => {
    // if hits length is > 0, you have recipes
    setLastQuery(recipePayload.q);
    if (recipePayload.hits.length > 0) {
      setRecipesToState(recipePayload.hits);
      handleSetPagination(recipePayload);
    } else {
      // otherwise the results turned up with nothing
      // the state should be reset to an empty array
      setRecipes([]);
      setPagination({ from: 0, to: 10, more: false, count: 0 });
    }
  };

  const handleSetPagination = (recipePayload: RecipePayload) => {
    setPagination({
      from: recipePayload.from,
      to: recipePayload.to,
      more: recipePayload.more,
      count: recipePayload.count,
    });
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
        pagination: pagination,
        handleRightPaginate: () => paginateRight(),
        lastQuery: lastQuery,
      }}
    >
      <button onClick={topFunction} id="myBtn" title="Go to top">
        Scoll to top
      </button>
      <div className="search-bar-wrapper">
        <RecipeSearch />
        <SearchButton />
      </div>
      <Warning />
      <RecipeGrid />
    </AppContext.Provider>
  );
}
