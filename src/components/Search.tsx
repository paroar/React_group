import React from "react";
import { urls } from "../urls";
import SearchDisplay from "./SearchDisplay";


export type SearchMovie = {
  poster_path: string,
  title: string,
}

class Search extends React.Component {

  state = {
    movies: [] as SearchMovie[],
    searchVersion: 0
  }

  searchMovies = (title: string) => {
    
    const {searchVersion} = this.state;

    const newSearchVersion = searchVersion + 1;

    const url =
      urls.domain +
      "search/movie" +
      urls.apikey +
      "&language=en-US&page=1&query=" +
      title;
      this.setState({searchVersion: newSearchVersion}, ()=> {
      fetch(url)
      .then(response =>response.json())
      .then(movies=>  {
        if (this.state.searchVersion === newSearchVersion) {
          this.setState({movies: movies.results})
        }
      })})
  }

  handleOnChange(e:  React.ChangeEvent<HTMLInputElement>){
    if(e.target.value !== ""){
      this.searchMovies(e.target.value);
    //console.log(e.target.value);
    }
  }
  render(){
    console.log(this.state.movies)
    return(
      <>
      <div>
        <input type="text" placeholder="Search movies" onChange={(e) => this.handleOnChange(e)}/>
      </div>
      <SearchDisplay arr={this.state.movies}/>
      </>
    )
  }
}

export default Search;