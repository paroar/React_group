import React from "react";
import { urls } from "../utils/urls";
import SearchDisplay from "../components/SearchDisplay";

export type SearchMovie = {
  poster_path: string;
  title: string;
};

class Search extends React.Component {
  state = {
    movies: [] as SearchMovie[],
    searchVersion: 0
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
  }

  render() {
    return (
      <>
        <div>
          <input
            aria-label="Search..."
            type="text"
            placeholder="Search..."
            className="input"
            onChange={e => this.handleOnChange(e)}
          />
        </div>
        <SearchDisplay arr={this.state.movies} />
      </>
    );
  }
}

export default Search;
