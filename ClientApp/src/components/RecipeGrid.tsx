import React from 'react'
import Recipe from '../models/Recipe'
import "../styles/AppStyles.css";

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
            <div className="img-wrapper">
                <img src={props.recipe.image} />
            </div>
            <p className="label">{props.recipe.label}</p>
            <p className="servings">{props.recipe.yield} servings</p>
            <div className="btn-wrap">
                <button className="seeMore">See Info</button>
            </div>
        </div>
    )
}

export default RecipeGrid
