import React from "react";
import { urls } from "../../utils/urls";
import QuickSearch from "../../components/Navbar/QuickSearch";
import { LanguageContext } from "../../contexts/LanguageContext";
import language from "./lang";
import svg from "../../img/sprite.svg";


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
                  <use xlinkHref={svg + "#icon-magnifying-glass"}></use>
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
