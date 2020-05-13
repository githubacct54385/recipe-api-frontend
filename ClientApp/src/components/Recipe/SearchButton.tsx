import React, { useContext } from "react";
import "../../styles/AppStyles.css";
import AppContext from "../../context/AppContext";

const SearchButton = () => {
  const { isSearching } = useContext(AppContext);
  if (isSearching) {
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
    <button className="search-btn" onClick={() => toggleSearch()}>
      Search
    </button>
  );
};

export default SearchButton;
