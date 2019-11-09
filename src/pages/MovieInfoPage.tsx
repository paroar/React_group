import React from "react";
import MovieInfoContainer from "../containers/MovieInfoContainer";
import { RouteComponentProps } from "react-router";
import SimilarContainer from "../containers/SimilarContainer";

type UrlProps = RouteComponentProps<{ slug: string }>;
const MovieInfoPage:React.FC<UrlProps> = (props) => {
  return (
    <>
      <MovieInfoContainer slug={props.match.params.slug} /> 
      <SimilarContainer slug={props.match.params.slug} />
    </>
  );
};

export default MovieInfoPage;
