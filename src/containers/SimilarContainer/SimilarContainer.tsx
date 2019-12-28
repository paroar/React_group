import React, { useState, useEffect, useContext } from "react";
import { PosterMovie } from "../../utils/types";
import Grid from "../../components/Grid";
import { urls } from "../../utils/urls";
import Heading from "../../components/Heading";
import { LanguageContext } from "../../contexts/LanguageContext";
import SlugContext from "../../contexts/SlugContext";
import language from "./lang";

const SimilarContainer: React.FC = () => {
  const [state, changeState] = useState({
    loading: false,
    movies: [] as PosterMovie[]
  });

  const { lang } = useContext(LanguageContext);
  const { slug } = useContext(SlugContext);

  useEffect(() => {
    const url =
      urls.domain +
      "movie/" +
      slug +
      "/similar" +
      urls.apikey +
      "&language=" +
      lang;
    fetch(url)
      .then(response => response.json())
      .then(movies =>
        changeState({
          loading: false,
          movies: movies.results
        })
      );
  }, []);

  if (state.loading) {
    //@ts-ignore
    return <div>{language["loading"][lang]}</div>;
  }
  if (!state.movies) {
    //@ts-ignore
    return <div>{language["noInfo"][lang]}</div>;
  }
  if (state.movies.length === 0) {
    return null;
  }
  return (
    <div className="similars">
          //@ts-ignore
      <Heading>{language["similars"][lang]}</Heading>
      <div className="grid--similar">
        <Grid arr={state.movies} />
      </div>
    </div>
  );
};

export default SimilarContainer;
