import React, { useContext } from "react";
import TextMovieInfo from "./TextMovieInfo";
import { MovieInfoProps } from "../utils/types";
import Cast from "./Cast";
import Poster from "./Poster";
import SimilarContainer from "../containers/SimilarContainer";
import SlugContext from "./SlugContext";

const MovieInfo: React.FC<MovieInfoProps> = ({movie}) => {
  console.log(movie);

  const backStyle = {
    background: `url(https://image.tmdb.org/t/p/original${movie.backdrop_path}) no-repeat center center fixed`
  };

  const { slug } = useContext(SlugContext);

  return (
    <div data-testid="details-page" className="details" style={backStyle}>
      <div className="back">
        <div className="details--movieInfo">
          <Poster
            imgPath={movie.poster_path}
            className="details--movieInfo--portrait"
          />
          <TextMovieInfo {...movie} />
        </div>
      </div>
      <Cast credits={movie.credits} />
      <SimilarContainer slug={slug} />
    </div>
  );
};

export default MovieInfo;
