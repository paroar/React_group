import React from "react";
import { PosterImgProps } from "../utils/types";

const Poster: React.FC<PosterImgProps> = ({ imgPath, className }) => {
  return (
    <picture>
      <img
        srcSet={`
        https://image.tmdb.org/t/p/w500${imgPath}`}
        alt="img"
        className={className}
      />
    </picture>
  );
};

export default Poster;
