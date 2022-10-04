import React from "react";

const Button = ({ children, modifiers, type, onClick }) => {
  const defaultBtn = "font-medium";

  const types = {
    newGame: "",
    rollDice: "",
    hold: "",
  };

  return (
    <button
      className={`${defaultBtn} ${modifiers}`}
      type={types[type]}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
