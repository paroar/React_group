import React from "react";
import Poster from "./Poster";
import Grid from "./Grid";
import { ActorInfo } from "../utils/types";
import Heading from "./Heading";

type ActorProps = {
  info: ActorInfo;
};
const Actor = (props: ActorProps) => {
  console.log(props);
  return (
    <>
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
    </>
  );
};

export default Actor;
