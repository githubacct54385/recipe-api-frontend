import React, { Fragment } from "react";
import Recipe from "../../models/Recipe";
import displayTotalTime from "../../utils/displayTotalTime";

interface Props {
  recipe: Recipe;
}

const RecipeDetails = (props: Props) => {
  const { calories, totalTime, source } = props.recipe;
  return (
    <Fragment>
      <div className="grid-item">Calories: {calories.toFixed(2)}</div>
      <div className="grid-item">{displayTotalTime(totalTime)}</div>
      <div className="grid-item">Source: {source}</div>
    </Fragment>
  );
};

export default RecipeDetails;
