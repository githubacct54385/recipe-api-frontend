import Recipe from "../models/Recipe";
import ModalStatus from "../models/ModalStatus";

export default interface AppContextState {
  recipes: Recipe[];
  modalStatus: ModalStatus;
  searchTerm: string;
  isSearching: boolean;
  setSearchTerm: (searchTerm: string) => void;
  startSearch: () => void;
  setModalToRecipe: (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    recipe: Recipe
  ) => void;
  clearModal: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  searchWarning: string;
  setSearchWarning: (warn: string) => void;
}
