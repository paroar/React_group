import React, { useState, useEffect, useContext } from "react";
import { PosterMovie } from "../../utils/types";
import Grid from "../../components/Grid";
import { urls } from "../../utils/urls";
import Heading from "../../components/Heading";
import { LanguageContext } from "../../contexts/LanguageContext";
import SlugContext from "../../contexts/SlugContext";
import language from "./lang";

const SimilarContainer: React.FC = () => {
  
  const [loading, setLoading] = useState(false);
  const [movies, setMovies] = useState<PosterMovie[]>([]);

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
      .then(movies => {
        setMovies(movies.results);
        setLoading(false);
      });
  }, [lang, slug]);

  if (loading) {
    return <div>{language["loading"][lang]}</div>;
  }
  if (!movies) {
    return <div>{language["noInfo"][lang]}</div>;
  }
  if (movies.length === 0) {
    return null;
  }
  return (
    <div className="similars">
      <Heading>{language["similars"][lang]}</Heading>
      <div className="grid--similar">
        <Grid arr={movies} />
      </div>
    </div>
  );
};

export default SimilarContainer;
