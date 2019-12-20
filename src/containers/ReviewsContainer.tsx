import React, { useState, useEffect } from "react";
import { MovieIdProps } from "../utils/types";
import { urls } from "../utils/urls";
import Heading from "../components/Heading";
import Reviews from "../components/MovieInfo/Reviews";

type ReviewsType = {
    id: number;
    page: number;
    results: Review[];
    total_pages: number;
    total_results: number;
}

type Review = {
    id: number;
    author: string;
    content: string;
    url:string;
}

const ReviewsContainer: React.FC<MovieIdProps> = props => {
  const [state, changeState] = useState({
    loading: false,
    reviews: {} as ReviewsType
  });

  useEffect(() => {
    const url = urls.domain + "movie/" + props.slug + "/reviews" + urls.apikey;
    fetch(url)
      .then(response => response.json())
      .then(reviews =>
        changeState({
          loading: false,
          reviews: reviews.results
        })
      );
  }, [props]);

  if (state.loading) {
    return <div>loading...</div>;
  }
  if (!state.reviews) {
    return <div>didn't get reviews</div>;
  }
  return (
    <div className="reviews">
        <Heading>Reviews</Heading>
        <Reviews reviews={state.reviews}/>
    </div>
  );
};

export default ReviewsContainer;