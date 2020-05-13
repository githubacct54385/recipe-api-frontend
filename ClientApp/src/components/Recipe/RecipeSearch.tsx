import React, { useContext } from "react";
import "../../styles/AppStyles.css";
import AppContext from "../../context/AppContext";

const RecipeSearch = () => {
  const { searchTerm, setSearchTerm, isSearching } = useContext(AppContext);
  return (
    <input
      disabled={isSearching}
      className="search-input"
      type="text"
      placeholder="Search a raw ingredient or ingredient"
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
    />
  );
};

export default RecipeSearch;
