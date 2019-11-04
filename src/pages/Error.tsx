import React from "react";
import Hero from "../components/Hero";

const Error = () => {
  return (
    <div data-testid="error-page">
      <Hero hero="homeHero">
        <div>Hello from Error</div>
      </Hero>
    </div>
  );
};

export default Error;
