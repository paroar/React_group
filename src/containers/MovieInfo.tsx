import React from "react";
import Movieinfo from "../components/Movieinfo";

class MovieInfoContainer extends React.Component {
  state = {
    loading: false,
    movie: ""
  };

  async componentDidMount() {
    //@ts-ignore
    const url = `http://api.themoviedb.org/3/movie/${this.props.slug}?api_key=d893f1827f15c0a1128e80650af1466f&append_to_response=videos,credits,similar`;

    fetch(url)
    .then(response => response.json())
    .then(movie =>
      this.setState({ loading: false, movie: movie})
    );
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
      <Movieinfo movie={this.state.movie} />
    );
  }
}

export default MovieInfoContainer;
