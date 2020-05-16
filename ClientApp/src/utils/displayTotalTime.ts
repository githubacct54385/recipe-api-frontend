const displayTotalTime = (totalTime: number | undefined) => {
  if (totalTime === undefined || totalTime === 0) {
    return "Total time is unavailable";
  } else {
    return `${totalTime} minutes`;
  }
};

export default displayTotalTime;
