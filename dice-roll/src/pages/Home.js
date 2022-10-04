import React from "react";
import Page from "../components/UI/Page";
import Navigation from "../components/UI/Navigation";
import Start from "./Start";

const Home = () => {
  return (
    <Page modifiers="relative bg-blue-300">
      <Navigation />
      <Start />
    </Page>
  );
};

export default Home;
