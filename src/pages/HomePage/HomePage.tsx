import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { IconProps } from "../../utils/types";
import tabs from "./lang";
import styled from "styled-components";
import { LanguageContext } from "../../contexts/LanguageContext";

const Img = styled.img`
  width: 60px;
  height: auto;
`;

const Icon: React.FC<IconProps> = ({ name, logo, path }) => (
  <div className="table-icons-icon">
    <Link to={`/${path}`}>
      <Img src={logo} />
      <h4 className="table-icons__name">{name}</h4>
    </Link>
  </div>
);

const HomePage = () => {
  const language = useContext(LanguageContext);
  const { lang } = language;
  return (
    <div data-testid="home-page" className="home-page">
      <h1 className="maintitle">
        {
          //@ts-ignore
          tabs.welcome[lang]
        }
        <span className="maintitle-mark">4Birds</span>
      </h1>
      <div className="table-icons">
        {tabs["tabList"].map(({ name, logo, id }) => (
          //@ts-ignore
          <Icon key={id} name={name[lang]} logo={logo} path={name["en"]} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
