import React from "react";
import { FetchMovie } from "../../utils/types";
import Genres from "./Genres";

const MovieInfo: React.FC<FetchMovie> = ({
  title,
  tagline,
  genres,
  vote_average,
  overview
}) => {
  return (
    <div className="details--movieInfo--grid">
      <h1>{title}</h1>
      <h2>{tagline}</h2>
      <Genres genres={genres} />
      <p>{vote_average}</p>
      <p>{overview}</p>
    </div>
  );
};

export default MovieInfo;
