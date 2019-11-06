import React from "react";
import MovieInfoContainer from "../containers/MovieInfoContainer";
import { RouteComponentProps } from "react-router";

type DetailsProps = RouteComponentProps<{ slug: string }>;
const MovieInfoPage = (props: DetailsProps) => {
  return (
    //@ts-ignore
      <MovieInfoContainer slug={props.match.params.slug} />
  );
};

export default MovieInfoPage;
