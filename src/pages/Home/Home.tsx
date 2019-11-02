import React from "react";
import Hero from "../../components/Hero";

const Home = () => {
  return (
    <div data-testid="home-page">
      <Hero hero="homeHero">
        <div>Hello from Hero</div>
      </Hero>
    </div>
  );
};

export default Home;
