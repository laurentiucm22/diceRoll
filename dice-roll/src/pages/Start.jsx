import React from "react";
import Button from "../components/UI/Button";
import Card from "../components/UI/Card";

const Start = () => {
  // prettier-ignore
  const startGameCard ="w-[37.5rem] h-[18.75rem] flex flex-col items-center  justify-center rounded-md";

  // prettier-ignore
  const startBtnModifiers = "font-bold uppercase bg-purple-700 py-3 px-6 rounded-md text-nav-text hover:bg-purple-400 hover:text-slate-900 active:translate-y-1 transition-all duration-200";

  return (
    <header className="absolute top-0 left-0 flex items-center justify-center w-screen h-screen text-center w-screnn">
      <Card modifiers={startGameCard}>
        <h1 className="pb-4 text-3xl font-bold animate-bounce text-nav-text">
          Pig Game
        </h1>
        <Button modifiers={startBtnModifiers}>Start</Button>
      </Card>
    </header>
  );
};

export default Start;
