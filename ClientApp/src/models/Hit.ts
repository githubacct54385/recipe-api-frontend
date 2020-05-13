import Recipe from "./Recipe";

export default interface Hit {
  bookmarked: boolean;
  bought: boolean;
  recipe: Recipe;
}
