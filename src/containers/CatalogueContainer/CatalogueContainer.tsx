import React, { useState, useEffect, useContext } from "react";
import Grid from "../../components/Grid";
import { urls } from "../../utils/urls";
import { CatalogueContainerProps } from "../../utils/types";
import { LanguageContext } from "../../contexts/LanguageContext";
import language from "./lang";
import { GenreContext } from "../../contexts/GenreContext";

const CatalogueContainer: React.FC<CatalogueContainerProps> = props => {
  const [state, changeState] = useState({
    loading: false,
    movies: [],
    currentPage: props.page
  });

  const { lang } = useContext(LanguageContext);
  let { genre } = useContext(GenreContext);

  useEffect(() => {
    var url = "";
    genre =
      genre !== ""
        ? `&with_genres=${genre}`
        : "";
    const sort = "&sort_by=" + `${props.sort || "popularity"}`;
    const order = props.order ? "." + props.order : ".desc";
    const rating =
      props.rating !== "" && typeof props.rating !== "undefined"? `&vote_average.gte=${props.rating}` : "";
    const keyword =
      props.keyword !== "" && typeof props.keyword !== "undefined"? `&with_keywords=${props.keyword}` : "";

    url =
      urls.domain +
      "discover/movie" +
      urls.apikey +
      genre +
      sort +
      order +
      rating +
      keyword +
      "&page=" +
      state.currentPage +
      "&vote_count.gte=20" +
      "&language=" +
      lang;

    console.log("URLK", url);

    fetch(url)
      .then(response => response.json())
      .then(movies =>
        changeState({
          loading: false,
          movies: movies.results,
          currentPage: props.page
        })
      );
  }, [props, state.currentPage]);

  if (state.loading) {

    return <div>{language.loading[lang]}</div>;
  }
  if (state.movies.length === 0) {
    return <div>{language["noInfo"][lang]}</div>;
  }
  return (
    <>
      <Grid arr={state.movies} />
    </>
  );
};

export default CatalogueContainer;
