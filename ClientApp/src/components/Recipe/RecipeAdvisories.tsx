import React, { Fragment } from "react";
import Recipe from "../../models/Recipe";

interface Props {
  recipe: Recipe;
}

const RecipeAdvisories = (props: Props) => {
  // helper functions
  const LabelsAsString = (arr: string[]): string => {
    if (arr.length === 0) return "N/A";

    let str = "";
    arr.map((strElement, index) => {
      const notLastElement = index !== arr.length - 1;
      if (notLastElement) {
        str = AppendStringwithComma(str, strElement);
      } else {
        str = AppendStringWithoutComma(str, strElement);
      }
    });
    return str;
  };

  const AppendStringwithComma = (currStr: string, newStr: string) =>
    currStr + `${newStr}, `;
  const AppendStringWithoutComma = (currStr: string, newStr: string) =>
    currStr + `${newStr}`;
  return (
    <Fragment>
      <div className="grid-item">
        Diet Labels: {LabelsAsString(props.recipe.dietLabels)}
      </div>
      <div className="grid-item">
        Cautions: {LabelsAsString(props.recipe.cautions)}
      </div>
      <div className="grid-item">
        Health Labels: {LabelsAsString(props.recipe.healthLabels)}
      </div>
    </Fragment>
  );
};

export default RecipeAdvisories;
