import React from "react";

type CardProps = {
  title: string;
  vote: string;
  backdrop_path: string;
};

const Card: React.FC<CardProps> = props => {
  const style = {
    background: `url(https://image.tmdb.org/t/p/w500${props.backdrop_path}) center`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat"
  };

  return (
    <div className="card">
      <div className="card__side card__side--front">{props.children}</div>
      <div className="card__side card__side--back" style={style}></div>
    </div>
  );
};

export default Card;
