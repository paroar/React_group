import React from "react";
import Actor from "../components/Actor";
import { ActorInfo } from "../utils/types";
import { urls } from "../urls";

type ActorIdProps = {
  slug: string;
};
class ActorContainer extends React.Component<ActorIdProps> {
  state = {
    loading: false,
    info: {} as ActorInfo
  };

  fetchActorinfo = () => {
    const url =
      urls.domain +
      "person/" +
      this.props.slug +
      urls.apikey +
      "&append_to_response=external_ids,combined_credits";
    fetch(url)
      .then(response => response.json())
      .then(info => this.setState({ loading: false, info: info }));
  };

  componentDidMount() {
    this.fetchActorinfo();
  }

  componentWillUnmount() {
    this.setState({ loading: false });
  }

  render() {
    if (this.state.loading) {
      return <div>loading...</div>;
    }
    if (!this.state.info.combined_credits) {
      return <div>didn't get info</div>;
    }
    return <Actor info={this.state.info} />;
  }
}

export default ActorContainer;
