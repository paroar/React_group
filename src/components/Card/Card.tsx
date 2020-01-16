import React, { useContext } from "react";
import styled from "styled-components";
import language from "./lang";
import { LanguageContext } from "../../contexts/LanguageContext";
import svg from "../../img/sprite.svg";

type CardProps = {
  title: string;
  vote?: number;
  backdrop_path?: string;
  charName?: string;
};

const Num = styled.h3``;

const Title = styled.h2`
  margin: 1rem;
`;

const SubTitle = styled.h4``;

const Card: React.FC<CardProps> = props => {
  const { lang } = useContext(LanguageContext);

  const style = {
    background: `url(https://image.tmdb.org/t/p/w500${props.backdrop_path}) center`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat"
  };

  return (
    <div className="card">
      <div className="card__side card__side--front">{props.children}</div>
      <div className="card__side card__side--back" style={style}>
        <div className="back__text">
          <Title>{props.title}</Title>
          {props.vote ? (
            <>
              <Num>{props.vote}/10</Num>
              <div className="icons">
                <svg className="filter__icon">
                  <use xlinkHref={svg + "#icon-heart"}></use>
                </svg>
                <svg className="filter__icon">
                  <use xlinkHref={svg + "#icon-eye"}></use>
                </svg>
                <svg className="filter__icon">
                  <use xlinkHref={svg + "#icon-add-to-list"}></use>
                </svg>
              </div>
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
    </div>
  );
};

export default Card;
