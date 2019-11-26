import React from "react";
import ActorContainer from "../containers/ActorContainer";
import { UrlProps } from "../utils/types";


const ActorPage:React.FC<UrlProps> = (props) => {
  return <ActorContainer slug={props.match.params.slug} />;
};

export default ActorPage;
