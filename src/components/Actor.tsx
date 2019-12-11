import React from "react";
import Poster from "./Poster";
import Grid from "./Grid";
import { ActorProps } from "../utils/types";
import Heading from "./Heading";

type BioProps = {
  bio: string;
};

//@ts-ignore
const Biography: React.FC<BioProps> = ({bio}) => {
  return bio ? <p>{bio}</p> : <p>No biography yet</p>;
};

const Actor: React.FC<ActorProps> = ({ info }) => {
  return (
    <div>
      <div data-testid="details-page" className="details">
        <div className="back">
          <div className="details--movieInfo">
            <Poster
              imgPath={info.profile_path}
              className="actor__img"
            />
            <div className="details--movieInfo--grid">
              <Biography bio={info.biography} />
            </div>
          </div>
        </div>
      </div>
      <Heading>Filmography</Heading>
      <div className="grid">
        <Grid arr={info.combined_credits.cast} />
      </div>
    </div>
  );
};

export default Actor;
