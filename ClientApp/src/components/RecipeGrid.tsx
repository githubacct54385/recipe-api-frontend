import React from 'react'
import Recipe from '../models/Recipe'
import "../styles/RecipeStyles.css";

interface Props {
    recipes: Recipe[];
}

const RecipeGrid = (props: Props) => {
    if (props.recipes === undefined || props.recipes === null || props.recipes.length === 0) {
        return null;
    }
    let recipesArray = [] as Recipe[];
    props.recipes.map(((p: Recipe) => {
        recipesArray.push(p);
    }))

    return (
        <div className="recipe-grid">
            {recipesArray.map(r => (
                <SingleRecipe recipe={r} />
            ))}
        </div>
    )
}

interface SingleRecipeProps {
    recipe: Recipe;
}

const SingleRecipe = (props: SingleRecipeProps) => {
    return (
        <div className="recipe-item">
            <img src={props.recipe.image} />
            <p>{props.recipe.label}</p>
        </div>
    )
}

export default RecipeGrid
