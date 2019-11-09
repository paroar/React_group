import React from "react";
import { MoviePoster, Profile } from "../utils/types";

const Poster: React.FC<MoviePoster | Profile> = props => {
  return (
    <div className="a">
      <img
        src={`https://image.tmdb.org/t/p/` + props.size + props.imgPath}
        alt="img"
      />
    </div>
  );
};

export default Poster;
