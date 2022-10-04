import React, { useState } from "react";
import Button from "./Button";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";

const Navigation = () => {
  const [state, setState] = useState(false);

  // prettier-ignore
  const defaultNavigation = ` ${state ? "w-1/5" : "w-20"} min-h-screen z-10 relative`;
  const navAnimation = {
    background:
      "linear-gradient(to right bottom, rgba(255, 255, 255, 0.7),rgba(255, 255, 255, 0.3) )",
    WebkitTransition: "all 0.8s cubic-bezier(.42, 0, .58, 1)",
    transition: "all 0.5s cubic-bezier(.42, 0, .58, 1)",
    backdropFilter: "blur(2rem)",
  };

  const btnModifiers =
    "w-50 p-2 rounded-full absolute top-4 right-6 rounded-full hover:bg-burger-menu-hover bg-burger-menu p-2 transition duration-300 ease-in-out font-medium ";

  return (
    <nav className={defaultNavigation} style={navAnimation}>
      <Button
        modifiers={btnModifiers}
        type="newGame"
        onClick={() => setState(!state)}
      >
        {state ? <AiOutlineClose /> : <GiHamburgerMenu />}
      </Button>
    </nav>
  );
};

export default Navigation;
