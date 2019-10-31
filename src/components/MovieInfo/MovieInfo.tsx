import React from "react";
import { FetchMovie } from "../../utils/types";
import { GoStar } from 'react-icons/go';

const MovieInfo: React.FC<FetchMovie> = props => {
  return (
    <div>
      <h1>{props.title}</h1>
      <h3>{props.tagline}</h3>
      <h4>Rating:</h4>
      <p>{props.vote_average}<GoStar size={20} color={"gold"}/></p>
      <h4>Genres:</h4>
      {props.genres.map(genre => (
        <>{genre.name}, </>
      ))}
      <h4>Overview:</h4>
      <p>{props.overview}</p>
    </div>
  );
};

export default MovieInfo;

/*
GoStar* */