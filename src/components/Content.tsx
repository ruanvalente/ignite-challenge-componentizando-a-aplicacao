import { MovieCard } from "./MovieCard";

import { MovieResponseProps } from "../types/movieResponseProps";

interface MovieProps {
  movies: MovieResponseProps[];
}

export function Content({movies}: MovieProps) {
  return (
    <div className="movies-list">
      {movies.map((movie) => (
        <MovieCard
          key={movie.imdbID}
          title={movie.Title}
          poster={movie.Poster}
          runtime={movie.Runtime}
          rating={movie.Ratings[0].Value}
        />
      ))}
    </div>
  );
}
