import React, { useState, useEffect } from "react";
import { PosterMovie, MovieIdProps } from "../utils/types";
import Grid from "../components/Grid";
import { urls } from "../utils/urls";

const SimilarContainer: React.FC<MovieIdProps> = props => {
  const [state, changeState] = useState({
    loading: false,
    movies: [] as PosterMovie[]
  });

  useEffect(() => {
    const url = urls.domain + "movie/" + props.slug + "/similar" + urls.apikey;
    fetch(url)
      .then(response => response.json())
      .then(movies =>
        changeState({
          loading: false,
          movies: movies.results
        })
      );
  }, [props]);

  if (state.loading) {
    return <div>loading...</div>;
  }
  if (!state.movies) {
    return <div>didn't get movies</div>;
  }
  return (
    <div className="grid">
      <Grid arr={state.movies} />
    </div>
  );
};

export default SimilarContainer;
