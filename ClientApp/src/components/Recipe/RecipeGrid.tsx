import React, { useContext } from "react";
import "../../styles/AppStyles.css";
import RecipeModal from "./RecipeModal";
import AppContext from "../../context/AppContext";
import SingleRecipe from "./SingleRecipe";
import Loader from "./Loader";
import SearchSummary from "./SearchSummary";
import PaginateButtons from "./PaginateButtons";

const RecipeGrid = () => {
  const { recipes, modalStatus, isSearching } = useContext(AppContext);

  const noRecipes =
    recipes === undefined || recipes === null || recipes.length === 0;

  if (isSearching) {
    return <Loader />;
  } else if (noRecipes) {
    return null;
  }
  return (
    <div>
      <RecipeModal recipe={modalStatus.recipe} />
      <SearchSummary />
      <PaginateButtons />
      <div className="recipe-grid">
        {recipes.map((r) => (
          <SingleRecipe key={r.id} recipe={r} />
        ))}
      </div>
    </div>
  );
};

export default RecipeGrid;
