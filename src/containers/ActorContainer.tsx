import React, { useState, useEffect } from "react";
import Actor from "../components/Actor";
import { ActorInfo, ActorIdProps } from "../utils/types";
import { urls } from "../utils/urls";

const ActorContainer: React.FC<ActorIdProps> = props => {
  const [state, changeState] = useState({
    loading: false,
    info: {} as ActorInfo
  });

  useEffect(() => {
    const url =
      urls.domain +
      "person/" +
      props.slug +
      urls.apikey +
      "&append_to_response=external_ids,combined_credits" + 
      "&language=" + 
      props.lang;
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
