import React from "react";
import Grid from "../components/Grid";
import { config } from "../config";

class CatalogueContainer extends React.Component {
  state = {
    loading: false,
    movies: [],
    page: 1
  };

  fetchCatalogue = () => {
    fetch(
      `https://api.themoviedb.org/3/movie/latest?api_key=${config.apiKey}&language=en-US&page=1`
    )
      .then(response => response.json())
      .then(movies =>
        this.setState({ loading: false, movies: movies.results })
      );
  };

  async componentDidMount() {
    this.fetchCatalogue();
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

    return <Grid arr={this.state.movies} />;
  }
}

export default CatalogueContainer;
