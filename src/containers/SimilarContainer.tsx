import React from "react";
import Similars from "../components/Similars";
import { config } from "../config";
import { PosterMovie } from "../utils/types";

type DetailsProps = {
  slug: string;
};
class SimilarContainer extends React.Component<DetailsProps> {
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
    const url = `http://api.themoviedb.org/3/movie/${this.props.slug}/similar?api_key=${config.apiKey}&page=${this.state.currentPage}`;
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
    console.log("Similars", this.state.movies)
    return (
      <>
        <Similars
          similar={this.state.movies}
          left={this.handleLeftClick}
          right={this.handleRightClick}
        />
      </>
    );
  }
}

export default SimilarContainer;
