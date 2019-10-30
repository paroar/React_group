import React from "react";

type Mov = {
  movie: PosterPath;
}

type PosterPath = {
  poster_path: string;
}

const Card: React.FC<Mov> = movie => {
  return (
    <div className="card">
      <img
        src={`https://image.tmdb.org/t/p/w185` + movie.movie.poster_path}
        className="grid--img"
        alt="img"
      />
    </div>
  );
};

export default Card;
