import React from "react";
import Poster from "./Poster";
import { Link } from "react-router-dom";
import { CastProps, Pick } from "../utils/types";

const pickFromArr = (xs: Pick[]) => {
  let ys = [];
  for (let i = 0; i < 6; i++) {
    if (xs[i].profile_path !== null) {
      ys.push(xs[i]);
    }
  }
  return ys;
};

const Cast: React.FC<CastProps> = props => {
  if (typeof props.credits === "undefined") {
    return null;
  } else {
    const cast = pickFromArr(props.credits.cast);
    return (
      <div className="grid--actor">
        {cast.map(crew => (
          <Link to={`/actor/${crew.id}`} key={crew.profile_path}>
            <Poster
              key={crew.profile_path}
              imgPath={crew.profile_path}
              size={"w185"}
              className="details--movieInfo__cast--img"
            />
          </Link>
        ))}
      </div>
    );
  }
};

export default Cast;
