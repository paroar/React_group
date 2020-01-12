import React, { useContext } from "react";
import Accordion from "../../Accordion/Accordion";
import { Link } from "react-router-dom";
import { LanguageContext } from "../../../contexts/LanguageContext";
import language from "./lang";

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

  return (
    <>
      {[].map.call(props.reviews, review => (
        <Accordion key={review["id"]} title={review["author"]}>
          <p>{review["content"]}</p>
        </Accordion>
      ))}
      <Link to="/user">
        <Accordion title={language["login"][lang]} />
      </Link>
    </>
  );
};

export default Reviews;
