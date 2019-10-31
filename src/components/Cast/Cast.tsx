import React from "react";
import Poster from "../Poster/Poster";
import { FetchMovie } from "../../utils/types";

const createArr = (arr: any[]) => {
  let table = [];
  for (let i = 0; i < 6; i++) {
    table.push(arr[i]);
  }
  return table;
};

const Cast: React.FC<FetchMovie> = props => {
  return (
    <div>
      <div className="cast">
        {createArr(props.credits.cast).map(crew => (
          <Poster
            key={crew.profile_path}
            imgPath={crew.profile_path}
            size={"w185"}
          />
        ))}
      </div>
    </div>
  );
};

export default Cast;

/*
<p>
            {crew.name} as {crew.character}
          </p>
*/
