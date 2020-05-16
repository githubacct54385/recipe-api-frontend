import React, { useContext } from "react";
import AppContext from "../../context/AppContext";
import { Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import Recipe from "../../models/Recipe";
import "../../styles/AppStyles.css";
import Ingredient from "../../models/Ingredient";
import RecipeAdvisories from "./RecipeAdvisories";
import RecipeDetails from "./RecipeDetails";

interface Props {
  recipe?: Recipe;
}

const RecipeModal = (props: Props) => {
  const { modalStatus, clearModal } = useContext(AppContext);

  if (props.recipe === undefined) return null;

  const { recipe } = props;

  return (
    <Modal
      size="lg"
      centered={false}
      isOpen={modalStatus.isOpen}
      toggle={(e: any) => clearModal(e)}
    >
      <ModalHeader toggle={(e: any) => clearModal(e)}>
        <a target="_blank" rel="noopener noreferrer" href={recipe.url}>
          {recipe.label}
        </a>
      </ModalHeader>
      <ModalBody>
        <div className="modal-body-grid">
          <div className="top-grid">
            <div className="left">
              <RecipeDetails recipe={recipe} />
            </div>
            <div className="right">
              <RecipeAdvisories recipe={recipe} />
            </div>
          </div>
          <div className="ingredients">
            <p className="header">Ingredients</p>
            <ul>
              {recipe.ingredients.map((ingredient: Ingredient) => (
                <li key={ingredient.id}>{ingredient.text}</li>
              ))}
            </ul>
          </div>
        </div>
      </ModalBody>
    </Modal>
  );
};

export default RecipeModal;
