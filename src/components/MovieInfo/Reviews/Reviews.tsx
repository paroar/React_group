import React, { useContext, useState, useEffect } from "react";
import Accordion from "../../Help/Accordion/Accordion";
import { Link } from "react-router-dom";
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
};

const Reviews: React.FC<ReviewsType> = (props: any) => {
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
    var ourR: any[] = [];
    firebase.database().ref().child(`reviews/review/${slug}`).on("value", snap => {
      debugger
      snap.forEach(item => {
      var itemVal = item.val();
      ourR.push(itemVal);
    })});
    setOurReviews(ourR);
  }, []);

  const handleSubmit = () => {
    var updates = {};

    //@ts-ignore
    updates[`/reviews/review/${slug}/` + currentUser.uid] = {
      movieId: slug,
      rating: starsState,
      review: textAreaState,
      user: currentUser.uid
    };

    dbRefObject.update(updates);
  };

  if (ourReviews.length) {
    debugger

  }

  console.log("our",ourReviews);

  return (
    <>
      {currentUser ? (
        <div className="review">
          <TextArea handleTextArea={handleTextArea} />
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
        <Link to="/user">
          <Accordion title={language["login"][lang]} />
        </Link>
      )}

      {ourReviews.map(review => (
        <Accordion key={review["movieId"]} title={review["user"]}>
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

export default Reviews;
