import React from "react";
import Hero from "../components/Hero";

const News = () => {
  return (
    <div data-testid="news-page">
      <Hero hero="homeHero">
        <div>Hello from News</div>
      </Hero>
    </div>
  );
};

export default News;
