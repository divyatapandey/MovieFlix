import React from "react";
import MovieCard from "./Moviecard";

const MovieList = ({ movies, addstar, substar, favbtn, cartbtn }) => {
  return (
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      {movies.map((movie) => (
        <MovieCard
          movie={movie}
          addstar={addstar}
          substar={substar}
          favbtn={favbtn}
          cartbtn={cartbtn}
          key={movie.id}
        />
      ))}
    </div>
  );
};

export default MovieList;
