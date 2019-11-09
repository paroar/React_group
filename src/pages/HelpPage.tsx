import React from "react";
import Hero from "../components/Hero";

const HelpPage = () => {
  return (
    <div data-testid="help-page">
      <Hero hero="homeHero">
        <div>Hello from Help</div>
      </Hero>
    </div>
  );
};

export default HelpPage;
