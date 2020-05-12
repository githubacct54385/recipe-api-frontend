import React from 'react'
import Recipe from '../models/Recipe'
import "../styles/AppStyles.css";
import ModalStatus from '../models/ModalStatus';

interface Props {
    recipes: Recipe[];
    modalStatus: ModalStatus;
    setModalToRecipe: (recipeId: string) => void;
    clearModal: () => void;
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
                <SingleRecipe key={r.id} recipe={r} />
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
            <div className="details">
                <div className="servings">{props.recipe.yield} servings</div>
                <div className="totalTime">{props.recipe.totalTime} minutes</div>
            </div>
            <div className="btn-wrap">
                <button className="seeMore">See Info</button>
            </div>
        </div>
    )
}

export default RecipeGrid
