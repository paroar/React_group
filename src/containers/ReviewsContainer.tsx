import React, { useState, useEffect, useContext } from "react";
import { urls } from "../utils/urls";
import Heading from "../components/Heading";
import Reviews from "../components/MovieInfo/Reviews";
import { LanguageContext } from "../contexts/LanguageContext";
import SlugContext from "../contexts/SlugContext";

type ReviewsType = {
  id: number;
  page: number;
  results: Review[];
  total_pages: number;
  total_results: number;
};

type Review = {
  id: number;
  author: string;
  content: string;
  url: string;
};

const ReviewsContainer: React.FC = () => {
  const [state, changeState] = useState({
    loading: false,
    reviews: {} as ReviewsType
  });
  
  const { lang } = useContext(LanguageContext);
  const { slug } = useContext(SlugContext);

  useEffect(() => {
    const url =
      urls.domain +
      "movie/" +
      slug +
      "/reviews" +
      urls.apikey +
      "&language=" +
      lang;
    fetch(url)
      .then(response => response.json())
      .then(reviews =>
        changeState({
          loading: false,
          reviews: reviews.results
        })
      );
  }, []);

  if (state.loading) {
    return <div>loading...</div>;
  }
  if (!state.reviews) {
    return <div>didn't get reviews</div>;
  }
  return (
    <div className="reviews">
      <Heading>Reviews</Heading>
      <Reviews reviews={state.reviews} />
    </div>
  );
};

export default ReviewsContainer;
