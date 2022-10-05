import React, { useState } from "react";
import Button from "../UI/Button";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdClose } from "react-icons/md";
import NavLinks from "./NavLinks";
import NavSocialMedia from "./NavSocialMedia";

const Navigation = () => {
  const [state, setState] = useState(false);

  // prettier-ignore
  const navAnimation = {
    background:
      "linear-gradient(to right bottom, rgba(255, 255, 255, 0.7),rgba(255, 255, 255, 0.3) )",
    WebkitTransition: "all 0.5s cubic-bezier(.42, 0, .58, 1)",
    transition: "all 0.5s cubic-bezier(.42, 0, .58, 1)",
    backdropFilter: "blur(2rem)",
  };

  // prettier-ignore
  const burgerBtnModifiers = "w-50 p-2 rounded-full absolute top-4 right-6 rounded-full hover:bg-burger-menu-hover bg-burger-menu p-2 transition duration-300 ease-in-out font-medium z-50";

  return (
    <nav
      // prettier-ignore
      className={`${state ? "w-[15rem]" : "w-20"} ${"flex flex-col justify-between min-h-screen z-10 absolute top-0 left-0"}`}
      style={navAnimation}
    >
      <div className="w-full h-auto">
        <Button modifiers={burgerBtnModifiers} onClick={() => setState(!state)}>
          {state ? <MdClose /> : <GiHamburgerMenu />}
        </Button>
        <NavLinks state={state} />
      </div>
      <NavSocialMedia />
    </nav>
  );
};

export default Navigation;
