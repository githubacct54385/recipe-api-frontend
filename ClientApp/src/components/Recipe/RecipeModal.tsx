import React, { useContext } from "react";
import AppContext from "../../context/AppContext";
import { Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import Recipe from "../../models/Recipe";
import "../../styles/AppStyles.css";
import Ingredient from "../../models/Ingredient";

interface Props {
  recipe?: Recipe;
}

const RecipeModal = (props: Props) => {
  const { modalStatus, clearModal } = useContext(AppContext);
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
            <div className="ingredients">
              <p className="header">Ingredients</p>
              <ul>
                {props.recipe?.ingredients.map((ingredient: Ingredient) => (
                  <li key={ingredient.id}>{ingredient.text}</li>
                ))}
              </ul>
            </div>
            <div className="instructions">
              <p className="header">Instructions</p>
              <ul>
                <li>
                  Heat an oven to 325°F. In a roasting pan (or a large (14-inch)
                  oven-proof skillet), heat the olive oil over medium until
                  shimmering. Add the potatoes and garlic and cook until golden
                  brown, about 12 minutes. Remove to a plate, leaving behind as
                  much oil as possible.
                </li>
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
