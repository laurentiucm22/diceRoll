import React from "react";
import { Link } from "react-router-dom";

const NavLinks = ({ state }) => {
  return (
    <ul
      className={`${
        state
          ? "opacity-1 pointer-events-auto"
          : "opacity-0 pointer-events-none"
      }
        ${"flex flex-col pt-20 font-medium transition duration-300"}`}
    >
      <Link
        to="/"
        className="w-full py-2 pl-5 transition-all duration-300 hover:bg-blue-300 hover:text-slate-50"
      >
        Home
      </Link>
      <Link
        to="/about"
        className="w-full py-2 pl-5 transition-all duration-300 hover:bg-blue-300 hover:text-slate-50"
      >
        About
      </Link>
      <Link
        to="/score"
        className="w-full py-2 pl-5 transition-all duration-300 hover:bg-blue-300 hover:text-slate-50"
      >
        Score
      </Link>
    </ul>
  );
};

export default NavLinks;
