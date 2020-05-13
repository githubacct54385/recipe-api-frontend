import Hit from "./Hit";

export default interface RecipePayload {
  q: string;
  from: number;
  to: number;
  more: boolean;
  count: number;
  hits: Hit[];
  warning: string;
}
