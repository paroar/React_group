import React from "react";
import MovieInfoContainer from "../containers/MovieInfoContainer";
import { UrlProps } from "../utils/types";

const MovieInfoPage: React.FC<UrlProps> = props => {
  return <MovieInfoContainer slug={props.match.params.slug} />;
};

export default MovieInfoPage;
