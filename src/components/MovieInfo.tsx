import React from "react";
import TextMovieInfo from "./TextMovieInfo";
import { MovieInfoProps } from "../utils/types";
import Cast from "./Cast";
import Heading from "./Heading";
import Card from "./Card";

const MovieInfo: React.FC<MovieInfoProps> = props => {
  console.log(props);
  return (
    <div data-testid="details-page" className="details">
      <div className="back">
        <div className="details--movieInfo">
          <Card/>
          <TextMovieInfo {...props.movie} />
        </div>
      </div>
      <Heading>Cast</Heading>
      <Cast credits={props.movie.credits} />
    </div>
  );
};

export default MovieInfo;
//poster_path={props.movie.poster_path}