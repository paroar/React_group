import React from "react";
import { urls } from "../utils/urls";
import QuickSearch from "../components/Navbar/QuickSearch";

export type SearchMovie = {
  poster_path: string;
  title: string;
  id: string;
  release_date: string;
};

type SearchContainerProps = {
  isOpen: boolean;
  handleIsOpen: () => void;
};

class SearchContainer extends React.Component<SearchContainerProps> {
  state = {
    movies: [] as SearchMovie[],
    searchVersion: 0,
    input: ""
  };

  searchMovies = (title: string) => {
    const { searchVersion } = this.state;

    const newSearchVersion = searchVersion + 1;

    const url =
      urls.domain +
      "search/movie" +
      urls.apikey +
      "&sort_by=popularity.desc&language=en-US&page=1&query=" +
      title;
    this.setState({ searchVersion: newSearchVersion }, () => {
      fetch(url)
        .then(response => response.json())
        .then(movies => {
          if (this.state.searchVersion === newSearchVersion) {
            this.setState({ movies: movies.results });
          }
        });
    });
  };

  handleOnChange(e: React.ChangeEvent<HTMLInputElement>) {
    this.searchMovies(e.target.value);
    this.setState({ input: e.target.value });
  }

  handleOnClick() {
    this.searchMovies("");
    this.setState({ input: "" });
  }

  render() {
    return (
      <>
        <div className={this.props.isOpen ? "hidden" : "search-input"}>
          <input
            id="search-input"
            aria-label="Search..."
            type="text"
            placeholder="Quick Search..."
            className="input"
            onChange={e => this.handleOnChange(e)}
            value={this.state.input}
          />
        </div>
        <QuickSearch
          arr={this.state.movies}
          handleOnClick={() => this.handleOnClick()}
        />
      </>
    );
  }
}

export default SearchContainer;
