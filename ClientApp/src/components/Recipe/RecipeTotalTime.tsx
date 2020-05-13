import React from "react";

interface Props {
  totalTime: number;
}

const RecipeTotalTime = (props: Props) => {
  if (props.totalTime === undefined || props.totalTime === 0) {
    return <div className="totalTime">Total time is unavailable</div>;
  }
  return <div className="totalTime">{props.totalTime} minutes</div>;
};

export default RecipeTotalTime;
