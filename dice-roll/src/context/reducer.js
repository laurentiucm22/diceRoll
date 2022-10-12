export const actionType = {
  sumScore: "SUM_SCORE",
  sumTotalScore: "SUM_TOTAL_SCORE",
};

const reducer = ({ action, state }) => {
  console.log(action);

  switch (action?.type) {
    case actionType.sumScore:
      console.log(state.score);
      return { ...state, sumScore: state.score + action.payload };
    case actionType.sumTotalScore:
      return { ...state, sumTotalScore: state.totalScore + action.payload };
    default:
      return state;
  }
};

export default reducer;
