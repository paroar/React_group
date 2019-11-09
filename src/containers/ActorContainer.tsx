import React from "react";
import Actor from "../components/Actor";
import { config } from "../config";

type DetailsProps = {
  slug: string;
};
class ActorContainer extends React.Component<DetailsProps> {
  state = {
    loading: false,
    movies: []
  };

  fetchActorMovies = () => {
    fetch(
      `https://api.themoviedb.org/3/person/${this.props.slug}?api_key=${config.apiKey}&language=en-US&append_to_response=external_ids,combined_credits`
    )
      .then(response => response.json())
      .then(movies => this.setState({ loading: false, movies: movies }));
  };

  componentDidMount() {
    this.fetchActorMovies();
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
    console.log(this.state.movies)
    return <Actor movies={this.state.movies} />;
  }
}

export default ActorContainer;
