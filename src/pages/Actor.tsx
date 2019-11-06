import React from "react";
import ActorContainer from "../containers/ActorContainer";
import { RouteComponentProps } from "react-router";

type DetailsProps = RouteComponentProps<{ slug: string }>;
const ActorPage = (props: DetailsProps) => {
    //@ts-ignore
  return <ActorContainer slug={props.match.params.slug} />;
};

export default ActorPage;
