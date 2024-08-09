import React from "react";
import { Link } from "react-router-dom";

function MovieCard({ movie }) {
  return (
    <article>
      <h2>{movie.title}</h2>
      <Link to={`/movie/${movie.id}`}>View Info</Link> {/* Ensure path matches */}
    </article>
  );
}

export default MovieCard;
