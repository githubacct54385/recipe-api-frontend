import Ingredient from "./Ingredient";

export default interface Recipe {
  id: string;
  uri: string;
  url: string;
  label: string;
  image: string;
  source: string;
  shareAs: string;
  yield: number;
  dietLabels: string[];
  healthLabels: string[];
  cautions: string[];
  ingredientLines: string[];
  ingredients: Ingredient[];
  calories: number;
  totalTime: number;
  totalWeight: number;
}
