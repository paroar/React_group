import React from "react";
import Hero from "../components/Hero";
import { MdPerson } from "react-icons/md";
import { IoMdSearch, IoMdHelp } from "react-icons/io";
import { GiFilmSpool } from "react-icons/gi";
import { Link } from "react-router-dom";
import { IconProps } from "../utils/types";

const tabs = [
  {
    id: 0,
    logo: <MdPerson size="60" />,
    name: "user"
  },
  {
    id: 1,
    logo: <IoMdSearch size="60" />,
    name: "search"
  },
  {
    id: 2,
    logo: <IoMdHelp size="60" />,
    name: "help"
  },
  {
    id: 3,
    logo: <GiFilmSpool size="60" />,
    name: "catalogue"
  }
];

const Icon: React.FC<IconProps> = ({ name, logo }) => (
  <div className="table-icons-icon">
    <Link to={`/${name}`}>
      {logo}
      <h4 className="table-icons__name">{name}</h4>
    </Link>
  </div>
);

const HomePage = () => {
  return (
    <div data-testid="home-page">
      <h1 className="maintitle">
        Welcome to <span className="maintitle-mark">4Birds</span>
      </h1>
      <Hero hero="homeHero">
        <div className="table-icons">
          {tabs.map(({ name, logo, id }) => (
            <Icon key={id} name={name} logo={logo} />
          ))}
        </div>
      </Hero>
    </div>
  );
};

export default HomePage;
