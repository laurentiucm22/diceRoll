export const actionType = {
  sumScore: "SUM_SCORE",
  sumTotalScore: "SUM_TOTAL_SCORE",
};

const reducer = (state, action) => {
  switch (action?.type) {
    case actionType.sumScore:
      return { ...state, score: state.score + state.randomDiceValue };
    case actionType.sumTotalScore:
      return { ...state, totalScore: state.totalScore + state.score };
    default:
      return state;
  }
};

export default reducer;
