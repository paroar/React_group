import React from "react";

const Card: React.FC = movie => {
  const card = {
    margin: "auto",
    position: "relative"
  };

  return (
    <>
              
      <div 
      //@ts-ignore
      style={card}>
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
