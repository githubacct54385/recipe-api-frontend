import React, { Fragment } from "react";
import Recipe from "../../models/Recipe";

interface Props {
  recipe: Recipe;
}

const RecipeAdvisories = (props: Props) => {
  // helper functions
  const arrToStr = (arr: string[]): string => {
    if (arr.length === 0) return "N/A";

    let str = "";
    arr.map((strElement, index) => {
      if (index !== arr.length - 1) {
        str = str + withComma(strElement);
      } else {
        str = str + withoutComma(strElement);
      }
    });
    return str;
  };

  const withComma = (str: string) => `${str}, `;
  const withoutComma = (str: string) => `${str}`;
  return (
    <Fragment>
      <div>Diet Labels: {arrToStr(props.recipe.dietLabels)}</div>
      <div>Cautions: {arrToStr(props.recipe.cautions)}</div>
      <div>Health Labels: {arrToStr(props.recipe.healthLabels)}</div>
    </Fragment>
  );
};

export default RecipeAdvisories;
