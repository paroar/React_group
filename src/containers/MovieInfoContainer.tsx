import React from "react";
import MovieInfo from "../components/MovieInfo";
import { config } from "../config";
import { FetchMovie } from "../utils/types";

type MovieId = {
  slug: string;
};

class MovieInfoContainer extends React.Component<MovieId> {
  state = {
    loading: false,
    movie: {} as FetchMovie,
    slug: null
  };

  fetchMovieInfo = () => {
    const url = `http://api.themoviedb.org/3/movie/${this.props.slug}?api_key=${config.apiKey}&append_to_response=videos,credits`;
    fetch(url)
      .then<FetchMovie>(response => response.json())
      .then(movie =>
        this.setState({ loading: false, movie: movie, slug: this.props.slug })
      );
  };

  componentDidMount() {
    this.fetchMovieInfo();
  }

  componentDidUpdate() {
    if (this.state.slug !== this.props.slug) {
      this.fetchMovieInfo();
      window.scrollTo(0, 0);
    }
  }

  componentWillUnmount() {
    this.setState({ loading: false });
  }

  render() {
    if (this.state.loading) {
      return <div>loading...</div>;
    }
    if (!this.state.movie) {
      return <div>didn't get movies</div>;
    }
    return (

    <MovieInfo movie={this.state.movie} />
    )
  }

}

export default MovieInfoContainer;
