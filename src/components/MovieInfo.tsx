import React from "react";
import TextMovieInfo from "./TextMovieInfo";
import { MovieInfoProps } from "../utils/types";
import Cast from "./Cast";
import Poster from "./Poster";

const MovieInfo: React.FC<MovieInfoProps> = props => {
  console.log(props);

  const backStyle = {
    background: `url(https://image.tmdb.org/t/p/original${props.movie.backdrop_path}) no-repeat center center fixed`
  };

  return (
    <div data-testid="details-page" className="details" style={backStyle}>
      <div className="back">
        <div className="details--movieInfo">
          <Poster
            imgPath={props.movie.poster_path}
            className="details--movieInfo--portrait"
          />
          <TextMovieInfo {...props.movie} />
        </div>
      </div>
      <Cast credits={props.movie.credits} />
      {props.children}
    </div>
  );
};

export default MovieInfo;
