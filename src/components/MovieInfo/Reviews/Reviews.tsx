import React, { useContext } from "react";
import Accordion from "../../Help/Accordion/Accordion";
import { Link } from "react-router-dom";
import { LanguageContext } from "../../../contexts/LanguageContext";
import language from "./lang";
import { AuthContext } from "../../../contexts/Auth";

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

  return (
    <>
      {currentUser ? (
        <div>
          <textarea
            name=""
            id=""
            cols={30}
            rows={10}
            placeholder="Add your review..."
          />
          <button>Submit</button>
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
