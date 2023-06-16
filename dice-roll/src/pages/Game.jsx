import React, { useState } from "react";
import { IMAGES } from "../constants/constants";
import Button from "../components/UI/Button";
import Card from "../components/UI/Card";
import Page from "../components/UI/Page";
import { useStateValue } from "../context/StateProvider";
import { actionType } from "../context/reducer";

const Game = ({ playerName }) => {
  const [showImage, setShowImage] = useState(false);
  const [{ score, randomDiceValue, totalScore }, dispatch] = useStateValue();

  let getImages = [];
  if (randomDiceValue !== 0) {
    getImages = [...IMAGES].find((image) => {
      return image.id === randomDiceValue;
    });
  }

  const rollDiceHandler = () => {
    setShowImage(true);

    if (randomDiceValue === 1) {
      dispatch({ type: actionType.init });
    } else {
      dispatch({ type: actionType.sumScore });
    }
  };

  const holdScoreHandler = () => {
    dispatch({ type: actionType.sumTotalScore });
  };

  const playerBackLayer = {
    background:
      "linear-gradient(to right bottom, rgba(255, 255, 255, 0.5),rgba(255, 255, 255, 0.3) )",
  };

  return (
    <Page modifiers="flex justify-center items-center">
      <Card modifiers="text-center text-white w-3/5 h-4/5 rounded-md grid grid-rows-1 grid-flow-col gap-2 overflow-hidden relative">
        <div className="absolute top-0 left-[50%] translate-x-[-50%] flex flex-col items-center justify-between w-auto h-full py-2">
          <div className="flex flex-col items-center">
            <Button modifiers="text-white text-xl bg-purple-400 rounded-3xl py-2 px-8 mt-10">
              New Game
            </Button>
            <img
              className={`${
                !showImage ? "hidden" : "block"
              } ${"w-30 h-28 mt-3"}`}
              src={getImages !== [] ? getImages.src : null}
              alt="dice"
            />
            ;
          </div>
          <div className="flex flex-col">
            <Button
              modifiers="text-white text-xl bg-purple-400 rounded-3xl py-2 px-8 mb-6"
              onClick={rollDiceHandler}
            >
              Roll Dice
            </Button>
            <Button
              modifiers="text-white text-xl bg-purple-400 rounded-3xl py-2 px-8 mb-6"
              onClick={holdScoreHandler}
            >
              Hold
            </Button>
          </div>
        </div>
        <section
          className="text-4xl font-medium text-black"
          style={playerBackLayer}
        >
          <div>
            <h3 className="text-md">Player 1</h3>
            <p>{playerName}</p>
            <p>{totalScore}</p>
          </div>
          <div>
            <h2>Current</h2>
            <p>{score}</p>
          </div>
        </section>
        <section
          className="text-4xl font-medium text-black"
          style={playerBackLayer}
        >
          <div>
            <h3 className="text-md">Player 2</h3>
            <p>{playerName}</p>
            <p>{totalScore}</p>
          </div>
          <div>
            <h2>Current</h2>
            <p>{score}</p>
          </div>
        </section>
      </Card>
    </Page>
  );
};

export default Game;
