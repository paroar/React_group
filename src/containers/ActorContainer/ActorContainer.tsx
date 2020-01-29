import React, { useState, useEffect, useContext } from "react";
import Actor from "../../components/Actor/Actor";
import { ActorInfo, ActorIdProps } from "../../utils/types";
import { urls } from "../../utils/urls";
import { LanguageContext } from "../../contexts/LanguageContext";
import language from "./lang";

const ActorContainer: React.FC<ActorIdProps> = props => {
  const [state, changeState] = useState({
    loading: false,
    info: {} as ActorInfo
  });

  const { lang } = useContext(LanguageContext);

  useEffect(() => {
    const url =
      urls.domain +
      "person/" +
      props.slug +
      urls.apikey +
      "&append_to_response=external_ids,combined_credits" +
      "&language=" +
      lang;
      
    fetch(url)
      .then(response => response.json())
      .then(info => changeState({ loading: false, info: info }));
  }, [props,lang]);

  if (state.loading) {
    return <div>{language["loading"][lang]}</div>;
  }
  if (!state.info.combined_credits) {
    return <div>{language["noInfo"][lang]}</div>;
  }
  return <Actor info={state.info} />;
};

export default ActorContainer;
