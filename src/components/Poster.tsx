import React from "react";
import { PosterImgProps } from "../utils/types";

const Poster: React.FC<PosterImgProps> = _props => {
  return (
    <picture>
      <img
        srcSet={`
        https://image.tmdb.org/t/p/w185${_props.imgPath} 1x,
        https://image.tmdb.org/t/p/w780${_props.imgPath} 2x`}
        alt="img"
      />
    </picture>
  );
};

export default Poster;
