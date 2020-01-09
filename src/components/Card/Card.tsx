import React, { useContext } from "react";
import styled from "styled-components";
import language from "./lang";
import { LanguageContext } from "../../contexts/LanguageContext";

type CardProps = {
  title: string;
  vote?: number;
  backdrop_path?: string;
  charName?: string;
};

const Genre = styled.div`
  position: absolute;
  bottom: 5%;
  left: 50%;
  transform: translateX(-50%);
  width: 33%;
  padding: 0.4rem;
  background-color: grey;
  margin: 0.2rem auto;
  border-radius: 2px;
  cursor: pointer;
  transition: all 0.3s;
  z-index: 2;
  text-align: center;

  &:hover {
    background-color: #f76c5e;
    transform: translate(-50%, -2px);
  }
`;

const Num = styled.h3`
  position: absolute;
  top: 66%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-weight: bold;
  text-align: center;
  z-index: 2;
`;

const Title = styled.h2`
  padding-top: 1rem;
  text-align: center;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
`;

const SubTitle = styled.h4`
  padding: 1rem;
  text-align: center;
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translateX(-50%);
`;

const Card: React.FC<CardProps> = props => {
  const { lang } = useContext(LanguageContext);

  const style = {
    background: `url(https://image.tmdb.org/t/p/w500${props.backdrop_path}) center`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundAttachment: "fixed"
  };

  return (
    <div className="card">
      <div className="card__side card__side--front">{props.children}</div>
      <div className="card__side card__side--back" style={style}>
        <Title>{props.title}</Title>
        {props.vote ? (
          <>
            <Num>{props.vote}/10</Num>
            <Genre>{language["add"][lang]}</Genre>
          </>
        ) : null}

        {props.charName ? (
          <SubTitle>
            {language["as"][lang]}
            {props.charName}
          </SubTitle>
        ) : null}
      </div>
    </div>
  );
};

export default Card;
