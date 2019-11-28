import React from "react";
import Hero from "../components/Hero";
import { TiHome } from "react-icons/ti";
import { IoMdSearch, IoMdHelp } from "react-icons/io";
import { GiFilmSpool } from "react-icons/gi";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div data-testid="home-page">
      <Hero hero="homeHero">
        <h1 className="maintitle">Welcome to <span className="maintitle-mark">4Birds</span></h1>
        <div className="table-icons">
          <div className="table-icons-icon">
            <Link to="/"><TiHome size="90"/></Link>
            <h6>HOME</h6>
          </div>
          <div className="table-icons-icon">
            <Link to="/search"><IoMdSearch size="90"/></Link>
            <h6>SEARCH</h6>
          </div>
          <div className="table-icons-icon">
            <Link to="/help"><IoMdHelp size="90"/></Link>
            <h6>HELP</h6>
          </div>
          <div className="table-icons-icon">
            <Link to="/catalogue"><GiFilmSpool size="90"/></Link>
            <h6>CATALOGUE</h6>
          </div>
        </div>
      </Hero>
    </div>
  );
};

export default HomePage;
