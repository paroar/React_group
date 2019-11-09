import React from "react";
import { PosterImgProps } from "../utils/types";

const Poster: React.FC<PosterImgProps> = props => {
  return (
    <img
      src={`https://image.tmdb.org/t/p/` + props.size + props.imgPath}
      alt="img"
    />
  );
};

export default Poster;
