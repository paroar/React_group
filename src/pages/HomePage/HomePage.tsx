import React from "react";
import { Link } from "react-router-dom";
import { IconProps } from "../../utils/types";
import { LangConsumer } from "../../contexts/LangContext";
import tabs from "./lang";
import styled from "styled-components";

const Img = styled.img`
  width:60px;
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
        //const { lang } = value;
        console.log(value);
        
        //@ts-ignore
        const xs: IconProps[] = tabs["es"];

        return (
          <div data-testid="home-page" className="home-page">
            <h1 className="maintitle">
              Welcome to <span className="maintitle-mark">4Birds</span>
            </h1>
            <div className="table-icons">
              {xs.map(({ name, logo, id }) => (
                <Icon key={id} name={name} logo={logo} />
              ))}
            </div>
          </div>
        );
      }}
    </LangConsumer>
  );
};

export default HomePage;
