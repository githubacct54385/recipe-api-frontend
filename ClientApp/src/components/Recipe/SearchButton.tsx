import React, { useContext } from "react";
import "../../styles/AppStyles.css";
import AppContext from "../../context/AppContext";

const SearchButton = () => {
  const { isSearching, searchTerm } = useContext(AppContext);
  if (isSearching || searchTerm === "") {
    return <DisabledButton />;
  } else {
    return <NormalButton />;
  }
};

const DisabledButton = () => {
  return (
    <button className="search-btn" disabled>
      Search
    </button>
  );
};

const NormalButton = () => {
  const { toggleSearch } = useContext(AppContext);
  return (
    <button className="search-btn" onClick={(e) => toggleSearch(e)}>
      Search
    </button>
  );
};

export default SearchButton;
