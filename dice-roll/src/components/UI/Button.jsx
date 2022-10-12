import React from "react";

const Button = ({ children, modifiers, type, onClick, style }, props) => {
  const defaultBtn =
    "font-medium active:translate-y-1 transition-all duration-200";

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
