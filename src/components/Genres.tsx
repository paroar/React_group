import React from "react";
import {MovieGenres} from "../utils/types";


const Genres: React.FC<MovieGenres> = props => {
  if (!props.genres) {
    return null;
  } else {
    return (
      <div>
        <h3>
          {props.genres.map(genre => (
            <span key={genre.id}>{genre.name}, </span>
          ))}
        </h3>
      </div>
    );
  }
};

export default Genres;
