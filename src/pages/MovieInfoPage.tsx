import React from "react";
import MovieInfoContainer from "../containers/MovieInfoContainer/MovieInfoContainer";
import { UrlProps } from "../utils/types";
import SlugContext from "../contexts/SlugContext";

const MovieInfoPage: React.FC<UrlProps> = props => {
  const slug = props.match.params.slug;

  return (
    <SlugContext.Provider value={{ slug }}>
      <MovieInfoContainer slug={props.match.params.slug} />
    </SlugContext.Provider>
  );
};

export default MovieInfoPage;
