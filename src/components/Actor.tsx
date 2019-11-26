import React from "react";
import Poster from "./Poster";
import Grid from "./Grid";
import { ActorProps } from "../utils/types";
import Heading from "./Heading";

const Actor = (props: ActorProps) => {
  return (
    <div>
      <div data-testid="details-page" className="details">
        <div className="back">
          <div className="details--movieInfo">
            <Poster
              imgPath={props.info.profile_path}
              size={"original"}
              className={"poster"}
            />
            <div className="details--movieInfo--grid">
              <p>{props.info.biography}</p>
            </div>
          </div>
        </div>
      </div>
      <Heading>Filmography</Heading>
      <div className="grid">
        <Grid arr={props.info.combined_credits.cast} />
      </div>
    </div>
  );
};

export default Actor;
