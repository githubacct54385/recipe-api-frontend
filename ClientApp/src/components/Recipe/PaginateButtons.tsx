import React, { useContext } from "react";
import AppContext from "../../context/AppContext";

const PaginateButtons = () => {
  const { pagination } = useContext(AppContext);
  const allowLeft = false; // todo fix this
  const allowRight = pagination.more === true;
  return (
    <div className="paginate-btns">
      <LeftButton allowAction={allowLeft} />
      <RightButton allowAction={allowRight} />
    </div>
  );
};

interface ButtonProps {
  allowAction: boolean;
}

const LeftButton = (props: ButtonProps) => {
  if (props.allowAction) {
    return (
      <button className="left">
        <LeftIcon />
      </button>
    );
  } else {
    return (
      <button className="left" disabled>
        <LeftIcon />
      </button>
    );
  }
};

const RightButton = (props: ButtonProps) => {
  if (props.allowAction) {
    return (
      <button onClick={() => {}} className="right">
        <RightIcon />
      </button>
    );
  } else {
    return (
      <button className="right" disabled>
        <RightIcon />
      </button>
    );
  }
};

const LeftIcon = () => <i className="fas fa-chevron-left"></i>;
const RightIcon = () => <i className="fas fa-chevron-right"></i>;

export default PaginateButtons;
