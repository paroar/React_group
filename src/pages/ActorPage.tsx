import React from "react";
import ActorContainer from "../containers/ActorContainer";
import { UrlProps } from "../utils/types";
import { LangConsumer } from "../contexts/LangContext";

const ActorPage: React.FC<UrlProps> = props => {
  return (
    <LangConsumer>
      {value => {
        const {lang} = value;
        return <ActorContainer slug={props.match.params.slug} lang={lang} />;
      }}
    </LangConsumer>
  );
};

export default ActorPage;
