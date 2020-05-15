import axios, { AxiosResponse } from "axios";
import RecipePayload from "../models/RecipePayload";
import SearchParams from "../models/SearchParams";
import Hit from "../models/Hit";
import { uuid } from "uuidv4";
import Recipe from "../models/Recipe";
import Ingredient from "../models/Ingredient";

const FetchRecipes = async (
  searchParams: SearchParams
): Promise<RecipePayload> => {
  const baseUrl = GetBaseUrl();
  const apiPath = CreateApiPath(baseUrl, searchParams);
  try {
    const res = await axios.get(apiPath);
    if (res.status === 200)
      return MapRecipePayloadToInterface(searchParams, res.data);
    return FailureResponse(searchParams, res);
  } catch (err) {
    return ExceptionResponse(err, searchParams);
  }
};

//=======================================
// Request Handling
//=======================================

const GetBaseUrl = (): string => {
  return (
    process.env.RECIPE_API_ENDPOINT || "https://recipeapiapp.azurewebsites.net"
  );
};

const MapRecipePayloadToInterface = (
  searchParams: SearchParams,
  data: any
): RecipePayload => {
  const payload: RecipePayload = {
    q: searchParams.searchTerm,
    from: searchParams.from,
    to: searchParams.to,
    more: data.more,
    warning: data.warning,
    count: data.count,
    hits: mapHitsToArray(data),
  };
  return payload;
};

const mapHitsToArray = (data: any): Hit[] => {
  const { hits } = data;
  if (hits.length === 0) return [];

  const hitsForPayload: Hit[] = hits.map((hit: any) => {
    const thisHit: Hit = {
      bookmarked: hit.bookmarked,
      bought: hit.bought,
      recipe: mapRecipeToObject(hit.recipe),
    };
    return thisHit;
  });
  return hitsForPayload;
};

const mapRecipeToObject = (data: any): Recipe => {
  return {
    id: uuid(),
    uri: data.uri,
    label: data.label,
    image: data.image,
    source: data.source,
    url: data.url,
    shareAs: data.shareAs,
    yield: data.yield,
    dietLabels: mapStringArrayToArray(data.dietLabels),
    healthLabels: mapStringArrayToArray(data.healthLabels),
    cautions: mapStringArrayToArray(data.cautions),
    ingredientLines: mapStringArrayToArray(data.ingredientLines),
    ingredients: mapIngredientsToArray(data.ingredients),
    calories: data.calories,
    totalWeight: data.totalWeight,
    totalTime: data.totalTime,
  };
};

const mapStringArrayToArray = (rows: string[]): string[] => {
  const stringArr: string[] = rows.map((row: string) => {
    return row;
  });
  return stringArr;
};

const mapIngredientsToArray = (ingredients: any): Ingredient[] => {
  const ingredientsArray: Ingredient[] = ingredients.map((element: any) => {
    return {
      id: uuid(),
      text: element.text,
      weight: element.weight,
    };
  });
  return ingredientsArray;
};

const CreateApiPath = (baseUrl: string, searchParams: SearchParams): string => {
  let path = baseUrl;
  path =
    path +
    `/Recipes/Search/${searchParams.searchTerm}/${searchParams.from}/${searchParams.to}`;
  return path;
};

//=======================================
// Error Handling
//=======================================

const ExceptionResponse = (
  err: any,
  searchParams: SearchParams
): RecipePayload => {
  console.error(err);
  return {
    q: searchParams.searchTerm,
    from: searchParams.from,
    to: searchParams.to,
    hits: [],
    count: 0,
    warning: "An exception occurred while requesting recipients.",
    more: false,
  };
};

const FailureResponse = (
  searchParams: SearchParams,
  res: AxiosResponse<any>
): RecipePayload => {
  console.error(`Request failed.`);
  return {
    q: searchParams.searchTerm,
    from: searchParams.from,
    to: searchParams.to,
    hits: [],
    count: 0,
    warning: warningMessage(res),
    more: false,
  };
};

const warningMessage = (res: AxiosResponse<any>): string => {
  if (res.status !== undefined && res.statusText !== undefined) {
    return `The request for recipes failed with status code ${res.status} and status text ${res.statusText}.`;
  } else if (res.status !== undefined && res.statusText === undefined) {
    return `The request for recipes failed with status code ${res.status}`;
  } else if (res.status === undefined && res.status !== undefined) {
    return `The request for recipes failed with status text ${res.statusText}`;
  } else {
    return `The request for recipes failed with no known status code and status text available.`;
  }
};

export default FetchRecipes;
