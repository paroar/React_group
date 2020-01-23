import React from "react";
import svg from "../img/sprite.svg";

type StarsProps = {
    vote_average: number;
}

const Stars: React.FC<StarsProps> = (props) => {
  const numStars = () => {
    const stars = [];

    let roundAverage = Math.round(props.vote_average);
    for (let i = 0; i < 10; i++) {
      stars.push(
        <svg
          key={i}
          className={`${i < roundAverage ? "svg__color" : "svg__nocolor"}`}
        >
          <use xlinkHref={svg + "#icon-star"}></use>
        </svg>
      );
    }
    return stars;
  };

  return <div className="rating-stars">{numStars()}</div>;
};

export default Stars;
