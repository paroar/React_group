import React from "react";
import Actor from "../components/Actor";
import { config } from "../config";
import { ActorInfo } from "../utils/types";

type ActorIdProps = {
  slug: string;
};
class ActorContainer extends React.Component<ActorIdProps> {
  state = {
    loading: false,
    info: {} as ActorInfo
  };

  fetchActorinfo = () => {
    fetch(
      `https://api.themoviedb.org/3/person/${this.props.slug}?api_key=${config.apiKey}&language=en-US&append_to_response=external_ids,combined_credits`
    )
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
