import React from "react";
import Hero from "../components/Hero";
import SearchContainer from "../containers/SearchContainer";

const SearchPage = () => {
  return (
    <div data-testid="news-page">
      <Hero hero="homeHero">
        <SearchContainer/>
      </Hero>
    </div>
  );
};

export default SearchPage;