import React from "react";
import Poster from "./Poster";
import { Link } from "react-router-dom";


type Pick = {
    character: string;
    id: number;
    name: string;
    profile_path: string;
}

const pickFromArr = (xs: Pick[]) => {
  let ys = [];
  for (let i = 0; i < 6; i++) {
    if(xs[i].profile_path !== null){
      ys.push(xs[i]);
    }
  }
  return ys;
};

type CastProps = {
  credits: {
    cast: {
        character: string;
        id: number;
        name: string;
        profile_path: string;
    }[];
}
}

const Cast: React.FC<CastProps> = (props) => {
  const crewArr = pickFromArr(props.credits.cast);
  console.log(crewArr);
  if (crewArr.length === 0) {
    return null;
  } else {
    return (
      <div className="grid--actor">
        {crewArr.map(crew => (
          <Link to={`/actor/${crew.id}`} key={crew.profile_path}>
            <Poster
              key={crew.profile_path}
              imgPath={crew.profile_path}
              size={"original"}
              className="details--movieInfo__cast--img"
            />
          </Link>
        ))}
      </div>
    );
  }
};

export default Cast;