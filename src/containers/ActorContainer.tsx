import React, { useState, useEffect, useContext } from "react";
import Actor from "../components/Actor";
import { ActorInfo, ActorIdProps } from "../utils/types";
import { urls } from "../utils/urls";
import { LanguageContext } from "../contexts/LanguageContext";
import SlugContext from "../contexts/SlugContext";

const ActorContainer: React.FC<ActorIdProps> = props => {
  const [state, changeState] = useState({
    loading: false,
    info: {} as ActorInfo
  });

  const { lang } = useContext(LanguageContext);
  const { slug } = useContext(SlugContext);

  useEffect(() => {
    const url =
      urls.domain +
      "person/" +
      slug +
      urls.apikey +
      "&append_to_response=external_ids,combined_credits" + 
      "&language=" + 
      lang;
    fetch(url)
      .then(response => response.json())
      .then(info => changeState({ loading: false, info: info }));
  }, [props]);

  if (state.loading) {
    return <div>loading...</div>;
  }
  if (!state.info.combined_credits) {
    return <div>didn't get info</div>;
  }
  return <Actor info={state.info} />;
};

export default ActorContainer;
