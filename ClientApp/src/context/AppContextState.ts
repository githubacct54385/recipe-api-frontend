import Recipe from "../models/Recipe";
import ModalStatus from "../models/ModalStatus";

export default interface AppContextState {
  recipes: Recipe[];
  modalStatus: ModalStatus;
  searchTerm: string;
  isSearching: boolean;
  setSearchTerm: (searchTerm: string) => void;
  toggleSearch: () => void;
  setModalToRecipe: (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    recipe: Recipe
  ) => void;
  clearModal: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}
