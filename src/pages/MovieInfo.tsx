import React from "react";
import MovieInfoContainer from "../containers/MovieInfoContainer";
import { RouteComponentProps } from "react-router";
import SimilarContainer from "../containers/SimilarContainer";

type DetailsProps = RouteComponentProps<{ slug: string }>;
const MovieInfoPage = (props: DetailsProps) => {
  return (
    <>
      <MovieInfoContainer slug={props.match.params.slug} /> 
      <SimilarContainer slug={props.match.params.slug} />
    </>
  );
};

export default MovieInfoPage;
