import React from "react";
import Accordion from "./Help/Accordion/Accordion";
import { Link } from "react-router-dom";

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
  return (
    <>
      {[].map.call(props.reviews, _review => (
        <Accordion title={_review["author"]}>
          <p>{_review["content"]}</p>
        </Accordion>
      ))}
      <Link to="/user">
        <Accordion title="Login to leave a comment" />
      </Link>
    </>
  );
};

export default Reviews;
