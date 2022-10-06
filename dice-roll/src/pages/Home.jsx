import React from "react";
import Page from "../components/UI/Page";
import Start from "./Start";
import About from "./About";
import Score from "./Score";

const Home = () => {
  return (
    <Page modifiers="relative">
      <Start />
      <About />
      <Score />
    </Page>
  );
};

export default Home;
