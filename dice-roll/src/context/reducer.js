export const actionTypes = {
  sumScore: "SUM_SCORE",
  sumTotalScore: "SUM_TOTAL_SCORE",
};

const reducer = ({ action, state }) => {
  switch (action?.type) {
    case actionTypes.sumScore:
      return { ...state, sumScore: action.sumScore };
    case actionTypes.sumTotalScore:
      return { ...state, sumTotalScore: action.sumTotalScore };
    default:
      return state;
  }
};

export default reducer;
