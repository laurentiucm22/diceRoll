import React from "react";
import { Link } from "react-router-dom";

const NavLinks = ({ burgerBtnState }) => {
  return (
    <ul
      className={`${
        burgerBtnState
          ? "opacity-1 pointer-events-auto"
          : "opacity-0 pointer-events-none"
      }
        ${"flex flex-col pt-20 font-medium transition-opacity duration-300 hover:texxt-nav-text"}`}
    >
      <Link
        to="/"
        className="w-full py-2 pl-5 transition-all duration-300 hover:bg-nav-links hover:text-nav-text"
      >
        Home
      </Link>
      <Link
        to="/about"
        className="w-full py-2 pl-5 transition-all duration-300 hover:bg-nav-links hover:text-nav-text"
      >
        About
      </Link>
      <Link
        to="/score"
        className="w-full py-2 pl-5 transition-all duration-300 hover:bg-nav-links hover:text-nav-text"
      >
        Score
      </Link>
    </ul>
  );
};

export default NavLinks;
