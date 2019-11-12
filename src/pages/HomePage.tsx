import React from "react";
import Hero from "../components/Hero";
import Button from "../components/Button";

const HomePage = () => {
  return (
    <div data-testid="home-page">
      <Hero hero="homeHero">
        <Button>Browse</Button>
      </Hero>
    </div>
  );
};

export default HomePage;
