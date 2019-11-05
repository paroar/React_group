import React from "react";
import Grid from "../components/Grid";

class CatalogueContainer extends React.Component {
  state = {
    loading: false,
    movies: []
  };

  async componentDidMount() {
    const url =
      "https://api.themoviedb.org/3/movie/popular?api_key=d893f1827f15c0a1128e80650af1466f&language=en-US&page=1";

    fetch(url)
      .then(response => response.json())
      .then(movies =>
        this.setState({ loading: false, movies: movies.results})
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
        <Grid arr={this.state.movies} />
    );
  }
}

export default CatalogueContainer;
