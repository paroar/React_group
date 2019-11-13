import React from "react";
import Hero from "../components/Hero";
import Search from "../components/Search";

const HomePage = () => {
  return (
    <div data-testid="home-page">
      <Hero hero="homeHero">
        <Search/>
      </Hero>
    </div>
  );
};

export default HomePage;
