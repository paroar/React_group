import React, { useState, useEffect } from "react";
import { PosterMovie, MovieIdProps } from "../utils/types";
import Grid from "../components/Grid";
import { urls } from "../utils/urls";
import Heading from "../components/Heading";

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
  if(state.movies.length===0){
    return null;
  }
  return (
    <div className="similars">
      <Heading>Similars</Heading>
      <div className="grid--similar">
        <Grid arr={state.movies} />
      </div>
    </div>
  );
};

export default SimilarContainer;
