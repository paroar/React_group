import React from "react";
//import Poster from "./Poster";

// type CardProps = {
//     poster_path:string;
// }

const Card: React.FC = () => {
  return (
    <div className="card">
      <div className="card__side card__side--front">
        <h1>FRONT</h1>
      </div>
      <div className="card__side card__side--back">
        <h1>BACK</h1>
      </div>
    </div>
  );
};

export default Card;
//<Poster imgPath={poster_path} />
