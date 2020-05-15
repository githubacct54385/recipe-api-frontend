import RecipePayload from "../models/RecipePayload";

export default interface ISearchMethods {
  search: (
    searchTerm: string,
    from: number,
    to: number
  ) => Promise<RecipePayload>;
}
