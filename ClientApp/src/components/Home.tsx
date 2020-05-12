import React, { useState, useEffect } from 'react';
import RecipeSearch from "./RecipeSearch";
import SearchButton from "./SearchButton";
import RecipeGrid from "./RecipeGrid";
import Recipe from "../models/Recipe";

export function Home() {
  const [searchTerm, setSearchTerm] = useState("");
  const [isSearching, setIsSearching] = useState(false);
  const [recipes, setRecipes] = useState([] as Recipe[]);

  useEffect(() => {
    setRecipes(fakeRecipes());
  }, [])

  const fakeRecipes = (): Recipe[] => {
    let recipes = [] as Recipe[];

    let recipeOne: Recipe = {
      id: "123",
      label: "Chicken Vesuvio",
      url: "http://www.edamam.com/ontologies/edamam.owl#recipe_b79327d05b8e5b838ad6cfd9576b30b6",
      uri: "https://google.com",
      image: "https://www.edamam.com/web-img/e42/e42f9119813e890af34c259785ae1cfb.jpg",
      shareAs: "https://google.com",
      source: "Google",
      yield: 10.5,
      dietLabels: [],
      healthLabels: [],
      cautions: [],
      ingredientLines: [],
      ingredients: []
    }
    recipes.push(recipeOne);

    return recipes;
  }

  const handleSearchClick = () => {
    setIsSearching(true);
  }
  return (
    <div>
      <RecipeSearch value={searchTerm} onChange={setSearchTerm} />
      <SearchButton isSearching={isSearching} toggleSearch={() => handleSearchClick()} />
      <RecipeGrid recipes={recipes} />
    </div>
  );
}
