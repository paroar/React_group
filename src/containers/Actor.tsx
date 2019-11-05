import React, { Component } from "react";
import Actor from "../components/Actor";

class ActorContainer extends Component {
  state = {
    loading: false,
    movies: []
  };

  async componentDidMount() {
    //@ts-ignore
    const url = `https://api.themoviedb.org/3/person/${this.props.slug}?api_key=d893f1827f15c0a1128e80650af1466f&language=en-US&append_to_response=external_ids,combined_credits`;

    fetch(url)
    .then(response => response.json())
    .then(movies =>
      this.setState({ loading: false, movies: movies})
    );

  }

  componentWillUnmount() {
    this.setState({ loading: false });
  }

  render() {
    console.log("?????",this.state.movies);
    if (this.state.loading) {
      return <div>loading...</div>;
    }
    if (!this.state.movies) {
      return <div>didn't get movies</div>;
    }
    //console.log("?????",this.state.movies);
      return (
        <Actor movies={this.state.movies}/>
      );
    

  }
}

export default ActorContainer;

/*
<Grid arr={this.state.movies} />
const Actor: React.FC<DetailsProps> = ({
  match: {
    params: { slug }
  }
}) => {
  const [actorMovies, setMovie] = useState<ActorInfo | null>(null);

  useEffect(() => {
    const fetchMovie = async () => {
      const data = await fetch(
        `https://api.themoviedb.org/3/person/${slug}?api_key=d893f1827f15c0a1128e80650af1466f&language=en-US&append_to_response=external_ids,combined_credits`
      );
      const item = await data.json();
      setMovie(item);
    };

    fetchMovie();
  }, [slug]);

  if (!actorMovies) {
    return null;
  } else {
    return (
      <>
        <h2>{actorMovies.name}</h2>
        <Poster
          imgPath={actorMovies.profile_path}
          size={"original"}
          className="grid--img"
        ></Poster>
        <div className="grid">
          {actorMovies.combined_credits.cast.map(movie => (
            <Link key={movie.id} to={`/catalogue/${movie.id}`}>
              <Poster
                imgPath={movie.poster_path}
                size={"original"}
                className="grid--img"
              ></Poster>
            </Link>
          ))}
        </div>
      </>
    );
  }
};

export default Actor;
*/
