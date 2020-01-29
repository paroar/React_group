import React, { useState, useEffect, useContext } from "react";
import Grid from "../../components/Grid";
import { urls } from "../../utils/urls";
import { CatalogueContainerProps, FetchMovie } from "../../utils/types";
import { LanguageContext } from "../../contexts/LanguageContext";
import language from "./lang";
import { GenreContext } from "../../contexts/GenreContext";

const CatalogueContainer: React.FC<CatalogueContainerProps> = props => {

  const [movies, setMovies] = useState<FetchMovie[]>([]);
  const [loading, setLoading] = useState(false);

  const { lang } = useContext(LanguageContext);
  let { genre } = useContext(GenreContext);

  useEffect(() => {
    var url = "";
    let genreStr = genre !== "" ? `&with_genres=${genre}` : "";
    const sort = `&sort_by=${props.sort || "popularity"}`;
    const order = props.order ? "." + props.order : ".desc";
    const rating =
      props.rating !== "" && typeof props.rating !== "undefined"
        ? `&vote_average.gte=${props.rating}`
        : "";
    const keyword =
      props.keyword !== "" && typeof props.keyword !== "undefined"
        ? `&with_keywords=${props.keyword}`
        : "";

    url =
      urls.domain +
      "discover/movie" +
      urls.apikey +
      genreStr +
      sort +
      order +
      rating +
      keyword +
      "&page=" +
      props.page +
      "&vote_count.gte=20" +
      "&language=" +
      lang;

    fetch(url)
      .then(response => response.json())
      .then(movies => {
        setMovies(movies.results);
        setLoading(false);
      });
  }, [props, genre, lang]);

  if (loading) {
    return <div>{language.loading[lang]}</div>;
  }
  if (movies.length === 0) {
    return <div>{language["noInfo"][lang]}</div>;
  }
  return (
    <>
      <Grid arr={movies} />
    </>
  );
};

export default CatalogueContainer;
