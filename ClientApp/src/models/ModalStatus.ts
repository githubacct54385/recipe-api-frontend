import Recipe from "./Recipe";

export default interface ModalStatus {
  isOpen: boolean;
  recipe?: Recipe;
}
