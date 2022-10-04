import "./index.css";
import React, { useState, createContext } from "react";
import Home from "./pages/Home";
import { INITIAL_STATE } from "./constants/initialState";
import { Routes, Route } from "react-router-dom";
import Start from "./pages/Start";

const AppContext = createContext();

const App = () => {
  const [state, setState] = useState(INITIAL_STATE);

  return (
    <AppContext.Provider value={state}>
      <Routes>
        <Route path="/" element={<Home gameState={state} />} />
        <Route path="/start" element={<Start gameState={state} />} />
      </Routes>
    </AppContext.Provider>
  );
};

export default App;
