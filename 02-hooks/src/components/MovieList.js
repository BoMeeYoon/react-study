import React, { useState } from "react";
import MovieDetail from "./MovieDetail.js";


export default function MovieList({ movie }) {
  const { id, year, title, summary, poster, genres } = movie;
  const [movieId, setMovieId] = useState(null);
  const onClick = () => {
    setMovieId(id);
  };
  return (
    <>
      {movieId ? (
        <MovieDetail movieId />
      ) : (
        <div className="movie" onClick={onClick}>
          <img src={poster} alt={title} title={title} />
          <div className="movie__data">
            <h3 className="movie__title">{title}</h3>
            <h5 className="year">{year}</h5>
            <ul className="genres">
              {genres.map((genre, index) => (
                <li key={index} className="genres__genre">
                  {genre}
                </li>
              ))}
            </ul>
            <p className="movie__summary">{summary}</p>
          </div>
        </div>
      )}
    </>
  );
}
