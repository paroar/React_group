import React from "react";
import {MovieGenres} from "../utils/types";
import { Link } from "react-router-dom";


const Genres: React.FC<MovieGenres> = props => {
  if (!props.genres) {
    return null;
  } else {
    return (
      <Link to={"/catalogue/[]"}>
        <h3>
          {props.genres.map(genre => (
            <span key={genre.id}>{genre.name}, </span>
          ))}
        </h3>
      </Link>
    );
  }
};

export default Genres;
