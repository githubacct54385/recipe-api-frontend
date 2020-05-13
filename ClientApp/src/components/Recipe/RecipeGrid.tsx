import React, { useContext } from "react";
import "../../styles/AppStyles.css";
import RecipeModal from "./RecipeModal";
import AppContext from "../../context/AppContext";
import SingleRecipe from "./SingleRecipe";

const RecipeGrid = () => {
  const { recipes, modalStatus } = useContext(AppContext);
  if (recipes === undefined || recipes === null || recipes.length === 0) {
    return null;
  }
  return (
    <div>
      <RecipeModal recipe={modalStatus.recipe} />
      <div className="recipe-grid">
        {recipes.map((r) => (
          <SingleRecipe key={r.id} recipe={r} />
        ))}
      </div>
    </div>
  );
};

export default RecipeGrid;
