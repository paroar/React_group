import React from "react";
import Grid from "../components/Grid";
import { config } from "../config";
import { IoIosArrowDropleft } from "react-icons/io";
import { IoIosArrowDropright } from "react-icons/io";

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
      this.forceUpdate();
    }
  };

  handleRightClick = () => {
    this.setState({ currentPage: this.state.currentPage + 1 });
    this.fetchCatalogue();
    this.forceUpdate();
  };

  componentDidUpdate() {
    this.fetchCatalogue();
  }

  fetchCatalogue = () => {
    fetch(
      `https://api.themoviedb.org/3/movie/now_playing?api_key=${config.apiKey}&language=en-US&page=${this.state.currentPage}`
    )
      .then(response => response.json())
      .then(movies =>
        this.setState({ loading: false, movies: movies.results })
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
        <span onClick={this.handleLeftClick}>
          <IoIosArrowDropleft size={40} />
        </span>
        <span onClick={this.handleRightClick}>
          <IoIosArrowDropright size={40} />
        </span>
        <Grid arr={this.state.movies} />;
      </>
    );
  }
}

export default CatalogueContainer;
