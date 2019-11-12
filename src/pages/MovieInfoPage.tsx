import React from "react";
import MovieInfoContainer from "../containers/MovieInfoContainer";
import SimilarContainer from "../containers/SimilarContainer";
import { RouteComponentProps } from "react-router";
import Heading from "../components/Heading";

type UrlProps = RouteComponentProps<{ slug: string }>;
const MovieInfoPage:React.FC<UrlProps> = (props) => {
  return (
    <>
      <MovieInfoContainer slug={props.match.params.slug} />
      <Heading>Similars</Heading> 
      <SimilarContainer slug={props.match.params.slug} />
    </>
  );
};

export default MovieInfoPage;
