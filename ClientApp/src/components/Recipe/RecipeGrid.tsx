import React, { useContext } from "react";
import Recipe from "../../models/Recipe";
import "../../styles/AppStyles.css";
import RecipeModal from "./RecipeModal";
import AppContext from "../../context/AppContext";

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
      <RecipeModal isOpen={modalStatus.isOpen} recipe={modalStatus.recipe} />
      <div className="recipe-grid">
        {recipesArray.map((r) => (
          <SingleRecipe key={r.id} recipe={r} />
        ))}
      </div>
    </div>
  );
};

interface SingleRecipeProps {
  recipe: Recipe;
}

const SingleRecipe = (props: SingleRecipeProps) => {
  const { setModalToRecipe } = useContext(AppContext);
  return (
    <div className="recipe-item">
      <div className="img-wrapper">
        <img src={props.recipe.image} />
      </div>
      <p className="label">{props.recipe.label}</p>
      <div className="details">
        <div className="servings">{props.recipe.yield} servings</div>
        <div className="totalTime">{props.recipe.totalTime} minutes</div>
      </div>
      <div className="btn-wrap">
        <button
          onClick={(e) => setModalToRecipe(e, props.recipe)}
          className="seeMore"
        >
          See Info
        </button>
      </div>
    </div>
  );
};

export default RecipeGrid;
