import React, { useContext } from "react";
import "../../styles/AppStyles.css";
import AppContext from "../../context/AppContext";

const SearchButton = () => {
  const { isSearching, searchTerm } = useContext(AppContext);
  if (isSearching === false && searchTerm === "") {
    return <DisabledButton />;
  } else if (isSearching) {
    return <SearchingButton />;
  } else {
    return <NormalButton />;
  }
};

const SearchingButton = () => {
  return (
    <button className="search-btn" disabled>
      Searching...
    </button>
  );
};

const DisabledButton = () => {
  return (
    <button className="search-btn" disabled>
      Search
    </button>
  );
};

const NormalButton = () => {
  const { startSearch } = useContext(AppContext);
  return (
    <button
      className="search-btn"
      onClick={(e) => {
        e.preventDefault();
        startSearch();
      }}
    >
      Search
    </button>
  );
};

export default SearchButton;
