import React from "react";
import Hero from "../components/Hero";
import Button from "../components/Button";
import Heading from "../components/Heading";

const HomePage = () => {
  return (
    <div data-testid="home-page">
      <Hero hero="homeHero">
        <Heading>Welcome</Heading>
        <Heading></Heading>
        <Button>Browse</Button>
      </Hero>
    </div>
  );
};

export default HomePage;
