import React, { useContext } from "react";
import "../../styles/AppStyles.css";
import AppContext from "../../context/AppContext";

const RecipeSearch = () => {
  const { searchTerm, setSearchTerm, isSearching, startSearch } = useContext(
    AppContext
  );

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && searchTerm !== "") {
      // Enter pressed
      // start the search
      startSearch();
    }
  };
  return (
    <input
      onKeyDown={(e) => handleKeyDown(e)}
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
