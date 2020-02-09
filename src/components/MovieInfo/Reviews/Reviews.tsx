import React, { useContext, useState, useEffect } from "react";
import Accordion from "../../Help/Accordion/Accordion";
import {withRouter, RouteComponentProps } from "react-router-dom";
import { LanguageContext } from "../../../contexts/LanguageContext";
import language from "./lang";
import { AuthContext } from "../../../contexts/Auth";
import Rating from "./Rating";
import TextArea from "./TextArea";
import firebase from "firebase";
import SlugContext from "../../../contexts/SlugContext";

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

type OurReviews = {
  movieId: string;
  rating: string;
  review: string;
  user: string;
  key: string;
};

const Reviews: React.FC<ReviewsType & RouteComponentProps> = props => {
  const { lang } = useContext(LanguageContext);
  const { slug } = useContext(SlugContext);
  //@ts-ignore
  const { currentUser } = useContext(AuthContext);
  const [starsState, setStarsState] = useState(0);
  const [textAreaState, setTextAreaState] = useState("");
  const [isSubmitable, setIsSubmitable] = useState(false);
  const [ourReviews, setOurReviews] = useState<OurReviews[]>([]);

  const handleClick = (e: React.MouseEvent<SVGSVGElement, MouseEvent>) => {
    //@ts-ignore
    setStarsState(e.target.id);
  };

  const handleTextArea = (s: string) => {
    setTextAreaState(s);
  };

  useEffect(() => {
    starsState !== 0 && textAreaState !== ""
      ? setIsSubmitable(false)
      : setIsSubmitable(true);
  }, [textAreaState, starsState]);

  var dbRefObject = firebase.database().ref();

  useEffect(() => {
    firebase
      .database()
      .ref()
      .child(`reviews/movie/${slug}/${lang}/`)
      .on("value", snap =>
        snap.val() ? setOurReviews(Object.values(snap.val())) : null
      );
  }, [lang]);

  const handleSubmit = () => {
    var key = firebase.database().ref().key;
    var updates = {};

    //@ts-ignore
    updates[`/reviews/movie/${slug}/${lang}/` + currentUser.uid] = {
      movieId: slug,
      rating: starsState,
      review: textAreaState,
      user: currentUser.email,
      key: key
    };

    dbRefObject.update(updates);
    setTextAreaState("");

    setStarsState(0);
  };

  const handleRedirect = () => {
    props.history.push({
      pathname: "/user",
      search: `/catalogue/${slug}`
    });
  };

  return (
    <>
      {currentUser ? (
        <div className="review">
          <TextArea
            handleTextArea={handleTextArea}
            textAreaState={textAreaState}
          />
          <div className="review-rating">
            <Rating starsState={starsState} handleClick={handleClick} />
            <button
              className={`review__submit ${
                isSubmitable ? "disabled" : "active"
              }`}
              disabled={isSubmitable}
              onClick={handleSubmit}
            >
              Submit
            </button>
          </div>
        </div>
      ) : (
        <div onClick={handleRedirect}>
          <Accordion title={language["login"][lang]} />
        </div>
      )}

      {ourReviews.map(review => (
        <Accordion
          key={review["key"]}
          title={review["user"]}
          vote_average={Number(review["rating"])}
        >
          <p>{review["review"]}</p>
        </Accordion>
      ))}

      {[].map.call(props.reviews, review => (
        <Accordion key={review["id"]} title={review["author"]}>
          <p>{review["content"]}</p>
        </Accordion>
      ))}
    </>
  );
};

export default withRouter(Reviews);
