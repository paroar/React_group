import React from "react";
import svg from "../../../img/sprite.svg";

type RatingProps = {
    handleClick: (e: React.MouseEvent<SVGSVGElement, MouseEvent>) => void;
    starsState: number;
}

const Rating: React.FC<RatingProps> = (props) => {
  const numStars = () => {
    const stars = [];

    let i = 0;
    for (i; i < 10; i++) {
      stars.push(
        <svg
          key={i}
          id={`${10 - i}`}
          className={`${
            10 - i > props.starsState ? "stars_nocolor" : "stars__color"
          }`}
          onClick={e => props.handleClick(e)}
        >
          <use id={`${10 - i}`} xlinkHref={svg + "#icon-star"}></use>
        </svg>
      );
    }
    return stars;
  };
  
  return (
    <div className="review-rating-left">
      <p>Your Rating: </p>
      <div className="review-rating__stars">
        <span>{numStars()}</span>
      </div>
    </div>
  );
};

export default Rating;
