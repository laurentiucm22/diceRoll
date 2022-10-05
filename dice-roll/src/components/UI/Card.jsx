import React from "react";

const Card = ({ modifiers, children }) => {
  return <div className={modifiers}>{children}</div>;
};

export default Card;
