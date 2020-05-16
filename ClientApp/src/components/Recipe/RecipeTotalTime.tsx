import React from "react";
import displayTotalTime from "../../utils/displayTotalTime";

interface Props {
  totalTime: number;
}

const RecipeTotalTime = (props: Props) => {
  return <div className="totalTime">{displayTotalTime(props.totalTime)}</div>;
};

export default RecipeTotalTime;
