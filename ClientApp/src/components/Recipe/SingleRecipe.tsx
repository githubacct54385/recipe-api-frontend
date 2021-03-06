import React, { useContext } from "react";
import Recipe from "../../models/Recipe";
import AppContext from "../../context/AppContext";
import RecipeTotalTime from "./RecipeTotalTime";

interface SingleRecipeProps {
  recipe: Recipe;
}

const SingleRecipe = (props: SingleRecipeProps) => {
  const { setModalToRecipe } = useContext(AppContext);
  return (
    <div className="recipe-item">
      <div className="img-wrapper">
        <a target="_blank" rel="noopener noreferrer" href={props.recipe.url}>
          <img src={props.recipe.image} alt={props.recipe.label} />
        </a>
      </div>
      <div className="link-wrapper">
        <a
          target="_blank"
          rel="noopener noreferrer"
          href={props.recipe.url}
          className="label"
        >
          {props.recipe.label}
        </a>
      </div>
      <div className="details">
        <div className="servings">{props.recipe.yield} servings</div>
        <RecipeTotalTime totalTime={props.recipe.totalTime} />
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

export default SingleRecipe;
