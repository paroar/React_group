import React from "react";
import Hero from "../components/Hero";
import SearchContainer from "../containers/SearchContainer";

const HomePage = () => {
  return (
    <div data-testid="home-page">
      <Hero hero="homeHero">
        <SearchContainer/>
      </Hero>
    </div>
  );
};

export default HomePage;
