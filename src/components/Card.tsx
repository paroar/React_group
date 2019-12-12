import React from "react";
import Poster from "./Poster";

 type CardProps = {
     poster_path:string;
 }

const Card: React.FC<CardProps> = (props) => {
  return (
    <div className="card">
      <div className="card__side card__side--front">
        {props.children}
      </div>
      <div className="card__side card__side--back">
        <Poster imgPath="/iB6GjNVHs5hOqcEYt2rcjBqIjki.png" className="logo"/>
        <Poster imgPath="/qZCc1lty5FzX30aOCVRBLzaVmcp.png" className="logo"/>
        <Poster imgPath="/fycMZt242LVjagMByZOLUGbCvv3.png" className="logo"/>
      </div>
    </div>
  );
};

export default Card;
//        <Poster imgPath={pro[0].logo_path}/>
//<Poster imgPath={poster_path} />