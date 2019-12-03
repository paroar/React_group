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
            <Link to="/"><TiHome size="60"/></Link>
            <h4>HOME</h4>
          </div>
          <div className="table-icons-icon">
            <Link to="/search"><IoMdSearch size="60"/></Link>
            <h4>SEARCH</h4>
          </div>
          <div className="table-icons-icon">
            <Link to="/help"><IoMdHelp size="60"/></Link>
            <h4>HELP</h4>
          </div>
          <div className="table-icons-icon">
            <Link to="/catalogue"><GiFilmSpool size="60"/></Link>
            <h4>CATALOGUE</h4>
          </div>
        </div>
      </Hero>
    </div>
  );
};

export default HomePage;
