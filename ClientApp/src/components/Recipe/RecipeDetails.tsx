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
      <div>Calories: {calories.toFixed(2)}</div>
      <div>{displayTotalTime(totalTime)}</div>
      <div>Source: {source}</div>
    </Fragment>
  );
};

export default RecipeDetails;
