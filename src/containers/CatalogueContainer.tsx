import React from "react";
import Grid from "../components/Grid";
import { urls } from "../urls";

type CatalogueContainerProps = {
  page: number;
};

class CatalogueContainer extends React.Component<CatalogueContainerProps> {
  state = {
    loading: false,
    movies: [],
    currentPage: this.props.page
  };

  fetchCatalogue = () => {
    const url =
      urls.domain +
      "movie/now_playing" +
      urls.apikey +
      "&page=" +
      this.state.currentPage;
    fetch(url)
      .then(response => response.json())
      .then(movies =>
        this.setState({
          loading: false,
          movies: movies.results
        })
      );
  };

  componentDidMount() {
    this.fetchCatalogue();
  }

  componentWillUnmount() {
    this.setState({ loading: false });
  }

  render() {
    return <Grid arr={this.state.movies} />;
  }
}

export default CatalogueContainer;
