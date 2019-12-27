import React from "react";
import { Link } from "react-router-dom";
import { IconProps } from "../../utils/types";
import { LangConsumer } from "../../contexts/LangContext";
import tabs from "./lang";
import styled from "styled-components";

const Img = styled.img`
  width: 60px;
  height: auto;
`;

const Icon: React.FC<IconProps> = ({ name, logo }) => (
  <div className="table-icons-icon">
    <Link to={`/${name}`}>
      <Img src={logo} />
      <h4 className="table-icons__name">{name}</h4>
    </Link>
  </div>
);

const HomePage = () => {
  return (
    <LangConsumer>
      {value => {
        const { lang } = value;

        return (
          <div data-testid="home-page" className="home-page">
            <h1 className="maintitle">
              
              {
              //@ts-ignore
              tabs.welcome[lang]} <span className="maintitle-mark">4Birds</span>
            </h1>
            <div className="table-icons">
              {tabs["tabList"].map(({ name, logo, id }) => (
                //@ts-ignore
                <Icon key={id} name={name[lang]} logo={logo} />
              ))}
            </div>
          </div>
        );
      }}
    </LangConsumer>
  );
};

export default HomePage;
