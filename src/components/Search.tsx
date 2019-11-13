import React from "react";
import { urls } from "../urls";


class Search extends React.Component {

  handleOnChange(e:  React.ChangeEvent<HTMLInputElement>){
      const url =
      urls.domain +
      "search/movie" +
      urls.apikey +
      "&language=en-US&page=1";
      fetch(url)
      .then(response =>response.json())
    console.log(e.target.value);
  }
  render(){
    return(
      <div>
        <input type="text" placeholder="Search movies" onChange={this.handleOnChange}/>
      </div>
    )
  }
}

export default Search;