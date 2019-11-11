import React from "react";
import Poster from "./Poster";
import TextMovieInfo from "./TextMovieInfo";
import { FetchMovie } from "../utils/types";
import Cast from "./Cast";

export type MovieInfoProps = {
  movie: FetchMovie;
}

const MovieInfo:React.FC<MovieInfoProps> = (props) => {
  /*const background = {
    background:
      "url(https://image.tmdb.org/t/p/original" +
      props.movie.backdrop_path +
      ")"
  };*/
  return (
    <div data-testid="details-page" className="details">
      <div  className="back">
        <div className="details--movieInfo">
          <Poster
            imgPath={props.movie.poster_path}
            size={"original"}
            className={"poster"}
          />
          <TextMovieInfo {...props.movie} />
        </div>
      </div>
      <Cast credits={props.movie.credits} />
    </div>
  );
};

export default MovieInfo;