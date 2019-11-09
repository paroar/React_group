import React from "react";
import Grid from "../components/Grid";
import { urls } from "../urls";
import Arrows from "../components/Arrows";

class CatalogueContainer extends React.Component {
  state = {
    loading: false,
    movies: [],
    currentPage: 1
  };

  handleLeftClick = () => {
    if (this.state.currentPage > 1) {
      this.setState({ currentPage: this.state.currentPage - 1 });
      this.fetchCatalogue();
    }
  };

  handleRightClick = () => {
    this.setState({ currentPage: this.state.currentPage + 1 });
    this.fetchCatalogue();
  };

  fetchCatalogue = () => {
    const url =
      urls.catalogueUrl.fixed +
      urls.catalogueUrl.apiKey +
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
    if (this.state.loading) {
      return <div>loading...</div>;
    }
    if (!this.state.movies) {
      return <div>didn't get movies</div>;
    }

    return (
      <div>
        <Grid arr={this.state.movies}>
          <Arrows left={this.handleLeftClick} right={this.handleRightClick} />
        </Grid>
      </div>
    );
  }
}

export default CatalogueContainer;
