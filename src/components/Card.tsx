import React from "react";

type CardProps = {
  title: string;
  vote: string;
};

const Card: React.FC<CardProps> = props => {
  return (
    <div className="card">
      <div className="card__side card__side--front">{props.children}</div>
      <div className="card__side card__side--back">
        <h3>{props.title}</h3>
        <h4>{props.vote}</h4>
      </div>
    </div>
  );
};

export default Card;
