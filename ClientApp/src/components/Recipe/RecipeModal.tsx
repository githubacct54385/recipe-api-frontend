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

  return (
    <div>
      <Modal
        size="lg"
        centered={false}
        isOpen={modalStatus.isOpen}
        toggle={(e: any) => clearModal(e)}
      >
        <ModalHeader toggle={(e: any) => clearModal(e)}>
          {props.recipe?.label}
        </ModalHeader>
        <ModalBody>
          <div className="modal-body-grid">
            <div className="top-grid">
              <div className="left">
                <RecipeDetails recipe={props.recipe} />
              </div>
              <div className="right">
                <RecipeAdvisories recipe={props.recipe} />
              </div>
            </div>
            <div className="ingredients">
              <p className="header">Ingredients</p>
              <ul>
                {props.recipe?.ingredients.map((ingredient: Ingredient) => (
                  <li key={ingredient.id}>{ingredient.text}</li>
                ))}
              </ul>
            </div>
          </div>
        </ModalBody>
        <ModalFooter></ModalFooter>
      </Modal>
    </div>
  );
};

export default RecipeModal;
