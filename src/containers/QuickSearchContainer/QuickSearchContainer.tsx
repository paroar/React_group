import React from "react";
import { urls } from "../../utils/urls";
import QuickSearch from "../../components/Navbar/QuickSearch";
import { LanguageContext } from "../../contexts/LanguageContext";
import language from "./lang";

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
      <LanguageContext.Consumer>
        {value => {
          const { lang } = value;
          return (
            <>
              <div className={this.props.isOpen ? "hidden" : "search-input"}>
                <input
                  id="search-input"
                  aria-label="search"
                  type="text"
                  placeholder={language["placeholder"][lang]}
                  className="input"
                  onChange={e => this.handleOnChange(e)}
                  value={this.state.input}
                />
                <svg className="search-icon">
                  <path d="M17.545 15.467l-3.779-3.779c0.57-0.935 0.898-2.035 0.898-3.21 0-3.417-2.961-6.377-6.378-6.377s-6.186 2.769-6.186 6.186c0 3.416 2.961 6.377 6.377 6.377 1.137 0 2.2-0.309 3.115-0.844l3.799 3.801c0.372 0.371 0.975 0.371 1.346 0l0.943-0.943c0.371-0.371 0.236-0.84-0.135-1.211zM4.004 8.287c0-2.366 1.917-4.283 4.282-4.283s4.474 2.107 4.474 4.474c0 2.365-1.918 4.283-4.283 4.283s-4.473-2.109-4.473-4.474z"></path>
                </svg>
              </div>
              <QuickSearch
                arr={this.state.movies}
                handleOnClick={() => this.handleOnClick()}
              />
            </>
          );
        }}
      </LanguageContext.Consumer>
    );
  }
}

export default SearchContainer;
