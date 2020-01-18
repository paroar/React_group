import React from "react";
import TextMovieInfo from "./TextMovieInfo";
import { MovieInfoProps } from "../../utils/types";
import Cast from "./Cast/Cast";
import Poster from "../Poster";
import SimilarContainer from "../../containers/SimilarContainer/SimilarContainer";
import ReviewsContainer from "../../containers/ReviewsContainer/ReviewsContainer";

const MovieInfo: React.FC<MovieInfoProps> = ({ movie }) => {
  
  const backStyle = {
    background: `url(https://image.tmdb.org/t/p/original${movie.backdrop_path})`
  };

  return (
    <div data-testid="details-page" className="details" style={backStyle}>
        <div className="details--movieInfo">
          <Poster
            imgPath={movie.poster_path}
            className="details--movieInfo--portrait"
          />
          <TextMovieInfo {...movie} />
      </div>
      <Cast credits={movie.credits} />
      <SimilarContainer/>
      <ReviewsContainer/>
    </div>
  );
};

export default MovieInfo;
