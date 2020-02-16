import React, { useContext } from "react";
import styled from "styled-components";
import language from "./lang";
import { LanguageContext } from "../../contexts/LanguageContext";
<<<<<<< HEAD
import firebase from "firebase";
=======
import svg from "../../img/sprite.svg";
>>>>>>> dev

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
      .collection('favorites')
      .doc('subdocument')
      .collection('subcollection')
      .add({
        title: props.title,
        backdrop_path: props.backdrop_path
        // imdb_id: props.imdb
      })
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
<<<<<<< HEAD
        <Title>{props.title}</Title>
        {props.vote ? (
          <>
            <Num>{props.vote}/10</Num>
            <Genre onClick={addFavorite}>{language["add"][lang]}</Genre>
          </>
        ) : null}
=======
        <div className="back__text">
          <Title>{props.title}</Title>
          {props.vote ? (
            <>
              <Num>{props.vote}/10</Num>
              <div className="icons">
                <svg className="back__icon">
                  <use xlinkHref={svg + "#icon-heart"}></use>
                </svg>
                <svg className="back__icon">
                  <use xlinkHref={svg + "#icon-eye"}></use>
                </svg>
                <svg className="back__icon">
                  <use xlinkHref={svg + "#icon-add-to-list"}></use>
                </svg>
              </div>
            </>
          ) : null}
>>>>>>> dev

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
