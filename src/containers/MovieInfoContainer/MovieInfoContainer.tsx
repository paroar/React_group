import React, { useState, useEffect, useContext } from "react";
import MovieInfo from "../../components/MovieInfo/MovieInfo";
import { urls } from "../../utils/urls";
import { FetchMovie, MovieInfoContainerProps } from "../../utils/types";
import SlugContext from "../../contexts/SlugContext";
import { LanguageContext } from "../../contexts/LanguageContext";
import language from "./lang";

const MovieInfoContainer: React.FC<MovieInfoContainerProps> = () => {
  const [state, changeState] = useState({
    loading: false,
    movie: {} as FetchMovie
  });

  const { lang } = useContext(LanguageContext);
  const { slug } = useContext(SlugContext);

  useEffect(() => {
    const url =
      urls.domain +
      "movie/" +
      slug +
      urls.apikey +
      "&append_to_response=videos,credits,external_ids,images" +
      "&language=" +
      lang;
    fetch(url)
      .then(response => response.json())
      .then(movie => changeState({ loading: false, movie: movie }));
    window.scrollTo(0, 0);
  }, [slug, lang]);

  if (state.loading) {
    //@ts-ignore
    return <div>{language["loading"][lang]}</div>;
  }
  if (!state.movie) {
    //@ts-ignore
    return <div>{language["noInfo"][lang]}</div>;
  }
  return <MovieInfo movie={state.movie} />;
};

export default MovieInfoContainer;
