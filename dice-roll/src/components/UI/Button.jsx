import React from "react";

const Button = ({ children, modifiers, type, onClick, style }) => {
  const defaultBtn = "font-medium";

  const types = {
    newGame: "",
    rollDice: "",
    hold: "",
  };

  return (
    <button
      className={`${defaultBtn} ${types[type]} ${modifiers}`}
      type={"button" || type}
      onClick={onClick}
      style={style}
    >
      {children}
    </button>
  );
};

export default Button;
