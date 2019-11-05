import React from "react";
import Poster from "../components/Poster/Poster";

class MovieInfoContainer extends React.Component {
  state = {
    loading: false,
    movie: null
  };

  async componentDidMount() {
    //@ts-ignore
    const url = `https://api.themoviedb.org/3/movie/${this.props.id}?api_key=d893f1827f15c0a1128e80650af1466f&language=en-US`;

    const data = await fetch(url);
    const item = await data.json();
    console.log(item);
    this.setState({ movie: item });
  }

  componentWillUnmount() {
    this.setState({ loading: false });
  }

  render() {
    if (this.state.loading) {
      return <div>loading...</div>;
    }
    if (!this.state.movie) {
      return <div>didn't get movies</div>;
    }

    return (
      <div>
        <Poster
          size="w185"
          //@ts-ignore
          imgPath={this.state.movie.poster_path}
        />
      </div>
    );
  }
}

export default MovieInfoContainer;
