import React, { useState, useEffect, useContext } from "react";
import MovieInfo from "../../components/MovieInfo/MovieInfo";
import { urls } from "../../utils/urls";
import { FetchMovie, MovieInfoContainerProps } from "../../utils/types";
import SlugContext from "../../contexts/SlugContext";
import { LanguageContext } from "../../contexts/LanguageContext";
import language from "./lang";

const MovieInfoContainer: React.FC<MovieInfoContainerProps> = props => {
  const [state, changeState] = useState({
    loading: false,
    movie: {} as FetchMovie
  });

  const { lang } = useContext(LanguageContext);

  useEffect(() => {
    const url =
      urls.domain +
      "movie/" +
      props.slug +
      urls.apikey +
      "&append_to_response=videos,credits,external_ids,images" +
      "&language=" +
      lang;
    fetch(url)
      .then(response => response.json())
      .then(movie => changeState({ loading: false, movie: movie }));
    window.scrollTo(0, 0);
  }, [props]);

  if (state.loading) {
    //@ts-ignore
    return <div>{language["loading"][lang]}</div>;
  }
  if (!state.movie) {
    //@ts-ignore
    return <div>{language["noInfo"][lang]}</div>;
  }
  
  return (
    <SlugContext.Provider value={props}>
      <MovieInfo movie={state.movie} />
    </SlugContext.Provider>
  );
};

export default MovieInfoContainer;
