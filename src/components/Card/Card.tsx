import React, { useContext, useState } from "react";
import styled from "styled-components";
import language from "./lang";
import { LanguageContext } from "../../contexts/LanguageContext";
import svg from "../../img/sprite.svg";
import firebase from "firebase";
import NewList from "../Dashboard/MovieList/NewList";

type CardProps = {
  title: string;
  vote?: number;
  backdrop_path?: string;
  charName?: string;
  id?: number;
  imdb?: string | number
};

const Num = styled.h3``;

const Title = styled.p`
  margin: 1rem;
  font-size: 1.5rem;
  font-weight: 600;
`;

const SubTitle = styled.h4``;

const Card: React.FC<CardProps> = props => {
  const addFavorite = () => {
    // const [favorite, setFavorite] = useState(false);
      firebase
      .firestore()
      .collection('users')
      .doc('testUser')
      .collection('lists')
      .doc('favorites')
      .collection('favorites')
      .add({
        id: props.id,
        title: props.title,
        path: props.backdrop_path
      })
  }  

  const addWatched = () => {
    firebase
    .firestore()
    .collection('users')
    .doc('testUser')
    .collection('lists')
    .doc('watched')
    .collection('movies')
    .add({
      id: props.id,
      title: props.title,
      path: props.backdrop_path
    })
  }
  const [open, setOpen] = useState(false);
  const toggleOpen = () => {
    setOpen(!open)
  }

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
                <svg className="back__icon" onClick={addFavorite}>
                  <use xlinkHref={svg + "#icon-heart"}></use>
                </svg>
                <svg className="back__icon" onClick={addWatched}>
                  <use xlinkHref={svg + "#icon-eye"}></use>
                </svg>
                <svg className="back__icon" onClick={toggleOpen}>
                  <use xlinkHref={svg + "#icon-add-to-list"}></use>
                  {open && <NewList></NewList>}
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
