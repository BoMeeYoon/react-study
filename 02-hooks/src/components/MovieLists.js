import React from "react";
import { getMovieLists } from "../api/MovieApi.js";
import useAsync from "../api/MovieAsync.js";
import MovieList from "./MovieList.js";

const log = console.log;

export default function MovieLists() {
  const [state] = useAsync(getMovieLists, []);
  const { loading, data: movies, error } = state;
  if (loading) return <div>로딩중</div>;
  if (error) return <div>에러</div>;
  if (!movies) return null;

  return (
    <section className="container">
      <div className="movies">
        {movies.map((movie, index) => (
          <MovieList key={index} movie={movie} />
        ))}
      </div>
    </section>
  );
}
