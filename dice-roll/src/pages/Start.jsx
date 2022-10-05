import React from "react";
import Button from "../components/UI/Button";
import Card from "../components/UI/Card";

const Start = () => {
  // prettier-ignore
  const startGameCard ="w-[37.5rem] h-[18.75rem] bg-red-600 flex flex-col items-center  justify-center rounded-md";

  // prettier-ignore
  const startBtnModifiers = "";
  return (
    <header className="absolute top-0 left-0 flex items-center justify-center w-screen h-screen text-center bg-purple-500 w-screnn">
      <Card modifiers={startGameCard}>
        <Button modifiers={startBtnModifiers}>Start</Button>
      </Card>
    </header>
  );
};

export default Start;
