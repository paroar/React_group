import React from "react";
import Poster from "./Poster";
import { Link } from "react-router-dom";

const pickFromArr = (xs: any[]) => {
  let ys = [];
  for (let i = 0; i < 6; i++) {
    ys.push(xs[i]);
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
  if (!props.credits) {
    return null;
  } else {
    return (
      <div className="details--movieInfo__cast">
        {pickFromArr(props.credits.cast).map(crew => (
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
