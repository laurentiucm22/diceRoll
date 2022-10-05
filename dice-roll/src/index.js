import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import { StateProvider } from "./context/StateProvider";
import { INITIAL_STATE } from "./context/initialState";
import reducer from "./context/reducer";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Router>
    <StateProvider initialState={INITIAL_STATE} reducer={reducer}>
      <App />
    </StateProvider>
  </Router>
);
