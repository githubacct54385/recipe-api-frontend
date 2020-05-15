import React, { useContext } from "react";
import AppContext from "../../context/AppContext";

const Warning = () => {
  const { searchWarning } = useContext(AppContext);
  if (searchWarning === undefined || searchWarning === "") {
    return null;
  }
  return (
    <div className="warning-wrapper">
      <span>{searchWarning}</span>
    </div>
  );
};

export default Warning;
