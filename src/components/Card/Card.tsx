import React from "react";

type Mov = {
    poster_path:string;
}

const Card: React.FC<Mov>= (props) => {
  return (
    <div className="card">
      <img
        src={`https://image.tmdb.org/t/p/w185` + props.poster_path}
        className="grid--img"
        alt="img"
      />
    </div>
  );
};

export default Card;
