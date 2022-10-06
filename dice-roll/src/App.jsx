import "./index.css";
import React from "react";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import Start from "./pages/Start";
import About from "./pages/About";
import Score from "./pages/Score";
import Navigation from "./components/Navigation/Navigation";
import Game from "./pages/Game";

const App = () => {
  return (
    <div className="w-screen h-screen bg-left-bottom bg-cover bg-app-cover ">
      <Navigation />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/start" element={<Start />} />
        <Route path="/game" element={<Game />} />
        <Route path="/about" element={<About />} />
        <Route path="/score" element={<Score />} />
      </Routes>
    </div>
  );
};

export default App;
