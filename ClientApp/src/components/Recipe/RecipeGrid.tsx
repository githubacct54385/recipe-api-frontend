import React, { useContext } from "react";
import Recipe from "../../models/Recipe";
import "../../styles/AppStyles.css";
import RecipeModal from "./RecipeModal";
import AppContext from "../../context/AppContext";
import SingleRecipe from "./SingleRecipe";

const RecipeGrid = () => {
  const { recipes, modalStatus, setModalToRecipe } = useContext(AppContext);
  if (recipes === undefined || recipes === null || recipes.length === 0) {
    return null;
  }
  let recipesArray = [] as Recipe[];
  recipes.map((p: Recipe) => {
    recipesArray.push(p);
  });

  return (
    <div>
      <RecipeModal recipe={modalStatus.recipe} />
      <div className="recipe-grid">
        {recipesArray.map((r) => (
          <SingleRecipe key={r.id} recipe={r} />
        ))}
      </div>
    </div>
  );
};

export default RecipeGrid;
