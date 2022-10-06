import React, { useState } from "react";
import Button from "../UI/Button";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdClose } from "react-icons/md";
import NavLinks from "./NavLinks";
import NavSocialMedia from "./NavSocialMedia";

const Navigation = () => {
  const [burgerBtnState, setBurgerBtnState] = useState(false);

  // prettier-ignore
  const navAnimation = {
    background:
      "linear-gradient(to right bottom, rgba(255, 255, 255, 0.5),rgba(255, 255, 255, 0.4) )",
    WebkitTransition: "all 0.6s cubic-bezier(.42, 0, .58, 1)",
    transition: "all 0.6s cubic-bezier(.42, 0, .58, 1)",
    backdropFilter: "blur(2rem)",
  };

  // prettier-ignore
  const burgerBtnModifiers = "w-50 p-2 rounded-full absolute top-4 right-4 rounded-full hover:bg-burger-menu p-2 transition-all duration-300 ease-in-out font-medium z-50 hover:text-nav-text";

  return (
    <nav
      // prettier-ignore
      className={`${burgerBtnState ? "w-[15rem]" : "w-[4rem]"} ${"flex flex-col justify-between min-h-screen z-10 absolute top-0 left-0"}`}
      style={navAnimation}
    >
      <div className="w-full h-auto">
        <Button
          modifiers={burgerBtnModifiers}
          onClick={() => setBurgerBtnState(!burgerBtnState)}
        >
          {burgerBtnState ? <MdClose /> : <GiHamburgerMenu />}
        </Button>
        <NavLinks burgerBtnState={burgerBtnState} />
      </div>
      <NavSocialMedia />
    </nav>
  );
};

export default Navigation;
