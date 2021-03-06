import React from "react";
import axios from "axios";
import Movie from "../components/Movie.js";
import "../components/Movie.css";

class Home extends React.Component {
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
 componentDidMount() {
   this.getMovies();
  }
  render() {
    const { isLoading, movies } = this.state;
    return (
      <section className="container">
        {isLoading ? (
          <div className="loader">
            <span className="loader__text">Loading...</span>
          </div>
        ) : (
          <div className="movies">
            {movies.map((movie) => {
              return (
                <Movie
                  key={movie.id}
                  id={movie.id}
                  year={movie.year}
                  title={movie.title}
                  summary={movie.summary}
                  poster={movie.medium_cover_image}
                  genres={movie.genres}
                />
              );
            })}
          </div>
        )}
      </section>
    );
  }
}
// "https://yts-proxy.now.sh/list_movies.json"
export default Home;
