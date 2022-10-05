import React from "react";

const Input = ({ modifiers, type, onChange }) => {
  const defaultInput = "border-none ouline-none focus:outline-none";

  return (
    <input
      type={"text" || type}
      className={`${defaultInput} ${modifiers}`}
      onChange={onChange}
    />
  );
};

export default Input;
