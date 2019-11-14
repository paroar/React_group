import React from "react";
import MovieInfoContainer from "../containers/MovieInfoContainer";
import SimilarContainer from "../containers/SimilarContainer";
import Heading from "../components/Heading";
import { UrlProps } from "../utils/types";

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
