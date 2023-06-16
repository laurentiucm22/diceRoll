import { randomDiceValue } from "../utils/functions";

export const actionType = {
  init: "INITIAL_STATE",
  sumScore: "SUM_SCORE",
  sumTotalScore: "SUM_TOTAL_SCORE",
};

const reducer = (state, action) => {
  const diceValue = randomDiceValue();

  switch (action?.type) {
    case actionType.init:
      return {
        ...state,
        score: 0,
      };
    case actionType.sumScore:
      return {
        ...state,
        score: state.score + diceValue,
        randomDiceValue: diceValue,
      };
    case actionType.sumTotalScore:
      return { ...state, totalScore: state.totalScore + state.score };
    default:
      return state;
  }
};

export default reducer;
