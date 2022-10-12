import React from "react";
import Button from "../components/UI/Button";
import Card from "../components/UI/Card";

const Start = () => {
  // prettier-ignore
  const startGameCard ="w-[37.5rem] h-[18.75rem] flex flex-col items-center  justify-center rounded-md";

  // prettier-ignore
  const startBtnModifiers = "text-md font-bold uppercase bg-purple-500 py-3 px-9 rounded-3xl text-nav-text hover:bg-purple-400 hover:text-slate-900";

  return (
    <header className="absolute top-0 left-0 flex items-center justify-center w-screen h-screen text-center w-screnn">
      <Card modifiers={startGameCard}>
        <p className="pb-5 text-2xl font-bold text-nav-text">
          Welcome to my take on this Game!
        </p>
        <h1 className="pb-6 text-5xl font-bold animate-bounce text-nav-text">
          Pig Game
        </h1>
        <Button modifiers={startBtnModifiers}>Start Game</Button>
      </Card>
    </header>
  );
};

export default Start;
