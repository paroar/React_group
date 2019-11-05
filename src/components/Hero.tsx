import React from "react";
import { HeroProps } from "../utils/types";

const Hero: React.FC<HeroProps> = ({ children, hero }) => {
  return (
    <header className={hero} data-testid="hero">
      {children}
    </header>
  );
};

export default Hero;
