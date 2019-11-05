import React from "react";
import {MoviePoster, Profile} from "../utils/types";


const Poster: React.FC<MoviePoster | Profile> = props => {
  return (
      <img
        src={`https://image.tmdb.org/t/p/` + props.size + props.imgPath}
        alt="img"
      />
  );
};

export default Poster;
