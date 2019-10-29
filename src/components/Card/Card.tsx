import React from "react";

const Card: React.FC = movie => {
  return (
    <div className="card">
      <img
        //@ts-ignore
        src={`https://image.tmdb.org/t/p/w185` + movie.movie.poster_path}
        className="Catalogue--grid--img"
        alt="img"
      />
    </div>
  );
};

export default Card;
