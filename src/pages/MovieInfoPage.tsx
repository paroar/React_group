import React from "react";
import MovieInfoContainer from "../containers/MovieInfoContainer";
import { UrlProps } from "../utils/types";
import { LangConsumer } from "../contexts/LangContext";

const MovieInfoPage: React.FC<UrlProps> = props => {
  return (
    <LangConsumer>
      {value => {
        const { lang } = value;
        return <MovieInfoContainer slug={props.match.params.slug} lang={lang}/>;
      }}
    </LangConsumer>
  );
};

export default MovieInfoPage;
