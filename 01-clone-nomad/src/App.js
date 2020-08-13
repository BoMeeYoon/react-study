import React from "react";
import axios from "axios";
import Movie from "./Movie";

class App extends React.Component {
  URL = `https://yts-proxy.now.sh/list_movies.json?sort_by=rating`;
  state = {
    movies: [],
    isLoading: true,
  };
  async getMovies() {
    const {
      data: {
        data: { movies },
      },
    } = await axios.get(this.URL);
    this.setState({ movies, isLoading: false });
  }
  async componentDidMount() {
    await this.getMovies();
    console.log(this.state);
  }
  render() {
    const { isLoading, movies } = this.state;
    return (
      <>
        <div>
          {isLoading
            ? "Loading"
            : movies.map((movie) => {
                console.log(movie);
                return (
                  <Movie
                    id={movie.id}
                    year={movie.year}
                    title={movie.title}
                    summary={movie.summary}
                    poster={movie.medium_cover_image}
                  />
                );
              })}
        </div>
      </>
    );
  }
}
// "https://yts-proxy.now.sh/list_movies.json"
export default App;
