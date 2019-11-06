import React, { Component } from "react";
import Actor from "../components/Actor";
import {config} from "../config";

class ActorContainer extends Component {
  state = {
    loading: false,
    movies: []
  };

  componentDidMount() {
    //@ts-ignore
    const url = `https://api.themoviedb.org/3/person/${this.props.slug}?api_key=${config.apiKey}&language=en-US&append_to_response=external_ids,combined_credits`;

    fetch(url)
      .then(response => response.json())
      .then(movies => this.setState({ loading: false, movies: movies }));
  }

  componentWillUnmount() {
    this.setState({ loading: false });
  }

  render() {
    if (this.state.loading) {
      return <div>loading...</div>;
    }
    if (this.state.movies.length === 0) {
      return <div>didn't get movies</div>;
    }
    return <Actor movies={this.state.movies} />;
  }
}

export default ActorContainer;
