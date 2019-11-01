import React from "react";
import { FetchMovie } from "../../utils/types";
import Title from "./Title";
import Tagline from "./Tagline";
import Rating from "./Rating";
import Genres from "./Genres";
import Overview from "./Overview";

const MovieInfo: React.FC<FetchMovie> = props => {
  return (
    <div className="movie-info">
      <Title title={props.title}/>
      <Tagline tagline={props.tagline}/>
      <Genres genres={props.genres}/>
      <Rating rating={props.vote_average}/>
      <Overview overview={props.overview}/>
    </div>
  );
};

export default MovieInfo;