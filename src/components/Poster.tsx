import React from "react";
import { PosterImg } from "../utils/types";

const Poster: React.FC<PosterImg> = props => {
  return (
    <img
      src={`https://image.tmdb.org/t/p/` + props.size + props.imgPath}
      alt="img"
    />
  );
};

export default Poster;
