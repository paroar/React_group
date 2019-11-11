import React from "react";
import MovieInfo, { MovieInfoProps } from "../components/MovieInfo";
import { urls } from "../urls";

type MovieInfoContainerProps = {
  slug: string;
};

type MovieInfoState = Partial<MovieInfoProps> & {
  loading: boolean;
};

class MovieInfoContainer extends React.Component<
  MovieInfoContainerProps,
  MovieInfoState
> {
  state: MovieInfoState = {
    loading: false
  };

  fetchMovieInfo = () => {
    const url =
      urls.domain +
      "movie/" +
      this.props.slug +
      urls.apikey +
      "&append_to_response=videos,credits";
    fetch(url)
      .then(response => response.json())
      .then(movie => this.setState({ loading: false, movie: movie }));
  };

  componentDidMount() {
    this.fetchMovieInfo();
  }

  componentDidUpdate(prevProp: MovieInfoContainerProps) {
    if (prevProp.slug !== this.props.slug) {
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
    return <MovieInfo movie={this.state.movie} />;
  }
}

export default MovieInfoContainer;
