import React from "react";
import MovieInfo from "../containers/MovieInfo";
import { RouteComponentProps } from "react-router";

type DetailsProps = RouteComponentProps<{ slug: string }>;
const MovieInfoPage = (props: DetailsProps) => {
  return (
    //@ts-ignore
      <MovieInfo slug={props.match.params.slug} />
  );
};

export default MovieInfoPage;
