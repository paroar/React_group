import React from "react";
import Poster from "./Poster";
import TextMovieInfo from "./TextMovieInfo";
import { FetchMovie } from "../utils/types";
import Cast from "./Cast";
import Heading from "./Heading";


export type MovieInfoProps = {
  movie: FetchMovie;
}

const MovieInfo:React.FC<MovieInfoProps> = (props) => {
  return (
    <div data-testid="details-page" className="details">
      <div className="back">
        <div className="details--movieInfo">
          <Poster
            imgPath={props.movie.poster_path}
            size={"original"}
            className={"poster"}
          />
          <TextMovieInfo {...props.movie} />
        </div>
      </div>
      <Heading>Cast</Heading>
      <Cast credits={props.movie.credits} />
    </div>
  );
};

export default MovieInfo;