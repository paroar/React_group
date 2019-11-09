import React from "react";
import Poster from "./Poster";
import Grid from "./Grid";
import { ActorInfo } from "../utils/types";

type ActorProps = {
  info: ActorInfo;
}
const Actor:React.FC<ActorProps> = (props:ActorProps) => {
  return (
    <>
      <Poster size="original" imgPath={props.info.profile_path}/>
      <Grid arr={props.info.combined_credits.cast}/>
    </>
  );
};

export default Actor;         
