import React, { useState, useEffect } from "react";
import Grid from "../components/Grid";
import { urls } from "../utils/urls";
import { CatalogueContainerProps } from "../utils/types";

const CatalogueContainer: React.FC<CatalogueContainerProps> = props => {
  const [state, changeState] = useState({
    loading: false,
    movies: [],
    currentPage: props.page
  });

  useEffect(() => {
    const url =
      urls.domain +
      "movie/now_playing" +
      urls.apikey +
      "&page=" +
      state.currentPage;
    fetch(url)
      .then(response => response.json())
      .then(movies =>
        changeState({
          loading: false,
          movies: movies.results,
          currentPage: props.page
        })
      );
  },[props, state.currentPage]);

  if (state.loading) {
    return <div>loading...</div>;
  }
  if (state.movies.length === 0) {
    return <div>didn't get info</div>;
  }
  return <Grid arr={state.movies} />;
};

export default CatalogueContainer;
