import React from "react";

const Card: React.FC = movie => {

  const card = {
    margin: "auto"
  }

  return (
    <>
      <div style={card}>
        <img
          //@ts-ignore
          src={`https://image.tmdb.org/t/p/w185` + movie.movie.poster_path}
          className="Catalogue--grid--img"
          alt="img"
        />
      </div>
    </>
  );
};

export default Card;
