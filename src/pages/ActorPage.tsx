import React from "react";
import ActorContainer from "../containers/ActorContainer";
import { RouteComponentProps } from "react-router";

type UrlProps = RouteComponentProps<{ slug: string }>;
const ActorPage:React.FC<UrlProps> = (props) => {
  return <ActorContainer slug={props.match.params.slug} />;
};

export default ActorPage;
