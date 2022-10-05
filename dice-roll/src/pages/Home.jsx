import React from "react";
import Page from "../components/UI/Page";
import Navigation from "../components/Navigation/Navigation";
import Start from "./Start";
import About from "./About";
import Score from "./Score";

const Home = () => {
  return (
    <Page modifiers="relative">
      <Navigation />
      <Start />
      <About />
      <Score />
    </Page>
  );
};

export default Home;
