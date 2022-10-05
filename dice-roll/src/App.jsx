import "./index.css";
import React from "react";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import Start from "./pages/Start";
import About from "./pages/About";
import Score from "./pages/Score";

const App = () => {
  return (
    <Routes>
      <Route path="/" exact element={<Home />} />
      <Route path="/start" element={<Start />} />
      <Route path="/about" element={<About />} />
      <Route path="/score" element={<Score />} />
    </Routes>
  );
};

export default App;
