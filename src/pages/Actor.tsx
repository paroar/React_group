import React from "react";
import Actor from "../containers/Actor";
import { RouteComponentProps } from "react-router";

type DetailsProps = RouteComponentProps<{ slug: string }>;
const ActorPage = (props: DetailsProps) => {
    //@ts-ignore
  return <Actor slug={props.match.params.slug} />;
};

export default ActorPage;
