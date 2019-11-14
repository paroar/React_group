import React, { useState, useEffect } from "react";
import MovieInfo from "../components/MovieInfo";
import { urls } from "../utils/urls";
import { FetchMovie, MovieInfoContainerProps } from "../utils/types";

const MovieInfoContainer: React.FC<MovieInfoContainerProps> = props => {
  const [state, changeState] = useState({
    loading: false,
    movie: {} as FetchMovie
  });

  useEffect(() => {
    const url =
      urls.domain +
      "movie/" +
      props.slug +
      urls.apikey +
      "&append_to_response=videos,credits";
    fetch(url)
      .then(response => response.json())
      .then(movie => changeState({ loading: false, movie: movie }));
    window.scrollTo(0, 0);
  }, [props]);

  if (state.loading) {
    return <div>loading...</div>;
  }
  if (!state.movie) {
    return <div>didn't get info</div>;
  }
  return <MovieInfo movie={state.movie} />;
};

export default MovieInfoContainer;
