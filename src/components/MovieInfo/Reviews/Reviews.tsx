import React, { useContext, useState } from "react";
import Accordion from "../../Help/Accordion/Accordion";
import { Link } from "react-router-dom";
import { LanguageContext } from "../../../contexts/LanguageContext";
import language from "./lang";
import { AuthContext } from "../../../contexts/Auth";
import svg from "../../../img/sprite.svg";

type ReviewsType = {
  reviews: {
    id: number;
    page: number;
    results: Review[];
    total_pages: number;
    total_results: number;
  };
};

type Review = {
  id: number;
  author: string;
  content: string;
  url: string;
};

const Reviews: React.FC<ReviewsType> = (props: any) => {
  const { lang } = useContext(LanguageContext);
  //@ts-ignore
  const { currentUser } = useContext(AuthContext);
  const [starsState, setStarsState] = useState(0);

  const handleClick = (e:any) => {
    //@ts-ignore
    console.log(e.target.id);
  };

  const numStars = () => {
    const stars = [];

    let i = 0;
    for (i; i < 10 && i < starsState; i++) {
      stars.push(
        <svg
          key={i}
          id={`${10 - i}`}
          className="stars__color"
          onClick={e => {
            console.log(e.target);
            setStarsState(1);
            console.log("i");
          }}
        >
          <use xlinkHref={svg + "#icon-star"}></use>
        </svg>
      );
    }
    for (i; i < 10; i++) {
      stars.push(
        <svg
          key={i}
          id={`${10 - i}`}
          className="stars__nocolor"
          onClick={e => handleClick(e)}
        >
          <use xlinkHref={svg + "#icon-star"}></use>
        </svg>
      );
    }
    return stars;
  };
  return (
    <>
      {currentUser ? (
        <div className="review">
          <textarea
            className="review-textarea"
            name=""
            id=""
            cols={30}
            rows={10}
            placeholder="Add your review..."
          />
          <div className="review-rating">
            <div className="review-rating-left">
              <p>Your Rating: </p>
              <div className="review-rating__stars">
                <span>{numStars()}</span>
              </div>
            </div>

            <button className="review__submit">Submit</button>
          </div>
        </div>
      ) : (
        <Link to="/user">
          <Accordion title={language["login"][lang]} />
        </Link>
      )}

      {[].map.call(props.reviews, review => (
        <Accordion key={review["id"]} title={review["author"]}>
          <p>{review["content"]}</p>
        </Accordion>
      ))}
    </>
  );
};

export default Reviews;
