import React from "react";
import Poster from "./Poster";
import { Link } from "react-router-dom";
import { CastProps, Pick } from "../utils/types";
import Heading from "./Heading";
import Card from "./Card";

const pickFromArr = (xs: Pick[]) => {
  console.log("XS",xs);
  let n = 0;
  xs.length < 8 ? n = xs.length : n = 8;
  let ys = [];
  for (let i = 0; i < n; i++) {
    if (xs[i].profile_path !== "undefined" && xs[i].profile_path != null) {
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
    if(cast.length === 0){
      return null;
    }
    return (
      <div className="cast">
        <Heading>Cast</Heading>
        <div className="grid--actor">
          {cast.map(crew => (
            <Link to={`/actor/${crew.id}`} key={crew.profile_path}>
              <Card title={crew.name} charName={crew.character}>
                <Poster key={crew.profile_path} imgPath={crew.profile_path} />
              </Card>
            </Link>
          ))}
        </div>
      </div>
    );
  }
};

export default Cast;
