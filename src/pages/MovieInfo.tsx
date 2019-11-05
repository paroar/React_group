import React from "react";
import MovieInfo from "../containers/MovieInfo";
import { RouteComponentProps } from "react-router";

type DetailsProps = RouteComponentProps<{ slug: string }>;
const MovieInfoPage = (props: DetailsProps) => {
  return (
    <>
      <h2>YEIIII</h2>
      //@ts-ignore
      <MovieInfo id={props.match.params.slug} />
    </>
  );
};

export default MovieInfoPage;
