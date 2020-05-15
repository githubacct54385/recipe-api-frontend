import React, { useContext } from "react";
import AppContext from "../../context/AppContext";

const SearchSummary = () => {
  const { pagination, lastQuery } = useContext(AppContext);
  const { from, to, count } = pagination;

  // https://stackoverflow.com/questions/2901102/how-to-print-a-number-with-commas-as-thousands-separators-in-javascript#2901298
  const numberWithCommas = (x: number) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  return (
    <div className="search-summary-wrapper">
      <span>
        Showing results {from + 1} to {to} for "{lastQuery}" out of{" "}
        {numberWithCommas(count)} results
      </span>
    </div>
  );
};

export default SearchSummary;
