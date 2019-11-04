import React from "react";
import Grid from "../components/Grid";

class SimilarContainer extends React.Component {
  state = {
    loading: false,
    movies: []
  };

  async componentDidMount() {
    const url =
      "http://api.themoviedb.org/3/movie/similar/api_key=d893f1827f15c0a1128e80650af1466f";

    fetch(url)
      .then(response => response.json())
      .then(movies =>
        this.setState({ loading: false, movies: movies.results })
      );
  }

  componentWillUnmount() {
    this.setState({ loading: false });
  }

  render() {
    if (this.state.loading) {
      return <div>loading...</div>;
    }
    if (!this.state.movies) {
      return <div>didn't get movies</div>;
    }

    return (
      <div>
        <Grid arr={this.state.movies} />
      </div>
    );
  }
}

export default SimilarContainer;
