import React from "react";
import Poster from "./Poster";
import Grid from "./Grid";
import { ActorInfo } from "../utils/types";

type ActorProps = {
  info: ActorInfo;
};
const Actor = (props: ActorProps) => {
  return (
    <>
      <Poster size="original" imgPath={props.info.profile_path} />
      <div className="grid">
        <Grid arr={props.info.combined_credits.cast} />
      </div>
    </>
  );
};

export default Actor;
