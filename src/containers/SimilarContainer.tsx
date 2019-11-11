import React from "react";
import { PosterMovie } from "../utils/types";
import Grid from "../components/Grid";
import Arrows from "../components/Arrows";
import { urls } from "../urls";

type MovieIdProps = {
  slug: string;
};
class SimilarContainer extends React.Component<MovieIdProps> {
  state = {
    loading: false,
    movies: [] as PosterMovie[],
    currentPage: 1,
    slug: null
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
      urls.domain +
      "movie/" +
      this.props.slug +
      "/similar" +
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
    if (this.state.loading) {
      return <div>loading...</div>;
    }
    if (!this.state.movies) {
      return <div>didn't get movies</div>;
    }
    return (
      <>
        <Grid arr={this.state.movies}>
          <Arrows left={this.handleLeftClick} right={this.handleRightClick} />
        </Grid>
      </>
    );
  }
}

export default SimilarContainer;
